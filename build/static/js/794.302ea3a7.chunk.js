"use strict";
(self.webpackChunktrainer_dashboard =
  self.webpackChunktrainer_dashboard || []).push([
  [794],
  {
    4376: (e, a, i) => {
      i.d(a, { Z: () => N });
      var l = i(2791),
        t = i(4542),
        s = i(2095),
        r = i(952),
        n = i(7250),
        o = (i(6775), i(4077)),
        d = i(4838),
        c = i(6152),
        m = i(8112),
        p = i(9478),
        u = i(5322),
        h = i(2711),
        f = i(968),
        b = i(1523),
        g = i(8133),
        x = i(184);
      const v = {
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
        N = (e) => {
          let {
            details: a,
            saveData: i = () => {},
            previewCard: N,
            setPreviewCard: y,
            url: C,
          } = e;
          const [j, w] = (0, l.useState)(a.initialValue),
            [V, S] = (0, l.useState)(a.initialValue),
            [E, T] = (0, l.useState)(!1),
            [k, Z] = (0, l.useState)(!1),
            [O, P] = (0, l.useState)(""),
            [U, L] = (0, l.useState)(!1),
            [F, D] = (0, l.useState)(a.initialValue),
            [J, q] = (0, l.useState)(!1);
          (0, l.useEffect)(() => {
            "peopleTrained" === a.fieldName && y({ ...N, peopleTrained: V }),
              "tagline" === a.fieldName && y({ ...N, tagline: V }),
              "themeColor" === a.fieldName && y({ ...N, idx: V });
          }, [V]);
          const _ = async () => {
            let e = !0;
            if (
              (q(!0),
              "transformations" == a.fieldName &&
                (null === j ||
                  void 0 === j ||
                  j.forEach((a) => {
                    if (a.isEditing)
                      return (
                        P("Please save transformations before proceeding"),
                        Z(!0),
                        (e = !1),
                        void q(!1)
                      );
                  })),
              e)
            ) {
              if ((Z(!1), U)) {
                if (
                  a.initialValue === V &&
                  "certificate" === a.fieldName &&
                  a.initialValue.value != F.value
                )
                  return P("Please Upload file"), Z(!0), void q(!1);
                if (a.initialValue === V && "transformations" !== a.fieldName)
                  T(!0);
                else {
                  const e = a.validateSubmit(a.fieldName, V);
                  if (null !== e && void 0 !== e && e.isError)
                    return (
                      P(null === e || void 0 === e ? void 0 : e.message),
                      Z(!0),
                      void q(!1)
                    );
                  P(""), Z(!1);
                  var i = {};
                  (i.field = a.fieldName),
                    "interests" === a.fieldName || "expertise" === a.fieldName
                      ? (i.value = V.map((e) => e.value))
                      : (i.value = V);
                  try {
                    let e;
                    if ("transformations" === a.fieldName) {
                      const a = new FormData();
                      j.map((e, i) => {
                        const l = e;
                        "string" != typeof e.imageUrl &&
                          a.append(
                            "transformations",
                            e.imageUrl,
                            ""
                              .concat(i, ".")
                              .concat(e.imageUrl.name.split(".").pop())
                          ),
                          delete l.imageUrl,
                          delete l.isEditing,
                          a.append(i.toString(), JSON.stringify(l));
                      }),
                        (e = await t.Z.patch(
                          "trainers/profile/transformations",
                          a,
                          { headers: { "Content-Type": "multipart/form-data" } }
                        ));
                      let i = e.data.transformations;
                      i.map((e) => {
                        e.isEditing = !1;
                      }),
                        w(i);
                    } else if (
                      "object" === typeof V &&
                      "interests" !== a.fieldName &&
                      "expertise" !== a.fieldName &&
                      "DOB" !== a.fieldName
                    ) {
                      const i = new FormData();
                      i.append("uploadedFile", V),
                        "certificate" === a.fieldName &&
                          i.append("certName", F.value),
                        i.append("field", a.fieldName),
                        (e = await t.Z.patch("trainers/profile/file", i, {
                          headers: { "Content-Type": "multipart/form-data" },
                        }));
                    } else
                      e = await t.Z.patch(
                        null !== C && void 0 !== C
                          ? C
                          : "trainers/profile/profile",
                        i
                      );
                    200 === e.status
                      ? (T(!0), Z(!1))
                      : (Z(!0), P(e.data.message)),
                      "username" === a.fieldName &&
                        alert("Username has been changed. Please login again");
                  } catch (l) {
                    Z(!0), T(!1);
                  }
                }
              }
              q(!1), L(!U);
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
                        children: (0, x.jsx)(r.Z, {
                          disabled: !U,
                          initialValue: a.initialValue,
                          setValue: S,
                        }),
                      })
                    : "date-picker" === a.type
                    ? (0, x.jsx)(n.Z, {
                        initialValue: V,
                        setValue: S,
                        label: a.label,
                        classNames: a.inputClassNames,
                        disabled: !U,
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
                            styles: v,
                            placeholder: a.placeholder,
                            isMulti: a.multi,
                            onChange: (e) => {
                              S(e);
                            },
                            isDisabled: !U,
                            isClearable: !0,
                            isValidNewOption: (e, i) =>
                              e.length > 0 &&
                              e.length < a.maxCharLength &&
                              i.length < a.maxOptions,
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
                        disabled: !U,
                        initialValue: a.initialValue,
                        onChange: (e) => {
                          S(e.target.value);
                        },
                      })
                    : "color-picker" === a.type
                    ? (0, x.jsx)(o.Z, {
                        getValue: (e) => {
                          S(e);
                        },
                        disabled: !U,
                        initialValue: a.initialValue,
                      })
                    : "transformations" === a.type
                    ? (0, x.jsx)(x.Fragment, {
                        children: (0, x.jsx)(p.b, {
                          transformations: j,
                          setTransformations: w,
                          breakpoints: [2500, 1200],
                          disabled: !U,
                          label: !1,
                          divClassName: "profile-transformation-carousel",
                        }),
                      })
                    : "upload-file" === a.type
                    ? (0, x.jsx)(d.Z, {
                        disabled: !U,
                        name: a.fieldName,
                        id: a.fieldName,
                        buttonText:
                          null === a || void 0 === a ? void 0 : a.buttonText,
                        onChange: (e) => {
                          S(e.target.files[0]);
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
                                styles: v,
                                placeholder: a.placeholder,
                                isMulti: !1,
                                onChange: (e) => {
                                  D(e);
                                },
                                isDisabled: !U,
                                isClearable: !0,
                                isValidNewOption: (e, i) =>
                                  e.length > 0 &&
                                  e.length < a.maxCharLength &&
                                  i.length < a.maxOptions,
                              }),
                            ],
                          }),
                          (0, x.jsx)("div", {
                            className: "upload-cert-div-right",
                            children: U
                              ? (0, x.jsx)(d.Z, {
                                  disabled: !U,
                                  name: a.fieldName,
                                  id: a.fieldName,
                                  buttonText:
                                    null === a || void 0 === a
                                      ? void 0
                                      : a.buttonText,
                                  onChange: (e) => {
                                    S(e.target.files[0]);
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
                            idx: N.idx,
                            value: N,
                            disabled: !U,
                            onChange: (e) => {
                              S(e.target.files[0]);
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
                        disabled: !U,
                        inputClassNames: "white-border",
                        onChange: (e) => S(e.target.value),
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
                            children: U
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
                        children: J
                          ? (0, x.jsx)(x.Fragment, {
                              children: (0, x.jsx)(g.Z, {}),
                            })
                          : U
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
              k
                ? (0, x.jsx)("small", {
                    className: "message error",
                    children:
                      O ||
                      (0, x.jsxs)(x.Fragment, {
                        children: [a.label, " could not be saved"],
                      }),
                  })
                : E
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
    7322: (e, a, i) => {
      i.r(a), i.d(a, { default: () => c });
      var l = i(2791),
        t = (i(5322), i(4542)),
        s = i(4376),
        r = i(8133),
        n = i(6122),
        o = i(3900),
        d = (i(5262), i(184));
      const c = () => {
        const [e, a] = (0, l.useState)({
            tagline: "",
            peopleTrained: "",
            idx: 0,
            displayPictureUrl: "",
          }),
          i = (e) =>
            null === e || void 0 === e
              ? void 0
              : e.map((e) => ({ value: e, label: e })),
          [c, m] = (0, l.useState)(!1),
          [p, u] = (0, l.useState)(!1),
          [h, f] = (0, l.useState)([]),
          [b, g] = (0, l.useState)(0);
        return (
          (0, l.useEffect)(async () => {
            try {
              var e;
              m(!0);
              const l = await (0, t.Z)("trainers/profile/profile");
              console.log("test");
              const s = l.data;
              console.log(s);
              let r = 10;
              Object.entries(s).forEach((e) => {
                ("" != e[1] && e[1] != []) || (r -= 1);
              }),
                g(r),
                a({
                  tagline: s.tagline,
                  peopleTrained: s.peopleTrained,
                  idx: Number(s.themeColor),
                  displayPictureUrl: s.displayPictureUrl,
                });
              let n = null !== (e = s.transformations) && void 0 !== e ? e : [];
              n.map((e) => {
                e.isEditing = !1;
              });
              const o = await t.Z.get("admin/formOptions/trainerOnboarding"),
                d = null === o || void 0 === o ? void 0 : o.data,
                c = i(null === d || void 0 === d ? void 0 : d.expertiseOptions),
                p = i(
                  null === d || void 0 === d ? void 0 : d.certificationOptions
                ),
                u = i(null === d || void 0 === d ? void 0 : d.interestOptions),
                h = [
                  {
                    type: "previewCard",
                    classNames: "col-md-12",
                    fieldName: "displayPicture",
                    validateSubmit: (e, a) => ({ isError: !1 }),
                  },
                  {
                    label: "Experience",
                    fieldName: "experience",
                    initialValue: s.experience,
                    validateSubmit: (e, a) => ({ isError: !1 }),
                    type: "number",
                    placeholder: "Experience",
                    classNames: "col-md-12",
                    maxLength: 2,
                  },
                  {
                    fieldName: "peopleTrained",
                    validateSubmit: (e, a) => ({ isError: !1 }),
                    type: "number",
                    classNames: "col-md-12",
                    placeholder: "peopleTrained",
                    label: "People Trained",
                    initialValue: s.peopleTrained,
                    maxLength: 5,
                  },
                  {
                    label: "Expertise",
                    type: "dynamic-dropdown",
                    options: c,
                    fieldName: "expertise",
                    canCreate: !0,
                    classNames: "col-md-12",
                    placeholder: "Select your expertise",
                    multi: !0,
                    required: !1,
                    initialValue: s.expertise.map((e) => ({
                      label: e,
                      value: e,
                    })),
                    validateSubmit: (e, a) =>
                      3 != (null === a || void 0 === a ? void 0 : a.length)
                        ? {
                            isError: !0,
                            message: "Please enter exactly 3 fields",
                          }
                        : { isError: !1 },
                    maxCharLength: 15,
                    maxOptions: 3,
                  },
                  {
                    type: "upload-cert",
                    fieldName: "certificate",
                    options: p,
                    classNames: "col-md-12",
                    buttonText: "Upload your certificate",
                    label: "Certificate",
                    validateSubmit: (e, a) => ({ isError: !1 }),
                    maxOptions: 1,
                    placeholder: "Enter certificate name",
                    multi: !1,
                    required: !1,
                    initialValue: {
                      label: s.certificateName,
                      value: s.certificateName,
                    },
                    certificateUrl: s.certificateUrl,
                    maxCharLength: 30,
                  },
                  {
                    label: "Interests",
                    maxCharLength: 15,
                    options: u,
                    type: "dynamic-dropdown",
                    fieldName: "interests",
                    canCreate: !0,
                    classNames: "col-md-12",
                    placeholder: "Select your interests",
                    multi: !0,
                    required: !1,
                    initialValue: () => {
                      var e;
                      return null === (e = s.interests) || void 0 === e
                        ? void 0
                        : e.map((e) => ({ label: e, value: e }));
                    },
                    maxOptions: 20,
                    validateSubmit: (e, a) =>
                      (null === a || void 0 === a ? void 0 : a.length) < 3 ||
                      (null === a || void 0 === a ? void 0 : a.length) >= 15
                        ? {
                            isError: !0,
                            message: "Please enter options between 3 and 15",
                          }
                        : { isError: !1 },
                  },
                  {
                    fieldName: "tagline",
                    validateSubmit: (e, a) => ({ isError: !1 }),
                    type: "text",
                    classNames: "col-md-12",
                    placeholder: "Tagline",
                    label: "Tagline",
                    initialValue: s.tagline,
                    maxLength: 20,
                  },
                  {
                    label: "Description",
                    type: "textarea",
                    fieldName: "description",
                    placeholder:
                      "Write about yourself, your journey into fitness and anything which will make people intrested in training with you",
                    classNames: "col-md-12",
                    inputClassNames: "white-border",
                    validateSubmit: (e, a) =>
                      (null === a || void 0 === a ? void 0 : a.length) <= 50
                        ? {
                            isError: !0,
                            message: "Please enter minimum 50 characters",
                          }
                        : { isError: !1 },
                    initialValue: s.description,
                    maxLength: 99999,
                    divClassNames: "text-area",
                  },
                  {
                    label: "Theme Color",
                    type: "color-picker",
                    fieldName: "themeColor",
                    classNames: "col-md-12",
                    initialValue: Number(s.themeColor),
                    validateSubmit: (e, a) => ({ isError: !1 }),
                  },
                  {
                    type: "transformations",
                    fieldName: "transformations",
                    classNames: "profile-transformation-div",
                    label: "Transformations",
                    secondaryLabel: "Transformations",
                    validateSubmit: (e, a) => ({ isError: !1 }),
                    initialValue: n,
                  },
                ];
              f(h), m(!1);
            } catch (l) {
              u(!0);
            }
          }, []),
          c
            ? (0, d.jsx)(r.Z, { fullHeight: !0 })
            : p
            ? (0, d.jsx)(n.Z, {})
            : (0, d.jsxs)("div", {
                className: "profile-container",
                children: [
                  (0, d.jsx)("p", {
                    className: "heading",
                    children: "Profile",
                  }),
                  (0, d.jsxs)("div", {
                    className: "profile-progress-bar",
                    children: [
                      (0, d.jsx)("p", {
                        className: "progress-header",
                        children:
                          "Complete your profile to get listed on the app",
                      }),
                      (0, d.jsxs)("div", {
                        className: "progress-bar-div",
                        children: [
                          (0, d.jsx)(o.ZP, {
                            className: "slider",
                            trackStyle: {
                              backgroundColor: "#38CC9E",
                              height: "10px",
                            },
                            railStyle: {
                              backgroundColor: "#101317",
                              height: "10px",
                            },
                            max: 10,
                            min: 0,
                            defaultValue: b,
                          }),
                          (0, d.jsxs)("p", {
                            className: "progress-text",
                            children: [0 == b ? "" : b, "0% completed"],
                          }),
                        ],
                      }),
                    ],
                  }),
                  h.map((i, l) =>
                    (0, d.jsx)(
                      s.Z,
                      { details: i, setPreviewCard: a, previewCard: e },
                      l
                    )
                  ),
                ],
              })
        );
      };
    },
  },
]);
//# sourceMappingURL=794.302ea3a7.chunk.js.map
