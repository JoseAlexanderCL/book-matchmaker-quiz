import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
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
      <main className="min-h-screen bg-gradient-night flex flex-col">
        <div className="flex-1 flex items-center justify-center">
          <p className="text-muted-foreground">No hay resultado. Comienza el test.</p>
          <Button className="ml-4" onClick={() => navigate("/")}>Inicio</Button>
        </div>
        <div className="h-[20vh] bg-gradient-reflection" aria-hidden="true" />
      </main>
    );
  }

  const bookLd = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: resumen.selected.titulo,
    datePublished: resumen.selected.anio,
    description: resumen.selected.sinopsis ?? resumen.texto,
    ...(resumen.selected.datoCurioso && {
      comment: {
        "@type": "Comment",
        text: resumen.selected.datoCurioso,
      },
    }),
  };

  // Animations
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.05 } },
  };
  const item = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 0.61, 0.36, 1] } },
  };

  return (
    <main className="min-h-screen bg-gradient-night flex flex-col">
      <Helmet>
        <title>Resultado – {resumen.selected.titulo}</title>
        <meta name="description" content={`Tu libro recomendado: ${resumen.selected.titulo}.`} />
        <link rel="canonical" href="/resultado" />
        <script type="application/ld+json">{JSON.stringify(bookLd)}</script>
      </Helmet>

      <motion.section
        className="container py-10 sm:py-16 flex-1"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-3xl mx-auto">
          <Card className="shadow-elegant">
            <CardHeader>
              <motion.h1 variants={item} className="text-2xl font-semibold leading-none tracking-tight">
                Resultado del test: tu libro recomendado 📚
              </motion.h1>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <motion.img
                  variants={item}
                  src={coverSrc}
                  alt={`Portada de ${resumen.selected.titulo}`}
                  loading="lazy"
                  decoding="async"
                  className="w-32 h-48 object-cover rounded-md shadow-elegant hover-scale"
                />
                <motion.div variants={item}>
                  <p className="text-lg font-semibold">
                    {resumen.selected.titulo} <span className="text-muted-foreground">({resumen.selected.anio})</span>
                  </p>
                  {resumen.selected.sinopsis && (
                    <p className="mt-2 text-sm text-muted-foreground">
                      {resumen.selected.sinopsis}
                    </p>
                  )}
                  {resumen.selected.datoCurioso && (
                    <p className="mt-2 text-sm text-muted-foreground">
                      <span className="font-medium">¿Sabías que…?</span> {resumen.selected.datoCurioso}
                    </p>
                  )}
                </motion.div>
              </div>

              <motion.p variants={item} className="text-lg">
                {frase}
              </motion.p>

              <motion.div variants={item} className="flex flex-wrap gap-3">
                <Button variant="secondary" onClick={() => navigate("/preguntas")}>Volver a responder</Button>
                <Button variant="hero" onClick={() => navigate("/")}>Volver al inicio</Button>
              </motion.div>
            </CardContent>
          </Card>
        </div>
      </motion.section>
      <div className="h-[20vh] bg-gradient-reflection" aria-hidden="true" />
    </main>
  );
}
