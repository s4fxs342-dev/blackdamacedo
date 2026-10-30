import {
  BadgeCheck,
  MousePointerClick,
  PackageCheck,
  Search,
} from "lucide-react";
import Image from "next/image";

const reasons = [
  {
    description:
      "Somos uma loja de materiais para construção com endereço, equipe e estoque de verdade.",
    title: "Loja física e atendimento humano",
  },
  {
    description:
      "Zagonel, Lorenzetti, Ventex e B-max: marcas que você já conhece e confia.",
    title: "Marcas originais",
  },
  {
    description:
      "Você compra pelo Mercado Livre, com pagamento protegido e envio rastreado.",
    title: "Compra segura do começo ao fim",
  },
];

const steps = [
  {
    description: "Navegue pelas categorias e encontre o que precisa.",
    icon: Search,
    title: "Escolha o produto",
  },
  {
    description: "Veja o preço de Black Friday e as parcelas no anúncio.",
    icon: MousePointerClick,
    title: "Clique em Ver oferta",
  },
  {
    description: "Finalize no Mercado Livre e receba rápido pelo FULL.",
    icon: PackageCheck,
    title: "Receba em casa",
  },
];

export const WhyMacedo = () => (
  <section
    id="por-que-macedo"
    aria-labelledby="why-title"
    className="scroll-mt-4 bg-white py-20"
  >
    <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-7 lg:grid-cols-2 lg:items-center lg:gap-16">
      <div className="relative order-last lg:order-first">
        <Image
          src="/images/atendimento.jpg"
          alt="Fachada amarela da Macedo Materiais para Construção"
          width={900}
          height={675}
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="aspect-[4/3] w-full rounded-lg object-cover"
        />
      </div>
      <div>
        <p className="text-cocoa text-sm font-bold tracking-widest uppercase">
          Por que comprar com a Macedo
        </p>
        <h2
          id="why-title"
          className="font-display text-ink mt-3 text-4xl leading-none font-bold text-balance sm:text-5xl"
        >
          Preço de Black Friday com a confiança de quem está do seu lado
        </h2>
        <ul className="mt-8 flex flex-col gap-6">
          {reasons.map((reason) => (
            <li key={reason.title} className="flex gap-4">
              <BadgeCheck
                aria-hidden="true"
                className="text-gold mt-0.5 size-6 shrink-0"
              />
              <span>
                <span className="text-ink block text-lg font-bold">
                  {reason.title}
                </span>
                <span className="text-stone block leading-relaxed">
                  {reason.description}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="mx-auto mt-20 max-w-7xl px-4 sm:px-7">
      <h2 className="font-display text-ink text-center text-3xl font-bold uppercase sm:text-4xl">
        Como aproveitar em 3 passos
      </h2>
      <ol className="mt-10 grid gap-4 md:grid-cols-3">
        {steps.map(({ description, icon: Icon, title }, index) => (
          <li
            key={title}
            className="bg-paper flex flex-col gap-4 rounded-lg p-6"
          >
            <div className="flex items-center justify-between">
              <span className="bg-ink text-gold flex size-12 items-center justify-center rounded-md">
                <Icon aria-hidden="true" className="size-6" />
              </span>
              <span
                aria-hidden="true"
                className="font-display text-ink/15 text-5xl leading-none font-extrabold"
              >
                {`0${index + 1}`}
              </span>
            </div>
            <div>
              <h3 className="text-ink text-lg font-bold">{title}</h3>
              <p className="text-stone mt-1 leading-relaxed">{description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);
