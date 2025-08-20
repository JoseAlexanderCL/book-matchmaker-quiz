import html2canvas from "html2canvas";

export async function shareAsImage(bookTitle: string): Promise<void> {
  let clone: HTMLElement | null = null;
  let styleTag: HTMLStyleElement | null = null;

  try {
    const element = document.getElementById("book-recommendation");
    if (!element) return;

    // Crear un nuevo elemento con dimensiones fijas para story format
    clone = document.createElement('div');
    clone.id = "book-recommendation-share";
    clone.style.position = "absolute";
    clone.style.left = "-9999px";
    clone.style.top = "0";
    
    // Obtener los datos del elemento original
    const originalImg = element.querySelector('img[alt*="Portada"]') as HTMLImageElement;
    const title = element.querySelector('h2')?.textContent || '';
    const author = element.querySelector('.author-container span')?.textContent || '';
    const synopsis = element.querySelector('.synopsis-container p')?.textContent || '';
    const datoCurioso = element.querySelector('.bg-gradient-to-r.from-stone-200 p')?.textContent || '';
    const perfilLector = element.querySelector('.bg-blue-50 p')?.textContent || '';
    const logoSrc = element.querySelector('img[alt="Club de Lectura Santiago"]')?.getAttribute('src') || '';
    
    // Crear la estructura HTML optimizada para formato vertical
    clone.innerHTML = `
      <div class="story-container">
        <header class="header">
          <img src="${logoSrc}" alt="Club de Lectura Santiago" class="logo" />
          <div class="ribbon">
            <span class="ribbon-star">✦</span>
            <h1 class="ribbon-title">Tu libro del Club de Lectura es:</h1>
          </div>
        </header>

        <section class="cover-section">
          <div class="cover-frame">
            <img src="${originalImg?.src || ''}" alt="${title}" class="cover-img" crossorigin="anonymous" />
          </div>
        </section>

        <section class="title-section">
          <h2 class="book-title">${title}</h2>
          <span class="book-author">${author}</span>
        </section>

        ${synopsis ? `
        <section class="card synopsis-card">
          <h3 class="card-title">Sinopsis</h3>
          <p class="card-text">${synopsis}</p>
        </section>` : ''}

        ${perfilLector ? `
        <section class="card profile-card">
          <h3 class="card-title">Tu perfil lector</h3>
          <p class="card-text">${perfilLector}</p>
        </section>` : ''}

        <footer class="watermark">Club de Lectura Santiago</footer>
      </div>
    `;

    styleTag = document.createElement("style");
    styleTag.textContent = `
      /* Colores otoñales elegantes */
      :root {
        --cream: #FDF8F0;
        --warm-white: #FAF6ED;
        --soft-gold: #D4AF37;
        --deep-gold: #B8860B;
        --burnt-orange: #CC7722;
        --warm-brown: #8B4513;
        --dark-brown: #654321;
        --text-primary: #2C1810;
        --text-secondary: #5D4E3A;
        --text-muted: #8B7355;
      }

      #book-recommendation-share {
        width: 1080px;
        height: 1920px;
        background: linear-gradient(135deg, var(--cream) 0%, var(--warm-white) 100%);
        font-family: 'Georgia', 'Times New Roman', serif;
        color: var(--text-primary);
        overflow: hidden;
        position: relative;
        box-sizing: border-box;
      }

      .story-container {
        width: 100%;
        height: 100%;
        padding: 80px 90px;
        display: flex;
        flex-direction: column;
        gap: 40px;
        position: relative;
      }

      /* Header simplificado */
      .header {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
      }

      .logo {
        width: 120px;
        height: auto;
        opacity: 0.9;
      }

      .ribbon {
        display: flex;
        align-items: center;
        gap: 15px;
        padding: 20px 35px;
        background: var(--soft-gold);
        border-radius: 50px;
        box-shadow: 0 4px 15px rgba(180, 134, 11, 0.3);
      }

      .ribbon-star {
        font-size: 22px;
        color: var(--warm-white);
        line-height: 1;
      }

      .ribbon-title {
        margin: 0;
        font-family: 'Georgia', serif;
        font-size: 26px;
        font-weight: 400;
        color: var(--warm-white);
        text-align: center;
        letter-spacing: 0.5px;
      }

      /* Portada elegante */
      .cover-section {
        display: flex;
        justify-content: center;
        margin: 20px 0;
      }

      .cover-frame {
        padding: 20px;
        background: var(--deep-gold);
        border-radius: 15px;
        box-shadow: 0 8px 25px rgba(139, 69, 19, 0.25);
      }

      .cover-img {
        width: 320px;
        height: 480px;
        object-fit: cover;
        border-radius: 8px;
        display: block;
        background: #f0f0f0;
      }

      /* Título y autor */
      .title-section {
        text-align: center;
        margin: 30px 0;
      }

      .book-title {
        margin: 0 0 15px 0;
        font-family: 'Georgia', serif;
        font-size: 44px;
        font-weight: bold;
        color: var(--text-primary);
        line-height: 1.2;
        text-wrap: balance;
      }

      .book-author {
        font-family: 'Georgia', serif;
        font-size: 26px;
        font-style: italic;
        color: var(--text-secondary);
        font-weight: normal;
      }

      /* Cards simplificadas */
      .card {
        background: var(--warm-white);
        border: 2px solid var(--soft-gold);
        border-radius: 20px;
        padding: 30px;
        margin: 20px 0;
        box-shadow: 0 6px 20px rgba(212, 175, 55, 0.15);
      }

      .card-title {
        margin: 0 0 20px 0;
        font-family: 'Georgia', serif;
        font-size: 28px;
        font-weight: bold;
        color: var(--warm-brown);
        text-align: center;
      }

      .card-text {
        margin: 0;
        font-family: 'Georgia', serif;
        font-size: 22px;
        line-height: 1.6;
        color: var(--text-secondary);
        text-align: center;
        display: -webkit-box;
        -webkit-line-clamp: 8;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      /* Variantes de cards */
      .synopsis-card {
        background: linear-gradient(145deg, var(--warm-white) 0%, var(--cream) 100%);
        border-color: var(--burnt-orange);
      }

      .synopsis-card .card-title {
        color: var(--burnt-orange);
      }

      .profile-card {
        background: var(--dark-brown);
        border-color: var(--soft-gold);
      }

      .profile-card .card-title {
        color: var(--soft-gold);
      }

      .profile-card .card-text {
        color: var(--cream);
      }

      /* Footer */
      .watermark {
        text-align: center;
        margin-top: auto;
        font-family: 'Georgia', serif;
        font-size: 18px;
        color: var(--text-muted);
        font-style: italic;
        letter-spacing: 1px;
      }

      /* Responsive text ajustments */
      @media (max-width: 1080px) {
        .book-title { font-size: 40px; }
        .book-author { font-size: 24px; }
        .card-text { font-size: 20px; }
        .ribbon-title { font-size: 24px; }
      }
    `;

    document.head.appendChild(styleTag);
    document.body.appendChild(clone);

    // Esperar a que las imágenes se carguen
    const images = Array.from(clone.getElementsByTagName("img"));
    await Promise.all(
      images.map((img) =>
        img.complete
          ? Promise.resolve()
          : new Promise<void>((resolve) => {
              img.onload = img.onerror = () => resolve();
            }),
      ),
    );

    // Generar el canvas con configuración optimizada
    const canvas = await html2canvas(clone, {
      width: 1080,
      height: 1920,
      backgroundColor: "#FDF8F0",
      scale: 1,
      useCORS: true,
      allowTaint: false,
      removeContainer: true,
      foreignObjectRendering: false,
      onclone: (doc) => {
        const imgs = doc.querySelectorAll("#book-recommendation-share img");
        imgs.forEach((img) => {
          const src = (img as HTMLImageElement).getAttribute("src");
          if (src && /^https?:\/\//.test(src) && !src.startsWith(window.location.origin)) {
            (img as HTMLImageElement).crossOrigin = "anonymous";
          }
        });
      },
    });

    const blob = await new Promise<Blob | null>((resolve) => 
      canvas.toBlob(resolve, 'image/png', 0.95)
    );
    if (!blob) return;

    const sanitizedTitle = bookTitle.replace(/[^a-z0-9]/gi, "-");
    const file = new File([blob], `mi-libro-recomendado-${sanitizedTitle}.png`, {
      type: "image/png",
    });

    const message = `Completé el Quiz y obtuve el libro "${bookTitle}"! 📚✨`;

    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      await navigator.share({
        files: [file],
        title: "Book Matchmaker",
        text: message,
      });
    } else {
      // Fallback: descargar la imagen
      const link = document.createElement("a");
      link.download = file.name;
      link.href = URL.createObjectURL(file);
      link.click();
      URL.revokeObjectURL(link.href);
    }
  } catch (err) {
    console.error("Error generating image:", err);
    alert("Ocurrió un error al generar la imagen");
  } finally {
    if (clone) clone.remove();
    if (styleTag) styleTag.remove();
  }
}
