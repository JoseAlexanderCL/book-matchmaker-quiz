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
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

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
    <Layout backgroundColor="#4F5872" revealOnEnter>
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
                <div className="flex items-center justify-between mb-1">
                  <CardTitle className="text-xl sm:text-2xl">
                    Pregunta <span className="text-accent">{current + 1}</span>
                    <span className="text-card-foreground/50 text-base font-normal"> / {questions.length}</span>
                  </CardTitle>
                  <span className="text-sm font-semibold text-card-foreground/60 bg-card-foreground/8 px-2.5 py-0.5 rounded-full tabular-nums">
                    {progress}%
                  </span>
                </div>
                <Progress value={progress} className="h-2" />
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg sm:text-xl font-medium">{q.text}</p>
                <div className="grid gap-3">
                  {q.options.map((o) => {
                    const isSelected = answers[q.id] === o.key;
                    return (
                    <button
                      key={o.key}
                      className={cn(
                        "justify-start h-auto py-4 px-5 text-lg sm:text-xl text-left w-full rounded-lg border transition-all duration-150 font-medium flex items-center gap-2",
                        isSelected
                          ? "bg-accent text-accent-foreground border-[hsl(29_70%_35%)] shadow-md"
                          : "bg-[hsl(35_72%_94%)] text-[hsl(284_11%_19%)] border-[hsl(35_55%_80%)] hover:bg-[hsl(35_72%_87%)] hover:border-accent/60 hover:shadow-sm"
                      )}
                      onClick={() => onSelect(o.key)}
                      aria-pressed={isSelected}
                    >
                      {isSelected
                        ? <Check className="w-4 h-4 shrink-0" />
                        : <span className="w-5 h-5 shrink-0 inline-flex items-center justify-center border border-current/40 rounded text-xs font-bold">{o.key}</span>
                      }
                      <span>{o.label}</span>
                    </button>
                    );
                  })}
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
            <div className="flex justify-center mt-8">
              <img 
                src="/lovable-uploads/2b97ea4b-8d5e-49f2-9d8f-8e77130e03b0.png" 
                alt="Club de Lectura Santiago" 
                className="w-32 h-auto opacity-80"
              />
            </div>
          </div>
        </section>
        <div className="h-[20vh] bg-gradient-reflection" aria-hidden="true" />
      </main>
    </Layout>
  );
}
