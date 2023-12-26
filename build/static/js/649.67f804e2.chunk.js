/*! For license information please see 649.67f804e2.chunk.js.LICENSE.txt */
"use strict";
(self.webpackChunktrainer_dashboard =
  self.webpackChunktrainer_dashboard || []).push([
  [649],
  {
    3900: (e, t, n) => {
      n.d(t, { ZP: () => Qn });
      var o = n(1413),
        r = n(5671),
        i = n(3144),
        a = n(136),
        u = n(1129),
        s = n(2791),
        l = {},
        c = [];
      function f(e, t) {}
      function p(e, t) {}
      function d(e, t, n) {
        t || l[n] || (e(!1, n), (l[n] = !0));
      }
      function v(e, t) {
        d(f, e, t);
      }
      (v.preMessage = function (e) {
        c.push(e);
      }),
        (v.resetWarned = function () {
          l = {};
        }),
        (v.noteOnce = function (e, t) {
          d(p, e, t);
        });
      const h = v;
      var m = n(4942);
      const g = function (e) {
        var t,
          n,
          r = e.className,
          i = e.included,
          a = e.vertical,
          u = e.style,
          l = e.length,
          c = e.offset,
          f = e.reverse;
        l < 0 && ((f = !f), (l = Math.abs(l)), (c = 100 - c));
        var p = a
            ? ((t = {}),
              (0, m.Z)(t, f ? "top" : "bottom", "".concat(c, "%")),
              (0, m.Z)(t, f ? "bottom" : "top", "auto"),
              (0, m.Z)(t, "height", "".concat(l, "%")),
              t)
            : ((n = {}),
              (0, m.Z)(n, f ? "right" : "left", "".concat(c, "%")),
              (0, m.Z)(n, f ? "left" : "right", "auto"),
              (0, m.Z)(n, "width", "".concat(l, "%")),
              n),
          d = (0, o.Z)((0, o.Z)({}, u), p);
        return i ? s.createElement("div", { className: r, style: d }) : null;
      };
      var y = n(7462),
        b = n(5987),
        w = n(2982),
        E = n(1120);
      function k() {
        return (
          (k =
            "undefined" !== typeof Reflect && Reflect.get
              ? Reflect.get.bind()
              : function (e, t, n) {
                  var o = (function (e, t) {
                    for (
                      ;
                      !Object.prototype.hasOwnProperty.call(e, t) &&
                      null !== (e = (0, E.Z)(e));

                    );
                    return e;
                  })(e, t);
                  if (o) {
                    var r = Object.getOwnPropertyDescriptor(o, t);
                    return r.get
                      ? r.get.call(arguments.length < 3 ? e : n)
                      : r.value;
                  }
                }),
          k.apply(this, arguments)
        );
      }
      var Z = n(4164);
      function C(e, t, n, o) {
        var r = Z.unstable_batchedUpdates
          ? function (e) {
              Z.unstable_batchedUpdates(n, e);
            }
          : n;
        return (
          null !== e &&
            void 0 !== e &&
            e.addEventListener &&
            e.addEventListener(t, r, o),
          {
            remove: function () {
              null !== e &&
                void 0 !== e &&
                e.removeEventListener &&
                e.removeEventListener(t, r, o);
            },
          }
        );
      }
      var M = n(1707),
        x = n.n(M);
      const T = function (e) {
        var t = e.prefixCls,
          n = e.vertical,
          r = e.reverse,
          i = e.marks,
          a = e.dots,
          u = e.step,
          l = e.included,
          c = e.lowerBound,
          f = e.upperBound,
          p = e.max,
          d = e.min,
          v = e.dotStyle,
          g = e.activeDotStyle,
          y = p - d,
          b = (function (e, t, n, o, r, i) {
            h(
              !n || o > 0,
              "`Slider[step]` should be a positive number in order to make Slider[dots] work."
            );
            var a = Object.keys(t)
              .map(parseFloat)
              .sort(function (e, t) {
                return e - t;
              });
            if (n && o)
              for (var u = r; u <= i; u += o) -1 === a.indexOf(u) && a.push(u);
            return a;
          })(0, i, a, u, d, p).map(function (e) {
            var i,
              a = "".concat((Math.abs(e - d) / y) * 100, "%"),
              u = (!l && e === f) || (l && e <= f && e >= c),
              p = n
                ? (0, o.Z)(
                    (0, o.Z)({}, v),
                    {},
                    (0, m.Z)({}, r ? "top" : "bottom", a)
                  )
                : (0, o.Z)(
                    (0, o.Z)({}, v),
                    {},
                    (0, m.Z)({}, r ? "right" : "left", a)
                  );
            u && (p = (0, o.Z)((0, o.Z)({}, p), g));
            var h = x()(
              ((i = {}),
              (0, m.Z)(i, "".concat(t, "-dot"), !0),
              (0, m.Z)(i, "".concat(t, "-dot-active"), u),
              (0, m.Z)(i, "".concat(t, "-dot-reverse"), r),
              i)
            );
            return s.createElement("span", { className: h, style: p, key: e });
          });
        return s.createElement("div", { className: "".concat(t, "-step") }, b);
      };
      var S = n(1002);
      const O = function (e) {
        var t = e.className,
          n = e.vertical,
          r = e.reverse,
          i = e.marks,
          a = e.included,
          u = e.upperBound,
          l = e.lowerBound,
          c = e.max,
          f = e.min,
          p = e.onClickLabel,
          d = Object.keys(i),
          v = c - f,
          h = d
            .map(parseFloat)
            .sort(function (e, t) {
              return e - t;
            })
            .map(function (e) {
              var c,
                d = i[e],
                h = "object" === (0, S.Z)(d) && !s.isValidElement(d),
                g = h ? d.label : d;
              if (!g && 0 !== g) return null;
              var y = (!a && e === u) || (a && e <= u && e >= l),
                b = x()(
                  ((c = {}),
                  (0, m.Z)(c, "".concat(t, "-text"), !0),
                  (0, m.Z)(c, "".concat(t, "-text-active"), y),
                  c)
                ),
                w = (0, m.Z)(
                  { marginBottom: "-50%" },
                  r ? "top" : "bottom",
                  "".concat(((e - f) / v) * 100, "%")
                ),
                E = (0, m.Z)(
                  {
                    transform: "translateX(".concat(r ? "50%" : "-50%", ")"),
                    msTransform: "translateX(".concat(r ? "50%" : "-50%", ")"),
                  },
                  r ? "right" : "left",
                  "".concat(((e - f) / v) * 100, "%")
                ),
                k = n ? w : E,
                Z = h ? (0, o.Z)((0, o.Z)({}, k), d.style) : k;
              return s.createElement(
                "span",
                {
                  className: b,
                  style: Z,
                  key: e,
                  onMouseDown: function (t) {
                    return p(t, e);
                  },
                  onTouchStart: function (t) {
                    return p(t, e);
                  },
                },
                g
              );
            });
        return s.createElement("div", { className: t }, h);
      };
      var P = (function (e) {
          (0, a.Z)(n, e);
          var t = (0, u.Z)(n);
          function n() {
            var e;
            return (
              (0, r.Z)(this, n),
              ((e = t.apply(this, arguments)).state = { clickFocused: !1 }),
              (e.setHandleRef = function (t) {
                e.handle = t;
              }),
              (e.handleMouseUp = function () {
                document.activeElement === e.handle && e.setClickFocus(!0);
              }),
              (e.handleMouseDown = function (t) {
                t.preventDefault(), e.focus();
              }),
              (e.handleBlur = function () {
                e.setClickFocus(!1);
              }),
              (e.handleKeyDown = function () {
                e.setClickFocus(!1);
              }),
              e
            );
          }
          return (
            (0, i.Z)(n, [
              {
                key: "componentDidMount",
                value: function () {
                  this.onMouseUpListener = C(
                    document,
                    "mouseup",
                    this.handleMouseUp
                  );
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.onMouseUpListener && this.onMouseUpListener.remove();
                },
              },
              {
                key: "setClickFocus",
                value: function (e) {
                  this.setState({ clickFocused: e });
                },
              },
              {
                key: "clickFocus",
                value: function () {
                  this.setClickFocus(!0), this.focus();
                },
              },
              {
                key: "focus",
                value: function () {
                  this.handle.focus();
                },
              },
              {
                key: "blur",
                value: function () {
                  this.handle.blur();
                },
              },
              {
                key: "render",
                value: function () {
                  var e,
                    t,
                    n,
                    r = this.props,
                    i = r.prefixCls,
                    a = r.vertical,
                    u = r.reverse,
                    l = r.offset,
                    c = r.style,
                    f = r.disabled,
                    p = r.min,
                    d = r.max,
                    v = r.value,
                    h = r.tabIndex,
                    g = r.ariaLabel,
                    w = r.ariaLabelledBy,
                    E = r.ariaValueTextFormatter,
                    k = (0, b.Z)(r, [
                      "prefixCls",
                      "vertical",
                      "reverse",
                      "offset",
                      "style",
                      "disabled",
                      "min",
                      "max",
                      "value",
                      "tabIndex",
                      "ariaLabel",
                      "ariaLabelledBy",
                      "ariaValueTextFormatter",
                    ]),
                    Z = x()(
                      this.props.className,
                      (0, m.Z)(
                        {},
                        "".concat(i, "-handle-click-focused"),
                        this.state.clickFocused
                      )
                    ),
                    C = a
                      ? ((e = {}),
                        (0, m.Z)(e, u ? "top" : "bottom", "".concat(l, "%")),
                        (0, m.Z)(e, u ? "bottom" : "top", "auto"),
                        (0, m.Z)(e, "transform", u ? null : "translateY(+50%)"),
                        e)
                      : ((t = {}),
                        (0, m.Z)(t, u ? "right" : "left", "".concat(l, "%")),
                        (0, m.Z)(t, u ? "left" : "right", "auto"),
                        (0, m.Z)(
                          t,
                          "transform",
                          "translateX(".concat(u ? "+" : "-", "50%)")
                        ),
                        t),
                    M = (0, o.Z)((0, o.Z)({}, c), C),
                    T = h || 0;
                  return (
                    (f || null === h) && (T = null),
                    E && (n = E(v)),
                    s.createElement(
                      "div",
                      (0, y.Z)({ ref: this.setHandleRef, tabIndex: T }, k, {
                        className: Z,
                        style: M,
                        onBlur: this.handleBlur,
                        onKeyDown: this.handleKeyDown,
                        onMouseDown: this.handleMouseDown,
                        role: "slider",
                        "aria-valuemin": p,
                        "aria-valuemax": d,
                        "aria-valuenow": v,
                        "aria-disabled": !!f,
                        "aria-label": g,
                        "aria-labelledby": w,
                        "aria-valuetext": n,
                      })
                    )
                  );
                },
              },
            ]),
            n
          );
        })(s.Component),
        N = {
          MAC_ENTER: 3,
          BACKSPACE: 8,
          TAB: 9,
          NUM_CENTER: 12,
          ENTER: 13,
          SHIFT: 16,
          CTRL: 17,
          ALT: 18,
          PAUSE: 19,
          CAPS_LOCK: 20,
          ESC: 27,
          SPACE: 32,
          PAGE_UP: 33,
          PAGE_DOWN: 34,
          END: 35,
          HOME: 36,
          LEFT: 37,
          UP: 38,
          RIGHT: 39,
          DOWN: 40,
          PRINT_SCREEN: 44,
          INSERT: 45,
          DELETE: 46,
          ZERO: 48,
          ONE: 49,
          TWO: 50,
          THREE: 51,
          FOUR: 52,
          FIVE: 53,
          SIX: 54,
          SEVEN: 55,
          EIGHT: 56,
          NINE: 57,
          QUESTION_MARK: 63,
          A: 65,
          B: 66,
          C: 67,
          D: 68,
          E: 69,
          F: 70,
          G: 71,
          H: 72,
          I: 73,
          J: 74,
          K: 75,
          L: 76,
          M: 77,
          N: 78,
          O: 79,
          P: 80,
          Q: 81,
          R: 82,
          S: 83,
          T: 84,
          U: 85,
          V: 86,
          W: 87,
          X: 88,
          Y: 89,
          Z: 90,
          META: 91,
          WIN_KEY_RIGHT: 92,
          CONTEXT_MENU: 93,
          NUM_ZERO: 96,
          NUM_ONE: 97,
          NUM_TWO: 98,
          NUM_THREE: 99,
          NUM_FOUR: 100,
          NUM_FIVE: 101,
          NUM_SIX: 102,
          NUM_SEVEN: 103,
          NUM_EIGHT: 104,
          NUM_NINE: 105,
          NUM_MULTIPLY: 106,
          NUM_PLUS: 107,
          NUM_MINUS: 109,
          NUM_PERIOD: 110,
          NUM_DIVISION: 111,
          F1: 112,
          F2: 113,
          F3: 114,
          F4: 115,
          F5: 116,
          F6: 117,
          F7: 118,
          F8: 119,
          F9: 120,
          F10: 121,
          F11: 122,
          F12: 123,
          NUMLOCK: 144,
          SEMICOLON: 186,
          DASH: 189,
          EQUALS: 187,
          COMMA: 188,
          PERIOD: 190,
          SLASH: 191,
          APOSTROPHE: 192,
          SINGLE_QUOTE: 222,
          OPEN_SQUARE_BRACKET: 219,
          BACKSLASH: 220,
          CLOSE_SQUARE_BRACKET: 221,
          WIN_KEY: 224,
          MAC_FF_META: 224,
          WIN_IME: 229,
          isTextModifyingKeyEvent: function (e) {
            var t = e.keyCode;
            if (
              (e.altKey && !e.ctrlKey) ||
              e.metaKey ||
              (t >= N.F1 && t <= N.F12)
            )
              return !1;
            switch (t) {
              case N.ALT:
              case N.CAPS_LOCK:
              case N.CONTEXT_MENU:
              case N.CTRL:
              case N.DOWN:
              case N.END:
              case N.ESC:
              case N.HOME:
              case N.INSERT:
              case N.LEFT:
              case N.MAC_FF_META:
              case N.META:
              case N.NUMLOCK:
              case N.NUM_CENTER:
              case N.PAGE_DOWN:
              case N.PAGE_UP:
              case N.PAUSE:
              case N.PRINT_SCREEN:
              case N.RIGHT:
              case N.SHIFT:
              case N.UP:
              case N.WIN_KEY:
              case N.WIN_KEY_RIGHT:
                return !1;
              default:
                return !0;
            }
          },
          isCharacterKey: function (e) {
            if (e >= N.ZERO && e <= N.NINE) return !0;
            if (e >= N.NUM_ZERO && e <= N.NUM_MULTIPLY) return !0;
            if (e >= N.A && e <= N.Z) return !0;
            if (-1 !== window.navigator.userAgent.indexOf("WebKit") && 0 === e)
              return !0;
            switch (e) {
              case N.SPACE:
              case N.QUESTION_MARK:
              case N.NUM_PLUS:
              case N.NUM_MINUS:
              case N.NUM_PERIOD:
              case N.NUM_DIVISION:
              case N.SEMICOLON:
              case N.DASH:
              case N.EQUALS:
              case N.COMMA:
              case N.PERIOD:
              case N.SLASH:
              case N.APOSTROPHE:
              case N.SINGLE_QUOTE:
              case N.OPEN_SQUARE_BRACKET:
              case N.BACKSLASH:
              case N.CLOSE_SQUARE_BRACKET:
                return !0;
              default:
                return !1;
            }
          },
        };
      const L = N;
      function D(e, t) {
        try {
          return Object.keys(t).some(function (n) {
            return e.target === (0, Z.findDOMNode)(t[n]);
          });
        } catch (n) {
          return !1;
        }
      }
      function R(e, t) {
        var n = t.min,
          o = t.max;
        return e < n || e > o;
      }
      function A(e) {
        return (
          e.touches.length > 1 ||
          ("touchend" === e.type.toLowerCase() && e.touches.length > 0)
        );
      }
      function H(e, t) {
        var n = t.marks,
          o = t.step,
          r = t.min,
          i = t.max,
          a = Object.keys(n).map(parseFloat);
        if (null !== o) {
          var u = Math.pow(10, V(o)),
            s = Math.floor((i * u - r * u) / (o * u)),
            l = Math.min((e - r) / o, s),
            c = Math.round(l) * o + r;
          a.push(c);
        }
        var f = a.map(function (t) {
          return Math.abs(e - t);
        });
        return a[f.indexOf(Math.min.apply(Math, (0, w.Z)(f)))];
      }
      function V(e) {
        var t = e.toString(),
          n = 0;
        return t.indexOf(".") >= 0 && (n = t.length - t.indexOf(".") - 1), n;
      }
      function F(e, t) {
        return e ? t.clientY : t.pageX;
      }
      function B(e, t) {
        return e ? t.touches[0].clientY : t.touches[0].pageX;
      }
      function I(e, t) {
        var n = t.getBoundingClientRect();
        return e
          ? n.top + 0.5 * n.height
          : window.pageXOffset + n.left + 0.5 * n.width;
      }
      function U(e, t) {
        var n = t.max,
          o = t.min;
        return e <= o ? o : e >= n ? n : e;
      }
      function _(e, t) {
        var n = t.step,
          o = isFinite(H(e, t)) ? H(e, t) : 0;
        return null === n ? o : parseFloat(o.toFixed(V(n)));
      }
      function j(e) {
        e.stopPropagation(), e.preventDefault();
      }
      function W(e, t, n) {
        var o = "increase",
          r = "decrease",
          i = o;
        switch (e.keyCode) {
          case L.UP:
            i = t && n ? r : o;
            break;
          case L.RIGHT:
            i = !t && n ? r : o;
            break;
          case L.DOWN:
            i = t && n ? o : r;
            break;
          case L.LEFT:
            i = !t && n ? o : r;
            break;
          case L.END:
            return function (e, t) {
              return t.max;
            };
          case L.HOME:
            return function (e, t) {
              return t.min;
            };
          case L.PAGE_UP:
            return function (e, t) {
              return e + 2 * t.step;
            };
          case L.PAGE_DOWN:
            return function (e, t) {
              return e - 2 * t.step;
            };
          default:
            return;
        }
        return function (e, t) {
          return (function (e, t, n) {
            var o = {
                increase: function (e, t) {
                  return e + t;
                },
                decrease: function (e, t) {
                  return e - t;
                },
              },
              r = o[e](Object.keys(n.marks).indexOf(JSON.stringify(t)), 1),
              i = Object.keys(n.marks)[r];
            return n.step
              ? o[e](t, n.step)
              : Object.keys(n.marks).length && n.marks[i]
              ? n.marks[i]
              : t;
          })(i, e, t);
        };
      }
      function X() {}
      function Y(e) {
        var t;
        return (
          (t = (function (e) {
            (0, a.Z)(n, e);
            var t = (0, u.Z)(n);
            function n(e) {
              var o;
              (0, r.Z)(this, n),
                ((o = t.call(this, e)).onDown = function (e, t) {
                  var n = t,
                    r = o.props,
                    i = r.draggableTrack,
                    a = r.vertical,
                    u = o.state.bounds,
                    s =
                      (i && o.positionGetValue && o.positionGetValue(n)) || [],
                    l = D(e, o.handlesRefs);
                  if (
                    ((o.dragTrack =
                      i &&
                      u.length >= 2 &&
                      !l &&
                      !s
                        .map(function (e, t) {
                          var n = !!t || e >= u[t];
                          return t === s.length - 1 ? e <= u[t] : n;
                        })
                        .some(function (e) {
                          return !e;
                        })),
                    o.dragTrack)
                  )
                    (o.dragOffset = n), (o.startBounds = (0, w.Z)(u));
                  else {
                    if (l) {
                      var c = I(a, e.target);
                      (o.dragOffset = n - c), (n = c);
                    } else o.dragOffset = 0;
                    o.onStart(n);
                  }
                }),
                (o.onMouseDown = function (e) {
                  if (0 === e.button) {
                    o.removeDocumentEvents();
                    var t = F(o.props.vertical, e);
                    o.onDown(e, t), o.addDocumentMouseEvents();
                  }
                }),
                (o.onTouchStart = function (e) {
                  if (!A(e)) {
                    var t = B(o.props.vertical, e);
                    o.onDown(e, t), o.addDocumentTouchEvents(), j(e);
                  }
                }),
                (o.onFocus = function (e) {
                  var t = o.props,
                    n = t.onFocus,
                    r = t.vertical;
                  if (D(e, o.handlesRefs) && !o.dragTrack) {
                    var i = I(r, e.target);
                    (o.dragOffset = 0), o.onStart(i), j(e), n && n(e);
                  }
                }),
                (o.onBlur = function (e) {
                  var t = o.props.onBlur;
                  o.dragTrack || o.onEnd(), t && t(e);
                }),
                (o.onMouseUp = function () {
                  o.handlesRefs[o.prevMovedHandleIndex] &&
                    o.handlesRefs[o.prevMovedHandleIndex].clickFocus();
                }),
                (o.onMouseMove = function (e) {
                  if (o.sliderRef) {
                    var t = F(o.props.vertical, e);
                    o.onMove(e, t - o.dragOffset, o.dragTrack, o.startBounds);
                  } else o.onEnd();
                }),
                (o.onTouchMove = function (e) {
                  if (!A(e) && o.sliderRef) {
                    var t = B(o.props.vertical, e);
                    o.onMove(e, t - o.dragOffset, o.dragTrack, o.startBounds);
                  } else o.onEnd();
                }),
                (o.onKeyDown = function (e) {
                  o.sliderRef && D(e, o.handlesRefs) && o.onKeyboard(e);
                }),
                (o.onClickMarkLabel = function (e, t) {
                  e.stopPropagation(),
                    o.onChange({ value: t }),
                    o.setState({ value: t }, function () {
                      return o.onEnd(!0);
                    });
                }),
                (o.saveSlider = function (e) {
                  o.sliderRef = e;
                });
              var i = e.step,
                a = e.max,
                u = e.min,
                s = !isFinite(a - u) || (a - u) % i === 0;
              return (
                h(
                  !i || Math.floor(i) !== i || s,
                  "Slider[max] - Slider[min] ("
                    .concat(a - u, ") should be a multiple of Slider[step] (")
                    .concat(i, ")")
                ),
                (o.handlesRefs = {}),
                o
              );
            }
            return (
              (0, i.Z)(n, [
                {
                  key: "componentDidMount",
                  value: function () {
                    this.document =
                      this.sliderRef && this.sliderRef.ownerDocument;
                    var e = this.props,
                      t = e.autoFocus,
                      n = e.disabled;
                    t && !n && this.focus();
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    k((0, E.Z)(n.prototype), "componentWillUnmount", this) &&
                      k(
                        (0, E.Z)(n.prototype),
                        "componentWillUnmount",
                        this
                      ).call(this),
                      this.removeDocumentEvents();
                  },
                },
                {
                  key: "getSliderStart",
                  value: function () {
                    var e = this.sliderRef,
                      t = this.props,
                      n = t.vertical,
                      o = t.reverse,
                      r = e.getBoundingClientRect();
                    return n
                      ? o
                        ? r.bottom
                        : r.top
                      : window.pageXOffset + (o ? r.right : r.left);
                  },
                },
                {
                  key: "getSliderLength",
                  value: function () {
                    var e = this.sliderRef;
                    if (!e) return 0;
                    var t = e.getBoundingClientRect();
                    return this.props.vertical ? t.height : t.width;
                  },
                },
                {
                  key: "addDocumentTouchEvents",
                  value: function () {
                    (this.onTouchMoveListener = C(
                      this.document,
                      "touchmove",
                      this.onTouchMove
                    )),
                      (this.onTouchUpListener = C(
                        this.document,
                        "touchend",
                        this.onEnd
                      ));
                  },
                },
                {
                  key: "addDocumentMouseEvents",
                  value: function () {
                    (this.onMouseMoveListener = C(
                      this.document,
                      "mousemove",
                      this.onMouseMove
                    )),
                      (this.onMouseUpListener = C(
                        this.document,
                        "mouseup",
                        this.onEnd
                      ));
                  },
                },
                {
                  key: "removeDocumentEvents",
                  value: function () {
                    this.onTouchMoveListener &&
                      this.onTouchMoveListener.remove(),
                      this.onTouchUpListener && this.onTouchUpListener.remove(),
                      this.onMouseMoveListener &&
                        this.onMouseMoveListener.remove(),
                      this.onMouseUpListener && this.onMouseUpListener.remove();
                  },
                },
                {
                  key: "focus",
                  value: function () {
                    var e;
                    this.props.disabled ||
                      null === (e = this.handlesRefs[0]) ||
                      void 0 === e ||
                      e.focus();
                  },
                },
                {
                  key: "blur",
                  value: function () {
                    var e = this;
                    this.props.disabled ||
                      Object.keys(this.handlesRefs).forEach(function (t) {
                        var n, o;
                        null === (n = e.handlesRefs[t]) ||
                          void 0 === n ||
                          null === (o = n.blur) ||
                          void 0 === o ||
                          o.call(n);
                      });
                  },
                },
                {
                  key: "calcValue",
                  value: function (e) {
                    var t = this.props,
                      n = t.vertical,
                      o = t.min,
                      r = t.max,
                      i = Math.abs(Math.max(e, 0) / this.getSliderLength());
                    return n ? (1 - i) * (r - o) + o : i * (r - o) + o;
                  },
                },
                {
                  key: "calcValueByPos",
                  value: function (e) {
                    var t =
                      (this.props.reverse ? -1 : 1) *
                      (e - this.getSliderStart());
                    return this.trimAlignValue(this.calcValue(t));
                  },
                },
                {
                  key: "calcOffset",
                  value: function (e) {
                    var t = this.props,
                      n = t.min,
                      o = (e - n) / (t.max - n);
                    return Math.max(0, 100 * o);
                  },
                },
                {
                  key: "saveHandle",
                  value: function (e, t) {
                    this.handlesRefs[e] = t;
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e,
                      t = this.props,
                      r = t.prefixCls,
                      i = t.className,
                      a = t.marks,
                      u = t.dots,
                      l = t.step,
                      c = t.included,
                      f = t.disabled,
                      p = t.vertical,
                      d = t.reverse,
                      v = t.min,
                      h = t.max,
                      g = t.children,
                      y = t.maximumTrackStyle,
                      b = t.style,
                      w = t.railStyle,
                      Z = t.dotStyle,
                      C = t.activeDotStyle,
                      M = k((0, E.Z)(n.prototype), "render", this).call(this),
                      S = M.tracks,
                      P = M.handles,
                      N = x()(
                        r,
                        ((e = {}),
                        (0, m.Z)(
                          e,
                          "".concat(r, "-with-marks"),
                          Object.keys(a).length
                        ),
                        (0, m.Z)(e, "".concat(r, "-disabled"), f),
                        (0, m.Z)(e, "".concat(r, "-vertical"), p),
                        (0, m.Z)(e, i, i),
                        e)
                      );
                    return s.createElement(
                      "div",
                      {
                        ref: this.saveSlider,
                        className: N,
                        onTouchStart: f ? X : this.onTouchStart,
                        onMouseDown: f ? X : this.onMouseDown,
                        onMouseUp: f ? X : this.onMouseUp,
                        onKeyDown: f ? X : this.onKeyDown,
                        onFocus: f ? X : this.onFocus,
                        onBlur: f ? X : this.onBlur,
                        style: b,
                      },
                      s.createElement("div", {
                        className: "".concat(r, "-rail"),
                        style: (0, o.Z)((0, o.Z)({}, y), w),
                      }),
                      S,
                      s.createElement(T, {
                        prefixCls: r,
                        vertical: p,
                        reverse: d,
                        marks: a,
                        dots: u,
                        step: l,
                        included: c,
                        lowerBound: this.getLowerBound(),
                        upperBound: this.getUpperBound(),
                        max: h,
                        min: v,
                        dotStyle: Z,
                        activeDotStyle: C,
                      }),
                      P,
                      s.createElement(O, {
                        className: "".concat(r, "-mark"),
                        onClickLabel: f ? X : this.onClickMarkLabel,
                        vertical: p,
                        marks: a,
                        included: c,
                        lowerBound: this.getLowerBound(),
                        upperBound: this.getUpperBound(),
                        max: h,
                        min: v,
                        reverse: d,
                      }),
                      g
                    );
                  },
                },
              ]),
              n
            );
          })(e)),
          (t.displayName = "ComponentEnhancer(".concat(e.displayName, ")")),
          (t.defaultProps = (0, o.Z)(
            (0, o.Z)({}, e.defaultProps),
            {},
            {
              prefixCls: "rc-slider",
              className: "",
              min: 0,
              max: 100,
              step: 1,
              marks: {},
              handle: function (e) {
                var t = e.index,
                  n = (0, b.Z)(e, ["index"]);
                return (
                  delete n.dragging,
                  null === n.value
                    ? null
                    : s.createElement(P, (0, y.Z)({}, n, { key: t }))
                );
              },
              onBeforeChange: X,
              onChange: X,
              onAfterChange: X,
              included: !0,
              disabled: !1,
              dots: !1,
              vertical: !1,
              reverse: !1,
              trackStyle: [{}],
              handleStyle: [{}],
              railStyle: {},
              dotStyle: {},
              activeDotStyle: {},
            }
          )),
          t
        );
      }
      const G = Y(
        (function (e) {
          (0, a.Z)(n, e);
          var t = (0, u.Z)(n);
          function n(e) {
            var o;
            (0, r.Z)(this, n),
              ((o = t.call(this, e)).positionGetValue = function (e) {
                return [];
              }),
              (o.onEnd = function (e) {
                var t = o.state.dragging;
                o.removeDocumentEvents(),
                  (t || e) && o.props.onAfterChange(o.getValue()),
                  o.setState({ dragging: !1 });
              });
            var i = void 0 !== e.defaultValue ? e.defaultValue : e.min,
              a = void 0 !== e.value ? e.value : i;
            return (
              (o.state = { value: o.trimAlignValue(a), dragging: !1 }),
              h(
                !("minimumTrackStyle" in e),
                "minimumTrackStyle will be deprecated, please use trackStyle instead."
              ),
              h(
                !("maximumTrackStyle" in e),
                "maximumTrackStyle will be deprecated, please use railStyle instead."
              ),
              o
            );
          }
          return (
            (0, i.Z)(n, [
              {
                key: "calcValueByPos",
                value: function (e) {
                  return 0;
                },
              },
              {
                key: "calcOffset",
                value: function (e) {
                  return 0;
                },
              },
              { key: "saveHandle", value: function (e, t) {} },
              { key: "removeDocumentEvents", value: function () {} },
              {
                key: "componentDidUpdate",
                value: function (e, t) {
                  var n = this.props,
                    o = n.min,
                    r = n.max,
                    i = n.value,
                    a = n.onChange;
                  if ("min" in this.props || "max" in this.props) {
                    var u = void 0 !== i ? i : t.value,
                      s = this.trimAlignValue(u, this.props);
                    s !== t.value &&
                      (this.setState({ value: s }),
                      (o === e.min && r === e.max) ||
                        !R(u, this.props) ||
                        a(s));
                  }
                },
              },
              {
                key: "onChange",
                value: function (e) {
                  var t = this.props,
                    n = !("value" in t),
                    r =
                      e.value > this.props.max
                        ? (0, o.Z)(
                            (0, o.Z)({}, e),
                            {},
                            { value: this.props.max }
                          )
                        : e;
                  n && this.setState(r);
                  var i = r.value;
                  t.onChange(i);
                },
              },
              {
                key: "onStart",
                value: function (e) {
                  this.setState({ dragging: !0 });
                  var t = this.props,
                    n = this.getValue();
                  t.onBeforeChange(n);
                  var o = this.calcValueByPos(e);
                  (this.startValue = o),
                    (this.startPosition = e),
                    o !== n &&
                      ((this.prevMovedHandleIndex = 0),
                      this.onChange({ value: o }));
                },
              },
              {
                key: "onMove",
                value: function (e, t) {
                  j(e);
                  var n = this.state.value,
                    o = this.calcValueByPos(t);
                  o !== n && this.onChange({ value: o });
                },
              },
              {
                key: "onKeyboard",
                value: function (e) {
                  var t = this.props,
                    n = t.reverse,
                    o = W(e, t.vertical, n);
                  if (o) {
                    j(e);
                    var r = this.state.value,
                      i = o(r, this.props),
                      a = this.trimAlignValue(i);
                    if (a === r) return;
                    this.onChange({ value: a }),
                      this.props.onAfterChange(a),
                      this.onEnd();
                  }
                },
              },
              {
                key: "getValue",
                value: function () {
                  return this.state.value;
                },
              },
              {
                key: "getLowerBound",
                value: function () {
                  var e = this.props.startPoint || this.props.min;
                  return this.state.value > e ? e : this.state.value;
                },
              },
              {
                key: "getUpperBound",
                value: function () {
                  return this.state.value < this.props.startPoint
                    ? this.props.startPoint
                    : this.state.value;
                },
              },
              {
                key: "trimAlignValue",
                value: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  if (null === e) return null;
                  var n = (0, o.Z)((0, o.Z)({}, this.props), t);
                  return _(U(e, n), n);
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.prefixCls,
                    r = t.vertical,
                    i = t.included,
                    a = t.disabled,
                    u = t.minimumTrackStyle,
                    l = t.trackStyle,
                    c = t.handleStyle,
                    f = t.tabIndex,
                    p = t.ariaLabelForHandle,
                    d = t.ariaLabelledByForHandle,
                    v = t.ariaValueTextFormatterForHandle,
                    h = t.min,
                    m = t.max,
                    y = t.startPoint,
                    b = t.reverse,
                    w = t.handle,
                    E = this.state,
                    k = E.value,
                    Z = E.dragging,
                    C = this.calcOffset(k),
                    M = w({
                      className: "".concat(n, "-handle"),
                      prefixCls: n,
                      vertical: r,
                      offset: C,
                      value: k,
                      dragging: Z,
                      disabled: a,
                      min: h,
                      max: m,
                      reverse: b,
                      index: 0,
                      tabIndex: f,
                      ariaLabel: p,
                      ariaLabelledBy: d,
                      ariaValueTextFormatter: v,
                      style: c[0] || c,
                      ref: function (t) {
                        return e.saveHandle(0, t);
                      },
                    }),
                    x = void 0 !== y ? this.calcOffset(y) : 0,
                    T = l[0] || l;
                  return {
                    tracks: s.createElement(g, {
                      className: "".concat(n, "-track"),
                      vertical: r,
                      included: i,
                      offset: x,
                      reverse: b,
                      length: C - x,
                      style: (0, o.Z)((0, o.Z)({}, u), T),
                    }),
                    handles: M,
                  };
                },
              },
            ]),
            n
          );
        })(s.Component)
      );
      var K = function (e) {
          var t = e.value,
            n = e.handle,
            o = e.bounds,
            r = e.props,
            i = r.allowCross,
            a = r.pushable,
            u = Number(a),
            s = U(t, r),
            l = s;
          return (
            i ||
              null == n ||
              void 0 === o ||
              (n > 0 && s <= o[n - 1] + u && (l = o[n - 1] + u),
              n < o.length - 1 && s >= o[n + 1] - u && (l = o[n + 1] - u)),
            _(l, r)
          );
        },
        z = (function (e) {
          (0, a.Z)(n, e);
          var t = (0, u.Z)(n);
          function n(e) {
            var o;
            (0, r.Z)(this, n),
              ((o = t.call(this, e)).positionGetValue = function (e) {
                var t = o.getValue(),
                  n = o.calcValueByPos(e),
                  r = o.getClosestBound(n),
                  i = o.getBoundNeedMoving(n, r);
                if (n === t[i]) return null;
                var a = (0, w.Z)(t);
                return (a[i] = n), a;
              }),
              (o.onEnd = function (e) {
                var t = o.state.handle;
                o.removeDocumentEvents(),
                  t || (o.dragTrack = !1),
                  (null !== t || e) && o.props.onAfterChange(o.getValue()),
                  o.setState({ handle: null });
              });
            var i = e.count,
              a = e.min,
              u = e.max,
              s = Array.apply(void 0, (0, w.Z)(Array(i + 1))).map(function () {
                return a;
              }),
              l = "defaultValue" in e ? e.defaultValue : s,
              c = (void 0 !== e.value ? e.value : l).map(function (t, n) {
                return K({ value: t, handle: n, props: e });
              }),
              f = c[0] === u ? 0 : c.length - 1;
            return (o.state = { handle: null, recent: f, bounds: c }), o;
          }
          return (
            (0, i.Z)(
              n,
              [
                {
                  key: "calcValueByPos",
                  value: function (e) {
                    return 0;
                  },
                },
                {
                  key: "getSliderLength",
                  value: function () {
                    return 0;
                  },
                },
                {
                  key: "calcOffset",
                  value: function (e) {
                    return 0;
                  },
                },
                { key: "saveHandle", value: function (e, t) {} },
                { key: "removeDocumentEvents", value: function () {} },
                {
                  key: "componentDidUpdate",
                  value: function (e, t) {
                    var n = this,
                      o = this.props,
                      r = o.onChange,
                      i = o.value,
                      a = o.min,
                      u = o.max;
                    if (
                      ("min" in this.props || "max" in this.props) &&
                      (a !== e.min || u !== e.max)
                    ) {
                      var s = i || t.bounds;
                      if (
                        s.some(function (e) {
                          return R(e, n.props);
                        })
                      )
                        r(
                          s.map(function (e) {
                            return U(e, n.props);
                          })
                        );
                    }
                  },
                },
                {
                  key: "onChange",
                  value: function (e) {
                    var t = this.props;
                    if (!("value" in t)) this.setState(e);
                    else {
                      var n = {};
                      ["handle", "recent"].forEach(function (t) {
                        void 0 !== e[t] && (n[t] = e[t]);
                      }),
                        Object.keys(n).length && this.setState(n);
                    }
                    var r = (0, o.Z)((0, o.Z)({}, this.state), e).bounds;
                    t.onChange(r);
                  },
                },
                {
                  key: "onStart",
                  value: function (e) {
                    var t = this.props,
                      n = this.state,
                      o = this.getValue();
                    t.onBeforeChange(o);
                    var r = this.calcValueByPos(e);
                    (this.startValue = r), (this.startPosition = e);
                    var i = this.getClosestBound(r);
                    if (
                      ((this.prevMovedHandleIndex = this.getBoundNeedMoving(
                        r,
                        i
                      )),
                      this.setState({
                        handle: this.prevMovedHandleIndex,
                        recent: this.prevMovedHandleIndex,
                      }),
                      r !== o[this.prevMovedHandleIndex])
                    ) {
                      var a = (0, w.Z)(n.bounds);
                      (a[this.prevMovedHandleIndex] = r),
                        this.onChange({ bounds: a });
                    }
                  },
                },
                {
                  key: "onMove",
                  value: function (e, t, n, o) {
                    j(e);
                    var r = this.state,
                      i = this.props,
                      a = i.max || 100,
                      u = i.min || 0;
                    if (n) {
                      var s = i.vertical ? -t : t;
                      s = i.reverse ? -s : s;
                      var l = a - Math.max.apply(Math, (0, w.Z)(o)),
                        c = u - Math.min.apply(Math, (0, w.Z)(o)),
                        f = Math.min(
                          Math.max(s / (this.getSliderLength() / (a - u)), c),
                          l
                        ),
                        p = o.map(function (e) {
                          return Math.floor(Math.max(Math.min(e + f, a), u));
                        });
                      r.bounds
                        .map(function (e, t) {
                          return e === p[t];
                        })
                        .some(function (e) {
                          return !e;
                        }) && this.onChange({ bounds: p });
                    } else {
                      var d = this.calcValueByPos(t);
                      d !== r.bounds[r.handle] && this.moveTo(d);
                    }
                  },
                },
                {
                  key: "onKeyboard",
                  value: function (e) {
                    var t = this.props,
                      n = t.reverse,
                      o = W(e, t.vertical, n);
                    if (o) {
                      j(e);
                      var r = this.state,
                        i = this.props,
                        a = r.bounds,
                        u = r.handle,
                        s = a[null === u ? r.recent : u],
                        l = o(s, i),
                        c = K({
                          value: l,
                          handle: u,
                          bounds: r.bounds,
                          props: i,
                        });
                      if (c === s) return;
                      this.moveTo(c, !0);
                    }
                  },
                },
                {
                  key: "getValue",
                  value: function () {
                    return this.state.bounds;
                  },
                },
                {
                  key: "getClosestBound",
                  value: function (e) {
                    for (
                      var t = this.state.bounds, n = 0, o = 1;
                      o < t.length - 1;
                      o += 1
                    )
                      e >= t[o] && (n = o);
                    return (
                      Math.abs(t[n + 1] - e) < Math.abs(t[n] - e) && (n += 1), n
                    );
                  },
                },
                {
                  key: "getBoundNeedMoving",
                  value: function (e, t) {
                    var n = this.state,
                      o = n.bounds,
                      r = n.recent,
                      i = t,
                      a = o[t + 1] === o[t];
                    return (
                      a && o[r] === o[t] && (i = r),
                      a && e !== o[t + 1] && (i = e < o[t + 1] ? t : t + 1),
                      i
                    );
                  },
                },
                {
                  key: "getLowerBound",
                  value: function () {
                    return this.state.bounds[0];
                  },
                },
                {
                  key: "getUpperBound",
                  value: function () {
                    var e = this.state.bounds;
                    return e[e.length - 1];
                  },
                },
                {
                  key: "getPoints",
                  value: function () {
                    var e = this.props,
                      t = e.marks,
                      n = e.step,
                      r = e.min,
                      i = e.max,
                      a = this.internalPointsCache;
                    if (!a || a.marks !== t || a.step !== n) {
                      var u = (0, o.Z)({}, t);
                      if (null !== n) for (var s = r; s <= i; s += n) u[s] = s;
                      var l = Object.keys(u).map(parseFloat);
                      l.sort(function (e, t) {
                        return e - t;
                      }),
                        (this.internalPointsCache = {
                          marks: t,
                          step: n,
                          points: l,
                        });
                    }
                    return this.internalPointsCache.points;
                  },
                },
                {
                  key: "moveTo",
                  value: function (e, t) {
                    var n = this,
                      o = this.state,
                      r = this.props,
                      i = (0, w.Z)(o.bounds),
                      a = null === o.handle ? o.recent : o.handle;
                    i[a] = e;
                    var u = a;
                    !1 !== r.pushable
                      ? this.pushSurroundingHandles(i, u)
                      : r.allowCross &&
                        (i.sort(function (e, t) {
                          return e - t;
                        }),
                        (u = i.indexOf(e))),
                      this.onChange({ recent: u, handle: u, bounds: i }),
                      t &&
                        (this.props.onAfterChange(i),
                        this.setState({}, function () {
                          n.handlesRefs[u].focus();
                        }),
                        this.onEnd());
                  },
                },
                {
                  key: "pushSurroundingHandles",
                  value: function (e, t) {
                    var n = e[t],
                      o = this.props.pushable,
                      r = Number(o),
                      i = 0;
                    if (
                      (e[t + 1] - n < r && (i = 1),
                      n - e[t - 1] < r && (i = -1),
                      0 !== i)
                    ) {
                      var a = t + i,
                        u = i * (e[a] - n);
                      this.pushHandle(e, a, i, r - u) || (e[t] = e[a] - i * r);
                    }
                  },
                },
                {
                  key: "pushHandle",
                  value: function (e, t, n, o) {
                    for (var r = e[t], i = e[t]; n * (i - r) < o; ) {
                      if (!this.pushHandleOnePoint(e, t, n))
                        return (e[t] = r), !1;
                      i = e[t];
                    }
                    return !0;
                  },
                },
                {
                  key: "pushHandleOnePoint",
                  value: function (e, t, n) {
                    var o = this.getPoints(),
                      r = o.indexOf(e[t]) + n;
                    if (r >= o.length || r < 0) return !1;
                    var i = t + n,
                      a = o[r],
                      u = this.props.pushable,
                      s = Number(u),
                      l = n * (e[i] - a);
                    return (
                      !!this.pushHandle(e, i, n, s - l) && ((e[t] = a), !0)
                    );
                  },
                },
                {
                  key: "trimAlignValue",
                  value: function (e) {
                    var t = this.state,
                      n = t.handle,
                      o = t.bounds;
                    return K({
                      value: e,
                      handle: n,
                      bounds: o,
                      props: this.props,
                    });
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this,
                      t = this.state,
                      n = t.handle,
                      o = t.bounds,
                      r = this.props,
                      i = r.prefixCls,
                      a = r.vertical,
                      u = r.included,
                      l = r.disabled,
                      c = r.min,
                      f = r.max,
                      p = r.reverse,
                      d = r.handle,
                      v = r.trackStyle,
                      h = r.handleStyle,
                      y = r.tabIndex,
                      b = r.ariaLabelGroupForHandles,
                      w = r.ariaLabelledByGroupForHandles,
                      E = r.ariaValueTextFormatterGroupForHandles,
                      k = o.map(function (t) {
                        return e.calcOffset(t);
                      }),
                      Z = "".concat(i, "-handle"),
                      C = o.map(function (t, o) {
                        var r,
                          u = y[o] || 0;
                        (l || null === y[o]) && (u = null);
                        var s = n === o;
                        return d({
                          className: x()(
                            ((r = {}),
                            (0, m.Z)(r, Z, !0),
                            (0, m.Z)(r, "".concat(Z, "-").concat(o + 1), !0),
                            (0, m.Z)(r, "".concat(Z, "-dragging"), s),
                            r)
                          ),
                          prefixCls: i,
                          vertical: a,
                          dragging: s,
                          offset: k[o],
                          value: t,
                          index: o,
                          tabIndex: u,
                          min: c,
                          max: f,
                          reverse: p,
                          disabled: l,
                          style: h[o],
                          ref: function (t) {
                            return e.saveHandle(o, t);
                          },
                          ariaLabel: b[o],
                          ariaLabelledBy: w[o],
                          ariaValueTextFormatter: E[o],
                        });
                      });
                    return {
                      tracks: o.slice(0, -1).map(function (e, t) {
                        var n,
                          o = t + 1,
                          r = x()(
                            ((n = {}),
                            (0, m.Z)(n, "".concat(i, "-track"), !0),
                            (0, m.Z)(n, "".concat(i, "-track-").concat(o), !0),
                            n)
                          );
                        return s.createElement(g, {
                          className: r,
                          vertical: a,
                          reverse: p,
                          included: u,
                          offset: k[o - 1],
                          length: k[o] - k[o - 1],
                          style: v[t],
                          key: o,
                        });
                      }),
                      handles: C,
                    };
                  },
                },
              ],
              [
                {
                  key: "getDerivedStateFromProps",
                  value: function (e, t) {
                    if (!("value" in e || "min" in e || "max" in e))
                      return null;
                    var n = e.value || t.bounds,
                      r = n.map(function (n, o) {
                        return K({
                          value: n,
                          handle: o,
                          bounds: t.bounds,
                          props: e,
                        });
                      });
                    if (t.bounds.length === r.length) {
                      if (
                        r.every(function (e, n) {
                          return e === t.bounds[n];
                        })
                      )
                        return null;
                    } else
                      r = n.map(function (t, n) {
                        return K({ value: t, handle: n, props: e });
                      });
                    return (0, o.Z)((0, o.Z)({}, t), {}, { bounds: r });
                  },
                },
              ]
            ),
            n
          );
        })(s.Component);
      (z.displayName = "Range"),
        (z.defaultProps = {
          count: 1,
          allowCross: !0,
          pushable: !1,
          draggableTrack: !1,
          tabIndex: [],
          ariaLabelGroupForHandles: [],
          ariaLabelledByGroupForHandles: [],
          ariaValueTextFormatterGroupForHandles: [],
        });
      const Q = Y(z);
      var q = n(7326),
        $ = function (e) {
          return +setTimeout(e, 16);
        },
        J = function (e) {
          return clearTimeout(e);
        };
      "undefined" !== typeof window &&
        "requestAnimationFrame" in window &&
        (($ = function (e) {
          return window.requestAnimationFrame(e);
        }),
        (J = function (e) {
          return window.cancelAnimationFrame(e);
        }));
      var ee = 0,
        te = new Map();
      function ne(e) {
        te.delete(e);
      }
      var oe = function (e) {
        var t = (ee += 1);
        return (
          (function n(o) {
            if (0 === o) ne(t), e();
            else {
              var r = $(function () {
                n(o - 1);
              });
              te.set(t, r);
            }
          })(
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
          ),
          t
        );
      };
      oe.cancel = function (e) {
        var t = te.get(e);
        return ne(e), J(t);
      };
      const re = oe;
      function ie(e, t) {
        if (!e) return !1;
        if (e.contains) return e.contains(t);
        for (var n = t; n; ) {
          if (n === e) return !0;
          n = n.parentNode;
        }
        return !1;
      }
      function ae(e) {
        return (function (e) {
          return e instanceof HTMLElement || e instanceof SVGElement;
        })(e)
          ? e
          : e instanceof s.Component
          ? Z.findDOMNode(e)
          : null;
      }
      var ue = n(3873);
      function se(e, t) {
        "function" === typeof e
          ? e(t)
          : "object" === (0, S.Z)(e) && e && "current" in e && (e.current = t);
      }
      function le() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        var o = t.filter(function (e) {
          return e;
        });
        return o.length <= 1
          ? o[0]
          : function (e) {
              t.forEach(function (t) {
                se(t, e);
              });
            };
      }
      function ce(e) {
        var t,
          n,
          o = (0, ue.isMemo)(e) ? e.type.type : e.type;
        return (
          !!(
            "function" !== typeof o ||
            (null !== (t = o.prototype) && void 0 !== t && t.render)
          ) &&
          !!(
            "function" !== typeof e ||
            (null !== (n = e.prototype) && void 0 !== n && n.render)
          )
        );
      }
      function fe() {
        return !(
          "undefined" === typeof window ||
          !window.document ||
          !window.document.createElement
        );
      }
      const pe = (0, s.forwardRef)(function (e, t) {
        var n = e.didUpdate,
          o = e.getContainer,
          r = e.children,
          i = (0, s.useRef)(),
          a = (0, s.useRef)();
        (0, s.useImperativeHandle)(t, function () {
          return {};
        });
        var u = (0, s.useRef)(!1);
        return (
          !u.current &&
            fe() &&
            ((a.current = o()),
            (i.current = a.current.parentNode),
            (u.current = !0)),
          (0, s.useEffect)(function () {
            null === n || void 0 === n || n(e);
          }),
          (0, s.useEffect)(function () {
            return (
              null === a.current.parentNode &&
                null !== i.current &&
                i.current.appendChild(a.current),
              function () {
                var e;
                null === (e = a.current) ||
                  void 0 === e ||
                  null === (e = e.parentNode) ||
                  void 0 === e ||
                  e.removeChild(a.current);
              }
            );
          }, []),
          a.current ? Z.createPortal(r, a.current) : null
        );
      });
      function de(e, t, n) {
        return n ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
      }
      var ve = n(885);
      var he = s.createContext({});
      const me = (function (e) {
        (0, a.Z)(n, e);
        var t = (0, u.Z)(n);
        function n() {
          return (0, r.Z)(this, n), t.apply(this, arguments);
        }
        return (
          (0, i.Z)(n, [
            {
              key: "render",
              value: function () {
                return this.props.children;
              },
            },
          ]),
          n
        );
      })(s.Component);
      function ge(e) {
        var t = s.useRef(!1),
          n = s.useState(e),
          o = (0, ve.Z)(n, 2),
          r = o[0],
          i = o[1];
        return (
          s.useEffect(function () {
            return (
              (t.current = !1),
              function () {
                t.current = !0;
              }
            );
          }, []),
          [
            r,
            function (e, n) {
              (n && t.current) || i(e);
            },
          ]
        );
      }
      var ye = "none",
        be = "appear",
        we = "enter",
        Ee = "leave",
        ke = "none",
        Ze = "prepare",
        Ce = "start",
        Me = "active",
        xe = "end",
        Te = "prepared";
      function Se(e, t) {
        var n = {};
        return (
          (n[e.toLowerCase()] = t.toLowerCase()),
          (n["Webkit".concat(e)] = "webkit".concat(t)),
          (n["Moz".concat(e)] = "moz".concat(t)),
          (n["ms".concat(e)] = "MS".concat(t)),
          (n["O".concat(e)] = "o".concat(t.toLowerCase())),
          n
        );
      }
      var Oe = (function (e, t) {
          var n = {
            animationend: Se("Animation", "AnimationEnd"),
            transitionend: Se("Transition", "TransitionEnd"),
          };
          return (
            e &&
              ("AnimationEvent" in t || delete n.animationend.animation,
              "TransitionEvent" in t || delete n.transitionend.transition),
            n
          );
        })(fe(), "undefined" !== typeof window ? window : {}),
        Pe = {};
      if (fe()) {
        var Ne = document.createElement("div");
        Pe = Ne.style;
      }
      var Le = {};
      function De(e) {
        if (Le[e]) return Le[e];
        var t = Oe[e];
        if (t)
          for (var n = Object.keys(t), o = n.length, r = 0; r < o; r += 1) {
            var i = n[r];
            if (Object.prototype.hasOwnProperty.call(t, i) && i in Pe)
              return (Le[e] = t[i]), Le[e];
          }
        return "";
      }
      var Re = De("animationend"),
        Ae = De("transitionend"),
        He = !(!Re || !Ae),
        Ve = Re || "animationend",
        Fe = Ae || "transitionend";
      function Be(e, t) {
        return e
          ? "object" === (0, S.Z)(e)
            ? e[
                t.replace(/-\w/g, function (e) {
                  return e[1].toUpperCase();
                })
              ]
            : "".concat(e, "-").concat(t)
          : null;
      }
      const Ie = function (e) {
        var t = (0, s.useRef)(),
          n = (0, s.useRef)(e);
        n.current = e;
        var o = s.useCallback(function (e) {
          n.current(e);
        }, []);
        function r(e) {
          e && (e.removeEventListener(Fe, o), e.removeEventListener(Ve, o));
        }
        return (
          s.useEffect(function () {
            return function () {
              r(t.current);
            };
          }, []),
          [
            function (e) {
              t.current && t.current !== e && r(t.current),
                e &&
                  e !== t.current &&
                  (e.addEventListener(Fe, o),
                  e.addEventListener(Ve, o),
                  (t.current = e));
            },
            r,
          ]
        );
      };
      const Ue = fe() ? s.useLayoutEffect : s.useEffect;
      var _e = [Ze, Ce, Me, xe],
        je = [Ze, Te],
        We = !1,
        Xe = !0;
      function Ye(e) {
        return e === Me || e === xe;
      }
      const Ge = function (e, t, n) {
        var o = ge(ke),
          r = (0, ve.Z)(o, 2),
          i = r[0],
          a = r[1],
          u = (function () {
            var e = s.useRef(null);
            function t() {
              re.cancel(e.current);
            }
            return (
              s.useEffect(function () {
                return function () {
                  t();
                };
              }, []),
              [
                function n(o) {
                  var r =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 2;
                  t();
                  var i = re(function () {
                    r <= 1
                      ? o({
                          isCanceled: function () {
                            return i !== e.current;
                          },
                        })
                      : n(o, r - 1);
                  });
                  e.current = i;
                },
                t,
              ]
            );
          })(),
          l = (0, ve.Z)(u, 2),
          c = l[0],
          f = l[1];
        var p = t ? je : _e;
        return (
          Ue(
            function () {
              if (i !== ke && i !== xe) {
                var e = p.indexOf(i),
                  t = p[e + 1],
                  o = n(i);
                o === We
                  ? a(t, !0)
                  : t &&
                    c(function (e) {
                      function n() {
                        e.isCanceled() || a(t, !0);
                      }
                      !0 === o ? n() : Promise.resolve(o).then(n);
                    });
              }
            },
            [e, i]
          ),
          s.useEffect(function () {
            return function () {
              f();
            };
          }, []),
          [
            function () {
              a(Ze, !0);
            },
            i,
          ]
        );
      };
      const Ke = (function (e) {
        var t = e;
        "object" === (0, S.Z)(e) && (t = e.transitionSupport);
        var n = s.forwardRef(function (e, n) {
          var r = e.visible,
            i = void 0 === r || r,
            a = e.removeOnLeave,
            u = void 0 === a || a,
            l = e.forceRender,
            c = e.children,
            f = e.motionName,
            p = e.leavedClassName,
            d = e.eventProps,
            v = (function (e, n) {
              return !(!e.motionName || !t || !1 === n);
            })(e, s.useContext(he).motion),
            h = (0, s.useRef)(),
            g = (0, s.useRef)();
          var y = (function (e, t, n, r) {
              var i = r.motionEnter,
                a = void 0 === i || i,
                u = r.motionAppear,
                l = void 0 === u || u,
                c = r.motionLeave,
                f = void 0 === c || c,
                p = r.motionDeadline,
                d = r.motionLeaveImmediately,
                v = r.onAppearPrepare,
                h = r.onEnterPrepare,
                g = r.onLeavePrepare,
                y = r.onAppearStart,
                b = r.onEnterStart,
                w = r.onLeaveStart,
                E = r.onAppearActive,
                k = r.onEnterActive,
                Z = r.onLeaveActive,
                C = r.onAppearEnd,
                M = r.onEnterEnd,
                x = r.onLeaveEnd,
                T = r.onVisibleChanged,
                S = ge(),
                O = (0, ve.Z)(S, 2),
                P = O[0],
                N = O[1],
                L = ge(ye),
                D = (0, ve.Z)(L, 2),
                R = D[0],
                A = D[1],
                H = ge(null),
                V = (0, ve.Z)(H, 2),
                F = V[0],
                B = V[1],
                I = (0, s.useRef)(!1),
                U = (0, s.useRef)(null);
              function _() {
                return n();
              }
              var j = (0, s.useRef)(!1);
              function W() {
                A(ye, !0), B(null, !0);
              }
              function X(e) {
                var t = _();
                if (!e || e.deadline || e.target === t) {
                  var n,
                    o = j.current;
                  R === be && o
                    ? (n = null === C || void 0 === C ? void 0 : C(t, e))
                    : R === we && o
                    ? (n = null === M || void 0 === M ? void 0 : M(t, e))
                    : R === Ee &&
                      o &&
                      (n = null === x || void 0 === x ? void 0 : x(t, e)),
                    R !== ye && o && !1 !== n && W();
                }
              }
              var Y = Ie(X),
                G = (0, ve.Z)(Y, 1)[0],
                K = function (e) {
                  var t, n, o;
                  switch (e) {
                    case be:
                      return (
                        (t = {}),
                        (0, m.Z)(t, Ze, v),
                        (0, m.Z)(t, Ce, y),
                        (0, m.Z)(t, Me, E),
                        t
                      );
                    case we:
                      return (
                        (n = {}),
                        (0, m.Z)(n, Ze, h),
                        (0, m.Z)(n, Ce, b),
                        (0, m.Z)(n, Me, k),
                        n
                      );
                    case Ee:
                      return (
                        (o = {}),
                        (0, m.Z)(o, Ze, g),
                        (0, m.Z)(o, Ce, w),
                        (0, m.Z)(o, Me, Z),
                        o
                      );
                    default:
                      return {};
                  }
                },
                z = s.useMemo(
                  function () {
                    return K(R);
                  },
                  [R]
                ),
                Q = Ge(R, !e, function (e) {
                  if (e === Ze) {
                    var t = z[Ze];
                    return t ? t(_()) : We;
                  }
                  var n;
                  return (
                    J in z &&
                      B(
                        (null === (n = z[J]) || void 0 === n
                          ? void 0
                          : n.call(z, _(), null)) || null
                      ),
                    J === Me &&
                      (G(_()),
                      p > 0 &&
                        (clearTimeout(U.current),
                        (U.current = setTimeout(function () {
                          X({ deadline: !0 });
                        }, p)))),
                    J === Te && W(),
                    Xe
                  );
                }),
                q = (0, ve.Z)(Q, 2),
                $ = q[0],
                J = q[1],
                ee = Ye(J);
              (j.current = ee),
                Ue(
                  function () {
                    N(t);
                    var n,
                      o = I.current;
                    (I.current = !0),
                      !o && t && l && (n = be),
                      o && t && a && (n = we),
                      ((o && !t && f) || (!o && d && !t && f)) && (n = Ee);
                    var r = K(n);
                    n && (e || r[Ze]) ? (A(n), $()) : A(ye);
                  },
                  [t]
                ),
                (0, s.useEffect)(
                  function () {
                    ((R === be && !l) ||
                      (R === we && !a) ||
                      (R === Ee && !f)) &&
                      A(ye);
                  },
                  [l, a, f]
                ),
                (0, s.useEffect)(function () {
                  return function () {
                    (I.current = !1), clearTimeout(U.current);
                  };
                }, []);
              var te = s.useRef(!1);
              (0, s.useEffect)(
                function () {
                  P && (te.current = !0),
                    void 0 !== P &&
                      R === ye &&
                      ((te.current || P) &&
                        (null === T || void 0 === T || T(P)),
                      (te.current = !0));
                },
                [P, R]
              );
              var ne = F;
              return (
                z[Ze] &&
                  J === Ce &&
                  (ne = (0, o.Z)({ transition: "none" }, ne)),
                [R, J, ne, null !== P && void 0 !== P ? P : t]
              );
            })(
              v,
              i,
              function () {
                try {
                  return h.current instanceof HTMLElement
                    ? h.current
                    : ae(g.current);
                } catch (e) {
                  return null;
                }
              },
              e
            ),
            b = (0, ve.Z)(y, 4),
            w = b[0],
            E = b[1],
            k = b[2],
            Z = b[3],
            C = s.useRef(Z);
          Z && (C.current = !0);
          var M,
            T = s.useCallback(
              function (e) {
                (h.current = e), se(n, e);
              },
              [n]
            ),
            S = (0, o.Z)((0, o.Z)({}, d), {}, { visible: i });
          if (c)
            if (w === ye)
              M = Z
                ? c((0, o.Z)({}, S), T)
                : !u && C.current && p
                ? c((0, o.Z)((0, o.Z)({}, S), {}, { className: p }), T)
                : l || (!u && !p)
                ? c(
                    (0, o.Z)(
                      (0, o.Z)({}, S),
                      {},
                      { style: { display: "none" } }
                    ),
                    T
                  )
                : null;
            else {
              var O, P;
              E === Ze
                ? (P = "prepare")
                : Ye(E)
                ? (P = "active")
                : E === Ce && (P = "start");
              var N = Be(f, "".concat(w, "-").concat(P));
              M = c(
                (0, o.Z)(
                  (0, o.Z)({}, S),
                  {},
                  {
                    className: x()(
                      Be(f, w),
                      ((O = {}),
                      (0, m.Z)(O, N, N && P),
                      (0, m.Z)(O, f, "string" === typeof f),
                      O)
                    ),
                    style: k,
                  }
                ),
                T
              );
            }
          else M = null;
          s.isValidElement(M) &&
            ce(M) &&
            (M.ref || (M = s.cloneElement(M, { ref: T })));
          return s.createElement(me, { ref: g }, M);
        });
        return (n.displayName = "CSSMotion"), n;
      })(He);
      var ze = "add",
        Qe = "keep",
        qe = "remove",
        $e = "removed";
      function Je(e) {
        var t;
        return (
          (t = e && "object" === (0, S.Z)(e) && "key" in e ? e : { key: e }),
          (0, o.Z)((0, o.Z)({}, t), {}, { key: String(t.key) })
        );
      }
      function et() {
        return (
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
        ).map(Je);
      }
      var tt = ["component", "children", "onVisibleChanged", "onAllRemoved"],
        nt = ["status"],
        ot = [
          "eventProps",
          "visible",
          "children",
          "motionName",
          "motionAppear",
          "motionEnter",
          "motionLeave",
          "motionLeaveImmediately",
          "motionDeadline",
          "removeOnLeave",
          "leavedClassName",
          "onAppearPrepare",
          "onAppearStart",
          "onAppearActive",
          "onAppearEnd",
          "onEnterStart",
          "onEnterActive",
          "onEnterEnd",
          "onLeaveStart",
          "onLeaveActive",
          "onLeaveEnd",
        ];
      !(function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ke,
          n = (function (e) {
            (0, a.Z)(l, e);
            var n = (0, u.Z)(l);
            function l() {
              var e;
              (0, r.Z)(this, l);
              for (
                var t = arguments.length, i = new Array(t), a = 0;
                a < t;
                a++
              )
                i[a] = arguments[a];
              return (
                (e = n.call.apply(n, [this].concat(i))),
                (0, m.Z)((0, q.Z)(e), "state", { keyEntities: [] }),
                (0, m.Z)((0, q.Z)(e), "removeKey", function (t) {
                  var n = e.state.keyEntities.map(function (e) {
                    return e.key !== t
                      ? e
                      : (0, o.Z)((0, o.Z)({}, e), {}, { status: $e });
                  });
                  return (
                    e.setState({ keyEntities: n }),
                    n.filter(function (e) {
                      return e.status !== $e;
                    }).length
                  );
                }),
                e
              );
            }
            return (
              (0, i.Z)(
                l,
                [
                  {
                    key: "render",
                    value: function () {
                      var e = this,
                        n = this.state.keyEntities,
                        r = this.props,
                        i = r.component,
                        a = r.children,
                        u = r.onVisibleChanged,
                        l = r.onAllRemoved,
                        c = (0, b.Z)(r, tt),
                        f = i || s.Fragment,
                        p = {};
                      return (
                        ot.forEach(function (e) {
                          (p[e] = c[e]), delete c[e];
                        }),
                        delete c.keys,
                        s.createElement(
                          f,
                          c,
                          n.map(function (n, r) {
                            var i = n.status,
                              c = (0, b.Z)(n, nt),
                              f = i === ze || i === Qe;
                            return s.createElement(
                              t,
                              (0, y.Z)({}, p, {
                                key: c.key,
                                visible: f,
                                eventProps: c,
                                onVisibleChanged: function (t) {
                                  (null === u ||
                                    void 0 === u ||
                                    u(t, { key: c.key }),
                                  t) ||
                                    (0 === e.removeKey(c.key) && l && l());
                                },
                              }),
                              function (e, t) {
                                return a(
                                  (0, o.Z)((0, o.Z)({}, e), {}, { index: r }),
                                  t
                                );
                              }
                            );
                          })
                        )
                      );
                    },
                  },
                ],
                [
                  {
                    key: "getDerivedStateFromProps",
                    value: function (e, t) {
                      var n = e.keys,
                        r = t.keyEntities,
                        i = et(n),
                        a = (function () {
                          var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : [],
                            t =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : [],
                            n = [],
                            r = 0,
                            i = t.length,
                            a = et(e),
                            u = et(t);
                          a.forEach(function (e) {
                            for (var t = !1, a = r; a < i; a += 1) {
                              var s = u[a];
                              if (s.key === e.key) {
                                r < a &&
                                  ((n = n.concat(
                                    u.slice(r, a).map(function (e) {
                                      return (0,
                                      o.Z)((0, o.Z)({}, e), {}, { status: ze });
                                    })
                                  )),
                                  (r = a)),
                                  n.push(
                                    (0, o.Z)(
                                      (0, o.Z)({}, s),
                                      {},
                                      { status: Qe }
                                    )
                                  ),
                                  (r += 1),
                                  (t = !0);
                                break;
                              }
                            }
                            t ||
                              n.push(
                                (0, o.Z)((0, o.Z)({}, e), {}, { status: qe })
                              );
                          }),
                            r < i &&
                              (n = n.concat(
                                u.slice(r).map(function (e) {
                                  return (0,
                                  o.Z)((0, o.Z)({}, e), {}, { status: ze });
                                })
                              ));
                          var s = {};
                          return (
                            n.forEach(function (e) {
                              var t = e.key;
                              s[t] = (s[t] || 0) + 1;
                            }),
                            Object.keys(s)
                              .filter(function (e) {
                                return s[e] > 1;
                              })
                              .forEach(function (e) {
                                (n = n.filter(function (t) {
                                  var n = t.key,
                                    o = t.status;
                                  return n !== e || o !== qe;
                                })).forEach(function (t) {
                                  t.key === e && (t.status = Qe);
                                });
                              }),
                            n
                          );
                        })(r, i);
                      return {
                        keyEntities: a.filter(function (e) {
                          var t = r.find(function (t) {
                            var n = t.key;
                            return e.key === n;
                          });
                          return !t || t.status !== $e || e.status !== qe;
                        }),
                      };
                    },
                  },
                ]
              ),
              l
            );
          })(s.Component);
        (0, m.Z)(n, "defaultProps", { component: "div" });
      })(He);
      const rt = Ke;
      function it(e) {
        var t = e.prefixCls,
          n = e.motion,
          o = e.animation,
          r = e.transitionName;
        return (
          n ||
          (o
            ? { motionName: "".concat(t, "-").concat(o) }
            : r
            ? { motionName: r }
            : null)
        );
      }
      function at(e) {
        var t = e.prefixCls,
          n = e.visible,
          r = e.zIndex,
          i = e.mask,
          a = e.maskMotion,
          u = e.maskAnimation,
          l = e.maskTransitionName;
        if (!i) return null;
        var c = {};
        return (
          (a || l || u) &&
            (c = (0, o.Z)(
              { motionAppear: !0 },
              it({ motion: a, prefixCls: t, transitionName: l, animation: u })
            )),
          s.createElement(
            rt,
            (0, y.Z)({}, c, { visible: n, removeOnLeave: !0 }),
            function (e) {
              var n = e.className;
              return s.createElement("div", {
                style: { zIndex: r },
                className: x()("".concat(t, "-mask"), n),
              });
            }
          )
        );
      }
      function ut(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function st(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ut(Object(n), !0).forEach(function (t) {
                ct(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ut(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function lt(e) {
        return (
          (lt =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          lt(e)
        );
      }
      function ct(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var ft,
        pt = { Webkit: "-webkit-", Moz: "-moz-", ms: "-ms-", O: "-o-" };
      function dt() {
        if (void 0 !== ft) return ft;
        ft = "";
        var e = document.createElement("p").style;
        for (var t in pt) t + "Transform" in e && (ft = t);
        return ft;
      }
      function vt() {
        return dt()
          ? "".concat(dt(), "TransitionProperty")
          : "transitionProperty";
      }
      function ht() {
        return dt() ? "".concat(dt(), "Transform") : "transform";
      }
      function mt(e, t) {
        var n = vt();
        n &&
          ((e.style[n] = t),
          "transitionProperty" !== n && (e.style.transitionProperty = t));
      }
      function gt(e, t) {
        var n = ht();
        n && ((e.style[n] = t), "transform" !== n && (e.style.transform = t));
      }
      var yt,
        bt = /matrix\((.*)\)/,
        wt = /matrix3d\((.*)\)/;
      function Et(e) {
        var t = e.style.display;
        (e.style.display = "none"), e.offsetHeight, (e.style.display = t);
      }
      function kt(e, t, n) {
        var o = n;
        if ("object" !== lt(t))
          return "undefined" !== typeof o
            ? ("number" === typeof o && (o = "".concat(o, "px")),
              void (e.style[t] = o))
            : yt(e, t);
        for (var r in t) t.hasOwnProperty(r) && kt(e, r, t[r]);
      }
      function Zt(e, t) {
        var n = e["page".concat(t ? "Y" : "X", "Offset")],
          o = "scroll".concat(t ? "Top" : "Left");
        if ("number" !== typeof n) {
          var r = e.document;
          "number" !== typeof (n = r.documentElement[o]) && (n = r.body[o]);
        }
        return n;
      }
      function Ct(e) {
        return Zt(e);
      }
      function Mt(e) {
        return Zt(e, !0);
      }
      function xt(e) {
        var t = (function (e) {
            var t,
              n,
              o,
              r = e.ownerDocument,
              i = r.body,
              a = r && r.documentElement;
            return (
              (t = e.getBoundingClientRect()),
              (n = Math.floor(t.left)),
              (o = Math.floor(t.top)),
              {
                left: (n -= a.clientLeft || i.clientLeft || 0),
                top: (o -= a.clientTop || i.clientTop || 0),
              }
            );
          })(e),
          n = e.ownerDocument,
          o = n.defaultView || n.parentWindow;
        return (t.left += Ct(o)), (t.top += Mt(o)), t;
      }
      function Tt(e) {
        return null !== e && void 0 !== e && e == e.window;
      }
      function St(e) {
        return Tt(e) ? e.document : 9 === e.nodeType ? e : e.ownerDocument;
      }
      var Ot = new RegExp(
          "^(".concat(
            /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
            ")(?!px)[a-z%]+$"
          ),
          "i"
        ),
        Pt = /^(top|right|bottom|left)$/,
        Nt = "currentStyle",
        Lt = "runtimeStyle",
        Dt = "left";
      function Rt(e, t) {
        return "left" === e
          ? t.useCssRight
            ? "right"
            : e
          : t.useCssBottom
          ? "bottom"
          : e;
      }
      function At(e) {
        return "left" === e
          ? "right"
          : "right" === e
          ? "left"
          : "top" === e
          ? "bottom"
          : "bottom" === e
          ? "top"
          : void 0;
      }
      function Ht(e, t, n) {
        "static" === kt(e, "position") && (e.style.position = "relative");
        var o = -999,
          r = -999,
          i = Rt("left", n),
          a = Rt("top", n),
          u = At(i),
          s = At(a);
        "left" !== i && (o = 999), "top" !== a && (r = 999);
        var l,
          c = "",
          f = xt(e);
        ("left" in t || "top" in t) &&
          ((c = (l = e).style.transitionProperty || l.style[vt()] || ""),
          mt(e, "none")),
          "left" in t && ((e.style[u] = ""), (e.style[i] = "".concat(o, "px"))),
          "top" in t && ((e.style[s] = ""), (e.style[a] = "".concat(r, "px"))),
          Et(e);
        var p = xt(e),
          d = {};
        for (var v in t)
          if (t.hasOwnProperty(v)) {
            var h = Rt(v, n),
              m = "left" === v ? o : r,
              g = f[v] - p[v];
            d[h] = h === v ? m + g : m - g;
          }
        kt(e, d), Et(e), ("left" in t || "top" in t) && mt(e, c);
        var y = {};
        for (var b in t)
          if (t.hasOwnProperty(b)) {
            var w = Rt(b, n),
              E = t[b] - f[b];
            y[w] = b === w ? d[w] + E : d[w] - E;
          }
        kt(e, y);
      }
      function Vt(e, t) {
        var n = xt(e),
          o = (function (e) {
            var t = window.getComputedStyle(e, null),
              n = t.getPropertyValue("transform") || t.getPropertyValue(ht());
            if (n && "none" !== n) {
              var o = n.replace(/[^0-9\-.,]/g, "").split(",");
              return {
                x: parseFloat(o[12] || o[4], 0),
                y: parseFloat(o[13] || o[5], 0),
              };
            }
            return { x: 0, y: 0 };
          })(e),
          r = { x: o.x, y: o.y };
        "left" in t && (r.x = o.x + t.left - n.left),
          "top" in t && (r.y = o.y + t.top - n.top),
          (function (e, t) {
            var n = window.getComputedStyle(e, null),
              o = n.getPropertyValue("transform") || n.getPropertyValue(ht());
            if (o && "none" !== o) {
              var r,
                i = o.match(bt);
              i
                ? (((r = (i = i[1]).split(",").map(function (e) {
                    return parseFloat(e, 10);
                  }))[4] = t.x),
                  (r[5] = t.y),
                  gt(e, "matrix(".concat(r.join(","), ")")))
                : (((r = o
                    .match(wt)[1]
                    .split(",")
                    .map(function (e) {
                      return parseFloat(e, 10);
                    }))[12] = t.x),
                  (r[13] = t.y),
                  gt(e, "matrix3d(".concat(r.join(","), ")")));
            } else
              gt(
                e,
                "translateX("
                  .concat(t.x, "px) translateY(")
                  .concat(t.y, "px) translateZ(0)")
              );
          })(e, r);
      }
      function Ft(e, t) {
        for (var n = 0; n < e.length; n++) t(e[n]);
      }
      function Bt(e) {
        return "border-box" === yt(e, "boxSizing");
      }
      "undefined" !== typeof window &&
        (yt = window.getComputedStyle
          ? function (e, t, n) {
              var o = n,
                r = "",
                i = St(e);
              return (
                (o = o || i.defaultView.getComputedStyle(e, null)) &&
                  (r = o.getPropertyValue(t) || o[t]),
                r
              );
            }
          : function (e, t) {
              var n = e[Nt] && e[Nt][t];
              if (Ot.test(n) && !Pt.test(t)) {
                var o = e.style,
                  r = o[Dt],
                  i = e[Lt][Dt];
                (e[Lt][Dt] = e[Nt][Dt]),
                  (o[Dt] = "fontSize" === t ? "1em" : n || 0),
                  (n = o.pixelLeft + "px"),
                  (o[Dt] = r),
                  (e[Lt][Dt] = i);
              }
              return "" === n ? "auto" : n;
            });
      var It = ["margin", "border", "padding"],
        Ut = -1,
        _t = 2,
        jt = 1;
      function Wt(e, t, n) {
        var o,
          r,
          i,
          a = 0;
        for (r = 0; r < t.length; r++)
          if ((o = t[r]))
            for (i = 0; i < n.length; i++) {
              var u = void 0;
              (u =
                "border" === o ? "".concat(o).concat(n[i], "Width") : o + n[i]),
                (a += parseFloat(yt(e, u)) || 0);
            }
        return a;
      }
      var Xt = {
        getParent: function (e) {
          var t = e;
          do {
            t = 11 === t.nodeType && t.host ? t.host : t.parentNode;
          } while (t && 1 !== t.nodeType && 9 !== t.nodeType);
          return t;
        },
      };
      function Yt(e, t, n) {
        var o = n;
        if (Tt(e))
          return "width" === t ? Xt.viewportWidth(e) : Xt.viewportHeight(e);
        if (9 === e.nodeType)
          return "width" === t ? Xt.docWidth(e) : Xt.docHeight(e);
        var r = "width" === t ? ["Left", "Right"] : ["Top", "Bottom"],
          i =
            "width" === t
              ? Math.floor(e.getBoundingClientRect().width)
              : Math.floor(e.getBoundingClientRect().height),
          a = Bt(e),
          u = 0;
        (null === i || void 0 === i || i <= 0) &&
          ((i = void 0),
          (null === (u = yt(e, t)) || void 0 === u || Number(u) < 0) &&
            (u = e.style[t] || 0),
          (u = Math.floor(parseFloat(u)) || 0)),
          void 0 === o && (o = a ? jt : Ut);
        var s = void 0 !== i || a,
          l = i || u;
        return o === Ut
          ? s
            ? l - Wt(e, ["border", "padding"], r)
            : u
          : s
          ? o === jt
            ? l
            : l + (o === _t ? -Wt(e, ["border"], r) : Wt(e, ["margin"], r))
          : u + Wt(e, It.slice(o), r);
      }
      Ft(["Width", "Height"], function (e) {
        (Xt["doc".concat(e)] = function (t) {
          var n = t.document;
          return Math.max(
            n.documentElement["scroll".concat(e)],
            n.body["scroll".concat(e)],
            Xt["viewport".concat(e)](n)
          );
        }),
          (Xt["viewport".concat(e)] = function (t) {
            var n = "client".concat(e),
              o = t.document,
              r = o.body,
              i = o.documentElement[n];
            return ("CSS1Compat" === o.compatMode && i) || (r && r[n]) || i;
          });
      });
      var Gt = { position: "absolute", visibility: "hidden", display: "block" };
      function Kt() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        var o,
          r = t[0];
        return (
          0 !== r.offsetWidth
            ? (o = Yt.apply(void 0, t))
            : (function (e, t, n) {
                var o,
                  r = {},
                  i = e.style;
                for (o in t)
                  t.hasOwnProperty(o) && ((r[o] = i[o]), (i[o] = t[o]));
                for (o in (n.call(e), t)) t.hasOwnProperty(o) && (i[o] = r[o]);
              })(r, Gt, function () {
                o = Yt.apply(void 0, t);
              }),
          o
        );
      }
      function zt(e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        return e;
      }
      Ft(["width", "height"], function (e) {
        var t = e.charAt(0).toUpperCase() + e.slice(1);
        Xt["outer".concat(t)] = function (t, n) {
          return t && Kt(t, e, n ? 0 : jt);
        };
        var n = "width" === e ? ["Left", "Right"] : ["Top", "Bottom"];
        Xt[e] = function (t, o) {
          var r = o;
          return void 0 !== r
            ? t
              ? (Bt(t) && (r += Wt(t, ["padding", "border"], n)), kt(t, e, r))
              : void 0
            : t && Kt(t, e, Ut);
        };
      });
      var Qt = {
        getWindow: function (e) {
          if (e && e.document && e.setTimeout) return e;
          var t = e.ownerDocument || e;
          return t.defaultView || t.parentWindow;
        },
        getDocument: St,
        offset: function (e, t, n) {
          if ("undefined" === typeof t) return xt(e);
          !(function (e, t, n) {
            if (n.ignoreShake) {
              var o = xt(e),
                r = o.left.toFixed(0),
                i = o.top.toFixed(0),
                a = t.left.toFixed(0),
                u = t.top.toFixed(0);
              if (r === a && i === u) return;
            }
            n.useCssRight || n.useCssBottom
              ? Ht(e, t, n)
              : n.useCssTransform && ht() in document.body.style
              ? Vt(e, t)
              : Ht(e, t, n);
          })(e, t, n || {});
        },
        isWindow: Tt,
        each: Ft,
        css: kt,
        clone: function (e) {
          var t,
            n = {};
          for (t in e) e.hasOwnProperty(t) && (n[t] = e[t]);
          if (e.overflow)
            for (t in e) e.hasOwnProperty(t) && (n.overflow[t] = e.overflow[t]);
          return n;
        },
        mix: zt,
        getWindowScrollLeft: function (e) {
          return Ct(e);
        },
        getWindowScrollTop: function (e) {
          return Mt(e);
        },
        merge: function () {
          for (var e = {}, t = 0; t < arguments.length; t++)
            Qt.mix(e, t < 0 || arguments.length <= t ? void 0 : arguments[t]);
          return e;
        },
        viewportWidth: 0,
        viewportHeight: 0,
      };
      zt(Qt, Xt);
      var qt = Qt.getParent;
      function $t(e) {
        if (Qt.isWindow(e) || 9 === e.nodeType) return null;
        var t,
          n = Qt.getDocument(e).body,
          o = Qt.css(e, "position");
        if (!("fixed" === o || "absolute" === o))
          return "html" === e.nodeName.toLowerCase() ? null : qt(e);
        for (t = qt(e); t && t !== n && 9 !== t.nodeType; t = qt(t))
          if ("static" !== (o = Qt.css(t, "position"))) return t;
        return null;
      }
      var Jt = Qt.getParent;
      function en(e, t) {
        for (
          var n = { left: 0, right: 1 / 0, top: 0, bottom: 1 / 0 },
            o = $t(e),
            r = Qt.getDocument(e),
            i = r.defaultView || r.parentWindow,
            a = r.body,
            u = r.documentElement;
          o;

        ) {
          if (
            (-1 !== navigator.userAgent.indexOf("MSIE") &&
              0 === o.clientWidth) ||
            o === a ||
            o === u ||
            "visible" === Qt.css(o, "overflow")
          ) {
            if (o === a || o === u) break;
          } else {
            var s = Qt.offset(o);
            (s.left += o.clientLeft),
              (s.top += o.clientTop),
              (n.top = Math.max(n.top, s.top)),
              (n.right = Math.min(n.right, s.left + o.clientWidth)),
              (n.bottom = Math.min(n.bottom, s.top + o.clientHeight)),
              (n.left = Math.max(n.left, s.left));
          }
          o = $t(o);
        }
        var l = null;
        Qt.isWindow(e) ||
          9 === e.nodeType ||
          ((l = e.style.position),
          "absolute" === Qt.css(e, "position") && (e.style.position = "fixed"));
        var c = Qt.getWindowScrollLeft(i),
          f = Qt.getWindowScrollTop(i),
          p = Qt.viewportWidth(i),
          d = Qt.viewportHeight(i),
          v = u.scrollWidth,
          h = u.scrollHeight,
          m = window.getComputedStyle(a);
        if (
          ("hidden" === m.overflowX && (v = i.innerWidth),
          "hidden" === m.overflowY && (h = i.innerHeight),
          e.style && (e.style.position = l),
          t ||
            (function (e) {
              if (Qt.isWindow(e) || 9 === e.nodeType) return !1;
              var t = Qt.getDocument(e),
                n = t.body,
                o = null;
              for (o = Jt(e); o && o !== n && o !== t; o = Jt(o))
                if ("fixed" === Qt.css(o, "position")) return !0;
              return !1;
            })(e))
        )
          (n.left = Math.max(n.left, c)),
            (n.top = Math.max(n.top, f)),
            (n.right = Math.min(n.right, c + p)),
            (n.bottom = Math.min(n.bottom, f + d));
        else {
          var g = Math.max(v, c + p);
          n.right = Math.min(n.right, g);
          var y = Math.max(h, f + d);
          n.bottom = Math.min(n.bottom, y);
        }
        return n.top >= 0 && n.left >= 0 && n.bottom > n.top && n.right > n.left
          ? n
          : null;
      }
      function tn(e) {
        var t, n, o;
        if (Qt.isWindow(e) || 9 === e.nodeType) {
          var r = Qt.getWindow(e);
          (t = {
            left: Qt.getWindowScrollLeft(r),
            top: Qt.getWindowScrollTop(r),
          }),
            (n = Qt.viewportWidth(r)),
            (o = Qt.viewportHeight(r));
        } else
          (t = Qt.offset(e)), (n = Qt.outerWidth(e)), (o = Qt.outerHeight(e));
        return (t.width = n), (t.height = o), t;
      }
      function nn(e, t) {
        var n = t.charAt(0),
          o = t.charAt(1),
          r = e.width,
          i = e.height,
          a = e.left,
          u = e.top;
        return (
          "c" === n ? (u += i / 2) : "b" === n && (u += i),
          "c" === o ? (a += r / 2) : "r" === o && (a += r),
          { left: a, top: u }
        );
      }
      function on(e, t, n, o, r) {
        var i = nn(t, n[1]),
          a = nn(e, n[0]),
          u = [a.left - i.left, a.top - i.top];
        return {
          left: Math.round(e.left - u[0] + o[0] - r[0]),
          top: Math.round(e.top - u[1] + o[1] - r[1]),
        };
      }
      function rn(e, t, n) {
        return e.left < n.left || e.left + t.width > n.right;
      }
      function an(e, t, n) {
        return e.top < n.top || e.top + t.height > n.bottom;
      }
      function un(e, t, n) {
        var o = [];
        return (
          Qt.each(e, function (e) {
            o.push(
              e.replace(t, function (e) {
                return n[e];
              })
            );
          }),
          o
        );
      }
      function sn(e, t) {
        return (e[t] = -e[t]), e;
      }
      function ln(e, t) {
        return (
          (/%$/.test(e)
            ? (parseInt(e.substring(0, e.length - 1), 10) / 100) * t
            : parseInt(e, 10)) || 0
        );
      }
      function cn(e, t) {
        (e[0] = ln(e[0], t.width)), (e[1] = ln(e[1], t.height));
      }
      function fn(e, t, n, o) {
        var r = n.points,
          i = n.offset || [0, 0],
          a = n.targetOffset || [0, 0],
          u = n.overflow,
          s = n.source || e;
        (i = [].concat(i)), (a = [].concat(a));
        var l = {},
          c = 0,
          f = en(s, !(!(u = u || {}) || !u.alwaysByViewport)),
          p = tn(s);
        cn(i, p), cn(a, t);
        var d = on(p, t, r, i, a),
          v = Qt.merge(p, d);
        if (f && (u.adjustX || u.adjustY) && o) {
          if (u.adjustX && rn(d, p, f)) {
            var h = un(r, /[lr]/gi, { l: "r", r: "l" }),
              m = sn(i, 0),
              g = sn(a, 0);
            (function (e, t, n) {
              return e.left > n.right || e.left + t.width < n.left;
            })(on(p, t, h, m, g), p, f) || ((c = 1), (r = h), (i = m), (a = g));
          }
          if (u.adjustY && an(d, p, f)) {
            var y = un(r, /[tb]/gi, { t: "b", b: "t" }),
              b = sn(i, 1),
              w = sn(a, 1);
            (function (e, t, n) {
              return e.top > n.bottom || e.top + t.height < n.top;
            })(on(p, t, y, b, w), p, f) || ((c = 1), (r = y), (i = b), (a = w));
          }
          c && ((d = on(p, t, r, i, a)), Qt.mix(v, d));
          var E = rn(d, p, f),
            k = an(d, p, f);
          if (E || k) {
            var Z = r;
            E && (Z = un(r, /[lr]/gi, { l: "r", r: "l" })),
              k && (Z = un(r, /[tb]/gi, { t: "b", b: "t" })),
              (r = Z),
              (i = n.offset || [0, 0]),
              (a = n.targetOffset || [0, 0]);
          }
          (l.adjustX = u.adjustX && E),
            (l.adjustY = u.adjustY && k),
            (l.adjustX || l.adjustY) &&
              (v = (function (e, t, n, o) {
                var r = Qt.clone(e),
                  i = { width: t.width, height: t.height };
                return (
                  o.adjustX && r.left < n.left && (r.left = n.left),
                  o.resizeWidth &&
                    r.left >= n.left &&
                    r.left + i.width > n.right &&
                    (i.width -= r.left + i.width - n.right),
                  o.adjustX &&
                    r.left + i.width > n.right &&
                    (r.left = Math.max(n.right - i.width, n.left)),
                  o.adjustY && r.top < n.top && (r.top = n.top),
                  o.resizeHeight &&
                    r.top >= n.top &&
                    r.top + i.height > n.bottom &&
                    (i.height -= r.top + i.height - n.bottom),
                  o.adjustY &&
                    r.top + i.height > n.bottom &&
                    (r.top = Math.max(n.bottom - i.height, n.top)),
                  Qt.mix(r, i)
                );
              })(d, p, f, l));
        }
        return (
          v.width !== p.width &&
            Qt.css(s, "width", Qt.width(s) + v.width - p.width),
          v.height !== p.height &&
            Qt.css(s, "height", Qt.height(s) + v.height - p.height),
          Qt.offset(
            s,
            { left: v.left, top: v.top },
            {
              useCssRight: n.useCssRight,
              useCssBottom: n.useCssBottom,
              useCssTransform: n.useCssTransform,
              ignoreShake: n.ignoreShake,
            }
          ),
          { points: r, offset: i, targetOffset: a, overflow: l }
        );
      }
      function pn(e, t, n) {
        var o = n.target || t,
          r = tn(o),
          i = !(function (e, t) {
            var n = en(e, t),
              o = tn(e);
            return (
              !n ||
              o.left + o.width <= n.left ||
              o.top + o.height <= n.top ||
              o.left >= n.right ||
              o.top >= n.bottom
            );
          })(o, n.overflow && n.overflow.alwaysByViewport);
        return fn(e, r, n, i);
      }
      (pn.__getOffsetParent = $t), (pn.__getVisibleRectForElement = en);
      const dn = function (e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          o = new Set();
        return (function e(t, r) {
          var i =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 1,
            a = o.has(t);
          if ((h(!a, "Warning: There may be circular references"), a))
            return !1;
          if (t === r) return !0;
          if (n && i > 1) return !1;
          o.add(t);
          var u = i + 1;
          if (Array.isArray(t)) {
            if (!Array.isArray(r) || t.length !== r.length) return !1;
            for (var s = 0; s < t.length; s++) if (!e(t[s], r[s], u)) return !1;
            return !0;
          }
          if (t && r && "object" === (0, S.Z)(t) && "object" === (0, S.Z)(r)) {
            var l = Object.keys(t);
            return (
              l.length === Object.keys(r).length &&
              l.every(function (n) {
                return e(t[n], r[n], u);
              })
            );
          }
          return !1;
        })(e, t);
      };
      var vn = fe() ? s.useLayoutEffect : s.useEffect,
        hn = function (e, t) {
          var n = s.useRef(!0);
          vn(function () {
            return e(n.current);
          }, t),
            vn(function () {
              return (
                (n.current = !1),
                function () {
                  n.current = !0;
                }
              );
            }, []);
        };
      const mn = hn;
      var gn = n(474);
      function yn(e, t) {
        var n = null,
          o = null;
        var r = new gn.default(function (e) {
          var r = (0, ve.Z)(e, 1)[0].target;
          if (document.documentElement.contains(r)) {
            var i = r.getBoundingClientRect(),
              a = i.width,
              u = i.height,
              s = Math.floor(a),
              l = Math.floor(u);
            (n === s && o === l) ||
              Promise.resolve().then(function () {
                t({ width: s, height: l });
              }),
              (n = s),
              (o = l);
          }
        });
        return (
          e && r.observe(e),
          function () {
            r.disconnect();
          }
        );
      }
      function bn(e) {
        return "function" !== typeof e ? null : e();
      }
      function wn(e) {
        return "object" === (0, S.Z)(e) && e ? e : null;
      }
      var En = function (e, t) {
          var n = e.children,
            o = e.disabled,
            r = e.target,
            i = e.align,
            a = e.onAlign,
            u = e.monitorWindowResize,
            l = e.monitorBufferTime,
            c = void 0 === l ? 0 : l,
            f = s.useRef({}),
            p = s.useRef(),
            d = s.Children.only(n),
            v = s.useRef({});
          (v.current.disabled = o),
            (v.current.target = r),
            (v.current.align = i),
            (v.current.onAlign = a);
          var h = (function (e, t) {
              var n = s.useRef(!1),
                o = s.useRef(null);
              function r() {
                window.clearTimeout(o.current);
              }
              return [
                function i(a) {
                  if ((r(), n.current && !0 !== a))
                    o.current = window.setTimeout(function () {
                      (n.current = !1), i();
                    }, t);
                  else {
                    if (!1 === e(a)) return;
                    (n.current = !0),
                      (o.current = window.setTimeout(function () {
                        n.current = !1;
                      }, t));
                  }
                },
                function () {
                  (n.current = !1), r();
                },
              ];
            })(function () {
              var e = v.current,
                t = e.disabled,
                n = e.target,
                o = e.align,
                r = e.onAlign,
                i = p.current;
              if (!t && n && i) {
                var a,
                  u = bn(n),
                  s = wn(n);
                (f.current.element = u),
                  (f.current.point = s),
                  (f.current.align = o);
                var l = document.activeElement;
                return (
                  u &&
                  (function (e) {
                    if (!e) return !1;
                    if (e instanceof Element) {
                      if (e.offsetParent) return !0;
                      if (e.getBBox) {
                        var t = e.getBBox(),
                          n = t.width,
                          o = t.height;
                        if (n || o) return !0;
                      }
                      if (e.getBoundingClientRect) {
                        var r = e.getBoundingClientRect(),
                          i = r.width,
                          a = r.height;
                        if (i || a) return !0;
                      }
                    }
                    return !1;
                  })(u)
                    ? (a = pn(i, u, o))
                    : s &&
                      (a = (function (e, t, n) {
                        var o,
                          r,
                          i = Qt.getDocument(e),
                          a = i.defaultView || i.parentWindow,
                          u = Qt.getWindowScrollLeft(a),
                          s = Qt.getWindowScrollTop(a),
                          l = Qt.viewportWidth(a),
                          c = Qt.viewportHeight(a),
                          f = {
                            left: (o = "pageX" in t ? t.pageX : u + t.clientX),
                            top: (r = "pageY" in t ? t.pageY : s + t.clientY),
                            width: 0,
                            height: 0,
                          },
                          p = o >= 0 && o <= u + l && r >= 0 && r <= s + c,
                          d = [n.points[0], "cc"];
                        return fn(e, f, st(st({}, n), {}, { points: d }), p);
                      })(i, s, o)),
                  (function (e, t) {
                    e !== document.activeElement &&
                      ie(t, e) &&
                      "function" === typeof e.focus &&
                      e.focus();
                  })(l, i),
                  r && a && r(i, a),
                  !0
                );
              }
              return !1;
            }, c),
            m = (0, ve.Z)(h, 2),
            g = m[0],
            y = m[1],
            b = s.useState(),
            w = (0, ve.Z)(b, 2),
            E = w[0],
            k = w[1],
            Z = s.useState(),
            M = (0, ve.Z)(Z, 2),
            x = M[0],
            T = M[1];
          return (
            mn(function () {
              k(bn(r)), T(wn(r));
            }),
            s.useEffect(function () {
              var e, t;
              (f.current.element === E &&
                ((e = f.current.point) === (t = x) ||
                  (e &&
                    t &&
                    ("pageX" in t && "pageY" in t
                      ? e.pageX === t.pageX && e.pageY === t.pageY
                      : "clientX" in t &&
                        "clientY" in t &&
                        e.clientX === t.clientX &&
                        e.clientY === t.clientY))) &&
                dn(f.current.align, i)) ||
                g();
            }),
            s.useEffect(
              function () {
                return yn(p.current, g);
              },
              [p.current]
            ),
            s.useEffect(
              function () {
                return yn(E, g);
              },
              [E]
            ),
            s.useEffect(
              function () {
                o ? y() : g();
              },
              [o]
            ),
            s.useEffect(
              function () {
                if (u) return C(window, "resize", g).remove;
              },
              [u]
            ),
            s.useEffect(function () {
              return function () {
                y();
              };
            }, []),
            s.useImperativeHandle(t, function () {
              return {
                forceAlign: function () {
                  return g(!0);
                },
              };
            }),
            s.isValidElement(d) &&
              (d = s.cloneElement(d, { ref: le(d.ref, p) })),
            d
          );
        },
        kn = s.forwardRef(En);
      kn.displayName = "Align";
      const Zn = kn;
      function Cn() {
        Cn = function () {
          return t;
        };
        var e,
          t = {},
          n = Object.prototype,
          o = n.hasOwnProperty,
          r =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          i = "function" == typeof Symbol ? Symbol : {},
          a = i.iterator || "@@iterator",
          u = i.asyncIterator || "@@asyncIterator",
          s = i.toStringTag || "@@toStringTag";
        function l(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          l({}, "");
        } catch (e) {
          l = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function c(e, t, n, o) {
          var i = t && t.prototype instanceof g ? t : g,
            a = Object.create(i.prototype),
            u = new N(o || []);
          return r(a, "_invoke", { value: x(e, n, u) }), a;
        }
        function f(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (e) {
            return { type: "throw", arg: e };
          }
        }
        t.wrap = c;
        var p = "suspendedStart",
          d = "suspendedYield",
          v = "executing",
          h = "completed",
          m = {};
        function g() {}
        function y() {}
        function b() {}
        var w = {};
        l(w, a, function () {
          return this;
        });
        var E = Object.getPrototypeOf,
          k = E && E(E(L([])));
        k && k !== n && o.call(k, a) && (w = k);
        var Z = (b.prototype = g.prototype = Object.create(w));
        function C(e) {
          ["next", "throw", "return"].forEach(function (t) {
            l(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function M(e, t) {
          function n(r, i, a, u) {
            var s = f(e[r], e, i);
            if ("throw" !== s.type) {
              var l = s.arg,
                c = l.value;
              return c && "object" == (0, S.Z)(c) && o.call(c, "__await")
                ? t.resolve(c.__await).then(
                    function (e) {
                      n("next", e, a, u);
                    },
                    function (e) {
                      n("throw", e, a, u);
                    }
                  )
                : t.resolve(c).then(
                    function (e) {
                      (l.value = e), a(l);
                    },
                    function (e) {
                      return n("throw", e, a, u);
                    }
                  );
            }
            u(s.arg);
          }
          var i;
          r(this, "_invoke", {
            value: function (e, o) {
              function r() {
                return new t(function (t, r) {
                  n(e, o, t, r);
                });
              }
              return (i = i ? i.then(r, r) : r());
            },
          });
        }
        function x(t, n, o) {
          var r = p;
          return function (i, a) {
            if (r === v) throw new Error("Generator is already running");
            if (r === h) {
              if ("throw" === i) throw a;
              return { value: e, done: !0 };
            }
            for (o.method = i, o.arg = a; ; ) {
              var u = o.delegate;
              if (u) {
                var s = T(u, o);
                if (s) {
                  if (s === m) continue;
                  return s;
                }
              }
              if ("next" === o.method) o.sent = o._sent = o.arg;
              else if ("throw" === o.method) {
                if (r === p) throw ((r = h), o.arg);
                o.dispatchException(o.arg);
              } else "return" === o.method && o.abrupt("return", o.arg);
              r = v;
              var l = f(t, n, o);
              if ("normal" === l.type) {
                if (((r = o.done ? h : d), l.arg === m)) continue;
                return { value: l.arg, done: o.done };
              }
              "throw" === l.type &&
                ((r = h), (o.method = "throw"), (o.arg = l.arg));
            }
          };
        }
        function T(t, n) {
          var o = n.method,
            r = t.iterator[o];
          if (r === e)
            return (
              (n.delegate = null),
              ("throw" === o &&
                t.iterator.return &&
                ((n.method = "return"),
                (n.arg = e),
                T(t, n),
                "throw" === n.method)) ||
                ("return" !== o &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + o + "' method"
                  )))),
              m
            );
          var i = f(r, t.iterator, n.arg);
          if ("throw" === i.type)
            return (
              (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), m
            );
          var a = i.arg;
          return a
            ? a.done
              ? ((n[t.resultName] = a.value),
                (n.next = t.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = e)),
                (n.delegate = null),
                m)
              : a
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              m);
        }
        function O(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function P(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function N(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(O, this),
            this.reset(!0);
        }
        function L(t) {
          if (t || "" === t) {
            var n = t[a];
            if (n) return n.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var r = -1,
                i = function n() {
                  for (; ++r < t.length; )
                    if (o.call(t, r)) return (n.value = t[r]), (n.done = !1), n;
                  return (n.value = e), (n.done = !0), n;
                };
              return (i.next = i);
            }
          }
          throw new TypeError((0, S.Z)(t) + " is not iterable");
        }
        return (
          (y.prototype = b),
          r(Z, "constructor", { value: b, configurable: !0 }),
          r(b, "constructor", { value: y, configurable: !0 }),
          (y.displayName = l(b, s, "GeneratorFunction")),
          (t.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === y || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (t.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, b)
                : ((e.__proto__ = b), l(e, s, "GeneratorFunction")),
              (e.prototype = Object.create(Z)),
              e
            );
          }),
          (t.awrap = function (e) {
            return { __await: e };
          }),
          C(M.prototype),
          l(M.prototype, u, function () {
            return this;
          }),
          (t.AsyncIterator = M),
          (t.async = function (e, n, o, r, i) {
            void 0 === i && (i = Promise);
            var a = new M(c(e, n, o, r), i);
            return t.isGeneratorFunction(n)
              ? a
              : a.next().then(function (e) {
                  return e.done ? e.value : a.next();
                });
          }),
          C(Z),
          l(Z, s, "Generator"),
          l(Z, a, function () {
            return this;
          }),
          l(Z, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var o in t) n.push(o);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var o = n.pop();
                  if (o in t) return (e.value = o), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (t.values = L),
          (N.prototype = {
            constructor: N,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = e),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = e),
                this.tryEntries.forEach(P),
                !t)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    o.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = e);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var n = this;
              function r(o, r) {
                return (
                  (u.type = "throw"),
                  (u.arg = t),
                  (n.next = o),
                  r && ((n.method = "next"), (n.arg = e)),
                  !!r
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i],
                  u = a.completion;
                if ("root" === a.tryLoc) return r("end");
                if (a.tryLoc <= this.prev) {
                  var s = o.call(a, "catchLoc"),
                    l = o.call(a, "finallyLoc");
                  if (s && l) {
                    if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                  } else if (s) {
                    if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var r = this.tryEntries[n];
                if (
                  r.tryLoc <= this.prev &&
                  o.call(r, "finallyLoc") &&
                  this.prev < r.finallyLoc
                ) {
                  var i = r;
                  break;
                }
              }
              i &&
                ("break" === e || "continue" === e) &&
                i.tryLoc <= t &&
                t <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = e),
                (a.arg = t),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), m)
                  : this.complete(a)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                m
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), P(n), m;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var o = n.completion;
                  if ("throw" === o.type) {
                    var r = o.arg;
                    P(n);
                  }
                  return r;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, n, o) {
              return (
                (this.delegate = { iterator: L(t), resultName: n, nextLoc: o }),
                "next" === this.method && (this.arg = e),
                m
              );
            },
          }),
          t
        );
      }
      function Mn(e, t, n, o, r, i, a) {
        try {
          var u = e[i](a),
            s = u.value;
        } catch (l) {
          return void n(l);
        }
        u.done ? t(s) : Promise.resolve(s).then(o, r);
      }
      function xn(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (o, r) {
            var i = e.apply(t, n);
            function a(e) {
              Mn(i, o, r, a, u, "next", e);
            }
            function u(e) {
              Mn(i, o, r, a, u, "throw", e);
            }
            a(void 0);
          });
        };
      }
      var Tn = ["measure", "alignPre", "align", null, "motion"];
      var Sn = s.forwardRef(function (e, t) {
        var n = e.visible,
          r = e.prefixCls,
          i = e.className,
          a = e.style,
          u = e.children,
          l = e.zIndex,
          c = e.stretch,
          f = e.destroyPopupOnHide,
          p = e.forceRender,
          d = e.align,
          v = e.point,
          h = e.getRootDomNode,
          m = e.getClassNameFromAlign,
          g = e.onAlign,
          b = e.onMouseEnter,
          w = e.onMouseLeave,
          E = e.onMouseDown,
          k = e.onTouchStart,
          Z = e.onClick,
          C = (0, s.useRef)(),
          M = (0, s.useRef)(),
          T = (0, s.useState)(),
          S = (0, ve.Z)(T, 2),
          O = S[0],
          P = S[1],
          N = (function (e) {
            var t = s.useState({ width: 0, height: 0 }),
              n = (0, ve.Z)(t, 2),
              o = n[0],
              r = n[1];
            return [
              s.useMemo(
                function () {
                  var t = {};
                  if (e) {
                    var n = o.width,
                      r = o.height;
                    -1 !== e.indexOf("height") && r
                      ? (t.height = r)
                      : -1 !== e.indexOf("minHeight") && r && (t.minHeight = r),
                      -1 !== e.indexOf("width") && n
                        ? (t.width = n)
                        : -1 !== e.indexOf("minWidth") && n && (t.minWidth = n);
                  }
                  return t;
                },
                [e, o]
              ),
              function (e) {
                var t = e.offsetWidth,
                  n = e.offsetHeight,
                  o = e.getBoundingClientRect(),
                  i = o.width,
                  a = o.height;
                Math.abs(t - i) < 1 &&
                  Math.abs(n - a) < 1 &&
                  ((t = i), (n = a)),
                  r({ width: t, height: n });
              },
            ];
          })(c),
          L = (0, ve.Z)(N, 2),
          D = L[0],
          R = L[1];
        var A = (function (e, t) {
            var n = ge(null),
              o = (0, ve.Z)(n, 2),
              r = o[0],
              i = o[1],
              a = (0, s.useRef)();
            function u(e) {
              i(e, !0);
            }
            function l() {
              re.cancel(a.current);
            }
            return (
              (0, s.useEffect)(
                function () {
                  u("measure");
                },
                [e]
              ),
              (0, s.useEffect)(
                function () {
                  "measure" === r && t(),
                    r &&
                      (a.current = re(
                        xn(
                          Cn().mark(function e() {
                            var t, n;
                            return Cn().wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    (t = Tn.indexOf(r)),
                                      (n = Tn[t + 1]) && -1 !== t && u(n);
                                  case 3:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                          })
                        )
                      ));
                },
                [r]
              ),
              (0, s.useEffect)(function () {
                return function () {
                  l();
                };
              }, []),
              [
                r,
                function (e) {
                  l(),
                    (a.current = re(function () {
                      u(function (e) {
                        switch (r) {
                          case "align":
                            return "motion";
                          case "motion":
                            return "stable";
                        }
                        return e;
                      }),
                        null === e || void 0 === e || e();
                    }));
                },
              ]
            );
          })(n, function () {
            c && R(h());
          }),
          H = (0, ve.Z)(A, 2),
          V = H[0],
          F = H[1],
          B = (0, s.useState)(0),
          I = (0, ve.Z)(B, 2),
          U = I[0],
          _ = I[1],
          j = (0, s.useRef)();
        function W() {
          var e;
          null === (e = C.current) || void 0 === e || e.forceAlign();
        }
        function X(e, t) {
          var n = m(t);
          O !== n && P(n),
            _(function (e) {
              return e + 1;
            }),
            "align" === V && (null === g || void 0 === g || g(e, t));
        }
        mn(
          function () {
            "alignPre" === V && _(0);
          },
          [V]
        ),
          mn(
            function () {
              "align" === V &&
                (U < 3
                  ? W()
                  : F(function () {
                      var e;
                      null === (e = j.current) || void 0 === e || e.call(j);
                    }));
            },
            [U]
          );
        var Y = (0, o.Z)({}, it(e));
        function G() {
          return new Promise(function (e) {
            j.current = e;
          });
        }
        ["onAppearEnd", "onEnterEnd", "onLeaveEnd"].forEach(function (e) {
          var t = Y[e];
          Y[e] = function (e, n) {
            return F(), null === t || void 0 === t ? void 0 : t(e, n);
          };
        }),
          s.useEffect(
            function () {
              Y.motionName || "motion" !== V || F();
            },
            [Y.motionName, V]
          ),
          s.useImperativeHandle(t, function () {
            return {
              forceAlign: W,
              getElement: function () {
                return M.current;
              },
            };
          });
        var K = (0, o.Z)(
            (0, o.Z)({}, D),
            {},
            {
              zIndex: l,
              opacity: "motion" !== V && "stable" !== V && n ? 0 : void 0,
              pointerEvents: n || "stable" === V ? void 0 : "none",
            },
            a
          ),
          z = !0;
        null === d ||
          void 0 === d ||
          !d.points ||
          ("align" !== V && "stable" !== V) ||
          (z = !1);
        var Q = u;
        return (
          s.Children.count(u) > 1 &&
            (Q = s.createElement(
              "div",
              { className: "".concat(r, "-content") },
              u
            )),
          s.createElement(
            rt,
            (0, y.Z)(
              { visible: n, ref: M, leavedClassName: "".concat(r, "-hidden") },
              Y,
              {
                onAppearPrepare: G,
                onEnterPrepare: G,
                removeOnLeave: f,
                forceRender: p,
              }
            ),
            function (e, t) {
              var n = e.className,
                a = e.style,
                u = x()(r, i, O, n);
              return s.createElement(
                Zn,
                {
                  target: v || h,
                  key: "popup",
                  ref: C,
                  monitorWindowResize: !0,
                  disabled: z,
                  align: d,
                  onAlign: X,
                },
                s.createElement(
                  "div",
                  {
                    ref: t,
                    className: u,
                    onMouseEnter: b,
                    onMouseLeave: w,
                    onMouseDownCapture: E,
                    onTouchStartCapture: k,
                    onClick: Z,
                    style: (0, o.Z)((0, o.Z)({}, a), K),
                  },
                  Q
                )
              );
            }
          )
        );
      });
      Sn.displayName = "PopupInner";
      const On = Sn;
      var Pn = s.forwardRef(function (e, t) {
        var n = e.prefixCls,
          r = e.visible,
          i = e.zIndex,
          a = e.children,
          u = e.mobile,
          l = (u = void 0 === u ? {} : u).popupClassName,
          c = u.popupStyle,
          f = u.popupMotion,
          p = void 0 === f ? {} : f,
          d = u.popupRender,
          v = e.onClick,
          h = s.useRef();
        s.useImperativeHandle(t, function () {
          return {
            forceAlign: function () {},
            getElement: function () {
              return h.current;
            },
          };
        });
        var m = (0, o.Z)({ zIndex: i }, c),
          g = a;
        return (
          s.Children.count(a) > 1 &&
            (g = s.createElement(
              "div",
              { className: "".concat(n, "-content") },
              a
            )),
          d && (g = d(g)),
          s.createElement(
            rt,
            (0, y.Z)({ visible: r, ref: h, removeOnLeave: !0 }, p),
            function (e, t) {
              var r = e.className,
                i = e.style,
                a = x()(n, l, r);
              return s.createElement(
                "div",
                {
                  ref: t,
                  className: a,
                  onClick: v,
                  style: (0, o.Z)((0, o.Z)({}, i), m),
                },
                g
              );
            }
          )
        );
      });
      Pn.displayName = "MobilePopupInner";
      const Nn = Pn;
      var Ln = ["visible", "mobile"],
        Dn = s.forwardRef(function (e, t) {
          var n = e.visible,
            r = e.mobile,
            i = (0, b.Z)(e, Ln),
            a = (0, s.useState)(n),
            u = (0, ve.Z)(a, 2),
            l = u[0],
            c = u[1],
            f = (0, s.useState)(!1),
            p = (0, ve.Z)(f, 2),
            d = p[0],
            v = p[1],
            h = (0, o.Z)((0, o.Z)({}, i), {}, { visible: l });
          (0, s.useEffect)(
            function () {
              c(n),
                n &&
                  r &&
                  v(
                    (function () {
                      if (
                        "undefined" === typeof navigator ||
                        "undefined" === typeof window
                      )
                        return !1;
                      var e =
                        navigator.userAgent || navigator.vendor || window.opera;
                      return (
                        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
                          e
                        ) ||
                        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
                          null === e || void 0 === e ? void 0 : e.substr(0, 4)
                        )
                      );
                    })()
                  );
            },
            [n, r]
          );
          var m = d
            ? s.createElement(Nn, (0, y.Z)({}, h, { mobile: r, ref: t }))
            : s.createElement(On, (0, y.Z)({}, h, { ref: t }));
          return s.createElement("div", null, s.createElement(at, h), m);
        });
      Dn.displayName = "Popup";
      const Rn = Dn;
      const An = s.createContext(null);
      function Hn() {}
      function Vn() {
        return "";
      }
      function Fn(e) {
        return e ? e.ownerDocument : window.document;
      }
      var Bn = [
        "onClick",
        "onMouseDown",
        "onTouchStart",
        "onMouseEnter",
        "onMouseLeave",
        "onFocus",
        "onBlur",
        "onContextMenu",
      ];
      const In = (function (e) {
        var t = (function (t) {
          (0, a.Z)(l, t);
          var n = (0, u.Z)(l);
          function l(e) {
            var t, o;
            return (
              (0, r.Z)(this, l),
              (t = n.call(this, e)),
              (0, m.Z)((0, q.Z)(t), "popupRef", s.createRef()),
              (0, m.Z)((0, q.Z)(t), "triggerRef", s.createRef()),
              (0, m.Z)((0, q.Z)(t), "portalContainer", void 0),
              (0, m.Z)((0, q.Z)(t), "attachId", void 0),
              (0, m.Z)((0, q.Z)(t), "clickOutsideHandler", void 0),
              (0, m.Z)((0, q.Z)(t), "touchOutsideHandler", void 0),
              (0, m.Z)((0, q.Z)(t), "contextMenuOutsideHandler1", void 0),
              (0, m.Z)((0, q.Z)(t), "contextMenuOutsideHandler2", void 0),
              (0, m.Z)((0, q.Z)(t), "mouseDownTimeout", void 0),
              (0, m.Z)((0, q.Z)(t), "focusTime", void 0),
              (0, m.Z)((0, q.Z)(t), "preClickTime", void 0),
              (0, m.Z)((0, q.Z)(t), "preTouchTime", void 0),
              (0, m.Z)((0, q.Z)(t), "delayTimer", void 0),
              (0, m.Z)((0, q.Z)(t), "hasPopupMouseDown", void 0),
              (0, m.Z)((0, q.Z)(t), "onMouseEnter", function (e) {
                var n = t.props.mouseEnterDelay;
                t.fireEvents("onMouseEnter", e),
                  t.delaySetPopupVisible(!0, n, n ? null : e);
              }),
              (0, m.Z)((0, q.Z)(t), "onMouseMove", function (e) {
                t.fireEvents("onMouseMove", e), t.setPoint(e);
              }),
              (0, m.Z)((0, q.Z)(t), "onMouseLeave", function (e) {
                t.fireEvents("onMouseLeave", e),
                  t.delaySetPopupVisible(!1, t.props.mouseLeaveDelay);
              }),
              (0, m.Z)((0, q.Z)(t), "onPopupMouseEnter", function () {
                t.clearDelayTimer();
              }),
              (0, m.Z)((0, q.Z)(t), "onPopupMouseLeave", function (e) {
                var n;
                (e.relatedTarget &&
                  !e.relatedTarget.setTimeout &&
                  ie(
                    null === (n = t.popupRef.current) || void 0 === n
                      ? void 0
                      : n.getElement(),
                    e.relatedTarget
                  )) ||
                  t.delaySetPopupVisible(!1, t.props.mouseLeaveDelay);
              }),
              (0, m.Z)((0, q.Z)(t), "onFocus", function (e) {
                t.fireEvents("onFocus", e),
                  t.clearDelayTimer(),
                  t.isFocusToShow() &&
                    ((t.focusTime = Date.now()),
                    t.delaySetPopupVisible(!0, t.props.focusDelay));
              }),
              (0, m.Z)((0, q.Z)(t), "onMouseDown", function (e) {
                t.fireEvents("onMouseDown", e), (t.preClickTime = Date.now());
              }),
              (0, m.Z)((0, q.Z)(t), "onTouchStart", function (e) {
                t.fireEvents("onTouchStart", e), (t.preTouchTime = Date.now());
              }),
              (0, m.Z)((0, q.Z)(t), "onBlur", function (e) {
                t.fireEvents("onBlur", e),
                  t.clearDelayTimer(),
                  t.isBlurToHide() &&
                    t.delaySetPopupVisible(!1, t.props.blurDelay);
              }),
              (0, m.Z)((0, q.Z)(t), "onContextMenu", function (e) {
                e.preventDefault(),
                  t.fireEvents("onContextMenu", e),
                  t.setPopupVisible(!0, e);
              }),
              (0, m.Z)((0, q.Z)(t), "onContextMenuClose", function () {
                t.isContextMenuToShow() && t.close();
              }),
              (0, m.Z)((0, q.Z)(t), "onClick", function (e) {
                if ((t.fireEvents("onClick", e), t.focusTime)) {
                  var n;
                  if (
                    (t.preClickTime && t.preTouchTime
                      ? (n = Math.min(t.preClickTime, t.preTouchTime))
                      : t.preClickTime
                      ? (n = t.preClickTime)
                      : t.preTouchTime && (n = t.preTouchTime),
                    Math.abs(n - t.focusTime) < 20)
                  )
                    return;
                  t.focusTime = 0;
                }
                (t.preClickTime = 0),
                  (t.preTouchTime = 0),
                  t.isClickToShow() &&
                    (t.isClickToHide() || t.isBlurToHide()) &&
                    e &&
                    e.preventDefault &&
                    e.preventDefault();
                var o = !t.state.popupVisible;
                ((t.isClickToHide() && !o) || (o && t.isClickToShow())) &&
                  t.setPopupVisible(!t.state.popupVisible, e);
              }),
              (0, m.Z)((0, q.Z)(t), "onPopupMouseDown", function () {
                var e;
                ((t.hasPopupMouseDown = !0),
                clearTimeout(t.mouseDownTimeout),
                (t.mouseDownTimeout = window.setTimeout(function () {
                  t.hasPopupMouseDown = !1;
                }, 0)),
                t.context) &&
                  (e = t.context).onPopupMouseDown.apply(e, arguments);
              }),
              (0, m.Z)((0, q.Z)(t), "onDocumentClick", function (e) {
                if (!t.props.mask || t.props.maskClosable) {
                  var n = e.target,
                    o = t.getRootDomNode(),
                    r = t.getPopupDomNode();
                  (ie(o, n) && !t.isContextMenuOnly()) ||
                    ie(r, n) ||
                    t.hasPopupMouseDown ||
                    t.close();
                }
              }),
              (0, m.Z)((0, q.Z)(t), "getRootDomNode", function () {
                var e = t.props.getTriggerDOMNode;
                if (e) return e(t.triggerRef.current);
                try {
                  var n = ae(t.triggerRef.current);
                  if (n) return n;
                } catch (o) {}
                return Z.findDOMNode((0, q.Z)(t));
              }),
              (0, m.Z)((0, q.Z)(t), "getPopupClassNameFromAlign", function (e) {
                var n = [],
                  o = t.props,
                  r = o.popupPlacement,
                  i = o.builtinPlacements,
                  a = o.prefixCls,
                  u = o.alignPoint,
                  s = o.getPopupClassNameFromAlign;
                return (
                  r &&
                    i &&
                    n.push(
                      (function (e, t, n, o) {
                        for (
                          var r = n.points, i = Object.keys(e), a = 0;
                          a < i.length;
                          a += 1
                        ) {
                          var u = i[a];
                          if (de(e[u].points, r, o))
                            return "".concat(t, "-placement-").concat(u);
                        }
                        return "";
                      })(i, a, e, u)
                    ),
                  s && n.push(s(e)),
                  n.join(" ")
                );
              }),
              (0, m.Z)((0, q.Z)(t), "getComponent", function () {
                var e = t.props,
                  n = e.prefixCls,
                  o = e.destroyPopupOnHide,
                  r = e.popupClassName,
                  i = e.onPopupAlign,
                  a = e.popupMotion,
                  u = e.popupAnimation,
                  l = e.popupTransitionName,
                  c = e.popupStyle,
                  f = e.mask,
                  p = e.maskAnimation,
                  d = e.maskTransitionName,
                  v = e.maskMotion,
                  h = e.zIndex,
                  m = e.popup,
                  g = e.stretch,
                  b = e.alignPoint,
                  w = e.mobile,
                  E = e.forceRender,
                  k = e.onPopupClick,
                  Z = t.state,
                  C = Z.popupVisible,
                  M = Z.point,
                  x = t.getPopupAlign(),
                  T = {};
                return (
                  t.isMouseEnterToShow() &&
                    (T.onMouseEnter = t.onPopupMouseEnter),
                  t.isMouseLeaveToHide() &&
                    (T.onMouseLeave = t.onPopupMouseLeave),
                  (T.onMouseDown = t.onPopupMouseDown),
                  (T.onTouchStart = t.onPopupMouseDown),
                  s.createElement(
                    Rn,
                    (0, y.Z)(
                      {
                        prefixCls: n,
                        destroyPopupOnHide: o,
                        visible: C,
                        point: b && M,
                        className: r,
                        align: x,
                        onAlign: i,
                        animation: u,
                        getClassNameFromAlign: t.getPopupClassNameFromAlign,
                      },
                      T,
                      {
                        stretch: g,
                        getRootDomNode: t.getRootDomNode,
                        style: c,
                        mask: f,
                        zIndex: h,
                        transitionName: l,
                        maskAnimation: p,
                        maskTransitionName: d,
                        maskMotion: v,
                        ref: t.popupRef,
                        motion: a,
                        mobile: w,
                        forceRender: E,
                        onClick: k,
                      }
                    ),
                    "function" === typeof m ? m() : m
                  )
                );
              }),
              (0, m.Z)((0, q.Z)(t), "attachParent", function (e) {
                re.cancel(t.attachId);
                var n,
                  o = t.props,
                  r = o.getPopupContainer,
                  i = o.getDocument,
                  a = t.getRootDomNode();
                r
                  ? (a || 0 === r.length) && (n = r(a))
                  : (n = i(t.getRootDomNode()).body),
                  n
                    ? n.appendChild(e)
                    : (t.attachId = re(function () {
                        t.attachParent(e);
                      }));
              }),
              (0, m.Z)((0, q.Z)(t), "getContainer", function () {
                if (!t.portalContainer) {
                  var e = (0, t.props.getDocument)(
                    t.getRootDomNode()
                  ).createElement("div");
                  (e.style.position = "absolute"),
                    (e.style.top = "0"),
                    (e.style.left = "0"),
                    (e.style.width = "100%"),
                    (t.portalContainer = e);
                }
                return t.attachParent(t.portalContainer), t.portalContainer;
              }),
              (0, m.Z)((0, q.Z)(t), "setPoint", function (e) {
                t.props.alignPoint &&
                  e &&
                  t.setState({ point: { pageX: e.pageX, pageY: e.pageY } });
              }),
              (0, m.Z)((0, q.Z)(t), "handlePortalUpdate", function () {
                t.state.prevPopupVisible !== t.state.popupVisible &&
                  t.props.afterPopupVisibleChange(t.state.popupVisible);
              }),
              (0, m.Z)((0, q.Z)(t), "triggerContextValue", {
                onPopupMouseDown: t.onPopupMouseDown,
              }),
              (o =
                "popupVisible" in e
                  ? !!e.popupVisible
                  : !!e.defaultPopupVisible),
              (t.state = { prevPopupVisible: o, popupVisible: o }),
              Bn.forEach(function (e) {
                t["fire".concat(e)] = function (n) {
                  t.fireEvents(e, n);
                };
              }),
              t
            );
          }
          return (
            (0, i.Z)(
              l,
              [
                {
                  key: "componentDidMount",
                  value: function () {
                    this.componentDidUpdate();
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function () {
                    var e,
                      t = this.props;
                    if (this.state.popupVisible)
                      return (
                        this.clickOutsideHandler ||
                          (!this.isClickToHide() &&
                            !this.isContextMenuToShow()) ||
                          ((e = t.getDocument(this.getRootDomNode())),
                          (this.clickOutsideHandler = C(
                            e,
                            "mousedown",
                            this.onDocumentClick
                          ))),
                        this.touchOutsideHandler ||
                          ((e = e || t.getDocument(this.getRootDomNode())),
                          (this.touchOutsideHandler = C(
                            e,
                            "touchstart",
                            this.onDocumentClick
                          ))),
                        !this.contextMenuOutsideHandler1 &&
                          this.isContextMenuToShow() &&
                          ((e = e || t.getDocument(this.getRootDomNode())),
                          (this.contextMenuOutsideHandler1 = C(
                            e,
                            "scroll",
                            this.onContextMenuClose
                          ))),
                        void (
                          !this.contextMenuOutsideHandler2 &&
                          this.isContextMenuToShow() &&
                          (this.contextMenuOutsideHandler2 = C(
                            window,
                            "blur",
                            this.onContextMenuClose
                          ))
                        )
                      );
                    this.clearOutsideHandler();
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    this.clearDelayTimer(),
                      this.clearOutsideHandler(),
                      clearTimeout(this.mouseDownTimeout),
                      re.cancel(this.attachId);
                  },
                },
                {
                  key: "getPopupDomNode",
                  value: function () {
                    var e;
                    return (
                      (null === (e = this.popupRef.current) || void 0 === e
                        ? void 0
                        : e.getElement()) || null
                    );
                  },
                },
                {
                  key: "getPopupAlign",
                  value: function () {
                    var e = this.props,
                      t = e.popupPlacement,
                      n = e.popupAlign,
                      r = e.builtinPlacements;
                    return t && r
                      ? (function (e, t, n) {
                          var r = e[t] || {};
                          return (0, o.Z)((0, o.Z)({}, r), n);
                        })(r, t, n)
                      : n;
                  },
                },
                {
                  key: "setPopupVisible",
                  value: function (e, t) {
                    var n = this.props.alignPoint,
                      o = this.state.popupVisible;
                    this.clearDelayTimer(),
                      o !== e &&
                        ("popupVisible" in this.props ||
                          this.setState({
                            popupVisible: e,
                            prevPopupVisible: o,
                          }),
                        this.props.onPopupVisibleChange(e)),
                      n && t && e && this.setPoint(t);
                  },
                },
                {
                  key: "delaySetPopupVisible",
                  value: function (e, t, n) {
                    var o = this,
                      r = 1e3 * t;
                    if ((this.clearDelayTimer(), r)) {
                      var i = n ? { pageX: n.pageX, pageY: n.pageY } : null;
                      this.delayTimer = window.setTimeout(function () {
                        o.setPopupVisible(e, i), o.clearDelayTimer();
                      }, r);
                    } else this.setPopupVisible(e, n);
                  },
                },
                {
                  key: "clearDelayTimer",
                  value: function () {
                    this.delayTimer &&
                      (clearTimeout(this.delayTimer), (this.delayTimer = null));
                  },
                },
                {
                  key: "clearOutsideHandler",
                  value: function () {
                    this.clickOutsideHandler &&
                      (this.clickOutsideHandler.remove(),
                      (this.clickOutsideHandler = null)),
                      this.contextMenuOutsideHandler1 &&
                        (this.contextMenuOutsideHandler1.remove(),
                        (this.contextMenuOutsideHandler1 = null)),
                      this.contextMenuOutsideHandler2 &&
                        (this.contextMenuOutsideHandler2.remove(),
                        (this.contextMenuOutsideHandler2 = null)),
                      this.touchOutsideHandler &&
                        (this.touchOutsideHandler.remove(),
                        (this.touchOutsideHandler = null));
                  },
                },
                {
                  key: "createTwoChains",
                  value: function (e) {
                    var t = this.props.children.props,
                      n = this.props;
                    return t[e] && n[e] ? this["fire".concat(e)] : t[e] || n[e];
                  },
                },
                {
                  key: "isClickToShow",
                  value: function () {
                    var e = this.props,
                      t = e.action,
                      n = e.showAction;
                    return (
                      -1 !== t.indexOf("click") || -1 !== n.indexOf("click")
                    );
                  },
                },
                {
                  key: "isContextMenuOnly",
                  value: function () {
                    var e = this.props.action;
                    return (
                      "contextMenu" === e ||
                      (1 === e.length && "contextMenu" === e[0])
                    );
                  },
                },
                {
                  key: "isContextMenuToShow",
                  value: function () {
                    var e = this.props,
                      t = e.action,
                      n = e.showAction;
                    return (
                      -1 !== t.indexOf("contextMenu") ||
                      -1 !== n.indexOf("contextMenu")
                    );
                  },
                },
                {
                  key: "isClickToHide",
                  value: function () {
                    var e = this.props,
                      t = e.action,
                      n = e.hideAction;
                    return (
                      -1 !== t.indexOf("click") || -1 !== n.indexOf("click")
                    );
                  },
                },
                {
                  key: "isMouseEnterToShow",
                  value: function () {
                    var e = this.props,
                      t = e.action,
                      n = e.showAction;
                    return (
                      -1 !== t.indexOf("hover") ||
                      -1 !== n.indexOf("mouseEnter")
                    );
                  },
                },
                {
                  key: "isMouseLeaveToHide",
                  value: function () {
                    var e = this.props,
                      t = e.action,
                      n = e.hideAction;
                    return (
                      -1 !== t.indexOf("hover") ||
                      -1 !== n.indexOf("mouseLeave")
                    );
                  },
                },
                {
                  key: "isFocusToShow",
                  value: function () {
                    var e = this.props,
                      t = e.action,
                      n = e.showAction;
                    return (
                      -1 !== t.indexOf("focus") || -1 !== n.indexOf("focus")
                    );
                  },
                },
                {
                  key: "isBlurToHide",
                  value: function () {
                    var e = this.props,
                      t = e.action,
                      n = e.hideAction;
                    return (
                      -1 !== t.indexOf("focus") || -1 !== n.indexOf("blur")
                    );
                  },
                },
                {
                  key: "forcePopupAlign",
                  value: function () {
                    var e;
                    this.state.popupVisible &&
                      (null === (e = this.popupRef.current) ||
                        void 0 === e ||
                        e.forceAlign());
                  },
                },
                {
                  key: "fireEvents",
                  value: function (e, t) {
                    var n = this.props.children.props[e];
                    n && n(t);
                    var o = this.props[e];
                    o && o(t);
                  },
                },
                {
                  key: "close",
                  value: function () {
                    this.setPopupVisible(!1);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var t = this.state.popupVisible,
                      n = this.props,
                      r = n.children,
                      i = n.forceRender,
                      a = n.alignPoint,
                      u = n.className,
                      l = n.autoDestroy,
                      c = s.Children.only(r),
                      f = { key: "trigger" };
                    this.isContextMenuToShow()
                      ? (f.onContextMenu = this.onContextMenu)
                      : (f.onContextMenu =
                          this.createTwoChains("onContextMenu")),
                      this.isClickToHide() || this.isClickToShow()
                        ? ((f.onClick = this.onClick),
                          (f.onMouseDown = this.onMouseDown),
                          (f.onTouchStart = this.onTouchStart))
                        : ((f.onClick = this.createTwoChains("onClick")),
                          (f.onMouseDown = this.createTwoChains("onMouseDown")),
                          (f.onTouchStart =
                            this.createTwoChains("onTouchStart"))),
                      this.isMouseEnterToShow()
                        ? ((f.onMouseEnter = this.onMouseEnter),
                          a && (f.onMouseMove = this.onMouseMove))
                        : (f.onMouseEnter =
                            this.createTwoChains("onMouseEnter")),
                      this.isMouseLeaveToHide()
                        ? (f.onMouseLeave = this.onMouseLeave)
                        : (f.onMouseLeave =
                            this.createTwoChains("onMouseLeave")),
                      this.isFocusToShow() || this.isBlurToHide()
                        ? ((f.onFocus = this.onFocus), (f.onBlur = this.onBlur))
                        : ((f.onFocus = this.createTwoChains("onFocus")),
                          (f.onBlur = this.createTwoChains("onBlur")));
                    var p = x()(c && c.props && c.props.className, u);
                    p && (f.className = p);
                    var d = (0, o.Z)({}, f);
                    ce(c) && (d.ref = le(this.triggerRef, c.ref));
                    var v,
                      h = s.cloneElement(c, d);
                    return (
                      (t || this.popupRef.current || i) &&
                        (v = s.createElement(
                          e,
                          {
                            key: "portal",
                            getContainer: this.getContainer,
                            didUpdate: this.handlePortalUpdate,
                          },
                          this.getComponent()
                        )),
                      !t && l && (v = null),
                      s.createElement(
                        An.Provider,
                        { value: this.triggerContextValue },
                        h,
                        v
                      )
                    );
                  },
                },
              ],
              [
                {
                  key: "getDerivedStateFromProps",
                  value: function (e, t) {
                    var n = e.popupVisible,
                      o = {};
                    return (
                      void 0 !== n &&
                        t.popupVisible !== n &&
                        ((o.popupVisible = n),
                        (o.prevPopupVisible = t.popupVisible)),
                      o
                    );
                  },
                },
              ]
            ),
            l
          );
        })(s.Component);
        return (
          (0, m.Z)(t, "contextType", An),
          (0, m.Z)(t, "defaultProps", {
            prefixCls: "rc-trigger-popup",
            getPopupClassNameFromAlign: Vn,
            getDocument: Fn,
            onPopupVisibleChange: Hn,
            afterPopupVisibleChange: Hn,
            onPopupAlign: Hn,
            popupClassName: "",
            mouseEnterDelay: 0,
            mouseLeaveDelay: 0.1,
            focusDelay: 0,
            blurDelay: 0.15,
            popupStyle: {},
            destroyPopupOnHide: !1,
            popupAlign: {},
            defaultPopupVisible: !1,
            mask: !1,
            maskClosable: !0,
            action: [],
            showAction: [],
            hideAction: [],
            autoDestroy: !1,
          }),
          t
        );
      })(pe);
      var Un = { adjustX: 1, adjustY: 1 },
        _n = [0, 0],
        jn = {
          left: {
            points: ["cr", "cl"],
            overflow: Un,
            offset: [-4, 0],
            targetOffset: _n,
          },
          right: {
            points: ["cl", "cr"],
            overflow: Un,
            offset: [4, 0],
            targetOffset: _n,
          },
          top: {
            points: ["bc", "tc"],
            overflow: Un,
            offset: [0, -4],
            targetOffset: _n,
          },
          bottom: {
            points: ["tc", "bc"],
            overflow: Un,
            offset: [0, 4],
            targetOffset: _n,
          },
          topLeft: {
            points: ["bl", "tl"],
            overflow: Un,
            offset: [0, -4],
            targetOffset: _n,
          },
          leftTop: {
            points: ["tr", "tl"],
            overflow: Un,
            offset: [-4, 0],
            targetOffset: _n,
          },
          topRight: {
            points: ["br", "tr"],
            overflow: Un,
            offset: [0, -4],
            targetOffset: _n,
          },
          rightTop: {
            points: ["tl", "tr"],
            overflow: Un,
            offset: [4, 0],
            targetOffset: _n,
          },
          bottomRight: {
            points: ["tr", "br"],
            overflow: Un,
            offset: [0, 4],
            targetOffset: _n,
          },
          rightBottom: {
            points: ["bl", "br"],
            overflow: Un,
            offset: [4, 0],
            targetOffset: _n,
          },
          bottomLeft: {
            points: ["tl", "bl"],
            overflow: Un,
            offset: [0, 4],
            targetOffset: _n,
          },
          leftBottom: {
            points: ["br", "bl"],
            overflow: Un,
            offset: [-4, 0],
            targetOffset: _n,
          },
        };
      function Wn(e) {
        var t = e.showArrow,
          n = e.arrowContent,
          o = e.children,
          r = e.prefixCls,
          i = e.id,
          a = e.overlayInnerStyle,
          u = e.className,
          l = e.style;
        return s.createElement(
          "div",
          { className: x()("".concat(r, "-content"), u), style: l },
          !1 !== t &&
            s.createElement(
              "div",
              { className: "".concat(r, "-arrow"), key: "arrow" },
              n
            ),
          s.createElement(
            "div",
            {
              className: "".concat(r, "-inner"),
              id: i,
              role: "tooltip",
              style: a,
            },
            "function" === typeof o ? o() : o
          )
        );
      }
      var Xn = [
          "overlayClassName",
          "trigger",
          "mouseEnterDelay",
          "mouseLeaveDelay",
          "overlayStyle",
          "prefixCls",
          "children",
          "onVisibleChange",
          "afterVisibleChange",
          "transitionName",
          "animation",
          "motion",
          "placement",
          "align",
          "destroyTooltipOnHide",
          "defaultVisible",
          "getTooltipContainer",
          "overlayInnerStyle",
          "arrowContent",
          "overlay",
          "id",
          "showArrow",
        ],
        Yn = function (e, t) {
          var n = e.overlayClassName,
            r = e.trigger,
            i = void 0 === r ? ["hover"] : r,
            a = e.mouseEnterDelay,
            u = void 0 === a ? 0 : a,
            l = e.mouseLeaveDelay,
            c = void 0 === l ? 0.1 : l,
            f = e.overlayStyle,
            p = e.prefixCls,
            d = void 0 === p ? "rc-tooltip" : p,
            v = e.children,
            h = e.onVisibleChange,
            m = e.afterVisibleChange,
            g = e.transitionName,
            w = e.animation,
            E = e.motion,
            k = e.placement,
            Z = void 0 === k ? "right" : k,
            C = e.align,
            M = void 0 === C ? {} : C,
            x = e.destroyTooltipOnHide,
            T = void 0 !== x && x,
            O = e.defaultVisible,
            P = e.getTooltipContainer,
            N = e.overlayInnerStyle,
            L = e.arrowContent,
            D = e.overlay,
            R = e.id,
            A = e.showArrow,
            H = void 0 === A || A,
            V = (0, b.Z)(e, Xn),
            F = (0, s.useRef)(null);
          (0, s.useImperativeHandle)(t, function () {
            return F.current;
          });
          var B = (0, o.Z)({}, V);
          "visible" in e && (B.popupVisible = e.visible);
          var I = !1,
            U = !1;
          if ("boolean" === typeof T) I = T;
          else if (T && "object" === (0, S.Z)(T)) {
            var _ = T.keepParent;
            (I = !0 === _), (U = !1 === _);
          }
          return s.createElement(
            In,
            (0, y.Z)(
              {
                popupClassName: n,
                prefixCls: d,
                popup: function () {
                  return s.createElement(
                    Wn,
                    {
                      showArrow: H,
                      arrowContent: L,
                      key: "content",
                      prefixCls: d,
                      id: R,
                      overlayInnerStyle: N,
                    },
                    D
                  );
                },
                action: i,
                builtinPlacements: jn,
                popupPlacement: Z,
                ref: F,
                popupAlign: M,
                getPopupContainer: P,
                onPopupVisibleChange: h,
                afterPopupVisibleChange: m,
                popupTransitionName: g,
                popupAnimation: w,
                popupMotion: E,
                defaultPopupVisible: O,
                destroyPopupOnHide: I,
                autoDestroy: U,
                mouseLeaveDelay: c,
                popupStyle: f,
                mouseEnterDelay: u,
              },
              B
            ),
            v
          );
        };
      const Gn = (0, s.forwardRef)(Yn);
      const Kn = s.forwardRef(function (e, t) {
        var n = e.visible,
          o = e.overlay,
          r = s.useRef(null),
          i = le(t, r),
          a = s.useRef(null);
        function u() {
          re.cancel(a.current);
        }
        return (
          s.useEffect(
            function () {
              return (
                n
                  ? (a.current = re(function () {
                      var e;
                      null === (e = r.current) ||
                        void 0 === e ||
                        e.forcePopupAlign();
                    }))
                  : u(),
                u
              );
            },
            [n, o]
          ),
          s.createElement(Gn, (0, y.Z)({ ref: i }, e))
        );
      });
      var zn = G;
      (zn.Range = Q),
        (zn.Handle = P),
        (zn.createSliderWithTooltip = function (e) {
          var t;
          return (
            ((t = (function (t) {
              (0, a.Z)(l, t);
              var n = (0, u.Z)(l);
              function l() {
                var e;
                return (
                  (0, r.Z)(this, l),
                  ((e = n.apply(this, arguments)).state = { visibles: {} }),
                  (e.handleTooltipVisibleChange = function (t, n) {
                    e.setState(function (e) {
                      return {
                        visibles: (0, o.Z)(
                          (0, o.Z)({}, e.visibles),
                          {},
                          (0, m.Z)({}, t, n)
                        ),
                      };
                    });
                  }),
                  (e.handleWithTooltip = function (t) {
                    var n,
                      r = t.value,
                      i = t.dragging,
                      a = t.index,
                      u = t.disabled,
                      l = (0, b.Z)(t, [
                        "value",
                        "dragging",
                        "index",
                        "disabled",
                      ]),
                      c = e.props,
                      f = c.tipFormatter,
                      p = c.tipProps,
                      d = c.handleStyle,
                      v = c.getTooltipContainer,
                      h = p.prefixCls,
                      m = void 0 === h ? "rc-slider-tooltip" : h,
                      g = p.overlay,
                      w = void 0 === g ? f(r) : g,
                      E = p.placement,
                      k = void 0 === E ? "top" : E,
                      Z = p.visible,
                      C = void 0 !== Z && Z,
                      M = (0, b.Z)(p, [
                        "prefixCls",
                        "overlay",
                        "placement",
                        "visible",
                      ]);
                    return (
                      (n = Array.isArray(d) ? d[a] || d[0] : d),
                      s.createElement(
                        Kn,
                        (0, y.Z)({}, M, {
                          getTooltipContainer: v,
                          prefixCls: m,
                          overlay: w,
                          placement: k,
                          visible: (!u && (e.state.visibles[a] || i)) || C,
                          key: a,
                        }),
                        s.createElement(
                          P,
                          (0, y.Z)({}, l, {
                            style: (0, o.Z)({}, n),
                            value: r,
                            onMouseEnter: function () {
                              return e.handleTooltipVisibleChange(a, !0);
                            },
                            onMouseLeave: function () {
                              return e.handleTooltipVisibleChange(a, !1);
                            },
                          })
                        )
                      )
                    );
                  }),
                  e
                );
              }
              return (
                (0, i.Z)(l, [
                  {
                    key: "render",
                    value: function () {
                      return s.createElement(
                        e,
                        (0, y.Z)({}, this.props, {
                          handle: this.handleWithTooltip,
                        })
                      );
                    },
                  },
                ]),
                l
              );
            })(s.Component)).defaultProps = {
              tipFormatter: function (e) {
                return e;
              },
              handleStyle: [{}],
              tipProps: {},
              getTooltipContainer: function (e) {
                return e.parentNode;
              },
            }),
            t
          );
        });
      const Qn = zn;
    },
    4501: (e, t) => {
      var n,
        o = Symbol.for("react.element"),
        r = Symbol.for("react.portal"),
        i = Symbol.for("react.fragment"),
        a = Symbol.for("react.strict_mode"),
        u = Symbol.for("react.profiler"),
        s = Symbol.for("react.provider"),
        l = Symbol.for("react.context"),
        c = Symbol.for("react.server_context"),
        f = Symbol.for("react.forward_ref"),
        p = Symbol.for("react.suspense"),
        d = Symbol.for("react.suspense_list"),
        v = Symbol.for("react.memo"),
        h = Symbol.for("react.lazy"),
        m = Symbol.for("react.offscreen");
      function g(e) {
        if ("object" === typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case o:
              switch ((e = e.type)) {
                case i:
                case u:
                case a:
                case p:
                case d:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case c:
                    case l:
                    case f:
                    case h:
                    case v:
                    case s:
                      return e;
                    default:
                      return t;
                  }
              }
            case r:
              return t;
          }
        }
      }
      (n = Symbol.for("react.module.reference")),
        (t.isMemo = function (e) {
          return g(e) === v;
        });
    },
    3873: (e, t, n) => {
      e.exports = n(4501);
    },
    5262: () => {},
  },
]);
//# sourceMappingURL=649.67f804e2.chunk.js.map
