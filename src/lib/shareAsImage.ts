import html2canvas from "html2canvas";

export async function shareAsImage(bookTitle: string): Promise<void> {
  let clone: HTMLElement | null = null;
  let styleTag: HTMLStyleElement | null = null;

  try {
    const element = document.getElementById("book-recommendation");
    if (!element) return;

    clone = element.cloneNode(true) as HTMLElement;
    clone.id = "book-recommendation-share";
    clone.style.width = "900px";
    clone.style.maxWidth = "900px";
    clone.style.position = "absolute";
    clone.style.left = "-9999px";
    clone.style.top = "0";

    styleTag = document.createElement("style");
    styleTag.textContent = `
      #book-recommendation-share {
        background: linear-gradient(135deg, rgb(251 245 231 / 0.9), rgb(254 243 199 / 0.9));
        border-radius: 1rem;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        border: 1px solid rgba(251 191 36 / 0.5);
        padding: 1.5rem;
        font-family: system-ui, -apple-system, sans-serif;
      }
      
      #book-recommendation-share .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
        max-width: 64rem;
        margin: 0 auto;
      }
      
      #book-recommendation-share .book-cover-container {
        background: linear-gradient(135deg, #d97706, #b45309, #ea580c);
        border-radius: 0.75rem;
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 21rem;
        margin: 0 auto;
      }
      
      #book-recommendation-share .book-cover-inner {
        background: rgb(251 245 231);
        padding: 0.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
      }
      
      #book-recommendation-share .book-cover-inner img {
        width: 12rem;
        height: 18rem;
        object-fit: cover;
        border-radius: 0.375rem;
        margin: 0 auto;
        display: block;
      }
      
      #book-recommendation-share .book-info {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        max-width: 28rem;
        margin: 0 auto;
      }
      
      #book-recommendation-share .title-container {
        background: linear-gradient(to right, #d97706, #b45309, #ea580c);
        border-radius: 0.75rem;
        padding: 1rem;
        text-align: center;
      }
      
      #book-recommendation-share .title-container h2 {
        font-size: 1.5rem;
        font-weight: bold;
        color: rgb(251 245 231);
        line-height: 1.25;
        margin: 0;
      }
      
      #book-recommendation-share .author-container {
        background: linear-gradient(to right, #d97706, #b45309, #ea580c);
        border-radius: 0.75rem;
        padding: 0.75rem;
        text-align: center;
      }
      
      #book-recommendation-share .author-container span {
        color: rgb(251 245 231);
        font-weight: 500;
        font-size: 1rem;
      }
      
      #book-recommendation-share .synopsis-container {
        background: linear-gradient(135deg, #d97706, #b45309, #ea580c);
        border-radius: 0.75rem;
        padding: 1rem;
      }
      
      #book-recommendation-share .synopsis-container h3 {
        color: rgb(251 245 231);
        font-weight: 600;
        text-align: center;
        margin-bottom: 1rem;
        font-size: 1.125rem;
        margin-top: 0;
      }
      
      #book-recommendation-share .synopsis-container p {
        color: rgba(251, 245, 231, 0.9);
        font-size: 0.875rem;
        line-height: 1.625;
        text-align: center;
        margin: 0;
      }
      
      #book-recommendation-share .curious-fact {
        margin-top: 1rem;
        background: linear-gradient(to right, rgb(231 229 228), rgb(251 245 231));
        border-radius: 0.75rem;
        padding: 1rem;
        border-left: 4px solid rgb(120 113 108);
        grid-column: span 2;
      }
      
      #book-recommendation-share .curious-fact h3 {
        font-weight: 600;
        color: rgb(55 65 81);
        font-size: 0.875rem;
        margin-bottom: 0.5rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-top: 0;
      }
      
      #book-recommendation-share .curious-fact p {
        color: rgb(75 85 99);
        font-size: 0.875rem;
        font-style: italic;
        line-height: 1.625;
        margin: 0;
      }
      
      #book-recommendation-share .reader-profile {
        margin-top: 1rem;
        background: rgb(239 246 255);
        border-radius: 0.75rem;
        padding: 1rem;
        grid-column: span 2;
      }
      
      #book-recommendation-share .reader-profile h3 {
        font-weight: 600;
        color: rgb(55 65 81);
        font-size: 0.875rem;
        margin-bottom: 0.75rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-top: 0;
      }
      
      #book-recommendation-share .reader-profile .emoji-badge {
        width: 1.5rem;
        height: 1.5rem;
        background: rgb(191 219 254);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.75rem;
        font-weight: bold;
        color: rgb(29 78 216);
      }
      
      #book-recommendation-share .reader-profile p {
        color: rgb(55 65 81);
        font-size: 0.875rem;
        line-height: 1.625;
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
