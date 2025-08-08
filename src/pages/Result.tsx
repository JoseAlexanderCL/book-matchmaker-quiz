import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import type { ComputedResult, FinalSelection } from "@/lib/quiz/scoring";

function getCoverPlaceholder(title: string) {
  const total = 90; // número de portadas de relleno
  const hash = Array.from(title).reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const index = (Math.abs(hash) % total) + 1;
  return `/covers/placeholder${index}.jpg`;
}

function removeMbti(text: string) {
  return text
    .replace(/\b[EI][SN][TF][JP]\b/gi, "")
    .replace(/\s{2,}/g, " ")
    .replace(/\s+([,;:.!])/g, "$1")
    .trim();
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
    return removeMbti(resumen.texto);
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
  };

  return (
    <main className="min-h-screen bg-gradient-night flex flex-col">
      <Helmet>
        <title>Resultado – {resumen.selected.titulo}</title>
        <meta name="description" content={`Tu libro recomendado: ${resumen.selected.titulo}.`} />
        <link rel="canonical" href="/resultado" />
        <script type="application/ld+json">{JSON.stringify(bookLd)}</script>
      </Helmet>

      <section className="container py-10 sm:py-16 flex-1">
        <div className="max-w-3xl mx-auto">
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl">¡Este eres tú en el club! 📚</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <img
                  src={coverSrc}
                  alt={`Portada de ${resumen.selected.titulo}`}
                  className="w-32 h-48 object-cover rounded-md"
                />
                <div>
                  <p className="text-lg font-semibold">{resumen.selected.titulo} <span className="text-muted-foreground">({resumen.selected.anio})</span></p>
                </div>
              </div>

              <p className="text-lg">{frase}</p>

              <div className="flex flex-wrap gap-3">
                <Button variant="secondary" onClick={() => navigate("/preguntas")}>Volver a responder</Button>
                <Button variant="hero" onClick={() => navigate("/")}>Volver al inicio</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <div className="h-[20vh] bg-gradient-reflection" aria-hidden="true" />
    </main>
  );
}
