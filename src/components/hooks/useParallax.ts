import { useEffect } from "react";

export function useParallax() {
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      document.querySelectorAll<HTMLElement>("[data-speed]").forEach((el) => {
        const speed = Number(el.dataset.speed) || 0;
        if (!el.dataset.baseTransform) {
          const cs = getComputedStyle(el).transform;
          el.dataset.baseTransform = cs === "none" ? "" : cs;
        }
        const base = el.dataset.baseTransform ?? "";
        el.style.transform = `${base} translateY(${y * speed}px)`;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}

export default useParallax;
