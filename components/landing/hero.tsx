import { ArrowRight, MessageCircle, Store } from "lucide-react";
import Image from "next/image";

import { Countdown } from "@/components/landing/countdown";
import { TOTAL_PRODUCTS, WHATSAPP_URL } from "@/lib/offers";

export const Hero = () => (
  <section aria-labelledby="hero-title" className="bg-ink text-white">
    <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-7 md:py-16 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-14 lg:py-20">
      <div className="flex flex-col items-start">
        <p className="border-gold/40 text-gold inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-semibold">
          <span className="bg-gold size-2 rounded-full" aria-hidden="true" />
          {`${TOTAL_PRODUCTS} ofertas ativas no Mercado Livre`}
        </p>

        <h1
          id="hero-title"
          className="font-display mt-5 text-6xl leading-none font-extrabold tracking-tight text-balance uppercase sm:text-7xl lg:text-8xl"
        >
          Black Friday
          <span className="text-gold block">Lojas Macedo</span>
        </h1>

        <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-pretty text-white/80">
          Chuveiros Zagonel e Lorenzetti, ventiladores Ventex, ferramentas e
          utilidades com preço de Black Friday, entrega rápida pelo FULL e
          parcelamento sem juros.
        </p>

        <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a
            href="#ofertas"
            className="bg-gold text-ink inline-flex min-h-13 items-center justify-center gap-2 rounded-md px-7 text-base font-bold transition-colors hover:bg-white"
          >
            Ver as ofertas
            <ArrowRight aria-hidden="true" className="size-5" />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-13 items-center justify-center gap-2 rounded-md border-2 border-white/25 px-7 text-base font-semibold transition-colors hover:border-white hover:bg-white/5"
          >
            <MessageCircle aria-hidden="true" className="size-5" />
            Pedir desconto no WhatsApp
          </a>
        </div>

        <div className="mt-10 flex flex-col gap-3">
          <p className="text-sm font-semibold text-white/70">
            As ofertas terminam em:
          </p>
          <Countdown />
        </div>
      </div>

      <div className="relative">
        <div className="border-gold relative overflow-hidden rounded-lg border-8">
          <Image
            src="/images/hero.jpg"
            alt="Fachada da loja Macedo Materiais para Construção"
            width={900}
            height={675}
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
        <div className="text-ink absolute -bottom-5 left-4 flex items-center gap-3 rounded-md bg-white px-4 py-3 shadow-xl sm:left-6">
          <span className="bg-gold flex size-10 items-center justify-center rounded-md">
            <Store aria-hidden="true" className="size-5" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-bold">Loja física de verdade</span>
            <span className="text-stone text-sm">
              Atendimento direto com quem entende
            </span>
          </span>
        </div>
      </div>
    </div>
  </section>
);
