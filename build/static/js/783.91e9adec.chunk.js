"use strict";
(self.webpackChunktrainer_dashboard =
  self.webpackChunktrainer_dashboard || []).push([
  [783],
  {
    1298: (e, a, t) => {
      t.d(a, { Z: () => r });
      var n = t(2791),
        o = t(2711),
        c = t(7495),
        i = t(184);
      const r = (e) => {
        let {
          data: a,
          active: t = !1,
          headClick: r = !0,
          disabled: s = !1,
        } = e;
        const [l, d] = (0, n.useState)(t);
        return (0, i.jsx)("div", {
          className: "accordion-container",
          children: (0, i.jsx)("div", {
            className: "accordion",
            id: "accordionExample",
            children: (0, i.jsxs)(c.Z, {
              classNames: "card-container",
              children: [
                (0, i.jsxs)("div", {
                  className: "accordion-header ".concat(l ? "toggle" : ""),
                  children: [
                    (0, i.jsx)("p", {
                      className: "accordion-title",
                      onClick: () => {
                        r && d(!l);
                      },
                      children: null === a || void 0 === a ? void 0 : a.parent,
                    }),
                    s
                      ? null
                      : l
                      ? (0, i.jsx)(o.JO, {
                          icon: "akar-icons:chevron-up",
                          className: "down-carret",
                          onClick: () => {
                            d(!l);
                          },
                        })
                      : (0, i.jsx)(o.JO, {
                          icon: "akar-icons:chevron-down",
                          className: "down-carret",
                          onClick: () => {
                            d(!l);
                          },
                        }),
                  ],
                }),
                l
                  ? (0, i.jsx)("div", {
                      className: l ? "" : "collapse",
                      children: (0, i.jsx)(c.Z, {
                        classNames: "accordion-body ",
                        children: null === a || void 0 === a ? void 0 : a.child,
                      }),
                    })
                  : (0, i.jsx)(i.Fragment, {}),
              ],
            }),
          }),
        });
      };
    },
    7495: (e, a, t) => {
      t.d(a, { Z: () => c });
      var n = t(2791),
        o = t(184);
      const c = (e) => {
        let {
          children: a,
          classNames: t = "",
          border: c = "small",
          square: i = !1,
          shadowSize: r = "normal",
          cardTitle: s,
          cardElementRight: l,
          cardTitleClassNames: d = "",
          ...h
        } = e;
        const u = (0, n.useRef)(),
          [m, p] = (0, n.useState)(0),
          y = (0, n.useCallback)(() => {
            var e;
            const a =
              null === u ||
              void 0 === u ||
              null === (e = u.current) ||
              void 0 === e
                ? void 0
                : e.offsetWidth;
            p(a);
          }, []);
        return (
          (0, n.useEffect)(
            () => (
              y(),
              window.addEventListener("resize", y),
              () => {
                window.removeEventListener("resize", y);
              }
            ),
            []
          ),
          (0, o.jsxs)(o.Fragment, {
            children: [
              (s || l) &&
                (0, o.jsxs)("div", {
                  className: "d-flex justify-content-between",
                  children: [
                    s &&
                      (0, o.jsx)("p", {
                        className: "shadow-container-title ".concat(d),
                        children: s,
                      }),
                    l,
                  ],
                }),
              (0, o.jsx)("div", {
                ...h,
                ref: u,
                style: i ? { height: m, background: "white" } : {},
                className: ""
                  .concat(t, " shadow-div shadow-div-")
                  .concat(r, " border-")
                  .concat(c, " ")
                  .concat(i ? "center-fit" : ""),
                children: a,
              }),
            ],
          })
        );
      };
    },
    1783: (e, a, t) => {
      t.r(a), t.d(a, { default: () => i });
      t(2791), t(7495);
      var n = t(2711),
        o = t(1298),
        c = t(184);
      const i = () => {
        const e = [
          {
            parent:
              " I don\u2019t have a certification? Can I still use the Evolv App to train my clients?",
            child:
              "Yes, even without a certification, you can onboard the platform as a coach and invite your existing clients to join the app under your coaching.",
          },
          {
            parent:
              "I don\u2019t have a certification? Will I be able to host my profile on the app marketplace to scale my business?",
            child:
              "Currently, that won\u2019t be possible as we would want all initial coaches to be certified.",
          },
          {
            parent:
              "How will I collect payments from my clients using the app?",
            child:
              "You can create your programs once your profile is verified, and in your programs, you can mention the cost which the client will pay through the app. Once we receive the payment, we will deposit the amount directly to your bank account according to your convenience.",
          },
          {
            parent: "How many days will it take to get my profile verified?",
            child:
              "We will try our best to verify it within 1-2 days, but due to high traffic, it might take 3-5 working  days. Still you can start making your programs and complete your profile before the verification.",
          },
          {
            parent: "How do I make money on your platform as a coach?",
            child:
              "As of now there are 3 ways through which you can generate revenue.\t \n 1. Get more clients from the marketplace \t \n 2. Create and sell template plans to your following \t \n 3. Earn commission on the products from our online store",
          },
          {
            parent: "How do I create a workout program for my client?",
            child:
              "Once you are onboarded as a trainer, you can add your clients by inviting them through their email and then you can go to their workout page and then create a workout cycle that will be repeated weekly. Once you create the cycle, you can add the workout and rest days according to your client\u2019s needs. After adding the days, you can name them and the exercises, sets, reps, load and effort accordingly. Once your cycle is ready, you can assign it to your client.",
          },
        ];
        return (0, c.jsxs)("div", {
          className: "support-container",
          children: [
            (0, c.jsx)("p", { className: "heading", children: "Support" }),
            (0, c.jsxs)("div", {
              className: "faq",
              children: [
                (0, c.jsx)("p", { children: "Frequently asked parents" }),
                null === e || void 0 === e
                  ? void 0
                  : e.map((e, a) => (0, c.jsx)(o.Z, { data: e }, a)),
              ],
            }),
            (0, c.jsx)("p", { children: "Contact Support" }),
            (0, c.jsxs)("div", {
              className: "contact",
              children: [
                (0, c.jsxs)("div", {
                  className: "support-container",
                  children: [
                    (0, c.jsx)(n.JO, {
                      icon: "ant-design:phone-outlined",
                      height: 24,
                      className: "icon",
                    }),
                    (0, c.jsxs)("div", {
                      children: [
                        (0, c.jsx)("a", {
                          href: "tel:+919334444441",
                          children: (0, c.jsx)("p", {
                            children: "+91 - 9334444441",
                          }),
                        }),
                        (0, c.jsx)("a", {
                          href: "tel:+918290939833",
                          children: (0, c.jsx)("p", {
                            children: "+91 - 8290939833",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, c.jsxs)("div", {
                  className: "support-container",
                  children: [
                    (0, c.jsx)(n.JO, {
                      icon: "charm:mail",
                      height: 24,
                      className: "icon",
                    }),
                    (0, c.jsxs)("div", {
                      children: [
                        (0, c.jsx)("a", {
                          href: "mailto: contact@evolvfit.in",
                          children: (0, c.jsx)("p", {
                            children: "contact@evolvfit.in",
                          }),
                        }),
                        (0, c.jsx)("a", {
                          href: "mailto: evolv.contact@gmail.com",
                          children: (0, c.jsx)("p", {
                            children: "evolv.contact@gmail.com",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=783.91e9adec.chunk.js.map
