import html2canvas from "html2canvas";

export async function shareAsImage(bookTitle: string): Promise<void> {
  const element = document.getElementById("book-recommendation");
  if (!element) return;

  const canvas = await html2canvas(element, {
    useCORS: true,
    backgroundColor: "#ffffff",
  });

  const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve));
  if (!blob) return;

  const sanitizedTitle = bookTitle.replace(/[^a-zA-Z0-9]/g, "-");
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
}
