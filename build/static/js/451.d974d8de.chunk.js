"use strict";
(self.webpackChunktrainer_dashboard =
  self.webpackChunktrainer_dashboard || []).push([
  [451],
  {
    32: (e, a, s) => {
      s.d(a, { Z: () => r });
      var c = s(2791),
        i = s(8652),
        n = s(7151),
        l = s(184);
      const r = (e) => {
        let { classNames: a = "" } = e;
        const { currentUser: s } = i.default,
          r = (0, c.useContext)(n.Z);
        return (0, l.jsx)(l.Fragment, {
          children: (0, l.jsxs)("div", {
            className: "profile-image-text ".concat(a),
            children: [
              (0, l.jsx)("div", {
                className: "profile-container",
                children: (0, l.jsx)("img", {
                  className: "profile-image",
                  src: null === r || void 0 === r ? void 0 : r.profilePicture,
                }),
              }),
              (0, l.jsxs)("div", {
                className: "name-container",
                children: [
                  (0, l.jsx)("h6", {
                    className: "fullname",
                    children:
                      null === s || void 0 === s ? void 0 : s.displayName,
                  }),
                  (0, l.jsx)("p", {
                    className: "username",
                    children: null === s || void 0 === s ? void 0 : s.email,
                  }),
                ],
              }),
            ],
          }),
        });
      };
    },
    5451: (e, a, s) => {
      s.r(a), s.d(a, { default: () => o });
      s(2791);
      var c = s(1523),
        i = s(4880),
        n = s(9036),
        l = s(32),
        r = s(2711),
        t = s(184);
      const o = (e) => {
        let { match: a } = e;
        console.log(a);
        return (0, t.jsx)("div", {
          className: "profile-page",
          children: (0, t.jsx)("div", {
            className: "profile-page-container container",
            children: (0, t.jsxs)("div", {
              className: "profile-page-container-content",
              children: [
                (0, t.jsxs)("div", {
                  className: "profile-sidebar",
                  children: [
                    (0, t.jsx)(l.Z, {}),
                    " ",
                    (0, t.jsx)("ul", {
                      className: "side-profile-nav",
                      children: n.Z.map((e, s) =>
                        (0, t.jsx)(
                          "li",
                          {
                            className: "side-nav",
                            children: (0, t.jsxs)(c.OL, {
                              activeClassName: "active",
                              className: "side-nav-link",
                              to: "".concat(a.url, "/").concat(e.path),
                              exact: e.exact,
                              children: [
                                (0, t.jsx)(r.JO, {
                                  height: 35,
                                  color: "white",
                                  icon: e.icon,
                                }),
                                (0, t.jsx)("span", {
                                  className: "p-1 ps-3",
                                  children: e.name,
                                }),
                              ],
                            }),
                          },
                          s
                        )
                      ),
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className: "profile-component-container",
                  children: n.Z.map((e, s) =>
                    (0, t.jsx)(
                      i.AW,
                      {
                        exact: !0,
                        path: "".concat(a.path, "/").concat(e.path),
                        render: (a) => (0, t.jsx)(e.component, { ...a }),
                      },
                      s
                    )
                  ),
                }),
              ],
            }),
          }),
        });
      };
    },
  },
]);
//# sourceMappingURL=451.d974d8de.chunk.js.map
