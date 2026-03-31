const catalogPage = _.rod(2);
const ordersPage = _.rod(4);
const mobilePage = _.rod(1);
const auditPage = _.rod(7);
const lastPaginationEvent = _.rod("Nessuna interazione");

const catalogItems = [
  { title: "Drop Linen Shirt", subtitle: "Stock live per campagna Primavera." },
  { title: "Studio Canvas Tote", subtitle: "Bundle con upsell accessori dedicati." },
  { title: "Everyday Denim", subtitle: "Analisi taglie con sell-through giornaliero." },
  { title: "Soft Knit Set", subtitle: "Preview collezione con early access VIP." },
  { title: "Travel Organizer", subtitle: "Push bundle in landing CRM segmentata." },
  { title: "Compact Wallet", subtitle: "Promo last week e ritorni organici in crescita." },
  { title: "Active Jacket", subtitle: "Creatività paid con focus su benefit prodotto." },
  { title: "Mono Backpack", subtitle: "Cross-sell checkout e retention automation." },
  { title: "Ribbed Tee", subtitle: "Best seller con restock confermato dal magazzino." },
  { title: "Field Sneakers", subtitle: "Campione QA pronto per foto e marketplace." },
  { title: "Layered Coat", subtitle: "Prezzo test per cluster returning buyers." },
  { title: "Studio Cap", subtitle: "SKU rapido per offerte sotto i 30 euro." }
];

const orderRows = [
  { code: "#1048", state: "Paid", subtitle: "Milano • 2 articoli • oggi 10:22" },
  { code: "#1047", state: "Packing", subtitle: "Torino • 1 articolo • oggi 09:54" },
  { code: "#1046", state: "Pending", subtitle: "Roma • 5 articoli • oggi 09:21" },
  { code: "#1045", state: "Paid", subtitle: "Bologna • 3 articoli • oggi 08:40" },
  { code: "#1044", state: "Review", subtitle: "Lione • 2 articoli • ieri 18:32" },
  { code: "#1043", state: "Paid", subtitle: "Madrid • 1 articolo • ieri 17:56" },
  { code: "#1042", state: "Refund", subtitle: "Napoli • 1 articolo • ieri 16:18" },
  { code: "#1041", state: "Packing", subtitle: "Bari • 4 articoli • ieri 15:42" },
  { code: "#1040", state: "Paid", subtitle: "Firenze • 2 articoli • ieri 15:08" },
  { code: "#1039", state: "Pending", subtitle: "Parigi • 3 articoli • ieri 14:37" },
  { code: "#1038", state: "Paid", subtitle: "Verona • 2 articoli • ieri 13:52" },
  { code: "#1037", state: "Review", subtitle: "Palermo • 6 articoli • ieri 13:06" },
  { code: "#1036", state: "Paid", subtitle: "Monaco • 1 articolo • ieri 12:21" },
  { code: "#1035", state: "Packing", subtitle: "Genova • 2 articoli • ieri 11:43" },
  { code: "#1034", state: "Paid", subtitle: "Padova • 2 articoli • ieri 11:10" },
  { code: "#1033", state: "Refund", subtitle: "Trieste • 1 articolo • ieri 10:32" },
  { code: "#1032", state: "Pending", subtitle: "Catania • 4 articoli • ieri 10:05" },
  { code: "#1031", state: "Paid", subtitle: "Ancona • 2 articoli • ieri 09:36" }
];

const auditBlocks = [
  { title: "SEO template checks", subtitle: "Conferma canonical, structured data e redirect finali." },
  { title: "Checkout copy review", subtitle: "Rifinitura microcopy per errori, empty state e CTA." },
  { title: "CRM footer links", subtitle: "Verifica legal, unsubscribe e preferenze lingua." },
  { title: "Warehouse webhooks", subtitle: "Ritenti automatici su timeout e fallback in dashboard." },
  { title: "Promo badge QA", subtitle: "Allineamento spacing su homepage, listing e PDP." },
  { title: "Analytics consent mode", subtitle: "Cross-check eventi lato client e server." },
  { title: "Localization ES / FR", subtitle: "Ultimo giro con market owner e customer support." },
  { title: "Landing hero contrast", subtitle: "Controllo readability mobile sui nuovi visual." },
  { title: "Returns policy card", subtitle: "Aggiornamento FAQ con nuova soglia spedizione." }
];

const sliceRows = (rows, page, pageSize) => {
  const start = (page - 1) * pageSize;
  return rows.slice(start, start + pageSize);
};

const mountReactiveNode = (render) => {
  const host = _.div();
  const appendValue = (value) => {
    if (value == null) return;
    if (Array.isArray(value)) {
      value.forEach(appendValue);
      return;
    }
    if (value?.nodeType) {
      host.appendChild(value);
      return;
    }
    host.appendChild(document.createTextNode(String(value)));
  };
  CMSwift.reactive.effect(() => {
    host.innerHTML = "";
    appendValue(render());
  });
  return host;
};

const renderCatalogPreview = () => _.List({
  marker: false,
  items: sliceRows(catalogItems, Number(catalogPage.value || 1), 4).map((item) => ({
    icon: "inventory_2",
    title: item.title,
    subtitle: item.subtitle
  }))
});

const renderOrdersPreview = () => _.List({
  marker: false,
  divider: true,
  items: sliceRows(orderRows, Number(ordersPage.value || 1), 3).map((item) => ({
    icon: "receipt_long",
    title: item.code,
    subtitle: item.subtitle,
    aside: _.Chip({ size: "xs", outline: true }, item.state)
  }))
});

const renderAuditPreview = () => _.List({
  marker: false,
  items: sliceRows(auditBlocks, Number(auditPage.value || 1), 1).map((item) => ({
    icon: "fact_check",
    title: item.title,
    subtitle: item.subtitle
  }))
});

const listSample = {
  basic: {
    code: [
      _.div({ class: "cms-m-b-md" },
        _.b("Pagina corrente: "),
        _.span(catalogPage)
      ),
      _.Pagination({
        model: catalogPage,
        max: 3,
        showEdges: true,
        color: "primary",
        onChange: (page) => {
          lastPaginationEvent.value = `Catalogo aggiornato a pagina ${page}`;
        }
      }),
      _.div({ class: "cms-m-t-md" }, mountReactiveNode(renderCatalogPreview))
    ],
    sample: [
      "const catalogPage = _.rod(2);",
      "_.Pagination({",
      "  model: catalogPage,",
      "  max: 3,",
      "  showEdges: true,",
      '  color: "primary",',
      "  onChange: (page) => {",
      '    lastPaginationEvent.value = `Catalogo aggiornato a pagina ${page}`;',
      "  }",
      "});"
    ]
  },
  totalAndSummary: {
    code: [
      _.div({ class: "cms-m-b-md" },
        _.b("Ultima azione: "),
        _.span(lastPaginationEvent)
      ),
      _.Pagination({
        model: ordersPage,
        total: orderRows.length,
        pageSize: 3,
        showEdges: true,
        color: "secondary",
        slots: {
          summary: ({ from, to, total, page, pages }) => _.span(
            total ? `Ordini ${from}-${to} di ${total} • pagina ${page}/${pages}` : "0 ordini"
          )
        },
        onChange: (page, ctx) => {
          lastPaginationEvent.value = `Orders desk: pagina ${page} (${ctx.from}-${ctx.to})`;
        }
      }),
      _.div({ class: "cms-m-t-md" }, mountReactiveNode(renderOrdersPreview))
    ],
    sample: [
      "const ordersPage = _.rod(4);",
      "_.Pagination({",
      "  model: ordersPage,",
      `  total: ${orderRows.length},`,
      "  pageSize: 3,",
      "  showEdges: true,",
      '  color: "secondary",',
      "  slots: {",
      "    summary: ({ from, to, total, page, pages }) => _.span(",
      '      total ? `Ordini ${from}-${to} di ${total} • pagina ${page}/${pages}` : "0 ordini"',
      "    )",
      "  }",
      "});"
    ]
  },
  compact: {
    code: [
      _.div({ class: "cms-m-b-md" },
        _.b("Mobile step: "),
        _.span(() => `${mobilePage.value}/5`)
      ),
      _.Pagination({
        model: mobilePage,
        max: 5,
        dense: true,
        simple: true,
        showSummary: true,
        color: "info",
        slots: {
          prev: ({ page }) => `Step ${Math.max(1, page - 1)}`,
          next: ({ page, pages }) => `Step ${Math.min(pages, page + 1)}`
        }
      })
    ],
    sample: [
      "const mobilePage = _.rod(1);",
      "_.Pagination({",
      "  model: mobilePage,",
      "  max: 5,",
      "  dense: true,",
      "  simple: true,",
      "  showSummary: true,",
      '  color: "info",',
      "  slots: {",
      "    prev: ({ page }) => `Step ${Math.max(1, page - 1)}`,",
      "    next: ({ page, pages }) => `Step ${Math.min(pages, page + 1)}`",
      "  }",
      "});"
    ]
  },
  slots: {
    code: [
      _.Pagination({
        model: auditPage,
        total: auditBlocks.length,
        pageSize: 1,
        siblings: 0,
        boundaryCount: 1,
        showEdges: true,
        color: "warning",
        slots: {
          start: ({ page, pages }) => _.Chip({ size: "xs", outline: true, color: "warning" }, `Audit ${page}/${pages}`),
          first: "Inizio",
          prev: _.span("Indietro"),
          next: _.span("Avanti"),
          last: "Fine",
          page: ({ page, active }) => active ? _.b(page) : page,
          ellipsis: _.span("..."),
          end: _.Chip({ size: "xs", outline: true }, "QA flow")
        },
        onChange: (page) => {
          lastPaginationEvent.value = `Audit review alla pagina ${page}`;
        }
      }),
      _.div({ class: "cms-m-t-md" }, mountReactiveNode(renderAuditPreview))
    ],
    sample: [
      "const auditPage = _.rod(7);",
      "_.Pagination({",
      "  model: auditPage,",
      `  total: ${auditBlocks.length},`,
      "  pageSize: 1,",
      "  siblings: 0,",
      "  boundaryCount: 1,",
      "  showEdges: true,",
      '  color: "warning",',
      "  slots: {",
      '    start: ({ page, pages }) => _.Chip({ size: "xs", outline: true, color: "warning" }, `Audit ${page}/${pages}`),',
      '    first: "Inizio",',
      '    prev: _.span("Indietro"),',
      '    next: _.span("Avanti"),',
      '    last: "Fine",',
      "    page: ({ page, active }) => active ? _.b(page) : page,",
      '    ellipsis: _.span("..."),',
      '    end: _.Chip({ size: "xs", outline: true }, "QA flow")',
      "  }",
      "});"
    ]
  }
};

const pagination = _.div({ class: "cms-panel cms-page" },
  _.h1("Pagination"),
  _.p("Componente standard per navigare pagine controllate o derivate da `total/pageSize`, con numeri, controlli edge, ellissi, summary e slots custom."),
  _.h2("Props principali"),
  _.List(
    _.Item("`max` oppure `total + pageSize`: definiscono il numero totale di pagine"),
    _.Item("`model`, `page`, `value`: pagina corrente controllata o iniziale"),
    _.Item("`showPages`, `showSummary`, `showEdges`, `showFirst`, `showLast`: controllano il layout"),
    _.Item("`siblings` e `boundaryCount`: regolano quanti numeri mostrare attorno alla pagina attiva"),
    _.Item("slots `start`, `end`, `first`, `prev`, `page`, `ellipsis`, `next`, `last`, `summary`")
  ),
  _.h2("Documentazione API"),
  _.docTable("Pagination"),
  _.h2("Esempio completo"),
  boxCode("Catalog pagination", listSample.basic),
  boxCode("Total + pageSize summary", listSample.totalAndSummary),
  boxCode("Compact / simple flow", listSample.compact),
  boxCode("Slots personalizzati", listSample.slots)
);

export { pagination };
