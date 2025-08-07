import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import type { FinalSelection } from "@/lib/quiz/scoring";

interface Stored {
  answers: Record<number, string>;
  res: any;
}

export default function Result() {
  const navigate = useNavigate();
  const [data, setData] = useState<Stored | null>(null);

  useEffect(() => {
    const raw = sessionStorage.getItem("quizResult");
    if (!raw) return;
    try { setData(JSON.parse(raw) as Stored); } catch {}
  }, []);

  const resumen = useMemo(() => {
    if (!data) return null;
    const r = data.res as {
      mbti: string;
      temporalPreference: "R" | "A";
      dominantPair: string;
      selected: { titulo: string; anio: number; portada?: string; sinopsis?: string };
      texto: string;
    };
    return r;
  }, [data]);

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

  const pref = resumen.temporalPreference === "R" ? "Reciente" : "Antiguo";

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
        <meta name="description" content={`Tu tipo ${resumen.mbti} y tu libro recomendado: ${resumen.selected.titulo}.`} />
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
              <div className="grid gap-2">
                <p className="text-lg"><span className="font-semibold">Tipo MBTI:</span> {resumen.mbti}</p>
                <p className="text-lg"><span className="font-semibold">Preferencia temporal:</span> {pref}</p>
                <p className="text-lg"><span className="font-semibold">Dicotomía dominante:</span> {resumen.dominantPair}</p>
              </div>

              <div className="p-5 rounded-lg border bg-card">
                <h2 className="text-xl font-semibold mb-2">Libro recomendado</h2>
                <p className="text-lg">{resumen.selected.titulo} <span className="text-muted-foreground">({resumen.selected.anio})</span></p>
                {resumen.selected.sinopsis && (
                  <p className="mt-2 text-muted-foreground">{resumen.selected.sinopsis}</p>
                )}
              </div>

              <p className="text-lg">{resumen.texto}</p>

              <div className="flex flex-wrap gap-3">
                <Button variant="secondary" onClick={() => navigate("/quiz")}>Volver a responder</Button>
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
