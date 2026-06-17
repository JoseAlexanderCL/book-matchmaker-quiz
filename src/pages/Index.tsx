import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useParallax } from "@/components/hooks/useParallax";
import Layout from "@/components/Stairs";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useSession } from "@/hooks/use-session";
import { BookMarked } from "lucide-react";

const Index = () => {
  useParallax();
  const navigate = useNavigate();
  const [closing, setClosing] = useState(false);
  const { startSession } = useSession();

  // Fallback navigation in case exit animation fails to trigger
  useEffect(() => {
    if (closing) {
      const timer = setTimeout(() => navigate("/preguntas"), 650);
      return () => clearTimeout(timer);
    }
  }, [closing, navigate]);

  return (
    <AnimatePresence
      mode="wait" // ensure exit animation completes before navigating
      onExitComplete={() => navigate("/preguntas")}
    >
      {!closing && (
        // Use dark blue background color without transparency
        <Layout key="layout" backgroundColor="#4F5872">
          <main>
            <Helmet>
              <title>¿Qué libro del club de lectura eres? |</title>
              <meta name="description" content="Responde 16 preguntas y descubre qué libro del club coincide con tu personalidad lectora." />
              <link rel="canonical" href="/" />
            </Helmet>
            <section className="relative h-[60vh] overflow-hidden">
              <img
                src="/bg.webp"
                alt=""
                data-speed-x="0.05"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#4F5872] to-transparent pointer-events-none" aria-hidden="true" />
            </section>
            <section className="container flex items-center">
              <div className="mx-auto text-center max-w-full md:max-w-3xl py-12">
                <div className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/25 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-5 tracking-wide">
                  <BookMarked className="w-3.5 h-3.5" />
                  78+ libros en el catálogo
                </div>
                <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">¿Qué libro del club eres?</h1>
                <p className="text-lg sm:text-xl text-foreground/70 mb-8">En el Club de Lectura hemos leído ¡más de 78 libros distintos! Contesta las preguntas y descubre cuál es el libro que te representa.</p>
                <div className="flex flex-col items-center justify-center gap-6">
                  <Button
                    variant="hero"
                    className="px-8 py-6 text-base"
                    onClick={() => { startSession(); setClosing(true); }}
                  >
                    Comenzar
                  </Button>
                  <img
                    src="/lovable-uploads/2b97ea4b-8d5e-49f2-9d8f-8e77130e03b0.png"
                    alt="Club de Lectura Santiago"
                    className="w-32 h-auto opacity-80"
                  />
                  <p className="text-xs text-foreground/40">hecho por Alex</p>
                </div>
              </div>
            </section>
          </main>
        </Layout>
      )}
    </AnimatePresence>
  );
};

export default Index;
