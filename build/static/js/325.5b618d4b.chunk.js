"use strict";
(self.webpackChunktrainer_dashboard =
  self.webpackChunktrainer_dashboard || []).push([
  [325],
  {
    7325: (t, e, s) => {
      s.r(e), s.d(e, { default: () => u });
      var n = s(2791),
        a = s(184);
      var i = s(8133),
        r = s(6085),
        o = s(4542),
        c = s(5831),
        d = s(7151);
      const l = () => {
        const [t, e] = (0, n.useState)([]),
          [s, l] = (0, n.useState)(),
          [h, u] = (0, n.useState)(),
          { clientList: f, setClientList: p } = (0, n.useContext)(d.Z);
        (0, n.useEffect)(() => {
          (async () => {
            try {
              const t = await o.Z.get("/trainers/users");
              p([[f[0][0], null === t || void 0 === t ? void 0 : t.data]]);
            } catch (s) {
              l("unable fetch client list, please try again later");
            }
          })();
        }, []);
        const x = (0, a.jsx)("div", {
          className: "main-dashboard-container padding-top",
          children: (0, a.jsx)(c.Z, {
            showAccordian: !0,
            showBackButton: !1,
            clientList: f,
            showContainer: !0,
            showWorkoutButton: !0,
            showStepsCount: !0,
            showLastWorkout: !0,
          }),
        });
        return h ? (0, a.jsx)(i.Z, {}) : s ? (0, a.jsx)(r.Z, {}) : x;
      };
      var h = s(4880);
      const u = () => {
        const t = (0, n.useContext)(d.Z),
          e = (0, h.k6)();
        return (
          (0, n.useEffect)(() => {
            t.profileRef || e.push("/trainer-onboarding");
          }, [t.profileRef]),
          (0, a.jsx)(a.Fragment, {
            children: t.verified
              ? (0, a.jsx)(l, {})
              : (0, a.jsxs)("div", {
                  children: [
                    (0, a.jsx)("div", {
                      className: "d-flex justify-content-center",
                      children: (0, a.jsx)("img", {
                        src: "https://storage.googleapis.com/evolv-assets/MVP/waiting.png",
                        height: "200px",
                        width: "200px",
                      }),
                    }),
                    (0, a.jsxs)("h1", {
                      className: "d-flex justify-content-center pt-5 pb-3",
                      children: ["Verification Pending", " "],
                    }),
                  ],
                }),
          })
        );
      };
    },
  },
]);
//# sourceMappingURL=325.5b618d4b.chunk.js.map
