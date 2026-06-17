import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { Sparkles, RefreshCw, ArrowLeft, Image, Wand2 } from "lucide-react";
import type { ComputedResult, FinalSelection } from "@/lib/quiz/scoring";
import { placeholderMap } from "@/lib/results/coverPlaceholders";
import { ShareButton } from "@/components/ShareButton";
import { shareAsImage } from "@/lib/ShareAsImage";
import { shareAsImage2 } from "@/lib/ShareAsImage2";

function getCoverPlaceholder(title: string) {
  const index = placeholderMap[title as keyof typeof placeholderMap];
  if (index) {
    return `/covers/placeholder${index}.jpg`;
  }
  return "/placeholder.svg";
}

const mbtiEmojiMap = {
  // Analistas
  INTJ: "🥶", // Cold brew: estratégico, calculador
  INTP: "🧪", // Café experimental/laboratorio
  ENTJ: "💼", // Espresso doble, directo al grano
  ENTP: "🤹‍♂️", // Latte con espuma artística

  // Diplomáticos
  INFJ: "🌿", // Matcha latte (tranquilo, reflexivo)
  INFP: "🍫", // Mocha dulce y soñador
  ENFJ: "🌞", // Cappuccino brillante y cálido
  ENFP: "🌈", // Latte colorido/creativo

  // Centinelas
  ISTJ: "📏", // Café negro clásico
  ISFJ: "🧸", // Latte con leche tibia (cálido y protector)
  ESTJ: "📊", // Americano fuerte, productivo
  ESFJ: "🍪", // Café con galleta, social y acogedor

  // Exploradores
  ISTP: "🛠", // Espresso rápido para la acción
  ISFP: "🎨", // Latte arte con dibujos
  ESTP: "🔥", // Café con especias (picante y atrevido)
  ESFP: "🎉", // Frappé dulce y llamativo
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
    return resumen.selected.portada || getCoverPlaceholder(resumen.selected.titulo);
  }, [resumen]);

  const isExternalCover = useMemo(() => /^https?:\/\//.test(coverSrc), [coverSrc]);

  const frase = useMemo(() => {
    if (!resumen) return "";
    return resumen.texto;
  }, [resumen]);

  if (!resumen) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-100 px-3 py-4 sm:p-4">
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
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-100 px-3 py-4 sm:p-4">
      <Helmet>
        <title>Resultado – {resumen.selected.titulo}</title>
        <meta name="description" content={`Tu libro recomendado: ${resumen.selected.titulo}.`} />
        <link rel="canonical" href="/resultado" />
        <script type="application/ld+json">{JSON.stringify(bookLd)}</script>
      </Helmet>

      <div
        id="book-recommendation"
        className="max-w-4xl mx-auto px-3 sm:px-4"
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-4 sm:mb-6">
          <img
            src="/lovable-uploads/4f198d0a-3d6d-4649-aa26-df0774903e16.png"
            alt="Club de Lectura Santiago"
            className="w-16 sm:w-20 lg:w-24 h-auto opacity-80"
          />
          <div className="inline-flex items-center gap-2 bg-amber-100/80 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full shadow-md">
            <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 text-amber-700" />
            <h1 className="text-base sm:text-lg lg:text-xl font-bold text-amber-800">Tu libro del Club de Lectura es:</h1>
          </div>
        </div>

        <div className="bg-amber-50/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-amber-200/50 max-w-4xl mx-auto">
          <div className="p-4 sm:p-5 lg:p-6 max-w-3xl mx-auto">
            <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto">
              {/* Portada */}
              <div className="bg-gradient-to-br from-amber-600 via-yellow-700 to-orange-700 rounded-xl p-3 flex items-center justify-center max-w-full mx-auto">
                <div className="bg-amber-50 p-2 rounded-lg shadow-lg">
                  <img
                    src={coverSrc}
                    alt={`Portada de ${resumen.selected.titulo}`}
                    className="w-full max-w-[12rem] sm:max-w-[16rem] aspect-[2/3] object-cover rounded-md mx-auto"
                    crossOrigin={isExternalCover ? "anonymous" : undefined}
                  />
                </div>
              </div>

              {/* Información del libro */}
              <div className="space-y-4 max-w-md mx-auto">
                {/* Título */}
                <div className="bg-gradient-to-r from-amber-600 via-yellow-700 to-orange-700 rounded-xl p-4 text-center">
                  <h2 className="text-base sm:text-lg lg:text-xl font-bold text-amber-50 leading-tight">{resumen.selected.titulo}</h2>
                </div>

                {/* Autor */}
                <div className="author-container bg-gradient-to-r from-amber-600 via-yellow-700 to-orange-700 rounded-xl p-3 text-center">
                  <span className="text-amber-50 font-medium text-sm lg:text-base">{`${resumen.selected.autor} (${resumen.selected.anio})`}</span>
                </div>

                {/* Sinopsis */}
                {resumen.selected.sinopsis && (
                  <div className="synopsis-container bg-gradient-to-br from-amber-600 via-yellow-700 to-orange-700 rounded-xl p-4">
                    <h3 className="text-amber-50 font-semibold text-center mb-4 text-sm lg:text-base">Sinopsis</h3>
                    <p className="text-amber-50/90 text-sm lg:text-base leading-relaxed text-center">
                      {resumen.selected.sinopsis}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {resumen.selected.datoCurioso && (
              <div className="mt-4 lg:mt-5 bg-gradient-to-r from-stone-200 to-amber-100 rounded-xl p-4 border-l-4 border-stone-500">
                <h3 className="font-semibold text-gray-700 text-sm lg:text-base mb-2 flex items-center gap-2">
                  <Sparkles className="w-5 lg:w-4 h-5 lg:h-4 text-stone-600" />
                  ¿Sabías que...?
                </h3>
                <p className="text-gray-600 text-sm lg:text-base italic leading-relaxed">{resumen.selected.datoCurioso}</p>
              </div>
            )}

            <div className="mt-4 lg:mt-5 bg-blue-50 rounded-xl p-4">
              <h3 className="font-semibold text-gray-700 text-sm lg:text-base mb-3 flex items-center gap-2">
                <div className="w-7 lg:w-6 h-7 lg:h-6 bg-blue-200 rounded-full flex items-center justify-center">
                  <span className="text-blue-700 font-bold text-sm lg:text-xs">
                    {mbtiEmojiMap[resumen.mbti] || "☕"}
                  </span>
                </div>
                Tu perfil lector
              </h3>
              <p className="text-gray-700 text-sm lg:text-base leading-relaxed">{frase}</p>
            </div>

            <div className="flex flex-col gap-4 mt-6">
              <div>
                <p className="text-center text-xs font-semibold text-amber-600 uppercase tracking-widest mb-3">Compartir mi resultado</p>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    className="bg-gradient-to-br from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-medium py-3 px-3 rounded-xl shadow-md transition-all hover:scale-105 flex flex-col items-center justify-center gap-1.5 text-sm min-h-[64px]"
                    onClick={() => shareAsImage(resumen.selected.titulo)}
                  >
                    <Image className="w-5 h-5" />
                    <span>Imagen clásica</span>
                  </button>
                  <button
                    className="bg-gradient-to-br from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white font-medium py-3 px-3 rounded-xl shadow-md transition-all hover:scale-105 flex flex-col items-center justify-center gap-1.5 text-sm min-h-[64px]"
                    onClick={() => shareAsImage2(resumen.selected.titulo)}
                  >
                    <Wand2 className="w-5 h-5" />
                    <span>Imagen nueva</span>
                  </button>
                </div>
              </div>
              <ShareButton bookTitle={resumen.selected.titulo} />
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-medium py-4 lg:py-3 px-4 rounded-xl shadow-md transform transition-all hover:scale-105 flex items-center justify-center gap-2 text-sm lg:text-base min-h-[48px] lg:min-h-[auto]"
                  onClick={() => navigate("/preguntas")}
                >
                  <RefreshCw className="w-5 lg:w-4 h-5 lg:h-4" />
                  Volver a responder
                </button>

                <button
                  className="flex-1 bg-white hover:bg-gray-50 text-gray-700 font-medium py-4 lg:py-3 px-4 rounded-xl shadow-md border border-amber-200 transform transition-all hover:scale-105 flex items-center justify-center gap-2 text-sm lg:text-base min-h-[48px] lg:min-h-[auto]"
                  onClick={() => navigate("/")}
                >
                  <ArrowLeft className="w-5 lg:w-4 h-5 lg:h-4" />
                  Volver al inicio
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
