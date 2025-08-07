import { defaultCatalog } from "@/lib/results/catalog";
import type { Catalog } from "@/lib/quiz/scoring";

const KEY = "catalogoLibros";

export function getCatalog(): Catalog {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return defaultCatalog;
    const parsed = JSON.parse(raw) as Catalog;
    // naive validation
    if (parsed && typeof parsed === "object") return parsed;
    return defaultCatalog;
  } catch (e) {
    return defaultCatalog;
  }
}

export function saveCatalog(cat: Catalog) {
  localStorage.setItem(KEY, JSON.stringify(cat));
}

export function resetCatalog() {
  localStorage.removeItem(KEY);
}

export function exportCatalog(cat: Catalog) {
  const blob = new Blob([JSON.stringify(cat, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "catalogo-libros.json";
  a.click();
  URL.revokeObjectURL(url);
}
