/*! For license information please see 358.cd4b3685.chunk.js.LICENSE.txt */
(self.webpackChunktrainer_dashboard =
  self.webpackChunktrainer_dashboard || []).push([
  [358],
  {
    3532: function (e, t, n) {
      var r = n(4687);
      !(function (e, t) {
        "use strict";
        function n(e, t, n, r, o, i, u) {
          try {
            var a = e[i](u),
              l = a.value;
          } catch (e) {
            return void n(e);
          }
          a.done ? t(l) : Promise.resolve(l).then(r, o);
        }
        function o(e) {
          return function () {
            var t = this,
              r = arguments;
            return new Promise(function (o, i) {
              var u = e.apply(t, r);
              function a(e) {
                n(u, o, i, a, l, "next", e);
              }
              function l(e) {
                n(u, o, i, a, l, "throw", e);
              }
              a(void 0);
            });
          };
        }
        function i() {
          return (i =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
        }
        function u(e, t) {
          if (null == e) return {};
          var n,
            r,
            o = {},
            i = Object.keys(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
          return o;
        }
        function a(e) {
          var t = (function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" != typeof r) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == typeof t ? t : String(t);
        }
        t =
          t && Object.prototype.hasOwnProperty.call(t, "default")
            ? t.default
            : t;
        var l = { init: "init" },
          s = function (e) {
            var t = e.value;
            return void 0 === t ? "" : t;
          },
          c = function () {
            return t.createElement(t.Fragment, null, "\xa0");
          },
          d = {
            Cell: s,
            width: 150,
            minWidth: 0,
            maxWidth: Number.MAX_SAFE_INTEGER,
          };
        function f() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return t.reduce(function (e, t) {
            var n = t.style,
              r = t.className;
            return (
              (e = i({}, e, {}, u(t, ["style", "className"]))),
              n && (e.style = e.style ? i({}, e.style || {}, {}, n || {}) : n),
              r && (e.className = e.className ? e.className + " " + r : r),
              "" === e.className && delete e.className,
              e
            );
          }, {});
        }
        var p = function (e, t) {
            return (
              void 0 === t && (t = {}),
              function (n) {
                return (
                  void 0 === n && (n = {}),
                  [].concat(e, [n]).reduce(function (e, r) {
                    return (function e(t, n, r) {
                      return "function" == typeof n
                        ? e({}, n(t, r))
                        : Array.isArray(n)
                        ? f.apply(void 0, [t].concat(n))
                        : f(t, n);
                    })(e, r, i({}, t, { userProps: n }));
                  }, {})
                );
              }
            );
          },
          g = function (e, t, n, r) {
            return (
              void 0 === n && (n = {}),
              e.reduce(function (e, t) {
                return t(e, n);
              }, t)
            );
          },
          v = function (e, t, n) {
            return (
              void 0 === n && (n = {}),
              e.forEach(function (e) {
                e(t, n);
              })
            );
          };
        function h(e, t, n, r) {
          e.findIndex(function (e) {
            return e.pluginName === n;
          }),
            t.forEach(function (t) {
              e.findIndex(function (e) {
                return e.pluginName === t;
              });
            });
        }
        function m(e, t) {
          return "function" == typeof e ? e(t) : e;
        }
        function y(e) {
          var n = t.useRef();
          return (
            (n.current = e),
            t.useCallback(function () {
              return n.current;
            }, [])
          );
        }
        var w =
          "undefined" != typeof document ? t.useLayoutEffect : t.useEffect;
        function R(e, n) {
          var r = t.useRef(!1);
          w(function () {
            r.current && e(), (r.current = !0);
          }, n);
        }
        function b(e, t, n) {
          return (
            void 0 === n && (n = {}),
            function (r, o) {
              void 0 === o && (o = {});
              var u = "string" == typeof r ? t[r] : r;
              if (void 0 === u)
                throw (
                  (console.info(t), new Error("Renderer Error \u261d\ufe0f"))
                );
              return S(u, i({}, e, { column: t }, n, {}, o));
            }
          );
        }
        function S(e, n) {
          return (function (e) {
            return (
              "function" == typeof e &&
              (t = Object.getPrototypeOf(e)).prototype &&
              t.prototype.isReactComponent
            );
            var t;
          })((r = e)) ||
            "function" == typeof r ||
            (function (e) {
              return (
                "object" == typeof e &&
                "symbol" == typeof e.$$typeof &&
                ["react.memo", "react.forward_ref"].includes(
                  e.$$typeof.description
                )
              );
            })(r)
            ? t.createElement(e, n)
            : e;
          var r;
        }
        function C(e, t, n) {
          return (
            void 0 === n && (n = 0),
            e.map(function (e) {
              return (
                P((e = i({}, e, { parent: t, depth: n }))),
                e.columns && (e.columns = C(e.columns, e, n + 1)),
                e
              );
            })
          );
        }
        function x(e) {
          return k(e, "columns");
        }
        function P(e) {
          var t = e.id,
            n = e.accessor,
            r = e.Header;
          if ("string" == typeof n) {
            t = t || n;
            var o = n.split(".");
            n = function (e) {
              return (function (e, t, n) {
                if (!t) return e;
                var r,
                  o = "function" == typeof t ? t : JSON.stringify(t),
                  i =
                    I.get(o) ||
                    (function () {
                      var e = (function (e) {
                        return (function e(t, n) {
                          if ((void 0 === n && (n = []), Array.isArray(t)))
                            for (var r = 0; r < t.length; r += 1) e(t[r], n);
                          else n.push(t);
                          return n;
                        })(e)
                          .map(function (e) {
                            return String(e).replace(".", "_");
                          })
                          .join(".")
                          .replace(T, ".")
                          .replace(L, "")
                          .split(".");
                      })(t);
                      return I.set(o, e), e;
                    })();
                try {
                  r = i.reduce(function (e, t) {
                    return e[t];
                  }, e);
                } catch (e) {}
                return void 0 !== r ? r : n;
              })(e, o);
            };
          }
          if ((!t && "string" == typeof r && r && (t = r), !t && e.columns))
            throw (
              (console.error(e),
              new Error('A column ID (or unique "Header" value) is required!'))
            );
          if (!t)
            throw (
              (console.error(e),
              new Error("A column ID (or string accessor) is required!"))
            );
          return Object.assign(e, { id: t, accessor: n }), e;
        }
        function B(e, t) {
          if (!t) throw new Error();
          return (
            Object.assign(e, i({ Header: c, Footer: c }, d, {}, t, {}, e)),
            Object.assign(e, { originalWidth: e.width }),
            e
          );
        }
        function E(e, t, n) {
          void 0 === n &&
            (n = function () {
              return {};
            });
          for (
            var r = [],
              o = e,
              u = 0,
              a = function () {
                return u++;
              },
              l = function () {
                var e = { headers: [] },
                  u = [],
                  l = o.some(function (e) {
                    return e.parent;
                  });
                o.forEach(function (r) {
                  var o,
                    s = [].concat(u).reverse()[0];
                  l &&
                    ((o = r.parent
                      ? i(
                          {},
                          r.parent,
                          {
                            originalId: r.parent.id,
                            id: r.parent.id + "_" + a(),
                            headers: [r],
                          },
                          n(r)
                        )
                      : B(
                          i(
                            {
                              originalId: r.id + "_placeholder",
                              id: r.id + "_placeholder_" + a(),
                              placeholderOf: r,
                              headers: [r],
                            },
                            n(r)
                          ),
                          t
                        )),
                    s && s.originalId === o.originalId
                      ? s.headers.push(r)
                      : u.push(o)),
                    e.headers.push(r);
                }),
                  r.push(e),
                  (o = u);
              };
            o.length;

          )
            l();
          return r.reverse();
        }
        var I = new Map();
        function G() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          for (var r = 0; r < t.length; r += 1)
            if (void 0 !== t[r]) return t[r];
        }
        function F(e) {
          if ("function" == typeof e) return e;
        }
        function k(e, t) {
          var n = [];
          return (
            (function e(r) {
              r.forEach(function (r) {
                r[t] ? e(r[t]) : n.push(r);
              });
            })(e),
            n
          );
        }
        function A(e, t) {
          var n = t.manualExpandedKey,
            r = t.expanded,
            o = t.expandSubRows,
            i = void 0 === o || o,
            u = [];
          return (
            e.forEach(function (e) {
              return (function e(t, o) {
                void 0 === o && (o = !0),
                  (t.isExpanded = (t.original && t.original[n]) || r[t.id]),
                  (t.canExpand = t.subRows && !!t.subRows.length),
                  o && u.push(t),
                  t.subRows &&
                    t.subRows.length &&
                    t.isExpanded &&
                    t.subRows.forEach(function (t) {
                      return e(t, i);
                    });
              })(e);
            }),
            u
          );
        }
        function H(e, t, n) {
          return F(e) || t[e] || n[e] || n.text;
        }
        function W(e, t, n) {
          return e ? e(t, n) : void 0 === t;
        }
        function O() {
          throw new Error(
            "React-Table: You have not called prepareRow(row) one or more rows you are attempting to render."
          );
        }
        var z = null,
          T = /\[/g,
          L = /\]/g,
          j = function (e) {
            return i({ role: "table" }, e);
          },
          M = function (e) {
            return i({ role: "rowgroup" }, e);
          },
          _ = function (e, t) {
            var n = t.column;
            return i(
              {
                key: "header_" + n.id,
                colSpan: n.totalVisibleHeaderCount,
                role: "columnheader",
              },
              e
            );
          },
          N = function (e, t) {
            var n = t.column;
            return i(
              { key: "footer_" + n.id, colSpan: n.totalVisibleHeaderCount },
              e
            );
          },
          D = function (e, t) {
            return i({ key: "headerGroup_" + t.index, role: "row" }, e);
          },
          V = function (e, t) {
            return i({ key: "footerGroup_" + t.index }, e);
          },
          X = function (e, t) {
            return i({ key: "row_" + t.row.id, role: "row" }, e);
          },
          q = function (e, t) {
            var n = t.cell;
            return i(
              { key: "cell_" + n.row.id + "_" + n.column.id, role: "cell" },
              e
            );
          };
        function K() {
          return {
            useOptions: [],
            stateReducers: [],
            useControlledState: [],
            columns: [],
            columnsDeps: [],
            allColumns: [],
            allColumnsDeps: [],
            accessValue: [],
            materializedColumns: [],
            materializedColumnsDeps: [],
            useInstanceAfterData: [],
            visibleColumns: [],
            visibleColumnsDeps: [],
            headerGroups: [],
            headerGroupsDeps: [],
            useInstanceBeforeDimensions: [],
            useInstance: [],
            prepareRow: [],
            getTableProps: [j],
            getTableBodyProps: [M],
            getHeaderGroupProps: [D],
            getFooterGroupProps: [V],
            getHeaderProps: [_],
            getFooterProps: [N],
            getRowProps: [X],
            getCellProps: [q],
            useFinalInstance: [],
          };
        }
        (l.resetHiddenColumns = "resetHiddenColumns"),
          (l.toggleHideColumn = "toggleHideColumn"),
          (l.setHiddenColumns = "setHiddenColumns"),
          (l.toggleHideAllColumns = "toggleHideAllColumns");
        var U = function (e) {
          (e.getToggleHiddenProps = [$]),
            (e.getToggleHideAllColumnsProps = [Y]),
            e.stateReducers.push(J),
            e.useInstanceBeforeDimensions.push(Q),
            e.headerGroupsDeps.push(function (e, t) {
              var n = t.instance;
              return [].concat(e, [n.state.hiddenColumns]);
            }),
            e.useInstance.push(Z);
        };
        U.pluginName = "useColumnVisibility";
        var $ = function (e, t) {
            var n = t.column;
            return [
              e,
              {
                onChange: function (e) {
                  n.toggleHidden(!e.target.checked);
                },
                style: { cursor: "pointer" },
                checked: n.isVisible,
                title: "Toggle Column Visible",
              },
            ];
          },
          Y = function (e, t) {
            var n = t.instance;
            return [
              e,
              {
                onChange: function (e) {
                  n.toggleHideAllColumns(!e.target.checked);
                },
                style: { cursor: "pointer" },
                checked: !n.allColumnsHidden && !n.state.hiddenColumns.length,
                title: "Toggle All Columns Hidden",
                indeterminate:
                  !n.allColumnsHidden && n.state.hiddenColumns.length,
              },
            ];
          };
        function J(e, t, n, r) {
          if (t.type === l.init) return i({ hiddenColumns: [] }, e);
          if (t.type === l.resetHiddenColumns)
            return i({}, e, {
              hiddenColumns: r.initialState.hiddenColumns || [],
            });
          if (t.type === l.toggleHideColumn) {
            var o = (
              void 0 !== t.value
                ? t.value
                : !e.hiddenColumns.includes(t.columnId)
            )
              ? [].concat(e.hiddenColumns, [t.columnId])
              : e.hiddenColumns.filter(function (e) {
                  return e !== t.columnId;
                });
            return i({}, e, { hiddenColumns: o });
          }
          return t.type === l.setHiddenColumns
            ? i({}, e, { hiddenColumns: m(t.value, e.hiddenColumns) })
            : t.type === l.toggleHideAllColumns
            ? i({}, e, {
                hiddenColumns: (
                  void 0 !== t.value ? t.value : !e.hiddenColumns.length
                )
                  ? r.allColumns.map(function (e) {
                      return e.id;
                    })
                  : [],
              })
            : void 0;
        }
        function Q(e) {
          var n = e.headers,
            r = e.state.hiddenColumns;
          t.useRef(!1).current;
          var o = 0;
          n.forEach(function (e) {
            return (o += (function e(t, n) {
              t.isVisible = n && !r.includes(t.id);
              var o = 0;
              return (
                t.headers && t.headers.length
                  ? t.headers.forEach(function (n) {
                      return (o += e(n, t.isVisible));
                    })
                  : (o = t.isVisible ? 1 : 0),
                (t.totalVisibleHeaderCount = o),
                o
              );
            })(e, !0));
          });
        }
        function Z(e) {
          var n = e.columns,
            r = e.flatHeaders,
            o = e.dispatch,
            i = e.allColumns,
            u = e.getHooks,
            a = e.state.hiddenColumns,
            s = e.autoResetHiddenColumns,
            c = void 0 === s || s,
            d = y(e),
            f = i.length === a.length,
            g = t.useCallback(
              function (e, t) {
                return o({ type: l.toggleHideColumn, columnId: e, value: t });
              },
              [o]
            ),
            v = t.useCallback(
              function (e) {
                return o({ type: l.setHiddenColumns, value: e });
              },
              [o]
            ),
            h = t.useCallback(
              function (e) {
                return o({ type: l.toggleHideAllColumns, value: e });
              },
              [o]
            ),
            m = p(u().getToggleHideAllColumnsProps, { instance: d() });
          r.forEach(function (e) {
            (e.toggleHidden = function (t) {
              o({ type: l.toggleHideColumn, columnId: e.id, value: t });
            }),
              (e.getToggleHiddenProps = p(u().getToggleHiddenProps, {
                instance: d(),
                column: e,
              }));
          });
          var w = y(c);
          R(
            function () {
              w() && o({ type: l.resetHiddenColumns });
            },
            [o, n]
          ),
            Object.assign(e, {
              allColumnsHidden: f,
              toggleHideColumn: g,
              setHiddenColumns: v,
              toggleHideAllColumns: h,
              getToggleHideAllColumnsProps: m,
            });
        }
        var ee = {},
          te = {},
          ne = function (e, t, n) {
            return e;
          },
          re = function (e, t) {
            return e.subRows || [];
          },
          oe = function (e, t, n) {
            return "" + (n ? [n.id, t].join(".") : t);
          },
          ie = function (e) {
            return e;
          };
        function ue(e) {
          var t = e.initialState,
            n = void 0 === t ? ee : t,
            r = e.defaultColumn,
            o = void 0 === r ? te : r,
            a = e.getSubRows,
            l = void 0 === a ? re : a,
            s = e.getRowId,
            c = void 0 === s ? oe : s,
            d = e.stateReducer,
            f = void 0 === d ? ne : d,
            p = e.useControlledState,
            g = void 0 === p ? ie : p;
          return i(
            {},
            u(e, [
              "initialState",
              "defaultColumn",
              "getSubRows",
              "getRowId",
              "stateReducer",
              "useControlledState",
            ]),
            {
              initialState: n,
              defaultColumn: o,
              getSubRows: l,
              getRowId: c,
              stateReducer: f,
              useControlledState: g,
            }
          );
        }
        function ae(e, t) {
          void 0 === t && (t = 0);
          var n = 0,
            r = 0,
            o = 0,
            i = 0;
          return (
            e.forEach(function (e) {
              var u = e.headers;
              if (((e.totalLeft = t), u && u.length)) {
                var a = ae(u, t),
                  l = a[0],
                  s = a[1],
                  c = a[2],
                  d = a[3];
                (e.totalMinWidth = l),
                  (e.totalWidth = s),
                  (e.totalMaxWidth = c),
                  (e.totalFlexWidth = d);
              } else (e.totalMinWidth = e.minWidth), (e.totalWidth = Math.min(Math.max(e.minWidth, e.width), e.maxWidth)), (e.totalMaxWidth = e.maxWidth), (e.totalFlexWidth = e.canResize ? e.totalWidth : 0);
              e.isVisible &&
                ((t += e.totalWidth),
                (n += e.totalMinWidth),
                (r += e.totalWidth),
                (o += e.totalMaxWidth),
                (i += e.totalFlexWidth));
            }),
            [n, r, o, i]
          );
        }
        function le(e) {
          var t = e.data,
            n = e.rows,
            r = e.flatRows,
            o = e.rowsById,
            i = e.column,
            u = e.getRowId,
            a = e.getSubRows,
            l = e.accessValueHooks,
            s = e.getInstance;
          t.forEach(function (e, c) {
            return (function e(n, c, d, f, p) {
              void 0 === d && (d = 0);
              var v = n,
                h = u(n, c, f),
                m = o[h];
              if (m)
                m.subRows &&
                  m.originalSubRows.forEach(function (t, n) {
                    return e(t, n, d + 1, m);
                  });
              else if (
                (((m = {
                  id: h,
                  original: v,
                  index: c,
                  depth: d,
                  cells: [{}],
                }).cells.map = O),
                (m.cells.filter = O),
                (m.cells.forEach = O),
                (m.cells[0].getCellProps = O),
                (m.values = {}),
                p.push(m),
                r.push(m),
                (o[h] = m),
                (m.originalSubRows = a(n, c)),
                m.originalSubRows)
              ) {
                var y = [];
                m.originalSubRows.forEach(function (t, n) {
                  return e(t, n, d + 1, m, y);
                }),
                  (m.subRows = y);
              }
              i.accessor && (m.values[i.id] = i.accessor(n, c, m, p, t)),
                (m.values[i.id] = g(l, m.values[i.id], {
                  row: m,
                  column: i,
                  instance: s(),
                }));
            })(e, c, 0, void 0, n);
          });
        }
        (l.resetExpanded = "resetExpanded"),
          (l.toggleRowExpanded = "toggleRowExpanded"),
          (l.toggleAllRowsExpanded = "toggleAllRowsExpanded");
        var se = function (e) {
          (e.getToggleAllRowsExpandedProps = [ce]),
            (e.getToggleRowExpandedProps = [de]),
            e.stateReducers.push(fe),
            e.useInstance.push(pe),
            e.prepareRow.push(ge);
        };
        se.pluginName = "useExpanded";
        var ce = function (e, t) {
            var n = t.instance;
            return [
              e,
              {
                onClick: function (e) {
                  n.toggleAllRowsExpanded();
                },
                style: { cursor: "pointer" },
                title: "Toggle All Rows Expanded",
              },
            ];
          },
          de = function (e, t) {
            var n = t.row;
            return [
              e,
              {
                onClick: function () {
                  n.toggleRowExpanded();
                },
                style: { cursor: "pointer" },
                title: "Toggle Row Expanded",
              },
            ];
          };
        function fe(e, t, n, r) {
          if (t.type === l.init) return i({ expanded: {} }, e);
          if (t.type === l.resetExpanded)
            return i({}, e, { expanded: r.initialState.expanded || {} });
          if (t.type === l.toggleAllRowsExpanded) {
            var o = t.value,
              s = r.rowsById,
              c = Object.keys(s).length === Object.keys(e.expanded).length;
            if (void 0 !== o ? o : !c) {
              var d = {};
              return (
                Object.keys(s).forEach(function (e) {
                  d[e] = !0;
                }),
                i({}, e, { expanded: d })
              );
            }
            return i({}, e, { expanded: {} });
          }
          if (t.type === l.toggleRowExpanded) {
            var f,
              p = t.id,
              g = t.value,
              v = e.expanded[p],
              h = void 0 !== g ? g : !v;
            if (!v && h)
              return i({}, e, {
                expanded: i({}, e.expanded, ((f = {}), (f[p] = !0), f)),
              });
            if (v && !h) {
              var m = e.expanded;
              return m[p], i({}, e, { expanded: u(m, [p].map(a)) });
            }
            return e;
          }
        }
        function pe(e) {
          var n = e.data,
            r = e.rows,
            o = e.rowsById,
            i = e.manualExpandedKey,
            u = void 0 === i ? "expanded" : i,
            a = e.paginateExpandedRows,
            s = void 0 === a || a,
            c = e.expandSubRows,
            d = void 0 === c || c,
            f = e.autoResetExpanded,
            g = void 0 === f || f,
            v = e.getHooks,
            m = e.plugins,
            w = e.state.expanded,
            b = e.dispatch;
          h(
            m,
            ["useSortBy", "useGroupBy", "usePivotColumns", "useGlobalFilter"],
            "useExpanded"
          );
          var S = y(g),
            C = Boolean(Object.keys(o).length && Object.keys(w).length);
          C &&
            Object.keys(o).some(function (e) {
              return !w[e];
            }) &&
            (C = !1),
            R(
              function () {
                S() && b({ type: l.resetExpanded });
              },
              [b, n]
            );
          var x = t.useCallback(
              function (e, t) {
                b({ type: l.toggleRowExpanded, id: e, value: t });
              },
              [b]
            ),
            P = t.useCallback(
              function (e) {
                return b({ type: l.toggleAllRowsExpanded, value: e });
              },
              [b]
            ),
            B = t.useMemo(
              function () {
                return s
                  ? A(r, {
                      manualExpandedKey: u,
                      expanded: w,
                      expandSubRows: d,
                    })
                  : r;
              },
              [s, r, u, w, d]
            ),
            E = t.useMemo(
              function () {
                return (function (e) {
                  var t = 0;
                  return (
                    Object.keys(e).forEach(function (e) {
                      var n = e.split(".");
                      t = Math.max(t, n.length);
                    }),
                    t
                  );
                })(w);
              },
              [w]
            ),
            I = y(e),
            G = p(v().getToggleAllRowsExpandedProps, { instance: I() });
          Object.assign(e, {
            preExpandedRows: r,
            expandedRows: B,
            rows: B,
            expandedDepth: E,
            isAllRowsExpanded: C,
            toggleRowExpanded: x,
            toggleAllRowsExpanded: P,
            getToggleAllRowsExpandedProps: G,
          });
        }
        function ge(e, t) {
          var n = t.instance.getHooks,
            r = t.instance;
          (e.toggleRowExpanded = function (t) {
            return r.toggleRowExpanded(e.id, t);
          }),
            (e.getToggleRowExpandedProps = p(n().getToggleRowExpandedProps, {
              instance: r,
              row: e,
            }));
        }
        var ve = function (e, t, n) {
          return e.filter(function (e) {
            return t.some(function (t) {
              var r = e.values[t];
              return String(r).toLowerCase().includes(String(n).toLowerCase());
            });
          });
        };
        ve.autoRemove = function (e) {
          return !e;
        };
        var he = function (e, t, n) {
          return e.filter(function (e) {
            return t.some(function (t) {
              var r = e.values[t];
              return (
                void 0 === r ||
                String(r).toLowerCase() === String(n).toLowerCase()
              );
            });
          });
        };
        he.autoRemove = function (e) {
          return !e;
        };
        var me = function (e, t, n) {
          return e.filter(function (e) {
            return t.some(function (t) {
              var r = e.values[t];
              return void 0 === r || String(r) === String(n);
            });
          });
        };
        me.autoRemove = function (e) {
          return !e;
        };
        var ye = function (e, t, n) {
          return e.filter(function (e) {
            return t.some(function (t) {
              return e.values[t].includes(n);
            });
          });
        };
        ye.autoRemove = function (e) {
          return !e || !e.length;
        };
        var we = function (e, t, n) {
          return e.filter(function (e) {
            return t.some(function (t) {
              var r = e.values[t];
              return (
                r &&
                r.length &&
                n.every(function (e) {
                  return r.includes(e);
                })
              );
            });
          });
        };
        we.autoRemove = function (e) {
          return !e || !e.length;
        };
        var Re = function (e, t, n) {
          return e.filter(function (e) {
            return t.some(function (t) {
              var r = e.values[t];
              return (
                r &&
                r.length &&
                n.some(function (e) {
                  return r.includes(e);
                })
              );
            });
          });
        };
        Re.autoRemove = function (e) {
          return !e || !e.length;
        };
        var be = function (e, t, n) {
          return e.filter(function (e) {
            return t.some(function (t) {
              var r = e.values[t];
              return n.includes(r);
            });
          });
        };
        be.autoRemove = function (e) {
          return !e || !e.length;
        };
        var Se = function (e, t, n) {
          return e.filter(function (e) {
            return t.some(function (t) {
              return e.values[t] === n;
            });
          });
        };
        Se.autoRemove = function (e) {
          return void 0 === e;
        };
        var Ce = function (e, t, n) {
          return e.filter(function (e) {
            return t.some(function (t) {
              return e.values[t] == n;
            });
          });
        };
        Ce.autoRemove = function (e) {
          return null == e;
        };
        var xe = function (e, t, n) {
          var r = n || [],
            o = r[0],
            i = r[1];
          if (
            (o = "number" == typeof o ? o : -1 / 0) >
            (i = "number" == typeof i ? i : 1 / 0)
          ) {
            var u = o;
            (o = i), (i = u);
          }
          return e.filter(function (e) {
            return t.some(function (t) {
              var n = e.values[t];
              return n >= o && n <= i;
            });
          });
        };
        xe.autoRemove = function (e) {
          return !e || ("number" != typeof e[0] && "number" != typeof e[1]);
        };
        var Pe = Object.freeze({
          __proto__: null,
          text: ve,
          exactText: he,
          exactTextCase: me,
          includes: ye,
          includesAll: we,
          includesSome: Re,
          includesValue: be,
          exact: Se,
          equals: Ce,
          between: xe,
        });
        (l.resetFilters = "resetFilters"),
          (l.setFilter = "setFilter"),
          (l.setAllFilters = "setAllFilters");
        var Be = function (e) {
          e.stateReducers.push(Ee), e.useInstance.push(Ie);
        };
        function Ee(e, t, n, r) {
          if (t.type === l.init) return i({ filters: [] }, e);
          if (t.type === l.resetFilters)
            return i({}, e, { filters: r.initialState.filters || [] });
          if (t.type === l.setFilter) {
            var o = t.columnId,
              u = t.filterValue,
              a = r.allColumns,
              s = r.filterTypes,
              c = a.find(function (e) {
                return e.id === o;
              });
            if (!c)
              throw new Error(
                "React-Table: Could not find a column with id: " + o
              );
            var d = H(c.filter, s || {}, Pe),
              f = e.filters.find(function (e) {
                return e.id === o;
              }),
              p = m(u, f && f.value);
            return W(d.autoRemove, p, c)
              ? i({}, e, {
                  filters: e.filters.filter(function (e) {
                    return e.id !== o;
                  }),
                })
              : i(
                  {},
                  e,
                  f
                    ? {
                        filters: e.filters.map(function (e) {
                          return e.id === o ? { id: o, value: p } : e;
                        }),
                      }
                    : { filters: [].concat(e.filters, [{ id: o, value: p }]) }
                );
          }
          if (t.type === l.setAllFilters) {
            var g = t.filters,
              v = r.allColumns,
              h = r.filterTypes;
            return i({}, e, {
              filters: m(g, e.filters).filter(function (e) {
                var t = v.find(function (t) {
                  return t.id === e.id;
                });
                return !W(H(t.filter, h || {}, Pe).autoRemove, e.value, t);
              }),
            });
          }
        }
        function Ie(e) {
          var n = e.data,
            r = e.rows,
            o = e.flatRows,
            i = e.rowsById,
            u = e.allColumns,
            a = e.filterTypes,
            s = e.manualFilters,
            c = e.defaultCanFilter,
            d = void 0 !== c && c,
            f = e.disableFilters,
            p = e.state.filters,
            g = e.dispatch,
            v = e.autoResetFilters,
            h = void 0 === v || v,
            m = t.useCallback(
              function (e, t) {
                g({ type: l.setFilter, columnId: e, filterValue: t });
              },
              [g]
            ),
            w = t.useCallback(
              function (e) {
                g({ type: l.setAllFilters, filters: e });
              },
              [g]
            );
          u.forEach(function (e) {
            var t = e.id,
              n = e.accessor,
              r = e.defaultCanFilter,
              o = e.disableFilters;
            (e.canFilter = n
              ? G(!0 !== o && void 0, !0 !== f && void 0, !0)
              : G(r, d, !1)),
              (e.setFilter = function (t) {
                return m(e.id, t);
              });
            var i = p.find(function (e) {
              return e.id === t;
            });
            e.filterValue = i && i.value;
          });
          var b = t.useMemo(
              function () {
                if (s || !p.length) return [r, o, i];
                var e = [],
                  t = {};
                return [
                  (function n(r, o) {
                    void 0 === o && (o = 0);
                    var i = r;
                    return (
                      (i = p.reduce(function (e, t) {
                        var n = t.id,
                          r = t.value,
                          i = u.find(function (e) {
                            return e.id === n;
                          });
                        if (!i) return e;
                        0 === o && (i.preFilteredRows = e);
                        var l = H(i.filter, a || {}, Pe);
                        return l
                          ? ((i.filteredRows = l(e, [n], r)), i.filteredRows)
                          : (console.warn(
                              "Could not find a valid 'column.filter' for column with the ID: " +
                                i.id +
                                "."
                            ),
                            e);
                      }, r)).forEach(function (r) {
                        e.push(r),
                          (t[r.id] = r),
                          r.subRows &&
                            (r.subRows =
                              r.subRows && r.subRows.length > 0
                                ? n(r.subRows, o + 1)
                                : r.subRows);
                      }),
                      i
                    );
                  })(r),
                  e,
                  t,
                ];
              },
              [s, p, r, o, i, u, a]
            ),
            S = b[0],
            C = b[1],
            x = b[2];
          t.useMemo(
            function () {
              u.filter(function (e) {
                return !p.find(function (t) {
                  return t.id === e.id;
                });
              }).forEach(function (e) {
                (e.preFilteredRows = S), (e.filteredRows = S);
              });
            },
            [S, p, u]
          );
          var P = y(h);
          R(
            function () {
              P() && g({ type: l.resetFilters });
            },
            [g, s ? null : n]
          ),
            Object.assign(e, {
              preFilteredRows: r,
              preFilteredFlatRows: o,
              preFilteredRowsById: i,
              filteredRows: S,
              filteredFlatRows: C,
              filteredRowsById: x,
              rows: S,
              flatRows: C,
              rowsById: x,
              setFilter: m,
              setAllFilters: w,
            });
        }
        (Be.pluginName = "useFilters"),
          (l.resetGlobalFilter = "resetGlobalFilter"),
          (l.setGlobalFilter = "setGlobalFilter");
        var Ge = function (e) {
          e.stateReducers.push(Fe), e.useInstance.push(ke);
        };
        function Fe(e, t, n, r) {
          if (t.type === l.resetGlobalFilter)
            return i({}, e, {
              globalFilter: r.initialState.globalFilter || void 0,
            });
          if (t.type === l.setGlobalFilter) {
            var o = t.filterValue,
              a = r.userFilterTypes,
              s = H(r.globalFilter, a || {}, Pe),
              c = m(o, e.globalFilter);
            return W(s.autoRemove, c)
              ? (e.globalFilter, u(e, ["globalFilter"]))
              : i({}, e, { globalFilter: c });
          }
        }
        function ke(e) {
          var n = e.data,
            r = e.rows,
            o = e.flatRows,
            i = e.rowsById,
            u = e.allColumns,
            a = e.filterTypes,
            s = e.globalFilter,
            c = e.manualGlobalFilter,
            d = e.state.globalFilter,
            f = e.dispatch,
            p = e.autoResetGlobalFilter,
            g = void 0 === p || p,
            v = e.disableGlobalFilter,
            h = t.useCallback(
              function (e) {
                f({ type: l.setGlobalFilter, filterValue: e });
              },
              [f]
            ),
            m = t.useMemo(
              function () {
                if (c || void 0 === d) return [r, o, i];
                var e = [],
                  t = {},
                  n = H(s, a || {}, Pe);
                if (!n)
                  return (
                    console.warn(
                      "Could not find a valid 'globalFilter' option."
                    ),
                    r
                  );
                u.forEach(function (e) {
                  var t = e.disableGlobalFilter;
                  e.canFilter = G(!0 !== t && void 0, !0 !== v && void 0, !0);
                });
                var l = u.filter(function (e) {
                  return !0 === e.canFilter;
                });
                return [
                  (function r(o) {
                    return (
                      (o = n(
                        o,
                        l.map(function (e) {
                          return e.id;
                        }),
                        d
                      )).forEach(function (n) {
                        e.push(n),
                          (t[n.id] = n),
                          (n.subRows =
                            n.subRows && n.subRows.length
                              ? r(n.subRows)
                              : n.subRows);
                      }),
                      o
                    );
                  })(r),
                  e,
                  t,
                ];
              },
              [c, d, s, a, u, r, o, i, v]
            ),
            w = m[0],
            b = m[1],
            S = m[2],
            C = y(g);
          R(
            function () {
              C() && f({ type: l.resetGlobalFilter });
            },
            [f, c ? null : n]
          ),
            Object.assign(e, {
              preGlobalFilteredRows: r,
              preGlobalFilteredFlatRows: o,
              preGlobalFilteredRowsById: i,
              globalFilteredRows: w,
              globalFilteredFlatRows: b,
              globalFilteredRowsById: S,
              rows: w,
              flatRows: b,
              rowsById: S,
              setGlobalFilter: h,
              disableGlobalFilter: v,
            });
        }
        function Ae(e, t) {
          return t.reduce(function (e, t) {
            return e + ("number" == typeof t ? t : 0);
          }, 0);
        }
        Ge.pluginName = "useGlobalFilter";
        var He = Object.freeze({
            __proto__: null,
            sum: Ae,
            min: function (e) {
              var t = e[0] || 0;
              return (
                e.forEach(function (e) {
                  "number" == typeof e && (t = Math.min(t, e));
                }),
                t
              );
            },
            max: function (e) {
              var t = e[0] || 0;
              return (
                e.forEach(function (e) {
                  "number" == typeof e && (t = Math.max(t, e));
                }),
                t
              );
            },
            minMax: function (e) {
              var t = e[0] || 0,
                n = e[0] || 0;
              return (
                e.forEach(function (e) {
                  "number" == typeof e &&
                    ((t = Math.min(t, e)), (n = Math.max(n, e)));
                }),
                t + ".." + n
              );
            },
            average: function (e) {
              return Ae(0, e) / e.length;
            },
            median: function (e) {
              if (!e.length) return null;
              var t = Math.floor(e.length / 2),
                n = [].concat(e).sort(function (e, t) {
                  return e - t;
                });
              return e.length % 2 != 0 ? n[t] : (n[t - 1] + n[t]) / 2;
            },
            unique: function (e) {
              return Array.from(new Set(e).values());
            },
            uniqueCount: function (e) {
              return new Set(e).size;
            },
            count: function (e) {
              return e.length;
            },
          }),
          We = [],
          Oe = {};
        (l.resetGroupBy = "resetGroupBy"),
          (l.setGroupBy = "setGroupBy"),
          (l.toggleGroupBy = "toggleGroupBy");
        var ze = function (e) {
          (e.getGroupByToggleProps = [Te]),
            e.stateReducers.push(Le),
            e.visibleColumnsDeps.push(function (e, t) {
              var n = t.instance;
              return [].concat(e, [n.state.groupBy]);
            }),
            e.visibleColumns.push(je),
            e.useInstance.push(_e),
            e.prepareRow.push(Ne);
        };
        ze.pluginName = "useGroupBy";
        var Te = function (e, t) {
          var n = t.header;
          return [
            e,
            {
              onClick: n.canGroupBy
                ? function (e) {
                    e.persist(), n.toggleGroupBy();
                  }
                : void 0,
              style: { cursor: n.canGroupBy ? "pointer" : void 0 },
              title: "Toggle GroupBy",
            },
          ];
        };
        function Le(e, t, n, r) {
          if (t.type === l.init) return i({ groupBy: [] }, e);
          if (t.type === l.resetGroupBy)
            return i({}, e, { groupBy: r.initialState.groupBy || [] });
          if (t.type === l.setGroupBy) return i({}, e, { groupBy: t.value });
          if (t.type === l.toggleGroupBy) {
            var o = t.columnId,
              u = t.value,
              a = void 0 !== u ? u : !e.groupBy.includes(o);
            return i(
              {},
              e,
              a
                ? { groupBy: [].concat(e.groupBy, [o]) }
                : {
                    groupBy: e.groupBy.filter(function (e) {
                      return e !== o;
                    }),
                  }
            );
          }
        }
        function je(e, t) {
          var n = t.instance.state.groupBy,
            r = n
              .map(function (t) {
                return e.find(function (e) {
                  return e.id === t;
                });
              })
              .filter(Boolean),
            o = e.filter(function (e) {
              return !n.includes(e.id);
            });
          return (
            (e = [].concat(r, o)).forEach(function (e) {
              (e.isGrouped = n.includes(e.id)),
                (e.groupedIndex = n.indexOf(e.id));
            }),
            e
          );
        }
        var Me = {};
        function _e(e) {
          var n = e.data,
            r = e.rows,
            o = e.flatRows,
            u = e.rowsById,
            a = e.allColumns,
            s = e.flatHeaders,
            c = e.groupByFn,
            d = void 0 === c ? De : c,
            f = e.manualGroupBy,
            g = e.aggregations,
            v = void 0 === g ? Me : g,
            m = e.plugins,
            w = e.state.groupBy,
            b = e.dispatch,
            S = e.autoResetGroupBy,
            C = void 0 === S || S,
            x = e.disableGroupBy,
            P = e.defaultCanGroupBy,
            B = e.getHooks;
          h(m, ["useColumnOrder", "useFilters"], "useGroupBy");
          var E = y(e);
          a.forEach(function (t) {
            var n = t.accessor,
              r = t.defaultGroupBy,
              o = t.disableGroupBy;
            (t.canGroupBy = n
              ? G(t.canGroupBy, !0 !== o && void 0, !0 !== x && void 0, !0)
              : G(t.canGroupBy, r, P, !1)),
              t.canGroupBy &&
                (t.toggleGroupBy = function () {
                  return e.toggleGroupBy(t.id);
                }),
              (t.Aggregated = t.Aggregated || t.Cell);
          });
          var I = t.useCallback(
              function (e, t) {
                b({ type: l.toggleGroupBy, columnId: e, value: t });
              },
              [b]
            ),
            F = t.useCallback(
              function (e) {
                b({ type: l.setGroupBy, value: e });
              },
              [b]
            );
          s.forEach(function (e) {
            e.getGroupByToggleProps = p(B().getGroupByToggleProps, {
              instance: E(),
              header: e,
            });
          });
          var A = t.useMemo(
              function () {
                if (f || !w.length) return [r, o, u, We, Oe, o, u];
                var e = w.filter(function (e) {
                    return a.find(function (t) {
                      return t.id === e;
                    });
                  }),
                  t = [],
                  n = {},
                  l = [],
                  s = {},
                  c = [],
                  p = {},
                  g = (function r(o, u, f) {
                    if ((void 0 === u && (u = 0), u === e.length))
                      return o.map(function (e) {
                        return i({}, e, { depth: u });
                      });
                    var g = e[u],
                      h = d(o, g);
                    return Object.entries(h).map(function (o, i) {
                      var d = o[0],
                        h = o[1],
                        m = g + ":" + d,
                        y = r(h, u + 1, (m = f ? f + ">" + m : m)),
                        w = u ? k(h, "leafRows") : h,
                        R = (function (t, n, r) {
                          var o = {};
                          return (
                            a.forEach(function (i) {
                              if (e.includes(i.id))
                                o[i.id] = n[0] ? n[0].values[i.id] : null;
                              else {
                                var u =
                                  "function" == typeof i.aggregate
                                    ? i.aggregate
                                    : v[i.aggregate] || He[i.aggregate];
                                if (u) {
                                  var a = n.map(function (e) {
                                      return e.values[i.id];
                                    }),
                                    l = t.map(function (e) {
                                      var t = e.values[i.id];
                                      if (!r && i.aggregateValue) {
                                        var n =
                                          "function" == typeof i.aggregateValue
                                            ? i.aggregateValue
                                            : v[i.aggregateValue] ||
                                              He[i.aggregateValue];
                                        if (!n)
                                          throw (
                                            (console.info({ column: i }),
                                            new Error(
                                              "React Table: Invalid column.aggregateValue option for column listed above"
                                            ))
                                          );
                                        t = n(t, e, i);
                                      }
                                      return t;
                                    });
                                  o[i.id] = u(l, a);
                                } else {
                                  if (i.aggregate)
                                    throw (
                                      (console.info({ column: i }),
                                      new Error(
                                        "React Table: Invalid column.aggregate option for column listed above"
                                      ))
                                    );
                                  o[i.id] = null;
                                }
                              }
                            }),
                            o
                          );
                        })(w, h, u),
                        b = {
                          id: m,
                          isGrouped: !0,
                          groupByID: g,
                          groupByVal: d,
                          values: R,
                          subRows: y,
                          leafRows: w,
                          depth: u,
                          index: i,
                        };
                      return (
                        y.forEach(function (e) {
                          t.push(e),
                            (n[e.id] = e),
                            e.isGrouped
                              ? (l.push(e), (s[e.id] = e))
                              : (c.push(e), (p[e.id] = e));
                        }),
                        b
                      );
                    });
                  })(r);
                return (
                  g.forEach(function (e) {
                    t.push(e),
                      (n[e.id] = e),
                      e.isGrouped
                        ? (l.push(e), (s[e.id] = e))
                        : (c.push(e), (p[e.id] = e));
                  }),
                  [g, t, n, l, s, c, p]
                );
              },
              [f, w, r, o, u, a, v, d]
            ),
            H = A[0],
            W = A[1],
            O = A[2],
            z = A[3],
            T = A[4],
            L = A[5],
            j = A[6],
            M = y(C);
          R(
            function () {
              M() && b({ type: l.resetGroupBy });
            },
            [b, f ? null : n]
          ),
            Object.assign(e, {
              preGroupedRows: r,
              preGroupedFlatRow: o,
              preGroupedRowsById: u,
              groupedRows: H,
              groupedFlatRows: W,
              groupedRowsById: O,
              onlyGroupedFlatRows: z,
              onlyGroupedRowsById: T,
              nonGroupedFlatRows: L,
              nonGroupedRowsById: j,
              rows: H,
              flatRows: W,
              rowsById: O,
              toggleGroupBy: I,
              setGroupBy: F,
            });
        }
        function Ne(e) {
          e.allCells.forEach(function (t) {
            var n;
            (t.isGrouped = t.column.isGrouped && t.column.id === e.groupByID),
              (t.isPlaceholder = !t.isGrouped && t.column.isGrouped),
              (t.isAggregated =
                !t.isGrouped &&
                !t.isPlaceholder &&
                (null == (n = e.subRows) ? void 0 : n.length));
          });
        }
        function De(e, t) {
          return e.reduce(function (e, n, r) {
            var o = "" + n.values[t];
            return (e[o] = Array.isArray(e[o]) ? e[o] : []), e[o].push(n), e;
          }, {});
        }
        var Ve = /([0-9]+)/gm;
        function Xe(e, t) {
          return e === t ? 0 : e > t ? 1 : -1;
        }
        function qe(e, t, n) {
          return [e.values[n], t.values[n]];
        }
        function Ke(e) {
          return "number" == typeof e
            ? isNaN(e) || e === 1 / 0 || e === -1 / 0
              ? ""
              : String(e)
            : "string" == typeof e
            ? e
            : "";
        }
        var Ue = Object.freeze({
          __proto__: null,
          alphanumeric: function (e, t, n) {
            var r = qe(e, t, n),
              o = r[0],
              i = r[1];
            for (
              o = Ke(o),
                i = Ke(i),
                o = o.split(Ve).filter(Boolean),
                i = i.split(Ve).filter(Boolean);
              o.length && i.length;

            ) {
              var u = o.shift(),
                a = i.shift(),
                l = parseInt(u, 10),
                s = parseInt(a, 10),
                c = [l, s].sort();
              if (isNaN(c[0])) {
                if (u > a) return 1;
                if (a > u) return -1;
              } else {
                if (isNaN(c[1])) return isNaN(l) ? -1 : 1;
                if (l > s) return 1;
                if (s > l) return -1;
              }
            }
            return o.length - i.length;
          },
          datetime: function (e, t, n) {
            var r = qe(e, t, n),
              o = r[0],
              i = r[1];
            return Xe((o = o.getTime()), (i = i.getTime()));
          },
          basic: function (e, t, n) {
            var r = qe(e, t, n);
            return Xe(r[0], r[1]);
          },
          string: function (e, t, n) {
            var r = qe(e, t, n),
              o = r[0],
              i = r[1];
            for (
              o = o.split("").filter(Boolean), i = i.split("").filter(Boolean);
              o.length && i.length;

            ) {
              var u = o.shift(),
                a = i.shift(),
                l = u.toLowerCase(),
                s = a.toLowerCase();
              if (l > s) return 1;
              if (s > l) return -1;
              if (u > a) return 1;
              if (a > u) return -1;
            }
            return o.length - i.length;
          },
          number: function (e, t, n) {
            var r = qe(e, t, n),
              o = r[0],
              i = r[1],
              u = /[^0-9.]/gi;
            return Xe(
              (o = Number(String(o).replace(u, ""))),
              (i = Number(String(i).replace(u, "")))
            );
          },
        });
        (l.resetSortBy = "resetSortBy"),
          (l.setSortBy = "setSortBy"),
          (l.toggleSortBy = "toggleSortBy"),
          (l.clearSortBy = "clearSortBy"),
          (d.sortType = "alphanumeric"),
          (d.sortDescFirst = !1);
        var $e = function (e) {
          (e.getSortByToggleProps = [Ye]),
            e.stateReducers.push(Je),
            e.useInstance.push(Qe);
        };
        $e.pluginName = "useSortBy";
        var Ye = function (e, t) {
          var n = t.instance,
            r = t.column,
            o = n.isMultiSortEvent,
            i =
              void 0 === o
                ? function (e) {
                    return e.shiftKey;
                  }
                : o;
          return [
            e,
            {
              onClick: r.canSort
                ? function (e) {
                    e.persist(),
                      r.toggleSortBy(void 0, !n.disableMultiSort && i(e));
                  }
                : void 0,
              style: { cursor: r.canSort ? "pointer" : void 0 },
              title: r.canSort ? "Toggle SortBy" : void 0,
            },
          ];
        };
        function Je(e, t, n, r) {
          if (t.type === l.init) return i({ sortBy: [] }, e);
          if (t.type === l.resetSortBy)
            return i({}, e, { sortBy: r.initialState.sortBy || [] });
          if (t.type === l.clearSortBy)
            return i({}, e, {
              sortBy: e.sortBy.filter(function (e) {
                return e.id !== t.columnId;
              }),
            });
          if (t.type === l.setSortBy) return i({}, e, { sortBy: t.sortBy });
          if (t.type === l.toggleSortBy) {
            var o,
              u = t.columnId,
              a = t.desc,
              s = t.multi,
              c = r.allColumns,
              d = r.disableMultiSort,
              f = r.disableSortRemove,
              p = r.disableMultiRemove,
              g = r.maxMultiSortColCount,
              v = void 0 === g ? Number.MAX_SAFE_INTEGER : g,
              h = e.sortBy,
              m = c.find(function (e) {
                return e.id === u;
              }).sortDescFirst,
              y = h.find(function (e) {
                return e.id === u;
              }),
              w = h.findIndex(function (e) {
                return e.id === u;
              }),
              R = null != a,
              b = [];
            return (
              "toggle" !==
                (o =
                  !d && s
                    ? y
                      ? "toggle"
                      : "add"
                    : w !== h.length - 1 || 1 !== h.length
                    ? "replace"
                    : y
                    ? "toggle"
                    : "replace") ||
                f ||
                R ||
                (s && p) ||
                !((y && y.desc && !m) || (!y.desc && m)) ||
                (o = "remove"),
              "replace" === o
                ? (b = [{ id: u, desc: R ? a : m }])
                : "add" === o
                ? (b = [].concat(h, [{ id: u, desc: R ? a : m }])).splice(
                    0,
                    b.length - v
                  )
                : "toggle" === o
                ? (b = h.map(function (e) {
                    return e.id === u ? i({}, e, { desc: R ? a : !y.desc }) : e;
                  }))
                : "remove" === o &&
                  (b = h.filter(function (e) {
                    return e.id !== u;
                  })),
              i({}, e, { sortBy: b })
            );
          }
        }
        function Qe(e) {
          var n = e.data,
            r = e.rows,
            o = e.flatRows,
            i = e.allColumns,
            u = e.orderByFn,
            a = void 0 === u ? Ze : u,
            s = e.sortTypes,
            c = e.manualSortBy,
            d = e.defaultCanSort,
            f = e.disableSortBy,
            g = e.flatHeaders,
            v = e.state.sortBy,
            m = e.dispatch,
            w = e.plugins,
            b = e.getHooks,
            S = e.autoResetSortBy,
            C = void 0 === S || S;
          h(
            w,
            ["useFilters", "useGlobalFilter", "useGroupBy", "usePivotColumns"],
            "useSortBy"
          );
          var x = t.useCallback(
              function (e) {
                m({ type: l.setSortBy, sortBy: e });
              },
              [m]
            ),
            P = t.useCallback(
              function (e, t, n) {
                m({ type: l.toggleSortBy, columnId: e, desc: t, multi: n });
              },
              [m]
            ),
            B = y(e);
          g.forEach(function (e) {
            var t = e.accessor,
              n = e.canSort,
              r = e.disableSortBy,
              o = e.id,
              i = t
                ? G(!0 !== r && void 0, !0 !== f && void 0, !0)
                : G(d, n, !1);
            (e.canSort = i),
              e.canSort &&
                ((e.toggleSortBy = function (t, n) {
                  return P(e.id, t, n);
                }),
                (e.clearSortBy = function () {
                  m({ type: l.clearSortBy, columnId: e.id });
                })),
              (e.getSortByToggleProps = p(b().getSortByToggleProps, {
                instance: B(),
                column: e,
              }));
            var u = v.find(function (e) {
              return e.id === o;
            });
            (e.isSorted = !!u),
              (e.sortedIndex = v.findIndex(function (e) {
                return e.id === o;
              })),
              (e.isSortedDesc = e.isSorted ? u.desc : void 0);
          });
          var E = t.useMemo(
              function () {
                if (c || !v.length) return [r, o];
                var e = [],
                  t = v.filter(function (e) {
                    return i.find(function (t) {
                      return t.id === e.id;
                    });
                  });
                return [
                  (function n(r) {
                    var o = a(
                      r,
                      t.map(function (e) {
                        var t = i.find(function (t) {
                          return t.id === e.id;
                        });
                        if (!t)
                          throw new Error(
                            "React-Table: Could not find a column with id: " +
                              e.id +
                              " while sorting"
                          );
                        var n = t.sortType,
                          r = F(n) || (s || {})[n] || Ue[n];
                        if (!r)
                          throw new Error(
                            "React-Table: Could not find a valid sortType of '" +
                              n +
                              "' for column '" +
                              e.id +
                              "'."
                          );
                        return function (t, n) {
                          return r(t, n, e.id, e.desc);
                        };
                      }),
                      t.map(function (e) {
                        var t = i.find(function (t) {
                          return t.id === e.id;
                        });
                        return t && t.sortInverted ? e.desc : !e.desc;
                      })
                    );
                    return (
                      o.forEach(function (t) {
                        e.push(t),
                          t.subRows &&
                            0 !== t.subRows.length &&
                            (t.subRows = n(t.subRows));
                      }),
                      o
                    );
                  })(r),
                  e,
                ];
              },
              [c, v, r, o, i, a, s]
            ),
            I = E[0],
            k = E[1],
            A = y(C);
          R(
            function () {
              A() && m({ type: l.resetSortBy });
            },
            [c ? null : n]
          ),
            Object.assign(e, {
              preSortedRows: r,
              preSortedFlatRows: o,
              sortedRows: I,
              sortedFlatRows: k,
              rows: I,
              flatRows: k,
              setSortBy: x,
              toggleSortBy: P,
            });
        }
        function Ze(e, t, n) {
          return [].concat(e).sort(function (e, r) {
            for (var o = 0; o < t.length; o += 1) {
              var i = t[o],
                u = !1 === n[o] || "desc" === n[o],
                a = i(e, r);
              if (0 !== a) return u ? -a : a;
            }
            return n[0] ? e.index - r.index : r.index - e.index;
          });
        }
        (l.resetPage = "resetPage"),
          (l.gotoPage = "gotoPage"),
          (l.setPageSize = "setPageSize");
        var et = function (e) {
          e.stateReducers.push(tt), e.useInstance.push(nt);
        };
        function tt(e, t, n, r) {
          if (t.type === l.init) return i({ pageSize: 10, pageIndex: 0 }, e);
          if (t.type === l.resetPage)
            return i({}, e, { pageIndex: r.initialState.pageIndex || 0 });
          if (t.type === l.gotoPage) {
            var o = r.pageCount,
              u = r.page,
              a = m(t.pageIndex, e.pageIndex),
              s = !1;
            return (
              a > e.pageIndex
                ? (s = -1 === o ? u.length >= e.pageSize : a < o)
                : a < e.pageIndex && (s = a > -1),
              s ? i({}, e, { pageIndex: a }) : e
            );
          }
          if (t.type === l.setPageSize) {
            var c = t.pageSize,
              d = e.pageSize * e.pageIndex;
            return i({}, e, { pageIndex: Math.floor(d / c), pageSize: c });
          }
        }
        function nt(e) {
          var n = e.rows,
            r = e.autoResetPage,
            o = void 0 === r || r,
            i = e.manualExpandedKey,
            u = void 0 === i ? "expanded" : i,
            a = e.plugins,
            s = e.pageCount,
            c = e.paginateExpandedRows,
            d = void 0 === c || c,
            f = e.expandSubRows,
            p = void 0 === f || f,
            g = e.state,
            v = g.pageSize,
            m = g.pageIndex,
            w = g.expanded,
            b = g.globalFilter,
            S = g.filters,
            C = g.groupBy,
            x = g.sortBy,
            P = e.dispatch,
            B = e.data,
            E = e.manualPagination;
          h(
            a,
            [
              "useGlobalFilter",
              "useFilters",
              "useGroupBy",
              "useSortBy",
              "useExpanded",
            ],
            "usePagination"
          );
          var I = y(o);
          R(
            function () {
              I() && P({ type: l.resetPage });
            },
            [P, E ? null : B, b, S, C, x]
          );
          var G = E ? s : Math.ceil(n.length / v),
            F = t.useMemo(
              function () {
                return G > 0
                  ? []
                      .concat(new Array(G))
                      .fill(null)
                      .map(function (e, t) {
                        return t;
                      })
                  : [];
              },
              [G]
            ),
            k = t.useMemo(
              function () {
                var e;
                if (E) e = n;
                else {
                  var t = v * m,
                    r = t + v;
                  e = n.slice(t, r);
                }
                return d
                  ? e
                  : A(e, {
                      manualExpandedKey: u,
                      expanded: w,
                      expandSubRows: p,
                    });
              },
              [p, w, u, E, m, v, d, n]
            ),
            H = m > 0,
            W = -1 === G ? k.length >= v : m < G - 1,
            O = t.useCallback(
              function (e) {
                P({ type: l.gotoPage, pageIndex: e });
              },
              [P]
            ),
            z = t.useCallback(
              function () {
                return O(function (e) {
                  return e - 1;
                });
              },
              [O]
            ),
            T = t.useCallback(
              function () {
                return O(function (e) {
                  return e + 1;
                });
              },
              [O]
            ),
            L = t.useCallback(
              function (e) {
                P({ type: l.setPageSize, pageSize: e });
              },
              [P]
            );
          Object.assign(e, {
            pageOptions: F,
            pageCount: G,
            page: k,
            canPreviousPage: H,
            canNextPage: W,
            gotoPage: O,
            previousPage: z,
            nextPage: T,
            setPageSize: L,
          });
        }
        (et.pluginName = "usePagination"),
          (l.resetPivot = "resetPivot"),
          (l.togglePivot = "togglePivot");
        var rt = function (e) {
          (e.getPivotToggleProps = [it]),
            e.stateReducers.push(ut),
            e.useInstanceAfterData.push(at),
            e.allColumns.push(lt),
            e.accessValue.push(st),
            e.materializedColumns.push(ct),
            e.materializedColumnsDeps.push(dt),
            e.visibleColumns.push(ft),
            e.visibleColumnsDeps.push(pt),
            e.useInstance.push(gt),
            e.prepareRow.push(vt);
        };
        rt.pluginName = "usePivotColumns";
        var ot = [],
          it = function (e, t) {
            var n = t.header;
            return [
              e,
              {
                onClick: n.canPivot
                  ? function (e) {
                      e.persist(), n.togglePivot();
                    }
                  : void 0,
                style: { cursor: n.canPivot ? "pointer" : void 0 },
                title: "Toggle Pivot",
              },
            ];
          };
        function ut(e, t, n, r) {
          if (t.type === l.init) return i({ pivotColumns: ot }, e);
          if (t.type === l.resetPivot)
            return i({}, e, {
              pivotColumns: r.initialState.pivotColumns || ot,
            });
          if (t.type === l.togglePivot) {
            var o = t.columnId,
              u = t.value,
              a = void 0 !== u ? u : !e.pivotColumns.includes(o);
            return i(
              {},
              e,
              a
                ? { pivotColumns: [].concat(e.pivotColumns, [o]) }
                : {
                    pivotColumns: e.pivotColumns.filter(function (e) {
                      return e !== o;
                    }),
                  }
            );
          }
        }
        function at(e) {
          e.allColumns.forEach(function (t) {
            t.isPivotSource = e.state.pivotColumns.includes(t.id);
          });
        }
        function lt(e, t) {
          var n = t.instance;
          return (
            e.forEach(function (e) {
              (e.isPivotSource = n.state.pivotColumns.includes(e.id)),
                (e.uniqueValues = new Set());
            }),
            e
          );
        }
        function st(e, t) {
          var n = t.column;
          return n.uniqueValues && void 0 !== e && n.uniqueValues.add(e), e;
        }
        function ct(e, t) {
          var n = t.instance,
            r = n.allColumns,
            o = n.state;
          if (!o.pivotColumns.length || !o.groupBy || !o.groupBy.length)
            return e;
          var u = o.pivotColumns
              .map(function (e) {
                return r.find(function (t) {
                  return t.id === e;
                });
              })
              .filter(Boolean),
            a = r.filter(function (e) {
              return (
                !e.isPivotSource &&
                !o.groupBy.includes(e.id) &&
                !o.pivotColumns.includes(e.id)
              );
            }),
            l = x(
              (function e(t, n, r) {
                void 0 === t && (t = 0), void 0 === r && (r = []);
                var o = u[t];
                return o
                  ? Array.from(o.uniqueValues)
                      .sort()
                      .map(function (u) {
                        var a = i({}, o, {
                          Header:
                            o.PivotHeader || "string" == typeof o.header
                              ? o.Header + ": " + u
                              : u,
                          isPivotGroup: !0,
                          parent: n,
                          depth: t,
                          id: n ? n.id + "." + o.id + "." + u : o.id + "." + u,
                          pivotValue: u,
                        });
                        return (
                          (a.columns = e(
                            t + 1,
                            a,
                            [].concat(r, [
                              function (e) {
                                return e.values[o.id] === u;
                              },
                            ])
                          )),
                          a
                        );
                      })
                  : a.map(function (e) {
                      return i({}, e, {
                        canPivot: !1,
                        isPivoted: !0,
                        parent: n,
                        depth: t,
                        id: "" + (n ? n.id + "." + e.id : e.id),
                        accessor: function (t, n, o) {
                          if (
                            r.every(function (e) {
                              return e(o);
                            })
                          )
                            return o.values[e.id];
                        },
                      });
                    });
              })()
            );
          return [].concat(e, l);
        }
        function dt(e, t) {
          var n = t.instance.state,
            r = n.pivotColumns,
            o = n.groupBy;
          return [].concat(e, [r, o]);
        }
        function ft(e, t) {
          var n = t.instance.state;
          return (
            (e = e.filter(function (e) {
              return !e.isPivotSource;
            })),
            n.pivotColumns.length &&
              n.groupBy &&
              n.groupBy.length &&
              (e = e.filter(function (e) {
                return e.isGrouped || e.isPivoted;
              })),
            e
          );
        }
        function pt(e, t) {
          var n = t.instance;
          return [].concat(e, [n.state.pivotColumns, n.state.groupBy]);
        }
        function gt(e) {
          var t = e.columns,
            n = e.allColumns,
            r = e.flatHeaders,
            o = e.getHooks,
            i = e.plugins,
            u = e.dispatch,
            a = e.autoResetPivot,
            s = void 0 === a || a,
            c = e.manaulPivot,
            d = e.disablePivot,
            f = e.defaultCanPivot;
          h(i, ["useGroupBy"], "usePivotColumns");
          var g = y(e);
          n.forEach(function (t) {
            var n = t.accessor,
              r = t.defaultPivot,
              o = t.disablePivot;
            (t.canPivot = n
              ? G(t.canPivot, !0 !== o && void 0, !0 !== d && void 0, !0)
              : G(t.canPivot, r, f, !1)),
              t.canPivot &&
                (t.togglePivot = function () {
                  return e.togglePivot(t.id);
                }),
              (t.Aggregated = t.Aggregated || t.Cell);
          }),
            r.forEach(function (e) {
              e.getPivotToggleProps = p(o().getPivotToggleProps, {
                instance: g(),
                header: e,
              });
            });
          var v = y(s);
          R(
            function () {
              v() && u({ type: l.resetPivot });
            },
            [u, c ? null : t]
          ),
            Object.assign(e, {
              togglePivot: function (e, t) {
                u({ type: l.togglePivot, columnId: e, value: t });
              },
            });
        }
        function vt(e) {
          e.allCells.forEach(function (e) {
            e.isPivoted = e.column.isPivoted;
          });
        }
        (l.resetSelectedRows = "resetSelectedRows"),
          (l.toggleAllRowsSelected = "toggleAllRowsSelected"),
          (l.toggleRowSelected = "toggleRowSelected"),
          (l.toggleAllPageRowsSelected = "toggleAllPageRowsSelected");
        var ht = function (e) {
          (e.getToggleRowSelectedProps = [mt]),
            (e.getToggleAllRowsSelectedProps = [yt]),
            (e.getToggleAllPageRowsSelectedProps = [wt]),
            e.stateReducers.push(Rt),
            e.useInstance.push(bt),
            e.prepareRow.push(St);
        };
        ht.pluginName = "useRowSelect";
        var mt = function (e, t) {
            var n = t.instance,
              r = t.row,
              o = n.manualRowSelectedKey,
              i = void 0 === o ? "isSelected" : o;
            return [
              e,
              {
                onChange: function (e) {
                  r.toggleRowSelected(e.target.checked);
                },
                style: { cursor: "pointer" },
                checked: !(!r.original || !r.original[i]) || r.isSelected,
                title: "Toggle Row Selected",
                indeterminate: r.isSomeSelected,
              },
            ];
          },
          yt = function (e, t) {
            var n = t.instance;
            return [
              e,
              {
                onChange: function (e) {
                  n.toggleAllRowsSelected(e.target.checked);
                },
                style: { cursor: "pointer" },
                checked: n.isAllRowsSelected,
                title: "Toggle All Rows Selected",
                indeterminate: Boolean(
                  !n.isAllRowsSelected &&
                    Object.keys(n.state.selectedRowIds).length
                ),
              },
            ];
          },
          wt = function (e, t) {
            var n = t.instance;
            return [
              e,
              {
                onChange: function (e) {
                  n.toggleAllPageRowsSelected(e.target.checked);
                },
                style: { cursor: "pointer" },
                checked: n.isAllPageRowsSelected,
                title: "Toggle All Current Page Rows Selected",
                indeterminate: Boolean(
                  !n.isAllPageRowsSelected &&
                    n.page.some(function (e) {
                      var t = e.id;
                      return n.state.selectedRowIds[t];
                    })
                ),
              },
            ];
          };
        function Rt(e, t, n, r) {
          if (t.type === l.init) return i({ selectedRowIds: {} }, e);
          if (t.type === l.resetSelectedRows)
            return i({}, e, {
              selectedRowIds: r.initialState.selectedRowIds || {},
            });
          if (t.type === l.toggleAllRowsSelected) {
            var o = t.value,
              u = r.isAllRowsSelected,
              a = r.rowsById,
              s = r.nonGroupedRowsById,
              c = void 0 === s ? a : s,
              d = void 0 !== o ? o : !u,
              f = Object.assign({}, e.selectedRowIds);
            return (
              d
                ? Object.keys(c).forEach(function (e) {
                    f[e] = !0;
                  })
                : Object.keys(c).forEach(function (e) {
                    delete f[e];
                  }),
              i({}, e, { selectedRowIds: f })
            );
          }
          if (t.type === l.toggleRowSelected) {
            var p = t.id,
              g = t.value,
              v = r.rowsById,
              h = r.selectSubRows,
              m = void 0 === h || h,
              y = r.getSubRows,
              w = e.selectedRowIds[p],
              R = void 0 !== g ? g : !w;
            if (w === R) return e;
            var b = i({}, e.selectedRowIds);
            return (
              (function e(t) {
                var n = v[t];
                if (
                  n &&
                  (n.isGrouped || (R ? (b[t] = !0) : delete b[t]), m && y(n))
                )
                  return y(n).forEach(function (t) {
                    return e(t.id);
                  });
              })(p),
              i({}, e, { selectedRowIds: b })
            );
          }
          if (t.type === l.toggleAllPageRowsSelected) {
            var S = t.value,
              C = r.page,
              x = r.rowsById,
              P = r.selectSubRows,
              B = void 0 === P || P,
              E = r.isAllPageRowsSelected,
              I = r.getSubRows,
              G = void 0 !== S ? S : !E,
              F = i({}, e.selectedRowIds);
            return (
              C.forEach(function (e) {
                return (function e(t) {
                  var n = x[t];
                  if (
                    (n.isGrouped || (G ? (F[t] = !0) : delete F[t]), B && I(n))
                  )
                    return I(n).forEach(function (t) {
                      return e(t.id);
                    });
                })(e.id);
              }),
              i({}, e, { selectedRowIds: F })
            );
          }
          return e;
        }
        function bt(e) {
          var n = e.data,
            r = e.rows,
            o = e.getHooks,
            i = e.plugins,
            u = e.rowsById,
            a = e.nonGroupedRowsById,
            s = void 0 === a ? u : a,
            c = e.autoResetSelectedRows,
            d = void 0 === c || c,
            f = e.state.selectedRowIds,
            g = e.selectSubRows,
            v = void 0 === g || g,
            m = e.dispatch,
            w = e.page,
            b = e.getSubRows;
          h(
            i,
            [
              "useFilters",
              "useGroupBy",
              "useSortBy",
              "useExpanded",
              "usePagination",
            ],
            "useRowSelect"
          );
          var S = t.useMemo(
              function () {
                var e = [];
                return (
                  r.forEach(function (t) {
                    var n = v
                      ? (function e(t, n, r) {
                          if (n[t.id]) return !0;
                          var o = r(t);
                          if (o && o.length) {
                            var i = !0,
                              u = !1;
                            return (
                              o.forEach(function (t) {
                                (u && !i) || (e(t, n, r) ? (u = !0) : (i = !1));
                              }),
                              !!i || (!!u && null)
                            );
                          }
                          return !1;
                        })(t, f, b)
                      : !!f[t.id];
                    (t.isSelected = !!n),
                      (t.isSomeSelected = null === n),
                      n && e.push(t);
                  }),
                  e
                );
              },
              [r, v, f, b]
            ),
            C = Boolean(Object.keys(s).length && Object.keys(f).length),
            x = C;
          C &&
            Object.keys(s).some(function (e) {
              return !f[e];
            }) &&
            (C = !1),
            C ||
              (w &&
                w.length &&
                w.some(function (e) {
                  var t = e.id;
                  return !f[t];
                }) &&
                (x = !1));
          var P = y(d);
          R(
            function () {
              P() && m({ type: l.resetSelectedRows });
            },
            [m, n]
          );
          var B = t.useCallback(
              function (e) {
                return m({ type: l.toggleAllRowsSelected, value: e });
              },
              [m]
            ),
            E = t.useCallback(
              function (e) {
                return m({ type: l.toggleAllPageRowsSelected, value: e });
              },
              [m]
            ),
            I = t.useCallback(
              function (e, t) {
                return m({ type: l.toggleRowSelected, id: e, value: t });
              },
              [m]
            ),
            G = y(e),
            F = p(o().getToggleAllRowsSelectedProps, { instance: G() }),
            k = p(o().getToggleAllPageRowsSelectedProps, { instance: G() });
          Object.assign(e, {
            selectedFlatRows: S,
            isAllRowsSelected: C,
            isAllPageRowsSelected: x,
            toggleRowSelected: I,
            toggleAllRowsSelected: B,
            getToggleAllRowsSelectedProps: F,
            getToggleAllPageRowsSelectedProps: k,
            toggleAllPageRowsSelected: E,
          });
        }
        function St(e, t) {
          var n = t.instance;
          (e.toggleRowSelected = function (t) {
            return n.toggleRowSelected(e.id, t);
          }),
            (e.getToggleRowSelectedProps = p(
              n.getHooks().getToggleRowSelectedProps,
              { instance: n, row: e }
            ));
        }
        var Ct = function (e) {
            return {};
          },
          xt = function (e) {
            return {};
          };
        (l.setRowState = "setRowState"),
          (l.setCellState = "setCellState"),
          (l.resetRowState = "resetRowState");
        var Pt = function (e) {
          e.stateReducers.push(Bt),
            e.useInstance.push(Et),
            e.prepareRow.push(It);
        };
        function Bt(e, t, n, r) {
          var o = r.initialRowStateAccessor,
            u = void 0 === o ? Ct : o,
            a = r.initialCellStateAccessor,
            s = void 0 === a ? xt : a,
            c = r.rowsById;
          if (t.type === l.init) return i({ rowState: {} }, e);
          if (t.type === l.resetRowState)
            return i({}, e, { rowState: r.initialState.rowState || {} });
          if (t.type === l.setRowState) {
            var d,
              f = t.rowId,
              p = t.value,
              g = void 0 !== e.rowState[f] ? e.rowState[f] : u(c[f]);
            return i({}, e, {
              rowState: i({}, e.rowState, ((d = {}), (d[f] = m(p, g)), d)),
            });
          }
          if (t.type === l.setCellState) {
            var v,
              h,
              y,
              w,
              R,
              b = t.rowId,
              S = t.columnId,
              C = t.value,
              x = void 0 !== e.rowState[b] ? e.rowState[b] : u(c[b]),
              P =
                void 0 !==
                (null == x || null == (v = x.cellState) ? void 0 : v[S])
                  ? x.cellState[S]
                  : s(
                      null == (h = c[b]) || null == (y = h.cells)
                        ? void 0
                        : y.find(function (e) {
                            return e.column.id === S;
                          })
                    );
            return i({}, e, {
              rowState: i(
                {},
                e.rowState,
                ((R = {}),
                (R[b] = i({}, x, {
                  cellState: i(
                    {},
                    x.cellState || {},
                    ((w = {}), (w[S] = m(C, P)), w)
                  ),
                })),
                R)
              ),
            });
          }
        }
        function Et(e) {
          var n = e.autoResetRowState,
            r = void 0 === n || n,
            o = e.data,
            i = e.dispatch,
            u = t.useCallback(
              function (e, t) {
                return i({ type: l.setRowState, rowId: e, value: t });
              },
              [i]
            ),
            a = t.useCallback(
              function (e, t, n) {
                return i({
                  type: l.setCellState,
                  rowId: e,
                  columnId: t,
                  value: n,
                });
              },
              [i]
            ),
            s = y(r);
          R(
            function () {
              s() && i({ type: l.resetRowState });
            },
            [o]
          ),
            Object.assign(e, { setRowState: u, setCellState: a });
        }
        function It(e, t) {
          var n = t.instance,
            r = n.initialRowStateAccessor,
            o = void 0 === r ? Ct : r,
            i = n.initialCellStateAccessor,
            u = void 0 === i ? xt : i,
            a = n.state.rowState;
          e &&
            ((e.state = void 0 !== a[e.id] ? a[e.id] : o(e)),
            (e.setState = function (t) {
              return n.setRowState(e.id, t);
            }),
            e.cells.forEach(function (t) {
              e.state.cellState || (e.state.cellState = {}),
                (t.state =
                  void 0 !== e.state.cellState[t.column.id]
                    ? e.state.cellState[t.column.id]
                    : u(t)),
                (t.setState = function (r) {
                  return n.setCellState(e.id, t.column.id, r);
                });
            }));
        }
        (Pt.pluginName = "useRowState"),
          (l.resetColumnOrder = "resetColumnOrder"),
          (l.setColumnOrder = "setColumnOrder");
        var Gt = function (e) {
          e.stateReducers.push(Ft),
            e.visibleColumnsDeps.push(function (e, t) {
              var n = t.instance;
              return [].concat(e, [n.state.columnOrder]);
            }),
            e.visibleColumns.push(kt),
            e.useInstance.push(At);
        };
        function Ft(e, t, n, r) {
          return t.type === l.init
            ? i({ columnOrder: [] }, e)
            : t.type === l.resetColumnOrder
            ? i({}, e, { columnOrder: r.initialState.columnOrder || [] })
            : t.type === l.setColumnOrder
            ? i({}, e, { columnOrder: m(t.columnOrder, e.columnOrder) })
            : void 0;
        }
        function kt(e, t) {
          var n = t.instance.state.columnOrder;
          if (!n || !n.length) return e;
          for (
            var r = [].concat(n),
              o = [].concat(e),
              i = [],
              u = function () {
                var e = r.shift(),
                  t = o.findIndex(function (t) {
                    return t.id === e;
                  });
                t > -1 && i.push(o.splice(t, 1)[0]);
              };
            o.length && r.length;

          )
            u();
          return [].concat(i, o);
        }
        function At(e) {
          var n = e.dispatch;
          e.setColumnOrder = t.useCallback(
            function (e) {
              return n({ type: l.setColumnOrder, columnOrder: e });
            },
            [n]
          );
        }
        (Gt.pluginName = "useColumnOrder"),
          (d.canResize = !0),
          (l.columnStartResizing = "columnStartResizing"),
          (l.columnResizing = "columnResizing"),
          (l.columnDoneResizing = "columnDoneResizing"),
          (l.resetResize = "resetResize");
        var Ht = function (e) {
            (e.getResizerProps = [Wt]),
              e.getHeaderProps.push({ style: { position: "relative" } }),
              e.stateReducers.push(Ot),
              e.useInstance.push(Tt),
              e.useInstanceBeforeDimensions.push(zt);
          },
          Wt = function (e, t) {
            var n = t.instance,
              r = t.header,
              o = n.dispatch,
              i = function (e, t) {
                var n = !1;
                if ("touchstart" === e.type) {
                  if (e.touches && e.touches.length > 1) return;
                  n = !0;
                }
                var r,
                  i,
                  u = (function (e) {
                    var t = [];
                    return (
                      (function e(n) {
                        n.columns && n.columns.length && n.columns.map(e),
                          t.push(n);
                      })(e),
                      t
                    );
                  })(t).map(function (e) {
                    return [e.id, e.totalWidth];
                  }),
                  a = n ? Math.round(e.touches[0].clientX) : e.clientX,
                  s = function () {
                    window.cancelAnimationFrame(r),
                      (r = null),
                      o({ type: l.columnDoneResizing });
                  },
                  c = function () {
                    window.cancelAnimationFrame(r),
                      (r = null),
                      o({ type: l.columnResizing, clientX: i });
                  },
                  d = function (e) {
                    (i = e), r || (r = window.requestAnimationFrame(c));
                  },
                  f = {
                    mouse: {
                      moveEvent: "mousemove",
                      moveHandler: function (e) {
                        return d(e.clientX);
                      },
                      upEvent: "mouseup",
                      upHandler: function (e) {
                        document.removeEventListener(
                          "mousemove",
                          f.mouse.moveHandler
                        ),
                          document.removeEventListener(
                            "mouseup",
                            f.mouse.upHandler
                          ),
                          s();
                      },
                    },
                    touch: {
                      moveEvent: "touchmove",
                      moveHandler: function (e) {
                        return (
                          e.cancelable &&
                            (e.preventDefault(), e.stopPropagation()),
                          d(e.touches[0].clientX),
                          !1
                        );
                      },
                      upEvent: "touchend",
                      upHandler: function (e) {
                        document.removeEventListener(
                          f.touch.moveEvent,
                          f.touch.moveHandler
                        ),
                          document.removeEventListener(
                            f.touch.upEvent,
                            f.touch.moveHandler
                          ),
                          s();
                      },
                    },
                  },
                  p = n ? f.touch : f.mouse,
                  g = !!(function () {
                    if ("boolean" == typeof z) return z;
                    var e = !1;
                    try {
                      var t = {
                        get passive() {
                          return (e = !0), !1;
                        },
                      };
                      window.addEventListener("test", null, t),
                        window.removeEventListener("test", null, t);
                    } catch (t) {
                      e = !1;
                    }
                    return (z = e);
                  })() && { passive: !1 };
                document.addEventListener(p.moveEvent, p.moveHandler, g),
                  document.addEventListener(p.upEvent, p.upHandler, g),
                  o({
                    type: l.columnStartResizing,
                    columnId: t.id,
                    columnWidth: t.totalWidth,
                    headerIdWidths: u,
                    clientX: a,
                  });
              };
            return [
              e,
              {
                onMouseDown: function (e) {
                  return e.persist() || i(e, r);
                },
                onTouchStart: function (e) {
                  return e.persist() || i(e, r);
                },
                style: { cursor: "col-resize" },
                draggable: !1,
                role: "separator",
              },
            ];
          };
        function Ot(e, t) {
          if (t.type === l.init)
            return i({ columnResizing: { columnWidths: {} } }, e);
          if (t.type === l.resetResize)
            return i({}, e, { columnResizing: { columnWidths: {} } });
          if (t.type === l.columnStartResizing) {
            var n = t.clientX,
              r = t.columnId,
              o = t.columnWidth,
              u = t.headerIdWidths;
            return i({}, e, {
              columnResizing: i({}, e.columnResizing, {
                startX: n,
                headerIdWidths: u,
                columnWidth: o,
                isResizingColumn: r,
              }),
            });
          }
          if (t.type === l.columnResizing) {
            var a = t.clientX,
              s = e.columnResizing,
              c = s.startX,
              d = s.columnWidth,
              f = s.headerIdWidths,
              p = (a - c) / d,
              g = {};
            return (
              (void 0 === f ? [] : f).forEach(function (e) {
                var t = e[0],
                  n = e[1];
                g[t] = Math.max(n + n * p, 0);
              }),
              i({}, e, {
                columnResizing: i({}, e.columnResizing, {
                  columnWidths: i({}, e.columnResizing.columnWidths, {}, g),
                }),
              })
            );
          }
          return t.type === l.columnDoneResizing
            ? i({}, e, {
                columnResizing: i({}, e.columnResizing, {
                  startX: null,
                  isResizingColumn: null,
                }),
              })
            : void 0;
        }
        Ht.pluginName = "useResizeColumns";
        var zt = function (e) {
          var t = e.flatHeaders,
            n = e.disableResizing,
            r = e.getHooks,
            o = e.state.columnResizing,
            i = y(e);
          t.forEach(function (e) {
            var t = G(
              !0 !== e.disableResizing && void 0,
              !0 !== n && void 0,
              !0
            );
            (e.canResize = t),
              (e.width = o.columnWidths[e.id] || e.originalWidth || e.width),
              (e.isResizing = o.isResizingColumn === e.id),
              t &&
                (e.getResizerProps = p(r().getResizerProps, {
                  instance: i(),
                  header: e,
                }));
          });
        };
        function Tt(e) {
          var n = e.plugins,
            r = e.dispatch,
            o = e.autoResetResize,
            i = void 0 === o || o,
            u = e.columns;
          h(n, ["useAbsoluteLayout"], "useResizeColumns");
          var a = y(i);
          R(
            function () {
              a() && r({ type: l.resetResize });
            },
            [u]
          );
          var s = t.useCallback(
            function () {
              return r({ type: l.resetResize });
            },
            [r]
          );
          Object.assign(e, { resetResizing: s });
        }
        var Lt = { position: "absolute", top: 0 },
          jt = function (e) {
            e.getTableBodyProps.push(Mt),
              e.getRowProps.push(Mt),
              e.getHeaderGroupProps.push(Mt),
              e.getFooterGroupProps.push(Mt),
              e.getHeaderProps.push(function (e, t) {
                var n = t.column;
                return [
                  e,
                  {
                    style: i({}, Lt, {
                      left: n.totalLeft + "px",
                      width: n.totalWidth + "px",
                    }),
                  },
                ];
              }),
              e.getCellProps.push(function (e, t) {
                var n = t.cell;
                return [
                  e,
                  {
                    style: i({}, Lt, {
                      left: n.column.totalLeft + "px",
                      width: n.column.totalWidth + "px",
                    }),
                  },
                ];
              }),
              e.getFooterProps.push(function (e, t) {
                var n = t.column;
                return [
                  e,
                  {
                    style: i({}, Lt, {
                      left: n.totalLeft + "px",
                      width: n.totalWidth + "px",
                    }),
                  },
                ];
              });
          };
        jt.pluginName = "useAbsoluteLayout";
        var Mt = function (e, t) {
            return [
              e,
              {
                style: {
                  position: "relative",
                  width: t.instance.totalColumnsWidth + "px",
                },
              },
            ];
          },
          _t = { display: "inline-block", boxSizing: "border-box" },
          Nt = function (e, t) {
            return [
              e,
              {
                style: {
                  display: "flex",
                  width: t.instance.totalColumnsWidth + "px",
                },
              },
            ];
          },
          Dt = function (e) {
            e.getRowProps.push(Nt),
              e.getHeaderGroupProps.push(Nt),
              e.getFooterGroupProps.push(Nt),
              e.getHeaderProps.push(function (e, t) {
                var n = t.column;
                return [
                  e,
                  { style: i({}, _t, { width: n.totalWidth + "px" }) },
                ];
              }),
              e.getCellProps.push(function (e, t) {
                var n = t.cell;
                return [
                  e,
                  { style: i({}, _t, { width: n.column.totalWidth + "px" }) },
                ];
              }),
              e.getFooterProps.push(function (e, t) {
                var n = t.column;
                return [
                  e,
                  { style: i({}, _t, { width: n.totalWidth + "px" }) },
                ];
              });
          };
        function Vt(e) {
          e.getTableProps.push(Xt),
            e.getRowProps.push(qt),
            e.getHeaderGroupProps.push(qt),
            e.getFooterGroupProps.push(qt),
            e.getHeaderProps.push(Kt),
            e.getCellProps.push(Ut),
            e.getFooterProps.push($t);
        }
        (Dt.pluginName = "useBlockLayout"), (Vt.pluginName = "useFlexLayout");
        var Xt = function (e, t) {
            return [
              e,
              { style: { minWidth: t.instance.totalColumnsMinWidth + "px" } },
            ];
          },
          qt = function (e, t) {
            return [
              e,
              {
                style: {
                  display: "flex",
                  flex: "1 0 auto",
                  minWidth: t.instance.totalColumnsMinWidth + "px",
                },
              },
            ];
          },
          Kt = function (e, t) {
            var n = t.column;
            return [
              e,
              {
                style: {
                  boxSizing: "border-box",
                  flex: n.totalFlexWidth
                    ? n.totalFlexWidth + " 0 auto"
                    : void 0,
                  minWidth: n.totalMinWidth + "px",
                  width: n.totalWidth + "px",
                },
              },
            ];
          },
          Ut = function (e, t) {
            var n = t.cell;
            return [
              e,
              {
                style: {
                  boxSizing: "border-box",
                  flex: n.column.totalFlexWidth + " 0 auto",
                  minWidth: n.column.totalMinWidth + "px",
                  width: n.column.totalWidth + "px",
                },
              },
            ];
          },
          $t = function (e, t) {
            var n = t.column;
            return [
              e,
              {
                style: {
                  boxSizing: "border-box",
                  flex: n.totalFlexWidth
                    ? n.totalFlexWidth + " 0 auto"
                    : void 0,
                  minWidth: n.totalMinWidth + "px",
                  width: n.totalWidth + "px",
                },
              },
            ];
          };
        function Yt(e) {
          e.stateReducers.push(en),
            e.getTableProps.push(Jt),
            e.getHeaderProps.push(Qt),
            e.getRowProps.push(Zt);
        }
        (l.columnStartResizing = "columnStartResizing"),
          (l.columnResizing = "columnResizing"),
          (l.columnDoneResizing = "columnDoneResizing"),
          (l.resetResize = "resetResize"),
          (Yt.pluginName = "useGridLayout");
        var Jt = function (e, t) {
            var n = t.instance;
            return [
              e,
              {
                style: {
                  display: "grid",
                  gridTemplateColumns: n.visibleColumns
                    .map(function (e) {
                      var t;
                      return n.state.gridLayout.columnWidths[e.id]
                        ? n.state.gridLayout.columnWidths[e.id] + "px"
                        : (
                            null == (t = n.state.columnResizing)
                              ? void 0
                              : t.isResizingColumn
                          )
                        ? n.state.gridLayout.startWidths[e.id] + "px"
                        : "number" == typeof e.width
                        ? e.width + "px"
                        : e.width;
                    })
                    .join(" "),
                },
              },
            ];
          },
          Qt = function (e, t) {
            var n = t.column;
            return [
              e,
              {
                id: "header-cell-" + n.id,
                style: {
                  position: "sticky",
                  gridColumn: "span " + n.totalVisibleHeaderCount,
                },
              },
            ];
          },
          Zt = function (e, t) {
            var n = t.row;
            return n.isExpanded
              ? [e, { style: { gridColumn: "1 / " + (n.cells.length + 1) } }]
              : [e, {}];
          };
        function en(e, t, n, r) {
          if (t.type === l.init)
            return i({ gridLayout: { columnWidths: {} } }, e);
          if (t.type === l.resetResize)
            return i({}, e, { gridLayout: { columnWidths: {} } });
          if (t.type === l.columnStartResizing) {
            var o = t.columnId,
              u = t.headerIdWidths,
              a = tn(o);
            if (void 0 !== a) {
              var s = r.visibleColumns.reduce(function (e, t) {
                  var n;
                  return i({}, e, (((n = {})[t.id] = tn(t.id)), n));
                }, {}),
                c = r.visibleColumns.reduce(function (e, t) {
                  var n;
                  return i({}, e, (((n = {})[t.id] = t.minWidth), n));
                }, {}),
                d = r.visibleColumns.reduce(function (e, t) {
                  var n;
                  return i({}, e, (((n = {})[t.id] = t.maxWidth), n));
                }, {}),
                f = u.map(function (e) {
                  var t = e[0];
                  return [t, tn(t)];
                });
              return i({}, e, {
                gridLayout: i({}, e.gridLayout, {
                  startWidths: s,
                  minWidths: c,
                  maxWidths: d,
                  headerIdGridWidths: f,
                  columnWidth: a,
                }),
              });
            }
            return e;
          }
          if (t.type === l.columnResizing) {
            var p = t.clientX,
              g = e.columnResizing.startX,
              v = e.gridLayout,
              h = v.columnWidth,
              m = v.minWidths,
              y = v.maxWidths,
              w = v.headerIdGridWidths,
              R = (p - g) / h,
              b = {};
            return (
              (void 0 === w ? [] : w).forEach(function (e) {
                var t = e[0],
                  n = e[1];
                b[t] = Math.min(Math.max(m[t], n + n * R), y[t]);
              }),
              i({}, e, {
                gridLayout: i({}, e.gridLayout, {
                  columnWidths: i({}, e.gridLayout.columnWidths, {}, b),
                }),
              })
            );
          }
          return t.type === l.columnDoneResizing
            ? i({}, e, {
                gridLayout: i({}, e.gridLayout, {
                  startWidths: {},
                  minWidths: {},
                  maxWidths: {},
                }),
              })
            : void 0;
        }
        function tn(e) {
          var t,
            n =
              null == (t = document.getElementById("header-cell-" + e))
                ? void 0
                : t.offsetWidth;
          if (void 0 !== n) return n;
        }
        (e._UNSTABLE_usePivotColumns = rt),
          (e.actions = l),
          (e.defaultColumn = d),
          (e.defaultGroupByFn = De),
          (e.defaultOrderByFn = Ze),
          (e.defaultRenderer = s),
          (e.emptyRenderer = c),
          (e.ensurePluginOrder = h),
          (e.flexRender = S),
          (e.functionalUpdate = m),
          (e.loopHooks = v),
          (e.makePropGetter = p),
          (e.makeRenderer = b),
          (e.reduceHooks = g),
          (e.safeUseLayoutEffect = w),
          (e.useAbsoluteLayout = jt),
          (e.useAsyncDebounce = function (e, n) {
            void 0 === n && (n = 0);
            var i = t.useRef({}),
              u = y(e),
              a = y(n);
            return t.useCallback(
              (function () {
                var e = o(
                  r.mark(function e() {
                    var t,
                      n,
                      l,
                      s = arguments;
                    return r.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            for (
                              t = s.length, n = new Array(t), l = 0;
                              l < t;
                              l++
                            )
                              n[l] = s[l];
                            return (
                              i.current.promise ||
                                (i.current.promise = new Promise(function (
                                  e,
                                  t
                                ) {
                                  (i.current.resolve = e),
                                    (i.current.reject = t);
                                })),
                              i.current.timeout &&
                                clearTimeout(i.current.timeout),
                              (i.current.timeout = setTimeout(
                                o(
                                  r.mark(function e() {
                                    return r.wrap(
                                      function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              return (
                                                delete i.current.timeout,
                                                (e.prev = 1),
                                                (e.t0 = i.current),
                                                (e.next = 5),
                                                u().apply(void 0, n)
                                              );
                                            case 5:
                                              (e.t1 = e.sent),
                                                e.t0.resolve.call(e.t0, e.t1),
                                                (e.next = 12);
                                              break;
                                            case 9:
                                              (e.prev = 9),
                                                (e.t2 = e.catch(1)),
                                                i.current.reject(e.t2);
                                            case 12:
                                              return (
                                                (e.prev = 12),
                                                delete i.current.promise,
                                                e.finish(12)
                                              );
                                            case 15:
                                            case "end":
                                              return e.stop();
                                          }
                                      },
                                      e,
                                      null,
                                      [[1, 9, 12, 15]]
                                    );
                                  })
                                ),
                                a()
                              )),
                              e.abrupt("return", i.current.promise)
                            );
                          case 5:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
              [u, a]
            );
          }),
          (e.useBlockLayout = Dt),
          (e.useColumnOrder = Gt),
          (e.useExpanded = se),
          (e.useFilters = Be),
          (e.useFlexLayout = Vt),
          (e.useGetLatest = y),
          (e.useGlobalFilter = Ge),
          (e.useGridLayout = Yt),
          (e.useGroupBy = ze),
          (e.useMountedLayoutEffect = R),
          (e.usePagination = et),
          (e.useResizeColumns = Ht),
          (e.useRowSelect = ht),
          (e.useRowState = Pt),
          (e.useSortBy = $e),
          (e.useTable = function (e) {
            for (
              var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1;
              o < n;
              o++
            )
              r[o - 1] = arguments[o];
            (e = ue(e)), (r = [U].concat(r));
            var u = y(t.useRef({}).current);
            Object.assign(u(), i({}, e, { plugins: r, hooks: K() })),
              r.filter(Boolean).forEach(function (e) {
                e(u().hooks);
              });
            var a = y(u().hooks);
            (u().getHooks = a),
              delete u().hooks,
              Object.assign(u(), g(a().useOptions, ue(e)));
            var s = u(),
              c = s.data,
              d = s.columns,
              f = s.initialState,
              h = s.defaultColumn,
              m = s.getSubRows,
              w = s.getRowId,
              R = s.stateReducer,
              S = s.useControlledState,
              I = y(R),
              G = t.useCallback(
                function (e, t) {
                  if (!t.type)
                    throw (
                      (console.info({ action: t }),
                      new Error("Unknown Action \ud83d\udc46"))
                    );
                  return []
                    .concat(a().stateReducers, Array.isArray(I()) ? I() : [I()])
                    .reduce(function (n, r) {
                      return r(n, t, e, u()) || n;
                    }, e);
                },
                [a, I, u]
              ),
              F = t.useReducer(G, void 0, function () {
                return G(f, { type: l.init });
              }),
              k = F[0],
              A = F[1],
              H = g([].concat(a().useControlledState, [S]), k, {
                instance: u(),
              });
            Object.assign(u(), { state: H, dispatch: A });
            var W = t.useMemo(function () {
              return C(g(a().columns, d, { instance: u() }));
            }, [a, u, d].concat(g(a().columnsDeps, [], { instance: u() })));
            u().columns = W;
            var O = t.useMemo(function () {
              return g(a().allColumns, x(W), { instance: u() }).map(P);
            }, [W, a, u].concat(g(a().allColumnsDeps, [], { instance: u() })));
            u().allColumns = O;
            var z = t.useMemo(
                function () {
                  for (
                    var e = [], t = [], n = {}, r = [].concat(O);
                    r.length;

                  ) {
                    var o = r.shift();
                    le({
                      data: c,
                      rows: e,
                      flatRows: t,
                      rowsById: n,
                      column: o,
                      getRowId: w,
                      getSubRows: m,
                      accessValueHooks: a().accessValue,
                      getInstance: u,
                    });
                  }
                  return [e, t, n];
                },
                [O, c, w, m, a, u]
              ),
              T = z[0],
              L = z[1],
              j = z[2];
            Object.assign(u(), {
              rows: T,
              initialRows: [].concat(T),
              flatRows: L,
              rowsById: j,
            }),
              v(a().useInstanceAfterData, u());
            var M = t.useMemo(function () {
              return g(a().visibleColumns, O, { instance: u() }).map(function (
                e
              ) {
                return B(e, h);
              });
            }, [a, O, u, h].concat(
              g(a().visibleColumnsDeps, [], { instance: u() })
            ));
            (O = t.useMemo(
              function () {
                var e = [].concat(M);
                return (
                  O.forEach(function (t) {
                    e.find(function (e) {
                      return e.id === t.id;
                    }) || e.push(t);
                  }),
                  e
                );
              },
              [O, M]
            )),
              (u().allColumns = O);
            var _ = t.useMemo(function () {
              return g(a().headerGroups, E(M, h), u());
            }, [a, M, h, u].concat(
              g(a().headerGroupsDeps, [], { instance: u() })
            ));
            u().headerGroups = _;
            var N = t.useMemo(
              function () {
                return _.length ? _[0].headers : [];
              },
              [_]
            );
            (u().headers = N),
              (u().flatHeaders = _.reduce(function (e, t) {
                return [].concat(e, t.headers);
              }, [])),
              v(a().useInstanceBeforeDimensions, u());
            var D = M.filter(function (e) {
              return e.isVisible;
            })
              .map(function (e) {
                return e.id;
              })
              .sort()
              .join("_");
            (M = t.useMemo(
              function () {
                return M.filter(function (e) {
                  return e.isVisible;
                });
              },
              [M, D]
            )),
              (u().visibleColumns = M);
            var V = ae(N),
              X = V[0],
              q = V[1],
              $ = V[2];
            return (
              (u().totalColumnsMinWidth = X),
              (u().totalColumnsWidth = q),
              (u().totalColumnsMaxWidth = $),
              v(a().useInstance, u()),
              [].concat(u().flatHeaders, u().allColumns).forEach(function (e) {
                (e.render = b(u(), e)),
                  (e.getHeaderProps = p(a().getHeaderProps, {
                    instance: u(),
                    column: e,
                  })),
                  (e.getFooterProps = p(a().getFooterProps, {
                    instance: u(),
                    column: e,
                  }));
              }),
              (u().headerGroups = t.useMemo(
                function () {
                  return _.filter(function (e, t) {
                    return (
                      (e.headers = e.headers.filter(function (e) {
                        return e.headers
                          ? (function e(t) {
                              return t.filter(function (t) {
                                return t.headers ? e(t.headers) : t.isVisible;
                              }).length;
                            })(e.headers)
                          : e.isVisible;
                      })),
                      !!e.headers.length &&
                        ((e.getHeaderGroupProps = p(a().getHeaderGroupProps, {
                          instance: u(),
                          headerGroup: e,
                          index: t,
                        })),
                        (e.getFooterGroupProps = p(a().getFooterGroupProps, {
                          instance: u(),
                          headerGroup: e,
                          index: t,
                        })),
                        !0)
                    );
                  });
                },
                [_, u, a]
              )),
              (u().footerGroups = [].concat(u().headerGroups).reverse()),
              (u().prepareRow = t.useCallback(
                function (e) {
                  (e.getRowProps = p(a().getRowProps, {
                    instance: u(),
                    row: e,
                  })),
                    (e.allCells = O.map(function (t) {
                      var n = e.values[t.id],
                        r = { column: t, row: e, value: n };
                      return (
                        (r.getCellProps = p(a().getCellProps, {
                          instance: u(),
                          cell: r,
                        })),
                        (r.render = b(u(), t, { row: e, cell: r, value: n })),
                        r
                      );
                    })),
                    (e.cells = M.map(function (t) {
                      return e.allCells.find(function (e) {
                        return e.column.id === t.id;
                      });
                    })),
                    v(a().prepareRow, e, { instance: u() });
                },
                [a, u, O, M]
              )),
              (u().getTableProps = p(a().getTableProps, { instance: u() })),
              (u().getTableBodyProps = p(a().getTableBodyProps, {
                instance: u(),
              })),
              v(a().useFinalInstance, u()),
              u()
            );
          }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      })(t, n(2791));
    },
    1358: (e, t, n) => {
      e.exports = n(3532);
    },
    7061: (e, t, n) => {
      var r = n(8698).default;
      function o() {
        "use strict";
        (e.exports = o =
          function () {
            return n;
          }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
        var t,
          n = {},
          i = Object.prototype,
          u = i.hasOwnProperty,
          a =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          l = "function" == typeof Symbol ? Symbol : {},
          s = l.iterator || "@@iterator",
          c = l.asyncIterator || "@@asyncIterator",
          d = l.toStringTag || "@@toStringTag";
        function f(e, t, n) {
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
          f({}, "");
        } catch (t) {
          f = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function p(e, t, n, r) {
          var o = t && t.prototype instanceof R ? t : R,
            i = Object.create(o.prototype),
            u = new H(r || []);
          return a(i, "_invoke", { value: G(e, n, u) }), i;
        }
        function g(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (e) {
            return { type: "throw", arg: e };
          }
        }
        n.wrap = p;
        var v = "suspendedStart",
          h = "suspendedYield",
          m = "executing",
          y = "completed",
          w = {};
        function R() {}
        function b() {}
        function S() {}
        var C = {};
        f(C, s, function () {
          return this;
        });
        var x = Object.getPrototypeOf,
          P = x && x(x(W([])));
        P && P !== i && u.call(P, s) && (C = P);
        var B = (S.prototype = R.prototype = Object.create(C));
        function E(e) {
          ["next", "throw", "return"].forEach(function (t) {
            f(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function I(e, t) {
          function n(o, i, a, l) {
            var s = g(e[o], e, i);
            if ("throw" !== s.type) {
              var c = s.arg,
                d = c.value;
              return d && "object" == r(d) && u.call(d, "__await")
                ? t.resolve(d.__await).then(
                    function (e) {
                      n("next", e, a, l);
                    },
                    function (e) {
                      n("throw", e, a, l);
                    }
                  )
                : t.resolve(d).then(
                    function (e) {
                      (c.value = e), a(c);
                    },
                    function (e) {
                      return n("throw", e, a, l);
                    }
                  );
            }
            l(s.arg);
          }
          var o;
          a(this, "_invoke", {
            value: function (e, r) {
              function i() {
                return new t(function (t, o) {
                  n(e, r, t, o);
                });
              }
              return (o = o ? o.then(i, i) : i());
            },
          });
        }
        function G(e, n, r) {
          var o = v;
          return function (i, u) {
            if (o === m) throw new Error("Generator is already running");
            if (o === y) {
              if ("throw" === i) throw u;
              return { value: t, done: !0 };
            }
            for (r.method = i, r.arg = u; ; ) {
              var a = r.delegate;
              if (a) {
                var l = F(a, r);
                if (l) {
                  if (l === w) continue;
                  return l;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (o === v) throw ((o = y), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              o = m;
              var s = g(e, n, r);
              if ("normal" === s.type) {
                if (((o = r.done ? y : h), s.arg === w)) continue;
                return { value: s.arg, done: r.done };
              }
              "throw" === s.type &&
                ((o = y), (r.method = "throw"), (r.arg = s.arg));
            }
          };
        }
        function F(e, n) {
          var r = n.method,
            o = e.iterator[r];
          if (o === t)
            return (
              (n.delegate = null),
              ("throw" === r &&
                e.iterator.return &&
                ((n.method = "return"),
                (n.arg = t),
                F(e, n),
                "throw" === n.method)) ||
                ("return" !== r &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method"
                  )))),
              w
            );
          var i = g(o, e.iterator, n.arg);
          if ("throw" === i.type)
            return (
              (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), w
            );
          var u = i.arg;
          return u
            ? u.done
              ? ((n[e.resultName] = u.value),
                (n.next = e.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = t)),
                (n.delegate = null),
                w)
              : u
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              w);
        }
        function k(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function A(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function H(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(k, this),
            this.reset(!0);
        }
        function W(e) {
          if (e || "" === e) {
            var n = e[s];
            if (n) return n.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                i = function n() {
                  for (; ++o < e.length; )
                    if (u.call(e, o)) return (n.value = e[o]), (n.done = !1), n;
                  return (n.value = t), (n.done = !0), n;
                };
              return (i.next = i);
            }
          }
          throw new TypeError(r(e) + " is not iterable");
        }
        return (
          (b.prototype = S),
          a(B, "constructor", { value: S, configurable: !0 }),
          a(S, "constructor", { value: b, configurable: !0 }),
          (b.displayName = f(S, d, "GeneratorFunction")),
          (n.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === b || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (n.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, S)
                : ((e.__proto__ = S), f(e, d, "GeneratorFunction")),
              (e.prototype = Object.create(B)),
              e
            );
          }),
          (n.awrap = function (e) {
            return { __await: e };
          }),
          E(I.prototype),
          f(I.prototype, c, function () {
            return this;
          }),
          (n.AsyncIterator = I),
          (n.async = function (e, t, r, o, i) {
            void 0 === i && (i = Promise);
            var u = new I(p(e, t, r, o), i);
            return n.isGeneratorFunction(t)
              ? u
              : u.next().then(function (e) {
                  return e.done ? e.value : u.next();
                });
          }),
          E(B),
          f(B, d, "Generator"),
          f(B, s, function () {
            return this;
          }),
          f(B, "toString", function () {
            return "[object Generator]";
          }),
          (n.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (n.values = W),
          (H.prototype = {
            constructor: H,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(A),
                !e)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    u.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function r(r, o) {
                return (
                  (a.type = "throw"),
                  (a.arg = e),
                  (n.next = r),
                  o && ((n.method = "next"), (n.arg = t)),
                  !!o
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i.completion;
                if ("root" === i.tryLoc) return r("end");
                if (i.tryLoc <= this.prev) {
                  var l = u.call(i, "catchLoc"),
                    s = u.call(i, "finallyLoc");
                  if (l && s) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  } else if (l) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                  } else {
                    if (!s)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var r = this.tryEntries[n];
                if (
                  r.tryLoc <= this.prev &&
                  u.call(r, "finallyLoc") &&
                  this.prev < r.finallyLoc
                ) {
                  var o = r;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), w)
                  : this.complete(i)
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
                w
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), A(n), w;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    A(n);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, n, r) {
              return (
                (this.delegate = { iterator: W(e), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = t),
                w
              );
            },
          }),
          n
        );
      }
      (e.exports = o),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    8698: (e) => {
      function t(n) {
        return (
          (e.exports = t =
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
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports),
          t(n)
        );
      }
      (e.exports = t),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    4687: (e, t, n) => {
      var r = n(7061)();
      e.exports = r;
      try {
        regeneratorRuntime = r;
      } catch (o) {
        "object" === typeof globalThis
          ? (globalThis.regeneratorRuntime = r)
          : Function("r", "regeneratorRuntime = r")(r);
      }
    },
  },
]);
//# sourceMappingURL=358.cd4b3685.chunk.js.map
