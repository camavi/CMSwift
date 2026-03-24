const useForm = CMSwift.useForm({
  model: _rod({ email: "", role: "user" }),
  validateOn: "blur",
  rules: {
    email: [
      (v) => (!!v && String(v).includes("@")) || "Email non valida",
    ],
    role: [(v) => !!v || "Seleziona un ruolo"],
  },
});

const fEmail = useForm.field("email", { hint: "Inserisci un'email valida" });
const fRole = useForm.field("role");
const modelTest = _rod(null);

const basicSample = [
  'const useForm = CMSwift.useForm({',
  '  model: _rod({ email: "", role: "user" }),',
  '  validateOn: "blur",',
  '  rules: {',
  '    email: [',
  '      (v) => (!!v && String(v).includes("@")) || "Email non valida",',
  '    ],',
  '    role: [(v) => !!v || "Seleziona un ruolo"],',
  '  },',
  '});',
  'const fEmail = useForm.field("email", { hint: "Inserisci un\'email valida" });',
  'const fRole = useForm.field("role");',
  'const modelTest = _rod(null);',
];

const listSample = {
  basic: {
    code: _ui.Form(
      { useForm, onSubmit: async (model) => console.log("SUBMIT", model) },
      () => [
        _ui.Input({
          label: "Email",
          model: fEmail.model,
          error: () => fEmail.error(),
          hint: fEmail.hint,
          onInput: fEmail.onInput,
          onBlur: fEmail.onBlur,
          clearable: true,
        }),
        _ui.Select({
          label: "Ruolo",
          model: fRole.model,
          error: fRole.error,
          options: ["user", "admin", "editor"],
          clearable: true,
        }),
        _ui.Toolbar(
          { justify: "space-between" },
          _ui.Btn({ onClick: () => useForm.reset() }, "Reset"),
          _ui.Btn(
            {
              color: "primary",
              type: "submit",
              loading: useForm.submitting.value,
            },
            "Invia"
          )
        ),
        _h.div(
          { class: "cms-error" },
          () => useForm.submitError.value || ""
        ),
      ]
    ),
    sample: [
      ...basicSample,
      "_ui.Form(",
      "  { useForm, onSubmit: async (model) => console.log('SUBMIT', model) },",
      "  () => [",
      "    _ui.Input({ model: fEmail.model, error: fEmail.error() }),",
      "    _ui.Select({ model: fRole.model, error: fRole.error }),",
      "    _ui.Toolbar(",
      "      { justify: 'space-between' },",
      "      _ui.Btn({ onClick: () => useForm.reset() }, 'Reset'),",
      "      _ui.Btn({ color: 'primary', type: 'submit', loading: useForm.submitting.value }, 'Invia')",
      "    ),",
      "    _h.div({ class: 'cms-error' }, () => useForm.submitError.value || '')",
      "  ]",
      ")",
    ]
  }
};

const form = _h.div({ class: "cms-panel cms-page" },
  _h.h1("Form"),
  _h.p("Form wrapper integrato con `useForm`: gestisce submit async e stato submitting. Children possono essere function(form)."),
  _h.h2("Props principali"),
  _ui.List(
    _ui.Item("size: dimensione del componente (xs-sm-md-lg-xl)"),
    _ui.Item("state: success, warning, danger, info, primary, secondary"),
    _ui.Item("outline, shadow, borderRadius, clickable per stile e interazione")
  ),
  _h.h2("Documentazione API"),
  CMSwift.ui.DocTable("Form"),
  _h.h2("Esempio completo"),
  _ui.Card({ header: "Demo" },
    boxCode('Basic Email', listSample.basic),
  ),
);

export { form };
