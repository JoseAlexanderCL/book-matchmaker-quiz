import html2canvas from "html2canvas";

export async function shareAsImage(bookTitle: string): Promise<void> {
  let clone: HTMLElement | null = null;
  let styleTag: HTMLStyleElement | null = null;

  try {
    const element = document.getElementById("book-recommendation");
    if (!element) return;

    clone = element.cloneNode(true) as HTMLElement;
    clone.id = "book-recommendation-share";
    clone.style.width = "800px";
    clone.style.maxWidth = "800px";

    styleTag = document.createElement("style");
    styleTag.textContent = `
      #book-recommendation-share {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
        font-size: 16px;
      }
      #book-recommendation-share h1 {
        font-size: 20px;
      }
      #book-recommendation-share h2 {
        font-size: 24px;
      }
      #book-recommendation-share h3 {
        font-size: 18px;
      }
      #book-recommendation-share p {
        font-size: 16px;
      }
      #book-recommendation-share img {
        width: 100%;
        height: auto;
        object-fit: cover;
      }
    `;

    document.head.appendChild(styleTag);
    document.body.appendChild(clone);

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
    alert("Ocurrió un error al generar la imagen");
  } finally {
    if (clone) clone.remove();
    if (styleTag) styleTag.remove();
  }
}
