import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { ShoppingBag } from "lucide-react";
import type { Product } from "@/lib/queries";
import { settingsQuery } from "@/lib/queries";
import { formatMoney } from "@/lib/format";
import { useStore } from "@/lib/store";

export default function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const { add, currency } = useStore();
  const { data: settings } = useQuery(settingsQuery);
  const trm = Number(settings?.["trm_cop_usd"] ?? 3950);

  return (
    <article
      className="reveal group relative"
      style={{ animationDelay: `${Math.min(index, 8) * 90}ms` }}
    >
      <Link
        to="/producto/$slug"
        params={{ slug: product.slug }}
        className="block overflow-hidden rounded-sm bg-secondary"
      >
        <div className="relative aspect-4/5 overflow-hidden">
          <img
            src={product.images?.[0] ?? "/img/prod-01.jpg"}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-108"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-70 transition-opacity duration-700 group-hover:opacity-95" />
          {product.compare_price_cop ? (
            <span className="absolute top-4 left-4 bg-accent px-3 py-1 text-[9px] tracking-[0.24em] text-accent-foreground uppercase">
              Oferta
            </span>
          ) : null}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 translate-y-4 bg-gradient-to-t from-background to-transparent opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100" />
        </div>
      </Link>

      <div className="flex items-start justify-between gap-4 px-1 pt-5">
        <div>
          <Link to="/producto/$slug" params={{ slug: product.slug }}>
            <h3 className="font-display text-xl leading-tight transition-colors group-hover:text-primary">
              {product.name}
            </h3>
          </Link>
          <div className="mt-2 flex items-baseline gap-3">
            <span className="text-sm text-primary">
              {formatMoney(Number(product.price_cop), currency, trm)}
            </span>
            {product.compare_price_cop ? (
              <span className="text-xs text-muted-foreground line-through">
                {formatMoney(Number(product.compare_price_cop), currency, trm)}
              </span>
            ) : null}
          </div>
        </div>
        <button
          onClick={() => add(product)}
          aria-label={`Añadir ${product.name} al carrito`}
          className="mt-1 rounded-full border border-border p-2.5 transition-all duration-500 hover:border-primary hover:bg-primary hover:text-primary-foreground"
        >
          <ShoppingBag className="h-4 w-4" />
        </button>
      </div>
    </article>
  );
}
