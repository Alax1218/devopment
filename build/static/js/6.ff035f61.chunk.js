"use strict";
(self.webpackChunktrainer_dashboard =
  self.webpackChunktrainer_dashboard || []).push([
  [6],
  {
    7006: (e, l, s) => {
      s.r(l), s.d(l, { default: () => T });
      var i = s(2791),
        n = s(4880),
        t = s(7217),
        o = s(968),
        d = s(2284),
        a = s(4542),
        c = s(8133),
        r = s(184);
      const u = (e) => {
        let {
          cycleDropdown: l,
          setSelectedCycle: s,
          selectedCycleId: n,
          addCycle: t = () => {},
          cloneCycle: d = () => {},
          showReorder: a = () => {},
          numDays: c,
        } = e;
        const [u, v] = (0, i.useState)({ client: [], trainer: [], world: [] });
        (0, i.useEffect)(() => {
          const e = { client: [], trainer: [], world: [] };
          e.world.push(l.globalCycles),
            e.trainer.push(l.allClientsCycle),
            e.client.push(l.clientSpecificCycle),
            v(e);
        }, [l]);
        const m = (e) => {
          var l;
          return null === (l = e[0]) || void 0 === l
            ? void 0
            : l.map((e, l) =>
                (0, r.jsx)(
                  "option",
                  {
                    className: "cycle-option",
                    value: null === e || void 0 === e ? void 0 : e._id,
                    children: null === e || void 0 === e ? void 0 : e.name,
                  },
                  l
                )
              );
        };
        return (0, r.jsxs)("div", {
          className: "cycle-header",
          children: [
            (0, r.jsx)("h4", { children: "Cycle" }),
            (0, r.jsxs)("select", {
              required: !0,
              name: "cycle",
              className: "cycle-dropdown",
              value: n,
              onChange: (e) => {
                var l;
                s(
                  null === e ||
                    void 0 === e ||
                    null === (l = e.target) ||
                    void 0 === l
                    ? void 0
                    : l.value
                );
              },
              disabled: 1 == n,
              children: [
                (0, r.jsx)("option", {
                  className: "disabled-option",
                  disabled: !0,
                  children: "GLOBAL",
                }),
                m(u.world),
                (0, r.jsx)("option", {
                  className: "disabled-option",
                  disabled: !0,
                  children: "ALL CLIENTS",
                }),
                m(u.trainer),
                (0, r.jsx)("option", {
                  className: "disabled-option",
                  disabled: !0,
                  children: "THIS CLIENT",
                }),
                m(u.client),
              ],
            }),
            (0, r.jsxs)("div", {
              className: "add-cycle-button-div",
              children: [
                (0, r.jsx)("div", {
                  children:
                    1 == n
                      ? (0, r.jsx)(r.Fragment, {})
                      : (0, r.jsx)(o.Z, {
                          classNames: "no-word-wrap",
                          text: "Add",
                          onClick: () => {
                            t();
                          },
                          iconComponent: "eos-icons:content-new",
                        }),
                }),
                (0, r.jsx)("div", {
                  children:
                    1 == n
                      ? (0, r.jsx)(r.Fragment, {})
                      : (0, r.jsx)(o.Z, {
                          classNames: "no-word-wrap",
                          text: "Clone",
                          onClick: () => {
                            d();
                          },
                          iconComponent: "fa6-regular:clone",
                        }),
                }),
                (0, r.jsx)("div", {
                  children: (0, r.jsx)(o.Z, {
                    classNames: "no-word-wrap",
                    text: "Reorder",
                    onClick: () => {
                      a();
                    },
                    iconComponent: "mdi:restart",
                  }),
                }),
              ],
            }),
          ],
        });
      };
      var v = s(2711);
      const m = (e) => {
        let {
          cycleRoutines: l,
          selectedDay: s,
          setSelectedDay: n,
          addWorkout: t,
          addRestDay: d,
          deleteDay: a,
          global: c,
          cloneDay: u,
        } = e;
        const [m, h] = (0, i.useState)(!1);
        return (
          (0, i.useEffect)(() => {
            m &&
              setTimeout(() => {
                h(!1);
              }, 4e3);
          }, [m]),
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsxs)("div", {
                className: "days-header",
                children: [
                  (0, r.jsx)("div", {
                    className: "routine-container",
                    children:
                      null === l || void 0 === l
                        ? void 0
                        : l.map((e, i) =>
                            (0, r.jsxs)(
                              "div",
                              {
                                className: "routine-summary ".concat(
                                  s === i && "selected"
                                ),
                                onClick: () => n(i),
                                children: [
                                  (0, r.jsx)("div", {
                                    className: "day-number",
                                    children:
                                      null === e || void 0 === e
                                        ? void 0
                                        : e.dayNumber,
                                  }),
                                  (0, r.jsx)("div", {
                                    className: "routine-name",
                                    children:
                                      null === e || void 0 === e
                                        ? void 0
                                        : e.name,
                                  }),
                                  c
                                    ? (0, r.jsx)(r.Fragment, {})
                                    : (0, r.jsxs)("div", {
                                        children: [
                                          (0, r.jsx)(v.JO, {
                                            onClick: () => {
                                              1 !=
                                              (null === l || void 0 === l
                                                ? void 0
                                                : l.length)
                                                ? (h(!1), a(i))
                                                : h(!0);
                                            },
                                            className:
                                              "close-button-icon ".concat(
                                                s === i && "selected"
                                              ),
                                            height: 8,
                                            icon: "ep:close-bold",
                                          }),
                                          (0, r.jsx)(v.JO, {
                                            className: "clone-day-icon",
                                            text: "Clone day",
                                            onClick: () => {
                                              u(i);
                                            },
                                            icon: "clarity:clone-solid",
                                          }),
                                        ],
                                      }),
                                ],
                              },
                              i
                            )
                          ),
                  }),
                  c
                    ? (0, r.jsx)(r.Fragment, {})
                    : (0, r.jsxs)("div", {
                        className: "add-edit-container",
                        children: [
                          (0, r.jsx)(o.Z, {
                            type: "button",
                            disabled:
                              (null === l || void 0 === l
                                ? void 0
                                : l.length) >= 7,
                            classNames: "add-workout-btn",
                            text: "+ Add Workout",
                            onClick: t,
                          }),
                          (0, r.jsx)(o.Z, {
                            type: "button",
                            disabled:
                              (null === l || void 0 === l
                                ? void 0
                                : l.length) >= 7,
                            classNames: "add-workout-btn",
                            text: "+ Add Rest",
                            onClick: d,
                          }),
                        ],
                      }),
                ],
              }),
              m
                ? (0, r.jsx)("small", {
                    className: "message error",
                    children: "There must be atleast one day routine",
                  })
                : (0, r.jsx)(r.Fragment, {}),
            ],
          })
        );
      };
      var h = s(125);
      const x = (e) => {
        let { actualCycle: l, setShowReorderModal: s, setSelectedCycle: n } = e;
        const [t, d] = (0, i.useState)(!1);
        (0, i.useEffect)(() => {
          t &&
            setTimeout(() => {
              d(!1);
            }, 4e3);
        }, [t]);
        const a = [...l.routineRefs];
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsxs)("div", {
            className: "reorder-days-header",
            children: [
              (0, r.jsx)("div", {
                className: "days-header",
                children: (0, r.jsx)("div", {
                  className: "routine-container",
                  children: (0, r.jsx)(h.Z5, {
                    onDragEnd: (e) => {
                      var l, s, i, n;
                      if (!e.destination) return;
                      if (
                        (null === e ||
                        void 0 === e ||
                        null === (l = e.destination) ||
                        void 0 === l
                          ? void 0
                          : l.index) ===
                        (null === e ||
                        void 0 === e ||
                        null === (s = e.source) ||
                        void 0 === s
                          ? void 0
                          : s.index)
                      )
                        return;
                      const [t] = a.splice(
                        null === e ||
                          void 0 === e ||
                          null === (i = e.source) ||
                          void 0 === i
                          ? void 0
                          : i.index,
                        1
                      );
                      null === a ||
                        void 0 === a ||
                        a.splice(
                          null === e ||
                            void 0 === e ||
                            null === (n = e.destination) ||
                            void 0 === n
                            ? void 0
                            : n.index,
                          0,
                          t
                        ),
                        null === a ||
                          void 0 === a ||
                          a.forEach(function (e, l) {
                            e.dayNumber = l + 1;
                          });
                    },
                    children: (0, r.jsx)(
                      h.bK,
                      {
                        droppableId: "cycleList",
                        children: (e) =>
                          (0, r.jsxs)("div", {
                            ref: e.innerRef,
                            ...e.droppableProps,
                            children: [
                              null === a || void 0 === a
                                ? void 0
                                : a.map((e, l) =>
                                    (0, r.jsx)(
                                      h._l,
                                      {
                                        draggableId:
                                          "drag" +
                                          (null === e || void 0 === e
                                            ? void 0
                                            : e.dayNumber),
                                        index: l,
                                        children: (l) =>
                                          (0, r.jsxs)(
                                            "div",
                                            {
                                              className: "routine-summary",
                                              ...l.dragHandleProps,
                                              ...l.draggableProps,
                                              ref: l.innerRef,
                                              children: [
                                                (0, r.jsx)("div", {
                                                  className: "day-number",
                                                  children:
                                                    null === e || void 0 === e
                                                      ? void 0
                                                      : e.dayNumber,
                                                }),
                                                (0, r.jsx)("div", {
                                                  className: "routine-name",
                                                  children:
                                                    null === e || void 0 === e
                                                      ? void 0
                                                      : e.name,
                                                }),
                                              ],
                                            },
                                            null === e || void 0 === e
                                              ? void 0
                                              : e._id
                                          ),
                                      },
                                      "key" +
                                        (null === e || void 0 === e
                                          ? void 0
                                          : e.dayNumber)
                                    )
                                  ),
                              e.placeholder,
                            ],
                          }),
                      },
                      "cycleKey"
                    ),
                  }),
                }),
              }),
              (0, r.jsx)(o.Z, {
                text: "Save",
                color: "green",
                onClick: () => {
                  n(a), s(!1);
                },
                classNames: "reorder-btn",
              }),
            ],
          }),
        });
      };
      var f = s(6085),
        y = s(9041),
        g = s(7513),
        j = s(6357),
        p = s(1475);
      const R = (e) => {
        var l, s;
        let {
          routine: n,
          setRoutine: t,
          exerciseError: o,
          exerciseErrorMessage: d,
          sessionThemes: a,
          global: c,
          isThisClient: u,
        } = e;
        const [m, h] = (0, i.useState)(0),
          [x, f] = (0, i.useState)(
            null === n || void 0 === n ? void 0 : n.sessionThemeRef
          );
        (0, i.useEffect)(() => {
          h((0, g.ll)(null === n || void 0 === n ? void 0 : n.exercises)),
            f(null === n || void 0 === n ? void 0 : n.sessionThemeRef);
        }, [n]),
          (0, i.useEffect)(() => {
            const e = { ...n };
            (e.sessionThemeRef = x), t(e);
          }, [x]);
        return null !== n && void 0 !== n && n.restDay
          ? (0, r.jsx)("div", {
              className: "cycle-routine-container rest-day",
              children: (0, r.jsx)("span", { children: "Rest Day" }),
            })
          : (0, r.jsxs)(r.Fragment, {
              children: [
                c
                  ? (0, r.jsx)(p.Z, {
                      sessionTheme:
                        null === a || void 0 === a
                          ? void 0
                          : a.filter(
                              (e) =>
                                (null === e || void 0 === e ? void 0 : e._id) ==
                                x
                            )[0],
                    })
                  : (0, r.jsx)(j.Z, {
                      slidesToShow: 8,
                      selectedCard: x,
                      setSelectedCard: f,
                      sessionThemes: a,
                      breakpoints: [1024, 900, 800, 600, 520, 380, 100],
                    }),
                (0, r.jsxs)("div", {
                  className: "cycle-routine-container",
                  children: [
                    (0, r.jsxs)("div", {
                      className: "routine-summary",
                      children: [
                        c
                          ? (0, r.jsx)("div", {
                              className: "routine-name",
                              children:
                                null === n || void 0 === n ? void 0 : n.name,
                            })
                          : (0, r.jsx)("input", {
                              className: "routine-name",
                              type: "text",
                              value:
                                null === n || void 0 === n ? void 0 : n.name,
                              onChange: (e) => {
                                var l;
                                return ((e) => {
                                  const l = { ...n };
                                  (l.name = e), t(l);
                                })(
                                  null === e ||
                                    void 0 === e ||
                                    null === (l = e.target) ||
                                    void 0 === l
                                    ? void 0
                                    : l.value
                                );
                              },
                            }),
                        (0, r.jsxs)("div", {
                          className: "footer-container",
                          children: [
                            (0, r.jsxs)("div", {
                              className: "summary-row",
                              children: [
                                (0, r.jsx)(v.JO, {
                                  icon: "mdi:weight-lifter",
                                  height: 18,
                                }),
                                (0, r.jsxs)("span", {
                                  children: [
                                    null === n ||
                                    void 0 === n ||
                                    null === (l = n.exercises) ||
                                    void 0 === l
                                      ? void 0
                                      : l.length,
                                    " exercise(s)",
                                  ],
                                }),
                              ],
                            }),
                            (0, r.jsxs)("div", {
                              className: "summary-row",
                              children: [
                                (0, r.jsx)(v.JO, {
                                  icon: "mdi:arm-flex-outline",
                                  height: 18,
                                }),
                                (0, r.jsxs)("span", {
                                  children: [
                                    null === n ||
                                    void 0 === n ||
                                    null === (s = n.exercises) ||
                                    void 0 === s
                                      ? void 0
                                      : s.reduce((e, l) => {
                                          var s;
                                          return (
                                            e +
                                            (null === l ||
                                            void 0 === l ||
                                            null === (s = l.exerciseSets) ||
                                            void 0 === s
                                              ? void 0
                                              : s.length)
                                          );
                                        }, 0),
                                    " set(s)",
                                  ],
                                }),
                              ],
                            }),
                            (0, r.jsxs)("div", {
                              className: "summary-row",
                              children: [
                                (0, r.jsx)(v.JO, {
                                  icon: "fa6-solid:clock",
                                  height: 18,
                                }),
                                (0, r.jsxs)("span", { children: [m, " min"] }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsx)(
                      y.Z,
                      {
                        exercises:
                          null === n || void 0 === n ? void 0 : n.exercises,
                        setExercises: (e) => {
                          const l = { ...n };
                          (l.exercises = e), t(l);
                        },
                        isEditing: !c,
                        completed: !1,
                        isError: o,
                        errorMessage: d,
                        modal: !0,
                        autoPrefill: u,
                      },
                      null === n || void 0 === n ? void 0 : n._id
                    ),
                  ],
                }),
              ],
            });
      };
      var N = s(8652),
        b = s(6122);
      const C = (e) => {
        var l, s;
        let { clientId: n, setCycle: t } = e;
        const [v, h] = (0, i.useState)(!1),
          [f, y] = (0, i.useState)(!1),
          [j, p] = (0, i.useState)({
            name: "",
            isThisClient: !1,
            makeActive: !1,
            cycle: null,
          }),
          [C, S] = (0, i.useState)({}),
          [w, k] = (0, i.useState)([]),
          [D, T] = (0, i.useState)(-1),
          [E, Z] = (0, i.useState)(!1),
          [A, I] = (0, i.useState)({}),
          [_, F] = (0, i.useState)(0),
          [O, P] = (0, i.useState)(!1),
          [z, L] = (0, i.useState)({ message: "Error", index: 1 }),
          [M, W] = (0, i.useState)(!0),
          [J, H] = (0, i.useState)(!1),
          [B, q] = (0, i.useState)(!1),
          [K, U] = (0, i.useState)(!1),
          [Y, G] = (0, i.useState)("Could not be saved"),
          [Q, V] = (0, i.useState)(!1),
          [X, $] = (0, i.useState)(!0),
          [ee, le] = (0, i.useState)(null),
          [se, ie] = (0, i.useState)(!1),
          [ne, te] = (0, i.useState)(!1),
          [oe, de] = (0, i.useState)([]),
          [ae, ce] = (0, i.useState)(!1),
          [re, ue] = (0, i.useState)(!1),
          { currentUser: ve } = N.default,
          me = async (e) => {
            T(-1), W(!0);
            try {
              var l, s;
              const d = await a.Z.get("workoutpnp/cycles?clientId=".concat(n)),
                c = await a.Z.get(
                  "trainers/sessions/remaining?userRef=".concat(n)
                );
              de(
                null === c ||
                  void 0 === c ||
                  null === (l = c.data) ||
                  void 0 === l
                  ? void 0
                  : l.sessionThemes
              ),
                k(null === d || void 0 === d ? void 0 : d.data);
              d.data.globalCycles,
                d.data.allClientsCycle,
                d.data.clientSpecificCycle;
              const r = [
                ...d.data.globalCycles,
                ...d.data.allClientsCycle,
                ...d.data.clientSpecificCycle,
              ];
              if (
                (le(
                  null === d ||
                    void 0 === d ||
                    null === (s = d.data) ||
                    void 0 === s
                    ? void 0
                    : s.cycleRef
                ),
                null == e)
              ) {
                for (const e of r) {
                  var i;
                  (e.makeActive = !1),
                    e._id ==
                      (null === d ||
                      void 0 === d ||
                      null === (i = d.data) ||
                      void 0 === i
                        ? void 0
                        : i.cycleRef) && ((e.makeActive = !0), V(!0), T(e._id));
                }
                var t;
                if (1 == (null === r || void 0 === r ? void 0 : r.length))
                  T(null === (t = r[0]) || void 0 === t ? void 0 : t._id);
              } else {
                for (const e of r) {
                  var o;
                  (e.makeActive = !1),
                    e._id ==
                      (null === d ||
                      void 0 === d ||
                      null === (o = d.data) ||
                      void 0 === o
                        ? void 0
                        : o.cycleRef) && (e.makeActive = !0);
                }
                T(e);
              }
              W(!1), H(!1);
            } catch (d) {
              W(!1), H(!0);
            }
          };
        (0, i.useEffect)(() => {
          K &&
            setTimeout(() => {
              U(!1);
            }, 15e3),
            O &&
              setTimeout(() => {
                P(!1);
              }, 5e3),
            ne &&
              setTimeout(() => {
                te(!1);
              }, 15e3);
        }, [K, O, ne]);
        (0, i.useEffect)(() => {
          U(!1),
            P(!1),
            -1 !== D
              ? (async () => {
                  if (D) {
                    W(!0);
                    try {
                      const e = ((e) => {
                        var l;
                        const s = { ...e };
                        s.routineRefs =
                          null === s ||
                          void 0 === s ||
                          null === (l = s.routineRefs) ||
                          void 0 === l
                            ? void 0
                            : l
                                .sort(
                                  (e, l) =>
                                    (null === e || void 0 === e
                                      ? void 0
                                      : e.dayNumber) -
                                    (null === l || void 0 === l
                                      ? void 0
                                      : l.dayNumber)
                                )
                                .map((e, l) => {
                                  var s;
                                  return {
                                    ...e,
                                    exercises:
                                      null === e ||
                                      void 0 === e ||
                                      null === (s = e.exercises) ||
                                      void 0 === s
                                        ? void 0
                                        : s.map((e) => {
                                            var l;
                                            return {
                                              ...e,
                                              exerciseSets:
                                                null === e ||
                                                void 0 === e ||
                                                null === (l = e.exerciseSets) ||
                                                void 0 === l
                                                  ? void 0
                                                  : l
                                                      .sort(
                                                        (e, l) =>
                                                          (null === e ||
                                                          void 0 === e
                                                            ? void 0
                                                            : e.number) -
                                                          (null === l ||
                                                          void 0 === l
                                                            ? void 0
                                                            : l.number)
                                                      )
                                                      .map((e, l) => ({
                                                        ...e,
                                                        number: l + 1,
                                                      })),
                                            };
                                          }),
                                  };
                                });
                        let i = [];
                        for (
                          let t = 0;
                          t <
                          (null === s ||
                          void 0 === s ||
                          null === (n = s.routineRefs) ||
                          void 0 === n
                            ? void 0
                            : n.length);
                          t++
                        ) {
                          var n;
                          if (
                            0 == t &&
                            1 !=
                              (null === s || void 0 === s
                                ? void 0
                                : s.routineRefs[t].dayNumber)
                          )
                            i.push({
                              name: "Rest Day",
                              restDay: !0,
                              dayNumber: t + 1,
                              exercises: [],
                            });
                          else if (
                            t > 0 &&
                            (null === s || void 0 === s
                              ? void 0
                              : s.routineRefs[t].dayNumber) -
                              (null === s || void 0 === s
                                ? void 0
                                : s.routineRefs[t - 1].dayNumber) !=
                              1
                          )
                            for (
                              let e = 0;
                              e <
                              (null === s || void 0 === s
                                ? void 0
                                : s.routineRefs[t].dayNumber) -
                                (null === s || void 0 === s
                                  ? void 0
                                  : s.routineRefs[t - 1].dayNumber) -
                                1;
                              e++
                            )
                              i.push({
                                name: "Rest Day",
                                restDay: !0,
                                dayNumber: t + 1 + e,
                                exercises: [],
                              });
                          i.push(
                            null === s || void 0 === s
                              ? void 0
                              : s.routineRefs[t]
                          );
                        }
                        for (
                          ;
                          i.length !=
                            (null === s || void 0 === s
                              ? void 0
                              : s.totalRoutines) &&
                          i.length <
                            (null === s || void 0 === s
                              ? void 0
                              : s.totalRoutines);

                        )
                          i.push({
                            name: "Rest Day",
                            restDay: !0,
                            dayNumber: i.length + 1,
                            exercises: [],
                          });
                        return (s.routineRefs = [...i]), s;
                      })(
                        [
                          ...w.allClientsCycle,
                          ...w.globalCycles,
                          ...w.clientSpecificCycle,
                        ].find((e) => e._id == D)
                      );
                      I(e), q(!1), W(!1), Z(!1);
                    } catch (e) {
                      H(!0), W(!1);
                    }
                  }
                })()
              : Z(!0);
        }, [D]),
          (0, i.useEffect)(() => {
            null == (null === A || void 0 === A ? void 0 : A.userRef)
              ? $(!1)
              : $(!0),
              V(null === A || void 0 === A ? void 0 : A.makeActive);
          }, [A]),
          (0, i.useEffect)(() => {
            (A.makeActive = Q), I(A);
          }, [Q]),
          (0, i.useEffect)(() => {
            (A.userRef = X ? n : null), I(A);
          }, [X]),
          (0, i.useEffect)(() => {
            me(null);
          }, []);
        const he = (e) => {
            const l = { ...A };
            l.routineRefs.push({
              name: e ? "Rest Day" : "New Routine",
              restDay: e,
              dayNumber: l.routineRefs.length + 1,
              exercises: [],
            }),
              I(l);
          },
          xe = async () => {
            if ("" == (null === j || void 0 === j ? void 0 : j.name))
              return G("Please enter valid cycle name"), void ie(!0);
            if (
              (() => {
                let e = !1;
                return (
                  [
                    ...w.globalCycles,
                    ...w.allClientsCycle,
                    ...w.clientSpecificCycle,
                  ].forEach((l) => {
                    (null === l || void 0 === l ? void 0 : l.name) !=
                      (null === j || void 0 === j ? void 0 : j.name) ||
                      (e = !0);
                  }),
                  e
                );
              })()
            )
              return G("Please enter unique cycle name"), void ie(!0);
            var e, l;
            null != (null === j || void 0 === j ? void 0 : j.cycle) &&
              (null === j ||
                void 0 === j ||
                null === (e = j.cycle) ||
                void 0 === e ||
                null === (l = e.routineRefs) ||
                void 0 === l ||
                l.forEach((e) => {
                  var l;
                  delete e._id,
                    null === e ||
                      void 0 === e ||
                      null === (l = e.exercises) ||
                      void 0 === l ||
                      l.forEach((e) => {
                        e._id = Math.random();
                      });
                }));
            const s =
              null === j.cycle
                ? {
                    _id: 1,
                    name: null === j || void 0 === j ? void 0 : j.name,
                    isActive: !0,
                    global: !1,
                    isThisClient:
                      null === j || void 0 === j ? void 0 : j.isThisClient,
                    clientId: n,
                    routineRefs: [
                      { dayNumber: 1, exercises: [], name: "New Routine" },
                    ],
                    totalRoutines: 1,
                    makeActive:
                      null === j || void 0 === j ? void 0 : j.makeActive,
                    userRef: j.isThisClient ? n : null,
                  }
                : {
                    ...j.cycle,
                    _id: 1,
                    isActive: !0,
                    global: !1,
                    name: null === j || void 0 === j ? void 0 : j.name,
                    isThisClient:
                      null === j || void 0 === j ? void 0 : j.isThisClient,
                    makeActive:
                      null === j || void 0 === j ? void 0 : j.makeActive,
                    userRef: j.isThisClient ? n : null,
                    clientId: n,
                  };
            let i = w;
            var t, o;
            null !== j && void 0 !== j && j.isThisClient
              ? null === i ||
                void 0 === i ||
                null === (t = i.clientSpecificCycle) ||
                void 0 === t ||
                t.push(s)
              : null === i ||
                void 0 === i ||
                null === (o = i.allClientsCycle) ||
                void 0 === o ||
                o.push(s);
            k(i), T(1), V(j.makeActive), $(j.isThisClient), h(!1), I(s), y(!1);
          },
          fe = async () => {
            var e;
            let l = null;
            if (null !== A && void 0 !== A && A.global) {
              try {
                W(!0),
                  await a.Z.put("workoutpnp/cycles/".concat(A._id), {
                    clientId: n,
                  }),
                  W(!1),
                  P(!1),
                  ie(!1),
                  me(),
                  te(!0),
                  t(A);
              } catch (u) {
                W(!1), H(!0);
              }
              return;
            }
            if (
              (() => {
                var e;
                let l = !1,
                  s = [];
                return (
                  null === A ||
                    void 0 === A ||
                    null === (e = A.routineRefs) ||
                    void 0 === e ||
                    e.forEach((e, i) => {
                      var n, t, o;
                      return l ||
                        (null !== e && void 0 !== e && e.restDay) ||
                        void 0 !=
                          (null === e || void 0 === e
                            ? void 0
                            : e.sessionThemeRef)
                        ? l ||
                          "" != (null === e || void 0 === e ? void 0 : e.name)
                          ? (l ||
                              (null !== e && void 0 !== e && e.restDay) ||
                              s.push(
                                null === e || void 0 === e ? void 0 : e.name
                              ),
                            l ||
                            (null !== e && void 0 !== e && e.restDay) ||
                            0 !=
                              (null === e ||
                              void 0 === e ||
                              null === (n = e.exercises) ||
                              void 0 === n
                                ? void 0
                                : n.length)
                              ? (l ||
                                  null === e ||
                                  void 0 === e ||
                                  null === (t = e.exercises) ||
                                  void 0 === t ||
                                  t.forEach((e, s) => {
                                    if (
                                      "-" ===
                                      (null === e || void 0 === e
                                        ? void 0
                                        : e.exerciseInfoRef)
                                    )
                                      return (
                                        L({
                                          message:
                                            "Please enter valid exercise name",
                                          index: s,
                                        }),
                                        F(i),
                                        U(!1),
                                        P(!0),
                                        void (l = !0)
                                      );
                                  }),
                                void (
                                  l ||
                                  null === (o = e.exercises) ||
                                  void 0 === o ||
                                  o.forEach((e, s) => {
                                    var i;
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
                                            L({
                                              message:
                                                "Second value of weight cannot be less than first one",
                                              index: s,
                                            }),
                                            void P(!0))
                                          : e.suggestedRepRange.length > 1 &&
                                            null != e.suggestedRepRange[0] &&
                                            null != e.suggestedRepRange[1] &&
                                            parseInt(e.suggestedRepRange[0]) >
                                              parseInt(e.suggestedRepRange[1])
                                          ? ((l = !0),
                                            L({
                                              message:
                                                "Second value of reps cannot be less than first one",
                                              index: s,
                                            }),
                                            void P(!0))
                                          : e.suggestedRIRRange.length > 1 &&
                                            null != e.suggestedRIRRange[0] &&
                                            null != e.suggestedRIRRange[1] &&
                                            parseInt(e.suggestedRIRRange[0]) >
                                              parseInt(e.suggestedRIRRange[1])
                                          ? ((l = !0),
                                            L({
                                              message:
                                                "Second value of RIR cannot be less than first one",
                                              index: s,
                                            }),
                                            void P(!0))
                                          : void 0
                                      );
                                  })
                                ))
                              : (F(i),
                                G("Please add atleast one exercise"),
                                (l = !0),
                                void U(!0)))
                          : (F(i),
                            G("Please enter valid routine name"),
                            (l = !0),
                            void U(!0))
                        : (F(i),
                          G("Please pick session theme"),
                          (l = !0),
                          void U(!0));
                    }),
                  new Set(s).size !== s.length &&
                    (G("Routine names must be unique"), (l = !0), U(!0)),
                  l
                );
              })()
            )
              return;
            const s = { ...A },
              i = null === s || void 0 === s ? void 0 : s.routineRefs.length,
              o = {
                ...s,
                routineRefs: s.routineRefs.filter(
                  (e) => 1 != (null === e || void 0 === e ? void 0 : e.restDay)
                ),
              };
            let d = JSON.parse(
              JSON.stringify({
                ...s,
                routines: o.routineRefs.map(
                  (e) => (0 == e.restDay && delete e.restDay, e)
                ),
                totalRoutines: i,
              })
            );
            (d.routineRefs = [...d.routines]),
              null === d ||
                void 0 === d ||
                null === (e = d.routineRefs) ||
                void 0 === e ||
                e.map((e) => {
                  var l;
                  null === e ||
                    void 0 === e ||
                    null === (l = e.exercises) ||
                    void 0 === l ||
                    l.forEach((e) => {
                      "number" ==
                        typeof (null === e || void 0 === e ? void 0 : e._id) &&
                        (null === e || void 0 === e || delete e._id);
                    });
                });
            try {
              if ((W(!0), 1 == (null === d || void 0 === d ? void 0 : d._id))) {
                var c;
                const e = await a.Z.post("workoutpnp/cycles", { ...d });
                e &&
                  null !== A &&
                  void 0 !== A &&
                  A.makeActive &&
                  t(null === e || void 0 === e ? void 0 : e.data),
                  (l =
                    null === e ||
                    void 0 === e ||
                    null === (c = e.data) ||
                    void 0 === c
                      ? void 0
                      : c._id);
              } else {
                const e = await a.Z.put("workoutpnp/cycles/".concat(A._id), {
                  routines: d.routines,
                  isThisClient: X,
                  totalRoutines: i,
                  makeActive: Q,
                  clientId: n,
                });
                var r;
                if (((l = null === A || void 0 === A ? void 0 : A._id), e))
                  if (e.data.cycleRef) {
                    if (A.makeActive)
                      t(
                        null === (r = e.data) || void 0 === r
                          ? void 0
                          : r.updatedCycle
                      );
                  } else t(!1);
              }
              W(!1), P(!1), ie(!1), me(l), te(!0);
            } catch (u) {
              W(!1), H(!0);
            }
          };
        return B || J
          ? (0, r.jsx)(b.Z, {})
          : M
          ? (0, r.jsx)("div", {
              className: "cycle-modal-loading",
              children: (0, r.jsx)(c.Z, {}),
            })
          : (0, r.jsxs)("div", {
              className: re
                ? "cycle-modal container darken"
                : "cycle-modal container",
              children: [
                (0, r.jsx)(u, {
                  numDays: (0, g.Y)(
                    null === A || void 0 === A ? void 0 : A.routineRefs
                  ),
                  cycleDropdown: w,
                  setSelectedCycle: T,
                  selectedCycleId: D,
                  addCycle: () => {
                    h(!0), y(!0);
                  },
                  cloneCycle: () => {
                    p(structuredClone({ ...j, cycle: A })), h(!0), y(!0);
                  },
                  showReorder: () => {
                    ue(!0);
                  },
                }),
                E
                  ? "Please Select A Cycle"
                  : (0, r.jsxs)(r.Fragment, {
                      children: [
                        (0, r.jsx)(m, {
                          cycleRoutines:
                            null === A || void 0 === A ? void 0 : A.routineRefs,
                          selectedDay: _,
                          setSelectedDay: F,
                          addWorkout: () => {
                            he(!1);
                          },
                          addRestDay: () => {
                            he(!0);
                          },
                          deleteDay: (e) => {
                            var l;
                            const s = { ...A };
                            null === (l = s.routineRefs) ||
                              void 0 === l ||
                              l.splice(e, 1),
                              (s.routineRefs = s.routineRefs
                                .sort(
                                  (e, l) =>
                                    (null === e || void 0 === e
                                      ? void 0
                                      : e.dayNumber) -
                                    (null === l || void 0 === l
                                      ? void 0
                                      : l.dayNumber)
                                )
                                .map((e, l) => ((e.dayNumber = l + 1), e))),
                              F(_ - 1),
                              I(s);
                          },
                          cloneDay: (e) => {
                            const l = { ...A };
                            if (l.routineRefs.length < 7) {
                              const s = l.routineRefs[e];
                              s.restDay
                                ? he(!0)
                                : (l.routineRefs.push({
                                    name: s.name + " copy",
                                    restDay: s.isRestDay,
                                    dayNumber: l.routineRefs.length + 1,
                                    exercises: s.exercises,
                                    sessionThemeRef: s.sessionThemeRef,
                                  }),
                                  I(l));
                            }
                          },
                          global:
                            null === A || void 0 === A ? void 0 : A.global,
                        }),
                        K
                          ? (0, r.jsx)("small", {
                              className: "message error",
                              children: Y,
                            })
                          : ne
                          ? (0, r.jsx)("small", {
                              className: "message success",
                              children: "Saved cycle successfully",
                            })
                          : (0, r.jsx)(r.Fragment, {}),
                        0 ==
                          (null === A ||
                          void 0 === A ||
                          null === (l = A.routineRefs) ||
                          void 0 === l
                            ? void 0
                            : l.length) ||
                        _ + 1 >
                          (null === A ||
                          void 0 === A ||
                          null === (s = A.routineRefs) ||
                          void 0 === s
                            ? void 0
                            : s.length)
                          ? (0, r.jsx)("div", {
                              children: "Please add or select routines",
                            })
                          : (0, r.jsx)(R, {
                              sessionThemes: oe,
                              routine:
                                null === A || void 0 === A
                                  ? void 0
                                  : A.routineRefs[_],
                              setRoutine: (e) =>
                                ((e, l) => {
                                  const s = { ...A };
                                  (s.routineRefs[l] = e), I(s);
                                })(e, _),
                              exerciseError: O,
                              exerciseErrorMessage: z,
                              global:
                                null === A || void 0 === A ? void 0 : A.global,
                              isThisClient: X,
                            }),
                        (0, r.jsxs)("div", {
                          className: "save-button-container",
                          children: [
                            null !== A && void 0 !== A && A.global
                              ? (0, r.jsx)(r.Fragment, {})
                              : (0, r.jsx)("div", {
                                  className: "make-active-div",
                                  children: (0, r.jsxs)("label", {
                                    className: "container",
                                    children: [
                                      (0, r.jsx)("span", {
                                        className: "text",
                                        children: "Make Active",
                                      }),
                                      (0, r.jsx)("input", {
                                        type: "checkbox",
                                        onChange: () => {
                                          V(!Q);
                                        },
                                        checked: Q,
                                      }),
                                      (0, r.jsx)("span", {
                                        className: "checkmark",
                                      }),
                                    ],
                                  }),
                                }),
                            null !== A && void 0 !== A && A.global
                              ? (0, r.jsx)(r.Fragment, {})
                              : (0, r.jsxs)("div", {
                                  className: "toggle-div",
                                  children: [
                                    (0, r.jsx)("div", {
                                      children: "This Client",
                                    }),
                                    (0, r.jsxs)("label", {
                                      className: "switch",
                                      children: [
                                        (0, r.jsx)("input", {
                                          type: "checkbox",
                                          onChange: () => {
                                            $(!X);
                                          },
                                          checked: !X,
                                        }),
                                        (0, r.jsx)("span", {
                                          class: "slider round",
                                        }),
                                      ],
                                    }),
                                    (0, r.jsx)("div", {
                                      children: "All Clients",
                                    }),
                                  ],
                                }),
                            (0, r.jsxs)("div", {
                              className: "d-flex",
                              children: [
                                null !== A && void 0 !== A && A.global
                                  ? (0, r.jsx)(o.Z, {
                                      classNames: "action-button",
                                      text: "Make active",
                                      color: "green",
                                      size: "m",
                                      onClick: fe,
                                    })
                                  : (0, r.jsx)(o.Z, {
                                      classNames: "action-button",
                                      text: "Save Cycle",
                                      color: "green",
                                      size: "m",
                                      onClick: fe,
                                    }),
                                1 == A._id ||
                                (null !== A && void 0 !== A && A.global)
                                  ? (0, r.jsx)(r.Fragment, {})
                                  : (0, r.jsx)(o.Z, {
                                      classNames: "action-button",
                                      text: "Delete Cycle",
                                      color: "red",
                                      size: "m",
                                      onClick: () => {
                                        ce(!0);
                                      },
                                    }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                (0, r.jsx)("div", {
                  children: (0, r.jsx)(d.Z, {
                    title: "Delete Cycle",
                    show: ae,
                    onHide: () => ce(!1),
                    width: "medium",
                    dark: !0,
                    children: (0, r.jsxs)("div", {
                      children: [
                        (0, r.jsx)("p", {
                          children:
                            "Are you sure you want to delete the Cycle?",
                        }),
                        (0, r.jsxs)("div", {
                          className: "d-flex",
                          children: [
                            (0, r.jsx)(o.Z, {
                              text: "Yes",
                              color: "green",
                              size: "s",
                              onClick: async () => {
                                try {
                                  await a.Z.put(
                                    "workoutpnp/cycles/".concat(A._id),
                                    { isActive: !1 }
                                  );
                                  T(-1), ce(!1), me();
                                } catch (l) {
                                  var e;
                                  if (
                                    (ce(!1),
                                    405 ==
                                      (null === l ||
                                      void 0 === l ||
                                      null === (e = l.response) ||
                                      void 0 === e
                                        ? void 0
                                        : e.status))
                                  )
                                    return (
                                      G(
                                        "This cycle is assigned to a user, so it can't be deleted."
                                      ),
                                      void U(!0)
                                    );
                                  q(!0);
                                }
                              },
                            }),
                            (0, r.jsx)(o.Z, {
                              text: "No",
                              color: "red",
                              size: "s",
                              onClick: () => {
                                ce(!1);
                              },
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
                (0, r.jsx)("div", {
                  children: (0, r.jsx)(d.Z, {
                    title: "Reorder Cycle",
                    show: re,
                    onHide: () => {
                      (() => {
                        var e;
                        const l = { ...A };
                        null === l ||
                          void 0 === l ||
                          null === (e = l.routineRefs) ||
                          void 0 === e ||
                          e.forEach(function (e, l) {
                            e.dayNumber = l + 1;
                          }),
                          I(l);
                      })(),
                        ue(!1);
                    },
                    width: "medium",
                    className: "reorder-modal",
                    dark: !0,
                    children: (0, r.jsx)("div", {
                      className: "reorder-div",
                      children: (0, r.jsx)(x, {
                        actualCycle: A,
                        setShowReorderModal: ue,
                        setSelectedCycle: (e) => {
                          const l = { ...A };
                          (l.routineRefs = e), I(l);
                        },
                      }),
                    }),
                  }),
                }),
                (0, r.jsxs)(d.Z, {
                  title: "Set Cycle Name",
                  show: v || f,
                  width: "medium",
                  onHide: () => {
                    h(!1), y(!1);
                  },
                  className: "cycle-name-input-modal",
                  dark: !0,
                  children: [
                    (0, r.jsxs)("div", {
                      className: "cycle-input-container",
                      children: [
                        (0, r.jsx)("input", {
                          type: "text",
                          className: "cycle-name-input",
                          value: null === j || void 0 === j ? void 0 : j.name,
                          onChange: (e) => {
                            var l;
                            return p({
                              ...j,
                              name:
                                null === e ||
                                void 0 === e ||
                                null === (l = e.target) ||
                                void 0 === l
                                  ? void 0
                                  : l.value,
                            });
                          },
                        }),
                        (0, r.jsx)(o.Z, {
                          text: "Save Cycle",
                          color: "green",
                          classNames: "cycle-name-submit-button",
                          size: "s",
                          onClick: () => {
                            xe();
                          },
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className: "modal-cycle-options",
                      children: [
                        (0, r.jsx)("div", {
                          className: "make-active-div",
                          children: (0, r.jsxs)("label", {
                            className: "container",
                            children: [
                              (0, r.jsx)("span", {
                                className: "text",
                                children: "Make Active",
                              }),
                              (0, r.jsx)("input", {
                                type: "checkbox",
                                onChange: () => {
                                  p({
                                    ...j,
                                    makeActive: !(
                                      null !== j &&
                                      void 0 !== j &&
                                      j.makeActive
                                    ),
                                  });
                                },
                                checked:
                                  null === j || void 0 === j
                                    ? void 0
                                    : j.makeActive,
                              }),
                              (0, r.jsx)("span", { className: "checkmark" }),
                            ],
                          }),
                        }),
                        (0, r.jsxs)("div", {
                          className: "toggle-div",
                          children: [
                            (0, r.jsx)("div", { children: "This Client" }),
                            (0, r.jsxs)("label", {
                              className: "switch",
                              children: [
                                (0, r.jsx)("input", {
                                  type: "checkbox",
                                  onChange: () => {
                                    p({
                                      ...j,
                                      isThisClient: !(
                                        null !== j &&
                                        void 0 !== j &&
                                        j.isThisClient
                                      ),
                                    });
                                  },
                                  checked: !(
                                    null !== j &&
                                    void 0 !== j &&
                                    j.isThisClient
                                  ),
                                }),
                                (0, r.jsx)("span", {
                                  className: "slider round",
                                }),
                              ],
                            }),
                            (0, r.jsx)("div", { children: "All Clients" }),
                          ],
                        }),
                      ],
                    }),
                    se
                      ? (0, r.jsx)("small", {
                          className: "message error",
                          children: Y,
                        })
                      : (0, r.jsx)(r.Fragment, {}),
                  ],
                }),
              ],
            });
      };
      var S = s(1112),
        w = s(8347);
      const k = (e) => {
        let { clientId: l, latestCompletedSession: s } = e;
        const [n, t] = (0, i.useState)([]),
          [u, m] = (0, i.useState)(!1),
          [h, x] = (0, i.useState)(!1),
          [f, y] = (0, i.useState)(!1),
          [g, j] = (0, i.useState)(!1),
          [p, R] = (0, i.useState)(!1),
          [N, b] = (0, i.useState)(!0),
          [k, D] = (0, i.useState)(!1),
          [T, E] = (0, i.useState)([]),
          [Z, A] = (0, i.useState)(),
          [I, _] = (0, i.useState)(0);
        (0, i.useEffect)(() => {
          (async () => {
            x(!0);
            try {
              var e, s, i, n;
              const o = await a.Z.get(
                "trainers/sessions/remaining?userRef=".concat(l)
              );
              let d =
                null === o ||
                void 0 === o ||
                null === (e = o.data) ||
                void 0 === e ||
                null === (s = e.sessions) ||
                void 0 === s
                  ? void 0
                  : s.sort((e, l) => new Date(e.date) - new Date(l.date));
              const c =
                null === o ||
                void 0 === o ||
                null === (i = o.data) ||
                void 0 === i
                  ? void 0
                  : i.offset;
              _(c),
                null === d ||
                  void 0 === d ||
                  d.forEach((e) => {
                    e.editing = !1;
                  }),
                t(d),
                E(
                  null === o ||
                    void 0 === o ||
                    null === (n = o.data) ||
                    void 0 === n
                    ? void 0
                    : n.sessionThemes
                ),
                y(!1),
                x(!1);
            } catch (f) {
              y("Unable fetch client details, please try again later"), x(!1);
            }
          })(),
            (async () => {
              j(!0);
              try {
                const e = await a.Z.get(
                  "/workoutpnp/cycles/fetch?clientId=".concat(l)
                );
                m(null === e || void 0 === e ? void 0 : e.data), j(!1), R(!1);
              } catch (s) {
                var e;
                404 ===
                (null === s ||
                void 0 === s ||
                null === (e = s.response) ||
                void 0 === e
                  ? void 0
                  : e.status)
                  ? R("Please Select a Cycle")
                  : R(!0),
                  j(!1);
              }
            })();
        }, []),
          (0, i.useEffect)(() => {
            let e = !1;
            null === n ||
              void 0 === n ||
              n.forEach((l) => {
                if (null !== l && void 0 !== l && l.editing)
                  return (e = !0), void b(!1);
              }),
              e || b(!0);
          }, [n]);
        (0, i.useEffect)(() => {
          (async () => {
            let e = I;
            null === I && (_(0), (e = 0));
            const l = new Date().getTimezoneOffset(),
              i = new Date(new Date().getTime() + 60 * (l - e) * 1e3),
              n = new Date(
                new Date(
                  null === s || void 0 === s ? void 0 : s.date
                ).getTime() +
                  60 * l * 1e3
              );
            s &&
            (0, w.default)(i).toISOString() === (0, w.default)(n).toISOString()
              ? (n.setDate(n.getDate() + 1), A(n))
              : A(i);
          })();
        }, [s, I]);
        (Date.prototype.addDays = function (e) {
          var l = new Date(this.valueOf());
          return l.setDate(l.getDate() + e), l;
        }),
          (0, i.useEffect)(() => {
            k &&
              setTimeout(() => {
                D(!1);
              }, 5e3);
          }, [k]);
        const F = () => {
            const e = new Date().getTimezoneOffset(),
              l = new Date(new Date().getTime() + 60 * (e - I) * 1e3);
            let i = l.toISOString(),
              t = null,
              o = 0,
              d = null,
              a = 0;
            if (n.length > 0) {
              var c, r;
              let e = 0;
              null === n ||
                void 0 === n ||
                n.forEach((l, s, i) => {
                  var n;
                  s > 0 &&
                    new Date(null === l || void 0 === l ? void 0 : l.date) >
                      new Date(
                        null === (n = i[e]) || void 0 === n ? void 0 : n.date
                      ) &&
                    (e = s);
                }),
                (i = new Date(
                  null === (c = n[e]) || void 0 === c ? void 0 : c.date
                )),
                (t =
                  null === (r = n[e]) || void 0 === r ? void 0 : r.routineRef);
            } else
              s &&
                ((i = new Date(
                  new Date(
                    null === s || void 0 === s ? void 0 : s.date
                  ).getTime() +
                    60 * e * 1e3
                )),
                (t = null === s || void 0 === s ? void 0 : s.routineRef));
            if (u) {
              var v;
              null === (v = u.routineRefs) ||
                void 0 === v ||
                v.sort((e, l) => e.dayNumber - l.dayNumber);
              let e = null;
              t &&
                (null === u ||
                  void 0 === u ||
                  u.routineRefs.forEach((l, s) => {
                    t === l._id &&
                      ((e = s),
                      (a =
                        (s + 1) %
                        (null === u || void 0 === u
                          ? void 0
                          : u.routineRefs.length)));
                  })),
                null != e
                  ? ((o =
                      Number(
                        null === u || void 0 === u
                          ? void 0
                          : u.routineRefs[a].dayNumber
                      ) -
                      Number(
                        null === u || void 0 === u
                          ? void 0
                          : u.routineRefs[e].dayNumber
                      )),
                    o <= 0 &&
                      (o += Number(
                        null === u || void 0 === u ? void 0 : u.totalRoutines
                      )))
                  : ((o = Number(
                      null === u || void 0 === u
                        ? void 0
                        : u.routineRefs[a].dayNumber
                    )),
                    s || 0 !== n.length || (o -= 1)),
                (d = null === u || void 0 === u ? void 0 : u.routineRefs[a]);
            } else (n.length > 0 || s) && (o = 1);
            let m = new Date(i).addDays(o);
            m < l && (m = l);
            return { finalDate: m, currentRoutine: d, currentRoutineIndex: a };
          },
          O = async (e, s) => {
            try {
              const i = new Date(
                (0, w.default)(e).getTime() -
                  60 * (new Date().getTimezoneOffset() - I) * 1e3
              );
              let o = structuredClone({ ...s });
              (o.date = i),
                (o.userRef = l),
                (o.routineRef = o._id),
                delete o.dayNumber,
                delete o._id;
              const d = await a.Z.post("/workoutpnp/sessions/add", o),
                c = null === d || void 0 === d ? void 0 : d.data,
                r = n;
              r.push(c), t(r);
            } catch (f) {
              y(!0), x(!1);
            }
          },
          [P, z] = (0, i.useState)(!1);
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(d.Z, {
              className: "workout-cycle-modal",
              title: "Edit Cycle",
              show: P,
              width: "fullwidth",
              onHide: () => {
                z(!1);
              },
              children: (0, r.jsx)(C, {
                clientId: l,
                setCycle: (e) => {
                  e ? (m(e), R(!1), j(!1)) : m(!1);
                },
              }),
            }),
            (0, r.jsxs)("div", {
              className: "workout-remaining-container",
              children: [
                (0, r.jsx)("div", {
                  className: "workout-remaining-title",
                  children: "Remaining",
                }),
                (0, r.jsxs)("div", {
                  className: "open-cycle",
                  onClick: () => {
                    z(!0);
                  },
                  children: [
                    g
                      ? (0, r.jsx)(c.Z, {})
                      : p || !u
                      ? (0, r.jsx)("div", { children: "Please Select a Cycle" })
                      : (0, r.jsxs)(r.Fragment, {
                          children: [
                            (0, r.jsx)(v.JO, {
                              icon: "fa6-solid:repeat",
                              height: 25,
                              width: 25,
                            }),
                            (0, r.jsx)("div", {
                              className: "cycle-breif",
                              children: (0, r.jsxs)("div", {
                                children: [
                                  "Cycle : ",
                                  null === u || void 0 === u ? void 0 : u.name,
                                ],
                              }),
                            }),
                          ],
                        }),
                    (0, r.jsx)(v.JO, {
                      icon: "clarity:note-edit-line",
                      height: 25,
                      width: 25,
                      className: "edit-icon",
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: "d-flex flex-direction-row",
                  children: [
                    (0, r.jsx)(o.Z, {
                      disabled: p,
                      type: "button",
                      classNames: "add-session-btn",
                      text: "+ Add",
                      onClick: () => {
                        if (!N) return void D(!0);
                        const e = F();
                        ((e) => {
                          var s, i, o, d, a, c;
                          const r = {
                            routineRef:
                              null === e ||
                              void 0 === e ||
                              null === (s = e.routineRef) ||
                              void 0 === s
                                ? void 0
                                : s._id,
                            name:
                              null !==
                                (i =
                                  null === e ||
                                  void 0 === e ||
                                  null === (o = e.routineRef) ||
                                  void 0 === o
                                    ? void 0
                                    : o.name) && void 0 !== i
                                ? i
                                : "New Session",
                            exercises:
                              null !==
                                (d =
                                  null === e ||
                                  void 0 === e ||
                                  null === (a = e.routineRef) ||
                                  void 0 === a
                                    ? void 0
                                    : a.exercises) && void 0 !== d
                                ? d
                                : [],
                            date: null === e || void 0 === e ? void 0 : e.date,
                            userRef: l,
                            editing: !0,
                            sessionThemeRef:
                              null === e ||
                              void 0 === e ||
                              null === (c = e.routineRef) ||
                              void 0 === c
                                ? void 0
                                : c.sessionThemeRef,
                          };
                          t([...n, r]);
                        })({
                          routineRef:
                            null === e || void 0 === e
                              ? void 0
                              : e.currentRoutine,
                          date:
                            null === e || void 0 === e ? void 0 : e.finalDate,
                        });
                      },
                    }),
                    u &&
                      (0, r.jsx)(o.Z, {
                        disabled: p,
                        type: "button",
                        classNames: "add-session-btn add-cycle-session-btn",
                        text: "+ Cycle",
                        onClick: async () => {
                          if (!N) return void D(!0);
                          x(!0);
                          let e = 1;
                          for (; e; ) {
                            const l = F();
                            await O(
                              null === l || void 0 === l ? void 0 : l.finalDate,
                              null === l || void 0 === l
                                ? void 0
                                : l.currentRoutine
                            ),
                              (null === l || void 0 === l
                                ? void 0
                                : l.currentRoutineIndex) ===
                                (null === u || void 0 === u
                                  ? void 0
                                  : u.routineRefs.length) -
                                  1 && (e = 0);
                          }
                          x(!1);
                        },
                      }),
                  ],
                }),
              ],
            }),
            k
              ? (0, r.jsx)("small", {
                  className: "message error",
                  children: "Please save current session before adding",
                })
              : (0, r.jsx)(r.Fragment, {}),
            h
              ? (0, r.jsx)(c.Z, {})
              : 0 == n.length
              ? (0, r.jsx)("h5", {
                  className: "d-flex justify-content-center p-4",
                  children: "Add a session by clicking the add button above",
                })
              : (0, r.jsx)(S.Z, {
                  showAddButton: N,
                  setAddErrorMessage: D,
                  loading: h,
                  error: f,
                  sessions: n,
                  completed: !1,
                  clientId: l,
                  deleteSession: (e) => {
                    const l = [...n];
                    l.splice(e, 1), t(l);
                  },
                  sessionThemes: T,
                  setSessions: t,
                  minDate: Z,
                  timezone: I,
                }),
          ],
        });
      };
      var D = s(5831);
      const T = () => {
        const e = (0, n.TH)(),
          [l, s] = ((0, n.k6)(), (0, i.useState)(!1)),
          [o, d] = (0, i.useState)(!1),
          [a, u] = (0, i.useState)(0),
          [v, m] = (0, i.useState)({}),
          [h, x] = (0, i.useState)(null);
        return (
          (0, i.useEffect)(() => {
            const l = e.pathname.split("/")[2];
            u(l), m(["No program", [e.state]]);
          }, []),
          l || 0 === a
            ? (0, r.jsx)(c.Z, {})
            : o
            ? (0, r.jsx)(f.Z, {})
            : (0, r.jsxs)("div", {
                className: "workout container-xl pb-5",
                children: [
                  (0, r.jsx)(D.Z, {
                    showAccordian: !1,
                    showBackButton: !0,
                    showContainer: !1,
                    clientList: [v],
                    showWorkoutButton: !1,
                    showLastWorkout: !1,
                  }),
                  (0, r.jsx)(t.Z, {
                    clientId: a,
                    client: e.state,
                    setLatestCompletedSession: x,
                  }),
                  (0, r.jsx)(k, { clientId: a, latestCompletedSession: h }),
                ],
              })
        );
      };
    },
  },
]);
//# sourceMappingURL=6.ff035f61.chunk.js.map
