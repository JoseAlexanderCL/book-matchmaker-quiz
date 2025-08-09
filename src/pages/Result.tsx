import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { Sparkles, RefreshCw, ArrowLeft } from "lucide-react";
import type { ComputedResult, FinalSelection } from "@/lib/quiz/scoring";
import { placeholderMap } from "@/lib/results/coverPlaceholders";

function getCoverPlaceholder(title: string) {
  const index = placeholderMap[title as keyof typeof placeholderMap];
  if (index) {
    return `/covers/placeholder${index}.jpg`;
  }
  return "/placeholder.svg";
}

const mbtiEmojiMap = {
  // Analistas
  INTJ: "🥶☕", // Cold brew: estratégico, calculador
  INTP: "🧪☕", // Café experimental/laboratorio
  ENTJ: "💼☕", // Espresso doble, directo al grano
  ENTP: "🤹‍♂️☕", // Latte con espuma artística

  // Diplomáticos
  INFJ: "🌿☕", // Matcha latte (tranquilo, reflexivo)
  INFP: "🍫☕", // Mocha dulce y soñador
  ENFJ: "🌞☕", // Cappuccino brillante y cálido
  ENFP: "🌈☕", // Latte colorido/creativo

  // Centinelas
  ISTJ: "📏☕", // Café negro clásico
  ISFJ: "🧸☕", // Latte con leche tibia (cálido y protector)
  ESTJ: "📊☕", // Americano fuerte, productivo
  ESFJ: "🍪☕", // Café con galleta, social y acogedor

  // Exploradores
  ISTP: "🛠☕", // Espresso rápido para la acción
  ISFP: "🎨☕", // Latte arte con dibujos
  ESTP: "🔥☕", // Café con especias (picante y atrevido)
  ESFP: "🎉☕", // Frappé dulce y llamativo
};

type QuizResult = ComputedResult & FinalSelection;

interface Stored {
  answers: Record<number, string>;
  res: QuizResult;
}

export default function Result() {
  const navigate = useNavigate();
  const [data, setData] = useState<Stored | null>(null);

  useEffect(() => {
    const raw = sessionStorage.getItem("quizResult");
    if (!raw) return;
    try {
      setData(JSON.parse(raw) as Stored);
    } catch {
      // ignore parsing errors
    }
  }, []);

  const resumen = useMemo(() => {
    if (!data) return null;
    return data.res;
  }, [data]);

  const coverSrc = useMemo(() => {
    if (!resumen) return "";
    return getCoverPlaceholder(resumen.selected.titulo);
  }, [resumen]);

  const frase = useMemo(() => {
    if (!resumen) return "";
    return resumen.texto;
  }, [resumen]);

  if (!resumen) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-100 p-4">
        <div className="flex min-h-screen items-center justify-center">
          <p className="text-muted-foreground">No hay resultado. Comienza el test.</p>
          <button
            className="ml-4 px-4 py-2 rounded-full bg-gradient-to-r from-orange-400 to-amber-400 text-white shadow"
            onClick={() => navigate("/")}
          >
            Inicio
          </button>
        </div>
      </main>
    );
  }

  const bookLd = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: resumen.selected.titulo,
    author: resumen.selected.autor,
    datePublished: resumen.selected.anio,
    description: resumen.selected.sinopsis ?? resumen.texto,
    ...(resumen.selected.datoCurioso && {
      comment: {
        "@type": "Comment",
        text: resumen.selected.datoCurioso,
      },
    }),
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-100 p-4">
      <Helmet>
        <title>Resultado – {resumen.selected.titulo}</title>
        <meta name="description" content={`Tu libro recomendado: ${resumen.selected.titulo}.`} />
        <link rel="canonical" href="/resultado" />
        <script type="application/ld+json">{JSON.stringify(bookLd)}</script>
      </Helmet>

      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-amber-100/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
            <Sparkles className="w-5 h-5 text-amber-700" />
            <h1 className="text-xl font-bold text-amber-800">Tu libro recomendado</h1>
          </div>
        </div>

        <div className="bg-amber-50/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-amber-200/50">
          <div className="p-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="bg-gradient-to-r from-amber-600 via-yellow-700 to-orange-700 rounded-xl p-4 text-center">
                  <h2 className="text-lg font-bold text-amber-50">{resumen.selected.titulo}</h2>
                </div>

                <div className="bg-gradient-to-r from-amber-600 via-yellow-700 to-orange-700 rounded-xl p-3 text-center">
                  <span className="text-amber-50 font-medium">{`${resumen.selected.autor} (${resumen.selected.anio})`}</span>
                </div>

                <div className="bg-gradient-to-br from-amber-600 via-yellow-700 to-orange-700 rounded-xl p-4 flex items-center justify-center flex-1">
                  <div className="bg-amber-50 p-2 rounded-lg shadow-lg">
                    <img
                      src={coverSrc}
                      alt={`Portada de ${resumen.selected.titulo}`}
                      className="w-32 h-48 object-cover rounded-md"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-600 via-yellow-700 to-orange-700 rounded-xl p-4">
                <div className="h-full flex flex-col">
                  <h3 className="text-amber-50 font-semibold text-center mb-4">Sinopsis</h3>
                  {resumen.selected.sinopsis && (
                    <p className="text-amber-50/90 text-sm leading-relaxed text-center flex-1 flex items-center">
                      {resumen.selected.sinopsis}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {resumen.selected.datoCurioso && (
              <div className="mt-5 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-4 border-l-4 border-amber-400">
                <h3 className="font-semibold text-gray-700 text-sm mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  ¿Sabías que...?
                </h3>
                <p className="text-gray-600 text-sm italic">{resumen.selected.datoCurioso}</p>
              </div>
            )}

            <div className="mt-5 bg-blue-50 rounded-xl p-4">
              <h3 className="font-semibold text-gray-700 text-sm mb-3 flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center">
                  <span className="text-blue-700 font-bold text-xs">
                    {mbtiEmojiMap[resumen.mbti] || "☕"}
                  </span>
                </div>
                Tu perfil lector
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">{frase}</p>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-medium py-3 px-4 rounded-xl shadow-md transform transition-all hover:scale-105 flex items-center justify-center gap-2 text-sm"
                onClick={() => navigate("/preguntas")}
              >
                <RefreshCw className="w-4 h-4" />
                Volver a responder
              </button>

              <button
                className="flex-1 bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 px-4 rounded-xl shadow-md border border-amber-200 transform transition-all hover:scale-105 flex items-center justify-center gap-2 text-sm"
                onClick={() => navigate("/")}
              >
                <ArrowLeft className="w-4 h-4" />
                Volver al inicio
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
