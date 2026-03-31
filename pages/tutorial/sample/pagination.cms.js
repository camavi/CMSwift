const samplePage = _.rod(2);

const paginationSample = _.div({ class: "cms-panel cms-page" },
  _.h2("Pagination sample"),
  _.p("Paginazione standard con numeri, summary e controlli edge."),
  _.Card({ header: "Esempio" },
    _.Pagination({
      model: samplePage,
      total: 48,
      pageSize: 6,
      showEdges: true,
      color: "primary"
    })
  )
);

export { paginationSample };
