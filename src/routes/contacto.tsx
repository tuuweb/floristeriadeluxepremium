import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { settingsQuery } from "@/lib/queries";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto y pedidos a medida · Floristería Deluxe Premium" },
      {
        name: "description",
        content:
          "Escríbenos por WhatsApp para pedidos corporativos, eventos o arreglos florales a medida en Barranquilla.",
      },
      { property: "og:title", content: "Contacto · Deluxe Premium" },
      {
        property: "og:description",
        content: "Pedidos a medida, eventos y arreglos corporativos en Barranquilla.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  useReveal();
  const { data: settings } = useQuery(settingsQuery);
  const phone = settings?.["whatsapp_number"] ?? "573006301123";
  const [message, setMessage] = useState("");

  const field =
    "w-full border border-input bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-primary";

  return (
    <div className="pt-32 pb-24 md:pt-40">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:grid-cols-2 md:px-8">
        <div className="reveal">
          <p className="eyebrow">Contacto</p>
          <h1 className="mt-4 font-display text-5xl leading-tight md:text-6xl">
            Hablemos de tu <span className="text-lux-gradient italic">pieza</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            Diseñamos arreglos a medida para bodas, eventos corporativos, hoteles y regalos
            especiales. Cuéntanos qué necesitas y te respondemos el mismo día.
          </p>
          <ul className="mt-10 space-y-4 text-sm text-muted-foreground">
            <li className="flex items-center gap-3">
              <MessageCircle className="h-4 w-4 text-primary" /> WhatsApp +{phone}
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-primary" />
              {settings?.["email"] ?? "floristeriadeluxe@gmail.com"}
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-primary" />
              {settings?.["address"] ?? "Barranquilla, Colombia"}
            </li>
          </ul>
        </div>

        <div className="surface-glass reveal rounded-sm p-8">
          <p className="eyebrow">Pedido a medida</p>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Cuéntanos ocasión, presupuesto, fecha y ciudad de entrega…"
            className={`${field} mt-6 min-h-40`}
          />
          <a
            href={`https://wa.me/${phone}?text=${encodeURIComponent(message || "Hola, quiero un arreglo a medida.")}`}
            target="_blank"
            rel="noreferrer"
            className="mt-6 block w-full bg-primary py-4 text-center text-[11px] tracking-[0.28em] text-primary-foreground uppercase"
          >
            Enviar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
