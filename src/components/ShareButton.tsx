import { useState } from "react";
import { Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { shareAsImage } from "@/lib/ShareAsImage";

interface ShareButtonProps {
  bookTitle: string;
}

export function ShareButton({ bookTitle }: ShareButtonProps) {
  const [open, setOpen] = useState(false);
  const message = `Completé el Quiz y obtuve el libro "${bookTitle}"! :D`;
  const shareLinks = {
    whatsapp: `https://wa.me/?text=${encodeURIComponent(message)}`,
    instagram: "instagram://story-camera",
  };

  const handleShare = async () => {
    try {
      if (navigator.canShare) {
        const testFile = new File([""], "test.png", { type: "image/png" });
        if (navigator.canShare({ files: [testFile] })) {
          await shareAsImage(bookTitle);
          return;
        }
      }
    } catch {
      // ignore and show fallback
    }
    setOpen(true);
  };

  return (
    <>
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
                } catch {
                  // ignore
                }
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
