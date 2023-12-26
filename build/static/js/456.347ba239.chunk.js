"use strict";
(self.webpackChunktrainer_dashboard =
  self.webpackChunktrainer_dashboard || []).push([
  [456],
  {
    4376: (e, a, l) => {
      l.d(a, { Z: () => v });
      var i = l(2791),
        t = l(4542),
        s = l(2095),
        n = l(952),
        r = l(7250),
        o = (l(6775), l(4077)),
        d = l(4838),
        c = l(6152),
        m = l(8112),
        p = l(9478),
        u = l(5322),
        h = l(2711),
        f = l(968),
        b = l(1523),
        g = l(8133),
        x = l(184);
      const N = {
          control: (e) => ({
            ...e,
            color: "white",
            background: "transparent",
            borderColor: "white",
            borderRadius: 8,
          }),
          singleValue: (e) => ({ ...e, color: "white" }),
          container: (e) => ({
            ...e,
            color: "black",
            background: "transparent",
          }),
          svg: (e) => ({ ...e, color: "black", background: "transparent" }),
        },
        v = (e) => {
          let {
            details: a,
            saveData: l = () => {},
            previewCard: v,
            setPreviewCard: j,
            url: C,
          } = e;
          const [y, w] = (0, i.useState)(a.initialValue),
            [V, Z] = (0, i.useState)(a.initialValue),
            [k, S] = (0, i.useState)(!1),
            [O, D] = (0, i.useState)(!1),
            [E, F] = (0, i.useState)(""),
            [T, U] = (0, i.useState)(!1),
            [P, L] = (0, i.useState)(a.initialValue),
            [B, J] = (0, i.useState)(!1);
          (0, i.useEffect)(() => {
            "peopleTrained" === a.fieldName && j({ ...v, peopleTrained: V }),
              "tagline" === a.fieldName && j({ ...v, tagline: V }),
              "themeColor" === a.fieldName && j({ ...v, idx: V });
          }, [V]);
          const _ = async () => {
            let e = !0;
            if (
              (J(!0),
              "transformations" == a.fieldName &&
                (null === y ||
                  void 0 === y ||
                  y.forEach((a) => {
                    if (a.isEditing)
                      return (
                        F("Please save transformations before proceeding"),
                        D(!0),
                        (e = !1),
                        void J(!1)
                      );
                  })),
              e)
            ) {
              if ((D(!1), T)) {
                if (
                  a.initialValue === V &&
                  "certificate" === a.fieldName &&
                  a.initialValue.value != P.value
                )
                  return F("Please Upload file"), D(!0), void J(!1);
                if (a.initialValue === V && "transformations" !== a.fieldName)
                  S(!0);
                else {
                  const e = a.validateSubmit(a.fieldName, V);
                  if (null !== e && void 0 !== e && e.isError)
                    return (
                      F(null === e || void 0 === e ? void 0 : e.message),
                      D(!0),
                      void J(!1)
                    );
                  F(""), D(!1);
                  var l = {};
                  (l.field = a.fieldName),
                    "interests" === a.fieldName || "expertise" === a.fieldName
                      ? (l.value = V.map((e) => e.value))
                      : (l.value = V);
                  try {
                    let e;
                    if ("transformations" === a.fieldName) {
                      const a = new FormData();
                      y.map((e, l) => {
                        const i = e;
                        "string" != typeof e.imageUrl &&
                          a.append(
                            "transformations",
                            e.imageUrl,
                            ""
                              .concat(l, ".")
                              .concat(e.imageUrl.name.split(".").pop())
                          ),
                          delete i.imageUrl,
                          delete i.isEditing,
                          a.append(l.toString(), JSON.stringify(i));
                      }),
                        (e = await t.Z.patch(
                          "trainers/profile/transformations",
                          a,
                          { headers: { "Content-Type": "multipart/form-data" } }
                        ));
                      let l = e.data.transformations;
                      l.map((e) => {
                        e.isEditing = !1;
                      }),
                        w(l);
                    } else if (
                      "object" === typeof V &&
                      "interests" !== a.fieldName &&
                      "expertise" !== a.fieldName &&
                      "DOB" !== a.fieldName
                    ) {
                      const l = new FormData();
                      l.append("uploadedFile", V),
                        "certificate" === a.fieldName &&
                          l.append("certName", P.value),
                        l.append("field", a.fieldName),
                        (e = await t.Z.patch("trainers/profile/file", l, {
                          headers: { "Content-Type": "multipart/form-data" },
                        }));
                    } else
                      e = await t.Z.patch(
                        null !== C && void 0 !== C
                          ? C
                          : "trainers/profile/profile",
                        l
                      );
                    200 === e.status
                      ? (S(!0), D(!1))
                      : (D(!0), F(e.data.message)),
                      "username" === a.fieldName &&
                        alert("Username has been changed. Please login again");
                  } catch (i) {
                    D(!0), S(!1);
                  }
                }
              }
              J(!1), U(!T);
            }
          };
          return (0, x.jsxs)("div", {
            className: "edit-row-container",
            children: [
              (0, x.jsxs)("div", {
                className: "box-edit-container ".concat(a.classNames),
                children: [
                  "gender-selection" === a.type
                    ? (0, x.jsx)("div", {
                        className: "".concat(a.divClassNames),
                        children: (0, x.jsx)(n.Z, {
                          disabled: !T,
                          initialValue: a.initialValue,
                          setValue: Z,
                        }),
                      })
                    : "date-picker" === a.type
                    ? (0, x.jsx)(r.Z, {
                        initialValue: V,
                        setValue: Z,
                        label: a.label,
                        classNames: a.inputClassNames,
                        disabled: !T,
                      })
                    : "dynamic-dropdown" === a.type
                    ? (0, x.jsxs)("div", {
                        className: "label-input-container",
                        children: [
                          (0, x.jsx)("span", {
                            style: { width: "fit-content" },
                            className: "label",
                            children: a.label,
                          }),
                          (0, x.jsx)(c.Z, {
                            options: a.options,
                            defaultValue: a.initialValue,
                            className: "white-border",
                            styles: N,
                            placeholder: a.placeholder,
                            isMulti: a.multi,
                            onChange: (e) => {
                              Z(e);
                            },
                            isDisabled: !T,
                            isClearable: !0,
                            isValidNewOption: (e, l) =>
                              e.length > 0 &&
                              e.length < a.maxCharLength &&
                              l.length < a.maxOptions,
                          }),
                        ],
                      })
                    : "textarea" === a.type
                    ? (0, x.jsx)(m.Z, {
                        divClassNames: a.divClassNames,
                        labelClass: a.labelClass,
                        label: a.label,
                        name: a.fieldName,
                        rows: "4",
                        cols: "50",
                        placeholder: a.placeholder,
                        inputClassNames: a.inputClassNames,
                        disabled: !T,
                        initialValue: a.initialValue,
                        onChange: (e) => {
                          Z(e.target.value);
                        },
                      })
                    : "color-picker" === a.type
                    ? (0, x.jsx)(o.Z, {
                        getValue: (e) => {
                          Z(e);
                        },
                        disabled: !T,
                        initialValue: a.initialValue,
                      })
                    : "transformations" === a.type
                    ? (0, x.jsx)(x.Fragment, {
                        children: (0, x.jsx)(p.b, {
                          transformations: y,
                          setTransformations: w,
                          breakpoints: [2500, 1200],
                          disabled: !T,
                          label: !1,
                          divClassName: "profile-transformation-carousel",
                        }),
                      })
                    : "upload-file" === a.type
                    ? (0, x.jsx)(d.Z, {
                        disabled: !T,
                        name: a.fieldName,
                        id: a.fieldName,
                        buttonText:
                          null === a || void 0 === a ? void 0 : a.buttonText,
                        onChange: (e) => {
                          Z(e.target.files[0]);
                        },
                      })
                    : "upload-cert" === a.type
                    ? (0, x.jsxs)("div", {
                        className: "upload-cert-div",
                        children: [
                          (0, x.jsxs)("div", {
                            className:
                              "upload-cert-div-left label-input-container",
                            children: [
                              (0, x.jsx)("span", {
                                style: { width: "fit-content" },
                                className: "label",
                                children: a.label,
                              }),
                              (0, x.jsx)(c.Z, {
                                options: a.options,
                                defaultValue: a.initialValue,
                                className: "white-border",
                                styles: N,
                                placeholder: a.placeholder,
                                isMulti: !1,
                                onChange: (e) => {
                                  L(e);
                                },
                                isDisabled: !T,
                                isClearable: !0,
                                isValidNewOption: (e, l) =>
                                  e.length > 0 &&
                                  e.length < a.maxCharLength &&
                                  l.length < a.maxOptions,
                              }),
                            ],
                          }),
                          (0, x.jsx)("div", {
                            className: "upload-cert-div-right",
                            children: T
                              ? (0, x.jsx)(d.Z, {
                                  disabled: !T,
                                  name: a.fieldName,
                                  id: a.fieldName,
                                  buttonText:
                                    null === a || void 0 === a
                                      ? void 0
                                      : a.buttonText,
                                  onChange: (e) => {
                                    Z(e.target.files[0]);
                                  },
                                })
                              : (0, x.jsx)(b.rU, {
                                  to: { pathname: a.certificateUrl },
                                  target: "_blank",
                                  children: (0, x.jsx)(f.Z, {
                                    style: {
                                      backgroundColor:
                                        "rgba(196, 196, 196, 0.1)",
                                    },
                                    text: "View Certificate",
                                  }),
                                }),
                          }),
                        ],
                      })
                    : "previewCard" === a.type
                    ? (0, x.jsxs)("div", {
                        className: "profile-preview-card",
                        children: [
                          (0, x.jsx)("div", {
                            className: "card-label",
                            children: "Your Card",
                          }),
                          (0, x.jsx)(u.Z, {
                            idx: v.idx,
                            value: v,
                            disabled: !T,
                            onChange: (e) => {
                              Z(e.target.files[0]);
                            },
                          }),
                        ],
                      })
                    : (0, x.jsx)(s.Z, {
                        id: a.placeholder,
                        type: a.type,
                        placeholder: a.placeholder,
                        value: V,
                        label: a.label,
                        disabled: !T,
                        inputClassNames: "white-border",
                        onChange: (e) => Z(e.target.value),
                        divClassNames: "col-md-12",
                        labelClass: "label",
                        maxLength: a.maxLength,
                      }),
                  "transformations" === a.type
                    ? (0, x.jsxs)("div", {
                        style: {
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        },
                        children: [
                          a.secondaryLabel,
                          (0, x.jsx)("span", {
                            className: "edit-button-container",
                            onClick: _,
                            children: T
                              ? (0, x.jsx)(x.Fragment, {
                                  children: (0, x.jsx)(h.JO, {
                                    className: "edit-icon",
                                    icon: "bx:save",
                                    color: "white",
                                    height: 23,
                                  }),
                                })
                              : (0, x.jsx)(x.Fragment, {
                                  children: (0, x.jsx)(h.JO, {
                                    className: "edit-icon",
                                    icon: "ci:edit",
                                    color: "white",
                                    height: 23,
                                  }),
                                }),
                          }),
                        ],
                      })
                    : (0, x.jsx)("span", {
                        className: "edit-button-container",
                        onClick: _,
                        children: B
                          ? (0, x.jsx)(x.Fragment, {
                              children: (0, x.jsx)(g.Z, {}),
                            })
                          : T
                          ? (0, x.jsx)(x.Fragment, {
                              children: (0, x.jsx)(h.JO, {
                                icon: "bx:save",
                                height: 23,
                                color: "white",
                              }),
                            })
                          : (0, x.jsx)(x.Fragment, {
                              children: (0, x.jsx)(h.JO, {
                                icon: "ci:edit",
                                height: 23,
                                color: "white",
                              }),
                            }),
                      }),
                ],
              }),
              O
                ? (0, x.jsx)("small", {
                    className: "message error",
                    children:
                      E ||
                      (0, x.jsxs)(x.Fragment, {
                        children: [a.label, " could not be saved"],
                      }),
                  })
                : k
                ? (0, x.jsxs)("small", {
                    className: "message success",
                    children: [
                      a.label,
                      " saved successfully.",
                      "Transformations" == a.label
                        ? " Updation of images might take time"
                        : "",
                    ],
                  })
                : "",
            ],
          });
        };
    },
    6456: (e, a, l) => {
      l.r(a), l.d(a, { default: () => d });
      var i = l(2791),
        t = l(4376),
        s = l(4542),
        n = l(8133),
        r = l(6122),
        o = l(184);
      const d = () => {
        const [e, a] = (0, i.useState)([]),
          [l, d] = (0, i.useState)(!1),
          [c, m] = (0, i.useState)(!1);
        return (
          (0, i.useEffect)(async () => {
            try {
              d(!0);
              const e = (await (0, s.Z)("trainers/profile/personal")).data,
                l = [
                  {
                    label: "Phone Number",
                    fieldName: "phoneNumber",
                    initialValue: e.phoneNumber,
                    validateSubmit: (e, a) => ({ isError: !1 }),
                    type: "number",
                    classNames: "col-md-12",
                    placeholder: "Phone no.",
                    maxLength: 10,
                  },
                  {
                    fieldName: "DOB",
                    validateSubmit: (e, a) => ({ isError: !1 }),
                    type: "date-picker",
                    classNames: "col-md-12",
                    placeholder: "DOB",
                    label: "DOB",
                    initialValue: new Date(e.DOB),
                  },
                  {
                    fieldName: "gender",
                    initialValue: e.gender,
                    validateSubmit: (e, a) => ({ isError: !1 }),
                    type: "gender-selection",
                    classNames: "col-md-12",
                    placeholder: "Gender Selection",
                  },
                ];
              a(l), console.log(e), d(!1);
            } catch (e) {
              m(!0);
            }
          }, []),
          l
            ? (0, o.jsx)(n.Z, { fullHeight: !0 })
            : c
            ? (0, o.jsx)(r.Z, {})
            : (0, o.jsxs)("div", {
                className: "personal-container",
                children: [
                  (0, o.jsx)("p", {
                    className: "heading",
                    children: "Personal",
                  }),
                  e.map((e, a) =>
                    (0, o.jsx)(
                      t.Z,
                      { details: e, url: "trainers/profile/personal" },
                      a
                    )
                  ),
                ],
              })
        );
      };
    },
  },
]);
//# sourceMappingURL=456.347ba239.chunk.js.map
