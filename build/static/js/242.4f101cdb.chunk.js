"use strict";
(self.webpackChunktrainer_dashboard =
  self.webpackChunktrainer_dashboard || []).push([
  [242],
  {
    1298: (e, s, a) => {
      a.d(s, { Z: () => l });
      var i = a(2791),
        t = a(2711),
        r = a(7495),
        n = a(184);
      const l = (e) => {
        let {
          data: s,
          active: a = !1,
          headClick: l = !0,
          disabled: d = !1,
        } = e;
        const [o, c] = (0, i.useState)(a);
        return (0, n.jsx)("div", {
          className: "accordion-container",
          children: (0, n.jsx)("div", {
            className: "accordion",
            id: "accordionExample",
            children: (0, n.jsxs)(r.Z, {
              classNames: "card-container",
              children: [
                (0, n.jsxs)("div", {
                  className: "accordion-header ".concat(o ? "toggle" : ""),
                  children: [
                    (0, n.jsx)("p", {
                      className: "accordion-title",
                      onClick: () => {
                        l && c(!o);
                      },
                      children: null === s || void 0 === s ? void 0 : s.parent,
                    }),
                    d
                      ? null
                      : o
                      ? (0, n.jsx)(t.JO, {
                          icon: "akar-icons:chevron-up",
                          className: "down-carret",
                          onClick: () => {
                            c(!o);
                          },
                        })
                      : (0, n.jsx)(t.JO, {
                          icon: "akar-icons:chevron-down",
                          className: "down-carret",
                          onClick: () => {
                            c(!o);
                          },
                        }),
                  ],
                }),
                o
                  ? (0, n.jsx)("div", {
                      className: o ? "" : "collapse",
                      children: (0, n.jsx)(r.Z, {
                        classNames: "accordion-body ",
                        children: null === s || void 0 === s ? void 0 : s.child,
                      }),
                    })
                  : (0, n.jsx)(n.Fragment, {}),
              ],
            }),
          }),
        });
      };
    },
    2284: (e, s, a) => {
      a.d(s, { Z: () => l });
      a(2791);
      var i = a(8489),
        t = a(7495),
        r = a(2711),
        n = a(184);
      const l = (e) => {
        let {
          onHide: s,
          children: a,
          show: l,
          title: d,
          width: o = "large",
          dark: c = !1,
          ...h
        } = e;
        return (0, n.jsx)(i.Z, {
          ...h,
          show: l,
          size: "xs",
          "aria-labelledby": "contained-modal-title-vcenter",
          centered: !0,
          dialogClassName: "modal-".concat(o),
          contentClassName: "no-background",
          children: (0, n.jsx)(t.Z, {
            children: (0, n.jsxs)(i.Z.Body, {
              className: "modal-container modal-container-"
                .concat(o, " ")
                .concat(c && "dark"),
              children: [
                (0, n.jsxs)("div", {
                  className: "modal-header-container",
                  children: [
                    (0, n.jsx)("h4", { className: "modal-title", children: d }),
                    (0, n.jsx)(r.JO, {
                      icon: "ep:close-bold",
                      onClick: s,
                      className: "close-button-icon",
                    }),
                  ],
                }),
                (0, n.jsx)("div", {
                  className: "modal-body-container",
                  children: a,
                }),
              ],
            }),
          }),
        });
      };
    },
    7495: (e, s, a) => {
      a.d(s, { Z: () => r });
      var i = a(2791),
        t = a(184);
      const r = (e) => {
        let {
          children: s,
          classNames: a = "",
          border: r = "small",
          square: n = !1,
          shadowSize: l = "normal",
          cardTitle: d,
          cardElementRight: o,
          cardTitleClassNames: c = "",
          ...h
        } = e;
        const m = (0, i.useRef)(),
          [v, u] = (0, i.useState)(0),
          g = (0, i.useCallback)(() => {
            var e;
            const s =
              null === m ||
              void 0 === m ||
              null === (e = m.current) ||
              void 0 === e
                ? void 0
                : e.offsetWidth;
            u(s);
          }, []);
        return (
          (0, i.useEffect)(
            () => (
              g(),
              window.addEventListener("resize", g),
              () => {
                window.removeEventListener("resize", g);
              }
            ),
            []
          ),
          (0, t.jsxs)(t.Fragment, {
            children: [
              (d || o) &&
                (0, t.jsxs)("div", {
                  className: "d-flex justify-content-between",
                  children: [
                    d &&
                      (0, t.jsx)("p", {
                        className: "shadow-container-title ".concat(c),
                        children: d,
                      }),
                    o,
                  ],
                }),
              (0, t.jsx)("div", {
                ...h,
                ref: m,
                style: n ? { height: v, background: "white" } : {},
                className: ""
                  .concat(a, " shadow-div shadow-div-")
                  .concat(l, " border-")
                  .concat(r, " ")
                  .concat(n ? "center-fit" : ""),
                children: s,
              }),
            ],
          })
        );
      };
    },
    1242: (e, s, a) => {
      a.r(s), a.d(s, { default: () => u });
      var i = a(2791),
        t = a(968),
        r = a(4542),
        n = a(8074),
        l = a(8133),
        d = a(2711),
        o = a(2284),
        c = a(1150),
        h = a(8340),
        m = a(184);
      const v = (e) => {
        var s, a;
        let {
          program: v,
          programs: u,
          idx: g,
          deleteProgram: p,
          setPrograms: x,
          setDisableAddButton: j,
          isError: N,
          setIsError: f,
          setErrorMessage: y,
          errorMessage: b,
        } = e;
        const [k, w] = (0, i.useState)(
            null === v || void 0 === v ? void 0 : v.editing
          ),
          [C, P] = (0, i.useState)(v),
          [E, S] = (0, i.useState)(
            null === v || void 0 === v ? void 0 : v.programTypes
          ),
          [Z, D] = (0, i.useState)(!1),
          [T, F] = (0, i.useState)(!1),
          [z, _] = (0, i.useState)(!1);
        (0, i.useEffect)(() => {
          j(k);
        }, [k]),
          (0, i.useEffect)(() => {
            setTimeout(() => {
              N && f(!1);
            }, 5e3),
              setTimeout(() => {
                Z && D(!1);
              }, 5e3);
          }, [N, Z]);
        const R = Math.random(),
          I = async (e) => {
            if (
              ((e) => {
                let s = !1,
                  a = "";
                if (
                  (null === u ||
                    void 0 === u ||
                    u.map((i) => {
                      if (
                        (null === i || void 0 === i ? void 0 : i._id) !=
                          (null === e || void 0 === e ? void 0 : e._id) &&
                        (null === e || void 0 === e ? void 0 : e.name) ==
                          (null === i || void 0 === i ? void 0 : i.name)
                      )
                        return (
                          (a = "Program name already exists"), void (s = !0)
                        );
                    }),
                  !s)
                )
                  if ("" == e.name)
                    (a = "Please enter the program name"), (s = !0);
                  else if (0 == e.programTypes.length)
                    (a = "Please enter atleast one Program Type"), (s = !0);
                  else {
                    for (let i of e.programTypes) {
                      const e = Object.keys(i);
                      for (let t of e) {
                        if ("" == i[t]) {
                          (a = "Please enter all the program type ".concat(
                            t,
                            "s in proper format"
                          )),
                            (s = !0);
                          break;
                        }
                        if (0 == parseInt(i[t]) && "duration" == t) {
                          (a = "Program type ".concat(t, "s cannot be 0")),
                            (s = !0);
                          break;
                        }
                        if (
                          "discount" == t &&
                          parseInt(i[t]) > parseInt(i.price)
                        ) {
                          (a =
                            "Program type discount cannot be greater than the price!"),
                            (s = !0);
                          break;
                        }
                      }
                      if (1 == s) break;
                    }
                    s ||
                      ("" == e.description
                        ? ((a = "Please enter the program description"),
                          (s = !0))
                        : e.highlights.forEach((e) => {
                            if ("" == e)
                              return (
                                (a = "Please enter all program highlights"),
                                void (s = !0)
                              );
                          }));
                  }
                return 1 == s && y({ message: a, idx: g }), s;
              })(e)
            )
              f(!0);
            else {
              F(!0);
              try {
                if (-1 == (null === e || void 0 === e ? void 0 : e._id)) {
                  const s = await r.Z.post("trainers/programs/add", { ...e }),
                    a = null === s || void 0 === s ? void 0 : s.data;
                  (a.editing = !1), D(!0), f(!1), x(a);
                } else {
                  const s = await r.Z.put(
                      "/trainers/programs/update?programId=".concat(
                        null === e || void 0 === e ? void 0 : e._id
                      ),
                      { ...e }
                    ),
                    a = null === s || void 0 === s ? void 0 : s.data;
                  (a.editing = !1), D(!0), f(!1), x(a);
                }
                w(!1);
              } catch (s) {
                D(!1), y({ message: "Something went wrong", idx: g }), f(!0);
              }
              F(!1);
            }
          };
        return (
          (0, i.useEffect)(() => {
            P(v);
          }, [v]),
          (0, m.jsxs)(m.Fragment, {
            children: [
              (0, m.jsxs)("div", {
                className: "program-container",
                children: [
                  (0, m.jsxs)("div", {
                    className: "header",
                    children: [
                      (0, m.jsx)("div", {
                        className: "title",
                        children: k
                          ? (0, m.jsx)("div", {
                              className: "edit-title",
                              children: (0, m.jsx)("input", {
                                type: "text",
                                placeholder: "Enter name of program",
                                onChange: (e) => {
                                  P({ ...C, name: e.target.value });
                                },
                                value:
                                  null === C || void 0 === C ? void 0 : C.name,
                              }),
                            })
                          : (0, m.jsx)("span", {
                              children:
                                null === C || void 0 === C ? void 0 : C.name,
                            }),
                      }),
                      (0, m.jsxs)("div", {
                        className: "options",
                        children: [
                          (0, m.jsx)("span", {
                            className: "edit-button-container",
                            children: T
                              ? (0, m.jsx)(l.Z, {})
                              : k
                              ? (0, m.jsx)(n.tfk, {
                                  size: 20,
                                  onClick: () => {
                                    let e = C;
                                    (e.programTypes = E),
                                      P(e),
                                      I({ ...C, editing: !1 });
                                  },
                                })
                              : (0, m.jsx)(n.zmo, {
                                  size: 20,
                                  onClick: () => {
                                    w(!0);
                                  },
                                }),
                          }),
                          T
                            ? (0, m.jsx)(m.Fragment, {})
                            : (0, m.jsx)("span", {
                                className: "edit-button-container",
                                children: (0, m.jsx)(n.FU5, {
                                  size: 20,
                                  onClick: (e) => {
                                    w(!1), _(!0);
                                  },
                                }),
                              }),
                        ],
                      }),
                    ],
                  }),
                  (0, m.jsxs)("div", {
                    className: "body",
                    children: [
                      Z
                        ? (0, m.jsx)("small", {
                            className: "message success",
                            children: "Saved succesfully",
                          })
                        : (0, m.jsx)(m.Fragment, {}),
                      N && b.idx == g
                        ? (0, m.jsx)("small", {
                            className: "message error",
                            children: b.message,
                          })
                        : (0, m.jsx)(m.Fragment, {}),
                      k
                        ? (0, m.jsxs)("div", {
                            className: "details",
                            children: [
                              (0, m.jsxs)("div", {
                                className: "highlights",
                                children: [
                                  (0, m.jsx)("p", { children: "Highlights" }),
                                  null === C ||
                                  void 0 === C ||
                                  null === (s = C.highlights) ||
                                  void 0 === s
                                    ? void 0
                                    : s.map((e, s) =>
                                        (0, m.jsx)(
                                          "div",
                                          {
                                            className: "highlight",
                                            children: (0, m.jsx)("input", {
                                              type: "text",
                                              className: "highlight-input",
                                              placeholder: "Key Highlight 1",
                                              value: e,
                                              onChange: (e) => {
                                                let a =
                                                  null === C || void 0 === C
                                                    ? void 0
                                                    : C.highlights;
                                                (a[s] = e.target.value),
                                                  P({ ...C, highlights: a });
                                              },
                                            }),
                                          },
                                          s
                                        )
                                      ),
                                ],
                              }),
                              (0, m.jsxs)("div", {
                                className: "description",
                                children: [
                                  (0, m.jsx)("p", { children: "Description" }),
                                  (0, m.jsx)("p", {
                                    className: "text-area",
                                    children: (0, m.jsx)("textarea", {
                                      disabled: !k,
                                      type: "text",
                                      className: "description-input",
                                      placeholder:
                                        "Write about the program and what it has to offer in a description format",
                                      value:
                                        null === C || void 0 === C
                                          ? void 0
                                          : C.description,
                                      onChange: (e) => {
                                        P({
                                          ...C,
                                          description: e.target.value,
                                        });
                                      },
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          })
                        : null,
                      (0, m.jsxs)("div", {
                        className: "program-types",
                        children: [
                          (0, m.jsx)("p", { children: "Program Types" }),
                          (0, m.jsxs)("div", {
                            className: "header",
                            children: [
                              (0, m.jsx)("div", { children: "Duration" }),
                              (0, m.jsx)("div", { children: "Price" }),
                              (0, m.jsx)("div", { children: "Discount" }),
                            ],
                          }),
                          null === E || void 0 === E
                            ? void 0
                            : E.map((e, s) =>
                                (0, m.jsxs)(
                                  "div",
                                  {
                                    className: "program-details",
                                    children: [
                                      (0, m.jsxs)("div", {
                                        className: "program-detail",
                                        children: [
                                          k
                                            ? (0, m.jsx)("div", {
                                                className: "edit-details",
                                                children: (0, m.jsx)("input", {
                                                  type: "text",
                                                  maxLength: 3,
                                                  placeholder: "Enter days",
                                                  value:
                                                    null === e || void 0 === e
                                                      ? void 0
                                                      : e.duration,
                                                  onChange: (e) => {
                                                    let a = [...E];
                                                    (a[s].duration =
                                                      e.target.value),
                                                      S(a);
                                                  },
                                                  onKeyPress: (e) => {
                                                    isNaN(e.key) &&
                                                      e.preventDefault();
                                                  },
                                                }),
                                              })
                                            : (0, m.jsx)("span", {
                                                style: { marginRight: "5px" },
                                                children:
                                                  null === e || void 0 === e
                                                    ? void 0
                                                    : e.duration,
                                              }),
                                          (0, m.jsx)("span", {
                                            children: "days",
                                          }),
                                        ],
                                      }),
                                      (0, m.jsxs)("div", {
                                        className: "program-detail",
                                        children: [
                                          (0, m.jsx)(d.JO, {
                                            icon: "bx:rupee",
                                            height: 22,
                                          }),
                                          k
                                            ? (0, m.jsx)("div", {
                                                className: "edit-details",
                                                children: (0, m.jsx)("input", {
                                                  type: "text",
                                                  maxLength: 5,
                                                  placeholder: "Enter price",
                                                  value:
                                                    null === e || void 0 === e
                                                      ? void 0
                                                      : e.price,
                                                  onChange: (e) => {
                                                    let a = [...E];
                                                    (a[s].price =
                                                      e.target.value),
                                                      S(a);
                                                  },
                                                  onKeyPress: (e) => {
                                                    isNaN(e.key) &&
                                                      e.preventDefault();
                                                  },
                                                }),
                                              })
                                            : (0, m.jsx)("span", {
                                                children:
                                                  null === e || void 0 === e
                                                    ? void 0
                                                    : e.price,
                                              }),
                                        ],
                                      }),
                                      (0, m.jsxs)("div", {
                                        className: "program-detail",
                                        children: [
                                          (0, m.jsx)(d.JO, {
                                            icon: "bx:rupee",
                                            height: 22,
                                          }),
                                          k
                                            ? (0, m.jsx)("div", {
                                                className: "edit-details",
                                                children: (0, m.jsx)("input", {
                                                  type: "text",
                                                  maxLength: 4,
                                                  placeholder: "Enter discount",
                                                  value:
                                                    null === e || void 0 === e
                                                      ? void 0
                                                      : e.discount,
                                                  onChange: (e) => {
                                                    let a = [...E];
                                                    (a[s].discount =
                                                      e.target.value),
                                                      S(a);
                                                  },
                                                  onKeyPress: (e) => {
                                                    isNaN(e.key) &&
                                                      e.preventDefault();
                                                  },
                                                }),
                                              })
                                            : (0, m.jsx)("span", {
                                                children:
                                                  null === e || void 0 === e
                                                    ? void 0
                                                    : e.discount,
                                              }),
                                        ],
                                      }),
                                      k
                                        ? (0, m.jsx)(n.FU5, {
                                            className: "close-icon",
                                            onClick: () => {
                                              ((e) => {
                                                let s = [...E];
                                                null === s ||
                                                  void 0 === s ||
                                                  s.splice(e, 1),
                                                  S(s);
                                              })(s);
                                            },
                                          })
                                        : (0, m.jsx)(m.Fragment, {}),
                                    ],
                                  },
                                  s
                                )
                              ),
                          k
                            ? (0, m.jsx)(t.Z, {
                                text: "+ Add Program Type",
                                color: "green",
                                classNames: "add-button",
                                onClick: () => {
                                  (() => {
                                    let e = [...E];
                                    e.push({
                                      duration: 7,
                                      price: 200,
                                      discount: 300,
                                    }),
                                      S(e);
                                  })();
                                },
                              })
                            : (0, m.jsx)(m.Fragment, {}),
                        ],
                      }),
                      (0, m.jsx)("div", {
                        className: "users",
                        children:
                          null === v ||
                          void 0 === v ||
                          null === (a = v.userRefs) ||
                          void 0 === a
                            ? void 0
                            : a.map((e, s) =>
                                (0, m.jsxs)(
                                  "div",
                                  {
                                    "data-for": "getContent-".concat(R + s),
                                    "data-tip": !0,
                                    children: [
                                      (0, m.jsx)("img", {
                                        class: "profile-image",
                                        src:
                                          null === e || void 0 === e
                                            ? void 0
                                            : e.photoUrl,
                                      }),
                                      (0, m.jsx)(c.Z, {
                                        className: "tooltip-container-user",
                                        id: "getContent-".concat(R + s),
                                        getContent: () => {
                                          var s, a;
                                          return ((e) => {
                                            let {
                                              name: s,
                                              startDate: a,
                                              endDate: i,
                                            } = e;
                                            return (0, h.renderToString)(
                                              (0, m.jsxs)("div", {
                                                className:
                                                  "program-tooltip-div",
                                                children: [
                                                  (0, m.jsx)("div", {
                                                    children: s,
                                                  }),
                                                  (0, m.jsxs)("div", {
                                                    className: "date",
                                                    children: ["Start: ", a],
                                                  }),
                                                  (0, m.jsxs)("div", {
                                                    className: "date",
                                                    children: ["End: ", i],
                                                  }),
                                                ],
                                              })
                                            );
                                          })({
                                            name:
                                              null === e || void 0 === e
                                                ? void 0
                                                : e.name,
                                            startDate: new Date(
                                              null === e ||
                                              void 0 === e ||
                                              null ===
                                                (s = e.currentProgramRef) ||
                                              void 0 === s
                                                ? void 0
                                                : s.startDate
                                            ).toLocaleDateString(),
                                            endDate: new Date(
                                              null === e ||
                                              void 0 === e ||
                                              null ===
                                                (a = e.currentProgramRef) ||
                                              void 0 === a
                                                ? void 0
                                                : a.endDate
                                            ).toLocaleDateString(),
                                          });
                                        },
                                        html: !0,
                                      }),
                                    ],
                                  },
                                  s
                                )
                              ),
                      }),
                    ],
                  }),
                ],
              }),
              (0, m.jsx)(o.Z, {
                title: "Delete Program",
                show: z,
                onHide: () => _(!1),
                width: "medium",
                dark: !0,
                children: (0, m.jsxs)("div", {
                  children: [
                    (0, m.jsx)("p", {
                      children: "Are you sure you want to delete the program?",
                    }),
                    (0, m.jsxs)("div", {
                      className: "d-flex",
                      children: [
                        (0, m.jsx)(t.Z, {
                          text: "Yes",
                          color: "green",
                          size: "s",
                          onClick: () => {
                            p(g);
                          },
                        }),
                        (0, m.jsx)(t.Z, {
                          text: "No",
                          color: "red",
                          size: "s",
                          onClick: () => {
                            _(!1);
                          },
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      };
      a(1298);
      const u = () => {
        const [e, s] = (0, i.useState)([]),
          [a, n] = (0, i.useState)(!1),
          [d, o] = (0, i.useState)(!1),
          [c, h] = (0, i.useState)(!1),
          [u, g] = (0, i.useState)({ message: "Could not be saved", idx: -1 });
        (0, i.useEffect)(async () => {
          n(!0);
          try {
            var e, a;
            const i = await r.Z.get("/trainers/programs/all"),
              t =
                null === i ||
                void 0 === i ||
                null === (e = i.data) ||
                void 0 === e ||
                null === (a = e.profileRef) ||
                void 0 === a
                  ? void 0
                  : a.programOfferedRefs;
            null === t ||
              void 0 === t ||
              t.forEach((e) => {
                e.editing = !1;
              }),
              s(t);
          } catch (i) {
            console.log(i);
          }
          n(!1);
        }, []);
        const p = async (a) => {
          var i;
          n(!0);
          let t = [...e];
          if (-1 != (null === (i = t[a]) || void 0 === i ? void 0 : i._id))
            try {
              var l;
              await r.Z.patch(
                "/trainers/programs/patch?programId=".concat(
                  null === (l = t[a]) || void 0 === l ? void 0 : l._id
                )
              );
            } catch (o) {
              var d;
              if (
                405 ==
                (null === o ||
                void 0 === o ||
                null === (d = o.response) ||
                void 0 === d
                  ? void 0
                  : d.status)
              )
                return (
                  g({
                    message:
                      "This program is assigned to a user, so it can't be deleted.",
                    idx: a,
                  }),
                  h(!0),
                  void n(!1)
                );
            }
          null === t || void 0 === t || t.splice(a, 1), s(t), n(!1);
        };
        return (0, m.jsxs)("div", {
          className: "programs-container",
          children: [
            (0, m.jsx)("p", { className: "heading", children: "Programs" }),
            a
              ? (0, m.jsx)(l.Z, {})
              : (0, m.jsxs)(m.Fragment, {
                  children: [
                    null === e || void 0 === e
                      ? void 0
                      : e.map((a, i) =>
                          (0, m.jsx)(
                            v,
                            {
                              programs: e,
                              program: a,
                              deleteProgram: p,
                              idx: i,
                              setPrograms: (a) => {
                                let t = [...e];
                                (t[i] = { ...a }), s(t);
                              },
                              setDisableAddButton: o,
                              isError: c,
                              setIsError: h,
                              setErrorMessage: g,
                              errorMessage: u,
                            },
                            i
                          )
                        ),
                    (0, m.jsx)(t.Z, {
                      text: "+ Add Program",
                      color: "green",
                      disabled: d,
                      classNames: "add-button",
                      onClick: () => {
                        (async () => {
                          s([
                            ...e,
                            {
                              _id: -1,
                              name: "",
                              editing: !0,
                              highlights: ["", "", "", ""],
                              description: "",
                              programTypes: [
                                { duration: "", price: "", discount: "" },
                              ],
                            },
                          ]);
                        })();
                      },
                    }),
                  ],
                }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=242.4f101cdb.chunk.js.map
