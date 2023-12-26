"use strict";
(self.webpackChunktrainer_dashboard =
  self.webpackChunktrainer_dashboard || []).push([
  [828],
  {
    6085: (e, a, l) => {
      l.d(a, { Z: () => t });
      l(2791);
      var s = l(6122),
        i = (l(6016), l(184));
      const t = () => (0, i.jsx)(s.Z, { errorType: "500" });
    },
    2398: (e, a, l) => {
      l.d(a, { Z: () => C });
      var s = l(2791),
        i = l(7705),
        t = l(4542),
        r = l(2095),
        n = l(6775),
        d = l(184);
      const o = (e) => {
        let {
          darkTheme: a = !1,
          register: l,
          control: i,
          helper: t,
          fieldKey: o,
          subFields: c,
          placeholder: m,
          size: p,
        } = e;
        const [u, h] = (0, s.useState)([]),
          [v, x] = (0, s.useState)(0);
        return (
          (0, s.useEffect)(() => {
            let e = [],
              a = 0;
            for (let l = 0; l < p; l++) e.push(l), a++;
            h(e), x(a);
          }, []),
          (0, d.jsxs)(d.Fragment, {
            children: [
              (0, d.jsx)("div", {
                className: "row",
                children: u.map((e, s) => {
                  const t = "".concat(o, "[").concat(e, "]");
                  return (0, d.jsx)(
                    "div",
                    {
                      className: "col-md-6",
                      children: (0, d.jsx)(
                        "fieldset",
                        {
                          name: t,
                          children: c.map((e, s) =>
                            "dynamic-dropdown" === e.type
                              ? (0, d.jsx)(n.Z, {
                                  defaultOptions: e.options,
                                  name: "".concat(t, ".").concat(e.fieldName),
                                  control: i,
                                  multi: e.multi,
                                  canCreate: e.canCreate,
                                })
                              : (0, d.jsx)(
                                  "div",
                                  {
                                    className: "p-2",
                                    children: (0, d.jsx)(r.Z, {
                                      label: e.label,
                                      type: e.type,
                                      placeholder: e.placeholder,
                                      name: ""
                                        .concat(t, ".")
                                        .concat(e.fieldName),
                                      refValue: l({
                                        required: e.required,
                                        ...(null === e || void 0 === e
                                          ? void 0
                                          : e.validation),
                                      }),
                                      id: e.id,
                                      readOnly: e.disabled,
                                      labelClass: e.labelClass,
                                      inputLabel: e.inputLabel,
                                      divClassNames: e.divClassNames,
                                      darkTheme: a,
                                      inputClassNames: e.inputClassNames,
                                    }),
                                  },
                                  s
                                )
                          ),
                        },
                        t
                      ),
                    },
                    s
                  );
                }),
              }),
              (0, d.jsxs)("button", {
                type: "button",
                className: "m-1 btn btn-primary small-btn p-2",
                onClick: () => {
                  h((e) => [...e, v]), x((e) => e + 1);
                },
                children: ["Add ", m],
              }),
              (0, d.jsxs)("button", {
                type: "button",
                className: "m-1 btn btn-danger small-btn p-2",
                onClick: () => {
                  h([]), x(0);
                },
                children: ["Clear ", m],
              }),
              (0, d.jsx)("small", {
                className: "form-text text-muted",
                children: t,
              }),
            ],
          })
        );
      };
      var c = l(8133),
        m = l(6085),
        p = l(968),
        u = l(8112),
        h = l(9678),
        v = l(952),
        x = l(4838),
        f = l(4077),
        N = l(9478),
        g = l(5322),
        b = l(7688);
      const j = (e) => {
        let { props: a, register: l, setValue: s } = e;
        return (0, d.jsxs)("div", {
          className: "preview-container",
          children: [
            (0, d.jsxs)("div", {
              className: "col-md-7 preview-container-left",
              children: [
                (0, d.jsx)("h3", {
                  className: "heading",
                  children: "Template Cards",
                }),
                (0, d.jsxs)("div", {
                  className: "template-cards-container",
                  children: [
                    (0, d.jsx)(b.Z, {
                      name: "Swadhin Saraf",
                      imgUrl:
                        "https://storage.googleapis.com/evolv-mobile/trainers/swadhintrainer.png",
                      peopleTrained: 204,
                      tagline: "INFS Certified",
                      colorIndex: 8,
                    }),
                    (0, d.jsx)(b.Z, {
                      name: "Ana Smith",
                      imgUrl:
                        "https://storage.googleapis.com/evolv-mobile/trainers/anasmithtrainer.png",
                      peopleTrained: 285,
                      tagline: "Fat Loss Expert",
                      colorIndex: 5,
                    }),
                  ],
                }),
              ],
            }),
            (0, d.jsxs)("div", {
              className: "col-md-5 preview-container-right",
              children: [
                (0, d.jsx)("h3", {
                  className: "heading",
                  children: "Your Card",
                }),
                (0, d.jsx)("div", {
                  className: "template-cards-container",
                  children: (0, d.jsx)(g.Z, {
                    register: l,
                    setValue: s,
                    idx: a.color,
                    value: a,
                  }),
                }),
              ],
            }),
          ],
        });
      };
      var y = l(7250);
      const C = (e) => {
        let {
          formDetails: a,
          postUrl: l,
          formName: g,
          formIcon: b,
          showTitle: C = !0,
          darkTheme: w = !1,
          defaultValues: Z,
          requestType: q = "post",
          saveButtonText: T,
          classNames: F = "",
          saveForLater: S = !1,
          previewCard: O = !1,
          transformations: k,
          setTransformations: L,
          callback: E = () => {},
          modifier: P = (e) => e,
        } = e;
        const [M, V] = (0, s.useState)(!1),
          [H, A] = (0, s.useState)(!1),
          [I, z] = (0, s.useState)(),
          [D, U] = (0, s.useState)({}),
          B = () => {
            let e = {};
            return Z
              ? (Object.values(a).forEach((a) => {
                  const l = a.idFieldName ? a.idFieldName : a.fieldName;
                  "flatlist" === a.type
                    ? (e[a.fieldName] = Z[l].map((e) => ({
                        [a.subFields[0].fieldName]: e,
                      })))
                    : "dynamic-dropdown" === a.type &&
                      a.multi &&
                      Z[l].length > 0 &&
                      "object" === typeof Z[l][0]
                    ? (e[a.fieldName] = Z[l].map((e) => e.id))
                    : (e[a.fieldName] = Z[l]);
                }),
                e)
              : (a.forEach((a) => {
                  "checkbox" === a.type
                    ? (e[a.fieldName] = !1)
                    : (e[a.fieldName] = "");
                }),
                e);
          },
          K = w ? "text-white" : "text-black",
          {
            register: R,
            handleSubmit: Y,
            control: _,
            errors: G,
            reset: J,
            setValue: Q,
            getValues: W,
            watch: X,
            formState: { isSubmitSuccessful: $ },
          } = (0, i.cI)({ defaultValues: B() }),
          ee = X();
        console.log(ee),
          (0, s.useEffect)(() => {
            $ && J(B());
          }, [$, D, J]),
          (0, s.useEffect)(() => {
            var e, a, l, s, i, t, r, n;
            (null === ee ||
            void 0 === ee ||
            null === (e = ee.phoneNumber) ||
            void 0 === e
              ? void 0
              : e.length) > 10 &&
              Q(
                "phoneNumber",
                null === ee ||
                  void 0 === ee ||
                  null === (i = ee.phoneNumber) ||
                  void 0 === i
                  ? void 0
                  : i.slice(0, 10)
              );
            (null === ee ||
            void 0 === ee ||
            null === (a = ee.experience) ||
            void 0 === a
              ? void 0
              : a.length) > 2 &&
              Q(
                "experience",
                null === ee ||
                  void 0 === ee ||
                  null === (t = ee.experience) ||
                  void 0 === t
                  ? void 0
                  : t.slice(0, 2)
              );
            (null === ee ||
            void 0 === ee ||
            null === (l = ee.tagline) ||
            void 0 === l
              ? void 0
              : l.length) > 20 &&
              Q(
                "phoneNumber",
                null === ee ||
                  void 0 === ee ||
                  null === (r = ee.tagline) ||
                  void 0 === r
                  ? void 0
                  : r.slice(0, 20)
              );
            (null === ee ||
            void 0 === ee ||
            null === (s = ee.peopleTrained) ||
            void 0 === s
              ? void 0
              : s.length) > 5 &&
              Q(
                "peopleTrained",
                null === ee ||
                  void 0 === ee ||
                  null === (n = ee.peopleTrained) ||
                  void 0 === n
                  ? void 0
                  : n.slice(0, 5)
              );
          }, [ee]);
        const ae = async (e) => {
            await le(e), U(e), V(!1);
          },
          le = async (e) => {
            V(!0);
            const a = await P(e);
            try {
              if ("post" === q) {
                const e = await t.Z.post(l, a, {
                  headers: { "Content-Type": "multipart/form-data;" },
                });
                E(e.data);
              } else if ("put" === q) {
                const e = await t.Z.put(l, a);
                E({
                  response: null === e || void 0 === e ? void 0 : e.data,
                  data: a,
                });
              } else "get" === q && E(a);
            } catch (r) {
              var s, i;
              z(
                null === r ||
                  void 0 === r ||
                  null === (s = r.response) ||
                  void 0 === s ||
                  null === (i = s.data) ||
                  void 0 === i
                  ? void 0
                  : i.message
              ),
                A(!0);
            }
          },
          se = (0, d.jsxs)(d.Fragment, {
            children: [
              C && (0, d.jsxs)("h4", { className: K, children: [g, " Form"] }),
              (() => {
                const e =
                  null === a || void 0 === a
                    ? void 0
                    : a.map((e, a) => {
                        if ("hidden-text" === e.type)
                          return (0, d.jsx)(
                            "input",
                            {
                              type: "text",
                              className: "".concat(
                                G[e.fieldName] ? "is-invalid" : ""
                              ),
                              name: e.fieldName,
                              ref: R({ required: e.required }),
                              hidden: !0,
                            },
                            a
                          );
                        if ("list" === e.type || "flatlist" === e.type) {
                          let l;
                          return (
                            (l =
                              Z && Z[e.fieldName] && Z[e.fieldName].length
                                ? Z[e.fieldName].length
                                : 0),
                            (0, d.jsx)(
                              "div",
                              {
                                className: "p-2 ".concat(e.classNames),
                                children: (0, d.jsx)(o, {
                                  darkTheme: w,
                                  register: R,
                                  control: _,
                                  helper: e.helper,
                                  fieldKey: e.fieldName,
                                  subFields: e.subFields,
                                  placeholder: e.placeholder,
                                  size: l,
                                }),
                              },
                              a
                            )
                          );
                        }
                        var l, s, i, t;
                        if ("dynamic-dropdown" === e.type)
                          return (0, d.jsxs)(
                            "div",
                            {
                              className: "p-2 ".concat(e.classNames),
                              children: [
                                (0, d.jsx)(n.Z, {
                                  defaultOptions: e.options,
                                  placeholder: e.placeholder,
                                  name: e.fieldName,
                                  errorClassName: G[e.fieldName]
                                    ? "is-invalid"
                                    : "",
                                  control: _,
                                  multi: e.multi,
                                  canCreate: e.canCreate,
                                  maxOptions: e.maxOptions,
                                  maxCharLength: e.maxCharLength,
                                  required: e.required,
                                  minOptions:
                                    null === e || void 0 === e
                                      ? void 0
                                      : e.minOptions,
                                }),
                                G[e.fieldName] &&
                                  (0, d.jsx)("small", {
                                    id: "firstNameHelp",
                                    className: "form-text text-danger",
                                    children:
                                      null === e ||
                                      void 0 === e ||
                                      null === (l = e.validation) ||
                                      void 0 === l
                                        ? void 0
                                        : l.errorMessage,
                                  }),
                                (0, d.jsx)("small", {
                                  id: e.fieldName + "Help",
                                  className: "form-text text-muted",
                                  children: e.helper,
                                }),
                              ],
                            },
                            a
                          );
                        if ("upload-button" === e.type) {
                          var c;
                          let l = !1;
                          return (
                            (e.required ||
                              (e.requiredDependsOn &&
                                (null === (c = W(e.requiredDependsOn)) ||
                                void 0 === c
                                  ? void 0
                                  : c.length) > 0)) &&
                              (l = !0),
                            (0, d.jsx)(
                              "div",
                              {
                                className: "p-2 ".concat(e.classNames),
                                children: (0, d.jsx)(x.Z, {
                                  name: e.fieldName,
                                  refValue: R({
                                    required: l,
                                    ...(null === e || void 0 === e
                                      ? void 0
                                      : e.validation),
                                  }),
                                  acceptableFileExtensions:
                                    e.acceptableFileExtensions,
                                  isError: G[e.fieldName],
                                  id: e.fieldName,
                                  buttonText:
                                    null === e || void 0 === e
                                      ? void 0
                                      : e.buttonText,
                                  onChange: e.onChange,
                                  required: e.required,
                                }),
                              },
                              a
                            )
                          );
                        }
                        return "gender-selection" === e.type
                          ? (0, d.jsx)(
                              "div",
                              {
                                className: "p-2 ".concat(e.classNames),
                                children: (0, d.jsx)(v.Z, { register: R }),
                              },
                              a
                            )
                          : "color-selection" === e.type
                          ? (0, d.jsx)(
                              "div",
                              {
                                className: "p-2 ".concat(e.classNames),
                                children: (0, d.jsx)(f.Z, {
                                  setValue: Q,
                                  register: R,
                                }),
                              },
                              a
                            )
                          : "date-picker" === e.type
                          ? (0, d.jsx)(
                              y.Z,
                              {
                                label: e.label,
                                classNames: e.classNames,
                                register: R,
                              },
                              a
                            )
                          : "transformations" === e.type
                          ? (0, d.jsx)(
                              N.b,
                              { transformations: k, setTransformations: L },
                              a
                            )
                          : "checkbox" === e.type
                          ? (0, d.jsxs)(
                              "div",
                              {
                                className: "p-2 ".concat(e.classNames),
                                children: [
                                  (0, d.jsx)("input", {
                                    type: e.type,
                                    placeholder: e.placeholder,
                                    name: e.fieldName,
                                    ref: R({ required: e.required }),
                                    readOnly: e.disabled,
                                  }),
                                  (0, d.jsx)("small", {
                                    id: e.fieldName + "Help",
                                    className: "form-text text-muted",
                                    children: e.helper,
                                  }),
                                ],
                              },
                              a
                            )
                          : "textarea" === e.type
                          ? (0, d.jsxs)(
                              "div",
                              {
                                className: "p-2 ".concat(e.classNames),
                                children: [
                                  (0, d.jsx)(u.Z, {
                                    divClassNames: e.divClassNames,
                                    labelClass: e.labelClass,
                                    label: e.label,
                                    name: e.fieldName,
                                    rows: "4",
                                    cols: "50",
                                    placeholder: e.placeholder,
                                    refValue: R({
                                      required: e.required,
                                      ...(null === e || void 0 === e
                                        ? void 0
                                        : e.validation),
                                    }),
                                    inputClassNames: e.inputClassNames,
                                  }),
                                  G[e.fieldName] &&
                                    (0, d.jsx)("small", {
                                      id: "firstNameHelp",
                                      className: "form-text text-danger",
                                      children:
                                        null === e ||
                                        void 0 === e ||
                                        null === (s = e.validation) ||
                                        void 0 === s
                                          ? void 0
                                          : s.errorMessage,
                                    }),
                                  (0, d.jsx)("small", {
                                    id: e.fieldName + "Help",
                                    className: "form-text text-muted",
                                    children: e.helper,
                                  }),
                                ],
                              },
                              a
                            )
                          : "star-rating" === e.type
                          ? (0, d.jsxs)(
                              "div",
                              {
                                children: [
                                  (0, d.jsx)("input", {
                                    name: e.fieldName,
                                    type: "hidden",
                                    ref: R({
                                      required: e.required,
                                      ...(null === e || void 0 === e
                                        ? void 0
                                        : e.validation),
                                    }),
                                  }),
                                  (0, d.jsxs)(
                                    "div",
                                    {
                                      className: "p-2 ".concat(e.classNames),
                                      children: [
                                        (0, d.jsx)(h.Z, {
                                          edit: !0,
                                          reverse: e.reverse,
                                          size: e.size,
                                          isHalf: !1,
                                          star:
                                            null === Z || void 0 === Z
                                              ? void 0
                                              : Z.star,
                                          showNumber: e.showNumber,
                                          onChange: (a) => {
                                            Q(e.fieldName, a);
                                          },
                                        }),
                                        G[e.fieldName] &&
                                          (0, d.jsx)("small", {
                                            id: "firstNameHelp",
                                            className: "form-text text-danger",
                                            children:
                                              null === e ||
                                              void 0 === e ||
                                              null === (i = e.validation) ||
                                              void 0 === i
                                                ? void 0
                                                : i.errorMessage,
                                          }),
                                      ],
                                    },
                                    a
                                  ),
                                ],
                              },
                              a
                            )
                          : (0, d.jsxs)(
                              "div",
                              {
                                className: "p-2 ".concat(e.classNames),
                                children: [
                                  (0, d.jsx)(r.Z, {
                                    label: e.label,
                                    errorClassName: G[e.fieldName]
                                      ? "is-invalid"
                                      : "",
                                    type: e.type,
                                    placeholder: e.placeholder,
                                    name: e.fieldName,
                                    refValue: R({
                                      required: e.required,
                                      ...(null === e || void 0 === e
                                        ? void 0
                                        : e.validation),
                                    }),
                                    required: e.required,
                                    readOnly: e.disabled,
                                    labelClass: e.labelClass,
                                    inputLabel: e.inputLabel,
                                    divClassNames: e.divClassNames,
                                    darkTheme: w,
                                    inputClassNames: e.inputClassNames,
                                    maxLength: e.maxLength,
                                  }),
                                  G[e.fieldName] &&
                                    (0, d.jsx)("small", {
                                      id: "firstNameHelp",
                                      className: "form-text text-danger",
                                      children:
                                        null === e ||
                                        void 0 === e ||
                                        null === (t = e.validation) ||
                                        void 0 === t
                                          ? void 0
                                          : t.errorMessage,
                                    }),
                                  (0, d.jsx)("small", {
                                    id: e.fieldName + "Help",
                                    className: "form-text text-muted",
                                    children: e.helper,
                                  }),
                                ],
                              },
                              a
                            );
                      });
                return (0, d.jsxs)(d.Fragment, {
                  children: [
                    (0, d.jsx)("small", {
                      className: "message error",
                      children: "All required fields are marked as *",
                    }),
                    (0, d.jsx)("form", {
                      onSubmit: Y(ae),
                      className: F,
                      children: (0, d.jsxs)("div", {
                        className: "row",
                        children: [
                          e,
                          O
                            ? (0, d.jsx)(j, {
                                props: ee,
                                register: R,
                                setValue: Q,
                              })
                            : (0, d.jsx)(d.Fragment, {}),
                          (0, d.jsx)("div", {
                            className: "d-flex",
                            children: M
                              ? (0, d.jsx)(p.Z, {
                                  classNames: "my-3",
                                  text: (0, d.jsx)("span", {
                                    className:
                                      "spinner-border spinner-border-sm",
                                  }),
                                  color: "green",
                                })
                              : (0, d.jsx)(p.Z, {
                                  type: "submit",
                                  classNames: "my-3",
                                  text: T || "Submit",
                                  icon: b,
                                  color: "green",
                                }),
                          }),
                        ],
                      }),
                    }),
                  ],
                });
              })(),
            ],
          });
        return (0, d.jsx)("div", {
          children: M
            ? (0, d.jsx)(c.Z, {})
            : H
            ? (0, d.jsx)(m.Z, { text: I })
            : se,
        });
      };
    },
    7688: (e, a, l) => {
      l.d(a, { Z: () => r });
      l(2791), l(4838);
      var s = l(9678),
        i = l(5785),
        t = l(184);
      const r = (e) => {
        let {
            name: a,
            imgUrl: l,
            tagline: r,
            colorIndex: n,
            peopleTrained: d,
            rating: o = 4.5,
          } = e,
          c = i.M[n].dark ? "white" : "black";
        return (0, t.jsxs)("div", {
          style: { backgroundColor: i.M[n].themeColor, color: c },
          className: "template-card-container",
          children: [
            (0, t.jsx)("div", {
              className: "left",
              children: (0, t.jsx)("img", {
                className: "trainer-image",
                src:
                  null !== l && void 0 !== l
                    ? l
                    : "https://storage.googleapis.com/evolv-assets/trainers/default.png",
                alt: "",
              }),
            }),
            (0, t.jsxs)("div", {
              className: "right",
              children: [
                (0, t.jsx)("p", { className: "name", children: a }),
                (0, t.jsx)(s.Z, {
                  size: "v-small",
                  star: o,
                  edit: !1,
                  align: "center",
                  reverse: !0,
                  count: 1,
                }),
                (0, t.jsx)("p", { className: "tagline", children: r }),
                (0, t.jsx)("p", {
                  className: "people-trained-text",
                  children: d,
                }),
                (0, t.jsx)("p", {
                  className: "people-trained",
                  children: "people trained",
                }),
              ],
            }),
          ],
        });
      };
    },
    32: (e, a, l) => {
      l.d(a, { Z: () => n });
      var s = l(2791),
        i = l(8652),
        t = l(7151),
        r = l(184);
      const n = (e) => {
        let { classNames: a = "" } = e;
        const { currentUser: l } = i.default,
          n = (0, s.useContext)(t.Z);
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsxs)("div", {
            className: "profile-image-text ".concat(a),
            children: [
              (0, r.jsx)("div", {
                className: "profile-container",
                children: (0, r.jsx)("img", {
                  className: "profile-image",
                  src: null === n || void 0 === n ? void 0 : n.profilePicture,
                }),
              }),
              (0, r.jsxs)("div", {
                className: "name-container",
                children: [
                  (0, r.jsx)("h6", {
                    className: "fullname",
                    children:
                      null === l || void 0 === l ? void 0 : l.displayName,
                  }),
                  (0, r.jsx)("p", {
                    className: "username",
                    children: null === l || void 0 === l ? void 0 : l.email,
                  }),
                ],
              }),
            ],
          }),
        });
      };
    },
    9828: (e, a, l) => {
      l.r(a), l.d(a, { default: () => u });
      var s = l(2791),
        i = l(2398),
        t = l(4542),
        r = l(8133),
        n = l(6085),
        d = l(4880),
        o = l(7151),
        c = l(184);
      const m = () => {
        const [e, a] = (0, s.useState)(!1),
          [l, m] = (0, s.useState)(!0),
          [p, u] = (0, s.useState)(""),
          [h, v] = (0, s.useState)([]),
          [x, f] = (0, s.useState)([]),
          N = (0, d.k6)(),
          g = (0, s.useContext)(o.Z),
          b = [
            {
              label: "Phone no.",
              type: "number",
              placeholder: "Enter your 10 digit Phone no.",
              fieldName: "phoneNumber",
              required: !0,
              classNames: "col-lg-6 col-md-12",
              inputClassNames: "white-border",
              inputLabel: "+91",
              labelClass: "phone",
              validation: {
                required: !0,
                minLength: 10,
                errorMessage: "Please Enter a valid phone number",
                maxLength: 10,
              },
              maxLength: 10,
            },
            {
              label: "DOB",
              type: "date-picker",
              classNames: "col-lg-3 col-md-4",
              required: !0,
            },
            { type: "gender-selection", classNames: "col-lg-3 col-md-6" },
            {
              label: "Experience",
              type: "number",
              fieldName: "experience",
              placeholder: "Select yrs. of experience",
              classNames: "col-md-6",
              inputClassNames: "white-border",
              labelClass: "experience",
              maxLength: 2,
            },
            {
              label: "People Trained",
              type: "number",
              fieldName: "peopleTrained",
              placeholder: "Approx. People Trained",
              classNames: "col-md-6",
              inputClassNames: "white-border",
              labelClass: "experience",
              maxLength: 5,
            },
            {
              label: "Expertise",
              type: "dynamic-dropdown",
              fieldName: "expertise",
              canCreate: !0,
              classNames: "col-md-8",
              placeholder: "Select your expertise",
              multi: !0,
              options: [],
              maxCharLength: 15,
              required: !0,
              maxOptions: 3,
              minOptions: 1,
              validation: {
                errorMessage: "Please enter between 1 to 3 expertise",
              },
            },
            {
              type: "upload-button",
              fieldName: "proofFile",
              buttonText: "Aadhar Card(Front & Back) in pdf",
              acceptableFileExtensions: [".pdf"],
              classNames: "col-md-4",
              required: !0,
              onChange: (e) =>
                "application/pdf" !== e.target.files[0].type
                  ? "Please upload a valid pdf file"
                  : e.target.files[0].size > 5e6
                  ? "Please upload a file less than 5MB."
                  : null,
            },
            {
              label: "Certificate",
              type: "dynamic-dropdown",
              fieldName: "certificateName",
              canCreate: !0,
              classNames: "col-md-8",
              placeholder: "Select your Certification",
              options: [],
              maxCharLength: 20,
              validation: { errorMessage: "Please enter valid name" },
            },
            {
              type: "upload-button",
              fieldName: "certificateFile",
              buttonText: "Upload Your Certificate",
              classNames: "col-md-4",
              requiredDependsOn: "certificateName",
              onChange: (e) =>
                ["image/png", "image/jpeg"].includes(e.target.files[0].type)
                  ? e.target.files[0].size > 5e6
                    ? "Please upload a file less than 5MB."
                    : null
                  : "Please upload a valid png or jpg file",
            },
            {
              label: "Interests",
              type: "dynamic-dropdown",
              fieldName: "interests",
              canCreate: !0,
              classNames: "col-md-8",
              placeholder: "Select your Interests",
              multi: !0,
              options: [],
              maxCharLength: 20,
              required: !0,
              minOptions: 1,
              maxOptions: 15,
              validation: {
                errorMessage: "Please enter between 1 to 15 interests",
              },
            },
            { type: "color-selection", classNames: "col-md-12" },
            {
              label: "Tagline",
              type: "text",
              fieldName: "tagline",
              placeholder: "Select your tagline (Max 20 characters)",
              classNames: "col-md-12",
              inputClassNames: "white-border",
              labelClass: "experience",
              validation: {
                maxLength: 20,
                errorMessage: "Maximum characters allowed is 20",
              },
              maxLength: 20,
            },
          ],
          j = (e) =>
            null === e || void 0 === e
              ? void 0
              : e.map((e) => ({ value: e, label: e }));
        (0, s.useEffect)(() => {
          (async () => {
            m(!0);
            try {
              const e = await t.Z.get("admin/formOptions/trainerOnboarding"),
                a = null === e || void 0 === e ? void 0 : e.data,
                l = [...b];
              (l[5] = {
                ...l[5],
                options: j(
                  null === a || void 0 === a ? void 0 : a.expertiseOptions
                ),
              }),
                (l[7] = {
                  ...l[7],
                  options: j(
                    null === a || void 0 === a ? void 0 : a.certificationOptions
                  ),
                }),
                (l[9] = {
                  ...l[9],
                  options: j(
                    null === a || void 0 === a ? void 0 : a.interestOptions
                  ),
                }),
                v(l);
            } catch (p) {
              a(!0);
            }
            m(!1);
          })();
        }, []);
        const y = (0, c.jsxs)(c.Fragment, {
          children: [
            (0, c.jsx)(i.Z, {
              classNames: "container",
              formDetails: h,
              formName: "Trainer Onboarding",
              requestType: "post",
              showTitle: !1,
              postUrl: "trainers/profile/add",
              resetFormOnSubmit: !0,
              callback: (e) =>
                (async (e) => {
                  if (e) {
                    var a;
                    m(!0);
                    const e = await t.Z.post("trainers/add");
                    g.setProfileRef(
                      null === e ||
                        void 0 === e ||
                        null === (a = e.data) ||
                        void 0 === a
                        ? void 0
                        : a.profileRef
                    ),
                      m(!1),
                      N.push("/");
                  }
                })(e),
              previewCard: !0,
              transformations: x,
              setTransformations: f,
              modifier: (e) =>
                (async (e) => {
                  const a = new FormData();
                  return (
                    Object.keys(e).forEach((l) => {
                      "proofFile" === l
                        ? 0 != e[l].length &&
                          a.append(
                            l,
                            Array.from(
                              null === e || void 0 === e ? void 0 : e.proofFile
                            )[0]
                          )
                        : "certificateFile" === l
                        ? 0 != e[l].length &&
                          a.append(
                            l,
                            Array.from(
                              null === e || void 0 === e
                                ? void 0
                                : e.certificateFile
                            )[0]
                          )
                        : "displayPicture" === l
                        ? 0 != e[l].length &&
                          a.append(
                            l,
                            Array.from(
                              null === e || void 0 === e
                                ? void 0
                                : e.displayPicture
                            )[0]
                          )
                        : a.append(l, e[l]);
                    }),
                    a
                  );
                })(e),
            }),
            (0, c.jsx)("small", { className: "text-danger", children: p }),
          ],
        });
        return l ? (0, c.jsx)(r.Z, {}) : e ? (0, c.jsx)(n.Z, {}) : y;
      };
      var p = l(32);
      const u = () =>
        (0, c.jsxs)("div", {
          className: "trainer-onboarding-container container",
          children: [(0, c.jsx)(p.Z, {}), (0, c.jsx)(m, {})],
        });
    },
  },
]);
//# sourceMappingURL=828.126b04af.chunk.js.map
