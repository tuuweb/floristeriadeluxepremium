import { useEffect } from "react";

/**
 * Activa las animaciones de entrada (.reveal / .reveal-blur) cuando el
 * elemento aparece en pantalla. Usa IntersectionObserver: 60fps, sin layout
 * thrashing y sin dependencias externas.
 */
export function useReveal() {
  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal:not(.is-in), .reveal-blur:not(.is-in)"),
    );
    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    for (const node of nodes) observer.observe(node);
    return () => observer.disconnect();
  });
}

/** Parallax suave basado en scroll, con requestAnimationFrame. */
export function useParallax(selector = "[data-parallax]") {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(selector));
    if (nodes.length === 0) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      for (const node of nodes) {
        const rect = node.getBoundingClientRect();
        if (rect.bottom < -200 || rect.top > vh + 200) continue;
        const speed = Number(node.dataset["parallax"] ?? 0.12);
        const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
        node.style.transform = `translate3d(0, ${(progress * speed * 100).toFixed(2)}px, 0)`;
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [selector]);
}
