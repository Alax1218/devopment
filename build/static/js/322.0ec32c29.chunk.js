"use strict";
(self.webpackChunktrainer_dashboard =
  self.webpackChunktrainer_dashboard || []).push([
  [322],
  {
    8074: (t, e, r) => {
      r.d(e, { FU5: () => d, zmo: () => f, tfk: () => h });
      var a = r(2791),
        n = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        o = a.createContext && a.createContext(n),
        l = function () {
          return (
            (l =
              Object.assign ||
              function (t) {
                for (var e, r = 1, a = arguments.length; r < a; r++)
                  for (var n in (e = arguments[r]))
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t;
              }),
            l.apply(this, arguments)
          );
        },
        c = function (t, e) {
          var r = {};
          for (var a in t)
            Object.prototype.hasOwnProperty.call(t, a) &&
              e.indexOf(a) < 0 &&
              (r[a] = t[a]);
          if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
            var n = 0;
            for (a = Object.getOwnPropertySymbols(t); n < a.length; n++)
              e.indexOf(a[n]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(t, a[n]) &&
                (r[a[n]] = t[a[n]]);
          }
          return r;
        };
      function i(t) {
        return (
          t &&
          t.map(function (t, e) {
            return a.createElement(t.tag, l({ key: e }, t.attr), i(t.child));
          })
        );
      }
      function s(t) {
        return function (e) {
          return a.createElement(u, l({ attr: l({}, t.attr) }, e), i(t.child));
        };
      }
      function u(t) {
        var e = function (e) {
          var r,
            n = t.attr,
            o = t.size,
            i = t.title,
            s = c(t, ["attr", "size", "title"]),
            u = o || e.size || "1em";
          return (
            e.className && (r = e.className),
            t.className && (r = (r ? r + " " : "") + t.className),
            a.createElement(
              "svg",
              l(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                e.attr,
                n,
                s,
                {
                  className: r,
                  style: l(l({ color: t.color || e.color }, e.style), t.style),
                  height: u,
                  width: u,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              i && a.createElement("title", null, i),
              t.children
            )
          );
        };
        return void 0 !== o
          ? a.createElement(o.Consumer, null, function (t) {
              return e(t);
            })
          : e(n);
      }
      function h(t) {
        return s({
          tag: "svg",
          attr: { viewBox: "0 0 24 24" },
          child: [
            { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
            {
              tag: "path",
              attr: {
                d: "M17 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z",
              },
            },
          ],
        })(t);
      }
      function f(t) {
        return s({
          tag: "svg",
          attr: { viewBox: "0 0 24 24" },
          child: [
            { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
            {
              tag: "path",
              attr: {
                d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z",
              },
            },
          ],
        })(t);
      }
      function d(t) {
        return s({
          tag: "svg",
          attr: { viewBox: "0 0 24 24" },
          child: [
            { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
            {
              tag: "path",
              attr: {
                d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
              },
            },
          ],
        })(t);
      }
    },
  },
]);
//# sourceMappingURL=322.0ec32c29.chunk.js.map
