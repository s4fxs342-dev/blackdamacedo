const ML_BASE = "https://www.mercadolivre.com.br/";

export const WHATSAPP_URL = `https://wa.me/5517997429766?text=${encodeURIComponent(
  "Olá! Vi as ofertas de Black Friday da Macedo e quero um desconto especial."
)}`;

export const CAMPAIGN_ENDS_AT = "2026-11-30T23:59:59-03:00";

export interface Product {
  name: string;
  listPrice: number;
  href: string;
  image: string;
}

export interface OfferSection {
  key: string;
  label: string;
  title: string;
  description: string;
  accentClass: string;
  brandClass: string;
  items: Product[];
}

/* [nome, preço "de", link]. O preço Black Friday fica de propósito fora da
   página: o cliente o vê no anúncio. Link vazio leva ao WhatsApp. */
type RawItem = [name: string, listPrice: number, path: string];

const resolveHref = (path: string) => {
  if (!path) {
    return WHATSAPP_URL;
  }
  return /^https?:/u.test(path) ? path : ML_BASE + path;
};

const build = (
  section: Omit<OfferSection, "items">,
  raw: RawItem[]
): OfferSection => ({
  ...section,
  items: raw.map(([name, listPrice, path], index) => ({
    href: resolveHref(path),
    image: `/images/produtos/${section.key}${index + 1}.jpg`,
    listPrice,
    name,
  })),
});

export const OFFERS: OfferSection[] = [
  build(
    {
      accentClass: "bg-gold",
      brandClass: "text-cocoa",
      description: "Utilidades e ferramentas para o dia a dia.",
      key: "x",
      label: "Variedades",
      title: "Variedades, utilidades e ferramentas",
    },
    [
      [
        "Extensão B-max de 5 Tomadas com 4 USB + 1 USB-C, Cabo 2m",
        70.02,
        "extensao-b-max-de-5-tomadas-com-4-usb-1-usb-c-cabo-2m-bivolt-2500w-branco/p/MLB51169355?pdp_filters=item_id%3AMLB4469104003",
      ],
      [
        "Sapateira Vertical Moderna Aço Cromado 7 Prateleiras",
        76.21,
        "sapateira-vertical-moderna-aco-cromado-7-prateleiras/up/MLBU4067940779",
      ],
      [
        "Suporte Magnético B-max 360",
        29.9,
        "suporte-magnetico-bmax-360-para-celular-carro-3m-aluminio/up/MLBU3570958932",
      ],
      [
        "Alicate de Bico Meia Cana 6 Polegadas Profissional Reforçado",
        30.79,
        "alicate-de-bico-meia-cana-6-polegadas-profissional-reforcado/up/MLBU5369983344",
      ],
      [
        "Alicate Eletricista Multifuncional 9 Polegadas",
        51.9,
        "alicate-eletricista-multifuncional-9-pol-corta-desencapa-fio/up/MLBU5577191137",
      ],
      [
        "Marmita Lancheira Térmica Infantil",
        56.9,
        "https://produto.mercadolivre.com.br/MLB-5732230536-marmita-lancheira-termica-infantil-com-pote-e-divisoria-_JM",
      ],
      [
        "Difusor Aromático Ultrassônico 700ml Controle Remoto LED",
        51.9,
        "difusor-aromatico-ultrassonico-700ml-controle-remoto-led/up/MLBU5694297421",
      ],
      [
        "Maçarico Portátil com Acendimento Automático para Cartucho",
        29.9,
        "macarico-portatil-com-acendimento-automatico-para-cartucho/up/MLBU5744403208",
      ],
    ]
  ),
  build(
    {
      accentClass: "bg-zagonel",
      brandClass: "text-zagonel-text",
      description: "Banho quente e econômico com a marca mais vendida.",
      key: "z",
      label: "Zagonel",
      title: "Chuveiros e duchas Zagonel",
    },
    [
      [
        "Zagonel Gorducha 4t 127V",
        115.9,
        "zagonel-gorducha-4t/up/MLBU4791371588",
      ],
      [
        "Zagonel Gorducha 4t 220V",
        115.9,
        "chuveiro-ducha-gorducha-4-temp-5400w-branco-zagonel-branco-54-kw/p/MLB77337293?pdp_filters=item_id%3AMLB5183044699",
      ],
      [
        "Chuveiro Elétrico Zagonel Moment 4 – 6.8 kW / 220V",
        179.9,
        "ducha-moment-4-temperaturas-6800w-branco-economico-de-parede/p/MLB27884946?pdp_filters=item_id%3AMLB4097557499",
      ],
      [
        "Chuveiro Elétrico de Parede Zagonel Eletrônica Moment 127v 5.5 kW",
        229.9,
        "chuveiro-zagonel-moment-eletronico-127-volts/p/MLB35967175?pdp_filters=item_id%3AMLB5040705525",
      ],
      [
        "Ducha Zagonel Moment Eletrônica 220v 6800w Branca",
        223.31,
        "chuveiro-zagonel-moment-eletronico-127-volts/p/MLB35967175?pdp_filters=item_id%3AMLB5040705525",
      ],
      [
        "Ducha Zagonel Moment Eletrônica 220v 6800w",
        0,
        "chuveiro-eletrico-de-parede-zagonel-moment-eletronica-6800w/p/MLB68921909?pdp_filters=item_id%3AMLB7907682906",
      ],
      [
        "Zagonel Eletrônica Moment 7500w Branco",
        219.9,
        "chuveiro-eletrico-zagonel-moment-eletronica-7500w-branco-parede/p/MLB51986760?pdp_filters=item_id%3AMLB5414778200",
      ],
      [
        "Zagonel Eletrônica Move 7.5 kW / 220V",
        325.6,
        "chuveiro-eletronico-zagonel-7500w-move-branco/p/MLB13495706?pdp_filters=item_id%3AMLB5437126082",
      ],
      [
        "Ducha Chuveiro Quadratta Eletrônico 5500w Zagonel Branco",
        279.69,
        "ducha-chuveiro-quadratta-eletronico-5500w-zagonel-cor-branco-potencia-55-kw/p/MLB51301970?pdp_filters=item_id%3AMLB4959332851",
      ],
      [
        "Chuveiro Eletrônico Quadratta Zagonel Branco 7700w",
        278.69,
        "chuveiro-eletronico-quadratta-zagonel-branco-7700w/p/MLB51109886?pdp_filters=item_id%3AMLB4299841095",
      ],
      [
        "Ducha Polo Eletrônica 7700W Branco Zagonel",
        443.9,
        "ducha-polo-eletronica-7700w-branco-zagonel/p/MLB70316168?pdp_filters=item_id%3AMLB7911624764",
      ],
      [
        "Ducha Polo Eletrônica 220V 5.5 kW Branco Zagonel",
        443.9,
        "chuveiro-ducha-eletronica-polo-espalhador-grande-5500w-branco-zagonel/p/MLB75961037?pdp_filters=item_id%3AMLB7911847432",
      ],
    ]
  ),
  build(
    {
      accentClass: "bg-lorenzetti",
      brandClass: "text-lorenzetti",
      description: "Pressão, conforto e controle de temperatura.",
      key: "l",
      label: "Lorenzetti",
      title: "Chuveiros e duchas Lorenzetti",
    },
    [
      [
        "Lorenzetti Advanced Eletrônica 5500w",
        376.43,
        "ducha-advanced-eletronica-5500w-controle-gradual-de-temperatura-lorenzetti/p/MLB27225635?pdp_filters=item_id%3AMLB6409516778",
      ],
      [
        "Chuveiro Ducha Lorenzetti Advanced 7500w Eletrônico",
        376.43,
        "chuveiro-advanced-multitemperatura-7500w-lorenzetti/p/MLB55541739?pdp_filters=item_id%3AMLB7020305216",
      ],
      [
        "Lorenzetti Advanced Multitemperaturas Branco 127v 5.5 kW",
        319.9,
        "lorenzetti-chuveiro-eletrico-advanced-multitemperaturas-branco-127v/p/MLB28580023?pdp_filters=item_id%3AMLB5815606742",
      ],
      [
        "Ducha Loren Shower Eletrônico Lorenzetti 127v 5500w",
        213.9,
        "ducha-loren-shower-eletronico-lorenzetti-127v-5500w-chuveiro-cor-branco/p/MLB21691247?pdp_filters=item_id%3AMLB5449538064",
      ],
      [
        "Chuveiro de Parede Lorenzetti Loren Shower Ultra Eletrônica",
        209.33,
        "chuveiro-loren-shower-ultra-eletronica-7500w-lorenzetti-branco-75-kw/p/MLB63561701?pdp_filters=item_id%3AMLB5292469097",
      ],
      [
        "Lorenzetti Loren Shower Ultra Branco",
        209.9,
        "chuveiro-lorenzetti-loren-shower-ultra-branco/p/MLB26017904?pdp_filters=item_id%3AMLB5925100154",
      ],
      [
        "Lorenzetti Loren Shower Ultra Multitemperaturas",
        210.9,
        "lorenzetti-loren-shower-ultra-multitemperaturas-de-220v-7500w-ducha-branca/p/MLB19590094?pdp_filters=item_id%3AMLB6766315278",
      ],
      [
        "Lorenzetti Loren Shower Ultra Multitemperaturas Branco 6.8 kW / 220V",
        220,
        "lorenzetti-loren-shower-ultra-multitemperaturas-chuveiro-branco/p/MLB22335179?pdp_filters=item_id%3AMLB5321529951",
      ],
      [
        "Chuveiro Lorenzetti Top Jet Eletrônica 5500w 127v",
        298.9,
        "chuveiro-top-jet-eletronica-5500w-lorenzetti/p/MLB19754410?pdp_filters=item_id%3AMLB7438976548",
      ],
      [
        "Chuveiro Lorenzetti Top Jet Eletrônico 7500w Branco",
        306.54,
        "chuveiro-ducha-lorenzetti-top-jet-eletronico-7500w-cor-branco-potencia-7500-w/p/MLB44014655?pdp_filters=item_id%3AMLB4117189767",
      ],
      [
        "Chuveiro de Parede Lorenzetti Top Jet Multitemperaturas",
        247.13,
        "ducha-lorenzetti-top-jet-multitemperaturas-5500w/p/MLB47271037?pdp_filters=item_id%3AMLB5292505783",
      ],
    ]
  ),
  build(
    {
      accentClass: "bg-ventex",
      brandClass: "text-ventex",
      description: "Ambiente fresco e silencioso para o verão.",
      key: "v",
      label: "Ventex",
      title: "Ventiladores Ventex",
    },
    [
      [
        "Ventilador de Teto Ventex Valen LED 3 Pás Branco Silencioso",
        421.67,
        "ventilador-de-teto-ventex-valen-led-3-pas-branco-silencioso/p/MLB17417858?pdp_filters=item_id%3AMLB4075918913",
      ],
      [
        "Ventilador de Teto Ventex Valen LED 3 Pás MDF Preto 1.1m Silencioso 127v",
        437,
        "ventilador-de-teto-ventex-valen-led-3-pas-mdf-preto-11m-diametro-silencioso/p/MLB17846989?pdp_filters=item_id%3AMLB4105500041",
      ],
      [
        "Ventilador de Teto Ventex Yris 3 Pás MDF Branco 127v",
        247.13,
        "ventilador-de-teto-ventex-yris-branco-3-pas-com-luz-led/p/MLB24071726?pdp_filters=item_id%3AMLB4075959315",
      ],
      [
        "Ventilador de Teto Ventex Yris Preto com Luz, Pás Reversíveis 1m 127v",
        339.9,
        "ventilador-de-teto-ventex-yris-preto-com-luz-pas-reversiveis-1-m-preto/p/MLB69940277?pdp_filters=item_id%3AMLB4179760581",
      ],
      [
        "Ventilador de Teto Ventex Yris 1.1m Preto Mogno MDF Silencioso 127v",
        342,
        "ventilador-de-teto-ventex-yris-11cm-preto-mogno-mdf-silencioso/p/MLB23291022?pdp_filters=item_id%3AMLB4179926373",
      ],
      [
        "Ventilador de Parede Ventex Tex6 Oscilante Max Turbo 60cm Bivolt Preto 127/220v Plástico 3 Pás",
        469.9,
        "ventilador-de-parede-ventex-tex6-oscilante-max-turbo-de-60cm-bivolt/p/MLB25165527?pdp_filters=item_id%3AMLB5486750191",
      ],
      [
        "Ventilador de Parede Ventex 60cm Branco 210W 3 Pás Plástico",
        469.9,
        "ventilador-de-parede-ventex-60cm-branco-210w-3-pas-plastico/p/MLB21479925?pdp_filters=item_id%3AMLB7911927654",
      ],
    ]
  ),
];

export const TOTAL_PRODUCTS = OFFERS.reduce(
  (sum, section) => sum + section.items.length,
  0
);

export const formatBRL = (value: number) =>
  value.toLocaleString("pt-BR", { currency: "BRL", style: "currency" });
