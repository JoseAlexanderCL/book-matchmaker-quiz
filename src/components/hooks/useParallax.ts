import { useEffect } from "react";

export function useParallax() {
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      document
        .querySelectorAll<HTMLElement>(
          "[data-speed],[data-speed-x],[data-speed-y]"
        )
        .forEach((el) => {
          const speedX = Number(el.dataset.speedX) || 0;
          const speedY = Number(el.dataset.speedY || el.dataset.speed) || 0;
          if (!el.dataset.baseTransform) {
            const cs = getComputedStyle(el).transform;
            el.dataset.baseTransform = cs === "none" ? "" : cs;
          }
          const base = el.dataset.baseTransform ?? "";
          const transforms = [base];
          if (speedX) transforms.push(`translateX(${y * speedX}px)`);
          if (speedY) transforms.push(`translateY(${y * speedY}px)`);
          el.style.transform = transforms.join(" ").trim();
        });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}

export default useParallax;
