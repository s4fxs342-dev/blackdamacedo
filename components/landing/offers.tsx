import { OffersNav } from "@/components/landing/offers-nav";
import { ProductCard } from "@/components/landing/product-card";
import { OFFERS } from "@/lib/offers";
import { cn } from "@/lib/utils";

export const Offers = () => (
  <section
    id="ofertas"
    aria-labelledby="ofertas-title"
    className="bg-paper pb-20"
  >
    <OffersNav
      sections={OFFERS.map(({ key, label, items }) => ({
        count: items.length,
        id: `s-${key}`,
        label,
      }))}
    />

    <div className="mx-auto max-w-7xl px-4 sm:px-7">
      <div className="flex flex-col gap-3 pt-12 md:flex-row md:items-end md:justify-between">
        <div>
          <h2
            id="ofertas-title"
            className="font-display text-ink text-4xl leading-none font-bold uppercase sm:text-5xl"
          >
            Ofertas da semana
          </h2>
          <p className="text-stone mt-3 max-w-[60ch] text-pretty">
            O preço de Black Friday aparece direto no anúncio do Mercado Livre.
            Clique em qualquer produto para conferir o valor final e as
            condições de parcelamento.
          </p>
        </div>
      </div>

      {OFFERS.map((section) => (
        <section
          key={section.key}
          id={`s-${section.key}`}
          aria-labelledby={`t-${section.key}`}
          className="mt-14 scroll-mt-36"
        >
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <div className="flex items-stretch gap-4">
              <span
                aria-hidden="true"
                className={cn("w-1.5 rounded-full", section.accentClass)}
              />
              <div>
                <h3
                  id={`t-${section.key}`}
                  className="font-display text-ink text-3xl leading-none font-bold sm:text-4xl"
                >
                  {section.title}
                </h3>
                <p className="text-stone mt-1.5 text-base">
                  {section.description}
                </p>
              </div>
            </div>
            <span className="text-stone rounded-full border border-black/10 bg-white px-3 py-1 text-sm font-medium">
              {`${section.items.length} produtos`}
            </span>
          </div>
          <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
            {section.items.map((product) => (
              <li key={product.image} className="flex">
                <ProductCard
                  product={product}
                  brand={section.label}
                  brandClass={section.brandClass}
                />
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  </section>
);
