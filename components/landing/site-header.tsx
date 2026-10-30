import { MessageCircle, Truck } from "lucide-react";
import Image from "next/image";

import { WHATSAPP_URL } from "@/lib/offers";

export const SiteHeader = () => (
  <header>
    <div className="bg-gold text-ink">
      <p className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2 text-center text-sm font-semibold sm:px-7">
        <Truck aria-hidden="true" className="size-4 shrink-0" />
        <span>
          Black Friday Macedo: ofertas reais, entrega FULL e parcelamento sem
          juros
        </span>
      </p>
    </div>
    <div className="bg-white">
      <div className="mx-auto flex min-h-18 max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-7">
        <a href="#main" aria-label="Macedo Materiais para Construção, início">
          <Image
            src="/images/logo.jpg"
            alt="Macedo Materiais para Construção"
            width={429}
            height={252}
            priority
            className="h-12 w-auto sm:h-14"
          />
        </a>
        <nav
          aria-label="Principal"
          className="hidden items-center gap-7 md:flex"
        >
          <a
            href="#ofertas"
            className="text-stone hover:text-ink text-base font-semibold transition-colors"
          >
            Ofertas
          </a>
          <a
            href="#por-que-macedo"
            className="text-stone hover:text-ink text-base font-semibold transition-colors"
          >
            Por que a Macedo
          </a>
          <a
            href="#duvidas"
            className="text-stone hover:text-ink text-base font-semibold transition-colors"
          >
            Dúvidas
          </a>
        </nav>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-ink hover:bg-gold hover:text-ink inline-flex min-h-11 items-center gap-2 rounded-md px-4 text-base font-semibold text-white transition-colors"
        >
          <MessageCircle aria-hidden="true" className="size-4" />
          <span className="hidden sm:inline">Falar com o vendedor</span>
          <span className="sm:hidden">WhatsApp</span>
        </a>
      </div>
    </div>
  </header>
);
