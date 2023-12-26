(self.webpackChunktrainer_dashboard =
  self.webpackChunktrainer_dashboard || []).push([
  [664],
  {
    8275: (e, t, r) => {
      var a,
        n = Object.create,
        i = Object.defineProperty,
        l = Object.getOwnPropertyDescriptor,
        o = Object.getOwnPropertyNames,
        s = Object.getPrototypeOf,
        c = Object.prototype.hasOwnProperty,
        d = (e, t, r, a) => {
          if ((t && "object" === typeof t) || "function" === typeof t)
            for (let n of o(t))
              c.call(e, n) ||
                n === r ||
                i(e, n, {
                  get: () => t[n],
                  enumerable: !(a = l(t, n)) || a.enumerable,
                });
          return e;
        },
        p = (e, t, r) => (
          ((e, t, r) => {
            t in e
              ? i(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: r,
                })
              : (e[t] = r);
          })(e, "symbol" !== typeof t ? t + "" : t, r),
          r
        ),
        h = {};
      ((e, t) => {
        for (var r in t) i(e, r, { get: t[r], enumerable: !0 });
      })(h, { default: () => g }),
        (e.exports = ((a = h), d(i({}, "__esModule", { value: !0 }), a)));
      var u = ((e, t, r) => (
        (r = null != e ? n(s(e)) : {}),
        d(
          !t && e && e.__esModule
            ? r
            : i(r, "default", { value: e, enumerable: !0 }),
          e
        )
      ))(r(2791));
      const m = "64px",
        b = {};
      class g extends u.Component {
        constructor() {
          super(...arguments),
            p(this, "mounted", !1),
            p(this, "state", { image: null }),
            p(this, "handleKeyPress", (e) => {
              ("Enter" !== e.key && " " !== e.key) || this.props.onClick();
            });
        }
        componentDidMount() {
          (this.mounted = !0), this.fetchImage(this.props);
        }
        componentDidUpdate(e) {
          const { url: t, light: r } = this.props;
          (e.url === t && e.light === r) || this.fetchImage(this.props);
        }
        componentWillUnmount() {
          this.mounted = !1;
        }
        fetchImage(e) {
          let { url: t, light: r, oEmbedUrl: a } = e;
          if (!u.default.isValidElement(r))
            if ("string" !== typeof r) {
              if (!b[t])
                return (
                  this.setState({ image: null }),
                  window
                    .fetch(a.replace("{url}", t))
                    .then((e) => e.json())
                    .then((e) => {
                      if (e.thumbnail_url && this.mounted) {
                        const r = e.thumbnail_url
                          .replace("height=100", "height=480")
                          .replace("-d_295x166", "-d_640");
                        this.setState({ image: r }), (b[t] = r);
                      }
                    })
                );
              this.setState({ image: b[t] });
            } else this.setState({ image: r });
        }
        render() {
          const {
              light: e,
              onClick: t,
              playIcon: r,
              previewTabIndex: a,
            } = this.props,
            { image: n } = this.state,
            i = u.default.isValidElement(e),
            l = {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
            o = {
              preview: {
                width: "100%",
                height: "100%",
                backgroundImage: n && !i ? "url(".concat(n, ")") : void 0,
                backgroundSize: "cover",
                backgroundPosition: "center",
                cursor: "pointer",
                ...l,
              },
              shadow: {
                background:
                  "radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)",
                borderRadius: m,
                width: m,
                height: m,
                position: i ? "absolute" : void 0,
                ...l,
              },
              playIcon: {
                borderStyle: "solid",
                borderWidth: "16px 0 16px 26px",
                borderColor: "transparent transparent transparent white",
                marginLeft: "7px",
              },
            },
            s = u.default.createElement(
              "div",
              { style: o.shadow, className: "react-player__shadow" },
              u.default.createElement("div", {
                style: o.playIcon,
                className: "react-player__play-icon",
              })
            );
          return u.default.createElement(
            "div",
            {
              style: o.preview,
              className: "react-player__preview",
              onClick: t,
              tabIndex: a,
              onKeyPress: this.handleKeyPress,
            },
            i ? e : null,
            r || s
          );
        }
      }
    },
  },
]);
//# sourceMappingURL=reactPlayerPreview.2600ea00.chunk.js.map
