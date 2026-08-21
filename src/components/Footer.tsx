import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { categoriesQuery, settingsQuery } from "@/lib/queries";

export default function Footer() {
  const { data: settings } = useQuery(settingsQuery);
  const { data: categories } = useQuery(categoriesQuery);
  const phone = settings?.["whatsapp_number"] ?? "573001234567";

  return (
    <footer className="relative overflow-hidden border-t border-border">
      <div className="diffused-light absolute inset-0 opacity-60" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <img src="/logo.png" alt="Floristería Deluxe Premium" className="h-14 w-auto" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Atelier floral de alta gama en Bogotá. Diseñamos composiciones a mano con flor
            importada y nacional de grado premium, y las entregamos el mismo día.
          </p>
          <div className="mt-7 flex items-center gap-4">
            <a
              href={`https://wa.me/${phone}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border p-2.5 transition-colors hover:border-primary/60"
              aria-label="WhatsApp"
            >
              <Phone className="h-4 w-4" />
            </a>
            <a
              href={settings?.["instagram"] ?? "https://instagram.com"}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border p-2.5 transition-colors hover:border-primary/60"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <p className="eyebrow">Colecciones</p>
          <ul className="mt-5 space-y-2.5">
            {(categories ?? []).map((c) => (
              <li key={c.id}>
                <Link
                  to="/coleccion/$slug"
                  params={{ slug: c.slug }}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">Contacto</p>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-primary" />
              {settings?.["address"] ?? "Bogotá, Colombia"}
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 text-primary" />
              {settings?.["email"] ?? "hola@floristeriadeluxe.com"}
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 text-primary" />+{phone}
            </li>
          </ul>
          <Link to="/admin" className="mt-6 inline-block text-[10px] tracking-[0.24em] uppercase">
            Panel
          </Link>
        </div>
      </div>
      <div className="hairline" />
      <p className="py-6 text-center text-[10px] tracking-[0.24em] text-muted-foreground uppercase">
        © {new Date().getFullYear()} Floristería Deluxe Premium
      </p>
    </footer>
  );
}
