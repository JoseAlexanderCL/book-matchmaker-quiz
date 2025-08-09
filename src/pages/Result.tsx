import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, RefreshCw, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { ComputedResult, FinalSelection } from "@/lib/quiz/scoring";
import { placeholderMap } from "@/lib/results/coverPlaceholders";

function getCoverPlaceholder(title: string) {
  const index = placeholderMap[title as keyof typeof placeholderMap];
  if (index) {
    return `/covers/placeholder${index}.jpg`;
  }
  return "/placeholder.svg";
}

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

  // Animaciones (fade-in más lento y blur-in en la portada)
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.28, delayChildren: 0.12 } },
  };
  const item = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.95, ease: [0.22, 0.61, 0.36, 1] },
    },
  };
  const imageItem = {
    hidden: { opacity: 0, y: 12, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.05, ease: [0.22, 0.61, 0.36, 1] },
    },
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-100 p-4">
      <Helmet>
        <title>Resultado – {resumen.selected.titulo}</title>
        <meta name="description" content={`Tu libro recomendado: ${resumen.selected.titulo}.`} />
        <link rel="canonical" href="/resultado" />
        <script type="application/ld+json">{JSON.stringify(bookLd)}</script>
      </Helmet>

      <motion.section
        className="max-w-3xl mx-auto space-y-6"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={item}
          className="flex items-center gap-2 text-2xl font-semibold leading-none tracking-tight"
        >
          <Sparkles className="h-5 w-5 text-amber-500" />
          Resultado del test: tu libro recomendado
        </motion.h1>

        <div className="bg-amber-50/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-amber-200/50 p-6 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-amber-50 p-2 rounded-lg shadow-lg">
                <motion.img
                  variants={imageItem}
                  src={coverSrc}
                  alt={`Portada de ${resumen.selected.titulo}`}
                  loading="lazy"
                  decoding="async"
                  style={{ willChange: "opacity, transform, filter" }}
                  className="w-full h-auto object-cover rounded-md"
                />
              </div>
              <motion.p variants={item} className="text-lg font-semibold">
                {resumen.selected.titulo}
                <span className="text-muted-foreground">
                  {` ${resumen.selected.autor} (${resumen.selected.anio})`}
                </span>
              </motion.p>
            </div>
            <motion.div variants={item}>
              {resumen.selected.sinopsis && (
                <p className="text-sm text-muted-foreground">{resumen.selected.sinopsis}</p>
              )}
            </motion.div>
          </div>

          {resumen.selected.datoCurioso && (
            <motion.div
              variants={item}
              className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-4 border-l-4 border-amber-400"
            >
              <p className="text-sm text-muted-foreground">
                <span className="font-medium inline-flex items-center gap-1">
                  <Sparkles className="h-4 w-4 text-amber-500" />¿Sabías que...?
                </span>{" "}
                {resumen.selected.datoCurioso}
              </p>
            </motion.div>
          )}

          <motion.div variants={item} className="bg-blue-50 rounded-xl p-4 space-y-2">
            <h2 className="text-lg font-medium">Tu perfil lector</h2>
            <Badge>{resumen.mbti}</Badge>
            <p>{frase}</p>
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap gap-3">
            <button
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-400 to-amber-400 text-white border border-amber-300 shadow"
              onClick={() => navigate("/preguntas")}
            >
              <RefreshCw className="h-4 w-4" />
              Volver a responder
            </button>
            <button
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 text-white border border-amber-300 shadow"
              onClick={() => navigate("/")}
            >
              <ArrowLeft className="h-4 w-4" />
              Volver al inicio
            </button>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
