import html2canvas from "html2canvas";

export async function shareAsImage2(bookTitle: string): Promise<void> {
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

    // Crear estructura HTML siguiendo el layout de la imagen 2 con colores de imagen 1
    clone.innerHTML = `
      <div class="container">
        <!-- Header -->
        <div class="header">
          <div class="header-text">Tu libro del Club de Lectura Santiago es:</div>
        </div>

        <!-- Main Layout Grid -->
        <div class="main-grid">
          <!-- Left side - Book Cover -->
          <div class="cover-section">
            <img src="${originalImg?.src || ''}" alt="${title}" class="cover" crossorigin="anonymous" />
          </div>

          <!-- Right side - Book Details -->
          <div class="book-details">
            <div class="detail-card title-card">
              <div class="detail-label">Título</div>
              <div class="detail-content">${title}</div>
            </div>
            
            <div class="detail-card author-card">
              <div class="detail-label">Autor Año</div>
              <div class="detail-content">${author}</div>
            </div>

            <div class="detail-card synopsis-card">
              <div class="detail-label">Sinopsis</div>
              <div class="detail-content">${synopsis}</div>
            </div>
          </div>
        </div>


        <!-- Reader Profile -->
        <div class="profile-section">
          <div class="profile-content">${perfilLector}</div>
        </div>

        <!-- Footer Logo -->
        <div class="footer">
          <img src="${logoSrc}" alt="Club de Lectura Santiago" class="footer-logo" />
        </div>
      </div>
    `;

    styleTag = document.createElement("style");
    styleTag.textContent = `
      #book-recommendation-share {
        width: 1080px;
        height: 1920px;
        background: linear-gradient(299deg, #fffcec 0%, #fffced 19%, #e4e4be 100%);
        font-family: 'Georgia', 'Times New Roman', serif;
        color: #92400e;
        box-sizing: border-box;
        position: relative;
        overflow: hidden;
      }

      .container {
        width: 100%;
        height: 100%;
        padding: 40px;
        display: flex;
        flex-direction: column;
        gap: 35px;
      }

      /* Header */
      .header {
        background: linear-gradient(135deg,#0f2742 0%,#1f4f83 55%,#c64b5f 100%);
        border-radius: 18px;
        padding: 30px 25px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .header-text {
        color: white;
        font-size: 32px;
        font-weight: bold;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
      }

      /* Main Grid Layout */
      .main-grid {
        display: flex;
        gap: 25px;
        height: 800px;
      }

      /* Cover Section */
      .cover-section {
        flex: 1;
        background: linear-gradient(277deg, #f7efe2 0%, #d9d0c1 24%, #9fb3c6 100%);
        border-radius: 18px;
        padding: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .cover {
        width: 420px;
        height: 594px;
        object-fit: cover;
        border-radius: 18px;
        border: 15px solid white;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
        background: #8b4513;
      }

      /* Book Details */
      .book-details {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      .detail-card {
        background: linear-gradient(135deg,#f7efe2 0%,#d9d0c1 48%,#9fb3c6 100%);
        border-radius: 18px;
        padding: 15px;
        color: #000000;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
      }

      .title-card {
        height: 160px;
      }

      .author-card {
        height: 140px;
      }

      .synopsis-card {
        height: 460px;
      }

      .detail-label {
        font-size: 20px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 10px;
        text-transform: uppercase;
        letter-spacing: 1px;
        opacity: 0.9;
      }

      .detail-content {
        font-size: 24px;
        text-align: center;
        line-height: 1.5;
        overflow: visible;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
      }

      .title-card .detail-content {
        font-weight: bold;
        font-size: 32px;
        -webkit-line-clamp: 3;
      }

      .author-card .detail-content {
        -webkit-line-clamp: 3;
        font-size: 28px;
      }

      .synopsis-card .detail-content {
        -webkit-line-clamp: 18;
        font-size: 28px;
        line-height: 1.5;
      }

      /* Reader Profile */
      .profile-section {
        background: linear-gradient(135deg,#112032 0%,#27445e 45%,#6e8aa0 100%);
        border-radius: 18px;
        padding: 20px 35px 35px 35px;
        color: #fef3c7;
        color: #ffffff;
        flex: 1;
        display: flex;
        align-items: flex-start;
        justify-content: center;
      }

      .profile-content {
        font-size: 34px;
        line-height: 1.6;
        text-align: center;
        font-style: italic;
        display: -webkit-box;
        -webkit-line-clamp: 8;
        -webkit-box-orient: vertical;
        overflow: visible;
      }

      .profile-content::before {
        content: "✨ Tu perfil lector";
        display: block;
        font-size: 34px;
        font-weight: bold;
        margin-bottom: 20px;
        color: #fbbf24;
        font-style: normal;
        text-transform: uppercase;
        letter-spacing: 1px;
      }

      /* Footer */
      .footer {
        border-radius: 18px;
        padding: 20px;
        text-align: center;
        margin-top: auto;
      }

      .footer-logo {
        width: 220px;
        height: auto;
        filter: brightness(0) invert(1);
        opacity: 1;
        display: block;
        margin: 0 auto;
      }

      /* Responsive adjustments */
      @media (max-width: 1080px) {
        .detail-content { font-size: 20px; }
        .profile-content { font-size: 24px; }
        .header-text { font-size: 30px; }
      }

      /* Special styling to match image 1 aesthetic */
      .header {
        border: 2px solid rgba(146, 64, 14, 0.2);
      }

      /* Add subtle texture effect */
      .container::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                          radial-gradient(circle at 75% 75%, rgba(146, 64, 14, 0.1) 0%, transparent 50%);
        pointer-events: none;
        z-index: 1;
      }

      .container > * {
        position: relative;
        z-index: 2;
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
      backgroundColor: "#fffcec",
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