import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { ShoppingBag } from "lucide-react";
import type { Product } from "@/lib/queries";
import { settingsQuery } from "@/lib/queries";
import { formatMoney } from "@/lib/format";
import { useStore } from "@/lib/store";
import { useI18n } from "@/lib/i18n";

export default function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const { add, currency } = useStore();
  const { t } = useI18n();
  const { data: settings } = useQuery(settingsQuery);
  const trm = Number(settings?.["trm_cop_usd"] ?? 3950);
  const [added, setAdded] = useState(false);

  const onAdd = () => {
    add(product);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 600);
  };

  return (
    <article
      className="group relative"
      data-anim="fade-up"
      style={{ "--delay": `${Math.min(index, 8) * 90}ms` } as React.CSSProperties}
    >
      <Link
        to="/producto/$slug"
        params={{ slug: product.slug }}
        className="aura-glow press block overflow-hidden rounded-sm bg-secondary"
      >
        <div className="relative z-1 aspect-4/5 overflow-hidden rounded-sm">
          <img
            src={product.images?.[0] ?? "/img/prod-01.jpg"}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-108"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-45 transition-opacity duration-700 group-hover:opacity-95" />
          {product.compare_price_cop ? (
            <span className="absolute top-4 left-4 bg-accent px-3 py-1 text-[9px] tracking-[0.24em] text-accent-foreground uppercase">
              {t("product.sale")}
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
          onClick={onAdd}
          aria-label={`${t("product.addToCart")}: ${product.name}`}
          className="press mt-1 rounded-full border border-border p-2.5 transition-all duration-500 hover:border-primary hover:bg-primary hover:text-primary-foreground"
        >
          <ShoppingBag className={`h-4 w-4 ${added ? "animate-cart-pop" : ""}`} />
        </button>
      </div>
    </article>
  );
}
