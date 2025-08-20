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
        padding: 70px 90px;
        display: flex;
        flex-direction: column;
        gap: 45px;
        position: relative;
        z-index: 1;
      }
      
      /* Decorative corner elements */
      .story-container::before {
        content: '';
        position: absolute;
        top: 40px;
        left: 40px;
        width: 120px;
        height: 120px;
        background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M20,20 Q50,10 80,20 Q90,50 80,80 Q50,90 20,80 Q10,50 20,20 Z' fill='none' stroke='%23bc8f6b' stroke-width='1.5' opacity='0.3'/%3E%3C/svg%3E") no-repeat;
        background-size: contain;
        opacity: 0.4;
      }
      
      .story-container::after {
        content: '';
        position: absolute;
        bottom: 40px;
        right: 40px;
        width: 120px;
        height: 120px;
        background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M20,20 Q50,10 80,20 Q90,50 80,80 Q50,90 20,80 Q10,50 20,20 Z' fill='none' stroke='%23bc8f6b' stroke-width='1.5' opacity='0.3'/%3E%3C/svg%3E") no-repeat;
        background-size: contain;
        opacity: 0.4;
        transform: rotate(180deg);
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
        background: linear-gradient(135deg, rgba(222, 184, 135, 0.9), rgba(205, 154, 124, 0.8));
        border-radius: 35px;
        padding: 40px 35px;
        text-align: center;
        box-shadow: 0 12px 30px rgba(139, 108, 85, 0.2);
        border: 2px solid rgba(255, 255, 255, 0.3);
        position: relative;
        overflow: hidden;
      }
      
      .book-title-section::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 60'%3E%3Cpath d='M30,5 L35,20 L50,20 L38,30 L42,45 L30,37 L18,45 L22,30 L10,20 L25,20 Z' fill='%23ffffff' opacity='0.05'/%3E%3C/svg%3E") repeat;
        opacity: 0.1;
        pointer-events: none;
      }
      
      .book-title-section h2 {
        font-size: 45px;
        font-weight: 700;
        color: #4a3429;
        line-height: 1.2;
        margin: 0;
        text-shadow: 1px 1px 3px rgba(255, 255, 255, 0.3);
        position: relative;
        z-index: 1;
        font-style: italic;
        letter-spacing: 0.5px;
      }
      
      /* Autor */
      .book-author-section {
        background: linear-gradient(135deg, rgba(188, 143, 107, 0.8), rgba(169, 130, 98, 0.7));
        border-radius: 25px;
        padding: 28px;
        text-align: center;
        box-shadow: 0 8px 25px rgba(107, 78, 61, 0.15);
        border: 2px solid rgba(255, 255, 255, 0.2);
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
        background: linear-gradient(135deg, rgba(222, 184, 135, 0.7), rgba(205, 154, 124, 0.6));
        border-radius: 30px;
        padding: 35px;
        box-shadow: 0 10px 30px rgba(139, 108, 85, 0.15);
        border: 2px solid rgba(255, 255, 255, 0.25);
        position: relative;
      }
      
      .synopsis-section::before {
        content: '"';
        position: absolute;
        top: 15px;
        left: 25px;
        font-size: 80px;
        color: rgba(107, 78, 61, 0.2);
        font-family: Georgia, serif;
        line-height: 1;
      }
      
      .synopsis-section::after {
        content: '"';
        position: absolute;
        bottom: 15px;
        right: 25px;
        font-size: 80px;
        color: rgba(107, 78, 61, 0.2);
        font-family: Georgia, serif;
        line-height: 1;
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
      
      /* Dato curioso */
      .curious-fact-section {
        background: linear-gradient(135deg, rgba(169, 130, 98, 0.8), rgba(139, 108, 85, 0.7));
        border-radius: 30px;
        padding: 35px;
        border-left: 6px solid #deb887;
        box-shadow: 0 10px 30px rgba(107, 78, 61, 0.2);
        position: relative;
      }
      
      .curious-fact-section::before {
        content: '✦';
        position: absolute;
        top: 20px;
        right: 25px;
        font-size: 24px;
        color: rgba(245, 241, 234, 0.4);
      }
      
      .curious-fact-section h3 {
        color: #f5f1ea;
        font-weight: 600;
        text-align: center;
        margin: 0 0 25px 0;
        font-size: 28px;
        text-shadow: 1px 1px 3px rgba(74, 52, 41, 0.4);
        font-style: italic;
      }
      
      .curious-fact-section p {
        color: rgba(245, 241, 234, 0.95);
        font-size: 22px;
        line-height: 1.5;
        text-align: center;
        margin: 0;
        font-style: italic;
        letter-spacing: 0.1px;
      }
      
      /* Perfil lector */
      .reader-profile-section {
        background: linear-gradient(135deg, rgba(107, 78, 61, 0.9), rgba(93, 64, 55, 0.8));
        border-radius: 30px;
        padding: 35px;
        box-shadow: 0 12px 35px rgba(74, 52, 41, 0.25);
        border: 2px solid rgba(222, 184, 135, 0.3);
        position: relative;
      }
      
      .reader-profile-section::before {
        content: '📚';
        position: absolute;
        top: 20px;
        left: 25px;
        font-size: 32px;
        opacity: 0.6;
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
