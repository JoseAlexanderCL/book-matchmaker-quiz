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
        <!-- Header con logo y título -->
        <div class="header-section">
          <img src="${logoSrc}" alt="Club de Lectura Santiago" class="logo">
          <div class="header-badge">
            <svg class="sparkle" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <h1>Tu libro del Club de Lectura es:</h1>
          </div>
        </div>

        <!-- Portada del libro -->
        <div class="book-cover-section">
          <div class="book-cover-frame">
            <img src="${originalImg?.src || ''}" alt="${title}" crossorigin="anonymous">
          </div>
        </div>

        <!-- Título del libro -->
        <div class="book-title-section">
          <h2>${title}</h2>
        </div>

        <!-- Autor y año -->
        <div class="book-author-section">
          <span>${author}</span>
        </div>

        <!-- Sinopsis -->
        ${synopsis ? `
        <div class="synopsis-section">
          <h3>Sinopsis</h3>
          <p>${synopsis}</p>
        </div>
        ` : ''}

        <!-- Dato curioso -->
        ${datoCurioso ? `
        <div class="curious-fact-section">
          <h3>¿Sabías que...?</h3>
          <p>${datoCurioso}</p>
        </div>
        ` : ''}

        <!-- Perfil lector -->
        ${perfilLector ? `
        <div class="reader-profile-section">
          <h3>Tu perfil lector</h3>
          <p>${perfilLector}</p>
        </div>
        ` : ''}
      </div>
    `;

    styleTag = document.createElement("style");
    styleTag.textContent = `
      #book-recommendation-share {
        width: 1080px;
        height: 1920px;
        background: linear-gradient(180deg, #fef3c7 0%, #fde68a 50%, #fcd34d 100%);
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        overflow: hidden;
        position: relative;
      }
      
      .story-container {
        width: 100%;
        height: 100%;
        padding: 60px 80px;
        display: flex;
        flex-direction: column;
        gap: 40px;
      }
      
      /* Header */
      .header-section {
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
      
      .header-badge {
        background: rgba(251, 191, 36, 0.4);
        backdrop-filter: blur(12px);
        border-radius: 60px;
        padding: 20px 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        border: 2px solid rgba(251, 191, 36, 0.3);
      }
      
      .header-badge .sparkle {
        width: 28px;
        height: 28px;
        color: #b45309;
      }
      
      .header-badge h1 {
        font-size: 32px;
        font-weight: 700;
        color: #b45309;
        margin: 0;
        text-align: center;
        line-height: 1.2;
      }
      
      /* Portada */
      .book-cover-section {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      
      .book-cover-frame {
        background: linear-gradient(135deg, #d97706, #b45309, #ea580c);
        border-radius: 25px;
        padding: 25px;
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
        transform: rotate(-2deg);
      }
      
      .book-cover-frame img {
        width: 280px;
        height: 420px;
        object-fit: cover;
        border-radius: 15px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
      }
      
      /* Título */
      .book-title-section {
        background: linear-gradient(135deg, #d97706, #b45309, #ea580c);
        border-radius: 25px;
        padding: 35px 30px;
        text-align: center;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
      }
      
      .book-title-section h2 {
        font-size: 42px;
        font-weight: 800;
        color: #fef7ed;
        line-height: 1.2;
        margin: 0;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
      }
      
      /* Autor */
      .book-author-section {
        background: linear-gradient(135deg, #d97706, #b45309, #ea580c);
        border-radius: 20px;
        padding: 25px;
        text-align: center;
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
      }
      
      .book-author-section span {
        color: #fef7ed;
        font-weight: 600;
        font-size: 28px;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
      }
      
      /* Sinopsis */
      .synopsis-section {
        background: linear-gradient(135deg, #d97706, #b45309, #ea580c);
        border-radius: 20px;
        padding: 30px;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
      }
      
      .synopsis-section h3 {
        color: #fef7ed;
        font-weight: 700;
        text-align: center;
        margin: 0 0 20px 0;
        font-size: 28px;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
      }
      
      .synopsis-section p {
        color: rgba(254, 247, 237, 0.95);
        font-size: 22px;
        line-height: 1.4;
        text-align: center;
        margin: 0;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
      }
      
      /* Dato curioso */
      .curious-fact-section {
        background: linear-gradient(135deg, #78716c, #57534e, #44403c);
        border-radius: 20px;
        padding: 30px;
        border-left: 8px solid #a8a29e;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
      }
      
      .curious-fact-section h3 {
        color: #f5f5f4;
        font-weight: 700;
        text-align: center;
        margin: 0 0 20px 0;
        font-size: 26px;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
      }
      
      .curious-fact-section p {
        color: rgba(245, 245, 244, 0.9);
        font-size: 20px;
        line-height: 1.4;
        text-align: center;
        margin: 0;
        font-style: italic;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
      }
      
      /* Perfil lector */
      .reader-profile-section {
        background: linear-gradient(135deg, #3b82f6, #2563eb, #1d4ed8);
        border-radius: 20px;
        padding: 30px;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
      }
      
      .reader-profile-section h3 {
        color: #dbeafe;
        font-weight: 700;
        text-align: center;
        margin: 0 0 20px 0;
        font-size: 26px;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
      }
      
      .reader-profile-section p {
        color: rgba(219, 234, 254, 0.95);
        font-size: 20px;
        line-height: 1.4;
        text-align: center;
        margin: 0;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
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

    // Generar el canvas con las dimensiones exactas
    const canvas = await html2canvas(clone, {
      width: 1080,
      height: 1920,
      backgroundColor: "#fef3c7",
      scale: 1,
      useCORS: true,
      allowTaint: false,
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
      canvas.toBlob(resolve, 'image/png', 1.0)
    );
    if (!blob) return;

    const sanitizedTitle = bookTitle.replace(/[^a-z0-9]/gi, "-");
    const file = new File([blob], `mi-libro-recomendado-${sanitizedTitle}.png`, {
      type: "image/png",
    });

    const message = `Completé el Quiz y obtuve el libro "${bookTitle}"! :D`;

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
