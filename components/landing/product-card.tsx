import { ExternalLink } from "lucide-react";
import Image from "next/image";

import type { Product } from "@/lib/offers";
import { formatBRL } from "@/lib/offers";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  brand: string;
  brandClass: string;
}

export const ProductCard = ({
  brand,
  brandClass,
  product,
}: ProductCardProps) => (
  <a
    href={product.href}
    target="_blank"
    rel="noopener noreferrer"
    className="group hover:border-ink/40 flex flex-col overflow-hidden rounded-lg border border-black/10 bg-white transition hover:-translate-y-0.5 hover:shadow-lg"
  >
    <div className="relative flex h-40 items-center justify-center border-b border-black/5 bg-white p-4 sm:h-48">
      <span className="bg-ink absolute top-3 left-3 rounded-sm px-2 py-0.5 text-xs font-bold tracking-wide text-white uppercase">
        Black Friday
      </span>
      <Image
        src={product.image}
        alt=""
        width={200}
        height={200}
        loading="lazy"
        className="max-h-full w-auto object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <div className="flex flex-1 flex-col p-4">
      <span
        className={cn("text-xs font-bold tracking-wide uppercase", brandClass)}
      >
        {brand}
      </span>
      <h3 className="text-ink mt-1 line-clamp-3 flex-1 text-base leading-snug font-medium">
        {product.name}
      </h3>
      <div className="mt-3 min-h-11">
        {product.listPrice > 0 ? (
          <p className="text-stone text-sm">
            {"De "}
            <s>{formatBRL(product.listPrice)}</s>
          </p>
        ) : null}
        <p className="text-ink text-sm font-semibold">
          Preço Black Friday no anúncio
        </p>
      </div>
      <span className="bg-ink group-hover:bg-gold group-hover:text-ink mt-3 inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-3 text-base font-semibold text-white transition-colors">
        Ver oferta
        <ExternalLink aria-hidden="true" className="size-4" />
        <span className="sr-only">(abre o Mercado Livre em nova aba)</span>
      </span>
    </div>
  </a>
);
