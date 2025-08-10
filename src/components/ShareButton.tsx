import { useState } from "react";
import { Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ShareButtonProps {
  bookTitle: string;
}

export function ShareButton({ bookTitle }: ShareButtonProps) {
  const [open, setOpen] = useState(false);

  const url = window.location.origin;
  const message = `Hice el Quiz de Libros y me salió "${bookTitle}". Revisa qué libro te sale en quelibrodel.club`;
  const shareLinks = {
    whatsapp: `https://wa.me/?text=${encodeURIComponent(message)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(message)}`,
  };

  const handleShare = async () => {
    const data = {
      title: "Book Matchmaker",
      text: message,
      url,
    };

    if (navigator.share) {
      try {
        await navigator.share(data);
        return;
      } catch {
        // ignore
      }
    } else {
      setOpen(true);
    }
  };

  return (
    <>
      <button
        onClick={handleShare}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-xl shadow-md transform transition-all hover:scale-105 flex items-center justify-center gap-2 text-sm"
      >
        <Share2 className="w-4 h-4" />
        Compartir
      </button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Compartir</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-2">
            <Button asChild variant="secondary">
              <a
                href={shareLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                autoFocus
              >
                WhatsApp
              </a>
            </Button>
            <Button asChild variant="secondary">
              <a
                href={shareLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                X/Twitter
              </a>
            </Button>
            <Button asChild variant="secondary">
              <a
                href={shareLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default ShareButton;
