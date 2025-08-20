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
    
    // Crear la estructura HTML completamente rediseñada
    clone.innerHTML = `
      <div class="story-container">
        <!-- Background decorativo -->
        <div class="bg-pattern"></div>
        <div class="bg-overlay"></div>
        
        <!-- Header compacto -->
        <header class="header">
          <img src="${logoSrc}" alt="Club de Lectura Santiago" class="logo" />
        </header>

        <!-- Hero section con portada prominente -->
        <section class="hero">
          <div class="hero-badge">
            <span class="hero-icon">📖</span>
            <span class="hero-text">Tu libro recomendado</span>
          </div>
          
          <div class="cover-container">
            <div class="cover-glow"></div>
            <img src="${originalImg?.src || ''}" alt="${title}" class="cover-image" crossorigin="anonymous" />
            <div class="cover-shine"></div>
          </div>
          
          <div class="title-container">
            <h1 class="main-title">${title}</h1>
            <p class="author-name">${author}</p>
          </div>
        </section>

        <!-- Content sections más compactas -->
        <div class="content-grid">
          ${synopsis ? `
          <div class="info-card synopsis-card">
            <div class="card-header">
              <span class="card-icon">📚</span>
              <h3 class="card-title">Sinopsis</h3>
            </div>
            <p class="card-content">${synopsis}</p>
          </div>` : ''}

          ${perfilLector ? `
          <div class="info-card profile-card">
            <div class="card-header">
              <span class="card-icon">✨</span>
              <h3 class="card-title">Tu perfil lector</h3>
            </div>
            <p class="card-content">${perfilLector}</p>
          </div>` : ''}
        </div>

        <!-- Footer con elementos decorativos -->
        <footer class="footer">
          <div class="footer-decoration"></div>
          <span class="watermark">Club de Lectura Santiago</span>
          <div class="footer-decoration"></div>
        </footer>
      </div>
    `;

    styleTag = document.createElement("style");
    styleTag.textContent = `
      /* Variables de colores otoñales mejorados */
      :root {
        --primary-bg: #1a1611;
        --secondary-bg: #2d251c;
        --accent-gold: #d4af37;
        --warm-gold: #f4d03f;
        --deep-amber: #b8860b;
        --burnt-orange: #cc7722;
        --warm-cream: #faf6ed;
        --soft-cream: #f5f1e8;
        --text-light: #faf6ed;
        --text-dark: #2c1810;
        --text-muted: #8b7355;
      }

      #book-recommendation-share {
        width: 1080px;
        height: 1920px;
        background: var(--primary-bg);
        font-family: 'Georgia', 'Times New Roman', serif;
        overflow: hidden;
        position: relative;
        box-sizing: border-box;
      }

      /* Background pattern y overlay */
      .bg-pattern {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: 
          radial-gradient(circle at 20% 20%, rgba(212, 175, 55, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(204, 119, 34, 0.08) 0%, transparent 50%),
          linear-gradient(135deg, var(--primary-bg) 0%, var(--secondary-bg) 100%);
        z-index: 1;
      }

      .bg-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: 
          repeating-linear-gradient(
            45deg,
            transparent,
            transparent 100px,
            rgba(212, 175, 55, 0.02) 100px,
            rgba(212, 175, 55, 0.02) 102px
          );
        z-index: 2;
      }

      .story-container {
        position: relative;
        z-index: 3;
        width: 100%;
        height: 100%;
        padding: 50px 60px;
        display: flex;
        flex-direction: column;
      }

      /* Header minimalista */
      .header {
        display: flex;
        justify-content: center;
        margin-bottom: 40px;
      }

      .logo {
        width: 100px;
        height: auto;
        opacity: 0.9;
        filter: brightness(1.2);
      }

      /* Hero section rediseñada */
      .hero {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 60px;
        flex-shrink: 0;
      }

      .hero-badge {
        display: flex;
        align-items: center;
        gap: 12px;
        background: linear-gradient(135deg, var(--accent-gold), var(--warm-gold));
        color: var(--primary-bg);
        padding: 15px 30px;
        border-radius: 25px;
        font-weight: bold;
        font-size: 18px;
        margin-bottom: 40px;
        box-shadow: 0 8px 25px rgba(212, 175, 55, 0.3);
      }

      .hero-icon {
        font-size: 20px;
      }

      /* Portada con efectos visuales */
      .cover-container {
        position: relative;
        margin-bottom: 40px;
      }

      .cover-glow {
        position: absolute;
        top: -20px;
        left: -20px;
        right: -20px;
        bottom: -20px;
        background: radial-gradient(circle, rgba(212, 175, 55, 0.3) 0%, transparent 70%);
        border-radius: 20px;
        z-index: 1;
      }

      .cover-image {
        width: 340px;
        height: 510px;
        object-fit: cover;
        border-radius: 15px;
        position: relative;
        z-index: 2;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        background: #333;
      }

      .cover-shine {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
          135deg,
          rgba(255, 255, 255, 0.1) 0%,
          transparent 30%,
          transparent 70%,
          rgba(255, 255, 255, 0.05) 100%
        );
        border-radius: 15px;
        z-index: 3;
        pointer-events: none;
      }

      /* Títulos más impactantes */
      .title-container {
        text-align: center;
        max-width: 600px;
      }

      .main-title {
        margin: 0 0 15px 0;
        font-size: 48px;
        font-weight: bold;
        color: var(--warm-gold);
        line-height: 1.2;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        letter-spacing: 1px;
      }

      .author-name {
        margin: 0;
        font-size: 24px;
        color: var(--soft-cream);
        font-style: italic;
        opacity: 0.9;
      }

      /* Grid de contenido optimizado */
      .content-grid {
        display: flex;
        flex-direction: column;
        gap: 30px;
        flex: 1;
        margin-bottom: 40px;
      }

      .info-card {
        background: rgba(245, 241, 232, 0.95);
        border: 2px solid var(--accent-gold);
        border-radius: 20px;
        padding: 30px;
        backdrop-filter: blur(10px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
      }

      .card-header {
        display: flex;
        align-items: center;
        gap: 15px;
        margin-bottom: 20px;
        justify-content: center;
      }

      .card-icon {
        font-size: 24px;
        background: var(--accent-gold);
        padding: 8px;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .card-title {
        margin: 0;
        font-size: 26px;
        font-weight: bold;
        color: var(--text-dark);
      }

      .card-content {
        margin: 0;
        font-size: 20px;
        line-height: 1.5;
        color: var(--text-dark);
        text-align: center;
        display: -webkit-box;
        -webkit-line-clamp: 6;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      /* Variantes de cards */
      .synopsis-card {
        background: linear-gradient(135deg, rgba(245, 241, 232, 0.98), rgba(250, 246, 237, 0.95));
        border-color: var(--burnt-orange);
      }

      .synopsis-card .card-icon {
        background: var(--burnt-orange);
      }

      .profile-card {
        background: linear-gradient(135deg, var(--secondary-bg), var(--primary-bg));
        border-color: var(--warm-gold);
      }

      .profile-card .card-title {
        color: var(--warm-gold);
      }

      .profile-card .card-content {
        color: var(--text-light);
      }

      .profile-card .card-icon {
        background: var(--warm-gold);
        color: var(--primary-bg);
      }

      /* Footer decorativo */
      .footer {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        margin-top: auto;
      }

      .footer-decoration {
        width: 60px;
        height: 2px;
        background: linear-gradient(90deg, transparent, var(--accent-gold), transparent);
      }

      .watermark {
        font-size: 16px;
        color: var(--text-muted);
        font-style: italic;
        letter-spacing: 2px;
        text-transform: uppercase;
      }

      /* Responsive adjustments */
      @media (max-width: 1080px) {
        .main-title { font-size: 42px; }
        .author-name { font-size: 22px; }
        .card-content { font-size: 18px; }
        .cover-image { width: 300px; height: 450px; }
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
      backgroundColor: "#1a1611",
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
