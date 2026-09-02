import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { settingsQuery, type CustomerAddress, type Profile } from "@/lib/queries";
import { formatMoney } from "@/lib/format";
import { useStore } from "@/lib/store";
import { useI18n } from "@/lib/i18n";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Finalizar pedido · Floristería Deluxe Premium" },
      {
        name: "description",
        content:
          "Completa los datos de entrega y confirma tu pedido de flores premium por WhatsApp.",
      },
      { property: "og:title", content: "Finalizar pedido · Deluxe Premium" },
      {
        property: "og:description",
        content: "Datos de entrega, dedicatoria y confirmación por WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Checkout,
});

const SLOTS = ["9:00 – 12:00", "12:00 – 15:00", "15:00 – 18:00", "18:00 – 20:00"];

const emptyForm = {
  customer_name: "",
  customer_phone: "",
  customer_email: "",
  recipient_name: "",
  address: "",
  city: "Barranquilla",
  delivery_date: "",
  delivery_slot: SLOTS[0]!,
  dedication: "",
  notes: "",
};

function Checkout() {
  const { t } = useI18n();
  useReveal();
  const { lines, subtotal, clear, currency } = useStore();
  const { data: settings } = useQuery(settingsQuery);
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({ ...emptyForm });
  const [userId, setUserId] = useState<string | null>(null);
  const [addresses, setAddresses] = useState<CustomerAddress[]>([]);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      const uid = data.session?.user?.id ?? null;
      setUserId(uid);
      if (!uid) return;
      supabase
        .from("profiles")
        .select("*")
        .eq("user_id", uid)
        .maybeSingle()
        .then(({ data: profile }) => {
          const p = profile as Profile | null;
          if (p) {
            setForm((prev) => ({
              ...prev,
              customer_name: p.full_name || prev.customer_name,
              customer_phone: p.phone || prev.customer_phone,
              customer_email: p.email || prev.customer_email,
            }));
          }
        });
      supabase
        .from("customer_addresses")
        .select("*")
        .eq("user_id", uid)
        .order("is_default", { ascending: false })
        .then(({ data }) => setAddresses((data ?? []) as CustomerAddress[]));
    });
  }, []);

  const trm = Number(settings?.["trm_cop_usd"] ?? 3950);
  const shipping = Number(settings?.["shipping_cop"] ?? 18000);
  const freeFrom = Number(settings?.["free_shipping_from_cop"] ?? 350000);
  const shippingDue = subtotal >= freeFrom ? 0 : shipping;
  const total = subtotal + shippingDue;
  const whatsapp = settings?.["whatsapp_number"] ?? "573006301123";

  const set = (key: keyof typeof form, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const applyAddress = (a: CustomerAddress) => {
    setForm((prev) => ({
      ...prev,
      recipient_name: a.recipient_name ?? prev.recipient_name,
      address: a.address,
      city: a.city,
      notes: a.notes ?? prev.notes,
    }));
  };

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (lines.length === 0) return;
    if (!form.customer_name || !form.customer_phone || !form.address) {
      toast.error(t("checkout.required"));
      return;
    }
    setSending(true);

    const payload = {
      customer_name: form.customer_name,
      customer_phone: form.customer_phone,
      customer_email: form.customer_email || null,
      recipient_name: form.recipient_name || null,
      address: form.address,
      city: form.city,
      delivery_date: form.delivery_date || null,
      delivery_slot: form.delivery_slot,
      dedication: form.dedication || null,
      notes: form.notes || null,
      items: lines.map((l) => ({
        product_id: l.product_id,
        name: l.name,
        slug: l.slug,
        image: l.image,
        qty: l.qty,
        price_cop: l.price_cop,
      })),
      subtotal_cop: subtotal,
      shipping_cop: shippingDue,
      total_cop: total,
      user_id: userId,
    };

    const { data, error } = await supabase
      .from("orders")
      .insert(payload)
      .select("order_number")
      .single();

    setSending(false);

    if (error) {
      toast.error(t("checkout.error"));
      return;
    }

    const orderNumber = (data as { order_number: string } | null)?.order_number ?? "";
    const message = [
      `*Nuevo pedido ${orderNumber}* — Floristería Deluxe Premium`,
      "",
      ...lines.map((l) => `• ${l.qty} × ${l.name} — ${formatMoney(l.price_cop * l.qty, "COP", trm)}`),
      "",
      `Subtotal: ${formatMoney(subtotal, "COP", trm)}`,
      `Envío: ${shippingDue === 0 ? t("cart.freeShipping") : formatMoney(shippingDue, "COP", trm)}`,
      `*Total: ${formatMoney(total, "COP", trm)}*`,
      "",
      `Cliente: ${form.customer_name} (${form.customer_phone})`,
      form.recipient_name ? `Recibe: ${form.recipient_name}` : "",
      `Dirección: ${form.address}, ${form.city}`,
      form.delivery_date ? `Fecha: ${form.delivery_date} · ${form.delivery_slot}` : "",
      form.dedication ? `Dedicatoria: ${form.dedication}` : "",
      form.notes ? `Notas: ${form.notes}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    clear();
    toast.success(t("checkout.success").replace("{{order}}", orderNumber));
    window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const field =
    "w-full border border-input bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-primary";

  return (
    <div className="pt-32 pb-24 md:pt-40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="eyebrow reveal">Checkout</p>
        <h1 className="reveal mt-4 font-display text-4xl leading-tight md:text-5xl">
          {t("checkout.title1")} <span className="text-lux-gradient italic">{t("checkout.title2")}</span>
        </h1>

        {lines.length === 0 ? (
          <div className="reveal mt-16">
            <p className="font-display text-2xl text-muted-foreground">{t("cart.empty")}</p>
            <Link
              to="/catalogo"
              className="mt-6 inline-block bg-primary px-8 py-4 text-[11px] tracking-[0.26em] text-primary-foreground uppercase"
            >
              {t("cta.viewCatalog")}
            </Link>
          </div>
        ) : (
          <div className="mt-12 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
            <form onSubmit={submit} className="space-y-8">
              {addresses.length > 0 && (
                <fieldset className="reveal space-y-4">
                  <legend className="eyebrow mb-3">{t("checkout.savedAddresses")}</legend>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {addresses.map((a) => (
                      <button
                        key={a.id}
                        type="button"
                        onClick={() => applyAddress(a)}
                        className="press border border-border p-4 text-left transition-colors hover:border-primary"
                      >
                        <p className="text-sm font-medium">{a.label}</p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {a.address}, {a.city}
                        </p>
                        {a.recipient_name && (
                          <p className="text-[10px] text-muted-foreground">
                            {a.recipient_name} · {a.recipient_phone}
                          </p>
                        )}
                      </button>
                    ))}
                  </div>
                </fieldset>
              )}

              <fieldset className="reveal space-y-4">
                <legend className="eyebrow mb-3">{t("checkout.customer")}</legend>
                <input
                  className={field}
                  placeholder={t("checkout.name") + " *"}
                  value={form.customer_name}
                  onChange={(e) => set("customer_name", e.target.value)}
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    className={field}
                    placeholder={t("checkout.phone") + " *"}
                    value={form.customer_phone}
                    onChange={(e) => set("customer_phone", e.target.value)}
                  />
                  <input
                    className={field}
                    type="email"
                    placeholder={t("checkout.email")}
                    value={form.customer_email}
                    onChange={(e) => set("customer_email", e.target.value)}
                  />
                </div>
              </fieldset>

              <fieldset className="reveal space-y-4">
                <legend className="eyebrow mb-3">{t("checkout.recipient")}</legend>
                <input
                  className={field}
                  placeholder={t("checkout.name")}
                  value={form.recipient_name}
                  onChange={(e) => set("recipient_name", e.target.value)}
                />
                <input
                  className={field}
                  placeholder={t("checkout.address") + " *"}
                  value={form.address}
                  onChange={(e) => set("address", e.target.value)}
                />
                <div className="grid gap-4 sm:grid-cols-3">
                  <input
                    className={field}
                    placeholder={t("checkout.city")}
                    value={form.city}
                    onChange={(e) => set("city", e.target.value)}
                  />
                  <input
                    className={field}
                    type="date"
                    value={form.delivery_date}
                    onChange={(e) => set("delivery_date", e.target.value)}
                  />
                  <select
                    className={`${field} bg-card`}
                    value={form.delivery_slot}
                    onChange={(e) => set("delivery_slot", e.target.value)}
                  >
                    {SLOTS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </fieldset>

              <fieldset className="reveal space-y-4">
                <legend className="eyebrow mb-3">{t("checkout.summary")}</legend>
                <textarea
                  className={`${field} min-h-24`}
                  placeholder={t("checkout.dedication")}
                  value={form.dedication}
                  onChange={(e) => set("dedication", e.target.value)}
                />
                <textarea
                  className={`${field} min-h-20`}
                  placeholder={t("checkout.notes")}
                  value={form.notes}
                  onChange={(e) => set("notes", e.target.value)}
                />
              </fieldset>

              <button
                type="submit"
                disabled={sending}
                className="w-full bg-primary py-4 text-[11px] tracking-[0.28em] text-primary-foreground uppercase transition-opacity hover:opacity-90 disabled:opacity-50"
              >
                {sending ? "…" : t("checkout.send")}
              </button>
              <p className="text-center text-xs text-muted-foreground">
                {t("checkout.paymentNote")}
              </p>
            </form>

            <aside className="reveal surface-glass h-fit rounded-sm p-7">
              <p className="eyebrow">{t("checkout.summary")}</p>
              <ul className="mt-6 space-y-4">
                {lines.map((l) => (
                  <li key={l.product_id} className="flex gap-4">
                    <img
                      src={l.image}
                      alt={l.name}
                      loading="lazy"
                      className="h-20 w-16 rounded-sm object-cover"
                    />
                    <div className="flex-1 text-sm">
                      <p className="font-display text-lg leading-tight">{l.name}</p>
                      <p className="text-muted-foreground">
                        {l.qty} × {formatMoney(l.price_cop, currency, trm)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="hairline my-6" />
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>{t("cart.subtotal")}</span>
                  <span>{formatMoney(subtotal, currency, trm)}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t("cart.shipping")}</span>
                  <span>
                    {shippingDue === 0 ? t("cart.freeShipping") : formatMoney(shippingDue, currency, trm)}
                  </span>
                </div>
              </div>
              <div className="mt-5 flex items-baseline justify-between">
                <span className="eyebrow">{t("cart.total")}</span>
                <span className="font-display text-2xl text-primary">
                  {formatMoney(total, currency, trm)}
                </span>
              </div>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
}
