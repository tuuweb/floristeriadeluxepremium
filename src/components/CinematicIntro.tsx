import { useEffect, useState } from "react";
import PetalCanvas from "./PetalCanvas";

const SEEN_KEY = "fdp-intro-seen";

/**
 * Intro cinematográfica: negro absoluto → lluvia de pétalos (canvas) →
 * revelación progresiva de la marca → fotografía floral → salida.
 */
export default function CinematicIntro() {
  const [stage, setStage] = useState(0); // 0 oculto/negro, 1 pétalos, 2 marca, 3 foto, 4 salida
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    let skip = false;
    try {
      skip = sessionStorage.getItem(SEEN_KEY) === "1";
    } catch {
      /* ignorar */
    }
    if (skip || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setMounted(true);
    document.body.style.overflow = "hidden";

    const timers = [
      window.setTimeout(() => setStage(1), 350),
      window.setTimeout(() => setStage(2), 1500),
      window.setTimeout(() => setStage(3), 3600),
      window.setTimeout(() => setStage(4), 5600),
      window.setTimeout(() => {
        setMounted(false);
        document.body.style.overflow = "";
        try {
          sessionStorage.setItem(SEEN_KEY, "1");
        } catch {
          /* ignorar */
        }
      }, 6500),
    ];

    return () => {
      timers.forEach((t) => window.clearTimeout(t));
      document.body.style.overflow = "";
    };
  }, []);

  const close = () => {
    setStage(4);
    window.setTimeout(() => {
      setMounted(false);
      document.body.style.overflow = "";
      try {
        sessionStorage.setItem(SEEN_KEY, "1");
      } catch {
        /* ignorar */
      }
    }, 700);
  };

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-100 overflow-hidden bg-background transition-opacity duration-800 ${
        stage >= 4 ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      {/* Fotografía floral que emerge de la oscuridad */}
      <div
        className={`absolute inset-0 transition-all duration-2000 ease-out ${
          stage >= 3 ? "scale-100 opacity-60" : "scale-110 opacity-0"
        }`}
        style={{
          backgroundImage: "url(/img/hero-01.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/60 to-background" />
      <div className="diffused-light absolute inset-0" />

      {stage >= 1 && <PetalCanvas density={40} speed={1.35} burst />}

      <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
        <p
          className={`eyebrow transition-all duration-1200 ${
            stage >= 2 ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          Bogotá · Atelier Floral
        </p>
        <h1
          className={`mt-6 font-display text-4xl leading-[1.05] transition-all duration-1500 sm:text-6xl md:text-7xl ${
            stage >= 2 ? "translate-y-0 opacity-100 blur-0" : "translate-y-6 opacity-0 blur-md"
          }`}
        >
          <span className="text-lux-gradient block">Floristería</span>
          <span className="text-lux-gradient mt-1 block tracking-[0.16em]">Deluxe Premium</span>
        </h1>
        <div
          className={`hairline mt-8 w-56 transition-opacity duration-1000 ${
            stage >= 3 ? "opacity-100" : "opacity-0"
          }`}
        />
        <p
          className={`mt-6 max-w-md text-sm font-light text-muted-foreground transition-all duration-1200 ${
            stage >= 3 ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          El arte de regalar flores, elevado a experiencia.
        </p>
      </div>

      <button
        onClick={close}
        className="absolute right-6 bottom-6 text-[10px] tracking-[0.3em] text-muted-foreground uppercase transition-colors hover:text-primary"
      >
        Saltar intro
      </button>
    </div>
  );
}
