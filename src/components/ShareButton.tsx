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

  const url = window.location.href;
  const message = `Completé el Quiz y obtuve el libro "${bookTitle}"! :D`;
  const shareLinks = {
    whatsapp: `https://wa.me/?text=${encodeURIComponent(message)}`,
    instagram: "instagram://story-camera",
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
        // Fallback cuando Web Share falla (p.ej. Chrome iOS / iframe)
        setOpen(true);
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
                aria-label="Compartir por WhatsApp"
              >
                WhatsApp
              </a>
            </Button>
            <Button asChild variant="secondary">
              <a
                href={shareLinks.instagram}
                aria-label="Abrir Instagram Stories"
              >
                Instagram Stories
              </a>
            </Button>
            <Button
              variant="secondary"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(message)
                } catch {}
              }}
              aria-label="Copiar texto"
            >
              Copiar texto
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default ShareButton;
