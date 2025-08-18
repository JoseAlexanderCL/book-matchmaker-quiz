import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { Sparkles, RefreshCw, ArrowLeft, Download } from "lucide-react";
import type { ComputedResult, FinalSelection } from "@/lib/quiz/scoring";
import { placeholderMap } from "@/lib/results/coverPlaceholders";
import { ShareButton } from "@/components/ShareButton";

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
    return getCoverPlaceholder(resumen.selected.titulo);
  }, [resumen]);

  const frase = useMemo(() => {
    if (!resumen) return "";
    return resumen.texto;
  }, [resumen]);

  const generateDownloadImage = async () => {
    if (!resumen) return;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions for vertical layout
    canvas.width = 800;
    canvas.height = 1200;

    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#fef3c7'); // amber-100
    gradient.addColorStop(0.5, '#fef3c7'); // amber-100
    gradient.addColorStop(1, '#fed7aa'); // orange-200
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add rounded rectangle for main content
    const margin = 40;
    const contentWidth = canvas.width - (margin * 2);
    const contentHeight = canvas.height - (margin * 2);
    
    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.beginPath();
    ctx.roundRect(margin, margin, contentWidth, contentHeight, 20);
    ctx.fill();

    let currentY = margin + 60;

    // Add title
    ctx.fillStyle = '#92400e'; // amber-800
    ctx.font = 'bold 42px Arial, sans-serif';
    ctx.textAlign = 'center';
    
    const titleLines = wrapText(ctx, resumen.selected.titulo, contentWidth - 80);
    titleLines.forEach(line => {
      ctx.fillText(line, canvas.width / 2, currentY);
      currentY += 50;
    });

    // Add author
    currentY += 20;
    ctx.font = '28px Arial, sans-serif';
    ctx.fillStyle = '#a16207'; // amber-700
    ctx.fillText(`${resumen.selected.autor} (${resumen.selected.anio})`, canvas.width / 2, currentY);

    // Load and draw book cover
    try {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
        img.src = coverSrc;
      });

      currentY += 60;
      const bookWidth = 240;
      const bookHeight = 360;
      const bookX = (canvas.width - bookWidth) / 2;
      
      // Add shadow for book
      ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
      ctx.shadowBlur = 15;
      ctx.shadowOffsetX = 5;
      ctx.shadowOffsetY = 5;
      
      ctx.drawImage(img, bookX, currentY, bookWidth, bookHeight);
      
      // Reset shadow
      ctx.shadowColor = 'transparent';
      ctx.shadowBlur = 0;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;

      currentY += bookHeight + 60;

    } catch (error) {
      console.error('Error loading book cover:', error);
      currentY += 400; // Skip space for book
    }

    // Add reader profile section
    const profileMargin = 60;
    const profileY = currentY;
    
    // Calculate profile content first to get proper height
    const emoji = mbtiEmojiMap[resumen.mbti] || "☕";
    ctx.font = '20px Arial, sans-serif';
    const profileLines = wrapText(ctx, frase, contentWidth - (profileMargin * 2) - 40);
    const profileHeight = 80 + (profileLines.length * 25) + 40; // emoji + title + text + padding
    
    // Profile background - covers entire section
    ctx.fillStyle = '#dbeafe'; // blue-100
    ctx.beginPath();
    ctx.roundRect(profileMargin, profileY, contentWidth - (profileMargin * 2), profileHeight, 15);
    ctx.fill();

    // Profile emoji
    ctx.font = '40px Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(emoji, canvas.width / 2, profileY + 50);

    // Profile title
    ctx.font = 'bold 24px Arial, sans-serif';
    ctx.fillStyle = '#374151'; // gray-700
    ctx.fillText('Tu perfil lector', canvas.width / 2, profileY + 90);

    // Profile text - justified
    ctx.font = '20px Arial, sans-serif';
    ctx.fillStyle = '#4b5563'; // gray-600
    ctx.textAlign = 'left';
    let profileTextY = profileY + 120;
    const textMargin = profileMargin + 20;
    const textWidth = contentWidth - (profileMargin * 2) - 40;
    
    profileLines.forEach((line, index) => {
      // For justified text (except last line), distribute spaces evenly
      if (index < profileLines.length - 1 && line.split(' ').length > 1) {
        const words = line.split(' ');
        const totalTextWidth = words.reduce((acc, word) => acc + ctx.measureText(word).width, 0);
        const spaceWidth = (textWidth - totalTextWidth) / (words.length - 1);
        
        let x = textMargin;
        words.forEach((word, wordIndex) => {
          ctx.fillText(word, x, profileTextY);
          x += ctx.measureText(word).width + (wordIndex < words.length - 1 ? spaceWidth : 0);
        });
      } else {
        // Last line or single word - left aligned
        ctx.fillText(line, textMargin, profileTextY);
      }
      profileTextY += 25;
    });

    // Download the image
    const link = document.createElement('a');
    link.download = `mi-libro-recomendado-${resumen.selected.titulo.replace(/[^a-zA-Z0-9]/g, '-')}.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  const wrapText = (ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] => {
    const words = text.split(' ');
    const lines: string[] = [];
    let currentLine = words[0];

    for (let i = 1; i < words.length; i++) {
      const testLine = currentLine + ' ' + words[i];
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth) {
        lines.push(currentLine);
        currentLine = words[i];
      } else {
        currentLine = testLine;
      }
    }
    lines.push(currentLine);
    return lines;
  };

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

      <div className="max-w-5xl mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <img 
            src="/lovable-uploads/4f198d0a-3d6d-4649-aa26-df0774903e16.png" 
            alt="Club de Lectura Santiago" 
            className="w-16 sm:w-20 lg:w-24 h-auto opacity-80"
          />
          <div className="inline-flex items-center gap-2 bg-amber-100/80 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full shadow-md">
            <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 text-amber-700" />
            <h1 className="text-base sm:text-lg lg:text-xl font-bold text-amber-800">Tu libro del Club de Lectura es:</h1>
          </div>
          <div className="w-16 sm:w-20 lg:w-24"></div> {/* Spacer for symmetry */}
        </div>

        <div className="bg-amber-50/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-amber-200/50">
          <div className="p-4 sm:p-5 lg:p-6">
            <div className="space-y-4">
              {/* Título */}
              <div className="bg-gradient-to-r from-amber-600 via-yellow-700 to-orange-700 rounded-xl p-4 text-center">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-amber-50 leading-tight">{resumen.selected.titulo}</h2>
              </div>

              {/* Autor */}
              <div className="bg-gradient-to-r from-amber-600 via-yellow-700 to-orange-700 rounded-xl p-3 text-center">
                <span className="text-amber-50 font-medium text-base lg:text-lg">{`${resumen.selected.autor} (${resumen.selected.anio})`}</span>
              </div>

              {/* Imagen */}
              <div className="bg-gradient-to-br from-amber-600 via-yellow-700 to-orange-700 rounded-xl p-4 flex items-center justify-center">
                <div className="bg-amber-50 p-2 rounded-lg shadow-lg">
                  <img
                    src={coverSrc}
                    alt={`Portada de ${resumen.selected.titulo}`}
                    className="w-40 h-60 sm:w-48 sm:h-72 lg:w-56 lg:h-80 object-cover rounded-md mx-auto"
                  />
                </div>
              </div>

              {/* Sinopsis */}
              {resumen.selected.sinopsis && (
                <div className="bg-gradient-to-br from-amber-600 via-yellow-700 to-orange-700 rounded-xl p-4">
                  <h3 className="text-amber-50 font-semibold text-center mb-4 text-lg lg:text-xl">Sinopsis</h3>
                  <p className="text-amber-50/90 text-base lg:text-lg leading-relaxed text-center">
                    {resumen.selected.sinopsis}
                  </p>
                </div>
              )}
            </div>

            {resumen.selected.datoCurioso && (
              <div className="mt-4 lg:mt-5 bg-gradient-to-r from-stone-200 to-amber-100 rounded-xl p-4 border-l-4 border-stone-500">
                <h3 className="font-semibold text-gray-700 text-base lg:text-sm mb-2 flex items-center gap-2">
                  <Sparkles className="w-5 lg:w-4 h-5 lg:h-4 text-stone-600" />
                  ¿Sabías que...?
                </h3>
                <p className="text-gray-600 text-base lg:text-sm italic leading-relaxed">{resumen.selected.datoCurioso}</p>
              </div>
            )}

            <div className="mt-4 lg:mt-5 bg-blue-50 rounded-xl p-4">
              <h3 className="font-semibold text-gray-700 text-base lg:text-sm mb-3 flex items-center gap-2">
                <div className="w-7 lg:w-6 h-7 lg:h-6 bg-blue-200 rounded-full flex items-center justify-center">
                  <span className="text-blue-700 font-bold text-sm lg:text-xs">
                    {mbtiEmojiMap[resumen.mbti] || "☕"}
                  </span>
                </div>
                Tu perfil lector
              </h3>
              <p className="text-gray-700 text-base lg:text-sm leading-relaxed">{frase}</p>
            </div>

            <div className="flex flex-col gap-4 mt-6">
              <button
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-medium py-4 lg:py-3 px-4 rounded-xl shadow-md transform transition-all hover:scale-105 flex items-center justify-center gap-2 text-base lg:text-sm min-h-[48px] lg:min-h-[auto]"
                onClick={generateDownloadImage}
              >
                <Download className="w-5 lg:w-4 h-5 lg:h-4" />
                Descargar imagen
              </button>
              <ShareButton bookTitle={resumen.selected.titulo} />
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-medium py-4 lg:py-3 px-4 rounded-xl shadow-md transform transition-all hover:scale-105 flex items-center justify-center gap-2 text-base lg:text-sm min-h-[48px] lg:min-h-[auto]"
                  onClick={() => navigate("/preguntas")}
                >
                  <RefreshCw className="w-5 lg:w-4 h-5 lg:h-4" />
                  Volver a responder
                </button>

                <button
                  className="flex-1 bg-white hover:bg-gray-50 text-gray-700 font-medium py-4 lg:py-3 px-4 rounded-xl shadow-md border border-amber-200 transform transition-all hover:scale-105 flex items-center justify-center gap-2 text-base lg:text-sm min-h-[48px] lg:min-h-[auto]"
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
