import { Share2 } from "lucide-react";

interface ShareButtonProps {
  bookTitle: string;
}

export function ShareButton({ bookTitle }: ShareButtonProps) {
  const handleShare = async () => {
    const url = window.location.href;
    const data = {
      title: "Book Matchmaker",
      text: `Me recomendaron "${bookTitle}"`,
      url,
    };

    if (navigator.share) {
      try {
        await navigator.share(data);
        return;
      } catch {
        // ignore
      }
    }

    try {
      await navigator.clipboard.writeText(url);
    } catch {
      // ignore
    }
  };

  return (
    <button
      onClick={handleShare}
      className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-xl shadow-md transform transition-all hover:scale-105 flex items-center justify-center gap-2 text-sm"
    >
      <Share2 className="w-4 h-4" />
      Compartir
    </button>
  );
}

export default ShareButton;
