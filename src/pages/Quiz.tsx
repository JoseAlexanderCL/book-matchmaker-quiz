import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { questions, type OptionKey } from "@/lib/quiz/questions";
import { computeResult } from "@/lib/quiz/scoring";
import { getCatalog } from "@/hooks/use-catalog";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Stairs";
import { useSession } from "@/hooks/use-session";

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, OptionKey>>({});
  const navigate = useNavigate();
  const { endSession } = useSession();

  const progress = Math.round(((current + 1) / questions.length) * 100);

  const onSelect = (opt: OptionKey) => {
    const q = questions[current];
    setAnswers((a) => ({ ...a, [q.id]: opt }));
    // auto-advance except last
    if (current < questions.length - 1) setCurrent((i) => i + 1);
  };

  const canNext = current < questions.length - 1;
  const canPrev = current > 0;

  const goPrev = () => canPrev && setCurrent((i) => i - 1);
  const goNext = () => canNext && setCurrent((i) => i + 1);

  const allAnswered = useMemo(() =>
    questions.every((q) => answers[q.id] !== undefined), [answers]
  );

  const finish = () => {
    if (!allAnswered) return;
    const res = computeResult(answers, getCatalog());
    try {
      endSession({
        mbti: res.mbti,
        selected_book: res.selected.titulo,
        score_details: {
          scores: res.scores,
          diffs: res.diffs,
          temporalPreference: res.temporalPreference,
          answers,
          selected: res.selected,
        },
      });
    } catch {
      // ignore errors ending session
    }
    sessionStorage.setItem("quizResult", JSON.stringify({ answers, res }));
    navigate("/resultado");
  };

  const q = questions[current];

  return (
    <Layout backgroundColor="4f5872" revealOnEnter>
      <main className="min-h-screen bg-gradient-night flex flex-col">
        <Helmet>
          <title>Test lector – ¿Qué libro del club eres?</title>
          <meta name="description" content="Responde 16 preguntas y descubre tu tipo lector MBTI y tu libro ideal del club." />
          <link rel="canonical" href="/preguntas" />
        </Helmet>

        <section className="container py-10 sm:py-16 flex-1">
          <div className="max-w-full md:max-w-3xl mx-auto">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl">Pregunta {current + 1} de {questions.length}</CardTitle>
                <Progress value={progress} />
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg sm:text-xl font-medium">{q.text}</p>
                <div className="grid gap-3">
                  {q.options.map((o) => (
                    <Button
                      key={o.key}
                      variant={answers[q.id] === o.key ? "secondary" : "outline"}
                      className="justify-start h-auto py-5 text-lg sm:text-xl"
                      onClick={() => onSelect(o.key)}
                      aria-pressed={answers[q.id] === o.key}
                      style={{ backgroundColor: "#ffeccb" }}
                    >
                      <span className="font-semibold mr-2">{o.key})</span>
                      {o.label}
                    </Button>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-2">
                  <Button variant="ghost" onClick={goPrev} disabled={!canPrev}>Anterior</Button>
                  {current < questions.length - 1 ? (
                    <Button onClick={goNext} disabled={!canNext}>Siguiente</Button>
                  ) : (
                    <Button variant="hero" onClick={finish} disabled={!allAnswered} className="animate-floaty">Finalizar</Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        <div className="h-[20vh] bg-gradient-reflection" aria-hidden="true" />
      </main>
    </Layout>
  );
}
