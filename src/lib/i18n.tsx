import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";

export type Lang = "es" | "en";

const KEY = "fdp-lang-v1";

type Dict = Record<string, { es: string; en: string }>;

/** Diccionario de la interfaz. El contenido del catálogo vive en la base de datos. */
const DICT: Dict = {
  "nav.home": { es: "Inicio", en: "Home" },
  "nav.catalog": { es: "Catálogo", en: "Catalog" },
  "nav.atelier": { es: "Atelier", en: "Atelier" },
  "nav.contact": { es: "Contacto", en: "Contact" },
  "nav.panel": { es: "Panel", en: "Admin" },

  "cta.cart": { es: "Abrir carrito", en: "Open cart" },
  "cta.menu": { es: "Menú", en: "Menu" },
  "cta.shopNow": { es: "Comprar ahora", en: "Shop now" },
  "cta.viewCatalog": { es: "Ver todo el catálogo", en: "View full catalog" },
  "cta.viewCollection": { es: "Ver colección", en: "View collection" },
  "cta.ourStory": { es: "Nuestra historia", en: "Our story" },
  "cta.whatsapp": { es: "Pedir por WhatsApp", en: "Order via WhatsApp" },
  "cta.skipIntro": { es: "Saltar intro", en: "Skip intro" },

  "intro.location": { es: "Barranquilla · Atelier Floral", en: "Barranquilla · Floral Atelier" },
  "intro.tagline": {
    es: "El arte de regalar flores, elevado a experiencia.",
    en: "The art of giving flowers, elevated to an experience.",
  },

  "home.benefits.eyebrow": { es: "Por qué Deluxe", en: "Why Deluxe" },
  "home.b1.title": { es: "Flor grado premium", en: "Premium grade flowers" },
  "home.b1.copy": {
    es: "Selección diaria de flor importada y nacional de primera calidad.",
    en: "Daily selection of top-grade imported and local blooms.",
  },
  "home.b2.title": { es: "Entrega el mismo día", en: "Same-day delivery" },
  "home.b2.copy": {
    es: "Pedidos antes de 2:00 p.m. llegan hoy en Barranquilla.",
    en: "Orders before 2:00 p.m. arrive today in Barranquilla.",
  },
  "home.b3.title": { es: "Diseño de autor", en: "Signature design" },
  "home.b3.copy": {
    es: "Cada pieza se compone a mano en nuestro atelier.",
    en: "Every piece is composed by hand in our atelier.",
  },
  "home.b4.title": { es: "Envío cuidado", en: "Careful shipping" },
  "home.b4.copy": {
    es: "Transporte refrigerado y empaque firmado Deluxe.",
    en: "Refrigerated transport and signed Deluxe packaging.",
  },

  "home.collections.eyebrow": { es: "Colecciones", en: "Collections" },
  "home.collections.title1": { es: "Cuatro maneras de", en: "Four ways to" },
  "home.collections.title2": { es: "decir algo", en: "say something" },
  "home.featured.eyebrow": { es: "Selección del atelier", en: "Atelier selection" },
  "home.featured.title1": { es: "Productos", en: "Featured" },
  "home.featured.title2": { es: "destacados", en: "creations" },
  "home.editorial.eyebrow": { es: "El atelier", en: "The atelier" },
  "home.editorial.title1": { es: "Flores tratadas como", en: "Flowers treated like" },
  "home.editorial.title2": { es: "alta costura", en: "haute couture" },
  "home.editorial.p1": {
    es: "Trabajamos con cortes frescos del día, hidratación controlada y una paleta cuidadosamente limitada. Nada es automático: la proporción, el peso del papel y el nudo de la cinta se deciden pieza por pieza.",
    en: "We work with cuts fresh from the day, controlled hydration and a carefully limited palette. Nothing is automatic: proportion, paper weight and ribbon knot are decided piece by piece.",
  },
  "home.editorial.p2": {
    es: "El resultado es un objeto de regalo que se ve —y se recuerda— como una pieza de diseño.",
    en: "The result is a gift object that looks — and is remembered — like a design piece.",
  },

  "product.addToCart": { es: "Añadir al carrito", en: "Add to cart" },
  "product.sale": { es: "Oferta", en: "Sale" },

  "footer.about": {
    es: "Atelier floral de alta gama en Barranquilla. Diseñamos composiciones a mano con flor importada y nacional de grado premium, y las entregamos el mismo día.",
    en: "High-end floral atelier in Barranquilla. We hand-craft compositions with premium imported and local flowers, delivered the same day.",
  },
  "footer.collections": { es: "Colecciones", en: "Collections" },
  "footer.contact": { es: "Contacto", en: "Contact" },
  "footer.hours": { es: "Horario", en: "Opening hours" },

  "contact.hours.weekdays": { es: "Lunes a sábado", en: "Monday to Saturday" },
  "contact.hours.sunday": { es: "Domingo", en: "Sunday" },
  "contact.hours.whatsapp": { es: "Pedidos por WhatsApp", en: "WhatsApp orders" },
  "contact.maps": { es: "Ver en Google Maps", en: "View on Google Maps" },
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (key: string) => string };

const LangContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(KEY);
      if (saved === "en" || saved === "es") setLangState(saved);
    } catch {
      /* ignorar */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(KEY, l);
    } catch {
      /* ignorar */
    }
  }, []);

  const value = useMemo<Ctx>(
    () => ({
      lang,
      setLang,
      t: (key: string) => DICT[key]?.[lang] ?? key,
    }),
    [lang, setLang],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useI18n(): Ctx {
  const ctx = useContext(LangContext);
  if (!ctx) return { lang: "es", setLang: () => {}, t: (k) => DICT[k]?.es ?? k };
  return ctx;
}
