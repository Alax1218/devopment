"use strict";
(self.webpackChunktrainer_dashboard =
  self.webpackChunktrainer_dashboard || []).push([
  [806],
  {
    4183: (e, a, s) => {
      s.d(a, { Z: () => n });
      s(2791);
      var l = s(5717),
        t = (s(3037), s(8688), s(184));
      const n = (e) => {
        let {
            children: a,
            slidesToShow: s = 3,
            breakpoints: n = [600, 480],
            ...i
          } = e,
          r =
            null === n || void 0 === n
              ? void 0
              : n.map((e, s) => ({
                  breakpoint: e,
                  settings: {
                    infinite: a.length > n.length - s,
                    slidesToShow: n.length - s,
                    slidesToScroll: n.length - s,
                    initialSlide: n.length - s,
                  },
                }));
        var o = {
          dots: !0,
          draggable: !1,
          infinite: a.length > 3,
          centerMode: !1,
          speed: 500,
          slidesToShow: s,
          slidesToScroll: s,
          initialSlide: 0,
          responsive: [...r],
          ...i,
        };
        return (0, t.jsx)("div", {
          className: "p-1",
          children: (0, t.jsx)(l.Z, {
            ...o,
            className: "my-slider",
            children: a,
          }),
        });
      };
    },
    4077: (e, a, s) => {
      s.d(a, { Z: () => i });
      var l = s(2791),
        t = s(5785),
        n = s(184);
      const i = (e) => {
        let {
          register: a,
          setValue: s = () => {},
          initialValue: i = 0,
          disabled: r = !1,
          getValue: o = () => {},
        } = e;
        const [c, d] = (0, l.useState)(i);
        return (0, n.jsxs)("div", {
          className: "color-selection-container",
          children: [
            (0, n.jsx)("input", {
              type: "hidden",
              name: "color",
              value: c,
              ref: a,
            }),
            (0, n.jsx)("label", {
              className: "label",
              children: "Theme color",
            }),
            (0, n.jsx)("div", {
              className: "colors-container",
              children: t.M.map((e, a) =>
                a == c
                  ? (0, n.jsx)(
                      "div",
                      {
                        className: "color-option-container-selected",
                        onClick: () => {
                          r || d(a);
                        },
                        style: { backgroundColor: e.paletteColor },
                      },
                      a
                    )
                  : (0, n.jsx)(
                      "div",
                      {
                        className: "color-option-container",
                        onClick: () => {
                          r ||
                            ((e) => {
                              s("color", e), o(e), d(e);
                            })(a);
                        },
                        style: { backgroundColor: e.paletteColor },
                      },
                      a
                    )
              ),
            }),
          ],
        });
      };
    },
    7250: (e, a, s) => {
      s.d(a, { Z: () => o });
      var l = s(2791),
        t = s(9513),
        n = s.n(t),
        i = (s(2095), s(2711)),
        r = s(184);
      const o = (e) => {
        let {
          id: a = "",
          label: s,
          inputLabel: t,
          labelClass: o = "",
          classNames: c = "",
          register: d,
          startYear: m = 1950,
          endYear: h = 2025,
          initialValue: u = new Date(),
          disabled: g = !1,
          setValue: x = () => {},
          showDate: v = !0,
          minDate: p = Date.parse("1/01/1950"),
          maxDate: j = Date.parse("1/01/2025"),
          excludeDates: b = [],
          ...N
        } = e;
        const [f, C] = (0, l.useState)(u),
          F = (function (e, a, s) {
            let l = [];
            for (let t = e; t <= a; t++) l.push(t);
            return l;
          })(m, h),
          y = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ];
        (0, l.useEffect)(() => {
          x(f);
        }, [f]);
        const w = (0, l.forwardRef)((e, a) => {
          let { value: s, onClick: l } = e;
          return (0, r.jsxs)("div", {
            className: "customInput",
            onClick: l,
            ref: a,
            children: [
              (0, r.jsx)("input", {
                ref: d,
                name: "DOB",
                type: "hidden",
                value: s,
              }),
              v
                ? (0, r.jsx)(r.Fragment, { children: s })
                : (0, r.jsx)(r.Fragment, {}),
              (0, r.jsx)(i.JO, {
                icon: "material-symbols:edit-calendar-outline-rounded",
                height: 24,
                width: 24,
              }),
            ],
          });
        });
        return (
          (w.displayName = "CustomInput"),
          s
            ? (0, r.jsxs)("div", {
                className: "label-input-container ".concat(c),
                children: [
                  (0, r.jsx)("div", {
                    className: "label-text-container ".concat(o),
                    children:
                      s &&
                      (0, r.jsx)("label", {
                        className: "label",
                        htmlFor: a,
                        children: s,
                      }),
                  }),
                  (0, r.jsxs)("div", {
                    className: "input-container",
                    children: [
                      t &&
                        (0, r.jsx)("div", {
                          className: "input-label",
                          children: t,
                        }),
                      (0, r.jsx)(n(), {
                        disabled: g,
                        renderCustomHeader: (e) => {
                          let {
                            date: a,
                            changeYear: s,
                            changeMonth: l,
                            decreaseMonth: t,
                            increaseMonth: n,
                            prevMonthButtonDisabled: i,
                            nextMonthButtonDisabled: o,
                          } = e;
                          return (0, r.jsxs)("div", {
                            style: {
                              margin: 10,
                              display: "flex",
                              justifyContent: "center",
                            },
                            children: [
                              (0, r.jsx)("button", {
                                className: "date-arrow-btn",
                                onClick: t,
                                disabled: i,
                                children: "<",
                              }),
                              (0, r.jsx)("select", {
                                className: "date-options",
                                value: a.getFullYear(),
                                onChange: (e) => {
                                  let {
                                    target: { value: a },
                                  } = e;
                                  return s(a);
                                },
                                children: F.map((e) =>
                                  (0, r.jsx)(
                                    "option",
                                    { value: e, children: e },
                                    e
                                  )
                                ),
                              }),
                              (0, r.jsx)("select", {
                                className: "date-options",
                                value: y[a.getMonth()],
                                onChange: (e) => {
                                  let {
                                    target: { value: a },
                                  } = e;
                                  return l(y.indexOf(a));
                                },
                                children: y.map((e) =>
                                  (0, r.jsx)(
                                    "option",
                                    { value: e, children: e },
                                    e
                                  )
                                ),
                              }),
                              (0, r.jsx)("button", {
                                className: "date-arrow-btn",
                                onClick: n,
                                disabled: o,
                                children: ">",
                              }),
                            ],
                          });
                        },
                        selected: f,
                        onChange: (e) => C(e),
                        customInput: (0, r.jsx)(w, {}),
                      }),
                    ],
                  }),
                ],
              })
            : (0, r.jsx)(n(), {
                portalId: "root-portal",
                renderCustomHeader: (e) => {
                  let {
                    date: a,
                    changeYear: s,
                    changeMonth: l,
                    decreaseMonth: t,
                    increaseMonth: n,
                    prevMonthButtonDisabled: i,
                    nextMonthButtonDisabled: o,
                  } = e;
                  return (0, r.jsxs)("div", {
                    style: {
                      margin: 10,
                      display: "flex",
                      justifyContent: "center",
                    },
                    children: [
                      (0, r.jsx)("button", {
                        className: "date-arrow-btn",
                        onClick: t,
                        disabled: i,
                        children: "<",
                      }),
                      (0, r.jsx)("select", {
                        className: "date-options",
                        value: a.getFullYear(),
                        onChange: (e) => {
                          let {
                            target: { value: a },
                          } = e;
                          return s(a);
                        },
                        children: F.map((e) =>
                          (0, r.jsx)("option", { value: e, children: e }, e)
                        ),
                      }),
                      (0, r.jsx)("select", {
                        className: "date-options",
                        value: y[a.getMonth()],
                        onChange: (e) => {
                          let {
                            target: { value: a },
                          } = e;
                          return l(y.indexOf(a));
                        },
                        children: y.map((e) =>
                          (0, r.jsx)("option", { value: e, children: e }, e)
                        ),
                      }),
                      (0, r.jsx)("button", {
                        className: "date-arrow-btn",
                        onClick: n,
                        disabled: o,
                        children: ">",
                      }),
                    ],
                  });
                },
                selected: f,
                onChange: (e) => C(e),
                customInput: (0, r.jsx)(w, {}),
                minDate: p,
                maxDate: j,
                excludeDates: b,
              })
        );
      };
    },
    6775: (e, a, s) => {
      s.d(a, { Z: () => r });
      s(2791);
      var l = s(6152),
        t = s(7705),
        n = s(184);
      const i = {
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
        r = (e) => {
          let {
            control: a,
            defaultOptions: s = [],
            errorClassName: r = "",
            name: o,
            required: c = !1,
            multi: d = !1,
            canCreate: m = !1,
            placeholder: h = "Select...",
            maxCharLength: u = 30,
            maxOptions: g = 30,
            disabled: x = !1,
            minOptions: v = 0,
            initialValues: p,
          } = e;
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(t.Qr, {
                control: a,
                name: o,
                render: (e) => {
                  let { onChange: a, value: t, name: o, ref: c } = e;
                  return (0, n.jsx)(l.Z, {
                    defaultValue: [
                      null === p || void 0 === p
                        ? void 0
                        : p.map((e) => ({ label: e, value: e })),
                    ],
                    isDisabled: x,
                    className: "creatable-dropdown ".concat(r),
                    inputRef: c,
                    placeholder: h,
                    classNamePrefix: "addl-class",
                    options: s,
                    isMulti: d,
                    value:
                      !m && d
                        ? s.filter((e) => {
                            var a, s, l;
                            (null === (a = t) || void 0 === a
                              ? void 0
                              : a.length) > 0 &&
                              "object" === typeof t[0] &&
                              (t =
                                null === (l = t) || void 0 === l
                                  ? void 0
                                  : l.map((e) => e.id));
                            return null === (s = t) || void 0 === s
                              ? void 0
                              : s.includes(e.value);
                          })
                        : s.find((e) => e.value === t),
                    onChange: (e) => {
                      a(
                        d
                          ? null === e || void 0 === e
                            ? void 0
                            : e.map((e) =>
                                null === e || void 0 === e ? void 0 : e.value
                              )
                          : null === e || void 0 === e
                          ? void 0
                          : e.value
                      );
                    },
                    isClearable: !0,
                    isValidNewOption: (e, a) =>
                      m &&
                      (null === e || void 0 === e ? void 0 : e.length) > 0 &&
                      (null === e || void 0 === e ? void 0 : e.length) < u &&
                      (null === a || void 0 === a ? void 0 : a.length) < g,
                    isSearchable: !0,
                    styles: i,
                  });
                },
                rules: {
                  required: c,
                  validate: (e) =>
                    (null === e || void 0 === e ? void 0 : e.length) >= v &&
                    (null === e || void 0 === e ? void 0 : e.length) <= g,
                },
              }),
              c
                ? (0, n.jsx)("small", {
                    className: "message error",
                    children: "*required ",
                  })
                : (0, n.jsx)(n.Fragment, {}),
            ],
          });
        };
    },
    952: (e, a, s) => {
      s.d(a, { Z: () => r });
      var l = s(2791),
        t = s(1707),
        n = s.n(t),
        i = s(184);
      const r = (e) => {
        let {
          register: a = () => {},
          initialValue: s = "M",
          setValue: t = () => {},
          disabled: r = !1,
        } = e;
        const [o, c] = (0, l.useState)(s),
          d = (e) => {
            r || (c(e), t(e));
          },
          m = n()({ selected: "M" === o, "not-selecte": "M" !== o }),
          h = n()({ selected: "F" === o, "not-selecte": "F" !== o }),
          u = n()({ selected: "T" === o, "not-selecte": "T" !== o });
        return (0, i.jsxs)("div", {
          className: "gender-container",
          children: [
            (0, i.jsx)("input", {
              name: "gender",
              type: "hidden",
              value: null === o || void 0 === o ? void 0 : o.toUpperCase(),
              ref: a({ required: !0 }),
            }),
            (0, i.jsx)("div", {
              className: "col-md-3 gender-text",
              ref: a,
              children: "Gender",
            }),
            (0, i.jsxs)("div", {
              className: "option-container",
              children: [
                (0, i.jsx)("div", {
                  className: "male",
                  children: (0, i.jsxs)("div", {
                    onClick: () => d("M"),
                    children: [
                      (0, i.jsxs)("div", {
                        className: "icon-container",
                        children: [
                          (0, i.jsx)("div", {
                            className: " circle",
                            children: (0, i.jsx)("img", {
                              className: m,
                              src: "/images/circle.svg",
                            }),
                          }),
                          (0, i.jsx)("img", {
                            className: m + " male-img icon",
                            src: "/images/male.svg",
                          }),
                        ],
                      }),
                      (0, i.jsx)("div", {
                        className: m + " icon-text",
                        children: "Male",
                      }),
                    ],
                  }),
                }),
                (0, i.jsx)("div", {
                  className: "female",
                  children: (0, i.jsxs)("div", {
                    onClick: () => d("F"),
                    children: [
                      (0, i.jsxs)("div", {
                        className: "icon-container",
                        children: [
                          (0, i.jsx)("div", {
                            className: "circle",
                            children: (0, i.jsx)("img", {
                              className: h,
                              src: "/images/circle.svg",
                            }),
                          }),
                          (0, i.jsx)("img", {
                            className: h + " female-img icon",
                            src: "/images/female.svg",
                          }),
                        ],
                      }),
                      (0, i.jsx)("div", {
                        className: h + " icon-text",
                        children: "Female",
                      }),
                    ],
                  }),
                }),
                (0, i.jsx)("div", {
                  className: "Transgender",
                  children: (0, i.jsxs)("div", {
                    onClick: () => d("T"),
                    children: [
                      (0, i.jsxs)("div", {
                        className: "icon-container",
                        children: [
                          (0, i.jsx)("div", {
                            className: "circle",
                            children: (0, i.jsx)("img", {
                              className: u,
                              src: "/images/circle.svg",
                            }),
                          }),
                          (0, i.jsx)("img", {
                            className: u + " trans-img icon",
                            src: "/images/Trans.png",
                          }),
                        ],
                      }),
                      (0, i.jsx)("div", {
                        className: u + " icon-text",
                        children: "Trans",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      };
    },
    2095: (e, a, s) => {
      s.d(a, { Z: () => t });
      s(2791);
      var l = s(184);
      const t = (e) => {
        let {
          id: a = "",
          darkTheme: s = !1,
          divClassNames: t = "",
          type: n = "text",
          label: i,
          refValue: r,
          inputLabel: o,
          placeholderStyle: c,
          labelClass: d = "",
          inputClassNames: m,
          errorClassName: h,
          maxLength: u,
          required: g = !1,
          ...x
        } = e;
        const v = s ? "white-border" : m,
          p = (0, l.jsx)("div", {
            className: "search-box ".concat(t),
            children: (0, l.jsx)("input", {
              min: 1,
              id: a,
              type: n,
              className: "search-box-input ".concat(h, " ").concat(v),
              style: c,
              ref: r,
              onInput: (e) => {
                e.target.value = e.target.value.slice(0, u);
              },
              ...x,
            }),
          });
        return i
          ? (0, l.jsxs)("div", {
              className: "label-input-container",
              children: [
                (0, l.jsx)("div", {
                  className: "label-text-container ".concat(d),
                  children:
                    i &&
                    (0, l.jsxs)("label", {
                      className: "label",
                      htmlFor: a,
                      children: [
                        i,
                        g
                          ? (0, l.jsx)("small", {
                              className: "message error",
                              children: "*",
                            })
                          : (0, l.jsx)(l.Fragment, {}),
                      ],
                    }),
                }),
                (0, l.jsxs)("div", {
                  className: "input-container",
                  children: [
                    o &&
                      (0, l.jsx)("div", {
                        className: "input-label",
                        children: o,
                      }),
                    p,
                  ],
                }),
              ],
            })
          : p;
      };
    },
    5322: (e, a, s) => {
      s.d(a, { Z: () => m });
      var l = s(2791),
        t = s(4838),
        n = s(9678),
        i = s(5785),
        r = s(8652),
        o = s(2711),
        c = s(184);
      const d =
          "https://storage.googleapis.com/evolv-assets/trainers/default.png",
        m = (e) => {
          let {
            value: a,
            idx: s = 0,
            disabled: m = !1,
            register: h = () => {},
            setValue: u = () => {},
            onChange: g = () => {},
          } = e;
          const x = Intl.NumberFormat("en", { notation: "compact" }),
            { currentUser: v } = r.default,
            [p, j] = (0, l.useState)(
              void 0 == a.displayPictureUrl ? null : a.displayPictureUrl
            ),
            [b, N] = (0, l.useState)(""),
            [f, C] = (0, l.useState)(!1);
          let F = i.M[s].dark ? "white" : "black";
          return (0, c.jsxs)(c.Fragment, {
            children: [
              (0, c.jsxs)("div", {
                style: { backgroundColor: i.M[s].themeColor, color: F },
                className: "preview-card-container",
                children: [
                  (0, c.jsx)("div", {
                    className: "left",
                    children:
                      null != p && 0 != p.length
                        ? (0, c.jsx)(c.Fragment, {
                            children: m
                              ? (0, c.jsx)(
                                  "img",
                                  {
                                    className: "trainer-image",
                                    src: null !== p && void 0 !== p ? p : d,
                                    alt: "",
                                  },
                                  p
                                )
                              : (0, c.jsxs)(c.Fragment, {
                                  children: [
                                    (0, c.jsx)(
                                      "img",
                                      {
                                        className: "trainer-image-edit",
                                        src: null !== p && void 0 !== p ? p : d,
                                        alt: "",
                                      },
                                      p
                                    ),
                                    (0, c.jsx)("div", {
                                      onClick: () => {
                                        m || j(null);
                                      },
                                      className: "image-overlay",
                                      children: (0, c.jsx)(o.JO, {
                                        color: "black",
                                        height: 30,
                                        icon: "ep:close-bold",
                                      }),
                                    }),
                                  ],
                                }),
                          })
                        : (0, c.jsx)(t.Z, {
                            disabled: m,
                            id: "preview-card-upload",
                            buttonText: "Upload profile img",
                            onChange: (e) => (
                              g(e),
                              C(!1),
                              N(""),
                              ["image/png", "image/jpeg"].includes(
                                e.target.files[0].type
                              )
                                ? e.target.files[0].size > 5e6
                                  ? (C(!0),
                                    N("Please upload a file less than 5MB."),
                                    "")
                                  : (u("displayPicture", e.target.files),
                                    void j(
                                      URL.createObjectURL(e.target.files[0])
                                    ))
                                : (C(!0),
                                  N("Please upload a valid png or jpg file"),
                                  "")
                            ),
                          }),
                  }),
                  (0, c.jsxs)("div", {
                    className: "right",
                    children: [
                      (0, c.jsx)("p", {
                        className: "name",
                        children:
                          null === v || void 0 === v ? void 0 : v.displayName,
                      }),
                      (0, c.jsx)(n.Z, {
                        size: "v-small",
                        star: "4.5",
                        edit: !1,
                        align: "center",
                        reverse: !0,
                        count: 1,
                      }),
                      (0, c.jsx)("p", {
                        className: "tagline",
                        children: a.tagline,
                      }),
                      (0, c.jsx)("p", {
                        className: "people-trained-text",
                        children: isNaN(a.peopleTrained)
                          ? "-"
                          : x.format(a.peopleTrained),
                      }),
                      (0, c.jsx)("p", {
                        className: "people-trained",
                        children: "people trained",
                      }),
                    ],
                  }),
                  (0, c.jsx)("input", {
                    type: "file",
                    name: "displayPicture",
                    ref: h,
                    style: { display: "none" },
                  }),
                ],
              }),
              f &&
                (0, c.jsx)("small", {
                  className: "text-danger m-1",
                  children: b,
                }),
            ],
          });
        };
    },
    8112: (e, a, s) => {
      s.d(a, { Z: () => n });
      s(2791);
      var l = s(7495),
        t = s(184);
      const n = (e) => {
        let {
          id: a = "text-area",
          darkTheme: s = !1,
          classNames: n = "",
          divClassNames: i = "",
          labelClass: r,
          label: o,
          refValue: c,
          inputClassNames: d,
          initialValue: m,
          ...h
        } = e;
        const u = s ? "white-border" : d,
          g = (0, t.jsx)(l.Z, {
            classNames: "search-box ".concat(i),
            children: (0, t.jsx)("textarea", {
              id: a,
              rows: "4",
              cols: "50",
              className: "search-box-input ".concat(u),
              ...h,
              defaultValue: m,
              ref: c,
            }),
          });
        return (0, t.jsx)(t.Fragment, {
          children: o
            ? (0, t.jsxs)("div", {
                className: "text-area-container",
                children: [
                  (0, t.jsx)("div", {
                    className: "label-text-container ".concat(r),
                    children:
                      o &&
                      (0, t.jsx)("label", {
                        className: "label",
                        htmlFor: a,
                        children: o,
                      }),
                  }),
                  g,
                ],
              })
            : (0, t.jsx)("div", {
                className: "text-area-container",
                children: g,
              }),
        });
      };
    },
    9478: (e, a, s) => {
      s.d(a, { b: () => h });
      var l = s(2791),
        t = s(8282),
        n = s(2095),
        i = s(4838),
        r = s(2711),
        o = s(184);
      const c = (e) => {
        let {
          props: a,
          deleteTransformation: s,
          disabled: c,
          idx: d,
          updateTransformation: m,
          updateEditing: h = () => {},
          isEditing: u,
        } = e;
        const [g, x] = (0, l.useState)(u),
          [v, p] = (0, l.useState)(!1);
        (0, l.useEffect)(() => {
          h(d, g);
        }, [g]),
          (0, l.useEffect)(() => {
            c && (g || x(!1));
          }, [c]);
        const [j, b] = (0, l.useState)(a);
        (0, l.useEffect)(() => {
          b(a);
        }, [a]);
        return (0, o.jsxs)(
          "div",
          {
            className: "transformation-container",
            children: [
              (0, o.jsxs)(t.Z, {
                className: "bg-dark text-white card",
                children: [
                  "" == j.imageUrl || null == j.imageUrl
                    ? (0, o.jsx)(
                        t.Z.Img,
                        { style: { height: "200px", visibility: "hidden" } },
                        d + 1
                      )
                    : (0, o.jsx)(
                        t.Z.Img,
                        {
                          style: { height: "200px" },
                          src:
                            "string" == typeof j.imageUrl
                              ? j.imageUrl
                              : URL.createObjectURL(j.imageUrl),
                        },
                        d
                      ),
                  (0, o.jsxs)(t.Z.ImgOverlay, {
                    className: "card-image-overlay",
                    children: [
                      (0, o.jsxs)("div", {
                        className: "content",
                        children: [
                          (0, o.jsxs)("div", {
                            className: "title",
                            children: [
                              g
                                ? (0, o.jsx)(n.Z, {
                                    type: "text",
                                    placeholder: "Enter title",
                                    inputClassNames: "white-border",
                                    value: j.title,
                                    onChange: (e) => {
                                      b({ ...j, title: e.target.value });
                                    },
                                    maxLength: 15,
                                  })
                                : (0, o.jsx)("span", { children: j.title }),
                              g
                                ? (0, o.jsxs)("div", {
                                    className: "days-edit-container",
                                    children: [
                                      (0, o.jsx)(n.Z, {
                                        type: "number",
                                        placeholder: "-",
                                        inputClassNames: "white-border days",
                                        value: j.duration,
                                        maxLength: 3,
                                        onChange: (e) => {
                                          b({ ...j, duration: e.target.value });
                                        },
                                      }),
                                      (0, o.jsx)("span", { children: "days" }),
                                    ],
                                  })
                                : (0, o.jsxs)("span", {
                                    children: [j.duration, " days"],
                                  }),
                            ],
                          }),
                          (0, o.jsx)("div", {
                            style: { width: "80%" },
                            children:
                              g && null == j.imageUrl
                                ? (0, o.jsx)(i.Z, {
                                    buttonText: "Upload img",
                                    onChange: (e) => {
                                      e.target.files &&
                                        0 !== e.target.files.length &&
                                        b({
                                          ...j,
                                          imageUrl: e.target.files[0],
                                        });
                                    },
                                  })
                                : (0, o.jsx)(o.Fragment, {}),
                          }),
                          (0, o.jsxs)("div", {
                            className: "weight-container",
                            children: [
                              (0, o.jsx)("div", {
                                className: "weight",
                                children: g
                                  ? (0, o.jsxs)(o.Fragment, {
                                      children: [
                                        (0, o.jsx)(n.Z, {
                                          type: "number",
                                          placeholder: "-",
                                          inputClassNames: "weight-edit",
                                          value: j.beforeWeight,
                                          onChange: (e) => {
                                            b({
                                              ...j,
                                              beforeWeight: e.target.value,
                                            });
                                          },
                                          maxLength: 3,
                                        }),
                                        (0, o.jsx)("span", {
                                          className: "weight-value",
                                          children: "kg",
                                        }),
                                      ],
                                    })
                                  : (0, o.jsxs)("p", {
                                      className: "weight-value",
                                      children: [j.beforeWeight, " kg"],
                                    }),
                              }),
                              (0, o.jsx)("div", {
                                className: "weight",
                                children: g
                                  ? (0, o.jsxs)(o.Fragment, {
                                      children: [
                                        (0, o.jsx)(n.Z, {
                                          type: "number",
                                          placeholder: "-",
                                          inputClassNames: "weight-edit",
                                          value: j.afterWeight,
                                          onChange: (e) => {
                                            b({
                                              ...j,
                                              afterWeight: e.target.value,
                                            });
                                          },
                                          maxLength: 3,
                                        }),
                                        (0, o.jsx)("span", {
                                          className: "weight-value",
                                          children: "kg",
                                        }),
                                      ],
                                    })
                                  : (0, o.jsxs)("p", {
                                      className: "weight-value",
                                      children: [j.afterWeight, " kg"],
                                    }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      g && null != j.imageUrl
                        ? (0, o.jsx)("div", {
                            className: "close-button",
                            children: (0, o.jsx)(r.JO, {
                              icon: "ep:close-bold",
                              onClick: () => {
                                b({ ...j, imageUrl: null });
                              },
                              color: "white",
                            }),
                          })
                        : (0, o.jsx)(o.Fragment, {}),
                    ],
                  }),
                ],
              }),
              (0, o.jsxs)("div", {
                className: "card-title",
                children: [
                  g
                    ? (0, o.jsx)(o.Fragment, {
                        children: (0, o.jsx)(n.Z, {
                          type: "text",
                          placeholder: "Enter Name",
                          inputClassNames: "white-border",
                          value: j.name,
                          onChange: (e) => {
                            b({ ...j, name: e.target.value });
                          },
                          maxLength: 30,
                        }),
                      })
                    : (0, o.jsx)("p", {
                        className: "title-name",
                        children: j.name,
                      }),
                  c
                    ? (0, o.jsx)(o.Fragment, {})
                    : (0, o.jsxs)("div", {
                        className: "card-actions",
                        children: [
                          g
                            ? (0, o.jsx)(r.JO, {
                                icon: "bx:save",
                                onClick: () => {
                                  ((null != j.imageUrl &&
                                    "" != j.duration &&
                                    0 != j.beforeWeight &&
                                    0 != j.afterWeight &&
                                    "" != j.title &&
                                    "" != j.name) ||
                                    (p(!0), 0)) &&
                                    (p(!1), x(!1), m({ ...j }));
                                },
                                height: 24,
                                className: "action-icons",
                                color: "white",
                              })
                            : (0, o.jsx)(r.JO, {
                                icon: "ci:edit",
                                onClick: () => {
                                  x(!0);
                                },
                                height: 23,
                                className: "action-icons",
                                color: "white",
                              }),
                          (0, o.jsx)(r.JO, {
                            icon: "ep:close-bold",
                            onClick: () => {
                              s();
                            },
                            color: "white",
                            height: 23,
                            className: "action-icons",
                          }),
                        ],
                      }),
                ],
              }),
              v
                ? (0, o.jsx)("small", {
                    id: "firstNameHelp",
                    className: "form-text text-danger",
                    children: "Please enter all fields",
                  })
                : (0, o.jsx)(o.Fragment, {}),
            ],
          },
          d + 1
        );
      };
      var d = s(4183),
        m = s(968);
      const h = (e) => {
        let {
          register: a,
          transformations: s,
          setTransformations: l,
          breakpoints: t = [1400, 800],
          disabled: n = !1,
          label: i = !0,
          divClassName: r,
        } = e;
        const h = (e, a) => {
          let t = [...s];
          (t[e].isEditing = a), l(t);
        };
        console.log(s);
        return (0, o.jsxs)("div", {
          className: "col-md-12 transformations-container ".concat(r),
          children: [
            i
              ? (0, o.jsx)("label", {
                  className: "label",
                  children: "Transformations",
                })
              : (0, o.jsx)(o.Fragment, {}),
            (0, o.jsx)("input", {
              type: "hidden",
              name: "transformations",
              value: s,
              ref: a,
            }),
            (0, o.jsx)("div", {
              className: "carousel-container",
              children: (0, o.jsxs)(d.Z, {
                breakpoints: [...t],
                children: [
                  s.map((e, a) =>
                    (0, o.jsx)(
                      c,
                      {
                        updateEditing: h,
                        props: e,
                        idx: a,
                        disabled: n,
                        deleteTransformation: () =>
                          ((e) => {
                            let a = [...s];
                            a.splice(e, 1), l(a.map((e) => ({ ...e })));
                          })(a),
                        updateTransformation: (e) =>
                          ((e, a) => {
                            let t = [...s];
                            (t[e] = { ...a }), l(t);
                          })(a, e),
                        isEditing:
                          null === e || void 0 === e ? void 0 : e.isEditing,
                      },
                      a
                    )
                  ),
                  n
                    ? (0, o.jsx)(o.Fragment, {})
                    : (0, o.jsx)("div", {
                        className: "add-transformation-btn-container",
                        children: (0, o.jsx)(m.Z, {
                          type: "button",
                          text: "+ Add",
                          classNames: "add-transformation-btn",
                          onClick: () => {
                            l([
                              ...s,
                              {
                                title: "",
                                duration: "",
                                beforeWeight: 0,
                                afterWeight: 0,
                                name: "",
                                imageUrl: null,
                                isEditing: !0,
                              },
                            ]);
                          },
                        }),
                      }),
                ],
              }),
            }),
          ],
        });
      };
    },
    4838: (e, a, s) => {
      s.d(a, { Z: () => i });
      var l = s(2791),
        t = s(2711),
        n = s(184);
      const i = (e) => {
        let {
          buttonText: a = "Upload File",
          acceptableFileExtensions: s = [".png", ".jpg"],
          refValue: i,
          name: r,
          isError: o,
          onChange: c = (e) => null,
          id: d,
          disabled: m = !1,
          required: h = !1,
          ...u
        } = e;
        const [g, x] = (0, l.useState)({ preview: "", raw: "" }),
          [v, p] = (0, l.useState)(!1),
          [j, b] = (0, l.useState)("Please Select a file");
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsxs)("div", {
              className: "upload-btn-container",
              children: [
                (0, n.jsx)("label", {
                  htmlFor: "upload-button-".concat(d),
                  children: (0, n.jsxs)("span", {
                    className: "btn-evolv button-container",
                    children: [
                      (0, n.jsx)(t.JO, { icon: "bi:upload", height: 20 }),
                      (0, n.jsx)("p", {
                        children:
                          (null === g || void 0 === g ? void 0 : g.name) || a,
                      }),
                      h
                        ? (0, n.jsx)("small", {
                            className: "message error",
                            children: "*",
                          })
                        : (0, n.jsx)(n.Fragment, {}),
                    ],
                  }),
                }),
                (0, n.jsx)("input", {
                  ref: i,
                  name: r,
                  type: "file",
                  id: "upload-button-".concat(d),
                  disabled: m,
                  style: { display: "none" },
                  onChange: (e) => {
                    if ((p(""), b(""), 0 === e.target.files.length)) return;
                    const a = c(e);
                    var s;
                    null === a
                      ? e.target.files.length &&
                        x({
                          name:
                            null === (s = e.target.files[0]) || void 0 === s
                              ? void 0
                              : s.name,
                          raw: e.target.files[0],
                        })
                      : (p(!0), b(a), x({ preview: "", raw: "" }));
                  },
                  accept: s.join(),
                }),
              ],
            }),
            (o || v) &&
              (0, n.jsx)("small", { className: "text-danger", children: j }),
          ],
        });
      };
    },
    7495: (e, a, s) => {
      s.d(a, { Z: () => n });
      var l = s(2791),
        t = s(184);
      const n = (e) => {
        let {
          children: a,
          classNames: s = "",
          border: n = "small",
          square: i = !1,
          shadowSize: r = "normal",
          cardTitle: o,
          cardElementRight: c,
          cardTitleClassNames: d = "",
          ...m
        } = e;
        const h = (0, l.useRef)(),
          [u, g] = (0, l.useState)(0),
          x = (0, l.useCallback)(() => {
            var e;
            const a =
              null === h ||
              void 0 === h ||
              null === (e = h.current) ||
              void 0 === e
                ? void 0
                : e.offsetWidth;
            g(a);
          }, []);
        return (
          (0, l.useEffect)(
            () => (
              x(),
              window.addEventListener("resize", x),
              () => {
                window.removeEventListener("resize", x);
              }
            ),
            []
          ),
          (0, t.jsxs)(t.Fragment, {
            children: [
              (o || c) &&
                (0, t.jsxs)("div", {
                  className: "d-flex justify-content-between",
                  children: [
                    o &&
                      (0, t.jsx)("p", {
                        className: "shadow-container-title ".concat(d),
                        children: o,
                      }),
                    c,
                  ],
                }),
              (0, t.jsx)("div", {
                ...m,
                ref: h,
                style: i ? { height: u, background: "white" } : {},
                className: ""
                  .concat(s, " shadow-div shadow-div-")
                  .concat(r, " border-")
                  .concat(n, " ")
                  .concat(i ? "center-fit" : ""),
                children: a,
              }),
            ],
          })
        );
      };
    },
    9678: (e, a, s) => {
      s.d(a, { Z: () => n });
      s(2791);
      var l = s(5112),
        t = s(184);
      const n = (e) => {
        let {
          star: a = "0",
          reverse: s = !1,
          size: n = "small",
          edit: i = !1,
          isHalf: r = !0,
          showNumber: o = !0,
          refValue: c,
          align: d = "left",
          ...m
        } = e;
        const h =
            "v-small" === n
              ? 12
              : "small" === n
              ? 18
              : "normal" === n
              ? 20
              : 40,
          u = [
            o
              ? (0, t.jsx)(
                  "span",
                  { className: "star-text star-text-".concat(n), children: a },
                  "0"
                )
              : "",
            (0, t.jsx)(
              l.Z,
              {
                ref: c,
                count: 5,
                edit: i,
                value: null === a ? 0 : parseFloat(a),
                size: h,
                isHalf: r,
                emptyIcon: (0, t.jsx)("img", {
                  src: "https://storage.googleapis.com/evolv-store/icons/store/emptyStar.svg",
                  alt: "0.0",
                }),
                halfIcon: (0, t.jsx)("img", {
                  src: "https://storage.googleapis.com/evolv-store/icons/store/halfStar.svg",
                  alt: "0.5",
                }),
                fullIcon: (0, t.jsx)("img", {
                  src: "https://storage.googleapis.com/evolv-store/icons/store/star.svg",
                  alt: "1.0",
                }),
                activeColor: "#38CC9E",
                ...m,
              },
              1
            ),
          ];
        return (0, t.jsx)("div", {
          className: "star-container ".concat(d, "-align"),
          children: s ? u.reverse() : u,
        });
      };
    },
    5785: (e, a, s) => {
      s.d(a, { M: () => l });
      const l = [
        {
          name: "themeLemonGreen",
          themeColor: "#C3FFD1",
          paletteColor: "#56FF7B",
          dark: !1,
        },
        {
          name: "themeLightGreen",
          themeColor: "#C9FFEE",
          paletteColor: "#56FFD6",
          dark: !1,
        },
        {
          name: "themeLightMagenta",
          themeColor: "#CEBFEE",
          paletteColor: "#9867FF",
          dark: !1,
        },
        {
          name: "themeLightPink",
          themeColor: "#F3C2FF",
          paletteColor: "#E98FFF",
          dark: !1,
        },
        {
          name: "themeLightRed",
          themeColor: "#FCC6C6",
          paletteColor: "#FF5151",
          dark: !1,
        },
        {
          name: "themePeach",
          themeColor: "#FFDBD0",
          paletteColor: "#FFA185",
          dark: !1,
        },
        {
          name: "themeLightYellow",
          themeColor: "#FFFDC2",
          paletteColor: "#FFF84E",
          dark: !1,
        },
        {
          name: "themeLightBlue",
          themeColor: "#DDEAFD",
          paletteColor: "#4F96FF",
          dark: !1,
        },
        {
          name: "themeDark",
          themeColor: "#1E252F",
          paletteColor: "#1E252F",
          dark: !0,
        },
      ];
    },
  },
]);
//# sourceMappingURL=806.1a1bb730.chunk.js.map
