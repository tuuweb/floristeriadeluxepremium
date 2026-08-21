import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { ArrowUpRight, Clock, Flower2, Gem, Truck } from "lucide-react";
import HeroSlider from "@/components/HeroSlider";
import ProductCard from "@/components/ProductCard";
import PetalCanvas from "@/components/PetalCanvas";
import { categoriesQuery, productsQuery } from "@/lib/queries";
import { useParallax, useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Floristería Deluxe Premium · Flores de lujo en Bogotá" },
      {
        name: "description",
        content:
          "Atelier floral premium en Bogotá: rosas de tallo largo, cajas firmadas y arreglos de autor con entrega el mismo día.",
      },
      { property: "og:title", content: "Floristería Deluxe Premium" },
      {
        property: "og:description",
        content: "Arreglos florales de lujo hechos a mano, entregados el mismo día en Bogotá.",
      },
    ],
  }),
  component: Home,
});

const BENEFITS = [
  { icon: Flower2, title: "Flor grado premium", copy: "Selección diaria de flor importada y nacional de primera calidad." },
  { icon: Clock, title: "Entrega el mismo día", copy: "Pedidos antes de 2:00 p.m. llegan hoy en Bogotá." },
  { icon: Gem, title: "Diseño de autor", copy: "Cada pieza se compone a mano en nuestro atelier." },
  { icon: Truck, title: "Envío cuidado", copy: "Transporte refrigerado y empaque firmado Deluxe." },
];

function Home() {
  useReveal();
  useParallax();
  const { data: categories } = useQuery(categoriesQuery);
  const { data: products } = useQuery(productsQuery);
  const featured = (products ?? []).filter((p) => p.is_featured).slice(0, 6);

  return (
    <>
      <HeroSlider />

      {/* Beneficios */}
      <section className="border-y border-border">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:grid-cols-2 md:px-8 lg:grid-cols-4">
          {BENEFITS.map((b, i) => (
            <div
              key={b.title}
              className="reveal flex gap-4"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <b.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <h3 className="font-display text-lg">{b.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{b.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Colecciones con aura rosa */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="diffused-light absolute inset-0" />
        <PetalCanvas density={12} speed={0.55} />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <div className="reveal max-w-xl">
            <p className="eyebrow">Colecciones</p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
              Cuatro maneras de <span className="text-lux-gradient italic">decir algo</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {(categories ?? []).map((c, i) => (
              <Link
                key={c.id}
                to="/coleccion/$slug"
                params={{ slug: c.slug }}
                className="reveal group relative block overflow-hidden rounded-sm"
                style={{ animationDelay: `${i * 110}ms` }}
              >
                <span className="aura-ring pointer-events-none absolute -inset-6 z-0 rounded-full bg-[radial-gradient(circle_at_50%_60%,var(--rose-glow),transparent_65%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                <span className="relative block overflow-hidden">
                  <img
                    src={c.image_url}
                    alt={c.name}
                    loading="lazy"
                    width={900}
                    height={1200}
                    className="aspect-3/4 w-full object-cover transition-transform duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" />
                  <span className="absolute inset-x-0 bottom-0 p-6">
                    <span className="font-display text-2xl text-cream">{c.name}</span>
                    <span className="mt-2 block text-xs leading-relaxed text-muted-foreground">
                      {c.description}
                    </span>
                    <span className="mt-4 inline-flex items-center gap-2 text-[10px] tracking-[0.26em] text-primary uppercase">
                      Ver colección <ArrowUpRight className="h-3 w-3" />
                    </span>
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Destacados */}
      <section className="border-t border-border py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="reveal flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Selección del atelier</p>
              <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
                Productos <span className="text-lux-gradient italic">destacados</span>
              </h2>
            </div>
            <Link
              to="/catalogo"
              className="group inline-flex items-center gap-2 text-[11px] tracking-[0.26em] uppercase hover:text-primary"
            >
              Ver todo el catálogo
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div className="mt-14 grid gap-x-7 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Editorial */}
      <section className="relative overflow-hidden border-t border-border">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 md:grid-cols-2 md:px-8 md:py-32">
          <div className="reveal-blur relative overflow-hidden rounded-sm" data-parallax="0.08">
            <img
              src="/img/hero-02.jpg"
              alt="Composición floral blanca del atelier"
              loading="lazy"
              width={1600}
              height={1100}
              className="aspect-4/5 w-full object-cover"
            />
          </div>
          <div className="reveal">
            <p className="eyebrow">El atelier</p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
              Flores tratadas como <span className="text-lux-gradient italic">alta costura</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Trabajamos con cortes frescos del día, hidratación controlada y una paleta
              cuidadosamente limitada. Nada es automático: la proporción, el peso del papel y el
              nudo de la cinta se deciden pieza por pieza.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              El resultado es un objeto de regalo que se ve —y se recuerda— como una pieza de
              diseño.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/catalogo"
                className="bg-primary px-8 py-4 text-[11px] tracking-[0.26em] text-primary-foreground uppercase"
              >
                Comprar ahora
              </Link>
              <Link
                to="/nosotros"
                className="border border-border px-8 py-4 text-[11px] tracking-[0.26em] uppercase hover:border-primary hover:text-primary"
              >
                Nuestra historia
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
