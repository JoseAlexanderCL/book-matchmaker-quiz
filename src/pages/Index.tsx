import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useParallax } from "@/components/hooks/useParallax";
import Layout from "@/components/Stairs";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

const Index = () => {
  useParallax();
  const navigate = useNavigate();
  const [closing, setClosing] = useState(false);

  return (
    <AnimatePresence
      mode="wait" // ensure exit animation completes before navigating
      onExitComplete={() => navigate("/preguntas")}
    >
      {!closing && (
        <Layout backgroundColor="hsl(var(--background))">
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
            </section>
            <section className="container flex items-center">
              <div className="mx-auto text-center max-w-full md:max-w-3xl py-16">
                <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">¿Qué libro del club eres?</h1>
                <p className="text-lg sm:text-xl text-muted-foreground mb-8">En el Club de Lectura hemos leído ¡más de 78 libros distintos! Contesta las preguntas y descubre cuál es el libro que te representa. </p>
                <div className="flex items-center justify-center">
                  <Button
                    variant="hero"
                    className="px-8 py-6 text-base"
                    onClick={() => setClosing(true)}
                  >
                    Comenzar
                  </Button>
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
