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

    // Obtener los datos del elemento original con selectores corregidos
    const originalImg = element.querySelector('img[alt*="Portada"]') as HTMLImageElement;
    const titleElement = element.querySelector('h2');
    const title = titleElement?.textContent || '';

    const authorElement = element.querySelector('.author-container span');
    const author = authorElement?.textContent || '';

    const synopsisElement = element.querySelector('.synopsis-container p');
    const synopsis = synopsisElement?.textContent || '';

    const perfilElement = element.querySelector('.bg-blue-50 p');
    const perfilLector = perfilElement?.textContent || '';

    const logoElement = element.querySelector('img[alt="Club de Lectura Santiago"]');
    const logoSrc = logoElement?.getAttribute('src') || '';

    // Crear estructura HTML SIMPLE Y CONFIABLE
    clone.innerHTML = `
      <div class="container">
        <!-- Header -->
        <div class="header">
          <img src="${logoSrc}" alt="Club de Lectura Santiago" class="logo" />
          <div class="badge">
            ✦ Tu libro del Club de Lectura es:
          </div>
        </div>

        <!-- Main Content -->
        <div class="main-content">
          <!-- Cover -->
          <div class="cover-section">
            <img src="${originalImg?.src || ''}" alt="${title}" class="cover" crossorigin="anonymous" />
          </div>

          <!-- Book Info -->
          <div class="book-info">
            <h1 class="title">${title}</h1>
            <p class="author">${author}</p>
          </div>
        </div>

        <!-- Cards -->
        <div class="cards">
          ${synopsis ? `
          <div class="card">
            <h3 class="card-title">📚 Sinopsis</h3>
            <p class="card-text">${synopsis}</p>
          </div>` : ''}

          ${perfilLector ? `
          <div class="card dark">
            <h3 class="card-title">✨ Tu perfil lector</h3>
            <p class="card-text">${perfilLector}</p>
          </div>` : ''}
        </div>

        <!-- Footer -->
        <div class="footer">
          Club de Lectura Santiago
        </div>
      </div>
    `;

    styleTag = document.createElement("style");
    styleTag.textContent = `
      #book-recommendation-share {
        width: 1080px;
        height: 1920px;
        background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
        font-family: 'Georgia', 'Times New Roman', serif;
        color: white;
        box-sizing: border-box;
        position: relative;
        overflow: hidden;
      }

      .container {
        width: 100%;
        height: 100%;
        padding: 60px;
        display: flex;
        flex-direction: column;
        gap: 50px;
      }

      /* Header */
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

      .badge {
        background: linear-gradient(135deg, #f59e0b, #d97706);
        color: white;
        padding: 18px 35px;
        border-radius: 25px;
        font-size: 24px;
        font-weight: bold;
        text-align: center;
        box-shadow: 0 8px 25px rgba(245, 158, 11, 0.3);
      }

      /* Main Content */
      .main-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;
      }

      .cover-section {
        display: flex;
        justify-content: center;
        padding: 30px;
        background: linear-gradient(135deg, #f59e0b, #d97706);
        border-radius: 20px;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
      }

      .cover {
        width: 350px;
        height: 525px;
        object-fit: cover;
        border-radius: 12px;
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
        background: #333;
      }

      .book-info {
        text-align: center;
        max-width: 800px;
      }

      .title {
        font-size: 52px;
        font-weight: bold;
        color: #fbbf24;
        margin: 0 0 20px 0;
        line-height: 1.2;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      }

      .author {
        font-size: 28px;
        color: #e5e7eb;
        margin: 0;
        font-style: italic;
        opacity: 0.9;
      }

      /* Cards */
      .cards {
        display: flex;
        flex-direction: column;
        gap: 30px;
        flex: 1;
      }

      .card {
        background: rgba(255, 255, 255, 0.95);
        border-radius: 20px;
        padding: 35px;
        color: #1f2937;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
      }

      .card.dark {
        background: linear-gradient(135deg, #374151, #1f2937);
        color: white;
      }

      .card-title {
        font-size: 30px;
        font-weight: bold;
        margin: 0 0 20px 0;
        text-align: center;
        color: #92400e;
      }

      .card.dark .card-title {
        color: #fbbf24;
      }

      .card-text {
        font-size: 22px;
        line-height: 1.6;
        margin: 0;
        text-align: center;
        display: -webkit-box;
        -webkit-line-clamp: 6;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      /* Footer */
      .footer {
        text-align: center;
        font-size: 18px;
        color: #9ca3af;
        font-style: italic;
        letter-spacing: 1px;
        margin-top: auto;
      }

      /* Responsive adjustments para mejor legibilidad */
      @media (max-width: 1080px) {
        .title { font-size: 46px; }
        .author { font-size: 26px; }
        .card-text { font-size: 20px; }
        .badge { font-size: 22px; }
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

    // Dar tiempo extra para que todo se renderice
    await new Promise(resolve => setTimeout(resolve, 500));

    // Generar el canvas con configuración simple y confiable
    const canvas = await html2canvas(clone, {
      width: 1080,
      height: 1920,
      backgroundColor: "#0f172a",
      scale: 1,
      useCORS: true,
      allowTaint: false,
      logging: false,
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
      canvas.toBlob(resolve, 'image/png', 0.9)
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

