import { CreditCard, MessageCircle, ShieldCheck, Truck } from "lucide-react";

const perks = [
  {
    description: "Enviado pelo FULL do Mercado Livre.",
    icon: Truck,
    title: "Entrega rápida",
  },
  {
    description: "Confira as parcelas em cada anúncio.",
    icon: CreditCard,
    title: "Parcelamento sem juros",
  },
  {
    description: "Seu dinheiro protegido no Mercado Livre.",
    icon: ShieldCheck,
    title: "Compra Garantida",
  },
  {
    description: "Negocie direto com o vendedor.",
    icon: MessageCircle,
    title: "Atendimento no WhatsApp",
  },
];

export const TrustBar = () => (
  <section aria-label="Vantagens de comprar na Macedo" className="bg-white">
    <ul className="mx-auto grid max-w-7xl grid-cols-1 gap-px px-4 pt-10 pb-8 sm:grid-cols-2 sm:px-7 lg:grid-cols-4">
      {perks.map(({ description, icon: Icon, title }) => (
        <li
          key={title}
          className="flex items-start gap-4 py-4 lg:px-4 lg:first:pl-0"
        >
          <span className="bg-gold-soft text-cocoa flex size-11 shrink-0 items-center justify-center rounded-md">
            <Icon aria-hidden="true" className="size-5" />
          </span>
          <span className="flex flex-col">
            <span className="text-ink font-bold">{title}</span>
            <span className="text-stone text-base leading-snug">
              {description}
            </span>
          </span>
        </li>
      ))}
    </ul>
  </section>
);
