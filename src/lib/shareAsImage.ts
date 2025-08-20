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
        background: linear-gradient(135deg, #faf8f5 0%, #f5f1ea 30%, #ede7db 70%, #e6ddd1 100%);
        font-family: Georgia, 'Times New Roman', serif;
        overflow: hidden;
        position: relative;
      }
      
      #book-recommendation-share::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: 
          radial-gradient(circle at 20% 20%, rgba(222, 184, 135, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(205, 164, 124, 0.06) 0%, transparent 50%),
          radial-gradient(circle at 40% 70%, rgba(188, 143, 107, 0.04) 0%, transparent 50%);
        pointer-events: none;
      }
      
      .story-container {
        width: 100%;
        height: 100%;
        padding: 50px 90px;
        display: flex;
        flex-direction: column;
        gap: 35px;
        position: relative;
        z-index: 1;
      }
      
      /* Header */
      .header-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 35px;
      }
      
      .logo {
        width: 130px;
        height: auto;
        opacity: 0.85;
        filter: sepia(20%) saturate(80%) hue-rotate(20deg);
      }
      
      .header-badge {
        background: rgba(222, 184, 135, 0.25);
        backdrop-filter: blur(10px);
        border-radius: 40px;
        padding: 25px 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 18px;
        box-shadow: 0 10px 30px rgba(139, 108, 85, 0.15);
        border: 2px solid rgba(222, 184, 135, 0.4);
        position: relative;
      }
      
      .header-badge::before {
        content: '';
        position: absolute;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        background: linear-gradient(45deg, #deb887, #cd9a7c, #bc8f6b);
        border-radius: 42px;
        z-index: -1;
        opacity: 0.3;
      }
      
      .header-badge .sparkle {
        width: 32px;
        height: 32px;
        color: #8b6c55;
      }
      
      .header-badge h1 {
        font-size: 34px;
        font-weight: 600;
        color: #6b4e3d;
        margin: 0;
        text-align: center;
        line-height: 1.3;
        letter-spacing: 0.5px;
        font-style: italic;
      }
      
      /* Portada */
      .book-cover-section {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px 0;
      }
      
      .book-cover-frame {
        background: linear-gradient(135deg, #deb887 0%, #cd9a7c 50%, #bc8f6b 100%);
        border-radius: 30px;
        padding: 30px;
        box-shadow: 
          0 25px 50px rgba(107, 78, 61, 0.25),
          0 10px 20px rgba(139, 108, 85, 0.15),
          inset 0 1px 3px rgba(255, 255, 255, 0.2);
        transform: rotate(-1.5deg);
        position: relative;
      }
      
      .book-cover-frame::before {
        content: '';
        position: absolute;
        top: -8px;
        left: -8px;
        right: -8px;
        bottom: -8px;
        background: linear-gradient(135deg, rgba(222, 184, 135, 0.3), rgba(205, 154, 124, 0.2));
        border-radius: 38px;
        z-index: -1;
      }
      
      .book-cover-frame img {
        width: 320px;
        height: 480px;
        object-fit: cover;
        border-radius: 20px;
        box-shadow: 
          0 15px 35px rgba(0, 0, 0, 0.3),
          0 5px 15px rgba(0, 0, 0, 0.2);
        border: 3px solid rgba(255, 255, 255, 0.8);
      }
      
      /* Título */
      .book-title-section {
        background: linear-gradient(135deg, rgba(222, 184, 135, 0.8), rgba(205, 154, 124, 0.7));
        border-radius: 25px;
        padding: 35px;
        text-align: center;
        box-shadow: 0 8px 20px rgba(139, 108, 85, 0.15);
      }
      
      .book-title-section h2 {
        font-size: 45px;
        font-weight: 700;
        color: #4a3429;
        line-height: 1.2;
        margin: 0;
        text-shadow: 1px 1px 3px rgba(255, 255, 255, 0.3);
        font-style: italic;
        letter-spacing: 0.5px;
      }
      
      /* Autor */
      .book-author-section {
        background: linear-gradient(135deg, rgba(188, 143, 107, 0.7), rgba(169, 130, 98, 0.6));
        border-radius: 25px;
        padding: 28px;
        text-align: center;
        box-shadow: 0 6px 20px rgba(107, 78, 61, 0.12);
      }
      
      .book-author-section span {
        color: #f5f1ea;
        font-weight: 500;
        font-size: 30px;
        text-shadow: 1px 1px 3px rgba(74, 52, 41, 0.4);
        font-style: italic;
        letter-spacing: 0.3px;
      }
      
      /* Sinopsis */
      .synopsis-section {
        background: linear-gradient(135deg, rgba(222, 184, 135, 0.6), rgba(205, 154, 124, 0.5));
        border-radius: 25px;
        padding: 35px;
        box-shadow: 0 8px 20px rgba(139, 108, 85, 0.12);
      }
      
      .synopsis-section h3 {
        color: #4a3429;
        font-weight: 600;
        text-align: center;
        margin: 0 0 25px 0;
        font-size: 30px;
        text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.3);
        font-style: italic;
      }
      
      .synopsis-section p {
        color: #5d4037;
        font-size: 24px;
        line-height: 1.5;
        text-align: center;
        margin: 0;
        font-style: italic;
        letter-spacing: 0.2px;
      }
      
      /* Perfil lector */
      .reader-profile-section {
        background: linear-gradient(135deg, rgba(107, 78, 61, 0.8), rgba(93, 64, 55, 0.7));
        border-radius: 25px;
        padding: 35px;
        box-shadow: 0 8px 20px rgba(74, 52, 41, 0.15);
      }
      
      .reader-profile-section h3 {
        color: #f5f1ea;
        font-weight: 600;
        text-align: center;
        margin: 0 0 25px 0;
        font-size: 28px;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
        font-style: italic;
      }
      
      .reader-profile-section p {
        color: rgba(245, 241, 234, 0.95);
        font-size: 22px;
        line-height: 1.5;
        text-align: center;
        margin: 0;
        font-style: italic;
        letter-spacing: 0.1px;
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
