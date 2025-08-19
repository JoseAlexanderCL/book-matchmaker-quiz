import html2canvas from "html2canvas";

export async function shareAsImage(bookTitle: string): Promise<void> {
  let clone: HTMLElement | null = null;
  let styleTag: HTMLStyleElement | null = null;

  try {
    const element = document.getElementById("book-recommendation");
    if (!element) return;

    // Crear un nuevo elemento con la estructura simplificada
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
    const logoSrc = element.querySelector('img[alt="Club de Lectura Santiago"]')?.getAttribute('src') || '';
    
    // Crear la estructura HTML
    clone.innerHTML = `
      <div class="header">
        <img src="${logoSrc}" alt="Club de Lectura Santiago" class="logo">
        <div class="header-badge">
          <svg class="sparkle" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
          <h1>Tu libro del Club de Lectura es:</h1>
        </div>
      </div>
      <div class="main-content">
        <div class="book-layout">
          <div class="book-cover-container">
            <div class="book-cover-inner">
              <img src="${originalImg?.src || ''}" alt="${title}" crossorigin="anonymous">
            </div>
          </div>
          <div class="book-info">
            <div class="title-container">
              <h2>${title}</h2>
            </div>
            <div class="author-container">
              <span>${author}</span>
            </div>
            ${synopsis ? `
            <div class="synopsis-container">
              <h3>Sinopsis</h3>
              <p>${synopsis}</p>
            </div>
            ` : ''}
          </div>
        </div>
      </div>
    `;

    styleTag = document.createElement("style");
    styleTag.textContent = `
      #book-recommendation-share {
        background: #fef3c7;
        border-radius: 1rem;
        padding: 2rem;
        font-family: system-ui, -apple-system, sans-serif;
        width: 900px;
        position: relative;
      }
      
      #book-recommendation-share .header {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 2rem;
        position: relative;
      }
      
      #book-recommendation-share .logo {
        position: absolute;
        left: 0;
        width: 80px;
        height: auto;
        opacity: 0.8;
      }
      
      #book-recommendation-share .header-badge {
        background: rgba(251, 191, 36, 0.3);
        backdrop-filter: blur(8px);
        border-radius: 9999px;
        padding: 0.75rem 2rem;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      }
      
      #book-recommendation-share .header-badge .sparkle {
        width: 1.25rem;
        height: 1.25rem;
        color: #b45309;
      }
      
      #book-recommendation-share .header-badge h1 {
        font-size: 1.25rem;
        font-weight: bold;
        color: #b45309;
        margin: 0;
      }
      
      #book-recommendation-share .main-content {
        background: rgba(251, 245, 231, 0.9);
        backdrop-filter: blur(8px);
        border-radius: 1rem;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        border: 1px solid rgba(251, 191, 36, 0.5);
        padding: 2rem;
      }
      
      #book-recommendation-share .book-layout {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 2rem;
        max-width: none;
        margin: 0;
      }
      
      #book-recommendation-share .book-cover-container {
        background: linear-gradient(135deg, #d97706, #b45309, #ea580c);
        border-radius: 0.75rem;
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      #book-recommendation-share .book-cover-inner {
        background: rgb(251 245 231);
        padding: 0.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
      }
      
      #book-recommendation-share .book-cover-inner img {
        width: 200px;
        height: 300px;
        object-fit: cover;
        border-radius: 0.375rem;
        margin: 0 auto;
        display: block;
      }
      
      #book-recommendation-share .book-info {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
      
      #book-recommendation-share .title-container {
        background: linear-gradient(to right, #d97706, #b45309, #ea580c);
        border-radius: 0.75rem;
        padding: 1.5rem;
        text-align: center;
      }
      
      #book-recommendation-share .title-container h2 {
        font-size: 2rem;
        font-weight: bold;
        color: rgb(251 245 231);
        line-height: 1.2;
        margin: 0;
      }
      
      #book-recommendation-share .author-container {
        background: linear-gradient(to right, #d97706, #b45309, #ea580c);
        border-radius: 0.75rem;
        padding: 1rem;
        text-align: center;
      }
      
      #book-recommendation-share .author-container span {
        color: rgb(251 245 231);
        font-weight: 500;
        font-size: 1.125rem;
      }
      
      #book-recommendation-share .synopsis-container {
        background: linear-gradient(135deg, #d97706, #b45309, #ea580c);
        border-radius: 0.75rem;
        padding: 1.5rem;
      }
      
      #book-recommendation-share .synopsis-container h3 {
        color: rgb(251 245 231);
        font-weight: 600;
        text-align: center;
        margin-bottom: 1rem;
        font-size: 1.25rem;
        margin-top: 0;
      }
      
      #book-recommendation-share .synopsis-container p {
        color: rgba(251, 245, 231, 0.9);
        font-size: 1rem;
        line-height: 1.5;
        text-align: center;
        margin: 0;
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

    const canvas = await html2canvas(clone, {
      backgroundColor: "#fef3c7",
      scale: 2,
      useCORS: true,
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

    const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve));
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

