import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { CozyScene } from "@/components/CozyScene";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <main>
      <Helmet>
        <title>¿Qué libro del club eres? | Test MBTI lector</title>
        <meta name="description" content="Responde 16 preguntas y descubre qué libro del club coincide con tu personalidad lectora." />
        <link rel="canonical" href="/" />
      </Helmet>
      <CozyScene>
        <Link to="/quiz">
          <Button
            variant="hero"
            className="absolute top-32 right-4 px-8 py-6 text-base animate-floaty text-primary-foreground"
          >
            Comenzar
          </Button>
        </Link>
        <section className="container min-h-[70vh] flex items-center">
          <div className="mx-auto text-center max-w-3xl py-16">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">¿Qué libro del club eres?</h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8">Un test de 16 preguntas inspirado en MBTI para recomendarte el título perfecto según tu estilo lector. Rápido, divertido y pensado para club de lectura.</p>
            <div className="flex items-center justify-center">
              <Link to="/admin"><Button variant="outline">Editar catálogo</Button></Link>
            </div>
          </div>
        </section>
      </CozyScene>
    </main>
  );
};

export default Index;
