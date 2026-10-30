import { MessageCircle } from "lucide-react";
import Image from "next/image";

import { WHATSAPP_URL } from "@/lib/offers";

export const FinalCta = () => (
  <section aria-labelledby="cta-title" className="bg-ink text-white">
    <div className="mx-auto flex max-w-7xl flex-col items-center px-4 py-20 text-center sm:px-7">
      <p className="text-gold text-sm font-bold tracking-widest uppercase">
        Atendimento exclusivo
      </p>
      <h2
        id="cta-title"
        className="font-display mt-4 max-w-[18ch] text-5xl leading-none font-extrabold text-balance uppercase sm:text-6xl lg:text-7xl"
      >
        Quer um desconto ainda maior?
      </h2>
      <p className="mt-5 max-w-[48ch] text-lg leading-relaxed text-pretty text-white/75">
        Fale direto com o vendedor no WhatsApp. Negociamos compras em quantidade
        e ajudamos você a escolher o produto certo.
      </p>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-whatsapp text-ink mt-9 inline-flex min-h-14 items-center gap-3 rounded-md px-8 text-lg font-bold transition-colors hover:bg-white"
      >
        <MessageCircle aria-hidden="true" className="size-6" />
        Chamar no WhatsApp
      </a>
      <p className="mt-4 text-sm text-white/55">
        Resposta rápida em horário comercial
      </p>
    </div>
  </section>
);

export const SiteFooter = () => (
  <footer className="bg-ink-deep pt-12 pb-28 text-sm text-white/60">
    <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-7 md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-4">
        <Image
          src="/images/logo.jpg"
          alt=""
          width={429}
          height={252}
          className="h-12 w-auto rounded bg-white p-1"
        />
        <div>
          <p className="font-display text-xl font-semibold text-white">
            Macedo Materiais para Construção
          </p>
          <p>Ofertas vendidas e entregues pelo Mercado Livre.</p>
        </div>
      </div>
      <p className="max-w-[44ch] md:text-right">
        Preços e disponibilidade sujeitos a alteração no Mercado Livre. Imagens
        meramente ilustrativas.
      </p>
    </div>
  </footer>
);

export const WhatsappFab = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-whatsapp text-ink fixed right-4 bottom-[calc(1rem+env(safe-area-inset-bottom,0px))] z-30 inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-base font-bold shadow-lg transition-colors hover:bg-white"
  >
    <MessageCircle aria-hidden="true" className="size-5" />
    Falar com vendedor
  </a>
);
