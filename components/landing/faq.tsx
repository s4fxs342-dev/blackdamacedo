import { ChevronDown } from "lucide-react";

const questions = [
  {
    answer:
      "O preço promocional é exibido diretamente no anúncio do Mercado Livre, que sempre mostra o valor mais atualizado. Basta clicar em Ver oferta.",
    question: "Por que o preço de Black Friday não aparece aqui?",
  },
  {
    answer:
      "Os produtos são enviados pelo FULL do Mercado Livre, com envio rápido e rastreamento. O prazo exato para o seu CEP aparece no anúncio.",
    question: "Qual é o prazo de entrega?",
  },
  {
    answer:
      "Sim. A compra é feita pelo Mercado Livre e conta com a Compra Garantida: se algo der errado, você recebe o seu dinheiro de volta.",
    question: "É seguro comprar?",
  },
  {
    answer:
      "Pode. Chame o vendedor no WhatsApp para negociar compras em quantidade ou tirar dúvidas sobre voltagem e potência.",
    question: "Consigo um desconto maior?",
  },
  {
    answer:
      "Os valores e o estoque podem mudar a qualquer momento no Mercado Livre. Recomendamos garantir o seu produto enquanto a oferta está ativa.",
    question: "Até quando valem as ofertas?",
  },
];

export const Faq = () => (
  <section
    id="duvidas"
    aria-labelledby="faq-title"
    className="bg-paper scroll-mt-4 py-20"
  >
    <div className="mx-auto max-w-3xl px-4 sm:px-7">
      <h2
        id="faq-title"
        className="font-display text-ink text-center text-4xl font-bold uppercase sm:text-5xl"
      >
        Dúvidas frequentes
      </h2>
      <div className="mt-10 flex flex-col gap-3">
        {questions.map((item) => (
          <details
            key={item.question}
            className="group rounded-lg border border-black/10 bg-white open:shadow-sm"
          >
            <summary className="text-ink flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-lg font-semibold [&::-webkit-details-marker]:hidden">
              {item.question}
              <ChevronDown
                aria-hidden="true"
                className="text-stone size-5 shrink-0 transition-transform group-open:rotate-180"
              />
            </summary>
            <p className="text-stone px-5 pb-5 leading-relaxed">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </div>
  </section>
);
