"use strict";
(self.webpackChunktrainer_dashboard =
  self.webpackChunktrainer_dashboard || []).push([
  [194],
  {
    1298: (e, s, t) => {
      t.d(s, { Z: () => d });
      var l = t(2791),
        i = t(2711),
        n = t(7495),
        a = t(184);
      const d = (e) => {
        let {
          data: s,
          active: t = !1,
          headClick: d = !0,
          disabled: o = !1,
        } = e;
        const [r, c] = (0, l.useState)(t);
        return (0, a.jsx)("div", {
          className: "accordion-container",
          children: (0, a.jsx)("div", {
            className: "accordion",
            id: "accordionExample",
            children: (0, a.jsxs)(n.Z, {
              classNames: "card-container",
              children: [
                (0, a.jsxs)("div", {
                  className: "accordion-header ".concat(r ? "toggle" : ""),
                  children: [
                    (0, a.jsx)("p", {
                      className: "accordion-title",
                      onClick: () => {
                        d && c(!r);
                      },
                      children: null === s || void 0 === s ? void 0 : s.parent,
                    }),
                    o
                      ? null
                      : r
                      ? (0, a.jsx)(i.JO, {
                          icon: "akar-icons:chevron-up",
                          className: "down-carret",
                          onClick: () => {
                            c(!r);
                          },
                        })
                      : (0, a.jsx)(i.JO, {
                          icon: "akar-icons:chevron-down",
                          className: "down-carret",
                          onClick: () => {
                            c(!r);
                          },
                        }),
                  ],
                }),
                r
                  ? (0, a.jsx)("div", {
                      className: r ? "" : "collapse",
                      children: (0, a.jsx)(n.Z, {
                        classNames: "accordion-body ",
                        children: null === s || void 0 === s ? void 0 : s.child,
                      }),
                    })
                  : (0, a.jsx)(a.Fragment, {}),
              ],
            }),
          }),
        });
      };
    },
    4183: (e, s, t) => {
      t.d(s, { Z: () => n });
      t(2791);
      var l = t(5717),
        i = (t(3037), t(8688), t(184));
      const n = (e) => {
        let {
            children: s,
            slidesToShow: t = 3,
            breakpoints: n = [600, 480],
            ...a
          } = e,
          d =
            null === n || void 0 === n
              ? void 0
              : n.map((e, t) => ({
                  breakpoint: e,
                  settings: {
                    infinite: s.length > n.length - t,
                    slidesToShow: n.length - t,
                    slidesToScroll: n.length - t,
                    initialSlide: n.length - t,
                  },
                }));
        var o = {
          dots: !0,
          draggable: !1,
          infinite: s.length > 3,
          centerMode: !1,
          speed: 500,
          slidesToShow: t,
          slidesToScroll: t,
          initialSlide: 0,
          responsive: [...d],
          ...a,
        };
        return (0, i.jsx)("div", {
          className: "p-1",
          children: (0, i.jsx)(l.Z, {
            ...o,
            className: "my-slider",
            children: s,
          }),
        });
      };
    },
    6085: (e, s, t) => {
      t.d(s, { Z: () => n });
      t(2791);
      var l = t(6122),
        i = (t(6016), t(184));
      const n = () => (0, i.jsx)(l.Z, { errorType: "500" });
    },
    7250: (e, s, t) => {
      t.d(s, { Z: () => o });
      var l = t(2791),
        i = t(9513),
        n = t.n(i),
        a = (t(2095), t(2711)),
        d = t(184);
      const o = (e) => {
        let {
          id: s = "",
          label: t,
          inputLabel: i,
          labelClass: o = "",
          classNames: r = "",
          register: c,
          startYear: u = 1950,
          endYear: v = 2025,
          initialValue: g = new Date(),
          disabled: h = !1,
          setValue: m = () => {},
          showDate: x = !0,
          minDate: p = Date.parse("1/01/1950"),
          maxDate: j = Date.parse("1/01/2025"),
          excludeDates: N = [],
          ...R
        } = e;
        const [f, b] = (0, l.useState)(g),
          S = (function (e, s, t) {
            let l = [];
            for (let i = e; i <= s; i++) l.push(i);
            return l;
          })(u, v),
          w = [
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
          m(f);
        }, [f]);
        const k = (0, l.forwardRef)((e, s) => {
          let { value: t, onClick: l } = e;
          return (0, d.jsxs)("div", {
            className: "customInput",
            onClick: l,
            ref: s,
            children: [
              (0, d.jsx)("input", {
                ref: c,
                name: "DOB",
                type: "hidden",
                value: t,
              }),
              x
                ? (0, d.jsx)(d.Fragment, { children: t })
                : (0, d.jsx)(d.Fragment, {}),
              (0, d.jsx)(a.JO, {
                icon: "material-symbols:edit-calendar-outline-rounded",
                height: 24,
                width: 24,
              }),
            ],
          });
        });
        return (
          (k.displayName = "CustomInput"),
          t
            ? (0, d.jsxs)("div", {
                className: "label-input-container ".concat(r),
                children: [
                  (0, d.jsx)("div", {
                    className: "label-text-container ".concat(o),
                    children:
                      t &&
                      (0, d.jsx)("label", {
                        className: "label",
                        htmlFor: s,
                        children: t,
                      }),
                  }),
                  (0, d.jsxs)("div", {
                    className: "input-container",
                    children: [
                      i &&
                        (0, d.jsx)("div", {
                          className: "input-label",
                          children: i,
                        }),
                      (0, d.jsx)(n(), {
                        disabled: h,
                        renderCustomHeader: (e) => {
                          let {
                            date: s,
                            changeYear: t,
                            changeMonth: l,
                            decreaseMonth: i,
                            increaseMonth: n,
                            prevMonthButtonDisabled: a,
                            nextMonthButtonDisabled: o,
                          } = e;
                          return (0, d.jsxs)("div", {
                            style: {
                              margin: 10,
                              display: "flex",
                              justifyContent: "center",
                            },
                            children: [
                              (0, d.jsx)("button", {
                                className: "date-arrow-btn",
                                onClick: i,
                                disabled: a,
                                children: "<",
                              }),
                              (0, d.jsx)("select", {
                                className: "date-options",
                                value: s.getFullYear(),
                                onChange: (e) => {
                                  let {
                                    target: { value: s },
                                  } = e;
                                  return t(s);
                                },
                                children: S.map((e) =>
                                  (0, d.jsx)(
                                    "option",
                                    { value: e, children: e },
                                    e
                                  )
                                ),
                              }),
                              (0, d.jsx)("select", {
                                className: "date-options",
                                value: w[s.getMonth()],
                                onChange: (e) => {
                                  let {
                                    target: { value: s },
                                  } = e;
                                  return l(w.indexOf(s));
                                },
                                children: w.map((e) =>
                                  (0, d.jsx)(
                                    "option",
                                    { value: e, children: e },
                                    e
                                  )
                                ),
                              }),
                              (0, d.jsx)("button", {
                                className: "date-arrow-btn",
                                onClick: n,
                                disabled: o,
                                children: ">",
                              }),
                            ],
                          });
                        },
                        selected: f,
                        onChange: (e) => b(e),
                        customInput: (0, d.jsx)(k, {}),
                      }),
                    ],
                  }),
                ],
              })
            : (0, d.jsx)(n(), {
                portalId: "root-portal",
                renderCustomHeader: (e) => {
                  let {
                    date: s,
                    changeYear: t,
                    changeMonth: l,
                    decreaseMonth: i,
                    increaseMonth: n,
                    prevMonthButtonDisabled: a,
                    nextMonthButtonDisabled: o,
                  } = e;
                  return (0, d.jsxs)("div", {
                    style: {
                      margin: 10,
                      display: "flex",
                      justifyContent: "center",
                    },
                    children: [
                      (0, d.jsx)("button", {
                        className: "date-arrow-btn",
                        onClick: i,
                        disabled: a,
                        children: "<",
                      }),
                      (0, d.jsx)("select", {
                        className: "date-options",
                        value: s.getFullYear(),
                        onChange: (e) => {
                          let {
                            target: { value: s },
                          } = e;
                          return t(s);
                        },
                        children: S.map((e) =>
                          (0, d.jsx)("option", { value: e, children: e }, e)
                        ),
                      }),
                      (0, d.jsx)("select", {
                        className: "date-options",
                        value: w[s.getMonth()],
                        onChange: (e) => {
                          let {
                            target: { value: s },
                          } = e;
                          return l(w.indexOf(s));
                        },
                        children: w.map((e) =>
                          (0, d.jsx)("option", { value: e, children: e }, e)
                        ),
                      }),
                      (0, d.jsx)("button", {
                        className: "date-arrow-btn",
                        onClick: n,
                        disabled: o,
                        children: ">",
                      }),
                    ],
                  });
                },
                selected: f,
                onChange: (e) => b(e),
                customInput: (0, d.jsx)(k, {}),
                minDate: p,
                maxDate: j,
                excludeDates: N,
              })
        );
      };
    },
    2095: (e, s, t) => {
      t.d(s, { Z: () => i });
      t(2791);
      var l = t(184);
      const i = (e) => {
        let {
          id: s = "",
          darkTheme: t = !1,
          divClassNames: i = "",
          type: n = "text",
          label: a,
          refValue: d,
          inputLabel: o,
          placeholderStyle: r,
          labelClass: c = "",
          inputClassNames: u,
          errorClassName: v,
          maxLength: g,
          required: h = !1,
          ...m
        } = e;
        const x = t ? "white-border" : u,
          p = (0, l.jsx)("div", {
            className: "search-box ".concat(i),
            children: (0, l.jsx)("input", {
              min: 1,
              id: s,
              type: n,
              className: "search-box-input ".concat(v, " ").concat(x),
              style: r,
              ref: d,
              onInput: (e) => {
                e.target.value = e.target.value.slice(0, g);
              },
              ...m,
            }),
          });
        return a
          ? (0, l.jsxs)("div", {
              className: "label-input-container",
              children: [
                (0, l.jsx)("div", {
                  className: "label-text-container ".concat(c),
                  children:
                    a &&
                    (0, l.jsxs)("label", {
                      className: "label",
                      htmlFor: s,
                      children: [
                        a,
                        h
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
    8112: (e, s, t) => {
      t.d(s, { Z: () => n });
      t(2791);
      var l = t(7495),
        i = t(184);
      const n = (e) => {
        let {
          id: s = "text-area",
          darkTheme: t = !1,
          classNames: n = "",
          divClassNames: a = "",
          labelClass: d,
          label: o,
          refValue: r,
          inputClassNames: c,
          initialValue: u,
          ...v
        } = e;
        const g = t ? "white-border" : c,
          h = (0, i.jsx)(l.Z, {
            classNames: "search-box ".concat(a),
            children: (0, i.jsx)("textarea", {
              id: s,
              rows: "4",
              cols: "50",
              className: "search-box-input ".concat(g),
              ...v,
              defaultValue: u,
              ref: r,
            }),
          });
        return (0, i.jsx)(i.Fragment, {
          children: o
            ? (0, i.jsxs)("div", {
                className: "text-area-container",
                children: [
                  (0, i.jsx)("div", {
                    className: "label-text-container ".concat(d),
                    children:
                      o &&
                      (0, i.jsx)("label", {
                        className: "label",
                        htmlFor: s,
                        children: o,
                      }),
                  }),
                  h,
                ],
              })
            : (0, i.jsx)("div", {
                className: "text-area-container",
                children: h,
              }),
        });
      };
    },
    2284: (e, s, t) => {
      t.d(s, { Z: () => d });
      t(2791);
      var l = t(8489),
        i = t(7495),
        n = t(2711),
        a = t(184);
      const d = (e) => {
        let {
          onHide: s,
          children: t,
          show: d,
          title: o,
          width: r = "large",
          dark: c = !1,
          ...u
        } = e;
        return (0, a.jsx)(l.Z, {
          ...u,
          show: d,
          size: "xs",
          "aria-labelledby": "contained-modal-title-vcenter",
          centered: !0,
          dialogClassName: "modal-".concat(r),
          contentClassName: "no-background",
          children: (0, a.jsx)(i.Z, {
            children: (0, a.jsxs)(l.Z.Body, {
              className: "modal-container modal-container-"
                .concat(r, " ")
                .concat(c && "dark"),
              children: [
                (0, a.jsxs)("div", {
                  className: "modal-header-container",
                  children: [
                    (0, a.jsx)("h4", { className: "modal-title", children: o }),
                    (0, a.jsx)(n.JO, {
                      icon: "ep:close-bold",
                      onClick: s,
                      className: "close-button-icon",
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: "modal-body-container",
                  children: t,
                }),
              ],
            }),
          }),
        });
      };
    },
    7495: (e, s, t) => {
      t.d(s, { Z: () => n });
      var l = t(2791),
        i = t(184);
      const n = (e) => {
        let {
          children: s,
          classNames: t = "",
          border: n = "small",
          square: a = !1,
          shadowSize: d = "normal",
          cardTitle: o,
          cardElementRight: r,
          cardTitleClassNames: c = "",
          ...u
        } = e;
        const v = (0, l.useRef)(),
          [g, h] = (0, l.useState)(0),
          m = (0, l.useCallback)(() => {
            var e;
            const s =
              null === v ||
              void 0 === v ||
              null === (e = v.current) ||
              void 0 === e
                ? void 0
                : e.offsetWidth;
            h(s);
          }, []);
        return (
          (0, l.useEffect)(
            () => (
              m(),
              window.addEventListener("resize", m),
              () => {
                window.removeEventListener("resize", m);
              }
            ),
            []
          ),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (o || r) &&
                (0, i.jsxs)("div", {
                  className: "d-flex justify-content-between",
                  children: [
                    o &&
                      (0, i.jsx)("p", {
                        className: "shadow-container-title ".concat(c),
                        children: o,
                      }),
                    r,
                  ],
                }),
              (0, i.jsx)("div", {
                ...u,
                ref: v,
                style: a ? { height: g, background: "white" } : {},
                className: ""
                  .concat(t, " shadow-div shadow-div-")
                  .concat(d, " border-")
                  .concat(n, " ")
                  .concat(a ? "center-fit" : ""),
                children: s,
              }),
            ],
          })
        );
      };
    },
    5831: (e, s, t) => {
      t.d(s, { Z: () => S });
      var l = t(2791),
        i = t(8282),
        n = t(2592),
        a = t(968),
        d = t(4880),
        o = t(1523),
        r = (t(7217), t(4542)),
        c = t(2711),
        u = (t(1298), t(9391)),
        v = t(8133),
        g = t(184);
      const h = (e) => {
        let { target: s, changeTarget: t, changeValue: l, isLoading: i } = e;
        return i
          ? (0, g.jsxs)("div", {
              className: "loader-container",
              children: [(0, g.jsx)(v.Z, {}), " "],
            })
          : (0, g.jsxs)("div", {
              className: "target",
              children: [
                (0, g.jsx)(a.Z, {
                  style: { marginBottom: "5px" },
                  onClick: () => {
                    t((e) => e + l);
                  },
                  iconComponent: "carbon:add",
                  size: "s",
                }),
                (0, g.jsxs)("span", {
                  children: [
                    (0, g.jsxs)("h5", {
                      children: [(s / 1e3).toFixed(1), "k"],
                    }),
                    (0, g.jsx)("p", {
                      className: "subtitle space",
                      style: { letterSpacing: "1px" },
                      children: "target",
                    }),
                  ],
                }),
                (0, g.jsx)(a.Z, {
                  style: { marginTop: "5px" },
                  onClick: () => {
                    t((e) => Math.max(0, e - l));
                  },
                  iconComponent: "akar-icons:minus",
                  size: "s",
                }),
              ],
            });
      };
      var m = t(1150),
        x = t(9683),
        p = (t(444), t(6305), t(6122));
      t(8340);
      const j = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        N = (e) => {
          let { clientId: s, stepsWalked7Days: t, targetSteps: i } = e,
            n = 0;
          const [a, d] = (0, l.useState)(i),
            [o, c] = (0, l.useState)(!1),
            [v, N] = (0, l.useState)(!1),
            R = (0, l.useRef)(!0);
          let f = null,
            b = null;
          if (
            ((0, l.useEffect)(() => {
              if (R.current) return void (R.current = !1);
              const e = setTimeout(async () => {
                try {
                  c(!0);
                  await r.Z.post("trainers/targetSteps", {
                    targetSteps: Number(a),
                    clientId: s,
                  });
                  c(!1);
                } catch (e) {
                  c(!1), N(!0);
                }
              }, 1e3);
              return () => {
                clearTimeout(e);
              };
            }, [a]),
            t.length > 0)
          ) {
            const e = new Date(),
              s = new Date(t[0].date);
            s.getMonth() === e.getMonth() &&
              s.getDate() === e.getDate() &&
              s.getFullYear() === e.getFullYear() &&
              (n = t[0].stepsWalked);
            const l = t.map((e) => {
                const s = new Date(e.date);
                return s.getDate() + " " + j[s.getUTCMonth()];
              }),
              i = t.map((e) => e.stepsWalked);
            l.reverse(), i.reverse();
            let d = 0;
            t.forEach((e) => {
              d = Math.max(d, e.stepsWalked);
            }),
              (f = {
                labels: l,
                datasets: [
                  {
                    label: "Steps Graph",
                    data: i,
                    backgroundColor: "#7FD18C",
                    borderColor: "black",
                    color: "white",
                    barThickness: 15,
                    borderRadius: 3,
                  },
                ],
              }),
              (b = {
                responsive: !0,
                plugins: { legend: { display: !1 } },
                scales: {
                  y: {
                    beginAtZero: !0,
                    grid: {
                      color: function (e) {
                        return e.tick.value === a ? "#8899cd" : "grey";
                      },
                      borderDash: function (e) {
                        return e.tick.value === a ? [10] : [1];
                      },
                      lineWidth: function (e) {
                        return e.tick.value === a ? 2 : 1;
                      },
                    },
                    max: Math.max(d, a),
                    ticks: {
                      stepSize: Math.min(a, d),
                      color: function (e) {
                        return e.tick.value === a ? "#8899cd" : "grey";
                      },
                    },
                  },
                  x: {
                    ticks: {
                      color: "white",
                      maxRotation: 0,
                      minRotation: 0,
                      font: function (e) {
                        var s = Math.round(
                            (e.chart.height + e.chart.width) / 2
                          ),
                          t = Math.round(s / 24);
                        return { size: (t = t > 11 ? 11 : t) };
                      },
                    },
                  },
                },
              });
          }
          const S = (n / a) * 100;
          return v
            ? (0, g.jsx)(p.Z, {})
            : (0, g.jsxs)(g.Fragment, {
                children: [
                  (0, g.jsx)(m.Z, {
                    className: f && "tooltip-container-steps",
                    place: "bottom",
                    id: "getContent-".concat(s),
                    children: f
                      ? (0, g.jsx)(x.$Q, {
                          redraw: !0,
                          updateMode: "reset",
                          options: b,
                          data: f,
                        })
                      : (0, g.jsx)("span", {
                          children: "Not enough step data.",
                        }),
                  }),
                  (0, g.jsxs)("div", {
                    className: " steps-container",
                    children: [
                      (0, g.jsx)("div", {
                        "data-tip": !0,
                        "data-for": "getContent-".concat(s),
                        className: "progress",
                        children: (0, g.jsx)(u.Wo, {
                          value: S,
                          styles: (0, u.y3)({
                            rotation: 0.25,
                            pathColor: "#7FD18C",
                          }),
                          children: (0, g.jsxs)("div", {
                            className: "children",
                            children: [
                              (0, g.jsx)("h5", { children: n }),
                              (0, g.jsx)("p", {
                                className: "subtitle",
                                children: "walked",
                              }),
                            ],
                          }),
                        }),
                      }),
                      (0, g.jsx)(h, {
                        isLoading: o,
                        target: a,
                        changeTarget: d,
                        changeValue: 500,
                      }),
                    ],
                  }),
                ],
              });
        };
      var R = t(2426),
        f = t.n(R);
      const b = (e) => {
          let {
            fullName: s,
            email: t,
            photoUrl: r,
            lastSession: u,
            nextSession: v,
            clientId: h,
            showAccordian: m = !0,
            showBackButton: x = !0,
            showWorkoutButton: p = !0,
            showStepsCount: j = !1,
            showLastWorkout: R = !0,
            lastUpdatedWorkoutDate: b,
            lastCompletedWorkoutDate: S,
            lastUpdatedFeedbackDate: w,
            lastNotUpdatedFeedbackDate: k,
            targetSteps: y,
            stepsWalked7Days: C,
          } = e;
          const D = (0, d.k6)(),
            [I, F] = (0, l.useState)(y),
            [W, E] = (0, l.useState)(!1);
          let Z = !1;
          (b && !f()().isSameOrAfter(b, "day")) || (Z = !0);
          return (0, g.jsx)("div", {
            className: "client-details-row",
            children: (0, g.jsx)(i.Z, {
              className: "client-card",
              children: (0, g.jsx)(i.Z.Header, {
                className: "client-card-header",
                children: (0, g.jsxs)("div", {
                  className: "client-heading",
                  children: [
                    (0, g.jsxs)("div", {
                      className: "col-md-4 client-details",
                      children: [
                        x &&
                          (0, g.jsx)("div", {
                            className: "col-md-1 back-container",
                            children: (0, g.jsx)(o.rU, {
                              to: "/",
                              children: (0, g.jsx)(c.JO, {
                                color: "white",
                                icon: "eva:arrow-ios-back-fill",
                                height: 40,
                                width: 40,
                              }),
                            }),
                          }),
                        (0, g.jsxs)("div", {
                          className: "client-name-details",
                          children: [
                            (0, g.jsx)("div", {
                              className: "col-md-2 image-container",
                              children: (0, g.jsx)(n.Z, {
                                src:
                                  null !== r && void 0 !== r
                                    ? r
                                    : "https://storage.googleapis.com/evolv-store/icons/auth/profile.jpg",
                                roundedCircle: !0,
                                width: "40px",
                                height: "40px",
                              }),
                            }),
                            (0, g.jsxs)("div", {
                              className: "col client-details-text",
                              children: [
                                (0, g.jsx)("p", {
                                  className: "client-name",
                                  children: s,
                                }),
                                (0, g.jsx)("p", {
                                  className: "last-session",
                                  children: t,
                                }),
                                (0, g.jsx)("p", {
                                  className: "last-session",
                                  children:
                                    u &&
                                    "Last: "
                                      .concat(
                                        null === u || void 0 === u
                                          ? void 0
                                          : u.name,
                                        " on "
                                      )
                                      .concat(
                                        null === u || void 0 === u
                                          ? void 0
                                          : u.actualPerformDate
                                      ),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    j &&
                      (0, g.jsx)(N, {
                        targetSteps: y,
                        stepsWalked7Days: C,
                        clientId: h,
                      }),
                    R &&
                      (0, g.jsxs)("div", {
                        className: "col-md-2 date-alerts-container",
                        children: [
                          (0, g.jsxs)("div", {
                            className: "date-alerts-left",
                            children: [
                              (0, g.jsxs)("div", {
                                className: "date  ".concat(
                                  k.length > 0 ? "date-alert" : ""
                                ),
                                children: [
                                  (0, g.jsx)("div", {
                                    className: "date-alert-icon",
                                    children: (0, g.jsx)(c.JO, {
                                      fontWeight: "bold",
                                      icon: "bx:user-check",
                                    }),
                                  }),
                                  (0, g.jsx)("div", {
                                    className: "date-text",
                                    children: k
                                      ? k.length > 0
                                        ? (0, g.jsxs)("h5", {
                                            children: [
                                              f()(k).format("D"),
                                              " ",
                                              f()(k).format("MMM"),
                                            ],
                                          })
                                        : (0, g.jsx)("h5", {
                                            className: "no-date",
                                            children: "-",
                                          })
                                      : w
                                      ? (0, g.jsxs)("h5", {
                                          children: [
                                            f()(w).format("D"),
                                            " ",
                                            f()(w).format("MMM"),
                                          ],
                                        })
                                      : (0, g.jsx)("h5", {
                                          className: "no-date",
                                          children: "-",
                                        }),
                                  }),
                                ],
                              }),
                              (0, g.jsxs)("div", {
                                className: "date  ".concat(
                                  Z ? "date-alert" : ""
                                ),
                                children: [
                                  " ",
                                  (0, g.jsx)("div", {
                                    className: "date-alert-icon check",
                                    children: (0, g.jsx)(c.JO, {
                                      fontWeight: "bold",
                                      icon: "carbon:event-schedule",
                                    }),
                                  }),
                                  (0, g.jsx)("div", {
                                    className: "date-text",
                                    children:
                                      b.length > 0
                                        ? (0, g.jsxs)("h5", {
                                            children: [
                                              f()(b).format("D"),
                                              " ",
                                              f()(b).format("MMM"),
                                            ],
                                          })
                                        : (0, g.jsx)("h5", {
                                            className: "no-date",
                                            children: "-",
                                          }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, g.jsx)(a.Z, {
                            iconComponent: "ic:baseline-navigate-next",
                            classNames: "next-button",
                            onClick: () =>
                              D.push({
                                pathname: "workout/".concat(h),
                                state: {
                                  name: s,
                                  email: t,
                                  photoUrl: r,
                                  clientId: h,
                                  targetSteps: Number(I),
                                },
                              }),
                          }),
                        ],
                      }),
                  ],
                }),
              }),
            }),
          });
        },
        S = (e) => {
          let {
            clientList: s,
            showBackButton: t,
            showAccordian: l,
            showContainer: i,
            showStepsCount: n,
            showLastWorkout: a,
            showWorkoutButton: d,
          } = e;
          return (0, g.jsxs)("div", {
            className: "client-container ".concat(!i && "display-hidden"),
            children: [
              l &&
                (0, g.jsxs)("div", {
                  className: "headings",
                  children: [
                    (0, g.jsx)("span", { className: "empty" }),
                    (0, g.jsxs)("h3", {
                      className: "steps",
                      children: [
                        (0, g.jsx)(c.JO, { fontSize: 25, icon: "bx:walk" }),
                        " Steps",
                      ],
                    }),
                    (0, g.jsxs)("h3", {
                      className: "workout",
                      children: [
                        (0, g.jsx)(c.JO, {
                          fontSize: 25,
                          icon: "uil:dumbbell",
                        }),
                        " Workout",
                      ],
                    }),
                  ],
                }),
              null === s || void 0 === s
                ? void 0
                : s.map((e, s) => {
                    var i;
                    return (0, g.jsxs)(
                      "div",
                      {
                        style: { marginBottom: "5px" },
                        children: [
                          l
                            ? (0, g.jsx)("div", {
                                children: "NoProgram" == e[0] ? null : e[0],
                              })
                            : null,
                          null === (i = e[1]) || void 0 === i
                            ? void 0
                            : i.map((e, s) => {
                                var i;
                                return (0, g.jsx)(
                                  b,
                                  {
                                    fullName:
                                      null === e || void 0 === e
                                        ? void 0
                                        : e.name,
                                    email:
                                      null === e || void 0 === e
                                        ? void 0
                                        : e.email,
                                    photoUrl:
                                      null === e || void 0 === e
                                        ? void 0
                                        : e.photoUrl,
                                    clientId:
                                      null !== e && void 0 !== e && e.clientId
                                        ? null === e || void 0 === e
                                          ? void 0
                                          : e.clientId
                                        : null === e || void 0 === e
                                        ? void 0
                                        : e._id,
                                    targetSteps:
                                      null !==
                                        (i =
                                          null === e || void 0 === e
                                            ? void 0
                                            : e.targetSteps) && void 0 !== i
                                        ? i
                                        : 0,
                                    stepsWalked7Days:
                                      null === e || void 0 === e
                                        ? void 0
                                        : e.stepsWalked7Days,
                                    lastUpdatedWorkoutDate:
                                      null === e || void 0 === e
                                        ? void 0
                                        : e.lastUpdatedWorkoutDate,
                                    lastUpdatedFeedbackDate:
                                      null === e || void 0 === e
                                        ? void 0
                                        : e.lastUpdatedFeedbackDate,
                                    lastCompletedWorkoutDate:
                                      null === e || void 0 === e
                                        ? void 0
                                        : e.lastCompletedWorkoutdate,
                                    lastNotUpdatedFeedbackDate:
                                      null === e || void 0 === e
                                        ? void 0
                                        : e.lastNotUpdatedFeedbackDate,
                                    showLastWorkout: a,
                                    showBackButton: t,
                                    showAccordian: l,
                                    showWorkoutButton: d,
                                    showStepsCount: n,
                                  },
                                  s
                                );
                              }),
                        ],
                      },
                      s
                    );
                  }),
            ],
          });
        };
    },
    7217: (e, s, t) => {
      t.d(s, { Z: () => d });
      var l = t(2791),
        i = t(4542),
        n = t(1112),
        a = t(184);
      const d = (e) => {
        let {
          clientId: s,
          client: t,
          showTitle: d = !0,
          breakpoints: o,
          setLatestCompletedSession: r,
        } = e;
        const [c, u] = (0, l.useState)([]),
          [v, g] = (0, l.useState)(!1),
          [h, m] = (0, l.useState)(!1);
        return (
          (0, l.useEffect)(() => {
            (async () => {
              g(!0);
              try {
                const e = await i.Z.get(
                  "trainers/sessions/completed?userRef=".concat(s)
                );
                r(null !== e && void 0 !== e && e.data ? e.data[0] : null),
                  u(null === e || void 0 === e ? void 0 : e.data),
                  m(!1),
                  g(!1);
              } catch (h) {
                m("Unable to fetch client details, please try again later"),
                  g(!1);
              }
            })();
          }, []),
          (0, a.jsxs)(a.Fragment, {
            children: [
              d &&
                (0, a.jsx)("div", {
                  className: "workout-completed-title",
                  children: "Completed",
                }),
              (0, a.jsx)(n.Z, {
                loading: v,
                error: h,
                sessions: c,
                completed: !0,
                clientId: s,
                client: t,
                breakpoints: o,
              }),
            ],
          })
        );
      };
    },
    9041: (e, s, t) => {
      t.d(s, { Z: () => p });
      var l = t(2791),
        i = t(8340),
        n = t(1150),
        a = t(7513),
        d = t(2711),
        o = t(184);
      const r = (e) => {
        var s, t, r, c, u, v, g;
        let { exercise: h, completed: m, isEditing: x, editExercise: p } = e;
        const [j, N] = (0, l.useState)({});
        (0, l.useEffect)(() => {
          var e, s;
          const t =
              null === h ||
              void 0 === h ||
              null === (e = h.exerciseSets) ||
              void 0 === e
                ? void 0
                : e.length,
            l =
              null === h ||
              void 0 === h ||
              null === (s = h.exerciseSets) ||
              void 0 === s
                ? void 0
                : s.map((e) => ({
                    ...e,
                    weight: m
                      ? null === e || void 0 === e
                        ? void 0
                        : e.performedWeight
                      : null === e || void 0 === e
                      ? void 0
                      : e.suggestedWeightRange,
                    reps: m
                      ? null === e || void 0 === e
                        ? void 0
                        : e.performedReps
                      : null === e || void 0 === e
                      ? void 0
                      : e.suggestedRepRange,
                    RIR: m
                      ? null === e || void 0 === e
                        ? void 0
                        : e.performedRIR
                      : null === e || void 0 === e
                      ? void 0
                      : e.suggestedRIRRange,
                  })),
            i = (0, a.rx)(
              null === l || void 0 === l ? void 0 : l.map((e) => e.weight)
            ),
            n = (0, a.rx)(
              null === l || void 0 === l ? void 0 : l.map((e) => e.reps)
            ),
            d = (0, a.rx)(
              null === l || void 0 === l ? void 0 : l.map((e) => e.RIR)
            );
          N({
            sets: l,
            numOfSets: t,
            weightRange: i,
            repRange: n,
            RIRRange: d,
          });
        }, []);
        const R = (e) => (e && -1 !== e ? e : "-"),
          f = (e) => {
            var s;
            return (0, i.renderToString)(
              (0, o.jsx)("video", {
                src:
                  null === h ||
                  void 0 === h ||
                  null === (s = h.exerciseInfoRef) ||
                  void 0 === s
                    ? void 0
                    : s.gifUrl,
                loop: !0,
                className: "exercise-video-tooltip",
                autoPlay: !0,
              })
            );
          },
          b = Math.random();
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsxs)("div", {
              className: "table-exercise-mobile",
              children: [
                (0, o.jsxs)("div", {
                  style: { cursor: "pointer" },
                  "data-for": "getContent-".concat(b + 2),
                  "data-tip": !0,
                  children: [
                    (0, o.jsx)("video", {
                      src:
                        null === h ||
                        void 0 === h ||
                        null === (s = h.exerciseInfoRef) ||
                        void 0 === s
                          ? void 0
                          : s.gifUrl,
                      loop: !0,
                      className: "exercise-video",
                    }),
                    (0, o.jsx)(n.Z, {
                      place: "right",
                      className: "exercise-video-tooltip-container",
                      id: "getContent-".concat(b + 2),
                      getContent: () => {
                        var e;
                        return f(
                          null === h ||
                            void 0 === h ||
                            null === (e = h.exerciseInfoRef) ||
                            void 0 === e ||
                            e.gifUrl
                        );
                      },
                      html: !0,
                    }),
                  ],
                }),
                null === h ||
                void 0 === h ||
                null === (t = h.exerciseInfoRef) ||
                void 0 === t
                  ? void 0
                  : t.name,
              ],
            }),
            (0, o.jsxs)("div", {
              className: "table-row-container table-row-body ".concat(
                x ? "editable" : ""
              ),
              onClick: () => x && p(),
              children: [
                (0, o.jsxs)("div", {
                  className: "table-exercise",
                  children: [
                    m
                      ? null
                      : (0, o.jsxs)("div", {
                          style: { cursor: "pointer" },
                          "data-for": "getContent-".concat(b + 1),
                          "data-tip": !0,
                          children: [
                            (0, o.jsx)("video", {
                              src:
                                null === h ||
                                void 0 === h ||
                                null === (r = h.exerciseInfoRef) ||
                                void 0 === r
                                  ? void 0
                                  : r.gifUrl,
                              loop: !0,
                              className: "exercise-video",
                            }),
                            (0, o.jsx)(n.Z, {
                              place: "right",
                              className: "exercise-video-tooltip-container",
                              id: "getContent-".concat(b + 1),
                              getContent: () => {
                                var e;
                                return f(
                                  null === h ||
                                    void 0 === h ||
                                    null === (e = h.exerciseInfoRef) ||
                                    void 0 === e ||
                                    e.gifUrl
                                );
                              },
                              html: !0,
                            }),
                          ],
                        }),
                    null === h ||
                    void 0 === h ||
                    null === (c = h.exerciseInfoRef) ||
                    void 0 === c
                      ? void 0
                      : c.name,
                  ],
                }),
                (0, o.jsxs)("div", {
                  "data-for": "getContent-".concat(b),
                  "data-tip": !0,
                  className: "table-sets",
                  children: [
                    null === j || void 0 === j ? void 0 : j.numOfSets,
                    (0, o.jsx)(n.Z, {
                      className: "tooltip-container",
                      id: "getContent-".concat(b),
                      getContent: () =>
                        ((e) => {
                          var s;
                          return (0, i.renderToString)(
                            (0, o.jsxs)("div", {
                              children: [
                                (0, o.jsxs)("div", {
                                  className: "heading",
                                  children: [
                                    (0, o.jsx)("div", {
                                      className: "set",
                                      children: "Sets",
                                    }),
                                    (0, o.jsx)("div", {
                                      className: "weight",
                                      children: "Weight",
                                    }),
                                    (0, o.jsx)("div", {
                                      className: "rep",
                                      children: "Reps",
                                    }),
                                    (0, o.jsx)("div", {
                                      className: "rir",
                                      children: "RIR",
                                    }),
                                  ],
                                }),
                                (0, o.jsx)("div", {
                                  className: "body",
                                  children:
                                    null === e ||
                                    void 0 === e ||
                                    null === (s = e.sets) ||
                                    void 0 === s
                                      ? void 0
                                      : s.map((e, s) => {
                                          var t, l, i;
                                          return (0, o.jsxs)(
                                            "div",
                                            {
                                              className: "set-row",
                                              children: [
                                                (0, o.jsx)("div", {
                                                  className: "set",
                                                  children: R(s + 1),
                                                }),
                                                (0, o.jsxs)("div", {
                                                  className: "weight",
                                                  children: [
                                                    (0, o.jsx)("div", {
                                                      className: "left",
                                                      children: R(
                                                        null === e ||
                                                          void 0 === e ||
                                                          null ===
                                                            (t =
                                                              e.suggestedWeightRange) ||
                                                          void 0 === t
                                                          ? void 0
                                                          : t.join("-")
                                                      ),
                                                    }),
                                                    m
                                                      ? (0, o.jsx)("div", {
                                                          className: "right",
                                                          children: R(
                                                            null === e ||
                                                              void 0 === e
                                                              ? void 0
                                                              : e.performedWeight
                                                          ),
                                                        })
                                                      : null,
                                                  ],
                                                }),
                                                (0, o.jsxs)("div", {
                                                  className: "rep",
                                                  children: [
                                                    (0, o.jsx)("div", {
                                                      className: "left",
                                                      children: R(
                                                        null === e ||
                                                          void 0 === e ||
                                                          null ===
                                                            (l =
                                                              e.suggestedRepRange) ||
                                                          void 0 === l
                                                          ? void 0
                                                          : l.join("-")
                                                      ),
                                                    }),
                                                    m
                                                      ? (0, o.jsx)("div", {
                                                          className: "right",
                                                          children: R(
                                                            null === e ||
                                                              void 0 === e
                                                              ? void 0
                                                              : e.performedReps
                                                          ),
                                                        })
                                                      : null,
                                                  ],
                                                }),
                                                (0, o.jsxs)("div", {
                                                  className: "rep",
                                                  children: [
                                                    (0, o.jsx)("div", {
                                                      className: "left",
                                                      children: R(
                                                        null === e ||
                                                          void 0 === e ||
                                                          null ===
                                                            (i =
                                                              e.suggestedRIRRange) ||
                                                          void 0 === i
                                                          ? void 0
                                                          : i.join("-")
                                                      ),
                                                    }),
                                                    m
                                                      ? (0, o.jsx)("div", {
                                                          className: "right",
                                                          children: R(
                                                            null === e ||
                                                              void 0 === e
                                                              ? void 0
                                                              : e.performedRIR
                                                          ),
                                                        })
                                                      : null,
                                                  ],
                                                }),
                                              ],
                                            },
                                            s
                                          );
                                        }),
                                }),
                              ],
                            })
                          );
                        })(j),
                      html: !0,
                    }),
                  ],
                }),
                (0, o.jsxs)("div", {
                  className: "table-weights",
                  children: [
                    0 ==
                    (null === j ||
                    void 0 === j ||
                    null === (u = j.weightRange) ||
                    void 0 === u
                      ? void 0
                      : u.length)
                      ? 0
                      : null === j || void 0 === j
                      ? void 0
                      : j.weightRange,
                    " ",
                    "kg",
                  ],
                }),
                (0, o.jsx)("div", {
                  className: "table-reps",
                  children:
                    0 ==
                    (null === j ||
                    void 0 === j ||
                    null === (v = j.repRange) ||
                    void 0 === v
                      ? void 0
                      : v.length)
                      ? 0
                      : null === j || void 0 === j
                      ? void 0
                      : j.repRange,
                }),
                (0, o.jsx)("div", {
                  className: "table-reps",
                  children:
                    0 ==
                    (null === j ||
                    void 0 === j ||
                    null === (g = j.RIRRange) ||
                    void 0 === g
                      ? void 0
                      : g.length)
                      ? 0
                      : null === j || void 0 === j
                      ? void 0
                      : j.RIRRange,
                }),
                x &&
                  (0, o.jsx)("div", {
                    className: "table-action",
                    children: (0, o.jsx)(d.JO, {
                      className: "close-rest-img",
                      icon: "ep:close-bold",
                      color: "white",
                      height: 12,
                    }),
                  }),
              ],
            }),
          ],
        });
      };
      var c = t(4542),
        u = t(8133),
        v = t(6085),
        g = t(968),
        h = t(8112);
      const m = (e) => {
        var s, t, i, n, r, m, x, p, j, N, R, f, b, S, w, k, y;
        let {
            exercise: C,
            setExercise: D,
            deleteExercise: I,
            autoPrefill: F = !0,
          } = e,
          W = ["-", "+", "e"];
        const [E, Z] = (0, l.useState)({
            name:
              null === C ||
              void 0 === C ||
              null === (s = C.exerciseInfoRef) ||
              void 0 === s
                ? void 0
                : s.name,
            gifUrl:
              null === C ||
              void 0 === C ||
              null === (t = C.exerciseInfoRef) ||
              void 0 === t
                ? void 0
                : t.gifUrl,
          }),
          [T, M] = (0, l.useState)(!1),
          [O, U] = (0, l.useState)(!1),
          [J, P] = (0, l.useState)(!1),
          [B, L] = (0, l.useState)([]),
          [A, z] = (0, l.useState)({
            suggestedWeightRange: (0, a.EP)(
              null === C ||
                void 0 === C ||
                null === (i = C.exerciseSets) ||
                void 0 === i
                ? void 0
                : i.map((e) => e.suggestedWeightRange)
            ),
            suggestedRepRange: (0, a.EP)(
              null === C ||
                void 0 === C ||
                null === (n = C.exerciseSets) ||
                void 0 === n
                ? void 0
                : n.map((e) => e.suggestedRepRange)
            ),
            suggestedRIRRange: (0, a.EP)(
              null === C ||
                void 0 === C ||
                null === (r = C.exerciseSets) ||
                void 0 === r
                ? void 0
                : r.map((e) => e.suggestedRIRRange)
            ),
          }),
          V = (e) => {
            Z({
              name: null === e || void 0 === e ? void 0 : e.name,
              gifUrl: null === e || void 0 === e ? void 0 : e.gifUrl,
            }),
              (C.exerciseInfoRef = e),
              F && _(e._id, C),
              L([]);
          },
          _ = async (e, s) => {
            const t = window.location.pathname.split("/")[2];
            try {
              U(!0);
              const l = await c.Z.get(
                "/workoutpnp/cycles/exerciseSet?clientId="
                  .concat(t, "&exerciseId=")
                  .concat(e)
              );
              (s.exerciseSets = l.data), D(s), Y(), U(!1);
            } catch (J) {
              P("Error 500");
            }
          },
          Y = () => {
            var e, s, t;
            const l = {
              suggestedWeightRange: (0, a.EP)(
                null === C ||
                  void 0 === C ||
                  null === (e = C.exerciseSets) ||
                  void 0 === e
                  ? void 0
                  : e.map((e) => e.suggestedWeightRange)
              ),
              suggestedRepRange: (0, a.EP)(
                null === C ||
                  void 0 === C ||
                  null === (s = C.exerciseSets) ||
                  void 0 === s
                  ? void 0
                  : s.map((e) => e.suggestedRepRange)
              ),
              suggestedRIRRange: (0, a.EP)(
                null === C ||
                  void 0 === C ||
                  null === (t = C.exerciseSets) ||
                  void 0 === t
                  ? void 0
                  : t.map((e) => e.suggestedRIRRange)
              ),
            };
            z(l);
          },
          K = (e) => {
            const s = e.target.value;
            Z(s),
              (async (e) => {
                M(!0);
                try {
                  var s;
                  const t = await c.Z.get(
                    "/workoutpnp/cycles/exercise?name=".concat(e)
                  );
                  L(
                    null === t ||
                      void 0 === t ||
                      null === (s = t.data) ||
                      void 0 === s
                      ? void 0
                      : s.exercises
                  ),
                    M(!1),
                    P(!1);
                } catch (J) {
                  P("Error 500");
                }
              })(s);
          },
          H = (e, s, t) => {
            let l = !1;
            "." == e[e.length - 1] && "suggestedWeightRange" === s && (l = !0);
            let i = A[s];
            (i[t] = isNaN(e) || "" === e ? null : parseFloat(e)),
              0 == t && null == i[t] && (i[1] = null);
            let n = { ...A },
              a = JSON.parse(JSON.stringify(C));
            a.exerciseSets.map((e) => {
              (e[s][t] =
                null == i[t] ? null : JSON.parse(JSON.stringify(i[t]))),
                0 == t && null == i[t] && (e[s][1] = null);
            }),
              D(a),
              l && null !== i[t] && (i[t] += "."),
              "." == e[(null === e || void 0 === e ? void 0 : e.length) - 2] &&
              "0" == e[(null === e || void 0 === e ? void 0 : e.length) - 1]
                ? (i[t] += ".0")
                : e.includes(".") &&
                  "0" ==
                    e[(null === e || void 0 === e ? void 0 : e.length) - 1] &&
                  (i[t] += "0"),
              (n[s] = i),
              z(n);
          },
          G = (e) => {
            var s, t;
            let l = A.suggestedWeightRange[e];
            const i = { ...A };
            "." ===
              (null === (s = l) || void 0 === s
                ? void 0
                : s[
                    (null === (t = l) || void 0 === t ? void 0 : t.length) - 1
                  ]) && (l = l.split(".")[0]),
              (i.suggestedWeightRange[e] = isNaN(parseFloat(l))
                ? null
                : parseFloat(l)),
              z(i);
          },
          q = (e, s) => {
            var t, l;
            const i = [...C.exerciseSets];
            let n = i[e].suggestedWeightRange[s];
            "." ===
              (null === (t = n) || void 0 === t
                ? void 0
                : t[
                    (null === (l = n) || void 0 === l ? void 0 : l.length) - 1
                  ]) && (n = n.split(".")[0]),
              (i[e].suggestedWeightRange[s] = isNaN(parseFloat(n))
                ? null
                : parseFloat(n)),
              D({ ...C, exerciseSets: i });
          },
          Q = (e, s, t, l) => {
            var i;
            const n = [...C.exerciseSets];
            let d = !1;
            if (
              ("." ===
                s[(null === s || void 0 === s ? void 0 : s.length) - 1] &&
                "suggestedWeightRange" === t &&
                (d = !0),
              isNaN(s))
            )
              return void (
                ("" == s || isNaN(s[0])) &&
                ((n[e][t][l] = null), D({ ...C, exerciseSets: n }))
              );
            if ("" === s || "." === s)
              (n[e][t][l] = null), 0 == l && (n[e][t][1] = null);
            else {
              let i = parseFloat(s);
              d && null !== n[e][t][l] && (i += "."),
                "." ==
                  s[(null === s || void 0 === s ? void 0 : s.length) - 2] &&
                "0" == s[(null === s || void 0 === s ? void 0 : s.length) - 1]
                  ? (i += ".0")
                  : s.includes(".") && "0" == s[s.length - 1] && (i += "0"),
                (n[e][t][l] = i);
            }
            var o;
            0 == l &&
              null != n[e][t][1] &&
              Number(n[e][t][1]) <= Number(s) &&
              (n[e][t][1] =
                null === (o = Number(s) + 1) || void 0 === o
                  ? void 0
                  : o.toString());
            D({ ...C, exerciseSets: n });
            let r = { ...A };
            (r[t] = (0, a.EP)(
              null === C ||
                void 0 === C ||
                null === (i = C.exerciseSets) ||
                void 0 === i
                ? void 0
                : i.map((e) => e[t])
            )),
              z(r);
          };
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsxs)("div", {
              className: "table-edit-exercise-mobile",
              children: [
                (0, o.jsx)("input", {
                  className: "exercise-input",
                  value: null === E || void 0 === E ? void 0 : E.name,
                  placeholder: "Exercise name",
                  onChange: K,
                }),
                T
                  ? (0, o.jsx)(u.Z, {})
                  : J
                  ? (0, o.jsx)(v.Z, {})
                  : null === B || void 0 === B
                  ? void 0
                  : B.map((e, s) =>
                      (0, o.jsx)(
                        "div",
                        {
                          className: "exercise-option",
                          onClick: () => V(e),
                          children:
                            null === e || void 0 === e ? void 0 : e.name,
                        },
                        s
                      )
                    ),
              ],
            }),
            (0, o.jsxs)("div", {
              className: "table-row-container table-editable-body",
              children: [
                (0, o.jsxs)("div", {
                  className: "table-exercise",
                  children: [
                    (0, o.jsxs)("div", {
                      className: "selected-option",
                      children: [
                        null == (null === E || void 0 === E ? void 0 : E.name)
                          ? null
                          : (0, o.jsx)("video", {
                              className: "exercise-video",
                              src:
                                null === E || void 0 === E ? void 0 : E.gifUrl,
                              autoPlay: !0,
                              loop: !0,
                            }),
                        (0, o.jsx)("input", {
                          className: "exercise-input",
                          value: null === E || void 0 === E ? void 0 : E.name,
                          placeholder: "Exercise name",
                          onChange: K,
                        }),
                      ],
                    }),
                    T
                      ? (0, o.jsx)(u.Z, {})
                      : J
                      ? (0, o.jsx)(v.Z, {})
                      : null === B || void 0 === B
                      ? void 0
                      : B.map((e, s) =>
                          (0, o.jsxs)(
                            "div",
                            {
                              className: "exercise-option",
                              onClick: () => V(e),
                              children: [
                                (0, o.jsx)("video", {
                                  className: "exercise-video",
                                  src:
                                    null === e || void 0 === e
                                      ? void 0
                                      : e.gifUrl,
                                  autoPlay: !0,
                                  loop: !0,
                                }),
                                null === e || void 0 === e ? void 0 : e.name,
                              ],
                            },
                            s
                          )
                        ),
                  ],
                }),
                O
                  ? (0, o.jsx)("div", {
                      className: "table-details",
                      style: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      },
                      children: (0, o.jsx)(u.Z, {}),
                    })
                  : (0, o.jsxs)("div", {
                      className: "table-details",
                      children: [
                        (0, o.jsxs)("div", {
                          className: "table-detail-row table-head",
                          children: [
                            (0, o.jsx)("div", {
                              className: "table-sets",
                              children:
                                null === C ||
                                void 0 === C ||
                                null === (m = C.exerciseSets) ||
                                void 0 === m
                                  ? void 0
                                  : m.length,
                            }),
                            (0, o.jsxs)("div", {
                              className:
                                "table-weights input-container ".concat(
                                  (null === A ||
                                  void 0 === A ||
                                  null === (x = A.suggestedWeightRange[0]) ||
                                  void 0 === x ||
                                  null === (p = x.toString()) ||
                                  void 0 === p
                                    ? void 0
                                    : p.includes(".")) && "table-weights-dec"
                                ),
                              children: [
                                (0, o.jsx)("input", {
                                  className:
                                    "table-weights table-weights-input header-input ".concat(
                                      (null === A ||
                                      void 0 === A ||
                                      null ===
                                        (j = A.suggestedWeightRange[0]) ||
                                      void 0 === j ||
                                      null === (N = j.toString()) ||
                                      void 0 === N
                                        ? void 0
                                        : N.includes(".")) &&
                                        "table-weights-input-dec"
                                    ),
                                  value:
                                    null ==
                                    (null === A || void 0 === A
                                      ? void 0
                                      : A.suggestedWeightRange[0])
                                      ? ""
                                      : null === A || void 0 === A
                                      ? void 0
                                      : A.suggestedWeightRange[0],
                                  onChange: (e) => {
                                    H(
                                      e.target.value,
                                      "suggestedWeightRange",
                                      0
                                    );
                                  },
                                  onBlur: () => {
                                    G(0);
                                  },
                                  type: "text",
                                  maxLength:
                                    null !== A &&
                                    void 0 !== A &&
                                    null !== (R = A.suggestedWeightRange[0]) &&
                                    void 0 !== R &&
                                    null !== (f = R.toString()) &&
                                    void 0 !== f &&
                                    f.includes(".")
                                      ? A.suggestedWeightRange[0]
                                          .toString()
                                          .split(".")[0].length + 3
                                      : 3,
                                  onKeyDown: (e) => {
                                    "." != e.key &&
                                      W.includes(e.key) &&
                                      e.preventDefault();
                                  },
                                }),
                                null ==
                                (null === A || void 0 === A
                                  ? void 0
                                  : A.suggestedWeightRange[0])
                                  ? (0, o.jsx)(o.Fragment, {})
                                  : (0, o.jsx)("input", {
                                      className:
                                        "table-weights table-weights-input header-input ".concat(
                                          (null === A ||
                                          void 0 === A ||
                                          null ===
                                            (b = A.suggestedWeightRange[1]) ||
                                          void 0 === b ||
                                          null === (S = b.toString()) ||
                                          void 0 === S
                                            ? void 0
                                            : S.includes(".")) &&
                                            "table-weights-input-dec"
                                        ),
                                      value:
                                        null ==
                                        (null === A || void 0 === A
                                          ? void 0
                                          : A.suggestedWeightRange[1])
                                          ? ""
                                          : null === A || void 0 === A
                                          ? void 0
                                          : A.suggestedWeightRange[1],
                                      onChange: (e) => {
                                        H(
                                          e.target.value,
                                          "suggestedWeightRange",
                                          1
                                        );
                                      },
                                      onBlur: () => {
                                        G(1);
                                      },
                                      type: "text",
                                      maxLength:
                                        null !== A &&
                                        void 0 !== A &&
                                        null !==
                                          (w = A.suggestedWeightRange[1]) &&
                                        void 0 !== w &&
                                        null !== (k = w.toString()) &&
                                        void 0 !== k &&
                                        k.includes(".")
                                          ? A.suggestedWeightRange[1]
                                              .toString()
                                              .split(".")[0].length + 3
                                          : 3,
                                      onKeyDown: (e) => {
                                        "." != e.key &&
                                          W.includes(e.key) &&
                                          e.preventDefault();
                                      },
                                    }),
                              ],
                            }),
                            (0, o.jsxs)("div", {
                              className: "table-reps input-container",
                              children: [
                                (0, o.jsx)("input", {
                                  className:
                                    "table-weights header-input table-weights-input",
                                  value:
                                    null ==
                                    (null === A || void 0 === A
                                      ? void 0
                                      : A.suggestedRepRange[0])
                                      ? ""
                                      : null === A || void 0 === A
                                      ? void 0
                                      : A.suggestedRepRange[0],
                                  onChange: (e) => {
                                    H(e.target.value, "suggestedRepRange", 0);
                                  },
                                  onKeyDown: (e) => {
                                    W.includes(e.key) && e.preventDefault();
                                  },
                                  onInput: (e) => {
                                    e.target.value = e.target.value.slice(0, 2);
                                  },
                                }),
                                null ==
                                (null === A || void 0 === A
                                  ? void 0
                                  : A.suggestedRepRange[0])
                                  ? (0, o.jsx)(o.Fragment, {})
                                  : (0, o.jsx)("input", {
                                      className:
                                        "table-weights header-input table-weights-input",
                                      value:
                                        null ==
                                        (null === A || void 0 === A
                                          ? void 0
                                          : A.suggestedRepRange[1])
                                          ? ""
                                          : null === A || void 0 === A
                                          ? void 0
                                          : A.suggestedRepRange[1],
                                      onChange: (e) => {
                                        H(
                                          e.target.value,
                                          "suggestedRepRange",
                                          1
                                        );
                                      },
                                      onKeyDown: (e) => {
                                        W.includes(e.key) && e.preventDefault();
                                      },
                                      onInput: (e) => {
                                        e.target.value = e.target.value.slice(
                                          0,
                                          2
                                        );
                                      },
                                    }),
                              ],
                            }),
                            (0, o.jsxs)("div", {
                              className: "table-reps input-container",
                              children: [
                                (0, o.jsx)("input", {
                                  className:
                                    "table-weights header-input table-weights-input",
                                  value:
                                    null ==
                                    (null === A || void 0 === A
                                      ? void 0
                                      : A.suggestedRIRRange[0])
                                      ? ""
                                      : null === A || void 0 === A
                                      ? void 0
                                      : A.suggestedRIRRange[0],
                                  onChange: (e) => {
                                    H(e.target.value, "suggestedRIRRange", 0);
                                  },
                                  onKeyDown: (e) => {
                                    W.includes(e.key) && e.preventDefault();
                                  },
                                  onInput: (e) => {
                                    e.target.value = e.target.value.slice(0, 2);
                                  },
                                }),
                                null ==
                                (null === A || void 0 === A
                                  ? void 0
                                  : A.suggestedRIRRange[0])
                                  ? (0, o.jsx)(o.Fragment, {})
                                  : (0, o.jsx)("input", {
                                      className:
                                        "table-weights header-input table-weights-input",
                                      value:
                                        null ==
                                        (null === A || void 0 === A
                                          ? void 0
                                          : A.suggestedRIRRange[1])
                                          ? ""
                                          : null === A || void 0 === A
                                          ? void 0
                                          : A.suggestedRIRRange[1],
                                      onChange: (e) => {
                                        H(
                                          e.target.value,
                                          "suggestedRIRRange",
                                          1
                                        );
                                      },
                                      onKeyDown: (e) => {
                                        W.includes(e.key) && e.preventDefault();
                                      },
                                      onInput: (e) => {
                                        e.target.value = e.target.value.slice(
                                          0,
                                          2
                                        );
                                      },
                                    }),
                              ],
                            }),
                            (0, o.jsx)("div", {
                              className: "table-action",
                              children: (0, o.jsx)(d.JO, {
                                icon: "ep:close-bold",
                                onClick: I,
                                className: "close-rest-img ms-1",
                                height: 13,
                              }),
                            }),
                          ],
                        }),
                        null === C ||
                        void 0 === C ||
                        null === (y = C.exerciseSets) ||
                        void 0 === y
                          ? void 0
                          : y.map((e, s) => {
                              var t, l, i, n, a, r, c, u, v, g;
                              return (0, o.jsxs)(
                                "div",
                                {
                                  className: "table-detail-row",
                                  children: [
                                    (0, o.jsx)("div", {
                                      className: "table-sets",
                                      children: s + 1,
                                    }),
                                    (0, o.jsxs)("div", {
                                      className:
                                        "table-weights input-container ".concat(
                                          (null === A ||
                                          void 0 === A ||
                                          null ===
                                            (t = A.suggestedWeightRange[0]) ||
                                          void 0 === t ||
                                          null === (l = t.toString()) ||
                                          void 0 === l
                                            ? void 0
                                            : l.includes(".")) &&
                                            "table-weights-dec"
                                        ),
                                      children: [
                                        (0, o.jsx)("input", {
                                          min: "0",
                                          className:
                                            "table-weights table-weights-input ".concat(
                                              (null === e ||
                                              void 0 === e ||
                                              null ===
                                                (i =
                                                  e.suggestedWeightRange[0]) ||
                                              void 0 === i ||
                                              null === (n = i.toString()) ||
                                              void 0 === n
                                                ? void 0
                                                : n.includes(".")) &&
                                                "table-weights-input-dec"
                                            ),
                                          value:
                                            null ==
                                            (null === e || void 0 === e
                                              ? void 0
                                              : e.suggestedWeightRange[0])
                                              ? ""
                                              : null === e || void 0 === e
                                              ? void 0
                                              : e.suggestedWeightRange[0],
                                          onChange: (e) => {
                                            var t;
                                            Q(
                                              s,
                                              null === e ||
                                                void 0 === e ||
                                                null === (t = e.target) ||
                                                void 0 === t
                                                ? void 0
                                                : t.value,
                                              "suggestedWeightRange",
                                              0
                                            );
                                          },
                                          onBlur: () => {
                                            q(s, 0);
                                          },
                                          type: "text",
                                          maxLength:
                                            null !== e &&
                                            void 0 !== e &&
                                            null !==
                                              (a = e.suggestedWeightRange[0]) &&
                                            void 0 !== a &&
                                            null !== (r = a.toString()) &&
                                            void 0 !== r &&
                                            r.includes(".")
                                              ? e.suggestedWeightRange[0]
                                                  .toString()
                                                  .split(".")[0].length + 3
                                              : 3,
                                          onKeyDown: (e) => {
                                            "." != e.key &&
                                              W.includes(e.key) &&
                                              e.preventDefault();
                                          },
                                        }),
                                        null != e.suggestedWeightRange[0]
                                          ? (0, o.jsx)("input", {
                                              type: "text",
                                              maxLength:
                                                null !== e &&
                                                void 0 !== e &&
                                                null !==
                                                  (c =
                                                    e
                                                      .suggestedWeightRange[1]) &&
                                                void 0 !== c &&
                                                null !== (u = c.toString()) &&
                                                void 0 !== u &&
                                                u.includes(".")
                                                  ? e.suggestedWeightRange[1]
                                                      .toString()
                                                      .split(".")[0].length + 3
                                                  : 3,
                                              min:
                                                Number(
                                                  e.suggestedWeightRange[0]
                                                ) + 1,
                                              className:
                                                "table-weights table-weights-input ".concat(
                                                  (null === A ||
                                                  void 0 === A ||
                                                  null ===
                                                    (v =
                                                      A
                                                        .suggestedWeightRange[1]) ||
                                                  void 0 === v ||
                                                  null === (g = v.toString()) ||
                                                  void 0 === g
                                                    ? void 0
                                                    : g.includes(".")) &&
                                                    "table-weights-input-dec"
                                                ),
                                              value:
                                                null ==
                                                (null === e || void 0 === e
                                                  ? void 0
                                                  : e.suggestedWeightRange[1])
                                                  ? ""
                                                  : null === e || void 0 === e
                                                  ? void 0
                                                  : e.suggestedWeightRange[1],
                                              onChange: (e) => {
                                                var t;
                                                return Q(
                                                  s,
                                                  null === e ||
                                                    void 0 === e ||
                                                    null === (t = e.target) ||
                                                    void 0 === t
                                                    ? void 0
                                                    : t.value,
                                                  "suggestedWeightRange",
                                                  1
                                                );
                                              },
                                              onBlur: () => {
                                                q(s, 1);
                                              },
                                              onKeyDown: (e) => {
                                                "." != e.key &&
                                                  W.includes(e.key) &&
                                                  e.preventDefault();
                                              },
                                            })
                                          : null,
                                      ],
                                    }),
                                    (0, o.jsxs)("div", {
                                      className: "input-container",
                                      children: [
                                        (0, o.jsx)("input", {
                                          type: "number",
                                          min: 0,
                                          className:
                                            "table-reps table-reps-input",
                                          value:
                                            null ==
                                            (null === e || void 0 === e
                                              ? void 0
                                              : e.suggestedRepRange[0])
                                              ? ""
                                              : null === e || void 0 === e
                                              ? void 0
                                              : e.suggestedRepRange[0],
                                          onChange: (e) => {
                                            var t;
                                            return Q(
                                              s,
                                              null === e ||
                                                void 0 === e ||
                                                null === (t = e.target) ||
                                                void 0 === t
                                                ? void 0
                                                : t.value,
                                              "suggestedRepRange",
                                              0
                                            );
                                          },
                                          onKeyDown: (e) => {
                                            W.includes(e.key) &&
                                              e.preventDefault();
                                          },
                                          onInput: (e) => {
                                            e.target.value =
                                              e.target.value.slice(0, 2);
                                          },
                                        }),
                                        null != e.suggestedRepRange[0]
                                          ? (0, o.jsx)("input", {
                                              type: "number",
                                              min: 0,
                                              className:
                                                "table-reps table-reps-input",
                                              value:
                                                null ==
                                                (null === e || void 0 === e
                                                  ? void 0
                                                  : e.suggestedRepRange[1])
                                                  ? ""
                                                  : null === e || void 0 === e
                                                  ? void 0
                                                  : e.suggestedRepRange[1],
                                              onChange: (e) => {
                                                var t;
                                                return Q(
                                                  s,
                                                  null === e ||
                                                    void 0 === e ||
                                                    null === (t = e.target) ||
                                                    void 0 === t
                                                    ? void 0
                                                    : t.value,
                                                  "suggestedRepRange",
                                                  1
                                                );
                                              },
                                              onKeyDown: (e) => {
                                                W.includes(e.key) &&
                                                  e.preventDefault();
                                              },
                                              onInput: (e) => {
                                                e.target.value =
                                                  e.target.value.slice(0, 2);
                                              },
                                            })
                                          : null,
                                      ],
                                    }),
                                    (0, o.jsxs)("div", {
                                      className: "input-container",
                                      children: [
                                        (0, o.jsx)("input", {
                                          type: "number",
                                          min: 0,
                                          className:
                                            "table-reps table-reps-input",
                                          value:
                                            null ==
                                            (null === e || void 0 === e
                                              ? void 0
                                              : e.suggestedRIRRange[0])
                                              ? ""
                                              : null === e || void 0 === e
                                              ? void 0
                                              : e.suggestedRIRRange[0],
                                          onChange: (e) => {
                                            var t;
                                            return Q(
                                              s,
                                              null === e ||
                                                void 0 === e ||
                                                null === (t = e.target) ||
                                                void 0 === t
                                                ? void 0
                                                : t.value,
                                              "suggestedRIRRange",
                                              0
                                            );
                                          },
                                          onKeyDown: (e) => {
                                            W.includes(e.key) &&
                                              e.preventDefault();
                                          },
                                          onInput: (e) => {
                                            e.target.value =
                                              e.target.value.slice(0, 2);
                                          },
                                        }),
                                        null != e.suggestedRIRRange[0]
                                          ? (0, o.jsx)("input", {
                                              type: "number",
                                              min: 0,
                                              className:
                                                "table-reps table-reps-input",
                                              value:
                                                null ==
                                                (null === e || void 0 === e
                                                  ? void 0
                                                  : e.suggestedRIRRange[1])
                                                  ? ""
                                                  : null === e || void 0 === e
                                                  ? void 0
                                                  : e.suggestedRIRRange[1],
                                              onChange: (e) => {
                                                var t;
                                                return Q(
                                                  s,
                                                  null === e ||
                                                    void 0 === e ||
                                                    null === (t = e.target) ||
                                                    void 0 === t
                                                    ? void 0
                                                    : t.value,
                                                  "suggestedRIRRange",
                                                  1
                                                );
                                              },
                                              onKeyDown: (e) => {
                                                W.includes(e.key) &&
                                                  e.preventDefault();
                                              },
                                              onInput: (e) => {
                                                e.target.value =
                                                  e.target.value.slice(0, 2);
                                              },
                                            })
                                          : null,
                                      ],
                                    }),
                                    (0, o.jsx)("div", {
                                      className: "table-action",
                                      children: (0, o.jsx)(d.JO, {
                                        icon: "ep:close-bold",
                                        className: "close-rest-img ms-1",
                                        onClick: () =>
                                          ((e) => {
                                            var s =
                                              null === C || void 0 === C
                                                ? void 0
                                                : C.exerciseSets;
                                            s.splice(e, 1),
                                              (s = ((e) =>
                                                e.map((e, s) => ({
                                                  ...e,
                                                  number: s + 1,
                                                })))(s)),
                                              D({ ...C, exerciseSets: s });
                                          })(s),
                                        height: 13,
                                      }),
                                    }),
                                  ],
                                },
                                s
                              );
                            }),
                        (0, o.jsx)(g.Z, {
                          classNames: "add-session-btn",
                          onClick: () =>
                            (() => {
                              var e, s, t, l, i, n, a, d, o;
                              0 !=
                              (null === C ||
                              void 0 === C ||
                              null === (e = C.exerciseSets) ||
                              void 0 === e
                                ? void 0
                                : e.length)
                                ? null === C ||
                                  void 0 === C ||
                                  C.exerciseSets.push({
                                    number:
                                      (null === C ||
                                      void 0 === C ||
                                      null === (s = C.exerciseSets) ||
                                      void 0 === s
                                        ? void 0
                                        : s.length) + 1,
                                    suggestedWeightRange: JSON.parse(
                                      JSON.stringify(
                                        null === C ||
                                          void 0 === C ||
                                          null ===
                                            (t =
                                              C.exerciseSets[
                                                (null === C ||
                                                void 0 === C ||
                                                null === (l = C.exerciseSets) ||
                                                void 0 === l
                                                  ? void 0
                                                  : l.length) - 1
                                              ]) ||
                                          void 0 === t
                                          ? void 0
                                          : t.suggestedWeightRange
                                      )
                                    ),
                                    suggestedRepRange: JSON.parse(
                                      JSON.stringify(
                                        null === C ||
                                          void 0 === C ||
                                          null ===
                                            (i =
                                              C.exerciseSets[
                                                (null === C ||
                                                void 0 === C ||
                                                null === (n = C.exerciseSets) ||
                                                void 0 === n
                                                  ? void 0
                                                  : n.length) - 1
                                              ]) ||
                                          void 0 === i
                                          ? void 0
                                          : i.suggestedRepRange
                                      )
                                    ),
                                    suggestedRIRRange: JSON.parse(
                                      JSON.stringify(
                                        null === C ||
                                          void 0 === C ||
                                          null ===
                                            (a =
                                              C.exerciseSets[
                                                (null === C ||
                                                void 0 === C ||
                                                null === (d = C.exerciseSets) ||
                                                void 0 === d
                                                  ? void 0
                                                  : d.length) - 1
                                              ]) ||
                                          void 0 === a
                                          ? void 0
                                          : a.suggestedRIRRange
                                      )
                                    ),
                                  })
                                : null === C ||
                                  void 0 === C ||
                                  C.exerciseSets.push({
                                    number:
                                      (null === C ||
                                      void 0 === C ||
                                      null === (o = C.exerciseSets) ||
                                      void 0 === o
                                        ? void 0
                                        : o.length) + 1,
                                    suggestedWeightRange: [],
                                    suggestedRepRange: [10, 15],
                                    suggestedRIRRange: [1, 3],
                                  }),
                                D(C);
                            })(),
                          text: "+ Add Set",
                          size: "s",
                        }),
                      ],
                    }),
                (0, o.jsxs)("div", {
                  className: "comment-container",
                  children: [
                    (0, o.jsx)("div", {
                      children: (0, o.jsx)(d.JO, {
                        icon: "fa-regular:sticky-note",
                        height: 25,
                        color: "white",
                      }),
                    }),
                    (0, o.jsx)(h.Z, {
                      divClassNames: "comment-textarea-container",
                      inputClassNames: "comment-textarea",
                      onChange: (e) =>
                        ((e) => {
                          const s = e.trim();
                          s.length
                            ? D({ ...C, exerciseComment: s })
                            : C.exerciseComment &&
                              D({ ...C, exerciseComment: void 0 });
                        })(e.target.value),
                      rows: "1",
                      cols: "500",
                      placeholder: "Write your comment here",
                      initialValue:
                        (null === C || void 0 === C
                          ? void 0
                          : C.exerciseComment) || "",
                      maxLength: 200,
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      var x = t(125);
      const p = (e) => {
        let {
          exercises: s,
          completed: t,
          setExercises: i,
          isEditing: n,
          isError: a = !1,
          errorMessage: d = "please select exercise",
          modal: c = !1,
          autoPrefill: u = !0,
        } = e;
        const [v, h] = (0, l.useState)(-1);
        (0, l.useEffect)(() => {
          n || h(-1);
        }, [n]);
        function p(e, s) {
          if (!s.isDropAnimating) return e;
          const { moveTo: t, curve: l, duration: i } = s.dropAnimation,
            n = "translate(".concat(t.x, "px, ").concat(t.y, "px)");
          return { ...e, transform: "".concat(n, " ") };
        }
        return (0, o.jsxs)("div", {
          className: "table-container",
          children: [
            (0, o.jsx)("div", {
              className: "table-heading",
              children: (0, o.jsxs)("div", {
                className: "table-row-container",
                children: [
                  (0, o.jsx)("div", {
                    className: "table-exercise",
                    children: "Exercise",
                  }),
                  (0, o.jsx)("div", {
                    className: "table-sets",
                    children: "Sets",
                  }),
                  (0, o.jsx)("div", {
                    className: "table-weights",
                    children: "Weight",
                  }),
                  (0, o.jsx)("div", {
                    className: "table-reps",
                    children: "Reps",
                  }),
                  (0, o.jsx)("div", {
                    className: "table-reps",
                    children: "RIR",
                  }),
                  n && (0, o.jsx)("div", { className: "table-action" }),
                ],
              }),
            }),
            (0, o.jsxs)("div", {
              className: "table-body-container",
              children: [
                (0, o.jsx)("div", {
                  children: (0, o.jsx)(x.Z5, {
                    onDragEnd: function (e) {
                      if (!e.destination) return;
                      if (e.destination.index === e.source.index) return;
                      const t = ((e, s, t) => {
                        const l = Array.from(e),
                          [i] = l.splice(s, 1);
                        return l.splice(t, 0, i), l;
                      })(s, e.source.index, e.destination.index);
                      -1 != v && h(-1), i(t);
                    },
                    children: (0, o.jsx)(x.bK, {
                      droppableId: "list",
                      isDropDisabled: !n,
                      children: (e) =>
                        (0, o.jsxs)("div", {
                          ref: e.innerRef,
                          ...e.droppableProps,
                          children: [
                            null === s || void 0 === s
                              ? void 0
                              : s.map((e, l) => {
                                  var g;
                                  return (0, o.jsx)(
                                    x._l,
                                    {
                                      isDragDisabled: !n,
                                      draggableId:
                                        null === e ||
                                        void 0 === e ||
                                        null === (g = e._id) ||
                                        void 0 === g
                                          ? void 0
                                          : g.toString(),
                                      index: l,
                                      children: (g, x) => (
                                        x.isDragging &&
                                          !c &&
                                          ((g.draggableProps.style.left =
                                            g.draggableProps.style.offsetLeft),
                                          (g.draggableProps.style.top =
                                            g.draggableProps.style.offsetTop)),
                                        (0, o.jsxs)("div", {
                                          ref: g.innerRef,
                                          ...g.draggableProps,
                                          ...g.dragHandleProps,
                                          style: p(g.draggableProps.style, x),
                                          children: [
                                            v === l
                                              ? (0, o.jsx)(m, {
                                                  exercise: e,
                                                  setExercise: (e) => {
                                                    ((e, t) => {
                                                      const l = [...s];
                                                      (l[t] = {
                                                        ...l[t],
                                                        exerciseInfoRef:
                                                          null === e ||
                                                          void 0 === e
                                                            ? void 0
                                                            : e.exerciseInfoRef,
                                                        exerciseSets:
                                                          null === e ||
                                                          void 0 === e
                                                            ? void 0
                                                            : e.exerciseSets,
                                                        exerciseComment:
                                                          null === e ||
                                                          void 0 === e
                                                            ? void 0
                                                            : e.exerciseComment,
                                                      }),
                                                        i(l);
                                                    })(e, l);
                                                  },
                                                  deleteExercise: () =>
                                                    ((e) => {
                                                      const t = [...s];
                                                      t.splice(e, 1),
                                                        i(t),
                                                        h(-1);
                                                    })(l),
                                                  autoPrefill: u,
                                                })
                                              : (0, o.jsx)(r, {
                                                  exercise: e,
                                                  completed: t,
                                                  isEditing: n,
                                                  editExercise: () => h(l),
                                                }),
                                            a &&
                                            (null === d || void 0 === d
                                              ? void 0
                                              : d.index) == l
                                              ? (0, o.jsx)("small", {
                                                  className: "message error",
                                                  children:
                                                    null === d || void 0 === d
                                                      ? void 0
                                                      : d.message,
                                                })
                                              : (0, o.jsx)(o.Fragment, {}),
                                          ],
                                        })
                                      ),
                                    },
                                    null === e || void 0 === e ? void 0 : e._id
                                  );
                                }),
                            e.placeholder,
                          ],
                        }),
                    }),
                  }),
                }),
                n &&
                  (0, o.jsx)(g.Z, {
                    classNames: "add-exercise-btn",
                    onClick: () =>
                      (() => {
                        const e = [
                          ...s,
                          {
                            _id: Math.random(),
                            exerciseInfoRef: "-",
                            exerciseSets: [
                              {
                                number: 1,
                                suggestedWeightRange: [],
                                suggestedRepRange: [10, 15],
                                suggestedRIRRange: [1, 3],
                              },
                              {
                                number: 2,
                                suggestedWeightRange: [],
                                suggestedRepRange: [10, 15],
                                suggestedRIRRange: [1, 3],
                              },
                              {
                                number: 3,
                                suggestedWeightRange: [],
                                suggestedRepRange: [10, 15],
                                suggestedRIRRange: [1, 3],
                              },
                            ],
                          },
                        ];
                        i(e);
                      })(),
                    text: "+ Add Exercise",
                    size: "s",
                  }),
              ],
            }),
          ],
        });
      };
    },
    1475: (e, s, t) => {
      t.d(s, { Z: () => n });
      t(2791);
      const l = {
        lightGray: "#E9E9E9",
        redAlpha: "#FBCDCD",
        themeLightBlue: "#DDEAFD",
        programLightBlue: "#B8E8FF",
        themePeach: "#FFDBD0",
        programLightViolet: "#EDD0FF",
        themeLightGreen: "#C9FFEE",
      };
      var i = t(184);
      const n = (e) => {
        let {
          sessionTheme: s,
          isSelected: t = !1,
          idx: n = 0,
          setSelectedCard: a = () => {},
        } = e;
        return (0, i.jsxs)("div", {
          className: "session-theme-div  "
            .concat(null === s || void 0 === s ? void 0 : s.layout, "-div ")
            .concat(t ? "session-theme-selected" : ""),
          style: {
            backgroundColor:
              l["".concat(null === s || void 0 === s ? void 0 : s.color)],
          },
          onClick: () => {
            a(n);
          },
          children: [
            (0, i.jsxs)("div", {
              className: "left ".concat(
                null === s || void 0 === s ? void 0 : s.layout
              ),
              children: [
                (0, i.jsxs)("div", {
                  children: [
                    (0, i.jsx)("div", { className: "dummy-data-0" }),
                    (0, i.jsx)("div", { className: "dummy-data-1" }),
                  ],
                }),
                (0, i.jsx)("div", { className: "dummy-data-2" }),
              ],
            }),
            (0, i.jsx)("div", {
              className: "right ".concat(
                null === s || void 0 === s ? void 0 : s.layout
              ),
              children: (0, i.jsx)("img", {
                className: "right-image",
                src: null === s || void 0 === s ? void 0 : s.imageUrl,
                alt: "",
              }),
            }),
          ],
        });
      };
    },
    6357: (e, s, t) => {
      t.d(s, { Z: () => a });
      t(2791);
      var l = t(4183),
        i = t(1475),
        n = t(184);
      const a = (e) => {
        let {
          sessionThemes: s,
          slidesToShow: t = 3,
          breakpoints: a = [600, 480],
          selectedCard: d,
          setSelectedCard: o,
        } = e;
        return (0, n.jsx)("div", {
          className: "carousel-div",
          children: (0, n.jsx)(l.Z, {
            slidesToShow: t,
            breakpoints: a,
            children:
              null === s || void 0 === s
                ? void 0
                : s.map((e, s) =>
                    (0, n.jsx)(
                      "div",
                      {
                        children: (0, n.jsx)(i.Z, {
                          sessionTheme: e,
                          isSelected:
                            d == (null === e || void 0 === e ? void 0 : e._id),
                          idx: null === e || void 0 === e ? void 0 : e._id,
                          setSelectedCard: o,
                        }),
                      },
                      s
                    )
                  ),
          }),
        });
      };
    },
    1112: (e, s, t) => {
      t.d(s, { Z: () => T });
      var l = t(2791),
        i = t(8133),
        n = t(6085),
        a = t(4183),
        d = t(8340),
        o = t(1150),
        r = t(9391),
        c = t(2711),
        u = t(184);
      const v = (e) => {
        var s, t, l;
        let {
          completedPercentage: i,
          routineName: n,
          performDate: a,
          userFeedback: v,
          activeTime: g,
          totalTime: h,
        } = e;
        const m =
            null === (s = 100 * i) || void 0 === s ? void 0 : s.toFixed(0),
          x = a ? new Date(a).toISOString().split("T") : null;
        let p = "";
        const j = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "July",
          "Aug",
          "Sept",
          "Oct",
          "Nov",
          "Dec",
        ];
        if (x) {
          const e = x[0].split("-");
          p =
            e[2] +
            " " +
            j[parseInt(e[1]) - 1] +
            " " +
            e[0].substring(2, 4) +
            " " +
            x[1].substring(0, 5);
        }
        const N = Math.random();
        return (0, u.jsxs)("div", {
          className: "completed-header",
          children: [
            (0, u.jsxs)("div", {
              className: "routine-data",
              children: [
                (0, u.jsx)("div", { className: "routine", children: n }),
                (0, u.jsx)("div", { className: "scheduled-date", children: p }),
              ],
            }),
            (0, u.jsxs)("div", {
              className: "progress-feedback",
              children: [
                (0, u.jsx)("div", {
                  className: "userFeedback",
                  children:
                    (null === v || void 0 === v ? void 0 : v.comment) &&
                    (0, u.jsxs)("div", {
                      "data-for": "getContent-".concat(N + 2),
                      "data-tip": !0,
                      children: [
                        (0, u.jsx)(c.JO, {
                          icon: "gridicons:comment",
                          height: 24,
                          style: { marginTop: "10px" },
                          className: "analysis-icon",
                        }),
                        (0, u.jsx)(o.Z, {
                          className: "tooltip-container-comment",
                          id: "getContent-".concat(N + 2),
                          place: "right",
                          effect: "solid",
                          multiline: !0,
                          getContent: () =>
                            ((e) => {
                              let { display: s } = e;
                              return (0, d.renderToString)(
                                (0, u.jsx)("div", { children: s || null })
                              );
                            })({
                              display:
                                null === v || void 0 === v ? void 0 : v.comment,
                            }),
                          html: !0,
                        }),
                      ],
                    }),
                }),
                (0, u.jsx)("div", {
                  className: "feedback",
                  children: (0, u.jsxs)("div", {
                    className: "analysis",
                    children: [
                      (0, u.jsxs)("div", {
                        className: "workout-time",
                        children: [
                          (0, u.jsx)(c.JO, {
                            icon: "bx:timer",
                            height: 24,
                            style: { marginBottom: "2px" },
                            className: "analysis-icon",
                          }),
                          g,
                          " ",
                          "-" != g ? "m" : "",
                        ],
                      }),
                      (0, u.jsxs)("div", {
                        className: "workout-time",
                        children: [
                          (0, u.jsx)(c.JO, {
                            icon: "ic:outline-timer",
                            height: 20,
                            style: { marginBottom: "2px" },
                            className: "analysis-icon",
                          }),
                          h,
                          " ",
                          "-" != h ? "m" : "",
                        ],
                      }),
                      v &&
                        (0, u.jsxs)("div", {
                          className: "feedback-text",
                          children: [
                            (0, u.jsx)("img", {
                              src: "https://storage.googleapis.com/evolv-mobile/feedback/duration/".concat(
                                null === v ||
                                  void 0 === v ||
                                  null === (t = v.duration) ||
                                  void 0 === t
                                  ? void 0
                                  : t.toLowerCase(),
                                "_w.png"
                              ),
                              height: 18,
                              className: "analysis-icon",
                            }),
                            null === v || void 0 === v ? void 0 : v.duration,
                          ],
                        }),
                      v &&
                        (0, u.jsxs)("div", {
                          className: "feedback-text",
                          children: [
                            (0, u.jsx)("img", {
                              src: "https://storage.googleapis.com/evolv-mobile/feedback/difficulty/".concat(
                                null === v ||
                                  void 0 === v ||
                                  null === (l = v.difficulty) ||
                                  void 0 === l
                                  ? void 0
                                  : l.toLowerCase(),
                                "_w.png"
                              ),
                              height: 18,
                              className: "analysis-icon",
                            }),
                            null === v || void 0 === v ? void 0 : v.difficulty,
                          ],
                        }),
                    ],
                  }),
                }),
                (0, u.jsx)(r.Ip, {
                  className: "circular-progress-bar",
                  value: m,
                  text: "".concat(m, "%"),
                  backgroundPadding: 2,
                  styles: (0, r.y3)({
                    textColor: "#FFFFFF",
                    pathColor: "#7FD18C",
                    trailColor: "#FFFFFF",
                    textSize: "25px",
                  }),
                }),
              ],
            }),
          ],
        });
      };
      var g = t(4542),
        h = t(9041),
        m = t(7250),
        x = t(6357),
        p = t(1475);
      const j = (e) => {
        let {
          routineName: s,
          startDate: t,
          setStartDate: n,
          isEditing: a,
          setIsEditing: d,
          saveCard: o,
          idx: r,
          isError: v = !1,
          errorMessage: g = "Error saving card",
          isSuccess: h = !1,
          loading: j,
          removeSession: N,
          sessionThemes: R,
          setSessionName: f,
          excludedDates: b,
          selectedSessionTheme: S,
          showAddButton: w = !0,
          setAddErrorMessage: k = () => {},
          workoutTime: y,
          minDate: C,
        } = e;
        const [D, I] = (0, l.useState)(S);
        (0, l.forwardRef)((e, s) => {
          let { value: t, onClick: l } = e;
          return (0, u.jsx)("img", {
            className: "customInput",
            onClick: l,
            ref: s,
            src: "/images/dateedit.svg",
            alt: "",
            height: "14",
          });
        }).displayName = "CustomInput";
        const F = new Date(t);
        F.setDate(F.getDate() + 60);
        let W = "";
        if (t) {
          let e = [{ day: "numeric" }, { month: "short" }, { year: "numeric" }];
          W = ((e, s, t) =>
            s.map((s) => new Intl.DateTimeFormat("en", s).format(e)).join(t))(
            new Date(t),
            e,
            " "
          );
        }
        return (0, u.jsxs)("div", {
          children: [
            (0, u.jsxs)("div", {
              className: "remaining-header",
              children: [
                (0, u.jsx)("div", {
                  className: "routine-date",
                  children: (0, u.jsxs)("div", {
                    style: {
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    },
                    children: [
                      (0, u.jsx)("div", {
                        children: a
                          ? (0, u.jsx)(u.Fragment, {})
                          : (0, u.jsx)(p.Z, {
                              sessionTheme:
                                null === R || void 0 === R
                                  ? void 0
                                  : R.filter(
                                      (e) =>
                                        (null === e || void 0 === e
                                          ? void 0
                                          : e._id) == D
                                    )[0],
                            }),
                      }),
                      (0, u.jsxs)("div", {
                        className: "routine-header",
                        children: [
                          a
                            ? (0, u.jsx)("input", {
                                type: "text",
                                value: s,
                                onChange: (e) => {
                                  f(e.target.value);
                                },
                                className: "routine-editing",
                              })
                            : (0, u.jsx)("div", {
                                className: "routine",
                                children: s,
                              }),
                          (0, u.jsxs)("div", {
                            className: "datePickerWrapper-remaining",
                            children: [
                              (0, u.jsxs)("span", {
                                className: "time generalText",
                                children: [
                                  (0, u.jsx)(c.JO, {
                                    icon: "ic:outline-date-range",
                                    height: 20,
                                    width: 20,
                                  }),
                                  W,
                                ],
                              }),
                              a
                                ? (0, u.jsx)(m.Z, {
                                    initialValue: t,
                                    setValue: (e) => n(e),
                                    showDate: !1,
                                    startYear: t.getFullYear(),
                                    endYear:
                                      (null === t || void 0 === t
                                        ? void 0
                                        : t.getFullYear()) + 1,
                                    minDate: C,
                                    maxDate: F,
                                    excludeDates:
                                      null === b || void 0 === b
                                        ? void 0
                                        : b.filter((e, s) => s != r),
                                  })
                                : (0, u.jsx)(u.Fragment, {}),
                            ],
                          }),
                          (0, u.jsxs)("div", {
                            className: "time",
                            children: [
                              (0, u.jsx)(c.JO, {
                                icon: "bi:clock-fill",
                                height: 20,
                                width: 20,
                              }),
                              (0, u.jsxs)("span", { children: [y, " mins"] }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                j
                  ? (0, u.jsx)(i.Z, {})
                  : (0, u.jsxs)("div", {
                      className: "edit-close",
                      children: [
                        a
                          ? (0, u.jsx)(c.JO, {
                              icon: "bx:save",
                              height: 22,
                              width: 22,
                              className: "edit-icon",
                              onClick: () => {
                                o(t, D);
                              },
                            })
                          : (0, u.jsx)(c.JO, {
                              icon: "clarity:note-edit-line",
                              height: 22,
                              width: 22,
                              className: "edit-icon",
                              onClick: () => {
                                w ? d(!0) : k(!0);
                              },
                            }),
                        (0, u.jsx)(c.JO, {
                          icon: "ep:close-bold",
                          height: 22,
                          width: 22,
                          className: "close-exercise",
                          onClick: () => {
                            N();
                          },
                        }),
                      ],
                    }),
              ],
            }),
            v
              ? (0, u.jsx)("small", {
                  className: "form-text text-danger",
                  children: g,
                })
              : h
              ? (0, u.jsx)("small", {
                  className: "message success",
                  children: "Session saved successfully",
                })
              : (0, u.jsx)(u.Fragment, {}),
            a
              ? (0, u.jsx)(x.Z, {
                  selectedSessionTheme: S,
                  sessionThemes: R,
                  selectedCard: D,
                  setSelectedCard: I,
                  breakpoints: [480, 330],
                })
              : (0, u.jsx)(u.Fragment, {}),
          ],
        });
      };
      var N = t(968),
        R = t(2284),
        f = t(2592),
        b = t(3900),
        S = (t(5262), t(6710)),
        w = t.n(S),
        k = (t(8914), t(1170));
      const y = new (t.n(k)())({ bitRate: 128 }),
        C = () => {
          const [e, s] = (0, l.useState)(""),
            [t, i] = (0, l.useState)(null),
            [n, a] = (0, l.useState)(!1);
          return [
            e,
            n,
            () => {
              y.start(), a(!0);
            },
            () => {
              y
                .stop()
                .getMp3()
                .then((e) => {
                  let [t, l] = e;
                  new File(t, "me-at-thevoice.mp3", {
                    type: l.type,
                    lastModified: Date.now(),
                  });
                  i(l);
                  const n = URL.createObjectURL(l);
                  s(n), console.log(l), console.log(n);
                })
                .catch((e) => {
                  alert("We could not retrieve your message"), console.log(e);
                }),
                a(!1);
            },
            t,
          ];
        },
        D = (e) => {
          var s, t, i;
          let {
            exercise: n,
            setExercise: a,
            modifier: d = (e) => e,
            setDisableSave: o,
          } = e;
          const [r, c] = (0, l.useState)(
              null !==
                (s = null === n || void 0 === n ? void 0 : n.formRating) &&
                void 0 !== s
                ? s
                : 0
            ),
            [v, g] = (0, l.useState)(
              null === n || void 0 === n ? void 0 : n.feedbackComment
            );
          let [h, m, x, p, j] = C();
          const N = (e) => (e && -1 !== e ? e : "-");
          return (
            (0, l.useEffect)(() => {
              o(m);
            }, [m]),
            j && d({ audioFile: j, audioUrl: h }),
            (0, u.jsx)("div", {
              className: "feedback-card-container",
              children: (0, u.jsxs)("div", {
                className: "content",
                children: [
                  (0, u.jsx)("div", {
                    className: "routine pb-4",
                    children:
                      null === n ||
                      void 0 === n ||
                      null === (t = n.exerciseInfoRef) ||
                      void 0 === t
                        ? void 0
                        : t.name,
                  }),
                  (0, u.jsxs)("div", {
                    children: [
                      (0, u.jsxs)("div", {
                        className: "heading",
                        children: [
                          (0, u.jsx)("div", {
                            className: "set",
                            children: "Sets",
                          }),
                          (0, u.jsx)("div", {
                            className: "weight",
                            children: "Weight",
                          }),
                          (0, u.jsx)("div", {
                            className: "rep",
                            children: "Reps",
                          }),
                          (0, u.jsx)("div", {
                            className: "rir",
                            children: "RIR",
                          }),
                        ],
                      }),
                      (0, u.jsx)("div", {
                        className: "body",
                        children:
                          null === n ||
                          void 0 === n ||
                          null === (i = n.exerciseSets) ||
                          void 0 === i
                            ? void 0
                            : i.map((e, s) => {
                                var t, l, i;
                                return (0, u.jsxs)(
                                  "div",
                                  {
                                    className: "set-row",
                                    children: [
                                      (0, u.jsx)("div", {
                                        className: "set m-1",
                                        children: N(s + 1),
                                      }),
                                      (0, u.jsxs)("div", {
                                        className: "weight",
                                        children: [
                                          (0, u.jsx)("div", {
                                            className: "left",
                                            children: N(
                                              null === e ||
                                                void 0 === e ||
                                                null ===
                                                  (t =
                                                    e.suggestedWeightRange) ||
                                                void 0 === t
                                                ? void 0
                                                : t.join("-")
                                            ),
                                          }),
                                          (0, u.jsx)("div", {
                                            className: "right",
                                            children: N(
                                              null === e || void 0 === e
                                                ? void 0
                                                : e.performedWeight
                                            ),
                                          }),
                                        ],
                                      }),
                                      (0, u.jsxs)("div", {
                                        className: "rep",
                                        children: [
                                          (0, u.jsx)("div", {
                                            className: "left",
                                            children: N(
                                              null === e ||
                                                void 0 === e ||
                                                null ===
                                                  (l = e.suggestedRepRange) ||
                                                void 0 === l
                                                ? void 0
                                                : l.join("-")
                                            ),
                                          }),
                                          (0, u.jsx)("div", {
                                            className: "right",
                                            children: N(
                                              null === e || void 0 === e
                                                ? void 0
                                                : e.performedReps
                                            ),
                                          }),
                                        ],
                                      }),
                                      (0, u.jsxs)("div", {
                                        className: "rep",
                                        children: [
                                          (0, u.jsx)("div", {
                                            className: "left",
                                            children: N(
                                              null === e ||
                                                void 0 === e ||
                                                null ===
                                                  (i = e.suggestedRIRRange) ||
                                                void 0 === i
                                                ? void 0
                                                : i.join("-")
                                            ),
                                          }),
                                          (0, u.jsx)("div", {
                                            className: "right",
                                            children: N(
                                              null === e || void 0 === e
                                                ? void 0
                                                : e.performedRIR
                                            ),
                                          }),
                                        ],
                                      }),
                                    ],
                                  },
                                  s
                                );
                              }),
                      }),
                    ],
                  }),
                  null !== n && void 0 !== n && n.videoUrl
                    ? (0, u.jsxs)(u.Fragment, {
                        children: [
                          " ",
                          (0, u.jsx)("div", {
                            className: "d-flex video-container",
                            children: (0, u.jsx)(w(), {
                              url:
                                null === n || void 0 === n
                                  ? void 0
                                  : n.videoUrl,
                              controls: !0,
                              height: "200px",
                            }),
                          }),
                          (0, u.jsxs)("div", {
                            className: "row form-row pt-2 px-2",
                            children: [
                              (0, u.jsxs)("div", {
                                className: "feedback-heading",
                                children: [
                                  "FORM",
                                  r
                                    ? (0, u.jsx)("img", {
                                        className: "col-md-2",
                                        src: "/images/tick.svg",
                                        height: "20px",
                                      })
                                    : null,
                                ],
                              }),
                              (0, u.jsxs)("div", {
                                className: "form-row",
                                children: [
                                  (0, u.jsx)(b.ZP, {
                                    max: 10,
                                    min: 1,
                                    defaultValue: r,
                                    onChange: (e) => {
                                      c(e), a({ ...n, formRating: e });
                                    },
                                    style: { width: "80%" },
                                  }),
                                  (0, u.jsxs)("div", {
                                    className: "col-md-2 attribute-heading",
                                    children: [r, "/10"],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, u.jsxs)("div", {
                            className: "row pt-4 px-2",
                            children: [
                              (0, u.jsxs)("div", {
                                className: "feedback-heading m-0 pb-2 form-row",
                                children: [
                                  "RECORD",
                                  null !== n &&
                                  void 0 !== n &&
                                  n.feedbackVoiceNoteUrl
                                    ? (0, u.jsx)("img", {
                                        className: "col-md-2",
                                        src: "/images/tick.svg",
                                        height: "20px",
                                      })
                                    : null,
                                ],
                              }),
                              (0, u.jsxs)("div", {
                                className: "form-row",
                                children: [
                                  0 == m
                                    ? (0, u.jsx)("img", {
                                        src: "/images/record.svg",
                                        height: "25px",
                                        onClick: x,
                                        style: { marginLeft: "10px" },
                                      })
                                    : (0, u.jsx)("img", {
                                        src: "/images/stop.svg",
                                        style: { marginLeft: "10px" },
                                        height: "25px",
                                        onClick: () => {
                                          p(),
                                            a({
                                              ...n,
                                              feedbackVoiceNoteUrl: j,
                                            });
                                        },
                                      }),
                                  (0, u.jsx)("audio", {
                                    className: "audio-player",
                                    src:
                                      null === n || void 0 === n
                                        ? void 0
                                        : n.feedbackVoiceNoteUrl,
                                    controls: !0,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, u.jsx)("div", {
                            className: "row px-2 pt-4",
                            children: (0, u.jsxs)("div", {
                              className: "feedback-heading  form-row",
                              children: [
                                "COMMENTS",
                                v
                                  ? (0, u.jsx)("img", {
                                      className: "col-md-2",
                                      src: "/images/tick.svg",
                                      height: "20px",
                                    })
                                  : null,
                              ],
                            }),
                          }),
                          (0, u.jsx)("textarea", {
                            rows: 3,
                            value: v,
                            className: "comment-box",
                            onChange: (e) => {
                              var s, t;
                              g(
                                null === e ||
                                  void 0 === e ||
                                  null === (s = e.target) ||
                                  void 0 === s
                                  ? void 0
                                  : s.value
                              ),
                                a({
                                  ...n,
                                  feedbackComment:
                                    null === e ||
                                    void 0 === e ||
                                    null === (t = e.target) ||
                                    void 0 === t
                                      ? void 0
                                      : t.value,
                                });
                            },
                          }),
                        ],
                      })
                    : null,
                ],
              }),
            })
          );
        },
        I = (e) => {
          var s, t;
          let {
            session: i,
            setFeedbackCompleted: n,
            client: d,
            completedPercentage: o,
            exercises: v,
            setExercises: h,
          } = e;
          const [m, x] = (0, l.useState)(!1),
            [p, j] = (0, l.useState)(!1),
            [R, b] = (0, l.useState)(!1),
            S = null === (s = 100 * o) || void 0 === s ? void 0 : s.toFixed(0),
            w = new Date(
              null === i || void 0 === i ? void 0 : i.date
            ).toLocaleDateString("en-IN", { month: "short", day: "numeric" }),
            k = (e, s) => {
              const t = [...v];
              return (
                e &&
                  ((t[s].feedbackVoiceNote =
                    null === e || void 0 === e ? void 0 : e.audioFile),
                  (t[s].feedbackVoiceNoteUrl =
                    null === e || void 0 === e ? void 0 : e.audioUrl)),
                t
              );
            };
          return (0, u.jsxs)("div", {
            className: "feedback",
            children: [
              (0, u.jsxs)("div", {
                className: "client-header",
                children: [
                  (0, u.jsxs)("div", {
                    className: "col-md-4 client-profile",
                    children: [
                      (0, u.jsx)(f.Z, {
                        src:
                          null !==
                            (t =
                              null === d || void 0 === d
                                ? void 0
                                : d.photoUrl) && void 0 !== t
                            ? t
                            : "https://storage.googleapis.com/evolv-store/icons/auth/profile.jpg",
                        roundedCircle: !0,
                        width: "35px",
                        height: "35px",
                      }),
                      (0, u.jsx)("p", {
                        className: "client-name",
                        children: null === d || void 0 === d ? void 0 : d.name,
                      }),
                    ],
                  }),
                  (0, u.jsxs)("div", {
                    className: "col-md-2",
                    children: [
                      (0, u.jsx)(c.JO, {
                        icon: "mdi:weight-lifter",
                        color: "white",
                        height: 20,
                      }),
                      (0, u.jsx)("p", {
                        className: "detail-text",
                        children: null === i || void 0 === i ? void 0 : i.name,
                      }),
                    ],
                  }),
                  (0, u.jsxs)("div", {
                    className: "col-md-2",
                    children: [
                      (0, u.jsx)(c.JO, {
                        icon: "ant-design:calendar-outlined",
                        color: "white",
                        height: 20,
                      }),
                      (0, u.jsx)("p", {
                        className: "detail-text",
                        children: w,
                      }),
                    ],
                  }),
                  (0, u.jsxs)("div", {
                    className: "col-md-3 progress-feedback",
                    children: [
                      (0, u.jsx)("div", {
                        className: "feedback",
                        children: (0, u.jsxs)("div", {
                          className: "workout-time",
                          children: [
                            Math.floor(
                              (null === i || void 0 === i
                                ? void 0
                                : i.activeTime) / 60
                            ),
                            " mins",
                          ],
                        }),
                      }),
                      (0, u.jsx)(r.Ip, {
                        className: "circular-progress-bar",
                        value: S,
                        text: "".concat(S, "%"),
                        backgroundPadding: 2,
                        styles: (0, r.y3)({
                          textColor: "#FFFFFF",
                          pathColor: "#7FD18C",
                          trailColor: "#FFFFFF",
                          textSize: "25px",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, u.jsxs)("div", {
                className: "container-xl p-4",
                children: [
                  (0, u.jsx)(a.Z, {
                    breakpoints: [1250, 860],
                    children:
                      null === i || void 0 === i
                        ? void 0
                        : i.exercises.map((e, s) =>
                            (0, u.jsx)(
                              D,
                              {
                                exercise: e,
                                setExercise: (e) =>
                                  ((e, s) => {
                                    const t = [...v];
                                    (t[s] = {
                                      ...t[s],
                                      feedbackVoiceNoteUrl:
                                        null === e || void 0 === e
                                          ? void 0
                                          : e.feedbackVoiceNoteUrl,
                                      feedbackComment:
                                        null === e || void 0 === e
                                          ? void 0
                                          : e.feedbackComment,
                                      formRating:
                                        null === e || void 0 === e
                                          ? void 0
                                          : e.formRating,
                                    }),
                                      h(t);
                                  })(e, s),
                                modifier: (e) => k(e, s),
                                setDisableSave: b,
                              },
                              s
                            )
                          ),
                  }),
                  m
                    ? (0, u.jsx)("small", {
                        className: "message success",
                        children: "Saved Successfully",
                      })
                    : null,
                  p
                    ? (0, u.jsx)("small", {
                        className: "message error",
                        children: "Something went wrong",
                      })
                    : null,
                  (0, u.jsx)("div", {
                    className: "d-flex justify-content-center",
                    children: (0, u.jsx)(N.Z, {
                      disabled: R,
                      onClick: async () => {
                        try {
                          j(!1), x(!1);
                          const e = k(),
                            s = new FormData();
                          s.append("sessionId", i._id),
                            e.map((e, t) => {
                              const l = e;
                              e.feedbackVoiceNote &&
                                s.append(
                                  "voice",
                                  e.feedbackVoiceNote,
                                  "".concat(t, ".mp3")
                                ),
                                console.log(s.getAll("voice")),
                                delete l.feedbackVoiceNote,
                                s.append(t.toString(), JSON.stringify(l));
                            });
                          const t = await g.Z.put(
                            "/workoutpnp/sessions/update/feedback",
                            s,
                            {
                              headers: {
                                "Content-Type": "multipart/form-data",
                              },
                            }
                          );
                          h(t.data.exercises), n(!0), x(!0), j(!1);
                        } catch (e) {
                          x(!1), j(!0);
                        }
                      },
                      iconComponent: "bx:save",
                      removeIconOn: "xs",
                      text: "Save Feedback",
                      color: "green",
                      classNames: "m-2 mt-4",
                      size: "s",
                      iconSize: 24,
                    }),
                  }),
                ],
              }),
            ],
          });
        };
      var F = t(7513),
        W = t(8347),
        E = t(7151);
      const Z = (e) => {
          var s;
          let {
            session: t,
            completed: i,
            clientId: n,
            removeSession: a,
            sessionThemes: d,
            client: o,
            idx: r,
            editing: c,
            excludedDates: m,
            updateEditing: x,
            showAddButton: p,
            setAddErrorMessage: f,
            setSessions: b,
            minDate: S,
            timezone: w,
          } = e;
          const [k, y] = (0, l.useState)(
              new Date(null === t || void 0 === t ? void 0 : t.date)
            ),
            [C, D] = (0, l.useState)(c),
            [Z, T] = (0, l.useState)({ name: "" }),
            [M, O] = (0, l.useState)(!1),
            [U, J] = (0, l.useState)(!1),
            [P, B] = (0, l.useState)(!1),
            [L, A] = (0, l.useState)("Error saving card"),
            [z, V] = (0, l.useState)({ message: "Error", index: 1 }),
            [_, Y] = (0, l.useState)(!1),
            [K, H] = (0, l.useState)(!1),
            [G, q] = (0, l.useState)(!1),
            [Q, $] = (0, l.useState)(!1),
            [X, ee] = (0, l.useState)(0),
            { clientList: se } = (0, l.useContext)(E.Z);
          (0, l.useEffect)(() => {
            x(r, C);
          }, [C]),
            (0, l.useEffect)(() => {
              D(c);
            }, [c]),
            (0, l.useEffect)(() => {
              P &&
                setTimeout(() => {
                  B(!1);
                }, 1e4),
                K &&
                  setTimeout(() => {
                    H(!1);
                  }, 1e4),
                _ &&
                  setTimeout(() => {
                    Y(!1);
                  }, 1e4);
            }, [P, K, _]);
          (0, l.useEffect)(() => {
            T(t),
              (() => {
                var e;
                let s =
                    null === t ||
                    void 0 === t ||
                    null === (e = t.exercises) ||
                    void 0 === e
                      ? void 0
                      : e.reduce((e, s) => {
                          var t;
                          return (
                            e +
                            (null === s ||
                            void 0 === s ||
                            null === (t = s.exerciseSets) ||
                            void 0 === t
                              ? void 0
                              : t.length)
                          );
                        }, 0),
                  l = 0;
                for (const i of t.exercises)
                  for (const e of i.exerciseSets) e.performedReps && (l += 1);
                ee(l / s);
                for (const i of t.exercises)
                  i.videoUrl && q(!0),
                    (i.feedbackVoiceNoteUrl ||
                      i.feedbackComment ||
                      i.formRating) &&
                      $(!0);
              })(),
              y(new Date(null === t || void 0 === t ? void 0 : t.date));
          }, [t]);
          return (0, u.jsx)("div", {
            className: "session-container",
            children: (0, u.jsxs)("div", {
              className: "content",
              children: [
                i
                  ? (0, u.jsx)(v, {
                      completedPercentage: X,
                      routineName: null === Z || void 0 === Z ? void 0 : Z.name,
                      performDate: null === Z || void 0 === Z ? void 0 : Z.date,
                      userFeedback:
                        void 0 ==
                        (null === Z || void 0 === Z ? void 0 : Z.userFeedback)
                          ? { duration: "Perfect", difficulty: "Optimum" }
                          : null === Z || void 0 === Z
                          ? void 0
                          : Z.userFeedback,
                      activeTime:
                        void 0 ==
                        (null === Z || void 0 === Z ? void 0 : Z.activeTime)
                          ? "-"
                          : Math.floor(
                              (null === Z || void 0 === Z
                                ? void 0
                                : Z.activeTime) / 60
                            ),
                      totalTime:
                        void 0 ==
                        (null === Z || void 0 === Z ? void 0 : Z.totalTime)
                          ? "-"
                          : Math.floor(
                              (null === Z || void 0 === Z
                                ? void 0
                                : Z.totalTime) / 60
                            ),
                    })
                  : (0, u.jsx)(j, {
                      idx: r,
                      routineName: null === Z || void 0 === Z ? void 0 : Z.name,
                      startDate: k,
                      setStartDate: (e) => {
                        y(e), T({ ...Z, date: e });
                      },
                      isEditing: C,
                      loading: U,
                      setIsEditing: D,
                      saveCard: async (e, s) => {
                        var t;
                        const l = new Date(
                          (0, W.default)(e).getTime() -
                            60 * (new Date().getTimezoneOffset() - w) * 1e3
                        );
                        if (
                          (J(!0),
                          (() => {
                            var e, s, t;
                            let l = !1;
                            return "" ==
                              (null === Z || void 0 === Z ? void 0 : Z.name)
                              ? (A("Please enter session name"),
                                B(!0),
                                (l = !0),
                                J(!1),
                                l)
                              : 0 ==
                                (null === Z ||
                                void 0 === Z ||
                                null === (e = Z.exercises) ||
                                void 0 === e
                                  ? void 0
                                  : e.length)
                              ? (A("Please add atleast one exercise"),
                                B(!0),
                                (l = !0),
                                J(!1),
                                l)
                              : (null === Z ||
                                  void 0 === Z ||
                                  null === (s = Z.exercises) ||
                                  void 0 === s ||
                                  s.forEach((e, s) => {
                                    var t;
                                    if (
                                      "-" ==
                                      (null === e || void 0 === e
                                        ? void 0
                                        : e.exerciseInfoRef)
                                    )
                                      return (
                                        V({
                                          message: "Please enter exercise name",
                                          index: s,
                                        }),
                                        Y(!0),
                                        J(!1),
                                        void (l = !0)
                                      );
                                    null === e ||
                                      void 0 === e ||
                                      null === (t = e.exerciseSets) ||
                                      void 0 === t ||
                                      t.forEach((e, s) => {
                                        var t, l, i;
                                        (null === e ||
                                        void 0 === e ||
                                        null === (t = e.suggestedRIRRange) ||
                                        void 0 === t
                                          ? void 0
                                          : t.length) > 1 &&
                                          ((null !=
                                            (null === e || void 0 === e
                                              ? void 0
                                              : e.suggestedRIRRange[1]) &&
                                            (null === e || void 0 === e
                                              ? void 0
                                              : e.suggestedRIRRange[0]) !=
                                              (null === e || void 0 === e
                                                ? void 0
                                                : e.suggestedRIRRange[1])) ||
                                            null === e ||
                                            void 0 === e ||
                                            e.suggestedRIRRange.pop()),
                                          (null === e ||
                                          void 0 === e ||
                                          null === (l = e.suggestedRepRange) ||
                                          void 0 === l
                                            ? void 0
                                            : l.length) > 1 &&
                                            ((null !=
                                              (null === e || void 0 === e
                                                ? void 0
                                                : e.suggestedRepRange[1]) &&
                                              (null === e || void 0 === e
                                                ? void 0
                                                : e.suggestedRepRange[0]) !=
                                                (null === e || void 0 === e
                                                  ? void 0
                                                  : e.suggestedRepRange[1])) ||
                                              null === e ||
                                              void 0 === e ||
                                              e.suggestedRepRange.pop()),
                                          (null ===
                                            (i = e.suggestedWeightRange) ||
                                          void 0 === i
                                            ? void 0
                                            : i.length) > 1 &&
                                            ((null !=
                                              (null === e || void 0 === e
                                                ? void 0
                                                : e.suggestedWeightRange[1]) &&
                                              e.suggestedWeightRange[0] !=
                                                e.suggestedWeightRange[1]) ||
                                              null === e ||
                                              void 0 === e ||
                                              e.suggestedWeightRange.pop());
                                      });
                                  }),
                                null === Z ||
                                  void 0 === Z ||
                                  null === (t = Z.exercises) ||
                                  void 0 === t ||
                                  t.forEach((e, s) => {
                                    var t, i;
                                    if (
                                      0 ==
                                      (null === e ||
                                      void 0 === e ||
                                      null === (t = e.exerciseSets) ||
                                      void 0 === t
                                        ? void 0
                                        : t.length)
                                    )
                                      return (
                                        V({
                                          message: "Please add atleast one set",
                                          index: s,
                                        }),
                                        Y(!0),
                                        J(!1),
                                        void (l = !0)
                                      );
                                    null === e ||
                                      void 0 === e ||
                                      null === (i = e.exerciseSets) ||
                                      void 0 === i ||
                                      i.map((e) =>
                                        e.suggestedWeightRange.length > 1 &&
                                        null != e.suggestedWeightRange[0] &&
                                        null != e.suggestedWeightRange[1] &&
                                        parseInt(e.suggestedWeightRange[0]) >
                                          parseInt(e.suggestedWeightRange[1])
                                          ? ((l = !0),
                                            V({
                                              message:
                                                "Second value of weight cannot be less than first one",
                                              index: s,
                                            }),
                                            void Y(!0))
                                          : e.suggestedRepRange.length > 1 &&
                                            null != e.suggestedRepRange[0] &&
                                            null != e.suggestedRepRange[1] &&
                                            parseInt(e.suggestedRepRange[0]) >
                                              parseInt(e.suggestedRepRange[1])
                                          ? ((l = !0),
                                            V({
                                              message:
                                                "Second value of reps cannot be less than first one",
                                              index: s,
                                            }),
                                            void Y(!0))
                                          : e.suggestedRIRRange.length > 1 &&
                                            null != e.suggestedRIRRange[0] &&
                                            null != e.suggestedRIRRange[1] &&
                                            parseInt(e.suggestedRIRRange[0]) >
                                              parseInt(e.suggestedRIRRange[1])
                                          ? ((l = !0),
                                            V({
                                              message:
                                                "Second value of RIR cannot be less than first one",
                                              index: s,
                                            }),
                                            void Y(!0))
                                          : void 0
                                      );
                                  }),
                                l);
                          })())
                        )
                          return void J(!1);
                        let i = structuredClone({ ...Z });
                        (i.date = l),
                          (i.sessionThemeRef = s),
                          null === i ||
                            void 0 === i ||
                            null === (t = i.exercises) ||
                            void 0 === t ||
                            t.map((e) => {
                              "number" == typeof e._id && delete e._id;
                            });
                        try {
                          if (null !== Z && void 0 !== Z && Z._id) {
                            await g.Z.put("/workoutpnp/sessions/update", i);
                            b(Z, r);
                          } else {
                            var n;
                            const e = await g.Z.post(
                              "/workoutpnp/sessions/add",
                              i
                            );
                            b(
                              {
                                ...Z,
                                _id:
                                  null === (n = e.data) || void 0 === n
                                    ? void 0
                                    : n._id,
                              },
                              r
                            );
                          }
                          se.forEach((e) =>
                            e[1].forEach((e) => {
                              e.clientId == Z.userRef &&
                                (!e.lastUpdatedWorkoutDate ||
                                  e.lastUpdatedWorkoutDate < l.toISOString()) &&
                                (e.lastUpdatedWorkoutDate = l.toISOString());
                            })
                          ),
                            D(!1),
                            B(!1),
                            Y(!1),
                            H(!0);
                        } catch (a) {
                          A("Error saving card"), B(!0), H(!1), D(!0);
                        }
                        J(!1);
                      },
                      setSessionName: (e) => {
                        T({ ...Z, name: e });
                      },
                      removeSession: () => {
                        B(!1), Y(!1), H(!1), a();
                      },
                      sessionThemes: d,
                      isError: P,
                      errorMessage: L,
                      isSuccess: K,
                      excludedDates: m,
                      setAddErrorMessage: f,
                      showAddButton: p,
                      selectedSessionTheme:
                        void 0 ===
                        (null === t || void 0 === t
                          ? void 0
                          : t.sessionThemeRef)
                          ? null === (s = d[0]) || void 0 === s
                            ? void 0
                            : s._id
                          : null === t || void 0 === t
                          ? void 0
                          : t.sessionThemeRef,
                      workoutTime: (0, F.ll)(
                        null === Z || void 0 === Z ? void 0 : Z.exercises
                      ),
                      minDate: S,
                    }),
                (0, u.jsx)(h.Z, {
                  exercises: null === Z || void 0 === Z ? void 0 : Z.exercises,
                  setExercises: (e) => {
                    T({ ...Z, exercises: e });
                  },
                  isEditing: C,
                  completed: i,
                  isError: _,
                  errorMessage: z,
                }),
                G
                  ? (0, u.jsxs)("div", {
                      className: "feedback-button-container",
                      children: [
                        Q
                          ? (0, u.jsx)("h5", {
                              className: "completed-text",
                              children: "Feedback Completed",
                            })
                          : null,
                        (0, u.jsx)(N.Z, {
                          classNames: "feedback-button",
                          iconComponent: "uil:feedback",
                          iconSize: 20,
                          text: Q ? "Edit" : "Feedback",
                          color: "green",
                          size: "s",
                          removeIconOn: "xs",
                          onClick: () => {
                            O(!0);
                          },
                        }),
                        (0, u.jsx)(R.Z, {
                          show: M,
                          width: "fullwidth",
                          title: "Feedback",
                          onHide: () => {
                            O(!1);
                          },
                          dark: !0,
                          children: (0, u.jsx)(I, {
                            completedPercentage: X,
                            session: Z,
                            setFeedbackCompleted: $,
                            client: o,
                            exercises:
                              null === Z || void 0 === Z ? void 0 : Z.exercises,
                            setExercises: (e) => {
                              T({ ...Z, exercises: e });
                            },
                          }),
                        }),
                      ],
                    })
                  : null,
              ],
            }),
          });
        },
        T = (e) => {
          let {
            loading: s,
            error: t,
            sessions: d,
            completed: o,
            clientId: r,
            deleteSession: c,
            fullName: v,
            client: h,
            sessionThemes: m,
            showAddButton: x,
            setAddErrorMessage: p,
            breakpoints: j = [1407, 1e3],
            setSessions: f = () => {},
            minDate: b,
            timezone: S,
          } = e;
          const [w, k] = (0, l.useState)(!1),
            [y, C] = (0, l.useState)(!1),
            [D, I] = (0, l.useState)(),
            [F, W] = (0, l.useState)([]);
          (0, l.useEffect)(() => {
            let e =
              null === d || void 0 === d
                ? void 0
                : d.map((e) => {
                    if (null === e || void 0 === e || !e.isCompleted)
                      return new Date(
                        null === e || void 0 === e ? void 0 : e.date
                      );
                  });
            W(e);
          }, [d]);
          const E = (e, s) => {
            let t = [...d];
            (t[e].editing = s), f(t);
          };
          return (0, u.jsx)("div", {
            className: "client-container-workout",
            children: (0, u.jsx)("div", {
              className: "container-xl",
              children: s
                ? (0, u.jsx)(i.Z, {})
                : w || t
                ? (0, u.jsx)(n.Z, {})
                : (0, u.jsxs)(u.Fragment, {
                    children: [
                      (0, u.jsx)(a.Z, {
                        breakpoints: j,
                        children: d.map((e, s) =>
                          (0, u.jsx)(
                            Z,
                            {
                              showAddButton: x,
                              setAddErrorMessage: p,
                              idx: s,
                              editing:
                                null === e || void 0 === e ? void 0 : e.editing,
                              session: e,
                              completed: o,
                              clientId: r,
                              fullName: v,
                              client: h,
                              sessionThemes: m,
                              removeSession: () =>
                                ((e) => {
                                  C(!0), I(e);
                                })(s),
                              updateEditing: E,
                              excludedDates: F,
                              setSessions: (e, s) => {
                                let t = d;
                                (t[s] = e), f(t);
                              },
                              minDate: b,
                              timezone: S,
                            },
                            s
                          )
                        ),
                      }),
                      (0, u.jsx)(R.Z, {
                        title: "Delete Session",
                        show: y,
                        onHide: () => C(!1),
                        width: "medium",
                        dark: !0,
                        children: (0, u.jsxs)("div", {
                          children: [
                            (0, u.jsx)("p", {
                              children:
                                "Are you sure you want to delete the session?",
                            }),
                            (0, u.jsxs)("div", {
                              className: "d-flex",
                              children: [
                                (0, u.jsx)(N.Z, {
                                  text: "Yes",
                                  color: "green",
                                  size: "s",
                                  onClick: async () => {
                                    var e;
                                    if (
                                      (E(D, !1),
                                      null !== (e = d[D]) &&
                                        void 0 !== e &&
                                        e._id)
                                    )
                                      try {
                                        await g.Z.delete(
                                          "trainers/sessions/delete?userRef=".concat(
                                            r
                                          ),
                                          { data: { sessionRef: d[D]._id } }
                                        ),
                                          k(!1),
                                          c(D);
                                      } catch (t) {
                                        k(!0);
                                      }
                                    else c(D);
                                    C(!1);
                                  },
                                }),
                                (0, u.jsx)(N.Z, {
                                  text: "No",
                                  color: "red",
                                  size: "s",
                                  onClick: () => {
                                    C(!1);
                                  },
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
            }),
          });
        };
    },
    7513: (e, s, t) => {
      t.d(s, { EP: () => i, Y: () => n, ll: () => a, rx: () => l });
      const l = (e) => {
          var s = -1,
            t = -1,
            l = [];
          if (e) {
            for (const s of e)
              (s || 0 == s) &&
                (void 0 == s.length
                  ? l.push(s)
                  : l.push(...s.filter((e) => null != e)));
            l.length > 0 &&
              ((s = Math.min.apply(null, l)), (t = Math.max.apply(null, l)));
          }
          return 0 === l.length ? "-" : s === t ? s : s + "-" + t;
        },
        i = (e) => {
          var s = -1,
            t = -1,
            l = [];
          if (e) {
            for (const s of e)
              (s || 0 == s) &&
                (void 0 == s.length
                  ? l.push(s)
                  : l.push(...s.filter((e) => null != e)));
            l.length > 0 &&
              ((s = Math.min.apply(null, l)), (t = Math.max.apply(null, l)));
          }
          return 0 === l.length ? [] : s === t ? [s] : [s, t];
        },
        n = (e) =>
          null === e || void 0 === e
            ? void 0
            : e.reduce(
                (e, s) => (null !== s && void 0 !== s && s.restDay ? e : e + 1),
                0
              ),
        a = (e) => {
          let s = 0;
          return (
            null === e ||
              void 0 === e ||
              e.forEach((e, t) => {
                var l;
                null === e ||
                  void 0 === e ||
                  null === (l = e.exerciseSets) ||
                  void 0 === l ||
                  l.forEach((t, l) => {
                    var i;
                    (null === t ||
                    void 0 === t ||
                    null === (i = t.suggestedRepRange) ||
                    void 0 === i
                      ? void 0
                      : i.length) > 1
                      ? (s +=
                          (((null === t || void 0 === t
                            ? void 0
                            : t.suggestedRepRange[0]) +
                            (null === t || void 0 === t
                              ? void 0
                              : t.suggestedRepRange[1])) /
                            2) *
                          3)
                      : (s +=
                          3 *
                          (null === t || void 0 === t
                            ? void 0
                            : t.suggestedRepRange[0])),
                      l != (null === e || void 0 === e ? void 0 : e.length) - 1
                        ? (s += 90)
                        : (s += 120);
                  });
              }),
            (s / 60).toFixed(1)
          );
        };
    },
  },
]);
//# sourceMappingURL=194.5efe4300.chunk.js.map
