/*! For license information please see app.min.js.LICENSE.txt */
(() => {
  var e = {
      755: function (e, t) {
        var n;
        !(function (t, n) {
          "use strict";
          "object" == typeof e.exports
            ? (e.exports = t.document
                ? n(t, !0)
                : function (e) {
                    if (!e.document)
                      throw new Error(
                        "jQuery requires a window with a document"
                      );
                    return n(e);
                  })
            : n(t);
        })("undefined" != typeof window ? window : this, function (i, r) {
          "use strict";
          var s = [],
            o = Object.getPrototypeOf,
            a = s.slice,
            l = s.flat
              ? function (e) {
                  return s.flat.call(e);
                }
              : function (e) {
                  return s.concat.apply([], e);
                },
            c = s.push,
            d = s.indexOf,
            u = {},
            p = u.toString,
            f = u.hasOwnProperty,
            h = f.toString,
            g = h.call(Object),
            m = {},
            v = function (e) {
              return (
                "function" == typeof e &&
                "number" != typeof e.nodeType &&
                "function" != typeof e.item
              );
            },
            y = function (e) {
              return null != e && e === e.window;
            },
            w = i.document,
            x = { type: !0, src: !0, nonce: !0, noModule: !0 };
          function b(e, t, n) {
            var i,
              r,
              s = (n = n || w).createElement("script");
            if (((s.text = e), t))
              for (i in x)
                (r = t[i] || (t.getAttribute && t.getAttribute(i))) &&
                  s.setAttribute(i, r);
            n.head.appendChild(s).parentNode.removeChild(s);
          }
          function T(e) {
            return null == e
              ? e + ""
              : "object" == typeof e || "function" == typeof e
              ? u[p.call(e)] || "object"
              : typeof e;
          }
          var C = "3.6.0",
            S = function (e, t) {
              return new S.fn.init(e, t);
            };
          function E(e) {
            var t = !!e && "length" in e && e.length,
              n = T(e);
            return (
              !v(e) &&
              !y(e) &&
              ("array" === n ||
                0 === t ||
                ("number" == typeof t && t > 0 && t - 1 in e))
            );
          }
          (S.fn = S.prototype =
            {
              jquery: C,
              constructor: S,
              length: 0,
              toArray: function () {
                return a.call(this);
              },
              get: function (e) {
                return null == e
                  ? a.call(this)
                  : e < 0
                  ? this[e + this.length]
                  : this[e];
              },
              pushStack: function (e) {
                var t = S.merge(this.constructor(), e);
                return (t.prevObject = this), t;
              },
              each: function (e) {
                return S.each(this, e);
              },
              map: function (e) {
                return this.pushStack(
                  S.map(this, function (t, n) {
                    return e.call(t, n, t);
                  })
                );
              },
              slice: function () {
                return this.pushStack(a.apply(this, arguments));
              },
              first: function () {
                return this.eq(0);
              },
              last: function () {
                return this.eq(-1);
              },
              even: function () {
                return this.pushStack(
                  S.grep(this, function (e, t) {
                    return (t + 1) % 2;
                  })
                );
              },
              odd: function () {
                return this.pushStack(
                  S.grep(this, function (e, t) {
                    return t % 2;
                  })
                );
              },
              eq: function (e) {
                var t = this.length,
                  n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
              },
              end: function () {
                return this.prevObject || this.constructor();
              },
              push: c,
              sort: s.sort,
              splice: s.splice,
            }),
            (S.extend = S.fn.extend =
              function () {
                var e,
                  t,
                  n,
                  i,
                  r,
                  s,
                  o = arguments[0] || {},
                  a = 1,
                  l = arguments.length,
                  c = !1;
                for (
                  "boolean" == typeof o &&
                    ((c = o), (o = arguments[a] || {}), a++),
                    "object" == typeof o || v(o) || (o = {}),
                    a === l && ((o = this), a--);
                  a < l;
                  a++
                )
                  if (null != (e = arguments[a]))
                    for (t in e)
                      (i = e[t]),
                        "__proto__" !== t &&
                          o !== i &&
                          (c &&
                          i &&
                          (S.isPlainObject(i) || (r = Array.isArray(i)))
                            ? ((n = o[t]),
                              (s =
                                r && !Array.isArray(n)
                                  ? []
                                  : r || S.isPlainObject(n)
                                  ? n
                                  : {}),
                              (r = !1),
                              (o[t] = S.extend(c, s, i)))
                            : void 0 !== i && (o[t] = i));
                return o;
              }),
            S.extend({
              expando: "jQuery" + (C + Math.random()).replace(/\D/g, ""),
              isReady: !0,
              error: function (e) {
                throw new Error(e);
              },
              noop: function () {},
              isPlainObject: function (e) {
                var t, n;
                return (
                  !(!e || "[object Object]" !== p.call(e)) &&
                  (!(t = o(e)) ||
                    ("function" ==
                      typeof (n = f.call(t, "constructor") && t.constructor) &&
                      h.call(n) === g))
                );
              },
              isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
              },
              globalEval: function (e, t, n) {
                b(e, { nonce: t && t.nonce }, n);
              },
              each: function (e, t) {
                var n,
                  i = 0;
                if (E(e))
                  for (
                    n = e.length;
                    i < n && !1 !== t.call(e[i], i, e[i]);
                    i++
                  );
                else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
                return e;
              },
              makeArray: function (e, t) {
                var n = t || [];
                return (
                  null != e &&
                    (E(Object(e))
                      ? S.merge(n, "string" == typeof e ? [e] : e)
                      : c.call(n, e)),
                  n
                );
              },
              inArray: function (e, t, n) {
                return null == t ? -1 : d.call(t, e, n);
              },
              merge: function (e, t) {
                for (var n = +t.length, i = 0, r = e.length; i < n; i++)
                  e[r++] = t[i];
                return (e.length = r), e;
              },
              grep: function (e, t, n) {
                for (var i = [], r = 0, s = e.length, o = !n; r < s; r++)
                  !t(e[r], r) !== o && i.push(e[r]);
                return i;
              },
              map: function (e, t, n) {
                var i,
                  r,
                  s = 0,
                  o = [];
                if (E(e))
                  for (i = e.length; s < i; s++)
                    null != (r = t(e[s], s, n)) && o.push(r);
                else for (s in e) null != (r = t(e[s], s, n)) && o.push(r);
                return l(o);
              },
              guid: 1,
              support: m,
            }),
            "function" == typeof Symbol &&
              (S.fn[Symbol.iterator] = s[Symbol.iterator]),
            S.each(
              "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " "
              ),
              function (e, t) {
                u["[object " + t + "]"] = t.toLowerCase();
              }
            );
          var k = (function (e) {
            var t,
              n,
              i,
              r,
              s,
              o,
              a,
              l,
              c,
              d,
              u,
              p,
              f,
              h,
              g,
              m,
              v,
              y,
              w,
              x = "sizzle" + 1 * new Date(),
              b = e.document,
              T = 0,
              C = 0,
              S = le(),
              E = le(),
              k = le(),
              L = le(),
              A = function (e, t) {
                return e === t && (u = !0), 0;
              },
              P = {}.hasOwnProperty,
              M = [],
              D = M.pop,
              N = M.push,
              O = M.push,
              $ = M.slice,
              j = function (e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                  if (e[n] === t) return n;
                return -1;
              },
              I =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
              q = "[\\x20\\t\\r\\n\\f]",
              z =
                "(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
              H =
                "\\[[\\x20\\t\\r\\n\\f]*(" +
                z +
                ")(?:" +
                q +
                "*([*^$|!~]?=)" +
                q +
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                z +
                "))|)" +
                q +
                "*\\]",
              W =
                ":(" +
                z +
                ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                H +
                ")*)|.*)\\)|)",
              _ = new RegExp(q + "+", "g"),
              B = new RegExp(
                "^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$",
                "g"
              ),
              R = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),
              F = new RegExp(
                "^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"
              ),
              G = new RegExp(q + "|>"),
              V = new RegExp(W),
              X = new RegExp("^" + z + "$"),
              Y = {
                ID: new RegExp("^#(" + z + ")"),
                CLASS: new RegExp("^\\.(" + z + ")"),
                TAG: new RegExp("^(" + z + "|[*])"),
                ATTR: new RegExp("^" + H),
                PSEUDO: new RegExp("^" + W),
                CHILD: new RegExp(
                  "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)",
                  "i"
                ),
                bool: new RegExp("^(?:" + I + ")$", "i"),
                needsContext: new RegExp(
                  "^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)",
                  "i"
                ),
              },
              U = /HTML$/i,
              Q = /^(?:input|select|textarea|button)$/i,
              K = /^h\d$/i,
              J = /^[^{]+\{\s*\[native \w/,
              Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
              ee = /[+~]/,
              te = new RegExp(
                "\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])",
                "g"
              ),
              ne = function (e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return (
                  t ||
                  (n < 0
                    ? String.fromCharCode(n + 65536)
                    : String.fromCharCode(
                        (n >> 10) | 55296,
                        (1023 & n) | 56320
                      ))
                );
              },
              ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
              re = function (e, t) {
                return t
                  ? "\0" === e
                    ? "�"
                    : e.slice(0, -1) +
                      "\\" +
                      e.charCodeAt(e.length - 1).toString(16) +
                      " "
                  : "\\" + e;
              },
              se = function () {
                p();
              },
              oe = xe(
                function (e) {
                  return (
                    !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                  );
                },
                { dir: "parentNode", next: "legend" }
              );
            try {
              O.apply((M = $.call(b.childNodes)), b.childNodes),
                M[b.childNodes.length].nodeType;
            } catch (e) {
              O = {
                apply: M.length
                  ? function (e, t) {
                      N.apply(e, $.call(t));
                    }
                  : function (e, t) {
                      for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                      e.length = n - 1;
                    },
              };
            }
            function ae(e, t, i, r) {
              var s,
                a,
                c,
                d,
                u,
                h,
                v,
                y = t && t.ownerDocument,
                b = t ? t.nodeType : 9;
              if (
                ((i = i || []),
                "string" != typeof e || !e || (1 !== b && 9 !== b && 11 !== b))
              )
                return i;
              if (!r && (p(t), (t = t || f), g)) {
                if (11 !== b && (u = Z.exec(e)))
                  if ((s = u[1])) {
                    if (9 === b) {
                      if (!(c = t.getElementById(s))) return i;
                      if (c.id === s) return i.push(c), i;
                    } else if (
                      y &&
                      (c = y.getElementById(s)) &&
                      w(t, c) &&
                      c.id === s
                    )
                      return i.push(c), i;
                  } else {
                    if (u[2]) return O.apply(i, t.getElementsByTagName(e)), i;
                    if (
                      (s = u[3]) &&
                      n.getElementsByClassName &&
                      t.getElementsByClassName
                    )
                      return O.apply(i, t.getElementsByClassName(s)), i;
                  }
                if (
                  n.qsa &&
                  !L[e + " "] &&
                  (!m || !m.test(e)) &&
                  (1 !== b || "object" !== t.nodeName.toLowerCase())
                ) {
                  if (((v = e), (y = t), 1 === b && (G.test(e) || F.test(e)))) {
                    for (
                      ((y = (ee.test(e) && ve(t.parentNode)) || t) === t &&
                        n.scope) ||
                        ((d = t.getAttribute("id"))
                          ? (d = d.replace(ie, re))
                          : t.setAttribute("id", (d = x))),
                        a = (h = o(e)).length;
                      a--;

                    )
                      h[a] = (d ? "#" + d : ":scope") + " " + we(h[a]);
                    v = h.join(",");
                  }
                  try {
                    return O.apply(i, y.querySelectorAll(v)), i;
                  } catch (t) {
                    L(e, !0);
                  } finally {
                    d === x && t.removeAttribute("id");
                  }
                }
              }
              return l(e.replace(B, "$1"), t, i, r);
            }
            function le() {
              var e = [];
              return function t(n, r) {
                return (
                  e.push(n + " ") > i.cacheLength && delete t[e.shift()],
                  (t[n + " "] = r)
                );
              };
            }
            function ce(e) {
              return (e[x] = !0), e;
            }
            function de(e) {
              var t = f.createElement("fieldset");
              try {
                return !!e(t);
              } catch (e) {
                return !1;
              } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
              }
            }
            function ue(e, t) {
              for (var n = e.split("|"), r = n.length; r--; )
                i.attrHandle[n[r]] = t;
            }
            function pe(e, t) {
              var n = t && e,
                i =
                  n &&
                  1 === e.nodeType &&
                  1 === t.nodeType &&
                  e.sourceIndex - t.sourceIndex;
              if (i) return i;
              if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
              return e ? 1 : -1;
            }
            function fe(e) {
              return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
              };
            }
            function he(e) {
              return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
              };
            }
            function ge(e) {
              return function (t) {
                return "form" in t
                  ? t.parentNode && !1 === t.disabled
                    ? "label" in t
                      ? "label" in t.parentNode
                        ? t.parentNode.disabled === e
                        : t.disabled === e
                      : t.isDisabled === e ||
                        (t.isDisabled !== !e && oe(t) === e)
                    : t.disabled === e
                  : "label" in t && t.disabled === e;
              };
            }
            function me(e) {
              return ce(function (t) {
                return (
                  (t = +t),
                  ce(function (n, i) {
                    for (var r, s = e([], n.length, t), o = s.length; o--; )
                      n[(r = s[o])] && (n[r] = !(i[r] = n[r]));
                  })
                );
              });
            }
            function ve(e) {
              return e && void 0 !== e.getElementsByTagName && e;
            }
            for (t in ((n = ae.support = {}),
            (s = ae.isXML =
              function (e) {
                var t = e && e.namespaceURI,
                  n = e && (e.ownerDocument || e).documentElement;
                return !U.test(t || (n && n.nodeName) || "HTML");
              }),
            (p = ae.setDocument =
              function (e) {
                var t,
                  r,
                  o = e ? e.ownerDocument || e : b;
                return o != f && 9 === o.nodeType && o.documentElement
                  ? ((h = (f = o).documentElement),
                    (g = !s(f)),
                    b != f &&
                      (r = f.defaultView) &&
                      r.top !== r &&
                      (r.addEventListener
                        ? r.addEventListener("unload", se, !1)
                        : r.attachEvent && r.attachEvent("onunload", se)),
                    (n.scope = de(function (e) {
                      return (
                        h.appendChild(e).appendChild(f.createElement("div")),
                        void 0 !== e.querySelectorAll &&
                          !e.querySelectorAll(":scope fieldset div").length
                      );
                    })),
                    (n.attributes = de(function (e) {
                      return (e.className = "i"), !e.getAttribute("className");
                    })),
                    (n.getElementsByTagName = de(function (e) {
                      return (
                        e.appendChild(f.createComment("")),
                        !e.getElementsByTagName("*").length
                      );
                    })),
                    (n.getElementsByClassName = J.test(
                      f.getElementsByClassName
                    )),
                    (n.getById = de(function (e) {
                      return (
                        (h.appendChild(e).id = x),
                        !f.getElementsByName || !f.getElementsByName(x).length
                      );
                    })),
                    n.getById
                      ? ((i.filter.ID = function (e) {
                          var t = e.replace(te, ne);
                          return function (e) {
                            return e.getAttribute("id") === t;
                          };
                        }),
                        (i.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && g) {
                            var n = t.getElementById(e);
                            return n ? [n] : [];
                          }
                        }))
                      : ((i.filter.ID = function (e) {
                          var t = e.replace(te, ne);
                          return function (e) {
                            var n =
                              void 0 !== e.getAttributeNode &&
                              e.getAttributeNode("id");
                            return n && n.value === t;
                          };
                        }),
                        (i.find.ID = function (e, t) {
                          if (void 0 !== t.getElementById && g) {
                            var n,
                              i,
                              r,
                              s = t.getElementById(e);
                            if (s) {
                              if (
                                (n = s.getAttributeNode("id")) &&
                                n.value === e
                              )
                                return [s];
                              for (
                                r = t.getElementsByName(e), i = 0;
                                (s = r[i++]);

                              )
                                if (
                                  (n = s.getAttributeNode("id")) &&
                                  n.value === e
                                )
                                  return [s];
                            }
                            return [];
                          }
                        })),
                    (i.find.TAG = n.getElementsByTagName
                      ? function (e, t) {
                          return void 0 !== t.getElementsByTagName
                            ? t.getElementsByTagName(e)
                            : n.qsa
                            ? t.querySelectorAll(e)
                            : void 0;
                        }
                      : function (e, t) {
                          var n,
                            i = [],
                            r = 0,
                            s = t.getElementsByTagName(e);
                          if ("*" === e) {
                            for (; (n = s[r++]); )
                              1 === n.nodeType && i.push(n);
                            return i;
                          }
                          return s;
                        }),
                    (i.find.CLASS =
                      n.getElementsByClassName &&
                      function (e, t) {
                        if (void 0 !== t.getElementsByClassName && g)
                          return t.getElementsByClassName(e);
                      }),
                    (v = []),
                    (m = []),
                    (n.qsa = J.test(f.querySelectorAll)) &&
                      (de(function (e) {
                        var t;
                        (h.appendChild(e).innerHTML =
                          "<a id='" +
                          x +
                          "'></a><select id='" +
                          x +
                          "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                          e.querySelectorAll("[msallowcapture^='']").length &&
                            m.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),
                          e.querySelectorAll("[selected]").length ||
                            m.push(
                              "\\[[\\x20\\t\\r\\n\\f]*(?:value|" + I + ")"
                            ),
                          e.querySelectorAll("[id~=" + x + "-]").length ||
                            m.push("~="),
                          (t = f.createElement("input")).setAttribute(
                            "name",
                            ""
                          ),
                          e.appendChild(t),
                          e.querySelectorAll("[name='']").length ||
                            m.push(
                              "\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"
                            ),
                          e.querySelectorAll(":checked").length ||
                            m.push(":checked"),
                          e.querySelectorAll("a#" + x + "+*").length ||
                            m.push(".#.+[+~]"),
                          e.querySelectorAll("\\\f"),
                          m.push("[\\r\\n\\f]");
                      }),
                      de(function (e) {
                        e.innerHTML =
                          "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = f.createElement("input");
                        t.setAttribute("type", "hidden"),
                          e.appendChild(t).setAttribute("name", "D"),
                          e.querySelectorAll("[name=d]").length &&
                            m.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="),
                          2 !== e.querySelectorAll(":enabled").length &&
                            m.push(":enabled", ":disabled"),
                          (h.appendChild(e).disabled = !0),
                          2 !== e.querySelectorAll(":disabled").length &&
                            m.push(":enabled", ":disabled"),
                          e.querySelectorAll("*,:x"),
                          m.push(",.*:");
                      })),
                    (n.matchesSelector = J.test(
                      (y =
                        h.matches ||
                        h.webkitMatchesSelector ||
                        h.mozMatchesSelector ||
                        h.oMatchesSelector ||
                        h.msMatchesSelector)
                    )) &&
                      de(function (e) {
                        (n.disconnectedMatch = y.call(e, "*")),
                          y.call(e, "[s!='']:x"),
                          v.push("!=", W);
                      }),
                    (m = m.length && new RegExp(m.join("|"))),
                    (v = v.length && new RegExp(v.join("|"))),
                    (t = J.test(h.compareDocumentPosition)),
                    (w =
                      t || J.test(h.contains)
                        ? function (e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                              i = t && t.parentNode;
                            return (
                              e === i ||
                              !(
                                !i ||
                                1 !== i.nodeType ||
                                !(n.contains
                                  ? n.contains(i)
                                  : e.compareDocumentPosition &&
                                    16 & e.compareDocumentPosition(i))
                              )
                            );
                          }
                        : function (e, t) {
                            if (t)
                              for (; (t = t.parentNode); )
                                if (t === e) return !0;
                            return !1;
                          }),
                    (A = t
                      ? function (e, t) {
                          if (e === t) return (u = !0), 0;
                          var i =
                            !e.compareDocumentPosition -
                            !t.compareDocumentPosition;
                          return (
                            i ||
                            (1 &
                              (i =
                                (e.ownerDocument || e) == (t.ownerDocument || t)
                                  ? e.compareDocumentPosition(t)
                                  : 1) ||
                            (!n.sortDetached &&
                              t.compareDocumentPosition(e) === i)
                              ? e == f || (e.ownerDocument == b && w(b, e))
                                ? -1
                                : t == f || (t.ownerDocument == b && w(b, t))
                                ? 1
                                : d
                                ? j(d, e) - j(d, t)
                                : 0
                              : 4 & i
                              ? -1
                              : 1)
                          );
                        }
                      : function (e, t) {
                          if (e === t) return (u = !0), 0;
                          var n,
                            i = 0,
                            r = e.parentNode,
                            s = t.parentNode,
                            o = [e],
                            a = [t];
                          if (!r || !s)
                            return e == f
                              ? -1
                              : t == f
                              ? 1
                              : r
                              ? -1
                              : s
                              ? 1
                              : d
                              ? j(d, e) - j(d, t)
                              : 0;
                          if (r === s) return pe(e, t);
                          for (n = e; (n = n.parentNode); ) o.unshift(n);
                          for (n = t; (n = n.parentNode); ) a.unshift(n);
                          for (; o[i] === a[i]; ) i++;
                          return i
                            ? pe(o[i], a[i])
                            : o[i] == b
                            ? -1
                            : a[i] == b
                            ? 1
                            : 0;
                        }),
                    f)
                  : f;
              }),
            (ae.matches = function (e, t) {
              return ae(e, null, null, t);
            }),
            (ae.matchesSelector = function (e, t) {
              if (
                (p(e),
                n.matchesSelector &&
                  g &&
                  !L[t + " "] &&
                  (!v || !v.test(t)) &&
                  (!m || !m.test(t)))
              )
                try {
                  var i = y.call(e, t);
                  if (
                    i ||
                    n.disconnectedMatch ||
                    (e.document && 11 !== e.document.nodeType)
                  )
                    return i;
                } catch (e) {
                  L(t, !0);
                }
              return ae(t, f, null, [e]).length > 0;
            }),
            (ae.contains = function (e, t) {
              return (e.ownerDocument || e) != f && p(e), w(e, t);
            }),
            (ae.attr = function (e, t) {
              (e.ownerDocument || e) != f && p(e);
              var r = i.attrHandle[t.toLowerCase()],
                s =
                  r && P.call(i.attrHandle, t.toLowerCase())
                    ? r(e, t, !g)
                    : void 0;
              return void 0 !== s
                ? s
                : n.attributes || !g
                ? e.getAttribute(t)
                : (s = e.getAttributeNode(t)) && s.specified
                ? s.value
                : null;
            }),
            (ae.escape = function (e) {
              return (e + "").replace(ie, re);
            }),
            (ae.error = function (e) {
              throw new Error("Syntax error, unrecognized expression: " + e);
            }),
            (ae.uniqueSort = function (e) {
              var t,
                i = [],
                r = 0,
                s = 0;
              if (
                ((u = !n.detectDuplicates),
                (d = !n.sortStable && e.slice(0)),
                e.sort(A),
                u)
              ) {
                for (; (t = e[s++]); ) t === e[s] && (r = i.push(s));
                for (; r--; ) e.splice(i[r], 1);
              }
              return (d = null), e;
            }),
            (r = ae.getText =
              function (e) {
                var t,
                  n = "",
                  i = 0,
                  s = e.nodeType;
                if (s) {
                  if (1 === s || 9 === s || 11 === s) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += r(e);
                  } else if (3 === s || 4 === s) return e.nodeValue;
                } else for (; (t = e[i++]); ) n += r(t);
                return n;
              }),
            (i = ae.selectors =
              {
                cacheLength: 50,
                createPseudo: ce,
                match: Y,
                attrHandle: {},
                find: {},
                relative: {
                  ">": { dir: "parentNode", first: !0 },
                  " ": { dir: "parentNode" },
                  "+": { dir: "previousSibling", first: !0 },
                  "~": { dir: "previousSibling" },
                },
                preFilter: {
                  ATTR: function (e) {
                    return (
                      (e[1] = e[1].replace(te, ne)),
                      (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
                      "~=" === e[2] && (e[3] = " " + e[3] + " "),
                      e.slice(0, 4)
                    );
                  },
                  CHILD: function (e) {
                    return (
                      (e[1] = e[1].toLowerCase()),
                      "nth" === e[1].slice(0, 3)
                        ? (e[3] || ae.error(e[0]),
                          (e[4] = +(e[4]
                            ? e[5] + (e[6] || 1)
                            : 2 * ("even" === e[3] || "odd" === e[3]))),
                          (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                        : e[3] && ae.error(e[0]),
                      e
                    );
                  },
                  PSEUDO: function (e) {
                    var t,
                      n = !e[6] && e[2];
                    return Y.CHILD.test(e[0])
                      ? null
                      : (e[3]
                          ? (e[2] = e[4] || e[5] || "")
                          : n &&
                            V.test(n) &&
                            (t = o(n, !0)) &&
                            (t = n.indexOf(")", n.length - t) - n.length) &&
                            ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                        e.slice(0, 3));
                  },
                },
                filter: {
                  TAG: function (e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e
                      ? function () {
                          return !0;
                        }
                      : function (e) {
                          return e.nodeName && e.nodeName.toLowerCase() === t;
                        };
                  },
                  CLASS: function (e) {
                    var t = S[e + " "];
                    return (
                      t ||
                      ((t = new RegExp(
                        "(^|[\\x20\\t\\r\\n\\f])" + e + "(" + q + "|$)"
                      )) &&
                        S(e, function (e) {
                          return t.test(
                            ("string" == typeof e.className && e.className) ||
                              (void 0 !== e.getAttribute &&
                                e.getAttribute("class")) ||
                              ""
                          );
                        }))
                    );
                  },
                  ATTR: function (e, t, n) {
                    return function (i) {
                      var r = ae.attr(i, e);
                      return null == r
                        ? "!=" === t
                        : !t ||
                            ((r += ""),
                            "=" === t
                              ? r === n
                              : "!=" === t
                              ? r !== n
                              : "^=" === t
                              ? n && 0 === r.indexOf(n)
                              : "*=" === t
                              ? n && r.indexOf(n) > -1
                              : "$=" === t
                              ? n && r.slice(-n.length) === n
                              : "~=" === t
                              ? (" " + r.replace(_, " ") + " ").indexOf(n) > -1
                              : "|=" === t &&
                                (r === n ||
                                  r.slice(0, n.length + 1) === n + "-"));
                    };
                  },
                  CHILD: function (e, t, n, i, r) {
                    var s = "nth" !== e.slice(0, 3),
                      o = "last" !== e.slice(-4),
                      a = "of-type" === t;
                    return 1 === i && 0 === r
                      ? function (e) {
                          return !!e.parentNode;
                        }
                      : function (t, n, l) {
                          var c,
                            d,
                            u,
                            p,
                            f,
                            h,
                            g = s !== o ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            v = a && t.nodeName.toLowerCase(),
                            y = !l && !a,
                            w = !1;
                          if (m) {
                            if (s) {
                              for (; g; ) {
                                for (p = t; (p = p[g]); )
                                  if (
                                    a
                                      ? p.nodeName.toLowerCase() === v
                                      : 1 === p.nodeType
                                  )
                                    return !1;
                                h = g = "only" === e && !h && "nextSibling";
                              }
                              return !0;
                            }
                            if (
                              ((h = [o ? m.firstChild : m.lastChild]), o && y)
                            ) {
                              for (
                                w =
                                  (f =
                                    (c =
                                      (d =
                                        (u = (p = m)[x] || (p[x] = {}))[
                                          p.uniqueID
                                        ] || (u[p.uniqueID] = {}))[e] ||
                                      [])[0] === T && c[1]) && c[2],
                                  p = f && m.childNodes[f];
                                (p =
                                  (++f && p && p[g]) || (w = f = 0) || h.pop());

                              )
                                if (1 === p.nodeType && ++w && p === t) {
                                  d[e] = [T, f, w];
                                  break;
                                }
                            } else if (
                              (y &&
                                (w = f =
                                  (c =
                                    (d =
                                      (u = (p = t)[x] || (p[x] = {}))[
                                        p.uniqueID
                                      ] || (u[p.uniqueID] = {}))[e] ||
                                    [])[0] === T && c[1]),
                              !1 === w)
                            )
                              for (
                                ;
                                (p =
                                  (++f && p && p[g]) ||
                                  (w = f = 0) ||
                                  h.pop()) &&
                                ((a
                                  ? p.nodeName.toLowerCase() !== v
                                  : 1 !== p.nodeType) ||
                                  !++w ||
                                  (y &&
                                    ((d =
                                      (u = p[x] || (p[x] = {}))[p.uniqueID] ||
                                      (u[p.uniqueID] = {}))[e] = [T, w]),
                                  p !== t));

                              );
                            return (w -= r) === i || (w % i == 0 && w / i >= 0);
                          }
                        };
                  },
                  PSEUDO: function (e, t) {
                    var n,
                      r =
                        i.pseudos[e] ||
                        i.setFilters[e.toLowerCase()] ||
                        ae.error("unsupported pseudo: " + e);
                    return r[x]
                      ? r(t)
                      : r.length > 1
                      ? ((n = [e, e, "", t]),
                        i.setFilters.hasOwnProperty(e.toLowerCase())
                          ? ce(function (e, n) {
                              for (var i, s = r(e, t), o = s.length; o--; )
                                e[(i = j(e, s[o]))] = !(n[i] = s[o]);
                            })
                          : function (e) {
                              return r(e, 0, n);
                            })
                      : r;
                  },
                },
                pseudos: {
                  not: ce(function (e) {
                    var t = [],
                      n = [],
                      i = a(e.replace(B, "$1"));
                    return i[x]
                      ? ce(function (e, t, n, r) {
                          for (
                            var s, o = i(e, null, r, []), a = e.length;
                            a--;

                          )
                            (s = o[a]) && (e[a] = !(t[a] = s));
                        })
                      : function (e, r, s) {
                          return (
                            (t[0] = e),
                            i(t, null, s, n),
                            (t[0] = null),
                            !n.pop()
                          );
                        };
                  }),
                  has: ce(function (e) {
                    return function (t) {
                      return ae(e, t).length > 0;
                    };
                  }),
                  contains: ce(function (e) {
                    return (
                      (e = e.replace(te, ne)),
                      function (t) {
                        return (t.textContent || r(t)).indexOf(e) > -1;
                      }
                    );
                  }),
                  lang: ce(function (e) {
                    return (
                      X.test(e || "") || ae.error("unsupported lang: " + e),
                      (e = e.replace(te, ne).toLowerCase()),
                      function (t) {
                        var n;
                        do {
                          if (
                            (n = g
                              ? t.lang
                              : t.getAttribute("xml:lang") ||
                                t.getAttribute("lang"))
                          )
                            return (
                              (n = n.toLowerCase()) === e ||
                              0 === n.indexOf(e + "-")
                            );
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                      }
                    );
                  }),
                  target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id;
                  },
                  root: function (e) {
                    return e === h;
                  },
                  focus: function (e) {
                    return (
                      e === f.activeElement &&
                      (!f.hasFocus || f.hasFocus()) &&
                      !!(e.type || e.href || ~e.tabIndex)
                    );
                  },
                  enabled: ge(!1),
                  disabled: ge(!0),
                  checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (
                      ("input" === t && !!e.checked) ||
                      ("option" === t && !!e.selected)
                    );
                  },
                  selected: function (e) {
                    return (
                      e.parentNode && e.parentNode.selectedIndex,
                      !0 === e.selected
                    );
                  },
                  empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                      if (e.nodeType < 6) return !1;
                    return !0;
                  },
                  parent: function (e) {
                    return !i.pseudos.empty(e);
                  },
                  header: function (e) {
                    return K.test(e.nodeName);
                  },
                  input: function (e) {
                    return Q.test(e.nodeName);
                  },
                  button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (
                      ("input" === t && "button" === e.type) || "button" === t
                    );
                  },
                  text: function (e) {
                    var t;
                    return (
                      "input" === e.nodeName.toLowerCase() &&
                      "text" === e.type &&
                      (null == (t = e.getAttribute("type")) ||
                        "text" === t.toLowerCase())
                    );
                  },
                  first: me(function () {
                    return [0];
                  }),
                  last: me(function (e, t) {
                    return [t - 1];
                  }),
                  eq: me(function (e, t, n) {
                    return [n < 0 ? n + t : n];
                  }),
                  even: me(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  odd: me(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  lt: me(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0; )
                      e.push(i);
                    return e;
                  }),
                  gt: me(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                    return e;
                  }),
                },
              }),
            (i.pseudos.nth = i.pseudos.eq),
            { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
              i.pseudos[t] = fe(t);
            for (t in { submit: !0, reset: !0 }) i.pseudos[t] = he(t);
            function ye() {}
            function we(e) {
              for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
              return i;
            }
            function xe(e, t, n) {
              var i = t.dir,
                r = t.next,
                s = r || i,
                o = n && "parentNode" === s,
                a = C++;
              return t.first
                ? function (t, n, r) {
                    for (; (t = t[i]); )
                      if (1 === t.nodeType || o) return e(t, n, r);
                    return !1;
                  }
                : function (t, n, l) {
                    var c,
                      d,
                      u,
                      p = [T, a];
                    if (l) {
                      for (; (t = t[i]); )
                        if ((1 === t.nodeType || o) && e(t, n, l)) return !0;
                    } else
                      for (; (t = t[i]); )
                        if (1 === t.nodeType || o)
                          if (
                            ((d =
                              (u = t[x] || (t[x] = {}))[t.uniqueID] ||
                              (u[t.uniqueID] = {})),
                            r && r === t.nodeName.toLowerCase())
                          )
                            t = t[i] || t;
                          else {
                            if ((c = d[s]) && c[0] === T && c[1] === a)
                              return (p[2] = c[2]);
                            if (((d[s] = p), (p[2] = e(t, n, l)))) return !0;
                          }
                    return !1;
                  };
            }
            function be(e) {
              return e.length > 1
                ? function (t, n, i) {
                    for (var r = e.length; r--; ) if (!e[r](t, n, i)) return !1;
                    return !0;
                  }
                : e[0];
            }
            function Te(e, t, n, i, r) {
              for (
                var s, o = [], a = 0, l = e.length, c = null != t;
                a < l;
                a++
              )
                (s = e[a]) &&
                  ((n && !n(s, i, r)) || (o.push(s), c && t.push(a)));
              return o;
            }
            function Ce(e, t, n, i, r, s) {
              return (
                i && !i[x] && (i = Ce(i)),
                r && !r[x] && (r = Ce(r, s)),
                ce(function (s, o, a, l) {
                  var c,
                    d,
                    u,
                    p = [],
                    f = [],
                    h = o.length,
                    g =
                      s ||
                      (function (e, t, n) {
                        for (var i = 0, r = t.length; i < r; i++)
                          ae(e, t[i], n);
                        return n;
                      })(t || "*", a.nodeType ? [a] : a, []),
                    m = !e || (!s && t) ? g : Te(g, p, e, a, l),
                    v = n ? (r || (s ? e : h || i) ? [] : o) : m;
                  if ((n && n(m, v, a, l), i))
                    for (c = Te(v, f), i(c, [], a, l), d = c.length; d--; )
                      (u = c[d]) && (v[f[d]] = !(m[f[d]] = u));
                  if (s) {
                    if (r || e) {
                      if (r) {
                        for (c = [], d = v.length; d--; )
                          (u = v[d]) && c.push((m[d] = u));
                        r(null, (v = []), c, l);
                      }
                      for (d = v.length; d--; )
                        (u = v[d]) &&
                          (c = r ? j(s, u) : p[d]) > -1 &&
                          (s[c] = !(o[c] = u));
                    }
                  } else (v = Te(v === o ? v.splice(h, v.length) : v)), r ? r(null, o, v, l) : O.apply(o, v);
                })
              );
            }
            function Se(e) {
              for (
                var t,
                  n,
                  r,
                  s = e.length,
                  o = i.relative[e[0].type],
                  a = o || i.relative[" "],
                  l = o ? 1 : 0,
                  d = xe(
                    function (e) {
                      return e === t;
                    },
                    a,
                    !0
                  ),
                  u = xe(
                    function (e) {
                      return j(t, e) > -1;
                    },
                    a,
                    !0
                  ),
                  p = [
                    function (e, n, i) {
                      var r =
                        (!o && (i || n !== c)) ||
                        ((t = n).nodeType ? d(e, n, i) : u(e, n, i));
                      return (t = null), r;
                    },
                  ];
                l < s;
                l++
              )
                if ((n = i.relative[e[l].type])) p = [xe(be(p), n)];
                else {
                  if ((n = i.filter[e[l].type].apply(null, e[l].matches))[x]) {
                    for (r = ++l; r < s && !i.relative[e[r].type]; r++);
                    return Ce(
                      l > 1 && be(p),
                      l > 1 &&
                        we(
                          e
                            .slice(0, l - 1)
                            .concat({ value: " " === e[l - 2].type ? "*" : "" })
                        ).replace(B, "$1"),
                      n,
                      l < r && Se(e.slice(l, r)),
                      r < s && Se((e = e.slice(r))),
                      r < s && we(e)
                    );
                  }
                  p.push(n);
                }
              return be(p);
            }
            return (
              (ye.prototype = i.filters = i.pseudos),
              (i.setFilters = new ye()),
              (o = ae.tokenize =
                function (e, t) {
                  var n,
                    r,
                    s,
                    o,
                    a,
                    l,
                    c,
                    d = E[e + " "];
                  if (d) return t ? 0 : d.slice(0);
                  for (a = e, l = [], c = i.preFilter; a; ) {
                    for (o in ((n && !(r = R.exec(a))) ||
                      (r && (a = a.slice(r[0].length) || a), l.push((s = []))),
                    (n = !1),
                    (r = F.exec(a)) &&
                      ((n = r.shift()),
                      s.push({ value: n, type: r[0].replace(B, " ") }),
                      (a = a.slice(n.length))),
                    i.filter))
                      !(r = Y[o].exec(a)) ||
                        (c[o] && !(r = c[o](r))) ||
                        ((n = r.shift()),
                        s.push({ value: n, type: o, matches: r }),
                        (a = a.slice(n.length)));
                    if (!n) break;
                  }
                  return t ? a.length : a ? ae.error(e) : E(e, l).slice(0);
                }),
              (a = ae.compile =
                function (e, t) {
                  var n,
                    r = [],
                    s = [],
                    a = k[e + " "];
                  if (!a) {
                    for (t || (t = o(e)), n = t.length; n--; )
                      (a = Se(t[n]))[x] ? r.push(a) : s.push(a);
                    (a = k(
                      e,
                      (function (e, t) {
                        var n = t.length > 0,
                          r = e.length > 0,
                          s = function (s, o, a, l, d) {
                            var u,
                              h,
                              m,
                              v = 0,
                              y = "0",
                              w = s && [],
                              x = [],
                              b = c,
                              C = s || (r && i.find.TAG("*", d)),
                              S = (T += null == b ? 1 : Math.random() || 0.1),
                              E = C.length;
                            for (
                              d && (c = o == f || o || d);
                              y !== E && null != (u = C[y]);
                              y++
                            ) {
                              if (r && u) {
                                for (
                                  h = 0,
                                    o ||
                                      u.ownerDocument == f ||
                                      (p(u), (a = !g));
                                  (m = e[h++]);

                                )
                                  if (m(u, o || f, a)) {
                                    l.push(u);
                                    break;
                                  }
                                d && (T = S);
                              }
                              n && ((u = !m && u) && v--, s && w.push(u));
                            }
                            if (((v += y), n && y !== v)) {
                              for (h = 0; (m = t[h++]); ) m(w, x, o, a);
                              if (s) {
                                if (v > 0)
                                  for (; y--; )
                                    w[y] || x[y] || (x[y] = D.call(l));
                                x = Te(x);
                              }
                              O.apply(l, x),
                                d &&
                                  !s &&
                                  x.length > 0 &&
                                  v + t.length > 1 &&
                                  ae.uniqueSort(l);
                            }
                            return d && ((T = S), (c = b)), w;
                          };
                        return n ? ce(s) : s;
                      })(s, r)
                    )),
                      (a.selector = e);
                  }
                  return a;
                }),
              (l = ae.select =
                function (e, t, n, r) {
                  var s,
                    l,
                    c,
                    d,
                    u,
                    p = "function" == typeof e && e,
                    f = !r && o((e = p.selector || e));
                  if (((n = n || []), 1 === f.length)) {
                    if (
                      (l = f[0] = f[0].slice(0)).length > 2 &&
                      "ID" === (c = l[0]).type &&
                      9 === t.nodeType &&
                      g &&
                      i.relative[l[1].type]
                    ) {
                      if (
                        !(t = (i.find.ID(c.matches[0].replace(te, ne), t) ||
                          [])[0])
                      )
                        return n;
                      p && (t = t.parentNode),
                        (e = e.slice(l.shift().value.length));
                    }
                    for (
                      s = Y.needsContext.test(e) ? 0 : l.length;
                      s-- && ((c = l[s]), !i.relative[(d = c.type)]);

                    )
                      if (
                        (u = i.find[d]) &&
                        (r = u(
                          c.matches[0].replace(te, ne),
                          (ee.test(l[0].type) && ve(t.parentNode)) || t
                        ))
                      ) {
                        if ((l.splice(s, 1), !(e = r.length && we(l))))
                          return O.apply(n, r), n;
                        break;
                      }
                  }
                  return (
                    (p || a(e, f))(
                      r,
                      t,
                      !g,
                      n,
                      !t || (ee.test(e) && ve(t.parentNode)) || t
                    ),
                    n
                  );
                }),
              (n.sortStable = x.split("").sort(A).join("") === x),
              (n.detectDuplicates = !!u),
              p(),
              (n.sortDetached = de(function (e) {
                return (
                  1 & e.compareDocumentPosition(f.createElement("fieldset"))
                );
              })),
              de(function (e) {
                return (
                  (e.innerHTML = "<a href='#'></a>"),
                  "#" === e.firstChild.getAttribute("href")
                );
              }) ||
                ue("type|href|height|width", function (e, t, n) {
                  if (!n)
                    return e.getAttribute(
                      t,
                      "type" === t.toLowerCase() ? 1 : 2
                    );
                }),
              (n.attributes &&
                de(function (e) {
                  return (
                    (e.innerHTML = "<input/>"),
                    e.firstChild.setAttribute("value", ""),
                    "" === e.firstChild.getAttribute("value")
                  );
                })) ||
                ue("value", function (e, t, n) {
                  if (!n && "input" === e.nodeName.toLowerCase())
                    return e.defaultValue;
                }),
              de(function (e) {
                return null == e.getAttribute("disabled");
              }) ||
                ue(I, function (e, t, n) {
                  var i;
                  if (!n)
                    return !0 === e[t]
                      ? t.toLowerCase()
                      : (i = e.getAttributeNode(t)) && i.specified
                      ? i.value
                      : null;
                }),
              ae
            );
          })(i);
          (S.find = k),
            (S.expr = k.selectors),
            (S.expr[":"] = S.expr.pseudos),
            (S.uniqueSort = S.unique = k.uniqueSort),
            (S.text = k.getText),
            (S.isXMLDoc = k.isXML),
            (S.contains = k.contains),
            (S.escapeSelector = k.escape);
          var L = function (e, t, n) {
              for (
                var i = [], r = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;

              )
                if (1 === e.nodeType) {
                  if (r && S(e).is(n)) break;
                  i.push(e);
                }
              return i;
            },
            A = function (e, t) {
              for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
              return n;
            },
            P = S.expr.match.needsContext;
          function M(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          }
          var D =
            /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
          function N(e, t, n) {
            return v(t)
              ? S.grep(e, function (e, i) {
                  return !!t.call(e, i, e) !== n;
                })
              : t.nodeType
              ? S.grep(e, function (e) {
                  return (e === t) !== n;
                })
              : "string" != typeof t
              ? S.grep(e, function (e) {
                  return d.call(t, e) > -1 !== n;
                })
              : S.filter(t, e, n);
          }
          (S.filter = function (e, t, n) {
            var i = t[0];
            return (
              n && (e = ":not(" + e + ")"),
              1 === t.length && 1 === i.nodeType
                ? S.find.matchesSelector(i, e)
                  ? [i]
                  : []
                : S.find.matches(
                    e,
                    S.grep(t, function (e) {
                      return 1 === e.nodeType;
                    })
                  )
            );
          }),
            S.fn.extend({
              find: function (e) {
                var t,
                  n,
                  i = this.length,
                  r = this;
                if ("string" != typeof e)
                  return this.pushStack(
                    S(e).filter(function () {
                      for (t = 0; t < i; t++)
                        if (S.contains(r[t], this)) return !0;
                    })
                  );
                for (n = this.pushStack([]), t = 0; t < i; t++)
                  S.find(e, r[t], n);
                return i > 1 ? S.uniqueSort(n) : n;
              },
              filter: function (e) {
                return this.pushStack(N(this, e || [], !1));
              },
              not: function (e) {
                return this.pushStack(N(this, e || [], !0));
              },
              is: function (e) {
                return !!N(
                  this,
                  "string" == typeof e && P.test(e) ? S(e) : e || [],
                  !1
                ).length;
              },
            });
          var O,
            $ = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
          ((S.fn.init = function (e, t, n) {
            var i, r;
            if (!e) return this;
            if (((n = n || O), "string" == typeof e)) {
              if (
                !(i =
                  "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                    ? [null, e, null]
                    : $.exec(e)) ||
                (!i[1] && t)
              )
                return !t || t.jquery
                  ? (t || n).find(e)
                  : this.constructor(t).find(e);
              if (i[1]) {
                if (
                  ((t = t instanceof S ? t[0] : t),
                  S.merge(
                    this,
                    S.parseHTML(
                      i[1],
                      t && t.nodeType ? t.ownerDocument || t : w,
                      !0
                    )
                  ),
                  D.test(i[1]) && S.isPlainObject(t))
                )
                  for (i in t) v(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this;
              }
              return (
                (r = w.getElementById(i[2])) &&
                  ((this[0] = r), (this.length = 1)),
                this
              );
            }
            return e.nodeType
              ? ((this[0] = e), (this.length = 1), this)
              : v(e)
              ? void 0 !== n.ready
                ? n.ready(e)
                : e(S)
              : S.makeArray(e, this);
          }).prototype = S.fn),
            (O = S(w));
          var j = /^(?:parents|prev(?:Until|All))/,
            I = { children: !0, contents: !0, next: !0, prev: !0 };
          function q(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; );
            return e;
          }
          S.fn.extend({
            has: function (e) {
              var t = S(e, this),
                n = t.length;
              return this.filter(function () {
                for (var e = 0; e < n; e++)
                  if (S.contains(this, t[e])) return !0;
              });
            },
            closest: function (e, t) {
              var n,
                i = 0,
                r = this.length,
                s = [],
                o = "string" != typeof e && S(e);
              if (!P.test(e))
                for (; i < r; i++)
                  for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (
                      n.nodeType < 11 &&
                      (o
                        ? o.index(n) > -1
                        : 1 === n.nodeType && S.find.matchesSelector(n, e))
                    ) {
                      s.push(n);
                      break;
                    }
              return this.pushStack(s.length > 1 ? S.uniqueSort(s) : s);
            },
            index: function (e) {
              return e
                ? "string" == typeof e
                  ? d.call(S(e), this[0])
                  : d.call(this, e.jquery ? e[0] : e)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
            },
            add: function (e, t) {
              return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
            },
            addBack: function (e) {
              return this.add(
                null == e ? this.prevObject : this.prevObject.filter(e)
              );
            },
          }),
            S.each(
              {
                parent: function (e) {
                  var t = e.parentNode;
                  return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                  return L(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                  return L(e, "parentNode", n);
                },
                next: function (e) {
                  return q(e, "nextSibling");
                },
                prev: function (e) {
                  return q(e, "previousSibling");
                },
                nextAll: function (e) {
                  return L(e, "nextSibling");
                },
                prevAll: function (e) {
                  return L(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                  return L(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                  return L(e, "previousSibling", n);
                },
                siblings: function (e) {
                  return A((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                  return A(e.firstChild);
                },
                contents: function (e) {
                  return null != e.contentDocument && o(e.contentDocument)
                    ? e.contentDocument
                    : (M(e, "template") && (e = e.content || e),
                      S.merge([], e.childNodes));
                },
              },
              function (e, t) {
                S.fn[e] = function (n, i) {
                  var r = S.map(this, t, n);
                  return (
                    "Until" !== e.slice(-5) && (i = n),
                    i && "string" == typeof i && (r = S.filter(i, r)),
                    this.length > 1 &&
                      (I[e] || S.uniqueSort(r), j.test(e) && r.reverse()),
                    this.pushStack(r)
                  );
                };
              }
            );
          var z = /[^\x20\t\r\n\f]+/g;
          function H(e) {
            return e;
          }
          function W(e) {
            throw e;
          }
          function _(e, t, n, i) {
            var r;
            try {
              e && v((r = e.promise))
                ? r.call(e).done(t).fail(n)
                : e && v((r = e.then))
                ? r.call(e, t, n)
                : t.apply(void 0, [e].slice(i));
            } catch (e) {
              n.apply(void 0, [e]);
            }
          }
          (S.Callbacks = function (e) {
            e =
              "string" == typeof e
                ? (function (e) {
                    var t = {};
                    return (
                      S.each(e.match(z) || [], function (e, n) {
                        t[n] = !0;
                      }),
                      t
                    );
                  })(e)
                : S.extend({}, e);
            var t,
              n,
              i,
              r,
              s = [],
              o = [],
              a = -1,
              l = function () {
                for (r = r || e.once, i = t = !0; o.length; a = -1)
                  for (n = o.shift(); ++a < s.length; )
                    !1 === s[a].apply(n[0], n[1]) &&
                      e.stopOnFalse &&
                      ((a = s.length), (n = !1));
                e.memory || (n = !1), (t = !1), r && (s = n ? [] : "");
              },
              c = {
                add: function () {
                  return (
                    s &&
                      (n && !t && ((a = s.length - 1), o.push(n)),
                      (function t(n) {
                        S.each(n, function (n, i) {
                          v(i)
                            ? (e.unique && c.has(i)) || s.push(i)
                            : i && i.length && "string" !== T(i) && t(i);
                        });
                      })(arguments),
                      n && !t && l()),
                    this
                  );
                },
                remove: function () {
                  return (
                    S.each(arguments, function (e, t) {
                      for (var n; (n = S.inArray(t, s, n)) > -1; )
                        s.splice(n, 1), n <= a && a--;
                    }),
                    this
                  );
                },
                has: function (e) {
                  return e ? S.inArray(e, s) > -1 : s.length > 0;
                },
                empty: function () {
                  return s && (s = []), this;
                },
                disable: function () {
                  return (r = o = []), (s = n = ""), this;
                },
                disabled: function () {
                  return !s;
                },
                lock: function () {
                  return (r = o = []), n || t || (s = n = ""), this;
                },
                locked: function () {
                  return !!r;
                },
                fireWith: function (e, n) {
                  return (
                    r ||
                      ((n = [e, (n = n || []).slice ? n.slice() : n]),
                      o.push(n),
                      t || l()),
                    this
                  );
                },
                fire: function () {
                  return c.fireWith(this, arguments), this;
                },
                fired: function () {
                  return !!i;
                },
              };
            return c;
          }),
            S.extend({
              Deferred: function (e) {
                var t = [
                    [
                      "notify",
                      "progress",
                      S.Callbacks("memory"),
                      S.Callbacks("memory"),
                      2,
                    ],
                    [
                      "resolve",
                      "done",
                      S.Callbacks("once memory"),
                      S.Callbacks("once memory"),
                      0,
                      "resolved",
                    ],
                    [
                      "reject",
                      "fail",
                      S.Callbacks("once memory"),
                      S.Callbacks("once memory"),
                      1,
                      "rejected",
                    ],
                  ],
                  n = "pending",
                  r = {
                    state: function () {
                      return n;
                    },
                    always: function () {
                      return s.done(arguments).fail(arguments), this;
                    },
                    catch: function (e) {
                      return r.then(null, e);
                    },
                    pipe: function () {
                      var e = arguments;
                      return S.Deferred(function (n) {
                        S.each(t, function (t, i) {
                          var r = v(e[i[4]]) && e[i[4]];
                          s[i[1]](function () {
                            var e = r && r.apply(this, arguments);
                            e && v(e.promise)
                              ? e
                                  .promise()
                                  .progress(n.notify)
                                  .done(n.resolve)
                                  .fail(n.reject)
                              : n[i[0] + "With"](this, r ? [e] : arguments);
                          });
                        }),
                          (e = null);
                      }).promise();
                    },
                    then: function (e, n, r) {
                      var s = 0;
                      function o(e, t, n, r) {
                        return function () {
                          var a = this,
                            l = arguments,
                            c = function () {
                              var i, c;
                              if (!(e < s)) {
                                if ((i = n.apply(a, l)) === t.promise())
                                  throw new TypeError(
                                    "Thenable self-resolution"
                                  );
                                (c =
                                  i &&
                                  ("object" == typeof i ||
                                    "function" == typeof i) &&
                                  i.then),
                                  v(c)
                                    ? r
                                      ? c.call(i, o(s, t, H, r), o(s, t, W, r))
                                      : (s++,
                                        c.call(
                                          i,
                                          o(s, t, H, r),
                                          o(s, t, W, r),
                                          o(s, t, H, t.notifyWith)
                                        ))
                                    : (n !== H && ((a = void 0), (l = [i])),
                                      (r || t.resolveWith)(a, l));
                              }
                            },
                            d = r
                              ? c
                              : function () {
                                  try {
                                    c();
                                  } catch (i) {
                                    S.Deferred.exceptionHook &&
                                      S.Deferred.exceptionHook(i, d.stackTrace),
                                      e + 1 >= s &&
                                        (n !== W && ((a = void 0), (l = [i])),
                                        t.rejectWith(a, l));
                                  }
                                };
                          e
                            ? d()
                            : (S.Deferred.getStackHook &&
                                (d.stackTrace = S.Deferred.getStackHook()),
                              i.setTimeout(d));
                        };
                      }
                      return S.Deferred(function (i) {
                        t[0][3].add(o(0, i, v(r) ? r : H, i.notifyWith)),
                          t[1][3].add(o(0, i, v(e) ? e : H)),
                          t[2][3].add(o(0, i, v(n) ? n : W));
                      }).promise();
                    },
                    promise: function (e) {
                      return null != e ? S.extend(e, r) : r;
                    },
                  },
                  s = {};
                return (
                  S.each(t, function (e, i) {
                    var o = i[2],
                      a = i[5];
                    (r[i[1]] = o.add),
                      a &&
                        o.add(
                          function () {
                            n = a;
                          },
                          t[3 - e][2].disable,
                          t[3 - e][3].disable,
                          t[0][2].lock,
                          t[0][3].lock
                        ),
                      o.add(i[3].fire),
                      (s[i[0]] = function () {
                        return (
                          s[i[0] + "With"](
                            this === s ? void 0 : this,
                            arguments
                          ),
                          this
                        );
                      }),
                      (s[i[0] + "With"] = o.fireWith);
                  }),
                  r.promise(s),
                  e && e.call(s, s),
                  s
                );
              },
              when: function (e) {
                var t = arguments.length,
                  n = t,
                  i = Array(n),
                  r = a.call(arguments),
                  s = S.Deferred(),
                  o = function (e) {
                    return function (n) {
                      (i[e] = this),
                        (r[e] = arguments.length > 1 ? a.call(arguments) : n),
                        --t || s.resolveWith(i, r);
                    };
                  };
                if (
                  t <= 1 &&
                  (_(e, s.done(o(n)).resolve, s.reject, !t),
                  "pending" === s.state() || v(r[n] && r[n].then))
                )
                  return s.then();
                for (; n--; ) _(r[n], o(n), s.reject);
                return s.promise();
              },
            });
          var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
          (S.Deferred.exceptionHook = function (e, t) {
            i.console &&
              i.console.warn &&
              e &&
              B.test(e.name) &&
              i.console.warn(
                "jQuery.Deferred exception: " + e.message,
                e.stack,
                t
              );
          }),
            (S.readyException = function (e) {
              i.setTimeout(function () {
                throw e;
              });
            });
          var R = S.Deferred();
          function F() {
            w.removeEventListener("DOMContentLoaded", F),
              i.removeEventListener("load", F),
              S.ready();
          }
          (S.fn.ready = function (e) {
            return (
              R.then(e).catch(function (e) {
                S.readyException(e);
              }),
              this
            );
          }),
            S.extend({
              isReady: !1,
              readyWait: 1,
              ready: function (e) {
                (!0 === e ? --S.readyWait : S.isReady) ||
                  ((S.isReady = !0),
                  (!0 !== e && --S.readyWait > 0) || R.resolveWith(w, [S]));
              },
            }),
            (S.ready.then = R.then),
            "complete" === w.readyState ||
            ("loading" !== w.readyState && !w.documentElement.doScroll)
              ? i.setTimeout(S.ready)
              : (w.addEventListener("DOMContentLoaded", F),
                i.addEventListener("load", F));
          var G = function (e, t, n, i, r, s, o) {
              var a = 0,
                l = e.length,
                c = null == n;
              if ("object" === T(n))
                for (a in ((r = !0), n)) G(e, t, a, n[a], !0, s, o);
              else if (
                void 0 !== i &&
                ((r = !0),
                v(i) || (o = !0),
                c &&
                  (o
                    ? (t.call(e, i), (t = null))
                    : ((c = t),
                      (t = function (e, t, n) {
                        return c.call(S(e), n);
                      }))),
                t)
              )
                for (; a < l; a++)
                  t(e[a], n, o ? i : i.call(e[a], a, t(e[a], n)));
              return r ? e : c ? t.call(e) : l ? t(e[0], n) : s;
            },
            V = /^-ms-/,
            X = /-([a-z])/g;
          function Y(e, t) {
            return t.toUpperCase();
          }
          function U(e) {
            return e.replace(V, "ms-").replace(X, Y);
          }
          var Q = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
          };
          function K() {
            this.expando = S.expando + K.uid++;
          }
          (K.uid = 1),
            (K.prototype = {
              cache: function (e) {
                var t = e[this.expando];
                return (
                  t ||
                    ((t = {}),
                    Q(e) &&
                      (e.nodeType
                        ? (e[this.expando] = t)
                        : Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0,
                          }))),
                  t
                );
              },
              set: function (e, t, n) {
                var i,
                  r = this.cache(e);
                if ("string" == typeof t) r[U(t)] = n;
                else for (i in t) r[U(i)] = t[i];
                return r;
              },
              get: function (e, t) {
                return void 0 === t
                  ? this.cache(e)
                  : e[this.expando] && e[this.expando][U(t)];
              },
              access: function (e, t, n) {
                return void 0 === t ||
                  (t && "string" == typeof t && void 0 === n)
                  ? this.get(e, t)
                  : (this.set(e, t, n), void 0 !== n ? n : t);
              },
              remove: function (e, t) {
                var n,
                  i = e[this.expando];
                if (void 0 !== i) {
                  if (void 0 !== t) {
                    n = (t = Array.isArray(t)
                      ? t.map(U)
                      : (t = U(t)) in i
                      ? [t]
                      : t.match(z) || []).length;
                    for (; n--; ) delete i[t[n]];
                  }
                  (void 0 === t || S.isEmptyObject(i)) &&
                    (e.nodeType
                      ? (e[this.expando] = void 0)
                      : delete e[this.expando]);
                }
              },
              hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !S.isEmptyObject(t);
              },
            });
          var J = new K(),
            Z = new K(),
            ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            te = /[A-Z]/g;
          function ne(e, t, n) {
            var i;
            if (void 0 === n && 1 === e.nodeType)
              if (
                ((i = "data-" + t.replace(te, "-$&").toLowerCase()),
                "string" == typeof (n = e.getAttribute(i)))
              ) {
                try {
                  n = (function (e) {
                    return (
                      "true" === e ||
                      ("false" !== e &&
                        ("null" === e
                          ? null
                          : e === +e + ""
                          ? +e
                          : ee.test(e)
                          ? JSON.parse(e)
                          : e))
                    );
                  })(n);
                } catch (e) {}
                Z.set(e, t, n);
              } else n = void 0;
            return n;
          }
          S.extend({
            hasData: function (e) {
              return Z.hasData(e) || J.hasData(e);
            },
            data: function (e, t, n) {
              return Z.access(e, t, n);
            },
            removeData: function (e, t) {
              Z.remove(e, t);
            },
            _data: function (e, t, n) {
              return J.access(e, t, n);
            },
            _removeData: function (e, t) {
              J.remove(e, t);
            },
          }),
            S.fn.extend({
              data: function (e, t) {
                var n,
                  i,
                  r,
                  s = this[0],
                  o = s && s.attributes;
                if (void 0 === e) {
                  if (
                    this.length &&
                    ((r = Z.get(s)),
                    1 === s.nodeType && !J.get(s, "hasDataAttrs"))
                  ) {
                    for (n = o.length; n--; )
                      o[n] &&
                        0 === (i = o[n].name).indexOf("data-") &&
                        ((i = U(i.slice(5))), ne(s, i, r[i]));
                    J.set(s, "hasDataAttrs", !0);
                  }
                  return r;
                }
                return "object" == typeof e
                  ? this.each(function () {
                      Z.set(this, e);
                    })
                  : G(
                      this,
                      function (t) {
                        var n;
                        if (s && void 0 === t)
                          return void 0 !== (n = Z.get(s, e)) ||
                            void 0 !== (n = ne(s, e))
                            ? n
                            : void 0;
                        this.each(function () {
                          Z.set(this, e, t);
                        });
                      },
                      null,
                      t,
                      arguments.length > 1,
                      null,
                      !0
                    );
              },
              removeData: function (e) {
                return this.each(function () {
                  Z.remove(this, e);
                });
              },
            }),
            S.extend({
              queue: function (e, t, n) {
                var i;
                if (e)
                  return (
                    (t = (t || "fx") + "queue"),
                    (i = J.get(e, t)),
                    n &&
                      (!i || Array.isArray(n)
                        ? (i = J.access(e, t, S.makeArray(n)))
                        : i.push(n)),
                    i || []
                  );
              },
              dequeue: function (e, t) {
                t = t || "fx";
                var n = S.queue(e, t),
                  i = n.length,
                  r = n.shift(),
                  s = S._queueHooks(e, t);
                "inprogress" === r && ((r = n.shift()), i--),
                  r &&
                    ("fx" === t && n.unshift("inprogress"),
                    delete s.stop,
                    r.call(
                      e,
                      function () {
                        S.dequeue(e, t);
                      },
                      s
                    )),
                  !i && s && s.empty.fire();
              },
              _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                  J.get(e, n) ||
                  J.access(e, n, {
                    empty: S.Callbacks("once memory").add(function () {
                      J.remove(e, [t + "queue", n]);
                    }),
                  })
                );
              },
            }),
            S.fn.extend({
              queue: function (e, t) {
                var n = 2;
                return (
                  "string" != typeof e && ((t = e), (e = "fx"), n--),
                  arguments.length < n
                    ? S.queue(this[0], e)
                    : void 0 === t
                    ? this
                    : this.each(function () {
                        var n = S.queue(this, e, t);
                        S._queueHooks(this, e),
                          "fx" === e &&
                            "inprogress" !== n[0] &&
                            S.dequeue(this, e);
                      })
                );
              },
              dequeue: function (e) {
                return this.each(function () {
                  S.dequeue(this, e);
                });
              },
              clearQueue: function (e) {
                return this.queue(e || "fx", []);
              },
              promise: function (e, t) {
                var n,
                  i = 1,
                  r = S.Deferred(),
                  s = this,
                  o = this.length,
                  a = function () {
                    --i || r.resolveWith(s, [s]);
                  };
                for (
                  "string" != typeof e && ((t = e), (e = void 0)),
                    e = e || "fx";
                  o--;

                )
                  (n = J.get(s[o], e + "queueHooks")) &&
                    n.empty &&
                    (i++, n.empty.add(a));
                return a(), r.promise(t);
              },
            });
          var ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            re = new RegExp("^(?:([+-])=|)(" + ie + ")([a-z%]*)$", "i"),
            se = ["Top", "Right", "Bottom", "Left"],
            oe = w.documentElement,
            ae = function (e) {
              return S.contains(e.ownerDocument, e);
            },
            le = { composed: !0 };
          oe.getRootNode &&
            (ae = function (e) {
              return (
                S.contains(e.ownerDocument, e) ||
                e.getRootNode(le) === e.ownerDocument
              );
            });
          var ce = function (e, t) {
            return (
              "none" === (e = t || e).style.display ||
              ("" === e.style.display &&
                ae(e) &&
                "none" === S.css(e, "display"))
            );
          };
          function de(e, t, n, i) {
            var r,
              s,
              o = 20,
              a = i
                ? function () {
                    return i.cur();
                  }
                : function () {
                    return S.css(e, t, "");
                  },
              l = a(),
              c = (n && n[3]) || (S.cssNumber[t] ? "" : "px"),
              d =
                e.nodeType &&
                (S.cssNumber[t] || ("px" !== c && +l)) &&
                re.exec(S.css(e, t));
            if (d && d[3] !== c) {
              for (l /= 2, c = c || d[3], d = +l || 1; o--; )
                S.style(e, t, d + c),
                  (1 - s) * (1 - (s = a() / l || 0.5)) <= 0 && (o = 0),
                  (d /= s);
              (d *= 2), S.style(e, t, d + c), (n = n || []);
            }
            return (
              n &&
                ((d = +d || +l || 0),
                (r = n[1] ? d + (n[1] + 1) * n[2] : +n[2]),
                i && ((i.unit = c), (i.start = d), (i.end = r))),
              r
            );
          }
          var ue = {};
          function pe(e) {
            var t,
              n = e.ownerDocument,
              i = e.nodeName,
              r = ue[i];
            return (
              r ||
              ((t = n.body.appendChild(n.createElement(i))),
              (r = S.css(t, "display")),
              t.parentNode.removeChild(t),
              "none" === r && (r = "block"),
              (ue[i] = r),
              r)
            );
          }
          function fe(e, t) {
            for (var n, i, r = [], s = 0, o = e.length; s < o; s++)
              (i = e[s]).style &&
                ((n = i.style.display),
                t
                  ? ("none" === n &&
                      ((r[s] = J.get(i, "display") || null),
                      r[s] || (i.style.display = "")),
                    "" === i.style.display && ce(i) && (r[s] = pe(i)))
                  : "none" !== n && ((r[s] = "none"), J.set(i, "display", n)));
            for (s = 0; s < o; s++) null != r[s] && (e[s].style.display = r[s]);
            return e;
          }
          S.fn.extend({
            show: function () {
              return fe(this, !0);
            },
            hide: function () {
              return fe(this);
            },
            toggle: function (e) {
              return "boolean" == typeof e
                ? e
                  ? this.show()
                  : this.hide()
                : this.each(function () {
                    ce(this) ? S(this).show() : S(this).hide();
                  });
            },
          });
          var he,
            ge,
            me = /^(?:checkbox|radio)$/i,
            ve = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            ye = /^$|^module$|\/(?:java|ecma)script/i;
          (he = w.createDocumentFragment().appendChild(w.createElement("div"))),
            (ge = w.createElement("input")).setAttribute("type", "radio"),
            ge.setAttribute("checked", "checked"),
            ge.setAttribute("name", "t"),
            he.appendChild(ge),
            (m.checkClone = he.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (he.innerHTML = "<textarea>x</textarea>"),
            (m.noCloneChecked = !!he.cloneNode(!0).lastChild.defaultValue),
            (he.innerHTML = "<option></option>"),
            (m.option = !!he.lastChild);
          var we = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
          };
          function xe(e, t) {
            var n;
            return (
              (n =
                void 0 !== e.getElementsByTagName
                  ? e.getElementsByTagName(t || "*")
                  : void 0 !== e.querySelectorAll
                  ? e.querySelectorAll(t || "*")
                  : []),
              void 0 === t || (t && M(e, t)) ? S.merge([e], n) : n
            );
          }
          function be(e, t) {
            for (var n = 0, i = e.length; n < i; n++)
              J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
          }
          (we.tbody = we.tfoot = we.colgroup = we.caption = we.thead),
            (we.th = we.td),
            m.option ||
              (we.optgroup = we.option =
                [1, "<select multiple='multiple'>", "</select>"]);
          var Te = /<|&#?\w+;/;
          function Ce(e, t, n, i, r) {
            for (
              var s,
                o,
                a,
                l,
                c,
                d,
                u = t.createDocumentFragment(),
                p = [],
                f = 0,
                h = e.length;
              f < h;
              f++
            )
              if ((s = e[f]) || 0 === s)
                if ("object" === T(s)) S.merge(p, s.nodeType ? [s] : s);
                else if (Te.test(s)) {
                  for (
                    o = o || u.appendChild(t.createElement("div")),
                      a = (ve.exec(s) || ["", ""])[1].toLowerCase(),
                      l = we[a] || we._default,
                      o.innerHTML = l[1] + S.htmlPrefilter(s) + l[2],
                      d = l[0];
                    d--;

                  )
                    o = o.lastChild;
                  S.merge(p, o.childNodes),
                    ((o = u.firstChild).textContent = "");
                } else p.push(t.createTextNode(s));
            for (u.textContent = "", f = 0; (s = p[f++]); )
              if (i && S.inArray(s, i) > -1) r && r.push(s);
              else if (
                ((c = ae(s)),
                (o = xe(u.appendChild(s), "script")),
                c && be(o),
                n)
              )
                for (d = 0; (s = o[d++]); ) ye.test(s.type || "") && n.push(s);
            return u;
          }
          var Se = /^([^.]*)(?:\.(.+)|)/;
          function Ee() {
            return !0;
          }
          function ke() {
            return !1;
          }
          function Le(e, t) {
            return (
              (e ===
                (function () {
                  try {
                    return w.activeElement;
                  } catch (e) {}
                })()) ==
              ("focus" === t)
            );
          }
          function Ae(e, t, n, i, r, s) {
            var o, a;
            if ("object" == typeof t) {
              for (a in ("string" != typeof n && ((i = i || n), (n = void 0)),
              t))
                Ae(e, a, n, i, t[a], s);
              return e;
            }
            if (
              (null == i && null == r
                ? ((r = n), (i = n = void 0))
                : null == r &&
                  ("string" == typeof n
                    ? ((r = i), (i = void 0))
                    : ((r = i), (i = n), (n = void 0))),
              !1 === r)
            )
              r = ke;
            else if (!r) return e;
            return (
              1 === s &&
                ((o = r),
                (r = function (e) {
                  return S().off(e), o.apply(this, arguments);
                }),
                (r.guid = o.guid || (o.guid = S.guid++))),
              e.each(function () {
                S.event.add(this, t, r, i, n);
              })
            );
          }
          function Pe(e, t, n) {
            n
              ? (J.set(e, t, !1),
                S.event.add(e, t, {
                  namespace: !1,
                  handler: function (e) {
                    var i,
                      r,
                      s = J.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                      if (s.length)
                        (S.event.special[t] || {}).delegateType &&
                          e.stopPropagation();
                      else if (
                        ((s = a.call(arguments)),
                        J.set(this, t, s),
                        (i = n(this, t)),
                        this[t](),
                        s !== (r = J.get(this, t)) || i
                          ? J.set(this, t, !1)
                          : (r = {}),
                        s !== r)
                      )
                        return (
                          e.stopImmediatePropagation(),
                          e.preventDefault(),
                          r && r.value
                        );
                    } else
                      s.length &&
                        (J.set(this, t, {
                          value: S.event.trigger(
                            S.extend(s[0], S.Event.prototype),
                            s.slice(1),
                            this
                          ),
                        }),
                        e.stopImmediatePropagation());
                  },
                }))
              : void 0 === J.get(e, t) && S.event.add(e, t, Ee);
          }
          (S.event = {
            global: {},
            add: function (e, t, n, i, r) {
              var s,
                o,
                a,
                l,
                c,
                d,
                u,
                p,
                f,
                h,
                g,
                m = J.get(e);
              if (Q(e))
                for (
                  n.handler && ((n = (s = n).handler), (r = s.selector)),
                    r && S.find.matchesSelector(oe, r),
                    n.guid || (n.guid = S.guid++),
                    (l = m.events) || (l = m.events = Object.create(null)),
                    (o = m.handle) ||
                      (o = m.handle =
                        function (t) {
                          return void 0 !== S && S.event.triggered !== t.type
                            ? S.event.dispatch.apply(e, arguments)
                            : void 0;
                        }),
                    c = (t = (t || "").match(z) || [""]).length;
                  c--;

                )
                  (f = g = (a = Se.exec(t[c]) || [])[1]),
                    (h = (a[2] || "").split(".").sort()),
                    f &&
                      ((u = S.event.special[f] || {}),
                      (f = (r ? u.delegateType : u.bindType) || f),
                      (u = S.event.special[f] || {}),
                      (d = S.extend(
                        {
                          type: f,
                          origType: g,
                          data: i,
                          handler: n,
                          guid: n.guid,
                          selector: r,
                          needsContext: r && S.expr.match.needsContext.test(r),
                          namespace: h.join("."),
                        },
                        s
                      )),
                      (p = l[f]) ||
                        (((p = l[f] = []).delegateCount = 0),
                        (u.setup && !1 !== u.setup.call(e, i, h, o)) ||
                          (e.addEventListener && e.addEventListener(f, o))),
                      u.add &&
                        (u.add.call(e, d),
                        d.handler.guid || (d.handler.guid = n.guid)),
                      r ? p.splice(p.delegateCount++, 0, d) : p.push(d),
                      (S.event.global[f] = !0));
            },
            remove: function (e, t, n, i, r) {
              var s,
                o,
                a,
                l,
                c,
                d,
                u,
                p,
                f,
                h,
                g,
                m = J.hasData(e) && J.get(e);
              if (m && (l = m.events)) {
                for (c = (t = (t || "").match(z) || [""]).length; c--; )
                  if (
                    ((f = g = (a = Se.exec(t[c]) || [])[1]),
                    (h = (a[2] || "").split(".").sort()),
                    f)
                  ) {
                    for (
                      u = S.event.special[f] || {},
                        p =
                          l[(f = (i ? u.delegateType : u.bindType) || f)] || [],
                        a =
                          a[2] &&
                          new RegExp(
                            "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                          ),
                        o = s = p.length;
                      s--;

                    )
                      (d = p[s]),
                        (!r && g !== d.origType) ||
                          (n && n.guid !== d.guid) ||
                          (a && !a.test(d.namespace)) ||
                          (i &&
                            i !== d.selector &&
                            ("**" !== i || !d.selector)) ||
                          (p.splice(s, 1),
                          d.selector && p.delegateCount--,
                          u.remove && u.remove.call(e, d));
                    o &&
                      !p.length &&
                      ((u.teardown && !1 !== u.teardown.call(e, h, m.handle)) ||
                        S.removeEvent(e, f, m.handle),
                      delete l[f]);
                  } else for (f in l) S.event.remove(e, f + t[c], n, i, !0);
                S.isEmptyObject(l) && J.remove(e, "handle events");
              }
            },
            dispatch: function (e) {
              var t,
                n,
                i,
                r,
                s,
                o,
                a = new Array(arguments.length),
                l = S.event.fix(e),
                c =
                  (J.get(this, "events") || Object.create(null))[l.type] || [],
                d = S.event.special[l.type] || {};
              for (a[0] = l, t = 1; t < arguments.length; t++)
                a[t] = arguments[t];
              if (
                ((l.delegateTarget = this),
                !d.preDispatch || !1 !== d.preDispatch.call(this, l))
              ) {
                for (
                  o = S.event.handlers.call(this, l, c), t = 0;
                  (r = o[t++]) && !l.isPropagationStopped();

                )
                  for (
                    l.currentTarget = r.elem, n = 0;
                    (s = r.handlers[n++]) && !l.isImmediatePropagationStopped();

                  )
                    (l.rnamespace &&
                      !1 !== s.namespace &&
                      !l.rnamespace.test(s.namespace)) ||
                      ((l.handleObj = s),
                      (l.data = s.data),
                      void 0 !==
                        (i = (
                          (S.event.special[s.origType] || {}).handle ||
                          s.handler
                        ).apply(r.elem, a)) &&
                        !1 === (l.result = i) &&
                        (l.preventDefault(), l.stopPropagation()));
                return d.postDispatch && d.postDispatch.call(this, l), l.result;
              }
            },
            handlers: function (e, t) {
              var n,
                i,
                r,
                s,
                o,
                a = [],
                l = t.delegateCount,
                c = e.target;
              if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                for (; c !== this; c = c.parentNode || this)
                  if (
                    1 === c.nodeType &&
                    ("click" !== e.type || !0 !== c.disabled)
                  ) {
                    for (s = [], o = {}, n = 0; n < l; n++)
                      void 0 === o[(r = (i = t[n]).selector + " ")] &&
                        (o[r] = i.needsContext
                          ? S(r, this).index(c) > -1
                          : S.find(r, this, null, [c]).length),
                        o[r] && s.push(i);
                    s.length && a.push({ elem: c, handlers: s });
                  }
              return (
                (c = this),
                l < t.length && a.push({ elem: c, handlers: t.slice(l) }),
                a
              );
            },
            addProp: function (e, t) {
              Object.defineProperty(S.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: v(t)
                  ? function () {
                      if (this.originalEvent) return t(this.originalEvent);
                    }
                  : function () {
                      if (this.originalEvent) return this.originalEvent[e];
                    },
                set: function (t) {
                  Object.defineProperty(this, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t,
                  });
                },
              });
            },
            fix: function (e) {
              return e[S.expando] ? e : new S.Event(e);
            },
            special: {
              load: { noBubble: !0 },
              click: {
                setup: function (e) {
                  var t = this || e;
                  return (
                    me.test(t.type) &&
                      t.click &&
                      M(t, "input") &&
                      Pe(t, "click", Ee),
                    !1
                  );
                },
                trigger: function (e) {
                  var t = this || e;
                  return (
                    me.test(t.type) &&
                      t.click &&
                      M(t, "input") &&
                      Pe(t, "click"),
                    !0
                  );
                },
                _default: function (e) {
                  var t = e.target;
                  return (
                    (me.test(t.type) &&
                      t.click &&
                      M(t, "input") &&
                      J.get(t, "click")) ||
                    M(t, "a")
                  );
                },
              },
              beforeunload: {
                postDispatch: function (e) {
                  void 0 !== e.result &&
                    e.originalEvent &&
                    (e.originalEvent.returnValue = e.result);
                },
              },
            },
          }),
            (S.removeEvent = function (e, t, n) {
              e.removeEventListener && e.removeEventListener(t, n);
            }),
            (S.Event = function (e, t) {
              if (!(this instanceof S.Event)) return new S.Event(e, t);
              e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented =
                    e.defaultPrevented ||
                    (void 0 === e.defaultPrevented && !1 === e.returnValue)
                      ? Ee
                      : ke),
                  (this.target =
                    e.target && 3 === e.target.nodeType
                      ? e.target.parentNode
                      : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && S.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[S.expando] = !0);
            }),
            (S.Event.prototype = {
              constructor: S.Event,
              isDefaultPrevented: ke,
              isPropagationStopped: ke,
              isImmediatePropagationStopped: ke,
              isSimulated: !1,
              preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = Ee),
                  e && !this.isSimulated && e.preventDefault();
              },
              stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = Ee),
                  e && !this.isSimulated && e.stopPropagation();
              },
              stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = Ee),
                  e && !this.isSimulated && e.stopImmediatePropagation(),
                  this.stopPropagation();
              },
            }),
            S.each(
              {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: !0,
              },
              S.event.addProp
            ),
            S.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
              S.event.special[e] = {
                setup: function () {
                  return Pe(this, e, Le), !1;
                },
                trigger: function () {
                  return Pe(this, e), !0;
                },
                _default: function () {
                  return !0;
                },
                delegateType: t,
              };
            }),
            S.each(
              {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
              },
              function (e, t) {
                S.event.special[e] = {
                  delegateType: t,
                  bindType: t,
                  handle: function (e) {
                    var n,
                      i = this,
                      r = e.relatedTarget,
                      s = e.handleObj;
                    return (
                      (r && (r === i || S.contains(i, r))) ||
                        ((e.type = s.origType),
                        (n = s.handler.apply(this, arguments)),
                        (e.type = t)),
                      n
                    );
                  },
                };
              }
            ),
            S.fn.extend({
              on: function (e, t, n, i) {
                return Ae(this, e, t, n, i);
              },
              one: function (e, t, n, i) {
                return Ae(this, e, t, n, i, 1);
              },
              off: function (e, t, n) {
                var i, r;
                if (e && e.preventDefault && e.handleObj)
                  return (
                    (i = e.handleObj),
                    S(e.delegateTarget).off(
                      i.namespace ? i.origType + "." + i.namespace : i.origType,
                      i.selector,
                      i.handler
                    ),
                    this
                  );
                if ("object" == typeof e) {
                  for (r in e) this.off(r, t, e[r]);
                  return this;
                }
                return (
                  (!1 !== t && "function" != typeof t) ||
                    ((n = t), (t = void 0)),
                  !1 === n && (n = ke),
                  this.each(function () {
                    S.event.remove(this, e, n, t);
                  })
                );
              },
            });
          var Me = /<script|<style|<link/i,
            De = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
          function Oe(e, t) {
            return (
              (M(e, "table") &&
                M(11 !== t.nodeType ? t : t.firstChild, "tr") &&
                S(e).children("tbody")[0]) ||
              e
            );
          }
          function $e(e) {
            return (
              (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e
            );
          }
          function je(e) {
            return (
              "true/" === (e.type || "").slice(0, 5)
                ? (e.type = e.type.slice(5))
                : e.removeAttribute("type"),
              e
            );
          }
          function Ie(e, t) {
            var n, i, r, s, o, a;
            if (1 === t.nodeType) {
              if (J.hasData(e) && (a = J.get(e).events))
                for (r in (J.remove(t, "handle events"), a))
                  for (n = 0, i = a[r].length; n < i; n++)
                    S.event.add(t, r, a[r][n]);
              Z.hasData(e) &&
                ((s = Z.access(e)), (o = S.extend({}, s)), Z.set(t, o));
            }
          }
          function qe(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && me.test(e.type)
              ? (t.checked = e.checked)
              : ("input" !== n && "textarea" !== n) ||
                (t.defaultValue = e.defaultValue);
          }
          function ze(e, t, n, i) {
            t = l(t);
            var r,
              s,
              o,
              a,
              c,
              d,
              u = 0,
              p = e.length,
              f = p - 1,
              h = t[0],
              g = v(h);
            if (
              g ||
              (p > 1 && "string" == typeof h && !m.checkClone && De.test(h))
            )
              return e.each(function (r) {
                var s = e.eq(r);
                g && (t[0] = h.call(this, r, s.html())), ze(s, t, n, i);
              });
            if (
              p &&
              ((s = (r = Ce(t, e[0].ownerDocument, !1, e, i)).firstChild),
              1 === r.childNodes.length && (r = s),
              s || i)
            ) {
              for (a = (o = S.map(xe(r, "script"), $e)).length; u < p; u++)
                (c = r),
                  u !== f &&
                    ((c = S.clone(c, !0, !0)),
                    a && S.merge(o, xe(c, "script"))),
                  n.call(e[u], c, u);
              if (a)
                for (
                  d = o[o.length - 1].ownerDocument, S.map(o, je), u = 0;
                  u < a;
                  u++
                )
                  (c = o[u]),
                    ye.test(c.type || "") &&
                      !J.access(c, "globalEval") &&
                      S.contains(d, c) &&
                      (c.src && "module" !== (c.type || "").toLowerCase()
                        ? S._evalUrl &&
                          !c.noModule &&
                          S._evalUrl(
                            c.src,
                            { nonce: c.nonce || c.getAttribute("nonce") },
                            d
                          )
                        : b(c.textContent.replace(Ne, ""), c, d));
            }
            return e;
          }
          function He(e, t, n) {
            for (
              var i, r = t ? S.filter(t, e) : e, s = 0;
              null != (i = r[s]);
              s++
            )
              n || 1 !== i.nodeType || S.cleanData(xe(i)),
                i.parentNode &&
                  (n && ae(i) && be(xe(i, "script")),
                  i.parentNode.removeChild(i));
            return e;
          }
          S.extend({
            htmlPrefilter: function (e) {
              return e;
            },
            clone: function (e, t, n) {
              var i,
                r,
                s,
                o,
                a = e.cloneNode(!0),
                l = ae(e);
              if (
                !(
                  m.noCloneChecked ||
                  (1 !== e.nodeType && 11 !== e.nodeType) ||
                  S.isXMLDoc(e)
                )
              )
                for (o = xe(a), i = 0, r = (s = xe(e)).length; i < r; i++)
                  qe(s[i], o[i]);
              if (t)
                if (n)
                  for (
                    s = s || xe(e), o = o || xe(a), i = 0, r = s.length;
                    i < r;
                    i++
                  )
                    Ie(s[i], o[i]);
                else Ie(e, a);
              return (
                (o = xe(a, "script")).length > 0 &&
                  be(o, !l && xe(e, "script")),
                a
              );
            },
            cleanData: function (e) {
              for (
                var t, n, i, r = S.event.special, s = 0;
                void 0 !== (n = e[s]);
                s++
              )
                if (Q(n)) {
                  if ((t = n[J.expando])) {
                    if (t.events)
                      for (i in t.events)
                        r[i]
                          ? S.event.remove(n, i)
                          : S.removeEvent(n, i, t.handle);
                    n[J.expando] = void 0;
                  }
                  n[Z.expando] && (n[Z.expando] = void 0);
                }
            },
          }),
            S.fn.extend({
              detach: function (e) {
                return He(this, e, !0);
              },
              remove: function (e) {
                return He(this, e);
              },
              text: function (e) {
                return G(
                  this,
                  function (e) {
                    return void 0 === e
                      ? S.text(this)
                      : this.empty().each(function () {
                          (1 !== this.nodeType &&
                            11 !== this.nodeType &&
                            9 !== this.nodeType) ||
                            (this.textContent = e);
                        });
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              append: function () {
                return ze(this, arguments, function (e) {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    Oe(this, e).appendChild(e);
                });
              },
              prepend: function () {
                return ze(this, arguments, function (e) {
                  if (
                    1 === this.nodeType ||
                    11 === this.nodeType ||
                    9 === this.nodeType
                  ) {
                    var t = Oe(this, e);
                    t.insertBefore(e, t.firstChild);
                  }
                });
              },
              before: function () {
                return ze(this, arguments, function (e) {
                  this.parentNode && this.parentNode.insertBefore(e, this);
                });
              },
              after: function () {
                return ze(this, arguments, function (e) {
                  this.parentNode &&
                    this.parentNode.insertBefore(e, this.nextSibling);
                });
              },
              empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)
                  1 === e.nodeType &&
                    (S.cleanData(xe(e, !1)), (e.textContent = ""));
                return this;
              },
              clone: function (e, t) {
                return (
                  (e = null != e && e),
                  (t = null == t ? e : t),
                  this.map(function () {
                    return S.clone(this, e, t);
                  })
                );
              },
              html: function (e) {
                return G(
                  this,
                  function (e) {
                    var t = this[0] || {},
                      n = 0,
                      i = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if (
                      "string" == typeof e &&
                      !Me.test(e) &&
                      !we[(ve.exec(e) || ["", ""])[1].toLowerCase()]
                    ) {
                      e = S.htmlPrefilter(e);
                      try {
                        for (; n < i; n++)
                          1 === (t = this[n] || {}).nodeType &&
                            (S.cleanData(xe(t, !1)), (t.innerHTML = e));
                        t = 0;
                      } catch (e) {}
                    }
                    t && this.empty().append(e);
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              replaceWith: function () {
                var e = [];
                return ze(
                  this,
                  arguments,
                  function (t) {
                    var n = this.parentNode;
                    S.inArray(this, e) < 0 &&
                      (S.cleanData(xe(this)), n && n.replaceChild(t, this));
                  },
                  e
                );
              },
            }),
            S.each(
              {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
              },
              function (e, t) {
                S.fn[e] = function (e) {
                  for (
                    var n, i = [], r = S(e), s = r.length - 1, o = 0;
                    o <= s;
                    o++
                  )
                    (n = o === s ? this : this.clone(!0)),
                      S(r[o])[t](n),
                      c.apply(i, n.get());
                  return this.pushStack(i);
                };
              }
            );
          var We = new RegExp("^(" + ie + ")(?!px)[a-z%]+$", "i"),
            _e = function (e) {
              var t = e.ownerDocument.defaultView;
              return (t && t.opener) || (t = i), t.getComputedStyle(e);
            },
            Be = function (e, t, n) {
              var i,
                r,
                s = {};
              for (r in t) (s[r] = e.style[r]), (e.style[r] = t[r]);
              for (r in ((i = n.call(e)), t)) e.style[r] = s[r];
              return i;
            },
            Re = new RegExp(se.join("|"), "i");
          function Fe(e, t, n) {
            var i,
              r,
              s,
              o,
              a = e.style;
            return (
              (n = n || _e(e)) &&
                ("" !== (o = n.getPropertyValue(t) || n[t]) ||
                  ae(e) ||
                  (o = S.style(e, t)),
                !m.pixelBoxStyles() &&
                  We.test(o) &&
                  Re.test(t) &&
                  ((i = a.width),
                  (r = a.minWidth),
                  (s = a.maxWidth),
                  (a.minWidth = a.maxWidth = a.width = o),
                  (o = n.width),
                  (a.width = i),
                  (a.minWidth = r),
                  (a.maxWidth = s))),
              void 0 !== o ? o + "" : o
            );
          }
          function Ge(e, t) {
            return {
              get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
              },
            };
          }
          !(function () {
            function e() {
              if (d) {
                (c.style.cssText =
                  "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                  (d.style.cssText =
                    "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                  oe.appendChild(c).appendChild(d);
                var e = i.getComputedStyle(d);
                (n = "1%" !== e.top),
                  (l = 12 === t(e.marginLeft)),
                  (d.style.right = "60%"),
                  (o = 36 === t(e.right)),
                  (r = 36 === t(e.width)),
                  (d.style.position = "absolute"),
                  (s = 12 === t(d.offsetWidth / 3)),
                  oe.removeChild(c),
                  (d = null);
              }
            }
            function t(e) {
              return Math.round(parseFloat(e));
            }
            var n,
              r,
              s,
              o,
              a,
              l,
              c = w.createElement("div"),
              d = w.createElement("div");
            d.style &&
              ((d.style.backgroundClip = "content-box"),
              (d.cloneNode(!0).style.backgroundClip = ""),
              (m.clearCloneStyle = "content-box" === d.style.backgroundClip),
              S.extend(m, {
                boxSizingReliable: function () {
                  return e(), r;
                },
                pixelBoxStyles: function () {
                  return e(), o;
                },
                pixelPosition: function () {
                  return e(), n;
                },
                reliableMarginLeft: function () {
                  return e(), l;
                },
                scrollboxSize: function () {
                  return e(), s;
                },
                reliableTrDimensions: function () {
                  var e, t, n, r;
                  return (
                    null == a &&
                      ((e = w.createElement("table")),
                      (t = w.createElement("tr")),
                      (n = w.createElement("div")),
                      (e.style.cssText =
                        "position:absolute;left:-11111px;border-collapse:separate"),
                      (t.style.cssText = "border:1px solid"),
                      (t.style.height = "1px"),
                      (n.style.height = "9px"),
                      (n.style.display = "block"),
                      oe.appendChild(e).appendChild(t).appendChild(n),
                      (r = i.getComputedStyle(t)),
                      (a =
                        parseInt(r.height, 10) +
                          parseInt(r.borderTopWidth, 10) +
                          parseInt(r.borderBottomWidth, 10) ===
                        t.offsetHeight),
                      oe.removeChild(e)),
                    a
                  );
                },
              }));
          })();
          var Ve = ["Webkit", "Moz", "ms"],
            Xe = w.createElement("div").style,
            Ye = {};
          function Ue(e) {
            var t = S.cssProps[e] || Ye[e];
            return (
              t ||
              (e in Xe
                ? e
                : (Ye[e] =
                    (function (e) {
                      for (
                        var t = e[0].toUpperCase() + e.slice(1), n = Ve.length;
                        n--;

                      )
                        if ((e = Ve[n] + t) in Xe) return e;
                    })(e) || e))
            );
          }
          var Qe = /^(none|table(?!-c[ea]).+)/,
            Ke = /^--/,
            Je = {
              position: "absolute",
              visibility: "hidden",
              display: "block",
            },
            Ze = { letterSpacing: "0", fontWeight: "400" };
          function et(e, t, n) {
            var i = re.exec(t);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
          }
          function tt(e, t, n, i, r, s) {
            var o = "width" === t ? 1 : 0,
              a = 0,
              l = 0;
            if (n === (i ? "border" : "content")) return 0;
            for (; o < 4; o += 2)
              "margin" === n && (l += S.css(e, n + se[o], !0, r)),
                i
                  ? ("content" === n &&
                      (l -= S.css(e, "padding" + se[o], !0, r)),
                    "margin" !== n &&
                      (l -= S.css(e, "border" + se[o] + "Width", !0, r)))
                  : ((l += S.css(e, "padding" + se[o], !0, r)),
                    "padding" !== n
                      ? (l += S.css(e, "border" + se[o] + "Width", !0, r))
                      : (a += S.css(e, "border" + se[o] + "Width", !0, r)));
            return (
              !i &&
                s >= 0 &&
                (l +=
                  Math.max(
                    0,
                    Math.ceil(
                      e["offset" + t[0].toUpperCase() + t.slice(1)] -
                        s -
                        l -
                        a -
                        0.5
                    )
                  ) || 0),
              l
            );
          }
          function nt(e, t, n) {
            var i = _e(e),
              r =
                (!m.boxSizingReliable() || n) &&
                "border-box" === S.css(e, "boxSizing", !1, i),
              s = r,
              o = Fe(e, t, i),
              a = "offset" + t[0].toUpperCase() + t.slice(1);
            if (We.test(o)) {
              if (!n) return o;
              o = "auto";
            }
            return (
              ((!m.boxSizingReliable() && r) ||
                (!m.reliableTrDimensions() && M(e, "tr")) ||
                "auto" === o ||
                (!parseFloat(o) && "inline" === S.css(e, "display", !1, i))) &&
                e.getClientRects().length &&
                ((r = "border-box" === S.css(e, "boxSizing", !1, i)),
                (s = a in e) && (o = e[a])),
              (o = parseFloat(o) || 0) +
                tt(e, t, n || (r ? "border" : "content"), s, i, o) +
                "px"
            );
          }
          function it(e, t, n, i, r) {
            return new it.prototype.init(e, t, n, i, r);
          }
          S.extend({
            cssHooks: {
              opacity: {
                get: function (e, t) {
                  if (t) {
                    var n = Fe(e, "opacity");
                    return "" === n ? "1" : n;
                  }
                },
              },
            },
            cssNumber: {
              animationIterationCount: !0,
              columnCount: !0,
              fillOpacity: !0,
              flexGrow: !0,
              flexShrink: !0,
              fontWeight: !0,
              gridArea: !0,
              gridColumn: !0,
              gridColumnEnd: !0,
              gridColumnStart: !0,
              gridRow: !0,
              gridRowEnd: !0,
              gridRowStart: !0,
              lineHeight: !0,
              opacity: !0,
              order: !0,
              orphans: !0,
              widows: !0,
              zIndex: !0,
              zoom: !0,
            },
            cssProps: {},
            style: function (e, t, n, i) {
              if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r,
                  s,
                  o,
                  a = U(t),
                  l = Ke.test(t),
                  c = e.style;
                if (
                  (l || (t = Ue(a)),
                  (o = S.cssHooks[t] || S.cssHooks[a]),
                  void 0 === n)
                )
                  return o && "get" in o && void 0 !== (r = o.get(e, !1, i))
                    ? r
                    : c[t];
                "string" === (s = typeof n) &&
                  (r = re.exec(n)) &&
                  r[1] &&
                  ((n = de(e, t, r)), (s = "number")),
                  null != n &&
                    n == n &&
                    ("number" !== s ||
                      l ||
                      (n += (r && r[3]) || (S.cssNumber[a] ? "" : "px")),
                    m.clearCloneStyle ||
                      "" !== n ||
                      0 !== t.indexOf("background") ||
                      (c[t] = "inherit"),
                    (o && "set" in o && void 0 === (n = o.set(e, n, i))) ||
                      (l ? c.setProperty(t, n) : (c[t] = n)));
              }
            },
            css: function (e, t, n, i) {
              var r,
                s,
                o,
                a = U(t);
              return (
                Ke.test(t) || (t = Ue(a)),
                (o = S.cssHooks[t] || S.cssHooks[a]) &&
                  "get" in o &&
                  (r = o.get(e, !0, n)),
                void 0 === r && (r = Fe(e, t, i)),
                "normal" === r && t in Ze && (r = Ze[t]),
                "" === n || n
                  ? ((s = parseFloat(r)), !0 === n || isFinite(s) ? s || 0 : r)
                  : r
              );
            },
          }),
            S.each(["height", "width"], function (e, t) {
              S.cssHooks[t] = {
                get: function (e, n, i) {
                  if (n)
                    return !Qe.test(S.css(e, "display")) ||
                      (e.getClientRects().length &&
                        e.getBoundingClientRect().width)
                      ? nt(e, t, i)
                      : Be(e, Je, function () {
                          return nt(e, t, i);
                        });
                },
                set: function (e, n, i) {
                  var r,
                    s = _e(e),
                    o = !m.scrollboxSize() && "absolute" === s.position,
                    a =
                      (o || i) && "border-box" === S.css(e, "boxSizing", !1, s),
                    l = i ? tt(e, t, i, a, s) : 0;
                  return (
                    a &&
                      o &&
                      (l -= Math.ceil(
                        e["offset" + t[0].toUpperCase() + t.slice(1)] -
                          parseFloat(s[t]) -
                          tt(e, t, "border", !1, s) -
                          0.5
                      )),
                    l &&
                      (r = re.exec(n)) &&
                      "px" !== (r[3] || "px") &&
                      ((e.style[t] = n), (n = S.css(e, t))),
                    et(0, n, l)
                  );
                },
              };
            }),
            (S.cssHooks.marginLeft = Ge(m.reliableMarginLeft, function (e, t) {
              if (t)
                return (
                  (parseFloat(Fe(e, "marginLeft")) ||
                    e.getBoundingClientRect().left -
                      Be(e, { marginLeft: 0 }, function () {
                        return e.getBoundingClientRect().left;
                      })) + "px"
                );
            })),
            S.each(
              { margin: "", padding: "", border: "Width" },
              function (e, t) {
                (S.cssHooks[e + t] = {
                  expand: function (n) {
                    for (
                      var i = 0,
                        r = {},
                        s = "string" == typeof n ? n.split(" ") : [n];
                      i < 4;
                      i++
                    )
                      r[e + se[i] + t] = s[i] || s[i - 2] || s[0];
                    return r;
                  },
                }),
                  "margin" !== e && (S.cssHooks[e + t].set = et);
              }
            ),
            S.fn.extend({
              css: function (e, t) {
                return G(
                  this,
                  function (e, t, n) {
                    var i,
                      r,
                      s = {},
                      o = 0;
                    if (Array.isArray(t)) {
                      for (i = _e(e), r = t.length; o < r; o++)
                        s[t[o]] = S.css(e, t[o], !1, i);
                      return s;
                    }
                    return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
                  },
                  e,
                  t,
                  arguments.length > 1
                );
              },
            }),
            (S.Tween = it),
            (it.prototype = {
              constructor: it,
              init: function (e, t, n, i, r, s) {
                (this.elem = e),
                  (this.prop = n),
                  (this.easing = r || S.easing._default),
                  (this.options = t),
                  (this.start = this.now = this.cur()),
                  (this.end = i),
                  (this.unit = s || (S.cssNumber[n] ? "" : "px"));
              },
              cur: function () {
                var e = it.propHooks[this.prop];
                return e && e.get
                  ? e.get(this)
                  : it.propHooks._default.get(this);
              },
              run: function (e) {
                var t,
                  n = it.propHooks[this.prop];
                return (
                  this.options.duration
                    ? (this.pos = t =
                        S.easing[this.easing](
                          e,
                          this.options.duration * e,
                          0,
                          1,
                          this.options.duration
                        ))
                    : (this.pos = t = e),
                  (this.now = (this.end - this.start) * t + this.start),
                  this.options.step &&
                    this.options.step.call(this.elem, this.now, this),
                  n && n.set ? n.set(this) : it.propHooks._default.set(this),
                  this
                );
              },
            }),
            (it.prototype.init.prototype = it.prototype),
            (it.propHooks = {
              _default: {
                get: function (e) {
                  var t;
                  return 1 !== e.elem.nodeType ||
                    (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                    ? e.elem[e.prop]
                    : (t = S.css(e.elem, e.prop, "")) && "auto" !== t
                    ? t
                    : 0;
                },
                set: function (e) {
                  S.fx.step[e.prop]
                    ? S.fx.step[e.prop](e)
                    : 1 !== e.elem.nodeType ||
                      (!S.cssHooks[e.prop] && null == e.elem.style[Ue(e.prop)])
                    ? (e.elem[e.prop] = e.now)
                    : S.style(e.elem, e.prop, e.now + e.unit);
                },
              },
            }),
            (it.propHooks.scrollTop = it.propHooks.scrollLeft =
              {
                set: function (e) {
                  e.elem.nodeType &&
                    e.elem.parentNode &&
                    (e.elem[e.prop] = e.now);
                },
              }),
            (S.easing = {
              linear: function (e) {
                return e;
              },
              swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
              },
              _default: "swing",
            }),
            (S.fx = it.prototype.init),
            (S.fx.step = {});
          var rt,
            st,
            ot = /^(?:toggle|show|hide)$/,
            at = /queueHooks$/;
          function lt() {
            st &&
              (!1 === w.hidden && i.requestAnimationFrame
                ? i.requestAnimationFrame(lt)
                : i.setTimeout(lt, S.fx.interval),
              S.fx.tick());
          }
          function ct() {
            return (
              i.setTimeout(function () {
                rt = void 0;
              }),
              (rt = Date.now())
            );
          }
          function dt(e, t) {
            var n,
              i = 0,
              r = { height: e };
            for (t = t ? 1 : 0; i < 4; i += 2 - t)
              r["margin" + (n = se[i])] = r["padding" + n] = e;
            return t && (r.opacity = r.width = e), r;
          }
          function ut(e, t, n) {
            for (
              var i,
                r = (pt.tweeners[t] || []).concat(pt.tweeners["*"]),
                s = 0,
                o = r.length;
              s < o;
              s++
            )
              if ((i = r[s].call(n, t, e))) return i;
          }
          function pt(e, t, n) {
            var i,
              r,
              s = 0,
              o = pt.prefilters.length,
              a = S.Deferred().always(function () {
                delete l.elem;
              }),
              l = function () {
                if (r) return !1;
                for (
                  var t = rt || ct(),
                    n = Math.max(0, c.startTime + c.duration - t),
                    i = 1 - (n / c.duration || 0),
                    s = 0,
                    o = c.tweens.length;
                  s < o;
                  s++
                )
                  c.tweens[s].run(i);
                return (
                  a.notifyWith(e, [c, i, n]),
                  i < 1 && o
                    ? n
                    : (o || a.notifyWith(e, [c, 1, 0]),
                      a.resolveWith(e, [c]),
                      !1)
                );
              },
              c = a.promise({
                elem: e,
                props: S.extend({}, t),
                opts: S.extend(
                  !0,
                  { specialEasing: {}, easing: S.easing._default },
                  n
                ),
                originalProperties: t,
                originalOptions: n,
                startTime: rt || ct(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                  var i = S.Tween(
                    e,
                    c.opts,
                    t,
                    n,
                    c.opts.specialEasing[t] || c.opts.easing
                  );
                  return c.tweens.push(i), i;
                },
                stop: function (t) {
                  var n = 0,
                    i = t ? c.tweens.length : 0;
                  if (r) return this;
                  for (r = !0; n < i; n++) c.tweens[n].run(1);
                  return (
                    t
                      ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t]))
                      : a.rejectWith(e, [c, t]),
                    this
                  );
                },
              }),
              d = c.props;
            for (
              !(function (e, t) {
                var n, i, r, s, o;
                for (n in e)
                  if (
                    ((r = t[(i = U(n))]),
                    (s = e[n]),
                    Array.isArray(s) && ((r = s[1]), (s = e[n] = s[0])),
                    n !== i && ((e[i] = s), delete e[n]),
                    (o = S.cssHooks[i]) && ("expand" in o))
                  )
                    for (n in ((s = o.expand(s)), delete e[i], s))
                      (n in e) || ((e[n] = s[n]), (t[n] = r));
                  else t[i] = r;
              })(d, c.opts.specialEasing);
              s < o;
              s++
            )
              if ((i = pt.prefilters[s].call(c, e, d, c.opts)))
                return (
                  v(i.stop) &&
                    (S._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)),
                  i
                );
            return (
              S.map(d, ut, c),
              v(c.opts.start) && c.opts.start.call(e, c),
              c
                .progress(c.opts.progress)
                .done(c.opts.done, c.opts.complete)
                .fail(c.opts.fail)
                .always(c.opts.always),
              S.fx.timer(
                S.extend(l, { elem: e, anim: c, queue: c.opts.queue })
              ),
              c
            );
          }
          (S.Animation = S.extend(pt, {
            tweeners: {
              "*": [
                function (e, t) {
                  var n = this.createTween(e, t);
                  return de(n.elem, e, re.exec(t), n), n;
                },
              ],
            },
            tweener: function (e, t) {
              v(e) ? ((t = e), (e = ["*"])) : (e = e.match(z));
              for (var n, i = 0, r = e.length; i < r; i++)
                (n = e[i]),
                  (pt.tweeners[n] = pt.tweeners[n] || []),
                  pt.tweeners[n].unshift(t);
            },
            prefilters: [
              function (e, t, n) {
                var i,
                  r,
                  s,
                  o,
                  a,
                  l,
                  c,
                  d,
                  u = "width" in t || "height" in t,
                  p = this,
                  f = {},
                  h = e.style,
                  g = e.nodeType && ce(e),
                  m = J.get(e, "fxshow");
                for (i in (n.queue ||
                  (null == (o = S._queueHooks(e, "fx")).unqueued &&
                    ((o.unqueued = 0),
                    (a = o.empty.fire),
                    (o.empty.fire = function () {
                      o.unqueued || a();
                    })),
                  o.unqueued++,
                  p.always(function () {
                    p.always(function () {
                      o.unqueued--, S.queue(e, "fx").length || o.empty.fire();
                    });
                  })),
                t))
                  if (((r = t[i]), ot.test(r))) {
                    if (
                      (delete t[i],
                      (s = s || "toggle" === r),
                      r === (g ? "hide" : "show"))
                    ) {
                      if ("show" !== r || !m || void 0 === m[i]) continue;
                      g = !0;
                    }
                    f[i] = (m && m[i]) || S.style(e, i);
                  }
                if ((l = !S.isEmptyObject(t)) || !S.isEmptyObject(f))
                  for (i in (u &&
                    1 === e.nodeType &&
                    ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                    null == (c = m && m.display) && (c = J.get(e, "display")),
                    "none" === (d = S.css(e, "display")) &&
                      (c
                        ? (d = c)
                        : (fe([e], !0),
                          (c = e.style.display || c),
                          (d = S.css(e, "display")),
                          fe([e]))),
                    ("inline" === d || ("inline-block" === d && null != c)) &&
                      "none" === S.css(e, "float") &&
                      (l ||
                        (p.done(function () {
                          h.display = c;
                        }),
                        null == c &&
                          ((d = h.display), (c = "none" === d ? "" : d))),
                      (h.display = "inline-block"))),
                  n.overflow &&
                    ((h.overflow = "hidden"),
                    p.always(function () {
                      (h.overflow = n.overflow[0]),
                        (h.overflowX = n.overflow[1]),
                        (h.overflowY = n.overflow[2]);
                    })),
                  (l = !1),
                  f))
                    l ||
                      (m
                        ? "hidden" in m && (g = m.hidden)
                        : (m = J.access(e, "fxshow", { display: c })),
                      s && (m.hidden = !g),
                      g && fe([e], !0),
                      p.done(function () {
                        for (i in (g || fe([e]), J.remove(e, "fxshow"), f))
                          S.style(e, i, f[i]);
                      })),
                      (l = ut(g ? m[i] : 0, i, p)),
                      i in m ||
                        ((m[i] = l.start),
                        g && ((l.end = l.start), (l.start = 0)));
              },
            ],
            prefilter: function (e, t) {
              t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
            },
          })),
            (S.speed = function (e, t, n) {
              var i =
                e && "object" == typeof e
                  ? S.extend({}, e)
                  : {
                      complete: n || (!n && t) || (v(e) && e),
                      duration: e,
                      easing: (n && t) || (t && !v(t) && t),
                    };
              return (
                S.fx.off
                  ? (i.duration = 0)
                  : "number" != typeof i.duration &&
                    (i.duration in S.fx.speeds
                      ? (i.duration = S.fx.speeds[i.duration])
                      : (i.duration = S.fx.speeds._default)),
                (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
                (i.old = i.complete),
                (i.complete = function () {
                  v(i.old) && i.old.call(this),
                    i.queue && S.dequeue(this, i.queue);
                }),
                i
              );
            }),
            S.fn.extend({
              fadeTo: function (e, t, n, i) {
                return this.filter(ce)
                  .css("opacity", 0)
                  .show()
                  .end()
                  .animate({ opacity: t }, e, n, i);
              },
              animate: function (e, t, n, i) {
                var r = S.isEmptyObject(e),
                  s = S.speed(t, n, i),
                  o = function () {
                    var t = pt(this, S.extend({}, e), s);
                    (r || J.get(this, "finish")) && t.stop(!0);
                  };
                return (
                  (o.finish = o),
                  r || !1 === s.queue ? this.each(o) : this.queue(s.queue, o)
                );
              },
              stop: function (e, t, n) {
                var i = function (e) {
                  var t = e.stop;
                  delete e.stop, t(n);
                };
                return (
                  "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                  t && this.queue(e || "fx", []),
                  this.each(function () {
                    var t = !0,
                      r = null != e && e + "queueHooks",
                      s = S.timers,
                      o = J.get(this);
                    if (r) o[r] && o[r].stop && i(o[r]);
                    else
                      for (r in o) o[r] && o[r].stop && at.test(r) && i(o[r]);
                    for (r = s.length; r--; )
                      s[r].elem !== this ||
                        (null != e && s[r].queue !== e) ||
                        (s[r].anim.stop(n), (t = !1), s.splice(r, 1));
                    (!t && n) || S.dequeue(this, e);
                  })
                );
              },
              finish: function (e) {
                return (
                  !1 !== e && (e = e || "fx"),
                  this.each(function () {
                    var t,
                      n = J.get(this),
                      i = n[e + "queue"],
                      r = n[e + "queueHooks"],
                      s = S.timers,
                      o = i ? i.length : 0;
                    for (
                      n.finish = !0,
                        S.queue(this, e, []),
                        r && r.stop && r.stop.call(this, !0),
                        t = s.length;
                      t--;

                    )
                      s[t].elem === this &&
                        s[t].queue === e &&
                        (s[t].anim.stop(!0), s.splice(t, 1));
                    for (t = 0; t < o; t++)
                      i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish;
                  })
                );
              },
            }),
            S.each(["toggle", "show", "hide"], function (e, t) {
              var n = S.fn[t];
              S.fn[t] = function (e, i, r) {
                return null == e || "boolean" == typeof e
                  ? n.apply(this, arguments)
                  : this.animate(dt(t, !0), e, i, r);
              };
            }),
            S.each(
              {
                slideDown: dt("show"),
                slideUp: dt("hide"),
                slideToggle: dt("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" },
              },
              function (e, t) {
                S.fn[e] = function (e, n, i) {
                  return this.animate(t, e, n, i);
                };
              }
            ),
            (S.timers = []),
            (S.fx.tick = function () {
              var e,
                t = 0,
                n = S.timers;
              for (rt = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
              n.length || S.fx.stop(), (rt = void 0);
            }),
            (S.fx.timer = function (e) {
              S.timers.push(e), S.fx.start();
            }),
            (S.fx.interval = 13),
            (S.fx.start = function () {
              st || ((st = !0), lt());
            }),
            (S.fx.stop = function () {
              st = null;
            }),
            (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
            (S.fn.delay = function (e, t) {
              return (
                (e = (S.fx && S.fx.speeds[e]) || e),
                (t = t || "fx"),
                this.queue(t, function (t, n) {
                  var r = i.setTimeout(t, e);
                  n.stop = function () {
                    i.clearTimeout(r);
                  };
                })
              );
            }),
            (function () {
              var e = w.createElement("input"),
                t = w
                  .createElement("select")
                  .appendChild(w.createElement("option"));
              (e.type = "checkbox"),
                (m.checkOn = "" !== e.value),
                (m.optSelected = t.selected),
                ((e = w.createElement("input")).value = "t"),
                (e.type = "radio"),
                (m.radioValue = "t" === e.value);
            })();
          var ft,
            ht = S.expr.attrHandle;
          S.fn.extend({
            attr: function (e, t) {
              return G(this, S.attr, e, t, arguments.length > 1);
            },
            removeAttr: function (e) {
              return this.each(function () {
                S.removeAttr(this, e);
              });
            },
          }),
            S.extend({
              attr: function (e, t, n) {
                var i,
                  r,
                  s = e.nodeType;
                if (3 !== s && 8 !== s && 2 !== s)
                  return void 0 === e.getAttribute
                    ? S.prop(e, t, n)
                    : ((1 === s && S.isXMLDoc(e)) ||
                        (r =
                          S.attrHooks[t.toLowerCase()] ||
                          (S.expr.match.bool.test(t) ? ft : void 0)),
                      void 0 !== n
                        ? null === n
                          ? void S.removeAttr(e, t)
                          : r && "set" in r && void 0 !== (i = r.set(e, n, t))
                          ? i
                          : (e.setAttribute(t, n + ""), n)
                        : r && "get" in r && null !== (i = r.get(e, t))
                        ? i
                        : null == (i = S.find.attr(e, t))
                        ? void 0
                        : i);
              },
              attrHooks: {
                type: {
                  set: function (e, t) {
                    if (!m.radioValue && "radio" === t && M(e, "input")) {
                      var n = e.value;
                      return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                  },
                },
              },
              removeAttr: function (e, t) {
                var n,
                  i = 0,
                  r = t && t.match(z);
                if (r && 1 === e.nodeType)
                  for (; (n = r[i++]); ) e.removeAttribute(n);
              },
            }),
            (ft = {
              set: function (e, t, n) {
                return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
              },
            }),
            S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
              var n = ht[t] || S.find.attr;
              ht[t] = function (e, t, i) {
                var r,
                  s,
                  o = t.toLowerCase();
                return (
                  i ||
                    ((s = ht[o]),
                    (ht[o] = r),
                    (r = null != n(e, t, i) ? o : null),
                    (ht[o] = s)),
                  r
                );
              };
            });
          var gt = /^(?:input|select|textarea|button)$/i,
            mt = /^(?:a|area)$/i;
          function vt(e) {
            return (e.match(z) || []).join(" ");
          }
          function yt(e) {
            return (e.getAttribute && e.getAttribute("class")) || "";
          }
          function wt(e) {
            return Array.isArray(e)
              ? e
              : ("string" == typeof e && e.match(z)) || [];
          }
          S.fn.extend({
            prop: function (e, t) {
              return G(this, S.prop, e, t, arguments.length > 1);
            },
            removeProp: function (e) {
              return this.each(function () {
                delete this[S.propFix[e] || e];
              });
            },
          }),
            S.extend({
              prop: function (e, t, n) {
                var i,
                  r,
                  s = e.nodeType;
                if (3 !== s && 8 !== s && 2 !== s)
                  return (
                    (1 === s && S.isXMLDoc(e)) ||
                      ((t = S.propFix[t] || t), (r = S.propHooks[t])),
                    void 0 !== n
                      ? r && "set" in r && void 0 !== (i = r.set(e, n, t))
                        ? i
                        : (e[t] = n)
                      : r && "get" in r && null !== (i = r.get(e, t))
                      ? i
                      : e[t]
                  );
              },
              propHooks: {
                tabIndex: {
                  get: function (e) {
                    var t = S.find.attr(e, "tabindex");
                    return t
                      ? parseInt(t, 10)
                      : gt.test(e.nodeName) || (mt.test(e.nodeName) && e.href)
                      ? 0
                      : -1;
                  },
                },
              },
              propFix: { for: "htmlFor", class: "className" },
            }),
            m.optSelected ||
              (S.propHooks.selected = {
                get: function (e) {
                  var t = e.parentNode;
                  return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function (e) {
                  var t = e.parentNode;
                  t &&
                    (t.selectedIndex,
                    t.parentNode && t.parentNode.selectedIndex);
                },
              }),
            S.each(
              [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable",
              ],
              function () {
                S.propFix[this.toLowerCase()] = this;
              }
            ),
            S.fn.extend({
              addClass: function (e) {
                var t,
                  n,
                  i,
                  r,
                  s,
                  o,
                  a,
                  l = 0;
                if (v(e))
                  return this.each(function (t) {
                    S(this).addClass(e.call(this, t, yt(this)));
                  });
                if ((t = wt(e)).length)
                  for (; (n = this[l++]); )
                    if (
                      ((r = yt(n)), (i = 1 === n.nodeType && " " + vt(r) + " "))
                    ) {
                      for (o = 0; (s = t[o++]); )
                        i.indexOf(" " + s + " ") < 0 && (i += s + " ");
                      r !== (a = vt(i)) && n.setAttribute("class", a);
                    }
                return this;
              },
              removeClass: function (e) {
                var t,
                  n,
                  i,
                  r,
                  s,
                  o,
                  a,
                  l = 0;
                if (v(e))
                  return this.each(function (t) {
                    S(this).removeClass(e.call(this, t, yt(this)));
                  });
                if (!arguments.length) return this.attr("class", "");
                if ((t = wt(e)).length)
                  for (; (n = this[l++]); )
                    if (
                      ((r = yt(n)), (i = 1 === n.nodeType && " " + vt(r) + " "))
                    ) {
                      for (o = 0; (s = t[o++]); )
                        for (; i.indexOf(" " + s + " ") > -1; )
                          i = i.replace(" " + s + " ", " ");
                      r !== (a = vt(i)) && n.setAttribute("class", a);
                    }
                return this;
              },
              toggleClass: function (e, t) {
                var n = typeof e,
                  i = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && i
                  ? t
                    ? this.addClass(e)
                    : this.removeClass(e)
                  : v(e)
                  ? this.each(function (n) {
                      S(this).toggleClass(e.call(this, n, yt(this), t), t);
                    })
                  : this.each(function () {
                      var t, r, s, o;
                      if (i)
                        for (r = 0, s = S(this), o = wt(e); (t = o[r++]); )
                          s.hasClass(t) ? s.removeClass(t) : s.addClass(t);
                      else
                        (void 0 !== e && "boolean" !== n) ||
                          ((t = yt(this)) && J.set(this, "__className__", t),
                          this.setAttribute &&
                            this.setAttribute(
                              "class",
                              t || !1 === e
                                ? ""
                                : J.get(this, "__className__") || ""
                            ));
                    });
              },
              hasClass: function (e) {
                var t,
                  n,
                  i = 0;
                for (t = " " + e + " "; (n = this[i++]); )
                  if (
                    1 === n.nodeType &&
                    (" " + vt(yt(n)) + " ").indexOf(t) > -1
                  )
                    return !0;
                return !1;
              },
            });
          var xt = /\r/g;
          S.fn.extend({
            val: function (e) {
              var t,
                n,
                i,
                r = this[0];
              return arguments.length
                ? ((i = v(e)),
                  this.each(function (n) {
                    var r;
                    1 === this.nodeType &&
                      (null == (r = i ? e.call(this, n, S(this).val()) : e)
                        ? (r = "")
                        : "number" == typeof r
                        ? (r += "")
                        : Array.isArray(r) &&
                          (r = S.map(r, function (e) {
                            return null == e ? "" : e + "";
                          })),
                      ((t =
                        S.valHooks[this.type] ||
                        S.valHooks[this.nodeName.toLowerCase()]) &&
                        "set" in t &&
                        void 0 !== t.set(this, r, "value")) ||
                        (this.value = r));
                  }))
                : r
                ? (t =
                    S.valHooks[r.type] ||
                    S.valHooks[r.nodeName.toLowerCase()]) &&
                  "get" in t &&
                  void 0 !== (n = t.get(r, "value"))
                  ? n
                  : "string" == typeof (n = r.value)
                  ? n.replace(xt, "")
                  : null == n
                  ? ""
                  : n
                : void 0;
            },
          }),
            S.extend({
              valHooks: {
                option: {
                  get: function (e) {
                    var t = S.find.attr(e, "value");
                    return null != t ? t : vt(S.text(e));
                  },
                },
                select: {
                  get: function (e) {
                    var t,
                      n,
                      i,
                      r = e.options,
                      s = e.selectedIndex,
                      o = "select-one" === e.type,
                      a = o ? null : [],
                      l = o ? s + 1 : r.length;
                    for (i = s < 0 ? l : o ? s : 0; i < l; i++)
                      if (
                        ((n = r[i]).selected || i === s) &&
                        !n.disabled &&
                        (!n.parentNode.disabled || !M(n.parentNode, "optgroup"))
                      ) {
                        if (((t = S(n).val()), o)) return t;
                        a.push(t);
                      }
                    return a;
                  },
                  set: function (e, t) {
                    for (
                      var n, i, r = e.options, s = S.makeArray(t), o = r.length;
                      o--;

                    )
                      ((i = r[o]).selected =
                        S.inArray(S.valHooks.option.get(i), s) > -1) &&
                        (n = !0);
                    return n || (e.selectedIndex = -1), s;
                  },
                },
              },
            }),
            S.each(["radio", "checkbox"], function () {
              (S.valHooks[this] = {
                set: function (e, t) {
                  if (Array.isArray(t))
                    return (e.checked = S.inArray(S(e).val(), t) > -1);
                },
              }),
                m.checkOn ||
                  (S.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value;
                  });
            }),
            (m.focusin = "onfocusin" in i);
          var bt = /^(?:focusinfocus|focusoutblur)$/,
            Tt = function (e) {
              e.stopPropagation();
            };
          S.extend(S.event, {
            trigger: function (e, t, n, r) {
              var s,
                o,
                a,
                l,
                c,
                d,
                u,
                p,
                h = [n || w],
                g = f.call(e, "type") ? e.type : e,
                m = f.call(e, "namespace") ? e.namespace.split(".") : [];
              if (
                ((o = p = a = n = n || w),
                3 !== n.nodeType &&
                  8 !== n.nodeType &&
                  !bt.test(g + S.event.triggered) &&
                  (g.indexOf(".") > -1 &&
                    ((m = g.split(".")), (g = m.shift()), m.sort()),
                  (c = g.indexOf(":") < 0 && "on" + g),
                  ((e = e[S.expando]
                    ? e
                    : new S.Event(g, "object" == typeof e && e)).isTrigger = r
                    ? 2
                    : 3),
                  (e.namespace = m.join(".")),
                  (e.rnamespace = e.namespace
                    ? new RegExp(
                        "(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      )
                    : null),
                  (e.result = void 0),
                  e.target || (e.target = n),
                  (t = null == t ? [e] : S.makeArray(t, [e])),
                  (u = S.event.special[g] || {}),
                  r || !u.trigger || !1 !== u.trigger.apply(n, t)))
              ) {
                if (!r && !u.noBubble && !y(n)) {
                  for (
                    l = u.delegateType || g,
                      bt.test(l + g) || (o = o.parentNode);
                    o;
                    o = o.parentNode
                  )
                    h.push(o), (a = o);
                  a === (n.ownerDocument || w) &&
                    h.push(a.defaultView || a.parentWindow || i);
                }
                for (s = 0; (o = h[s++]) && !e.isPropagationStopped(); )
                  (p = o),
                    (e.type = s > 1 ? l : u.bindType || g),
                    (d =
                      (J.get(o, "events") || Object.create(null))[e.type] &&
                      J.get(o, "handle")) && d.apply(o, t),
                    (d = c && o[c]) &&
                      d.apply &&
                      Q(o) &&
                      ((e.result = d.apply(o, t)),
                      !1 === e.result && e.preventDefault());
                return (
                  (e.type = g),
                  r ||
                    e.isDefaultPrevented() ||
                    (u._default && !1 !== u._default.apply(h.pop(), t)) ||
                    !Q(n) ||
                    (c &&
                      v(n[g]) &&
                      !y(n) &&
                      ((a = n[c]) && (n[c] = null),
                      (S.event.triggered = g),
                      e.isPropagationStopped() && p.addEventListener(g, Tt),
                      n[g](),
                      e.isPropagationStopped() && p.removeEventListener(g, Tt),
                      (S.event.triggered = void 0),
                      a && (n[c] = a))),
                  e.result
                );
              }
            },
            simulate: function (e, t, n) {
              var i = S.extend(new S.Event(), n, { type: e, isSimulated: !0 });
              S.event.trigger(i, null, t);
            },
          }),
            S.fn.extend({
              trigger: function (e, t) {
                return this.each(function () {
                  S.event.trigger(e, t, this);
                });
              },
              triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return S.event.trigger(e, t, n, !0);
              },
            }),
            m.focusin ||
              S.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                var n = function (e) {
                  S.event.simulate(t, e.target, S.event.fix(e));
                };
                S.event.special[t] = {
                  setup: function () {
                    var i = this.ownerDocument || this.document || this,
                      r = J.access(i, t);
                    r || i.addEventListener(e, n, !0),
                      J.access(i, t, (r || 0) + 1);
                  },
                  teardown: function () {
                    var i = this.ownerDocument || this.document || this,
                      r = J.access(i, t) - 1;
                    r
                      ? J.access(i, t, r)
                      : (i.removeEventListener(e, n, !0), J.remove(i, t));
                  },
                };
              });
          var Ct = i.location,
            St = { guid: Date.now() },
            Et = /\?/;
          S.parseXML = function (e) {
            var t, n;
            if (!e || "string" != typeof e) return null;
            try {
              t = new i.DOMParser().parseFromString(e, "text/xml");
            } catch (e) {}
            return (
              (n = t && t.getElementsByTagName("parsererror")[0]),
              (t && !n) ||
                S.error(
                  "Invalid XML: " +
                    (n
                      ? S.map(n.childNodes, function (e) {
                          return e.textContent;
                        }).join("\n")
                      : e)
                ),
              t
            );
          };
          var kt = /\[\]$/,
            Lt = /\r?\n/g,
            At = /^(?:submit|button|image|reset|file)$/i,
            Pt = /^(?:input|select|textarea|keygen)/i;
          function Mt(e, t, n, i) {
            var r;
            if (Array.isArray(t))
              S.each(t, function (t, r) {
                n || kt.test(e)
                  ? i(e, r)
                  : Mt(
                      e +
                        "[" +
                        ("object" == typeof r && null != r ? t : "") +
                        "]",
                      r,
                      n,
                      i
                    );
              });
            else if (n || "object" !== T(t)) i(e, t);
            else for (r in t) Mt(e + "[" + r + "]", t[r], n, i);
          }
          (S.param = function (e, t) {
            var n,
              i = [],
              r = function (e, t) {
                var n = v(t) ? t() : t;
                i[i.length] =
                  encodeURIComponent(e) +
                  "=" +
                  encodeURIComponent(null == n ? "" : n);
              };
            if (null == e) return "";
            if (Array.isArray(e) || (e.jquery && !S.isPlainObject(e)))
              S.each(e, function () {
                r(this.name, this.value);
              });
            else for (n in e) Mt(n, e[n], t, r);
            return i.join("&");
          }),
            S.fn.extend({
              serialize: function () {
                return S.param(this.serializeArray());
              },
              serializeArray: function () {
                return this.map(function () {
                  var e = S.prop(this, "elements");
                  return e ? S.makeArray(e) : this;
                })
                  .filter(function () {
                    var e = this.type;
                    return (
                      this.name &&
                      !S(this).is(":disabled") &&
                      Pt.test(this.nodeName) &&
                      !At.test(e) &&
                      (this.checked || !me.test(e))
                    );
                  })
                  .map(function (e, t) {
                    var n = S(this).val();
                    return null == n
                      ? null
                      : Array.isArray(n)
                      ? S.map(n, function (e) {
                          return { name: t.name, value: e.replace(Lt, "\r\n") };
                        })
                      : { name: t.name, value: n.replace(Lt, "\r\n") };
                  })
                  .get();
              },
            });
          var Dt = /%20/g,
            Nt = /#.*$/,
            Ot = /([?&])_=[^&]*/,
            $t = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            jt = /^(?:GET|HEAD)$/,
            It = /^\/\//,
            qt = {},
            zt = {},
            Ht = "*/".concat("*"),
            Wt = w.createElement("a");
          function _t(e) {
            return function (t, n) {
              "string" != typeof t && ((n = t), (t = "*"));
              var i,
                r = 0,
                s = t.toLowerCase().match(z) || [];
              if (v(n))
                for (; (i = s[r++]); )
                  "+" === i[0]
                    ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n))
                    : (e[i] = e[i] || []).push(n);
            };
          }
          function Bt(e, t, n, i) {
            var r = {},
              s = e === zt;
            function o(a) {
              var l;
              return (
                (r[a] = !0),
                S.each(e[a] || [], function (e, a) {
                  var c = a(t, n, i);
                  return "string" != typeof c || s || r[c]
                    ? s
                      ? !(l = c)
                      : void 0
                    : (t.dataTypes.unshift(c), o(c), !1);
                }),
                l
              );
            }
            return o(t.dataTypes[0]) || (!r["*"] && o("*"));
          }
          function Rt(e, t) {
            var n,
              i,
              r = S.ajaxSettings.flatOptions || {};
            for (n in t)
              void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
            return i && S.extend(!0, e, i), e;
          }
          (Wt.href = Ct.href),
            S.extend({
              active: 0,
              lastModified: {},
              etag: {},
              ajaxSettings: {
                url: Ct.href,
                type: "GET",
                isLocal:
                  /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                    Ct.protocol
                  ),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                  "*": Ht,
                  text: "text/plain",
                  html: "text/html",
                  xml: "application/xml, text/xml",
                  json: "application/json, text/javascript",
                },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: {
                  xml: "responseXML",
                  text: "responseText",
                  json: "responseJSON",
                },
                converters: {
                  "* text": String,
                  "text html": !0,
                  "text json": JSON.parse,
                  "text xml": S.parseXML,
                },
                flatOptions: { url: !0, context: !0 },
              },
              ajaxSetup: function (e, t) {
                return t ? Rt(Rt(e, S.ajaxSettings), t) : Rt(S.ajaxSettings, e);
              },
              ajaxPrefilter: _t(qt),
              ajaxTransport: _t(zt),
              ajax: function (e, t) {
                "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                var n,
                  r,
                  s,
                  o,
                  a,
                  l,
                  c,
                  d,
                  u,
                  p,
                  f = S.ajaxSetup({}, t),
                  h = f.context || f,
                  g = f.context && (h.nodeType || h.jquery) ? S(h) : S.event,
                  m = S.Deferred(),
                  v = S.Callbacks("once memory"),
                  y = f.statusCode || {},
                  x = {},
                  b = {},
                  T = "canceled",
                  C = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                      var t;
                      if (c) {
                        if (!o)
                          for (o = {}; (t = $t.exec(s)); )
                            o[t[1].toLowerCase() + " "] = (
                              o[t[1].toLowerCase() + " "] || []
                            ).concat(t[2]);
                        t = o[e.toLowerCase() + " "];
                      }
                      return null == t ? null : t.join(", ");
                    },
                    getAllResponseHeaders: function () {
                      return c ? s : null;
                    },
                    setRequestHeader: function (e, t) {
                      return (
                        null == c &&
                          ((e = b[e.toLowerCase()] = b[e.toLowerCase()] || e),
                          (x[e] = t)),
                        this
                      );
                    },
                    overrideMimeType: function (e) {
                      return null == c && (f.mimeType = e), this;
                    },
                    statusCode: function (e) {
                      var t;
                      if (e)
                        if (c) C.always(e[C.status]);
                        else for (t in e) y[t] = [y[t], e[t]];
                      return this;
                    },
                    abort: function (e) {
                      var t = e || T;
                      return n && n.abort(t), E(0, t), this;
                    },
                  };
                if (
                  (m.promise(C),
                  (f.url = ((e || f.url || Ct.href) + "").replace(
                    It,
                    Ct.protocol + "//"
                  )),
                  (f.type = t.method || t.type || f.method || f.type),
                  (f.dataTypes = (f.dataType || "*").toLowerCase().match(z) || [
                    "",
                  ]),
                  null == f.crossDomain)
                ) {
                  l = w.createElement("a");
                  try {
                    (l.href = f.url),
                      (l.href = l.href),
                      (f.crossDomain =
                        Wt.protocol + "//" + Wt.host !=
                        l.protocol + "//" + l.host);
                  } catch (e) {
                    f.crossDomain = !0;
                  }
                }
                if (
                  (f.data &&
                    f.processData &&
                    "string" != typeof f.data &&
                    (f.data = S.param(f.data, f.traditional)),
                  Bt(qt, f, t, C),
                  c)
                )
                  return C;
                for (u in ((d = S.event && f.global) &&
                  0 == S.active++ &&
                  S.event.trigger("ajaxStart"),
                (f.type = f.type.toUpperCase()),
                (f.hasContent = !jt.test(f.type)),
                (r = f.url.replace(Nt, "")),
                f.hasContent
                  ? f.data &&
                    f.processData &&
                    0 ===
                      (f.contentType || "").indexOf(
                        "application/x-www-form-urlencoded"
                      ) &&
                    (f.data = f.data.replace(Dt, "+"))
                  : ((p = f.url.slice(r.length)),
                    f.data &&
                      (f.processData || "string" == typeof f.data) &&
                      ((r += (Et.test(r) ? "&" : "?") + f.data), delete f.data),
                    !1 === f.cache &&
                      ((r = r.replace(Ot, "$1")),
                      (p = (Et.test(r) ? "&" : "?") + "_=" + St.guid++ + p)),
                    (f.url = r + p)),
                f.ifModified &&
                  (S.lastModified[r] &&
                    C.setRequestHeader("If-Modified-Since", S.lastModified[r]),
                  S.etag[r] && C.setRequestHeader("If-None-Match", S.etag[r])),
                ((f.data && f.hasContent && !1 !== f.contentType) ||
                  t.contentType) &&
                  C.setRequestHeader("Content-Type", f.contentType),
                C.setRequestHeader(
                  "Accept",
                  f.dataTypes[0] && f.accepts[f.dataTypes[0]]
                    ? f.accepts[f.dataTypes[0]] +
                        ("*" !== f.dataTypes[0] ? ", " + Ht + "; q=0.01" : "")
                    : f.accepts["*"]
                ),
                f.headers))
                  C.setRequestHeader(u, f.headers[u]);
                if (f.beforeSend && (!1 === f.beforeSend.call(h, C, f) || c))
                  return C.abort();
                if (
                  ((T = "abort"),
                  v.add(f.complete),
                  C.done(f.success),
                  C.fail(f.error),
                  (n = Bt(zt, f, t, C)))
                ) {
                  if (
                    ((C.readyState = 1), d && g.trigger("ajaxSend", [C, f]), c)
                  )
                    return C;
                  f.async &&
                    f.timeout > 0 &&
                    (a = i.setTimeout(function () {
                      C.abort("timeout");
                    }, f.timeout));
                  try {
                    (c = !1), n.send(x, E);
                  } catch (e) {
                    if (c) throw e;
                    E(-1, e);
                  }
                } else E(-1, "No Transport");
                function E(e, t, o, l) {
                  var u,
                    p,
                    w,
                    x,
                    b,
                    T = t;
                  c ||
                    ((c = !0),
                    a && i.clearTimeout(a),
                    (n = void 0),
                    (s = l || ""),
                    (C.readyState = e > 0 ? 4 : 0),
                    (u = (e >= 200 && e < 300) || 304 === e),
                    o &&
                      (x = (function (e, t, n) {
                        for (
                          var i, r, s, o, a = e.contents, l = e.dataTypes;
                          "*" === l[0];

                        )
                          l.shift(),
                            void 0 === i &&
                              (i =
                                e.mimeType ||
                                t.getResponseHeader("Content-Type"));
                        if (i)
                          for (r in a)
                            if (a[r] && a[r].test(i)) {
                              l.unshift(r);
                              break;
                            }
                        if (l[0] in n) s = l[0];
                        else {
                          for (r in n) {
                            if (!l[0] || e.converters[r + " " + l[0]]) {
                              s = r;
                              break;
                            }
                            o || (o = r);
                          }
                          s = s || o;
                        }
                        if (s) return s !== l[0] && l.unshift(s), n[s];
                      })(f, C, o)),
                    !u &&
                      S.inArray("script", f.dataTypes) > -1 &&
                      S.inArray("json", f.dataTypes) < 0 &&
                      (f.converters["text script"] = function () {}),
                    (x = (function (e, t, n, i) {
                      var r,
                        s,
                        o,
                        a,
                        l,
                        c = {},
                        d = e.dataTypes.slice();
                      if (d[1])
                        for (o in e.converters)
                          c[o.toLowerCase()] = e.converters[o];
                      for (s = d.shift(); s; )
                        if (
                          (e.responseFields[s] && (n[e.responseFields[s]] = t),
                          !l &&
                            i &&
                            e.dataFilter &&
                            (t = e.dataFilter(t, e.dataType)),
                          (l = s),
                          (s = d.shift()))
                        )
                          if ("*" === s) s = l;
                          else if ("*" !== l && l !== s) {
                            if (!(o = c[l + " " + s] || c["* " + s]))
                              for (r in c)
                                if (
                                  (a = r.split(" "))[1] === s &&
                                  (o = c[l + " " + a[0]] || c["* " + a[0]])
                                ) {
                                  !0 === o
                                    ? (o = c[r])
                                    : !0 !== c[r] &&
                                      ((s = a[0]), d.unshift(a[1]));
                                  break;
                                }
                            if (!0 !== o)
                              if (o && e.throws) t = o(t);
                              else
                                try {
                                  t = o(t);
                                } catch (e) {
                                  return {
                                    state: "parsererror",
                                    error: o
                                      ? e
                                      : "No conversion from " + l + " to " + s,
                                  };
                                }
                          }
                      return { state: "success", data: t };
                    })(f, x, C, u)),
                    u
                      ? (f.ifModified &&
                          ((b = C.getResponseHeader("Last-Modified")) &&
                            (S.lastModified[r] = b),
                          (b = C.getResponseHeader("etag")) && (S.etag[r] = b)),
                        204 === e || "HEAD" === f.type
                          ? (T = "nocontent")
                          : 304 === e
                          ? (T = "notmodified")
                          : ((T = x.state), (p = x.data), (u = !(w = x.error))))
                      : ((w = T),
                        (!e && T) || ((T = "error"), e < 0 && (e = 0))),
                    (C.status = e),
                    (C.statusText = (t || T) + ""),
                    u
                      ? m.resolveWith(h, [p, T, C])
                      : m.rejectWith(h, [C, T, w]),
                    C.statusCode(y),
                    (y = void 0),
                    d &&
                      g.trigger(u ? "ajaxSuccess" : "ajaxError", [
                        C,
                        f,
                        u ? p : w,
                      ]),
                    v.fireWith(h, [C, T]),
                    d &&
                      (g.trigger("ajaxComplete", [C, f]),
                      --S.active || S.event.trigger("ajaxStop")));
                }
                return C;
              },
              getJSON: function (e, t, n) {
                return S.get(e, t, n, "json");
              },
              getScript: function (e, t) {
                return S.get(e, void 0, t, "script");
              },
            }),
            S.each(["get", "post"], function (e, t) {
              S[t] = function (e, n, i, r) {
                return (
                  v(n) && ((r = r || i), (i = n), (n = void 0)),
                  S.ajax(
                    S.extend(
                      { url: e, type: t, dataType: r, data: n, success: i },
                      S.isPlainObject(e) && e
                    )
                  )
                );
              };
            }),
            S.ajaxPrefilter(function (e) {
              var t;
              for (t in e.headers)
                "content-type" === t.toLowerCase() &&
                  (e.contentType = e.headers[t] || "");
            }),
            (S._evalUrl = function (e, t, n) {
              return S.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () {} },
                dataFilter: function (e) {
                  S.globalEval(e, t, n);
                },
              });
            }),
            S.fn.extend({
              wrapAll: function (e) {
                var t;
                return (
                  this[0] &&
                    (v(e) && (e = e.call(this[0])),
                    (t = S(e, this[0].ownerDocument).eq(0).clone(!0)),
                    this[0].parentNode && t.insertBefore(this[0]),
                    t
                      .map(function () {
                        for (var e = this; e.firstElementChild; )
                          e = e.firstElementChild;
                        return e;
                      })
                      .append(this)),
                  this
                );
              },
              wrapInner: function (e) {
                return v(e)
                  ? this.each(function (t) {
                      S(this).wrapInner(e.call(this, t));
                    })
                  : this.each(function () {
                      var t = S(this),
                        n = t.contents();
                      n.length ? n.wrapAll(e) : t.append(e);
                    });
              },
              wrap: function (e) {
                var t = v(e);
                return this.each(function (n) {
                  S(this).wrapAll(t ? e.call(this, n) : e);
                });
              },
              unwrap: function (e) {
                return (
                  this.parent(e)
                    .not("body")
                    .each(function () {
                      S(this).replaceWith(this.childNodes);
                    }),
                  this
                );
              },
            }),
            (S.expr.pseudos.hidden = function (e) {
              return !S.expr.pseudos.visible(e);
            }),
            (S.expr.pseudos.visible = function (e) {
              return !!(
                e.offsetWidth ||
                e.offsetHeight ||
                e.getClientRects().length
              );
            }),
            (S.ajaxSettings.xhr = function () {
              try {
                return new i.XMLHttpRequest();
              } catch (e) {}
            });
          var Ft = { 0: 200, 1223: 204 },
            Gt = S.ajaxSettings.xhr();
          (m.cors = !!Gt && "withCredentials" in Gt),
            (m.ajax = Gt = !!Gt),
            S.ajaxTransport(function (e) {
              var t, n;
              if (m.cors || (Gt && !e.crossDomain))
                return {
                  send: function (r, s) {
                    var o,
                      a = e.xhr();
                    if (
                      (a.open(e.type, e.url, e.async, e.username, e.password),
                      e.xhrFields)
                    )
                      for (o in e.xhrFields) a[o] = e.xhrFields[o];
                    for (o in (e.mimeType &&
                      a.overrideMimeType &&
                      a.overrideMimeType(e.mimeType),
                    e.crossDomain ||
                      r["X-Requested-With"] ||
                      (r["X-Requested-With"] = "XMLHttpRequest"),
                    r))
                      a.setRequestHeader(o, r[o]);
                    (t = function (e) {
                      return function () {
                        t &&
                          ((t =
                            n =
                            a.onload =
                            a.onerror =
                            a.onabort =
                            a.ontimeout =
                            a.onreadystatechange =
                              null),
                          "abort" === e
                            ? a.abort()
                            : "error" === e
                            ? "number" != typeof a.status
                              ? s(0, "error")
                              : s(a.status, a.statusText)
                            : s(
                                Ft[a.status] || a.status,
                                a.statusText,
                                "text" !== (a.responseType || "text") ||
                                  "string" != typeof a.responseText
                                  ? { binary: a.response }
                                  : { text: a.responseText },
                                a.getAllResponseHeaders()
                              ));
                      };
                    }),
                      (a.onload = t()),
                      (n = a.onerror = a.ontimeout = t("error")),
                      void 0 !== a.onabort
                        ? (a.onabort = n)
                        : (a.onreadystatechange = function () {
                            4 === a.readyState &&
                              i.setTimeout(function () {
                                t && n();
                              });
                          }),
                      (t = t("abort"));
                    try {
                      a.send((e.hasContent && e.data) || null);
                    } catch (e) {
                      if (t) throw e;
                    }
                  },
                  abort: function () {
                    t && t();
                  },
                };
            }),
            S.ajaxPrefilter(function (e) {
              e.crossDomain && (e.contents.script = !1);
            }),
            S.ajaxSetup({
              accepts: {
                script:
                  "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
              },
              contents: { script: /\b(?:java|ecma)script\b/ },
              converters: {
                "text script": function (e) {
                  return S.globalEval(e), e;
                },
              },
            }),
            S.ajaxPrefilter("script", function (e) {
              void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET");
            }),
            S.ajaxTransport("script", function (e) {
              var t, n;
              if (e.crossDomain || e.scriptAttrs)
                return {
                  send: function (i, r) {
                    (t = S("<script>")
                      .attr(e.scriptAttrs || {})
                      .prop({ charset: e.scriptCharset, src: e.url })
                      .on(
                        "load error",
                        (n = function (e) {
                          t.remove(),
                            (n = null),
                            e && r("error" === e.type ? 404 : 200, e.type);
                        })
                      )),
                      w.head.appendChild(t[0]);
                  },
                  abort: function () {
                    n && n();
                  },
                };
            });
          var Vt,
            Xt = [],
            Yt = /(=)\?(?=&|$)|\?\?/;
          S.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
              var e = Xt.pop() || S.expando + "_" + St.guid++;
              return (this[e] = !0), e;
            },
          }),
            S.ajaxPrefilter("json jsonp", function (e, t, n) {
              var r,
                s,
                o,
                a =
                  !1 !== e.jsonp &&
                  (Yt.test(e.url)
                    ? "url"
                    : "string" == typeof e.data &&
                      0 ===
                        (e.contentType || "").indexOf(
                          "application/x-www-form-urlencoded"
                        ) &&
                      Yt.test(e.data) &&
                      "data");
              if (a || "jsonp" === e.dataTypes[0])
                return (
                  (r = e.jsonpCallback =
                    v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                  a
                    ? (e[a] = e[a].replace(Yt, "$1" + r))
                    : !1 !== e.jsonp &&
                      (e.url +=
                        (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                  (e.converters["script json"] = function () {
                    return o || S.error(r + " was not called"), o[0];
                  }),
                  (e.dataTypes[0] = "json"),
                  (s = i[r]),
                  (i[r] = function () {
                    o = arguments;
                  }),
                  n.always(function () {
                    void 0 === s ? S(i).removeProp(r) : (i[r] = s),
                      e[r] && ((e.jsonpCallback = t.jsonpCallback), Xt.push(r)),
                      o && v(s) && s(o[0]),
                      (o = s = void 0);
                  }),
                  "script"
                );
            }),
            (m.createHTMLDocument =
              (((Vt = w.implementation.createHTMLDocument("").body).innerHTML =
                "<form></form><form></form>"),
              2 === Vt.childNodes.length)),
            (S.parseHTML = function (e, t, n) {
              return "string" != typeof e
                ? []
                : ("boolean" == typeof t && ((n = t), (t = !1)),
                  t ||
                    (m.createHTMLDocument
                      ? (((i = (t =
                          w.implementation.createHTMLDocument(
                            ""
                          )).createElement("base")).href = w.location.href),
                        t.head.appendChild(i))
                      : (t = w)),
                  (s = !n && []),
                  (r = D.exec(e))
                    ? [t.createElement(r[1])]
                    : ((r = Ce([e], t, s)),
                      s && s.length && S(s).remove(),
                      S.merge([], r.childNodes)));
              var i, r, s;
            }),
            (S.fn.load = function (e, t, n) {
              var i,
                r,
                s,
                o = this,
                a = e.indexOf(" ");
              return (
                a > -1 && ((i = vt(e.slice(a))), (e = e.slice(0, a))),
                v(t)
                  ? ((n = t), (t = void 0))
                  : t && "object" == typeof t && (r = "POST"),
                o.length > 0 &&
                  S.ajax({
                    url: e,
                    type: r || "GET",
                    dataType: "html",
                    data: t,
                  })
                    .done(function (e) {
                      (s = arguments),
                        o.html(
                          i ? S("<div>").append(S.parseHTML(e)).find(i) : e
                        );
                    })
                    .always(
                      n &&
                        function (e, t) {
                          o.each(function () {
                            n.apply(this, s || [e.responseText, t, e]);
                          });
                        }
                    ),
                this
              );
            }),
            (S.expr.pseudos.animated = function (e) {
              return S.grep(S.timers, function (t) {
                return e === t.elem;
              }).length;
            }),
            (S.offset = {
              setOffset: function (e, t, n) {
                var i,
                  r,
                  s,
                  o,
                  a,
                  l,
                  c = S.css(e, "position"),
                  d = S(e),
                  u = {};
                "static" === c && (e.style.position = "relative"),
                  (a = d.offset()),
                  (s = S.css(e, "top")),
                  (l = S.css(e, "left")),
                  ("absolute" === c || "fixed" === c) &&
                  (s + l).indexOf("auto") > -1
                    ? ((o = (i = d.position()).top), (r = i.left))
                    : ((o = parseFloat(s) || 0), (r = parseFloat(l) || 0)),
                  v(t) && (t = t.call(e, n, S.extend({}, a))),
                  null != t.top && (u.top = t.top - a.top + o),
                  null != t.left && (u.left = t.left - a.left + r),
                  "using" in t ? t.using.call(e, u) : d.css(u);
              },
            }),
            S.fn.extend({
              offset: function (e) {
                if (arguments.length)
                  return void 0 === e
                    ? this
                    : this.each(function (t) {
                        S.offset.setOffset(this, e, t);
                      });
                var t,
                  n,
                  i = this[0];
                return i
                  ? i.getClientRects().length
                    ? ((t = i.getBoundingClientRect()),
                      (n = i.ownerDocument.defaultView),
                      {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset,
                      })
                    : { top: 0, left: 0 }
                  : void 0;
              },
              position: function () {
                if (this[0]) {
                  var e,
                    t,
                    n,
                    i = this[0],
                    r = { top: 0, left: 0 };
                  if ("fixed" === S.css(i, "position"))
                    t = i.getBoundingClientRect();
                  else {
                    for (
                      t = this.offset(),
                        n = i.ownerDocument,
                        e = i.offsetParent || n.documentElement;
                      e &&
                      (e === n.body || e === n.documentElement) &&
                      "static" === S.css(e, "position");

                    )
                      e = e.parentNode;
                    e &&
                      e !== i &&
                      1 === e.nodeType &&
                      (((r = S(e).offset()).top += S.css(
                        e,
                        "borderTopWidth",
                        !0
                      )),
                      (r.left += S.css(e, "borderLeftWidth", !0)));
                  }
                  return {
                    top: t.top - r.top - S.css(i, "marginTop", !0),
                    left: t.left - r.left - S.css(i, "marginLeft", !0),
                  };
                }
              },
              offsetParent: function () {
                return this.map(function () {
                  for (
                    var e = this.offsetParent;
                    e && "static" === S.css(e, "position");

                  )
                    e = e.offsetParent;
                  return e || oe;
                });
              },
            }),
            S.each(
              { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
              function (e, t) {
                var n = "pageYOffset" === t;
                S.fn[e] = function (i) {
                  return G(
                    this,
                    function (e, i, r) {
                      var s;
                      if (
                        (y(e)
                          ? (s = e)
                          : 9 === e.nodeType && (s = e.defaultView),
                        void 0 === r)
                      )
                        return s ? s[t] : e[i];
                      s
                        ? s.scrollTo(
                            n ? s.pageXOffset : r,
                            n ? r : s.pageYOffset
                          )
                        : (e[i] = r);
                    },
                    e,
                    i,
                    arguments.length
                  );
                };
              }
            ),
            S.each(["top", "left"], function (e, t) {
              S.cssHooks[t] = Ge(m.pixelPosition, function (e, n) {
                if (n)
                  return (
                    (n = Fe(e, t)), We.test(n) ? S(e).position()[t] + "px" : n
                  );
              });
            }),
            S.each({ Height: "height", Width: "width" }, function (e, t) {
              S.each(
                { padding: "inner" + e, content: t, "": "outer" + e },
                function (n, i) {
                  S.fn[i] = function (r, s) {
                    var o = arguments.length && (n || "boolean" != typeof r),
                      a = n || (!0 === r || !0 === s ? "margin" : "border");
                    return G(
                      this,
                      function (t, n, r) {
                        var s;
                        return y(t)
                          ? 0 === i.indexOf("outer")
                            ? t["inner" + e]
                            : t.document.documentElement["client" + e]
                          : 9 === t.nodeType
                          ? ((s = t.documentElement),
                            Math.max(
                              t.body["scroll" + e],
                              s["scroll" + e],
                              t.body["offset" + e],
                              s["offset" + e],
                              s["client" + e]
                            ))
                          : void 0 === r
                          ? S.css(t, n, a)
                          : S.style(t, n, r, a);
                      },
                      t,
                      o ? r : void 0,
                      o
                    );
                  };
                }
              );
            }),
            S.each(
              [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend",
              ],
              function (e, t) {
                S.fn[t] = function (e) {
                  return this.on(t, e);
                };
              }
            ),
            S.fn.extend({
              bind: function (e, t, n) {
                return this.on(e, null, t, n);
              },
              unbind: function (e, t) {
                return this.off(e, null, t);
              },
              delegate: function (e, t, n, i) {
                return this.on(t, e, n, i);
              },
              undelegate: function (e, t, n) {
                return 1 === arguments.length
                  ? this.off(e, "**")
                  : this.off(t, e || "**", n);
              },
              hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
              },
            }),
            S.each(
              "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                " "
              ),
              function (e, t) {
                S.fn[t] = function (e, n) {
                  return arguments.length > 0
                    ? this.on(t, null, e, n)
                    : this.trigger(t);
                };
              }
            );
          var Ut = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
          (S.proxy = function (e, t) {
            var n, i, r;
            if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), v(e)))
              return (
                (i = a.call(arguments, 2)),
                (r = function () {
                  return e.apply(t || this, i.concat(a.call(arguments)));
                }),
                (r.guid = e.guid = e.guid || S.guid++),
                r
              );
          }),
            (S.holdReady = function (e) {
              e ? S.readyWait++ : S.ready(!0);
            }),
            (S.isArray = Array.isArray),
            (S.parseJSON = JSON.parse),
            (S.nodeName = M),
            (S.isFunction = v),
            (S.isWindow = y),
            (S.camelCase = U),
            (S.type = T),
            (S.now = Date.now),
            (S.isNumeric = function (e) {
              var t = S.type(e);
              return (
                ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
              );
            }),
            (S.trim = function (e) {
              return null == e ? "" : (e + "").replace(Ut, "");
            }),
            void 0 ===
              (n = function () {
                return S;
              }.apply(t, [])) || (e.exports = n);
          var Qt = i.jQuery,
            Kt = i.$;
          return (
            (S.noConflict = function (e) {
              return (
                i.$ === S && (i.$ = Kt),
                e && i.jQuery === S && (i.jQuery = Qt),
                S
              );
            }),
            void 0 === r && (i.jQuery = i.$ = S),
            S
          );
        });
      },
      641: (e, t, n) => {
        var i, r, s;
        (r = [n(755)]),
          void 0 ===
            (s =
              "function" ==
              typeof (i = function (e) {
                return (
                  (e.fn.tilt = function (t) {
                    const n = function () {
                        this.ticking ||
                          (requestAnimationFrame(d.bind(this)),
                          (this.ticking = !0));
                      },
                      i = function () {
                        const t = this;
                        e(this).on("mousemove", a),
                          e(this).on("mouseenter", s),
                          this.settings.reset && e(this).on("mouseleave", l),
                          this.settings.glare &&
                            e(window).on("resize", p.bind(t));
                      },
                      r = function () {
                        void 0 !== this.timeout && clearTimeout(this.timeout),
                          e(this).css({
                            transition: `${this.settings.speed}ms ${this.settings.easing}`,
                          }),
                          this.settings.glare &&
                            this.glareElement.css({
                              transition: `opacity ${this.settings.speed}ms ${this.settings.easing}`,
                            }),
                          (this.timeout = setTimeout(() => {
                            e(this).css({ transition: "" }),
                              this.settings.glare &&
                                this.glareElement.css({ transition: "" });
                          }, this.settings.speed));
                      },
                      s = function (t) {
                        (this.ticking = !1),
                          e(this).css({ "will-change": "transform" }),
                          r.call(this),
                          e(this).trigger("tilt.mouseEnter");
                      },
                      o = function (t) {
                        return (
                          void 0 === t &&
                            (t = {
                              pageX:
                                e(this).offset().left +
                                e(this).outerWidth() / 2,
                              pageY:
                                e(this).offset().top +
                                e(this).outerHeight() / 2,
                            }),
                          { x: t.pageX, y: t.pageY }
                        );
                      },
                      a = function (e) {
                        (this.mousePositions = o(e)), n.call(this);
                      },
                      l = function () {
                        r.call(this),
                          (this.reset = !0),
                          n.call(this),
                          e(this).trigger("tilt.mouseLeave");
                      },
                      c = function () {
                        const t = e(this).outerWidth(),
                          n = e(this).outerHeight(),
                          i = e(this).offset().left,
                          r = e(this).offset().top,
                          s = (this.mousePositions.x - i) / t,
                          o = (this.mousePositions.y - r) / n;
                        return {
                          tiltX: (
                            this.settings.maxTilt / 2 -
                            s * this.settings.maxTilt
                          ).toFixed(2),
                          tiltY: (
                            o * this.settings.maxTilt -
                            this.settings.maxTilt / 2
                          ).toFixed(2),
                          percentageX: 100 * s,
                          percentageY: 100 * o,
                          angle:
                            Math.atan2(
                              this.mousePositions.x - (i + t / 2),
                              -(this.mousePositions.y - (r + n / 2))
                            ) *
                            (180 / Math.PI),
                        };
                      },
                      d = function () {
                        if (((this.transforms = c.call(this)), this.reset))
                          return (
                            (this.reset = !1),
                            e(this).css(
                              "transform",
                              `perspective(${this.settings.perspective}px) rotateX(0deg) rotateY(0deg)`
                            ),
                            void (
                              this.settings.glare &&
                              (this.glareElement.css(
                                "transform",
                                "rotate(180deg) translate(-50%, -50%)"
                              ),
                              this.glareElement.css("opacity", "0"))
                            )
                          );
                        e(this).css(
                          "transform",
                          `perspective(${
                            this.settings.perspective
                          }px) rotateX(${
                            "x" === this.settings.disableAxis
                              ? 0
                              : this.transforms.tiltY
                          }deg) rotateY(${
                            "y" === this.settings.disableAxis
                              ? 0
                              : this.transforms.tiltX
                          }deg) scale3d(${this.settings.scale},${
                            this.settings.scale
                          },${this.settings.scale})`
                        ),
                          this.settings.glare &&
                            (this.glareElement.css(
                              "transform",
                              `rotate(${this.transforms.angle}deg) translate(-50%, -50%)`
                            ),
                            this.glareElement.css(
                              "opacity",
                              "" +
                                (this.transforms.percentageY *
                                  this.settings.maxGlare) /
                                  100
                            )),
                          e(this).trigger("change", [this.transforms]),
                          (this.ticking = !1);
                      },
                      u = function () {
                        const t = this.settings.glarePrerender;
                        if (
                          (t ||
                            e(this).append(
                              '<div class="js-tilt-glare"><div class="js-tilt-glare-inner"></div></div>'
                            ),
                          (this.glareElementWrapper =
                            e(this).find(".js-tilt-glare")),
                          (this.glareElement = e(this).find(
                            ".js-tilt-glare-inner"
                          )),
                          t)
                        )
                          return;
                        const n = {
                          position: "absolute",
                          top: "0",
                          left: "0",
                          width: "100%",
                          height: "100%",
                        };
                        this.glareElementWrapper
                          .css(n)
                          .css({
                            overflow: "hidden",
                            "pointer-events": "none",
                          }),
                          this.glareElement.css({
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            "background-image":
                              "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
                            width: "" + 2 * e(this).outerWidth(),
                            height: "" + 2 * e(this).outerWidth(),
                            transform: "rotate(180deg) translate(-50%, -50%)",
                            "transform-origin": "0% 0%",
                            opacity: "0",
                          });
                      },
                      p = function () {
                        this.glareElement.css({
                          width: "" + 2 * e(this).outerWidth(),
                          height: "" + 2 * e(this).outerWidth(),
                        });
                      };
                    return (
                      (e.fn.tilt.destroy = function () {
                        e(this).each(function () {
                          e(this).find(".js-tilt-glare").remove(),
                            e(this).css({ "will-change": "", transform: "" }),
                            e(this).off("mousemove mouseenter mouseleave");
                        });
                      }),
                      (e.fn.tilt.getValues = function () {
                        const t = [];
                        return (
                          e(this).each(function () {
                            (this.mousePositions = o.call(this)),
                              t.push(c.call(this));
                          }),
                          t
                        );
                      }),
                      (e.fn.tilt.reset = function () {
                        e(this).each(function () {
                          (this.mousePositions = o.call(this)),
                            (this.settings = e(this).data("settings")),
                            l.call(this),
                            setTimeout(() => {
                              this.reset = !1;
                            }, this.settings.transition);
                        });
                      }),
                      this.each(function () {
                        (this.settings = e.extend(
                          {
                            maxTilt: e(this).is("[data-tilt-max]")
                              ? e(this).data("tilt-max")
                              : 20,
                            perspective: e(this).is("[data-tilt-perspective]")
                              ? e(this).data("tilt-perspective")
                              : 300,
                            easing: e(this).is("[data-tilt-easing]")
                              ? e(this).data("tilt-easing")
                              : "cubic-bezier(.03,.98,.52,.99)",
                            scale: e(this).is("[data-tilt-scale]")
                              ? e(this).data("tilt-scale")
                              : "1",
                            speed: e(this).is("[data-tilt-speed]")
                              ? e(this).data("tilt-speed")
                              : "400",
                            transition:
                              !e(this).is("[data-tilt-transition]") ||
                              e(this).data("tilt-transition"),
                            disableAxis: e(this).is("[data-tilt-disable-axis]")
                              ? e(this).data("tilt-disable-axis")
                              : null,
                            axis: e(this).is("[data-tilt-axis]")
                              ? e(this).data("tilt-axis")
                              : null,
                            reset:
                              !e(this).is("[data-tilt-reset]") ||
                              e(this).data("tilt-reset"),
                            glare:
                              !!e(this).is("[data-tilt-glare]") &&
                              e(this).data("tilt-glare"),
                            maxGlare: e(this).is("[data-tilt-maxglare]")
                              ? e(this).data("tilt-maxglare")
                              : 1,
                          },
                          t
                        )),
                          null !== this.settings.axis &&
                            (console.warn(
                              "Tilt.js: the axis setting has been renamed to disableAxis. See https://github.com/gijsroge/tilt.js/pull/26 for more information"
                            ),
                            (this.settings.disableAxis = this.settings.axis)),
                          (this.init = () => {
                            e(this).data("settings", this.settings),
                              this.settings.glare && u.call(this),
                              i.call(this);
                          }),
                          this.init();
                      })
                    );
                  }),
                  e("[data-tilt]").tilt(),
                  !0
                );
              })
                ? i.apply(t, r)
                : i) || (e.exports = s);
      },
    },
    t = {};
  function n(i) {
    var r = t[i];
    if (void 0 !== r) return r.exports;
    var s = (t[i] = { exports: {} });
    return e[i].call(s.exports, s, s.exports, n), s.exports;
  }
  (() => {
    "use strict";
    let e = {
      Android: function () {
        return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
      },
      any: function () {
        return (
          e.Android() || e.BlackBerry() || e.iOS() || e.Opera() || e.Windows()
        );
      },
    };
    let t = !0,
      i = (e = 500) => {
        let n = document.querySelector("body");
        if (t) {
          let i = document.querySelectorAll("[data-lp]");
          setTimeout(() => {
            for (let e = 0; e < i.length; e++) {
              i[e].style.paddingRight = "0px";
            }
            (n.style.paddingRight = "0px"),
              document.documentElement.classList.remove("lock");
          }, e),
            (t = !1),
            setTimeout(function () {
              t = !0;
            }, e);
        }
      },
      r = (e = 500) => {
        let n = document.querySelector("body");
        if (t) {
          let i = document.querySelectorAll("[data-lp]");
          for (let e = 0; e < i.length; e++) {
            i[e].style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px";
          }
          (n.style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px"),
            document.documentElement.classList.add("lock"),
            (t = !1),
            setTimeout(function () {
              t = !0;
            }, e);
        }
      };
    function s(e) {
      setTimeout(() => {
        window.FLS && console.log(e);
      }, 0);
    }
    function o(e) {
      return e.filter(function (e, t, n) {
        return n.indexOf(e) === t;
      });
    }
    let a = (e, t = !1, n = 500, r = 0) => {
      const o = document.querySelector(e);
      if (o) {
        let a = "",
          l = 0;
        t &&
          ((a = "header.header"), (l = document.querySelector(a).offsetHeight));
        let c = {
          speedAsDuration: !0,
          speed: n,
          header: a,
          offset: r,
          easing: "easeOutQuad",
        };
        if (
          (document.documentElement.classList.contains("menu-open") &&
            (i(), document.documentElement.classList.remove("menu-open")),
          "undefined" != typeof SmoothScroll)
        )
          new SmoothScroll().animateScroll(o, "", c);
        else {
          let e = o.getBoundingClientRect().top + scrollY;
          window.scrollTo({ top: l ? e - l : e, behavior: "smooth" });
        }
        s(`[gotoBlock]: Юхуу...едем к ${e}`);
      } else s(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${e}`);
    };
    function l(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function c(e = {}, t = {}) {
      Object.keys(t).forEach((n) => {
        void 0 === e[n]
          ? (e[n] = t[n])
          : l(t[n]) && l(e[n]) && Object.keys(t[n]).length > 0 && c(e[n], t[n]);
      });
    }
    const d = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: { blur() {}, nodeName: "" },
      querySelector: () => null,
      querySelectorAll: () => [],
      getElementById: () => null,
      createEvent: () => ({ initEvent() {} }),
      createElement: () => ({
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName: () => [],
      }),
      createElementNS: () => ({}),
      importNode: () => null,
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
    };
    function u() {
      const e = "undefined" != typeof document ? document : {};
      return c(e, d), e;
    }
    const p = {
      document: d,
      navigator: { userAgent: "" },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
      history: { replaceState() {}, pushState() {}, go() {}, back() {} },
      CustomEvent: function () {
        return this;
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle: () => ({ getPropertyValue: () => "" }),
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia: () => ({}),
      requestAnimationFrame: (e) =>
        "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
      cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      },
    };
    function f() {
      const e = "undefined" != typeof window ? window : {};
      return c(e, p), e;
    }
    class h extends Array {
      constructor(e) {
        "number" == typeof e
          ? super(e)
          : (super(...(e || [])),
            (function (e) {
              const t = e.__proto__;
              Object.defineProperty(e, "__proto__", {
                get: () => t,
                set(e) {
                  t.__proto__ = e;
                },
              });
            })(this));
      }
    }
    function g(e = []) {
      const t = [];
      return (
        e.forEach((e) => {
          Array.isArray(e) ? t.push(...g(e)) : t.push(e);
        }),
        t
      );
    }
    function m(e, t) {
      return Array.prototype.filter.call(e, t);
    }
    function v(e, t) {
      const n = f(),
        i = u();
      let r = [];
      if (!t && e instanceof h) return e;
      if (!e) return new h(r);
      if ("string" == typeof e) {
        const n = e.trim();
        if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
          let e = "div";
          0 === n.indexOf("<li") && (e = "ul"),
            0 === n.indexOf("<tr") && (e = "tbody"),
            (0 !== n.indexOf("<td") && 0 !== n.indexOf("<th")) || (e = "tr"),
            0 === n.indexOf("<tbody") && (e = "table"),
            0 === n.indexOf("<option") && (e = "select");
          const t = i.createElement(e);
          t.innerHTML = n;
          for (let e = 0; e < t.childNodes.length; e += 1)
            r.push(t.childNodes[e]);
        } else
          r = (function (e, t) {
            if ("string" != typeof e) return [e];
            const n = [],
              i = t.querySelectorAll(e);
            for (let e = 0; e < i.length; e += 1) n.push(i[e]);
            return n;
          })(e.trim(), t || i);
      } else if (e.nodeType || e === n || e === i) r.push(e);
      else if (Array.isArray(e)) {
        if (e instanceof h) return e;
        r = e;
      }
      return new h(
        (function (e) {
          const t = [];
          for (let n = 0; n < e.length; n += 1)
            -1 === t.indexOf(e[n]) && t.push(e[n]);
          return t;
        })(r)
      );
    }
    v.fn = h.prototype;
    const y = "resize scroll".split(" ");
    function w(e) {
      return function (...t) {
        if (void 0 === t[0]) {
          for (let t = 0; t < this.length; t += 1)
            y.indexOf(e) < 0 &&
              (e in this[t] ? this[t][e]() : v(this[t]).trigger(e));
          return this;
        }
        return this.on(e, ...t);
      };
    }
    w("click"),
      w("blur"),
      w("focus"),
      w("focusin"),
      w("focusout"),
      w("keyup"),
      w("keydown"),
      w("keypress"),
      w("submit"),
      w("change"),
      w("mousedown"),
      w("mousemove"),
      w("mouseup"),
      w("mouseenter"),
      w("mouseleave"),
      w("mouseout"),
      w("mouseover"),
      w("touchstart"),
      w("touchend"),
      w("touchmove"),
      w("resize"),
      w("scroll");
    const x = {
      addClass: function (...e) {
        const t = g(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.add(...t);
          }),
          this
        );
      },
      removeClass: function (...e) {
        const t = g(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.remove(...t);
          }),
          this
        );
      },
      hasClass: function (...e) {
        const t = g(e.map((e) => e.split(" ")));
        return (
          m(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
            .length > 0
        );
      },
      toggleClass: function (...e) {
        const t = g(e.map((e) => e.split(" ")));
        this.forEach((e) => {
          t.forEach((t) => {
            e.classList.toggle(t);
          });
        });
      },
      attr: function (e, t) {
        if (1 === arguments.length && "string" == typeof e)
          return this[0] ? this[0].getAttribute(e) : void 0;
        for (let n = 0; n < this.length; n += 1)
          if (2 === arguments.length) this[n].setAttribute(e, t);
          else
            for (const t in e)
              (this[n][t] = e[t]), this[n].setAttribute(t, e[t]);
        return this;
      },
      removeAttr: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
        return this;
      },
      transform: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
        return this;
      },
      transition: function (e) {
        for (let t = 0; t < this.length; t += 1)
          this[t].style.transitionDuration =
            "string" != typeof e ? `${e}ms` : e;
        return this;
      },
      on: function (...e) {
        let [t, n, i, r] = e;
        function s(e) {
          const t = e.target;
          if (!t) return;
          const r = e.target.dom7EventData || [];
          if ((r.indexOf(e) < 0 && r.unshift(e), v(t).is(n))) i.apply(t, r);
          else {
            const e = v(t).parents();
            for (let t = 0; t < e.length; t += 1)
              v(e[t]).is(n) && i.apply(e[t], r);
          }
        }
        function o(e) {
          const t = (e && e.target && e.target.dom7EventData) || [];
          t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t);
        }
        "function" == typeof e[1] && (([t, i, r] = e), (n = void 0)),
          r || (r = !1);
        const a = t.split(" ");
        let l;
        for (let e = 0; e < this.length; e += 1) {
          const t = this[e];
          if (n)
            for (l = 0; l < a.length; l += 1) {
              const e = a[l];
              t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                t.dom7LiveListeners[e].push({ listener: i, proxyListener: s }),
                t.addEventListener(e, s, r);
            }
          else
            for (l = 0; l < a.length; l += 1) {
              const e = a[l];
              t.dom7Listeners || (t.dom7Listeners = {}),
                t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                t.dom7Listeners[e].push({ listener: i, proxyListener: o }),
                t.addEventListener(e, o, r);
            }
        }
        return this;
      },
      off: function (...e) {
        let [t, n, i, r] = e;
        "function" == typeof e[1] && (([t, i, r] = e), (n = void 0)),
          r || (r = !1);
        const s = t.split(" ");
        for (let e = 0; e < s.length; e += 1) {
          const t = s[e];
          for (let e = 0; e < this.length; e += 1) {
            const s = this[e];
            let o;
            if (
              (!n && s.dom7Listeners
                ? (o = s.dom7Listeners[t])
                : n && s.dom7LiveListeners && (o = s.dom7LiveListeners[t]),
              o && o.length)
            )
              for (let e = o.length - 1; e >= 0; e -= 1) {
                const n = o[e];
                (i && n.listener === i) ||
                (i &&
                  n.listener &&
                  n.listener.dom7proxy &&
                  n.listener.dom7proxy === i)
                  ? (s.removeEventListener(t, n.proxyListener, r),
                    o.splice(e, 1))
                  : i ||
                    (s.removeEventListener(t, n.proxyListener, r),
                    o.splice(e, 1));
              }
          }
        }
        return this;
      },
      trigger: function (...e) {
        const t = f(),
          n = e[0].split(" "),
          i = e[1];
        for (let r = 0; r < n.length; r += 1) {
          const s = n[r];
          for (let n = 0; n < this.length; n += 1) {
            const r = this[n];
            if (t.CustomEvent) {
              const n = new t.CustomEvent(s, {
                detail: i,
                bubbles: !0,
                cancelable: !0,
              });
              (r.dom7EventData = e.filter((e, t) => t > 0)),
                r.dispatchEvent(n),
                (r.dom7EventData = []),
                delete r.dom7EventData;
            }
          }
        }
        return this;
      },
      transitionEnd: function (e) {
        const t = this;
        return (
          e &&
            t.on("transitionend", function n(i) {
              i.target === this && (e.call(this, i), t.off("transitionend", n));
            }),
          this
        );
      },
      outerWidth: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetWidth +
              parseFloat(e.getPropertyValue("margin-right")) +
              parseFloat(e.getPropertyValue("margin-left"))
            );
          }
          return this[0].offsetWidth;
        }
        return null;
      },
      outerHeight: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetHeight +
              parseFloat(e.getPropertyValue("margin-top")) +
              parseFloat(e.getPropertyValue("margin-bottom"))
            );
          }
          return this[0].offsetHeight;
        }
        return null;
      },
      styles: function () {
        const e = f();
        return this[0] ? e.getComputedStyle(this[0], null) : {};
      },
      offset: function () {
        if (this.length > 0) {
          const e = f(),
            t = u(),
            n = this[0],
            i = n.getBoundingClientRect(),
            r = t.body,
            s = n.clientTop || r.clientTop || 0,
            o = n.clientLeft || r.clientLeft || 0,
            a = n === e ? e.scrollY : n.scrollTop,
            l = n === e ? e.scrollX : n.scrollLeft;
          return { top: i.top + a - s, left: i.left + l - o };
        }
        return null;
      },
      css: function (e, t) {
        const n = f();
        let i;
        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (i = 0; i < this.length; i += 1)
              for (const t in e) this[i].style[t] = e[t];
            return this;
          }
          if (this[0])
            return n.getComputedStyle(this[0], null).getPropertyValue(e);
        }
        if (2 === arguments.length && "string" == typeof e) {
          for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
          return this;
        }
        return this;
      },
      each: function (e) {
        return e
          ? (this.forEach((t, n) => {
              e.apply(t, [t, n]);
            }),
            this)
          : this;
      },
      html: function (e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : null;
        for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
        return this;
      },
      text: function (e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
        for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
        return this;
      },
      is: function (e) {
        const t = f(),
          n = u(),
          i = this[0];
        let r, s;
        if (!i || void 0 === e) return !1;
        if ("string" == typeof e) {
          if (i.matches) return i.matches(e);
          if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
          if (i.msMatchesSelector) return i.msMatchesSelector(e);
          for (r = v(e), s = 0; s < r.length; s += 1) if (r[s] === i) return !0;
          return !1;
        }
        if (e === n) return i === n;
        if (e === t) return i === t;
        if (e.nodeType || e instanceof h) {
          for (r = e.nodeType ? [e] : e, s = 0; s < r.length; s += 1)
            if (r[s] === i) return !0;
          return !1;
        }
        return !1;
      },
      index: function () {
        let e,
          t = this[0];
        if (t) {
          for (e = 0; null !== (t = t.previousSibling); )
            1 === t.nodeType && (e += 1);
          return e;
        }
      },
      eq: function (e) {
        if (void 0 === e) return this;
        const t = this.length;
        if (e > t - 1) return v([]);
        if (e < 0) {
          const n = t + e;
          return v(n < 0 ? [] : [this[n]]);
        }
        return v([this[e]]);
      },
      append: function (...e) {
        let t;
        const n = u();
        for (let i = 0; i < e.length; i += 1) {
          t = e[i];
          for (let e = 0; e < this.length; e += 1)
            if ("string" == typeof t) {
              const i = n.createElement("div");
              for (i.innerHTML = t; i.firstChild; )
                this[e].appendChild(i.firstChild);
            } else if (t instanceof h)
              for (let n = 0; n < t.length; n += 1) this[e].appendChild(t[n]);
            else this[e].appendChild(t);
        }
        return this;
      },
      prepend: function (e) {
        const t = u();
        let n, i;
        for (n = 0; n < this.length; n += 1)
          if ("string" == typeof e) {
            const r = t.createElement("div");
            for (r.innerHTML = e, i = r.childNodes.length - 1; i >= 0; i -= 1)
              this[n].insertBefore(r.childNodes[i], this[n].childNodes[0]);
          } else if (e instanceof h)
            for (i = 0; i < e.length; i += 1)
              this[n].insertBefore(e[i], this[n].childNodes[0]);
          else this[n].insertBefore(e, this[n].childNodes[0]);
        return this;
      },
      next: function (e) {
        return this.length > 0
          ? e
            ? this[0].nextElementSibling && v(this[0].nextElementSibling).is(e)
              ? v([this[0].nextElementSibling])
              : v([])
            : this[0].nextElementSibling
            ? v([this[0].nextElementSibling])
            : v([])
          : v([]);
      },
      nextAll: function (e) {
        const t = [];
        let n = this[0];
        if (!n) return v([]);
        for (; n.nextElementSibling; ) {
          const i = n.nextElementSibling;
          e ? v(i).is(e) && t.push(i) : t.push(i), (n = i);
        }
        return v(t);
      },
      prev: function (e) {
        if (this.length > 0) {
          const t = this[0];
          return e
            ? t.previousElementSibling && v(t.previousElementSibling).is(e)
              ? v([t.previousElementSibling])
              : v([])
            : t.previousElementSibling
            ? v([t.previousElementSibling])
            : v([]);
        }
        return v([]);
      },
      prevAll: function (e) {
        const t = [];
        let n = this[0];
        if (!n) return v([]);
        for (; n.previousElementSibling; ) {
          const i = n.previousElementSibling;
          e ? v(i).is(e) && t.push(i) : t.push(i), (n = i);
        }
        return v(t);
      },
      parent: function (e) {
        const t = [];
        for (let n = 0; n < this.length; n += 1)
          null !== this[n].parentNode &&
            (e
              ? v(this[n].parentNode).is(e) && t.push(this[n].parentNode)
              : t.push(this[n].parentNode));
        return v(t);
      },
      parents: function (e) {
        const t = [];
        for (let n = 0; n < this.length; n += 1) {
          let i = this[n].parentNode;
          for (; i; )
            e ? v(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode);
        }
        return v(t);
      },
      closest: function (e) {
        let t = this;
        return void 0 === e ? v([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
      },
      find: function (e) {
        const t = [];
        for (let n = 0; n < this.length; n += 1) {
          const i = this[n].querySelectorAll(e);
          for (let e = 0; e < i.length; e += 1) t.push(i[e]);
        }
        return v(t);
      },
      children: function (e) {
        const t = [];
        for (let n = 0; n < this.length; n += 1) {
          const i = this[n].children;
          for (let n = 0; n < i.length; n += 1)
            (e && !v(i[n]).is(e)) || t.push(i[n]);
        }
        return v(t);
      },
      filter: function (e) {
        return v(m(this, e));
      },
      remove: function () {
        for (let e = 0; e < this.length; e += 1)
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this;
      },
    };
    Object.keys(x).forEach((e) => {
      Object.defineProperty(v.fn, e, { value: x[e], writable: !0 });
    });
    const b = v;
    function T(e, t) {
      return void 0 === t && (t = 0), setTimeout(e, t);
    }
    function C() {
      return Date.now();
    }
    function S(e, t) {
      void 0 === t && (t = "x");
      const n = f();
      let i, r, s;
      const o = (function (e) {
        const t = f();
        let n;
        return (
          t.getComputedStyle && (n = t.getComputedStyle(e, null)),
          !n && e.currentStyle && (n = e.currentStyle),
          n || (n = e.style),
          n
        );
      })(e);
      return (
        n.WebKitCSSMatrix
          ? ((r = o.transform || o.webkitTransform),
            r.split(",").length > 6 &&
              (r = r
                .split(", ")
                .map((e) => e.replace(",", "."))
                .join(", ")),
            (s = new n.WebKitCSSMatrix("none" === r ? "" : r)))
          : ((s =
              o.MozTransform ||
              o.OTransform ||
              o.MsTransform ||
              o.msTransform ||
              o.transform ||
              o
                .getPropertyValue("transform")
                .replace("translate(", "matrix(1, 0, 0, 1,")),
            (i = s.toString().split(","))),
        "x" === t &&
          (r = n.WebKitCSSMatrix
            ? s.m41
            : 16 === i.length
            ? parseFloat(i[12])
            : parseFloat(i[4])),
        "y" === t &&
          (r = n.WebKitCSSMatrix
            ? s.m42
            : 16 === i.length
            ? parseFloat(i[13])
            : parseFloat(i[5])),
        r || 0
      );
    }
    function E(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        e.constructor &&
        "Object" === Object.prototype.toString.call(e).slice(8, -1)
      );
    }
    function k(e) {
      return "undefined" != typeof window && void 0 !== window.HTMLElement
        ? e instanceof HTMLElement
        : e && (1 === e.nodeType || 11 === e.nodeType);
    }
    function L() {
      const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
        t = ["__proto__", "constructor", "prototype"];
      for (let n = 1; n < arguments.length; n += 1) {
        const i = n < 0 || arguments.length <= n ? void 0 : arguments[n];
        if (null != i && !k(i)) {
          const n = Object.keys(Object(i)).filter((e) => t.indexOf(e) < 0);
          for (let t = 0, r = n.length; t < r; t += 1) {
            const r = n[t],
              s = Object.getOwnPropertyDescriptor(i, r);
            void 0 !== s &&
              s.enumerable &&
              (E(e[r]) && E(i[r])
                ? i[r].__swiper__
                  ? (e[r] = i[r])
                  : L(e[r], i[r])
                : !E(e[r]) && E(i[r])
                ? ((e[r] = {}), i[r].__swiper__ ? (e[r] = i[r]) : L(e[r], i[r]))
                : (e[r] = i[r]));
          }
        }
      }
      return e;
    }
    function A(e, t, n) {
      e.style.setProperty(t, n);
    }
    function P(e) {
      let { swiper: t, targetPosition: n, side: i } = e;
      const r = f(),
        s = -t.translate;
      let o,
        a = null;
      const l = t.params.speed;
      (t.wrapperEl.style.scrollSnapType = "none"),
        r.cancelAnimationFrame(t.cssModeFrameID);
      const c = n > s ? "next" : "prev",
        d = (e, t) => ("next" === c && e >= t) || ("prev" === c && e <= t),
        u = () => {
          (o = new Date().getTime()), null === a && (a = o);
          const e = Math.max(Math.min((o - a) / l, 1), 0),
            c = 0.5 - Math.cos(e * Math.PI) / 2;
          let p = s + c * (n - s);
          if ((d(p, n) && (p = n), t.wrapperEl.scrollTo({ [i]: p }), d(p, n)))
            return (
              (t.wrapperEl.style.overflow = "hidden"),
              (t.wrapperEl.style.scrollSnapType = ""),
              setTimeout(() => {
                (t.wrapperEl.style.overflow = ""),
                  t.wrapperEl.scrollTo({ [i]: p });
              }),
              void r.cancelAnimationFrame(t.cssModeFrameID)
            );
          t.cssModeFrameID = r.requestAnimationFrame(u);
        };
      u();
    }
    let M, D, N;
    function O() {
      return (
        M ||
          (M = (function () {
            const e = f(),
              t = u();
            return {
              smoothScroll:
                t.documentElement &&
                "scrollBehavior" in t.documentElement.style,
              touch: !!(
                "ontouchstart" in e ||
                (e.DocumentTouch && t instanceof e.DocumentTouch)
              ),
              passiveListener: (function () {
                let t = !1;
                try {
                  const n = Object.defineProperty({}, "passive", {
                    get() {
                      t = !0;
                    },
                  });
                  e.addEventListener("testPassiveListener", null, n);
                } catch (e) {}
                return t;
              })(),
              gestures: "ongesturestart" in e,
            };
          })()),
        M
      );
    }
    function $(e) {
      return (
        void 0 === e && (e = {}),
        D ||
          (D = (function (e) {
            let { userAgent: t } = void 0 === e ? {} : e;
            const n = O(),
              i = f(),
              r = i.navigator.platform,
              s = t || i.navigator.userAgent,
              o = { ios: !1, android: !1 },
              a = i.screen.width,
              l = i.screen.height,
              c = s.match(/(Android);?[\s\/]+([\d.]+)?/);
            let d = s.match(/(iPad).*OS\s([\d_]+)/);
            const u = s.match(/(iPod)(.*OS\s([\d_]+))?/),
              p = !d && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              h = "Win32" === r;
            let g = "MacIntel" === r;
            return (
              !d &&
                g &&
                n.touch &&
                [
                  "1024x1366",
                  "1366x1024",
                  "834x1194",
                  "1194x834",
                  "834x1112",
                  "1112x834",
                  "768x1024",
                  "1024x768",
                  "820x1180",
                  "1180x820",
                  "810x1080",
                  "1080x810",
                ].indexOf(`${a}x${l}`) >= 0 &&
                ((d = s.match(/(Version)\/([\d.]+)/)),
                d || (d = [0, 1, "13_0_0"]),
                (g = !1)),
              c && !h && ((o.os = "android"), (o.android = !0)),
              (d || p || u) && ((o.os = "ios"), (o.ios = !0)),
              o
            );
          })(e)),
        D
      );
    }
    function j() {
      return (
        N ||
          (N = (function () {
            const e = f();
            return {
              isSafari: (function () {
                const t = e.navigator.userAgent.toLowerCase();
                return (
                  t.indexOf("safari") >= 0 &&
                  t.indexOf("chrome") < 0 &&
                  t.indexOf("android") < 0
                );
              })(),
              isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                e.navigator.userAgent
              ),
            };
          })()),
        N
      );
    }
    const I = {
      on(e, t, n) {
        const i = this;
        if ("function" != typeof t) return i;
        const r = n ? "unshift" : "push";
        return (
          e.split(" ").forEach((e) => {
            i.eventsListeners[e] || (i.eventsListeners[e] = []),
              i.eventsListeners[e][r](t);
          }),
          i
        );
      },
      once(e, t, n) {
        const i = this;
        if ("function" != typeof t) return i;
        function r() {
          i.off(e, r), r.__emitterProxy && delete r.__emitterProxy;
          for (var n = arguments.length, s = new Array(n), o = 0; o < n; o++)
            s[o] = arguments[o];
          t.apply(i, s);
        }
        return (r.__emitterProxy = t), i.on(e, r, n);
      },
      onAny(e, t) {
        const n = this;
        if ("function" != typeof e) return n;
        const i = t ? "unshift" : "push";
        return (
          n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[i](e), n
        );
      },
      offAny(e) {
        const t = this;
        if (!t.eventsAnyListeners) return t;
        const n = t.eventsAnyListeners.indexOf(e);
        return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
      },
      off(e, t) {
        const n = this;
        return n.eventsListeners
          ? (e.split(" ").forEach((e) => {
              void 0 === t
                ? (n.eventsListeners[e] = [])
                : n.eventsListeners[e] &&
                  n.eventsListeners[e].forEach((i, r) => {
                    (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                      n.eventsListeners[e].splice(r, 1);
                  });
            }),
            n)
          : n;
      },
      emit() {
        const e = this;
        if (!e.eventsListeners) return e;
        let t, n, i;
        for (var r = arguments.length, s = new Array(r), o = 0; o < r; o++)
          s[o] = arguments[o];
        "string" == typeof s[0] || Array.isArray(s[0])
          ? ((t = s[0]), (n = s.slice(1, s.length)), (i = e))
          : ((t = s[0].events), (n = s[0].data), (i = s[0].context || e)),
          n.unshift(i);
        return (
          (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
            e.eventsAnyListeners &&
              e.eventsAnyListeners.length &&
              e.eventsAnyListeners.forEach((e) => {
                e.apply(i, [t, ...n]);
              }),
              e.eventsListeners &&
                e.eventsListeners[t] &&
                e.eventsListeners[t].forEach((e) => {
                  e.apply(i, n);
                });
          }),
          e
        );
      },
    };
    const q = {
      updateSize: function () {
        const e = this;
        let t, n;
        const i = e.$el;
        (t =
          void 0 !== e.params.width && null !== e.params.width
            ? e.params.width
            : i[0].clientWidth),
          (n =
            void 0 !== e.params.height && null !== e.params.height
              ? e.params.height
              : i[0].clientHeight),
          (0 === t && e.isHorizontal()) ||
            (0 === n && e.isVertical()) ||
            ((t =
              t -
              parseInt(i.css("padding-left") || 0, 10) -
              parseInt(i.css("padding-right") || 0, 10)),
            (n =
              n -
              parseInt(i.css("padding-top") || 0, 10) -
              parseInt(i.css("padding-bottom") || 0, 10)),
            Number.isNaN(t) && (t = 0),
            Number.isNaN(n) && (n = 0),
            Object.assign(e, {
              width: t,
              height: n,
              size: e.isHorizontal() ? t : n,
            }));
      },
      updateSlides: function () {
        const e = this;
        function t(t) {
          return e.isHorizontal()
            ? t
            : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom",
              }[t];
        }
        function n(e, n) {
          return parseFloat(e.getPropertyValue(t(n)) || 0);
        }
        const i = e.params,
          { $wrapperEl: r, size: s, rtlTranslate: o, wrongRTL: a } = e,
          l = e.virtual && i.virtual.enabled,
          c = l ? e.virtual.slides.length : e.slides.length,
          d = r.children(`.${e.params.slideClass}`),
          u = l ? e.virtual.slides.length : d.length;
        let p = [];
        const f = [],
          h = [];
        let g = i.slidesOffsetBefore;
        "function" == typeof g && (g = i.slidesOffsetBefore.call(e));
        let m = i.slidesOffsetAfter;
        "function" == typeof m && (m = i.slidesOffsetAfter.call(e));
        const v = e.snapGrid.length,
          y = e.slidesGrid.length;
        let w = i.spaceBetween,
          x = -g,
          b = 0,
          T = 0;
        if (void 0 === s) return;
        "string" == typeof w &&
          w.indexOf("%") >= 0 &&
          (w = (parseFloat(w.replace("%", "")) / 100) * s),
          (e.virtualSize = -w),
          o
            ? d.css({ marginLeft: "", marginBottom: "", marginTop: "" })
            : d.css({ marginRight: "", marginBottom: "", marginTop: "" }),
          i.centeredSlides &&
            i.cssMode &&
            (A(e.wrapperEl, "--swiper-centered-offset-before", ""),
            A(e.wrapperEl, "--swiper-centered-offset-after", ""));
        const C = i.grid && i.grid.rows > 1 && e.grid;
        let S;
        C && e.grid.initSlides(u);
        const E =
          "auto" === i.slidesPerView &&
          i.breakpoints &&
          Object.keys(i.breakpoints).filter(
            (e) => void 0 !== i.breakpoints[e].slidesPerView
          ).length > 0;
        for (let r = 0; r < u; r += 1) {
          S = 0;
          const o = d.eq(r);
          if (
            (C && e.grid.updateSlide(r, o, u, t), "none" !== o.css("display"))
          ) {
            if ("auto" === i.slidesPerView) {
              E && (d[r].style[t("width")] = "");
              const s = getComputedStyle(o[0]),
                a = o[0].style.transform,
                l = o[0].style.webkitTransform;
              if (
                (a && (o[0].style.transform = "none"),
                l && (o[0].style.webkitTransform = "none"),
                i.roundLengths)
              )
                S = e.isHorizontal() ? o.outerWidth(!0) : o.outerHeight(!0);
              else {
                const e = n(s, "width"),
                  t = n(s, "padding-left"),
                  i = n(s, "padding-right"),
                  r = n(s, "margin-left"),
                  a = n(s, "margin-right"),
                  l = s.getPropertyValue("box-sizing");
                if (l && "border-box" === l) S = e + r + a;
                else {
                  const { clientWidth: n, offsetWidth: s } = o[0];
                  S = e + t + i + r + a + (s - n);
                }
              }
              a && (o[0].style.transform = a),
                l && (o[0].style.webkitTransform = l),
                i.roundLengths && (S = Math.floor(S));
            } else
              (S = (s - (i.slidesPerView - 1) * w) / i.slidesPerView),
                i.roundLengths && (S = Math.floor(S)),
                d[r] && (d[r].style[t("width")] = `${S}px`);
            d[r] && (d[r].swiperSlideSize = S),
              h.push(S),
              i.centeredSlides
                ? ((x = x + S / 2 + b / 2 + w),
                  0 === b && 0 !== r && (x = x - s / 2 - w),
                  0 === r && (x = x - s / 2 - w),
                  Math.abs(x) < 0.001 && (x = 0),
                  i.roundLengths && (x = Math.floor(x)),
                  T % i.slidesPerGroup == 0 && p.push(x),
                  f.push(x))
                : (i.roundLengths && (x = Math.floor(x)),
                  (T - Math.min(e.params.slidesPerGroupSkip, T)) %
                    e.params.slidesPerGroup ==
                    0 && p.push(x),
                  f.push(x),
                  (x = x + S + w)),
              (e.virtualSize += S + w),
              (b = S),
              (T += 1);
          }
        }
        if (
          ((e.virtualSize = Math.max(e.virtualSize, s) + m),
          o &&
            a &&
            ("slide" === i.effect || "coverflow" === i.effect) &&
            r.css({ width: `${e.virtualSize + i.spaceBetween}px` }),
          i.setWrapperSize &&
            r.css({ [t("width")]: `${e.virtualSize + i.spaceBetween}px` }),
          C && e.grid.updateWrapperSize(S, p, t),
          !i.centeredSlides)
        ) {
          const t = [];
          for (let n = 0; n < p.length; n += 1) {
            let r = p[n];
            i.roundLengths && (r = Math.floor(r)),
              p[n] <= e.virtualSize - s && t.push(r);
          }
          (p = t),
            Math.floor(e.virtualSize - s) - Math.floor(p[p.length - 1]) > 1 &&
              p.push(e.virtualSize - s);
        }
        if ((0 === p.length && (p = [0]), 0 !== i.spaceBetween)) {
          const n = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
          d.filter((e, t) => !i.cssMode || t !== d.length - 1).css({
            [n]: `${w}px`,
          });
        }
        if (i.centeredSlides && i.centeredSlidesBounds) {
          let e = 0;
          h.forEach((t) => {
            e += t + (i.spaceBetween ? i.spaceBetween : 0);
          }),
            (e -= i.spaceBetween);
          const t = e - s;
          p = p.map((e) => (e < 0 ? -g : e > t ? t + m : e));
        }
        if (i.centerInsufficientSlides) {
          let e = 0;
          if (
            (h.forEach((t) => {
              e += t + (i.spaceBetween ? i.spaceBetween : 0);
            }),
            (e -= i.spaceBetween),
            e < s)
          ) {
            const t = (s - e) / 2;
            p.forEach((e, n) => {
              p[n] = e - t;
            }),
              f.forEach((e, n) => {
                f[n] = e + t;
              });
          }
        }
        if (
          (Object.assign(e, {
            slides: d,
            snapGrid: p,
            slidesGrid: f,
            slidesSizesGrid: h,
          }),
          i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
        ) {
          A(e.wrapperEl, "--swiper-centered-offset-before", -p[0] + "px"),
            A(
              e.wrapperEl,
              "--swiper-centered-offset-after",
              e.size / 2 - h[h.length - 1] / 2 + "px"
            );
          const t = -e.snapGrid[0],
            n = -e.slidesGrid[0];
          (e.snapGrid = e.snapGrid.map((e) => e + t)),
            (e.slidesGrid = e.slidesGrid.map((e) => e + n));
        }
        if (
          (u !== c && e.emit("slidesLengthChange"),
          p.length !== v &&
            (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
          f.length !== y && e.emit("slidesGridLengthChange"),
          i.watchSlidesProgress && e.updateSlidesOffset(),
          !(l || i.cssMode || ("slide" !== i.effect && "fade" !== i.effect)))
        ) {
          const t = `${i.containerModifierClass}backface-hidden`,
            n = e.$el.hasClass(t);
          u <= i.maxBackfaceHiddenSlides
            ? n || e.$el.addClass(t)
            : n && e.$el.removeClass(t);
        }
      },
      updateAutoHeight: function (e) {
        const t = this,
          n = [],
          i = t.virtual && t.params.virtual.enabled;
        let r,
          s = 0;
        "number" == typeof e
          ? t.setTransition(e)
          : !0 === e && t.setTransition(t.params.speed);
        const o = (e) =>
          i
            ? t.slides.filter(
                (t) =>
                  parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e
              )[0]
            : t.slides.eq(e)[0];
        if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
          if (t.params.centeredSlides)
            t.visibleSlides.each((e) => {
              n.push(e);
            });
          else
            for (r = 0; r < Math.ceil(t.params.slidesPerView); r += 1) {
              const e = t.activeIndex + r;
              if (e > t.slides.length && !i) break;
              n.push(o(e));
            }
        else n.push(o(t.activeIndex));
        for (r = 0; r < n.length; r += 1)
          if (void 0 !== n[r]) {
            const e = n[r].offsetHeight;
            s = e > s ? e : s;
          }
        (s || 0 === s) && t.$wrapperEl.css("height", `${s}px`);
      },
      updateSlidesOffset: function () {
        const e = this,
          t = e.slides;
        for (let n = 0; n < t.length; n += 1)
          t[n].swiperSlideOffset = e.isHorizontal()
            ? t[n].offsetLeft
            : t[n].offsetTop;
      },
      updateSlidesProgress: function (e) {
        void 0 === e && (e = (this && this.translate) || 0);
        const t = this,
          n = t.params,
          { slides: i, rtlTranslate: r, snapGrid: s } = t;
        if (0 === i.length) return;
        void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
        let o = -e;
        r && (o = e),
          i.removeClass(n.slideVisibleClass),
          (t.visibleSlidesIndexes = []),
          (t.visibleSlides = []);
        for (let e = 0; e < i.length; e += 1) {
          const a = i[e];
          let l = a.swiperSlideOffset;
          n.cssMode && n.centeredSlides && (l -= i[0].swiperSlideOffset);
          const c =
              (o + (n.centeredSlides ? t.minTranslate() : 0) - l) /
              (a.swiperSlideSize + n.spaceBetween),
            d =
              (o - s[0] + (n.centeredSlides ? t.minTranslate() : 0) - l) /
              (a.swiperSlideSize + n.spaceBetween),
            u = -(o - l),
            p = u + t.slidesSizesGrid[e];
          ((u >= 0 && u < t.size - 1) ||
            (p > 1 && p <= t.size) ||
            (u <= 0 && p >= t.size)) &&
            (t.visibleSlides.push(a),
            t.visibleSlidesIndexes.push(e),
            i.eq(e).addClass(n.slideVisibleClass)),
            (a.progress = r ? -c : c),
            (a.originalProgress = r ? -d : d);
        }
        t.visibleSlides = b(t.visibleSlides);
      },
      updateProgress: function (e) {
        const t = this;
        if (void 0 === e) {
          const n = t.rtlTranslate ? -1 : 1;
          e = (t && t.translate && t.translate * n) || 0;
        }
        const n = t.params,
          i = t.maxTranslate() - t.minTranslate();
        let { progress: r, isBeginning: s, isEnd: o } = t;
        const a = s,
          l = o;
        0 === i
          ? ((r = 0), (s = !0), (o = !0))
          : ((r = (e - t.minTranslate()) / i), (s = r <= 0), (o = r >= 1)),
          Object.assign(t, { progress: r, isBeginning: s, isEnd: o }),
          (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
            t.updateSlidesProgress(e),
          s && !a && t.emit("reachBeginning toEdge"),
          o && !l && t.emit("reachEnd toEdge"),
          ((a && !s) || (l && !o)) && t.emit("fromEdge"),
          t.emit("progress", r);
      },
      updateSlidesClasses: function () {
        const e = this,
          {
            slides: t,
            params: n,
            $wrapperEl: i,
            activeIndex: r,
            realIndex: s,
          } = e,
          o = e.virtual && n.virtual.enabled;
        let a;
        t.removeClass(
          `${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`
        ),
          (a = o
            ? e.$wrapperEl.find(
                `.${n.slideClass}[data-swiper-slide-index="${r}"]`
              )
            : t.eq(r)),
          a.addClass(n.slideActiveClass),
          n.loop &&
            (a.hasClass(n.slideDuplicateClass)
              ? i
                  .children(
                    `.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${s}"]`
                  )
                  .addClass(n.slideDuplicateActiveClass)
              : i
                  .children(
                    `.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${s}"]`
                  )
                  .addClass(n.slideDuplicateActiveClass));
        let l = a.nextAll(`.${n.slideClass}`).eq(0).addClass(n.slideNextClass);
        n.loop &&
          0 === l.length &&
          ((l = t.eq(0)), l.addClass(n.slideNextClass));
        let c = a.prevAll(`.${n.slideClass}`).eq(0).addClass(n.slidePrevClass);
        n.loop &&
          0 === c.length &&
          ((c = t.eq(-1)), c.addClass(n.slidePrevClass)),
          n.loop &&
            (l.hasClass(n.slideDuplicateClass)
              ? i
                  .children(
                    `.${n.slideClass}:not(.${
                      n.slideDuplicateClass
                    })[data-swiper-slide-index="${l.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(n.slideDuplicateNextClass)
              : i
                  .children(
                    `.${n.slideClass}.${
                      n.slideDuplicateClass
                    }[data-swiper-slide-index="${l.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(n.slideDuplicateNextClass),
            c.hasClass(n.slideDuplicateClass)
              ? i
                  .children(
                    `.${n.slideClass}:not(.${
                      n.slideDuplicateClass
                    })[data-swiper-slide-index="${c.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(n.slideDuplicatePrevClass)
              : i
                  .children(
                    `.${n.slideClass}.${
                      n.slideDuplicateClass
                    }[data-swiper-slide-index="${c.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(n.slideDuplicatePrevClass)),
          e.emitSlidesClasses();
      },
      updateActiveIndex: function (e) {
        const t = this,
          n = t.rtlTranslate ? t.translate : -t.translate,
          {
            slidesGrid: i,
            snapGrid: r,
            params: s,
            activeIndex: o,
            realIndex: a,
            snapIndex: l,
          } = t;
        let c,
          d = e;
        if (void 0 === d) {
          for (let e = 0; e < i.length; e += 1)
            void 0 !== i[e + 1]
              ? n >= i[e] && n < i[e + 1] - (i[e + 1] - i[e]) / 2
                ? (d = e)
                : n >= i[e] && n < i[e + 1] && (d = e + 1)
              : n >= i[e] && (d = e);
          s.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
        }
        if (r.indexOf(n) >= 0) c = r.indexOf(n);
        else {
          const e = Math.min(s.slidesPerGroupSkip, d);
          c = e + Math.floor((d - e) / s.slidesPerGroup);
        }
        if ((c >= r.length && (c = r.length - 1), d === o))
          return void (
            c !== l && ((t.snapIndex = c), t.emit("snapIndexChange"))
          );
        const u = parseInt(
          t.slides.eq(d).attr("data-swiper-slide-index") || d,
          10
        );
        Object.assign(t, {
          snapIndex: c,
          realIndex: u,
          previousIndex: o,
          activeIndex: d,
        }),
          t.emit("activeIndexChange"),
          t.emit("snapIndexChange"),
          a !== u && t.emit("realIndexChange"),
          (t.initialized || t.params.runCallbacksOnInit) &&
            t.emit("slideChange");
      },
      updateClickedSlide: function (e) {
        const t = this,
          n = t.params,
          i = b(e).closest(`.${n.slideClass}`)[0];
        let r,
          s = !1;
        if (i)
          for (let e = 0; e < t.slides.length; e += 1)
            if (t.slides[e] === i) {
              (s = !0), (r = e);
              break;
            }
        if (!i || !s)
          return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
        (t.clickedSlide = i),
          t.virtual && t.params.virtual.enabled
            ? (t.clickedIndex = parseInt(
                b(i).attr("data-swiper-slide-index"),
                10
              ))
            : (t.clickedIndex = r),
          n.slideToClickedSlide &&
            void 0 !== t.clickedIndex &&
            t.clickedIndex !== t.activeIndex &&
            t.slideToClickedSlide();
      },
    };
    const z = {
      getTranslate: function (e) {
        void 0 === e && (e = this.isHorizontal() ? "x" : "y");
        const {
          params: t,
          rtlTranslate: n,
          translate: i,
          $wrapperEl: r,
        } = this;
        if (t.virtualTranslate) return n ? -i : i;
        if (t.cssMode) return i;
        let s = S(r[0], e);
        return n && (s = -s), s || 0;
      },
      setTranslate: function (e, t) {
        const n = this,
          {
            rtlTranslate: i,
            params: r,
            $wrapperEl: s,
            wrapperEl: o,
            progress: a,
          } = n;
        let l,
          c = 0,
          d = 0;
        n.isHorizontal() ? (c = i ? -e : e) : (d = e),
          r.roundLengths && ((c = Math.floor(c)), (d = Math.floor(d))),
          r.cssMode
            ? (o[n.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                n.isHorizontal() ? -c : -d)
            : r.virtualTranslate ||
              s.transform(`translate3d(${c}px, ${d}px, 0px)`),
          (n.previousTranslate = n.translate),
          (n.translate = n.isHorizontal() ? c : d);
        const u = n.maxTranslate() - n.minTranslate();
        (l = 0 === u ? 0 : (e - n.minTranslate()) / u),
          l !== a && n.updateProgress(e),
          n.emit("setTranslate", n.translate, t);
      },
      minTranslate: function () {
        return -this.snapGrid[0];
      },
      maxTranslate: function () {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo: function (e, t, n, i, r) {
        void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === n && (n = !0),
          void 0 === i && (i = !0);
        const s = this,
          { params: o, wrapperEl: a } = s;
        if (s.animating && o.preventInteractionOnTransition) return !1;
        const l = s.minTranslate(),
          c = s.maxTranslate();
        let d;
        if (
          ((d = i && e > l ? l : i && e < c ? c : e),
          s.updateProgress(d),
          o.cssMode)
        ) {
          const e = s.isHorizontal();
          if (0 === t) a[e ? "scrollLeft" : "scrollTop"] = -d;
          else {
            if (!s.support.smoothScroll)
              return (
                P({ swiper: s, targetPosition: -d, side: e ? "left" : "top" }),
                !0
              );
            a.scrollTo({ [e ? "left" : "top"]: -d, behavior: "smooth" });
          }
          return !0;
        }
        return (
          0 === t
            ? (s.setTransition(0),
              s.setTranslate(d),
              n &&
                (s.emit("beforeTransitionStart", t, r),
                s.emit("transitionEnd")))
            : (s.setTransition(t),
              s.setTranslate(d),
              n &&
                (s.emit("beforeTransitionStart", t, r),
                s.emit("transitionStart")),
              s.animating ||
                ((s.animating = !0),
                s.onTranslateToWrapperTransitionEnd ||
                  (s.onTranslateToWrapperTransitionEnd = function (e) {
                    s &&
                      !s.destroyed &&
                      e.target === this &&
                      (s.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        s.onTranslateToWrapperTransitionEnd
                      ),
                      s.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        s.onTranslateToWrapperTransitionEnd
                      ),
                      (s.onTranslateToWrapperTransitionEnd = null),
                      delete s.onTranslateToWrapperTransitionEnd,
                      n && s.emit("transitionEnd"));
                  }),
                s.$wrapperEl[0].addEventListener(
                  "transitionend",
                  s.onTranslateToWrapperTransitionEnd
                ),
                s.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  s.onTranslateToWrapperTransitionEnd
                ))),
          !0
        );
      },
    };
    function H(e) {
      let { swiper: t, runCallbacks: n, direction: i, step: r } = e;
      const { activeIndex: s, previousIndex: o } = t;
      let a = i;
      if (
        (a || (a = s > o ? "next" : s < o ? "prev" : "reset"),
        t.emit(`transition${r}`),
        n && s !== o)
      ) {
        if ("reset" === a) return void t.emit(`slideResetTransition${r}`);
        t.emit(`slideChangeTransition${r}`),
          "next" === a
            ? t.emit(`slideNextTransition${r}`)
            : t.emit(`slidePrevTransition${r}`);
      }
    }
    const W = {
      slideTo: function (e, t, n, i, r) {
        if (
          (void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === n && (n = !0),
          "number" != typeof e && "string" != typeof e)
        )
          throw new Error(
            `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
          );
        if ("string" == typeof e) {
          const t = parseInt(e, 10);
          if (!isFinite(t))
            throw new Error(
              `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
            );
          e = t;
        }
        const s = this;
        let o = e;
        o < 0 && (o = 0);
        const {
          params: a,
          snapGrid: l,
          slidesGrid: c,
          previousIndex: d,
          activeIndex: u,
          rtlTranslate: p,
          wrapperEl: f,
          enabled: h,
        } = s;
        if (
          (s.animating && a.preventInteractionOnTransition) ||
          (!h && !i && !r)
        )
          return !1;
        const g = Math.min(s.params.slidesPerGroupSkip, o);
        let m = g + Math.floor((o - g) / s.params.slidesPerGroup);
        m >= l.length && (m = l.length - 1),
          (u || a.initialSlide || 0) === (d || 0) &&
            n &&
            s.emit("beforeSlideChangeStart");
        const v = -l[m];
        if ((s.updateProgress(v), a.normalizeSlideIndex))
          for (let e = 0; e < c.length; e += 1) {
            const t = -Math.floor(100 * v),
              n = Math.floor(100 * c[e]),
              i = Math.floor(100 * c[e + 1]);
            void 0 !== c[e + 1]
              ? t >= n && t < i - (i - n) / 2
                ? (o = e)
                : t >= n && t < i && (o = e + 1)
              : t >= n && (o = e);
          }
        if (s.initialized && o !== u) {
          if (!s.allowSlideNext && v < s.translate && v < s.minTranslate())
            return !1;
          if (
            !s.allowSlidePrev &&
            v > s.translate &&
            v > s.maxTranslate() &&
            (u || 0) !== o
          )
            return !1;
        }
        let y;
        if (
          ((y = o > u ? "next" : o < u ? "prev" : "reset"),
          (p && -v === s.translate) || (!p && v === s.translate))
        )
          return (
            s.updateActiveIndex(o),
            a.autoHeight && s.updateAutoHeight(),
            s.updateSlidesClasses(),
            "slide" !== a.effect && s.setTranslate(v),
            "reset" !== y && (s.transitionStart(n, y), s.transitionEnd(n, y)),
            !1
          );
        if (a.cssMode) {
          const e = s.isHorizontal(),
            n = p ? v : -v;
          if (0 === t) {
            const t = s.virtual && s.params.virtual.enabled;
            t &&
              ((s.wrapperEl.style.scrollSnapType = "none"),
              (s._immediateVirtual = !0)),
              (f[e ? "scrollLeft" : "scrollTop"] = n),
              t &&
                requestAnimationFrame(() => {
                  (s.wrapperEl.style.scrollSnapType = ""),
                    (s._swiperImmediateVirtual = !1);
                });
          } else {
            if (!s.support.smoothScroll)
              return (
                P({ swiper: s, targetPosition: n, side: e ? "left" : "top" }),
                !0
              );
            f.scrollTo({ [e ? "left" : "top"]: n, behavior: "smooth" });
          }
          return !0;
        }
        return (
          s.setTransition(t),
          s.setTranslate(v),
          s.updateActiveIndex(o),
          s.updateSlidesClasses(),
          s.emit("beforeTransitionStart", t, i),
          s.transitionStart(n, y),
          0 === t
            ? s.transitionEnd(n, y)
            : s.animating ||
              ((s.animating = !0),
              s.onSlideToWrapperTransitionEnd ||
                (s.onSlideToWrapperTransitionEnd = function (e) {
                  s &&
                    !s.destroyed &&
                    e.target === this &&
                    (s.$wrapperEl[0].removeEventListener(
                      "transitionend",
                      s.onSlideToWrapperTransitionEnd
                    ),
                    s.$wrapperEl[0].removeEventListener(
                      "webkitTransitionEnd",
                      s.onSlideToWrapperTransitionEnd
                    ),
                    (s.onSlideToWrapperTransitionEnd = null),
                    delete s.onSlideToWrapperTransitionEnd,
                    s.transitionEnd(n, y));
                }),
              s.$wrapperEl[0].addEventListener(
                "transitionend",
                s.onSlideToWrapperTransitionEnd
              ),
              s.$wrapperEl[0].addEventListener(
                "webkitTransitionEnd",
                s.onSlideToWrapperTransitionEnd
              )),
          !0
        );
      },
      slideToLoop: function (e, t, n, i) {
        void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === n && (n = !0);
        const r = this;
        let s = e;
        return r.params.loop && (s += r.loopedSlides), r.slideTo(s, t, n, i);
      },
      slideNext: function (e, t, n) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        const i = this,
          { animating: r, enabled: s, params: o } = i;
        if (!s) return i;
        let a = o.slidesPerGroup;
        "auto" === o.slidesPerView &&
          1 === o.slidesPerGroup &&
          o.slidesPerGroupAuto &&
          (a = Math.max(i.slidesPerViewDynamic("current", !0), 1));
        const l = i.activeIndex < o.slidesPerGroupSkip ? 1 : a;
        if (o.loop) {
          if (r && o.loopPreventsSlide) return !1;
          i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
        }
        return o.rewind && i.isEnd
          ? i.slideTo(0, e, t, n)
          : i.slideTo(i.activeIndex + l, e, t, n);
      },
      slidePrev: function (e, t, n) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        const i = this,
          {
            params: r,
            animating: s,
            snapGrid: o,
            slidesGrid: a,
            rtlTranslate: l,
            enabled: c,
          } = i;
        if (!c) return i;
        if (r.loop) {
          if (s && r.loopPreventsSlide) return !1;
          i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
        }
        function d(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }
        const u = d(l ? i.translate : -i.translate),
          p = o.map((e) => d(e));
        let f = o[p.indexOf(u) - 1];
        if (void 0 === f && r.cssMode) {
          let e;
          o.forEach((t, n) => {
            u >= t && (e = n);
          }),
            void 0 !== e && (f = o[e > 0 ? e - 1 : e]);
        }
        let h = 0;
        if (
          (void 0 !== f &&
            ((h = a.indexOf(f)),
            h < 0 && (h = i.activeIndex - 1),
            "auto" === r.slidesPerView &&
              1 === r.slidesPerGroup &&
              r.slidesPerGroupAuto &&
              ((h = h - i.slidesPerViewDynamic("previous", !0) + 1),
              (h = Math.max(h, 0)))),
          r.rewind && i.isBeginning)
        ) {
          const r =
            i.params.virtual && i.params.virtual.enabled && i.virtual
              ? i.virtual.slides.length - 1
              : i.slides.length - 1;
          return i.slideTo(r, e, t, n);
        }
        return i.slideTo(h, e, t, n);
      },
      slideReset: function (e, t, n) {
        return (
          void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0),
          this.slideTo(this.activeIndex, e, t, n)
        );
      },
      slideToClosest: function (e, t, n, i) {
        void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0),
          void 0 === i && (i = 0.5);
        const r = this;
        let s = r.activeIndex;
        const o = Math.min(r.params.slidesPerGroupSkip, s),
          a = o + Math.floor((s - o) / r.params.slidesPerGroup),
          l = r.rtlTranslate ? r.translate : -r.translate;
        if (l >= r.snapGrid[a]) {
          const e = r.snapGrid[a];
          l - e > (r.snapGrid[a + 1] - e) * i && (s += r.params.slidesPerGroup);
        } else {
          const e = r.snapGrid[a - 1];
          l - e <= (r.snapGrid[a] - e) * i && (s -= r.params.slidesPerGroup);
        }
        return (
          (s = Math.max(s, 0)),
          (s = Math.min(s, r.slidesGrid.length - 1)),
          r.slideTo(s, e, t, n)
        );
      },
      slideToClickedSlide: function () {
        const e = this,
          { params: t, $wrapperEl: n } = e,
          i =
            "auto" === t.slidesPerView
              ? e.slidesPerViewDynamic()
              : t.slidesPerView;
        let r,
          s = e.clickedIndex;
        if (t.loop) {
          if (e.animating) return;
          (r = parseInt(b(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
            t.centeredSlides
              ? s < e.loopedSlides - i / 2 ||
                s > e.slides.length - e.loopedSlides + i / 2
                ? (e.loopFix(),
                  (s = n
                    .children(
                      `.${t.slideClass}[data-swiper-slide-index="${r}"]:not(.${t.slideDuplicateClass})`
                    )
                    .eq(0)
                    .index()),
                  T(() => {
                    e.slideTo(s);
                  }))
                : e.slideTo(s)
              : s > e.slides.length - i
              ? (e.loopFix(),
                (s = n
                  .children(
                    `.${t.slideClass}[data-swiper-slide-index="${r}"]:not(.${t.slideDuplicateClass})`
                  )
                  .eq(0)
                  .index()),
                T(() => {
                  e.slideTo(s);
                }))
              : e.slideTo(s);
        } else e.slideTo(s);
      },
    };
    const _ = {
      loopCreate: function () {
        const e = this,
          t = u(),
          { params: n, $wrapperEl: i } = e,
          r = i.children().length > 0 ? b(i.children()[0].parentNode) : i;
        r.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();
        let s = r.children(`.${n.slideClass}`);
        if (n.loopFillGroupWithBlank) {
          const e = n.slidesPerGroup - (s.length % n.slidesPerGroup);
          if (e !== n.slidesPerGroup) {
            for (let i = 0; i < e; i += 1) {
              const e = b(t.createElement("div")).addClass(
                `${n.slideClass} ${n.slideBlankClass}`
              );
              r.append(e);
            }
            s = r.children(`.${n.slideClass}`);
          }
        }
        "auto" !== n.slidesPerView ||
          n.loopedSlides ||
          (n.loopedSlides = s.length),
          (e.loopedSlides = Math.ceil(
            parseFloat(n.loopedSlides || n.slidesPerView, 10)
          )),
          (e.loopedSlides += n.loopAdditionalSlides),
          e.loopedSlides > s.length && (e.loopedSlides = s.length);
        const o = [],
          a = [];
        s.each((t, n) => {
          const i = b(t);
          n < e.loopedSlides && a.push(t),
            n < s.length && n >= s.length - e.loopedSlides && o.push(t),
            i.attr("data-swiper-slide-index", n);
        });
        for (let e = 0; e < a.length; e += 1)
          r.append(b(a[e].cloneNode(!0)).addClass(n.slideDuplicateClass));
        for (let e = o.length - 1; e >= 0; e -= 1)
          r.prepend(b(o[e].cloneNode(!0)).addClass(n.slideDuplicateClass));
      },
      loopFix: function () {
        const e = this;
        e.emit("beforeLoopFix");
        const {
          activeIndex: t,
          slides: n,
          loopedSlides: i,
          allowSlidePrev: r,
          allowSlideNext: s,
          snapGrid: o,
          rtlTranslate: a,
        } = e;
        let l;
        (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
        const c = -o[t] - e.getTranslate();
        if (t < i) {
          (l = n.length - 3 * i + t), (l += i);
          e.slideTo(l, 0, !1, !0) &&
            0 !== c &&
            e.setTranslate((a ? -e.translate : e.translate) - c);
        } else if (t >= n.length - i) {
          (l = -n.length + t + i), (l += i);
          e.slideTo(l, 0, !1, !0) &&
            0 !== c &&
            e.setTranslate((a ? -e.translate : e.translate) - c);
        }
        (e.allowSlidePrev = r), (e.allowSlideNext = s), e.emit("loopFix");
      },
      loopDestroy: function () {
        const { $wrapperEl: e, params: t, slides: n } = this;
        e
          .children(
            `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
          )
          .remove(),
          n.removeAttr("data-swiper-slide-index");
      },
    };
    function B(e) {
      const t = this,
        n = u(),
        i = f(),
        r = t.touchEventsData,
        { params: s, touches: o, enabled: a } = t;
      if (!a) return;
      if (t.animating && s.preventInteractionOnTransition) return;
      !t.animating && s.cssMode && s.loop && t.loopFix();
      let l = e;
      l.originalEvent && (l = l.originalEvent);
      let c = b(l.target);
      if ("wrapper" === s.touchEventsTarget && !c.closest(t.wrapperEl).length)
        return;
      if (
        ((r.isTouchEvent = "touchstart" === l.type),
        !r.isTouchEvent && "which" in l && 3 === l.which)
      )
        return;
      if (!r.isTouchEvent && "button" in l && l.button > 0) return;
      if (r.isTouched && r.isMoved) return;
      !!s.noSwipingClass &&
        "" !== s.noSwipingClass &&
        l.target &&
        l.target.shadowRoot &&
        e.path &&
        e.path[0] &&
        (c = b(e.path[0]));
      const d = s.noSwipingSelector
          ? s.noSwipingSelector
          : `.${s.noSwipingClass}`,
        p = !(!l.target || !l.target.shadowRoot);
      if (
        s.noSwiping &&
        (p
          ? (function (e, t) {
              return (
                void 0 === t && (t = this),
                (function t(n) {
                  return n && n !== u() && n !== f()
                    ? (n.assignedSlot && (n = n.assignedSlot),
                      n.closest(e) || t(n.getRootNode().host))
                    : null;
                })(t)
              );
            })(d, l.target)
          : c.closest(d)[0])
      )
        return void (t.allowClick = !0);
      if (s.swipeHandler && !c.closest(s.swipeHandler)[0]) return;
      (o.currentX =
        "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX),
        (o.currentY =
          "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY);
      const h = o.currentX,
        g = o.currentY,
        m = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection,
        v = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
      if (m && (h <= v || h >= i.innerWidth - v)) {
        if ("prevent" !== m) return;
        e.preventDefault();
      }
      if (
        (Object.assign(r, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0,
        }),
        (o.startX = h),
        (o.startY = g),
        (r.touchStartTime = C()),
        (t.allowClick = !0),
        t.updateSize(),
        (t.swipeDirection = void 0),
        s.threshold > 0 && (r.allowThresholdMove = !1),
        "touchstart" !== l.type)
      ) {
        let e = !0;
        c.is(r.focusableElements) &&
          ((e = !1), "SELECT" === c[0].nodeName && (r.isTouched = !1)),
          n.activeElement &&
            b(n.activeElement).is(r.focusableElements) &&
            n.activeElement !== c[0] &&
            n.activeElement.blur();
        const i = e && t.allowTouchMove && s.touchStartPreventDefault;
        (!s.touchStartForcePreventDefault && !i) ||
          c[0].isContentEditable ||
          l.preventDefault();
      }
      t.params.freeMode &&
        t.params.freeMode.enabled &&
        t.freeMode &&
        t.animating &&
        !s.cssMode &&
        t.freeMode.onTouchStart(),
        t.emit("touchStart", l);
    }
    function R(e) {
      const t = u(),
        n = this,
        i = n.touchEventsData,
        { params: r, touches: s, rtlTranslate: o, enabled: a } = n;
      if (!a) return;
      let l = e;
      if ((l.originalEvent && (l = l.originalEvent), !i.isTouched))
        return void (
          i.startMoving &&
          i.isScrolling &&
          n.emit("touchMoveOpposite", l)
        );
      if (i.isTouchEvent && "touchmove" !== l.type) return;
      const c =
          "touchmove" === l.type &&
          l.targetTouches &&
          (l.targetTouches[0] || l.changedTouches[0]),
        d = "touchmove" === l.type ? c.pageX : l.pageX,
        p = "touchmove" === l.type ? c.pageY : l.pageY;
      if (l.preventedByNestedSwiper) return (s.startX = d), void (s.startY = p);
      if (!n.allowTouchMove)
        return (
          b(l.target).is(i.focusableElements) || (n.allowClick = !1),
          void (
            i.isTouched &&
            (Object.assign(s, {
              startX: d,
              startY: p,
              currentX: d,
              currentY: p,
            }),
            (i.touchStartTime = C()))
          )
        );
      if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop)
        if (n.isVertical()) {
          if (
            (p < s.startY && n.translate <= n.maxTranslate()) ||
            (p > s.startY && n.translate >= n.minTranslate())
          )
            return (i.isTouched = !1), void (i.isMoved = !1);
        } else if (
          (d < s.startX && n.translate <= n.maxTranslate()) ||
          (d > s.startX && n.translate >= n.minTranslate())
        )
          return;
      if (
        i.isTouchEvent &&
        t.activeElement &&
        l.target === t.activeElement &&
        b(l.target).is(i.focusableElements)
      )
        return (i.isMoved = !0), void (n.allowClick = !1);
      if (
        (i.allowTouchCallbacks && n.emit("touchMove", l),
        l.targetTouches && l.targetTouches.length > 1)
      )
        return;
      (s.currentX = d), (s.currentY = p);
      const f = s.currentX - s.startX,
        h = s.currentY - s.startY;
      if (n.params.threshold && Math.sqrt(f ** 2 + h ** 2) < n.params.threshold)
        return;
      if (void 0 === i.isScrolling) {
        let e;
        (n.isHorizontal() && s.currentY === s.startY) ||
        (n.isVertical() && s.currentX === s.startX)
          ? (i.isScrolling = !1)
          : f * f + h * h >= 25 &&
            ((e = (180 * Math.atan2(Math.abs(h), Math.abs(f))) / Math.PI),
            (i.isScrolling = n.isHorizontal()
              ? e > r.touchAngle
              : 90 - e > r.touchAngle));
      }
      if (
        (i.isScrolling && n.emit("touchMoveOpposite", l),
        void 0 === i.startMoving &&
          ((s.currentX === s.startX && s.currentY === s.startY) ||
            (i.startMoving = !0)),
        i.isScrolling)
      )
        return void (i.isTouched = !1);
      if (!i.startMoving) return;
      (n.allowClick = !1),
        !r.cssMode && l.cancelable && l.preventDefault(),
        r.touchMoveStopPropagation && !r.nested && l.stopPropagation(),
        i.isMoved ||
          (r.loop && !r.cssMode && n.loopFix(),
          (i.startTranslate = n.getTranslate()),
          n.setTransition(0),
          n.animating &&
            n.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
          (i.allowMomentumBounce = !1),
          !r.grabCursor ||
            (!0 !== n.allowSlideNext && !0 !== n.allowSlidePrev) ||
            n.setGrabCursor(!0),
          n.emit("sliderFirstMove", l)),
        n.emit("sliderMove", l),
        (i.isMoved = !0);
      let g = n.isHorizontal() ? f : h;
      (s.diff = g),
        (g *= r.touchRatio),
        o && (g = -g),
        (n.swipeDirection = g > 0 ? "prev" : "next"),
        (i.currentTranslate = g + i.startTranslate);
      let m = !0,
        v = r.resistanceRatio;
      if (
        (r.touchReleaseOnEdges && (v = 0),
        g > 0 && i.currentTranslate > n.minTranslate()
          ? ((m = !1),
            r.resistance &&
              (i.currentTranslate =
                n.minTranslate() -
                1 +
                (-n.minTranslate() + i.startTranslate + g) ** v))
          : g < 0 &&
            i.currentTranslate < n.maxTranslate() &&
            ((m = !1),
            r.resistance &&
              (i.currentTranslate =
                n.maxTranslate() +
                1 -
                (n.maxTranslate() - i.startTranslate - g) ** v)),
        m && (l.preventedByNestedSwiper = !0),
        !n.allowSlideNext &&
          "next" === n.swipeDirection &&
          i.currentTranslate < i.startTranslate &&
          (i.currentTranslate = i.startTranslate),
        !n.allowSlidePrev &&
          "prev" === n.swipeDirection &&
          i.currentTranslate > i.startTranslate &&
          (i.currentTranslate = i.startTranslate),
        n.allowSlidePrev ||
          n.allowSlideNext ||
          (i.currentTranslate = i.startTranslate),
        r.threshold > 0)
      ) {
        if (!(Math.abs(g) > r.threshold || i.allowThresholdMove))
          return void (i.currentTranslate = i.startTranslate);
        if (!i.allowThresholdMove)
          return (
            (i.allowThresholdMove = !0),
            (s.startX = s.currentX),
            (s.startY = s.currentY),
            (i.currentTranslate = i.startTranslate),
            void (s.diff = n.isHorizontal()
              ? s.currentX - s.startX
              : s.currentY - s.startY)
          );
      }
      r.followFinger &&
        !r.cssMode &&
        (((r.freeMode && r.freeMode.enabled && n.freeMode) ||
          r.watchSlidesProgress) &&
          (n.updateActiveIndex(), n.updateSlidesClasses()),
        n.params.freeMode &&
          r.freeMode.enabled &&
          n.freeMode &&
          n.freeMode.onTouchMove(),
        n.updateProgress(i.currentTranslate),
        n.setTranslate(i.currentTranslate));
    }
    function F(e) {
      const t = this,
        n = t.touchEventsData,
        {
          params: i,
          touches: r,
          rtlTranslate: s,
          slidesGrid: o,
          enabled: a,
        } = t;
      if (!a) return;
      let l = e;
      if (
        (l.originalEvent && (l = l.originalEvent),
        n.allowTouchCallbacks && t.emit("touchEnd", l),
        (n.allowTouchCallbacks = !1),
        !n.isTouched)
      )
        return (
          n.isMoved && i.grabCursor && t.setGrabCursor(!1),
          (n.isMoved = !1),
          void (n.startMoving = !1)
        );
      i.grabCursor &&
        n.isMoved &&
        n.isTouched &&
        (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
        t.setGrabCursor(!1);
      const c = C(),
        d = c - n.touchStartTime;
      if (t.allowClick) {
        const e = l.path || (l.composedPath && l.composedPath());
        t.updateClickedSlide((e && e[0]) || l.target),
          t.emit("tap click", l),
          d < 300 &&
            c - n.lastClickTime < 300 &&
            t.emit("doubleTap doubleClick", l);
      }
      if (
        ((n.lastClickTime = C()),
        T(() => {
          t.destroyed || (t.allowClick = !0);
        }),
        !n.isTouched ||
          !n.isMoved ||
          !t.swipeDirection ||
          0 === r.diff ||
          n.currentTranslate === n.startTranslate)
      )
        return (n.isTouched = !1), (n.isMoved = !1), void (n.startMoving = !1);
      let u;
      if (
        ((n.isTouched = !1),
        (n.isMoved = !1),
        (n.startMoving = !1),
        (u = i.followFinger
          ? s
            ? t.translate
            : -t.translate
          : -n.currentTranslate),
        i.cssMode)
      )
        return;
      if (t.params.freeMode && i.freeMode.enabled)
        return void t.freeMode.onTouchEnd({ currentPos: u });
      let p = 0,
        f = t.slidesSizesGrid[0];
      for (
        let e = 0;
        e < o.length;
        e += e < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
      ) {
        const t = e < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
        void 0 !== o[e + t]
          ? u >= o[e] && u < o[e + t] && ((p = e), (f = o[e + t] - o[e]))
          : u >= o[e] && ((p = e), (f = o[o.length - 1] - o[o.length - 2]));
      }
      const h = (u - o[p]) / f,
        g = p < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
      if (d > i.longSwipesMs) {
        if (!i.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection &&
          (h >= i.longSwipesRatio ? t.slideTo(p + g) : t.slideTo(p)),
          "prev" === t.swipeDirection &&
            (h > 1 - i.longSwipesRatio ? t.slideTo(p + g) : t.slideTo(p));
      } else {
        if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation &&
        (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl)
          ? l.target === t.navigation.nextEl
            ? t.slideTo(p + g)
            : t.slideTo(p)
          : ("next" === t.swipeDirection && t.slideTo(p + g),
            "prev" === t.swipeDirection && t.slideTo(p));
      }
    }
    function G() {
      const e = this,
        { params: t, el: n } = e;
      if (n && 0 === n.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      const { allowSlideNext: i, allowSlidePrev: r, snapGrid: s } = e;
      (e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses(),
        ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
        e.isEnd &&
        !e.isBeginning &&
        !e.params.centeredSlides
          ? e.slideTo(e.slides.length - 1, 0, !1, !0)
          : e.slideTo(e.activeIndex, 0, !1, !0),
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.run(),
        (e.allowSlidePrev = r),
        (e.allowSlideNext = i),
        e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow();
    }
    function V(e) {
      const t = this;
      t.enabled &&
        (t.allowClick ||
          (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
            t.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function X() {
      const e = this,
        { wrapperEl: t, rtlTranslate: n, enabled: i } = e;
      if (!i) return;
      let r;
      (e.previousTranslate = e.translate),
        e.isHorizontal()
          ? (e.translate = -t.scrollLeft)
          : (e.translate = -t.scrollTop),
        -0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
      const s = e.maxTranslate() - e.minTranslate();
      (r = 0 === s ? 0 : (e.translate - e.minTranslate()) / s),
        r !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1);
    }
    let Y = !1;
    function U() {}
    const Q = (e, t) => {
      const n = u(),
        {
          params: i,
          touchEvents: r,
          el: s,
          wrapperEl: o,
          device: a,
          support: l,
        } = e,
        c = !!i.nested,
        d = "on" === t ? "addEventListener" : "removeEventListener",
        p = t;
      if (l.touch) {
        const t = !(
          "touchstart" !== r.start ||
          !l.passiveListener ||
          !i.passiveListeners
        ) && { passive: !0, capture: !1 };
        s[d](r.start, e.onTouchStart, t),
          s[d](
            r.move,
            e.onTouchMove,
            l.passiveListener ? { passive: !1, capture: c } : c
          ),
          s[d](r.end, e.onTouchEnd, t),
          r.cancel && s[d](r.cancel, e.onTouchEnd, t);
      } else
        s[d](r.start, e.onTouchStart, !1),
          n[d](r.move, e.onTouchMove, c),
          n[d](r.end, e.onTouchEnd, !1);
      (i.preventClicks || i.preventClicksPropagation) &&
        s[d]("click", e.onClick, !0),
        i.cssMode && o[d]("scroll", e.onScroll),
        i.updateOnWindowResize
          ? e[p](
              a.ios || a.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              G,
              !0
            )
          : e[p]("observerUpdate", G, !0);
    };
    const K = {
        attachEvents: function () {
          const e = this,
            t = u(),
            { params: n, support: i } = e;
          (e.onTouchStart = B.bind(e)),
            (e.onTouchMove = R.bind(e)),
            (e.onTouchEnd = F.bind(e)),
            n.cssMode && (e.onScroll = X.bind(e)),
            (e.onClick = V.bind(e)),
            i.touch && !Y && (t.addEventListener("touchstart", U), (Y = !0)),
            Q(e, "on");
        },
        detachEvents: function () {
          Q(this, "off");
        },
      },
      J = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    const Z = {
      setBreakpoint: function () {
        const e = this,
          {
            activeIndex: t,
            initialized: n,
            loopedSlides: i = 0,
            params: r,
            $el: s,
          } = e,
          o = r.breakpoints;
        if (!o || (o && 0 === Object.keys(o).length)) return;
        const a = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
        if (!a || e.currentBreakpoint === a) return;
        const l = (a in o ? o[a] : void 0) || e.originalParams,
          c = J(e, r),
          d = J(e, l),
          u = r.enabled;
        c && !d
          ? (s.removeClass(
              `${r.containerModifierClass}grid ${r.containerModifierClass}grid-column`
            ),
            e.emitContainerClasses())
          : !c &&
            d &&
            (s.addClass(`${r.containerModifierClass}grid`),
            ((l.grid.fill && "column" === l.grid.fill) ||
              (!l.grid.fill && "column" === r.grid.fill)) &&
              s.addClass(`${r.containerModifierClass}grid-column`),
            e.emitContainerClasses());
        const p = l.direction && l.direction !== r.direction,
          f = r.loop && (l.slidesPerView !== r.slidesPerView || p);
        p && n && e.changeDirection(), L(e.params, l);
        const h = e.params.enabled;
        Object.assign(e, {
          allowTouchMove: e.params.allowTouchMove,
          allowSlideNext: e.params.allowSlideNext,
          allowSlidePrev: e.params.allowSlidePrev,
        }),
          u && !h ? e.disable() : !u && h && e.enable(),
          (e.currentBreakpoint = a),
          e.emit("_beforeBreakpoint", l),
          f &&
            n &&
            (e.loopDestroy(),
            e.loopCreate(),
            e.updateSlides(),
            e.slideTo(t - i + e.loopedSlides, 0, !1)),
          e.emit("breakpoint", l);
      },
      getBreakpoint: function (e, t, n) {
        if ((void 0 === t && (t = "window"), !e || ("container" === t && !n)))
          return;
        let i = !1;
        const r = f(),
          s = "window" === t ? r.innerHeight : n.clientHeight,
          o = Object.keys(e).map((e) => {
            if ("string" == typeof e && 0 === e.indexOf("@")) {
              const t = parseFloat(e.substr(1));
              return { value: s * t, point: e };
            }
            return { value: e, point: e };
          });
        o.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
        for (let e = 0; e < o.length; e += 1) {
          const { point: s, value: a } = o[e];
          "window" === t
            ? r.matchMedia(`(min-width: ${a}px)`).matches && (i = s)
            : a <= n.clientWidth && (i = s);
        }
        return i || "max";
      },
    };
    const ee = {
      addClasses: function () {
        const e = this,
          {
            classNames: t,
            params: n,
            rtl: i,
            $el: r,
            device: s,
            support: o,
          } = e,
          a = (function (e, t) {
            const n = [];
            return (
              e.forEach((e) => {
                "object" == typeof e
                  ? Object.keys(e).forEach((i) => {
                      e[i] && n.push(t + i);
                    })
                  : "string" == typeof e && n.push(t + e);
              }),
              n
            );
          })(
            [
              "initialized",
              n.direction,
              { "pointer-events": !o.touch },
              { "free-mode": e.params.freeMode && n.freeMode.enabled },
              { autoheight: n.autoHeight },
              { rtl: i },
              { grid: n.grid && n.grid.rows > 1 },
              {
                "grid-column":
                  n.grid && n.grid.rows > 1 && "column" === n.grid.fill,
              },
              { android: s.android },
              { ios: s.ios },
              { "css-mode": n.cssMode },
              { centered: n.cssMode && n.centeredSlides },
            ],
            n.containerModifierClass
          );
        t.push(...a), r.addClass([...t].join(" ")), e.emitContainerClasses();
      },
      removeClasses: function () {
        const { $el: e, classNames: t } = this;
        e.removeClass(t.join(" ")), this.emitContainerClasses();
      },
    };
    const te = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      enabled: !0,
      focusableElements:
        "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: !1,
      loopPreventsSlide: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
    function ne(e, t) {
      return function (n) {
        void 0 === n && (n = {});
        const i = Object.keys(n)[0],
          r = n[i];
        "object" == typeof r && null !== r
          ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
              !0 === e[i] &&
              (e[i] = { auto: !0 }),
            i in e && "enabled" in r
              ? (!0 === e[i] && (e[i] = { enabled: !0 }),
                "object" != typeof e[i] ||
                  "enabled" in e[i] ||
                  (e[i].enabled = !0),
                e[i] || (e[i] = { enabled: !1 }),
                L(t, n))
              : L(t, n))
          : L(t, n);
      };
    }
    const ie = {
        eventsEmitter: I,
        update: q,
        translate: z,
        transition: {
          setTransition: function (e, t) {
            const n = this;
            n.params.cssMode || n.$wrapperEl.transition(e),
              n.emit("setTransition", e, t);
          },
          transitionStart: function (e, t) {
            void 0 === e && (e = !0);
            const n = this,
              { params: i } = n;
            i.cssMode ||
              (i.autoHeight && n.updateAutoHeight(),
              H({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
          },
          transitionEnd: function (e, t) {
            void 0 === e && (e = !0);
            const n = this,
              { params: i } = n;
            (n.animating = !1),
              i.cssMode ||
                (n.setTransition(0),
                H({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
          },
        },
        slide: W,
        loop: _,
        grabCursor: {
          setGrabCursor: function (e) {
            const t = this;
            if (
              t.support.touch ||
              !t.params.simulateTouch ||
              (t.params.watchOverflow && t.isLocked) ||
              t.params.cssMode
            )
              return;
            const n =
              "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
            (n.style.cursor = "move"),
              (n.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
              (n.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
              (n.style.cursor = e ? "grabbing" : "grab");
          },
          unsetGrabCursor: function () {
            const e = this;
            e.support.touch ||
              (e.params.watchOverflow && e.isLocked) ||
              e.params.cssMode ||
              (e[
                "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
              ].style.cursor = "");
          },
        },
        events: K,
        breakpoints: Z,
        checkOverflow: {
          checkOverflow: function () {
            const e = this,
              { isLocked: t, params: n } = e,
              { slidesOffsetBefore: i } = n;
            if (i) {
              const t = e.slides.length - 1,
                n = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
              e.isLocked = e.size > n;
            } else e.isLocked = 1 === e.snapGrid.length;
            !0 === n.allowSlideNext && (e.allowSlideNext = !e.isLocked),
              !0 === n.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
              t && t !== e.isLocked && (e.isEnd = !1),
              t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
          },
        },
        classes: ee,
        images: {
          loadImage: function (e, t, n, i, r, s) {
            const o = f();
            let a;
            function l() {
              s && s();
            }
            b(e).parent("picture")[0] || (e.complete && r)
              ? l()
              : t
              ? ((a = new o.Image()),
                (a.onload = l),
                (a.onerror = l),
                i && (a.sizes = i),
                n && (a.srcset = n),
                t && (a.src = t))
              : l();
          },
          preloadImages: function () {
            const e = this;
            function t() {
              null != e &&
                e &&
                !e.destroyed &&
                (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                e.imagesLoaded === e.imagesToLoad.length &&
                  (e.params.updateOnImagesReady && e.update(),
                  e.emit("imagesReady")));
            }
            e.imagesToLoad = e.$el.find("img");
            for (let n = 0; n < e.imagesToLoad.length; n += 1) {
              const i = e.imagesToLoad[n];
              e.loadImage(
                i,
                i.currentSrc || i.getAttribute("src"),
                i.srcset || i.getAttribute("srcset"),
                i.sizes || i.getAttribute("sizes"),
                !0,
                t
              );
            }
          },
        },
      },
      re = {};
    class se {
      constructor() {
        let e, t;
        for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++)
          i[r] = arguments[r];
        if (
          (1 === i.length &&
          i[0].constructor &&
          "Object" === Object.prototype.toString.call(i[0]).slice(8, -1)
            ? (t = i[0])
            : ([e, t] = i),
          t || (t = {}),
          (t = L({}, t)),
          e && !t.el && (t.el = e),
          t.el && b(t.el).length > 1)
        ) {
          const e = [];
          return (
            b(t.el).each((n) => {
              const i = L({}, t, { el: n });
              e.push(new se(i));
            }),
            e
          );
        }
        const s = this;
        (s.__swiper__ = !0),
          (s.support = O()),
          (s.device = $({ userAgent: t.userAgent })),
          (s.browser = j()),
          (s.eventsListeners = {}),
          (s.eventsAnyListeners = []),
          (s.modules = [...s.__modules__]),
          t.modules && Array.isArray(t.modules) && s.modules.push(...t.modules);
        const o = {};
        s.modules.forEach((e) => {
          e({
            swiper: s,
            extendParams: ne(t, o),
            on: s.on.bind(s),
            once: s.once.bind(s),
            off: s.off.bind(s),
            emit: s.emit.bind(s),
          });
        });
        const a = L({}, te, o);
        return (
          (s.params = L({}, a, re, t)),
          (s.originalParams = L({}, s.params)),
          (s.passedParams = L({}, t)),
          s.params &&
            s.params.on &&
            Object.keys(s.params.on).forEach((e) => {
              s.on(e, s.params.on[e]);
            }),
          s.params && s.params.onAny && s.onAny(s.params.onAny),
          (s.$ = b),
          Object.assign(s, {
            enabled: s.params.enabled,
            el: e,
            classNames: [],
            slides: b(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === s.params.direction,
            isVertical: () => "vertical" === s.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: s.params.allowSlideNext,
            allowSlidePrev: s.params.allowSlidePrev,
            touchEvents: (function () {
              const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                t = ["pointerdown", "pointermove", "pointerup"];
              return (
                (s.touchEventsTouch = {
                  start: e[0],
                  move: e[1],
                  end: e[2],
                  cancel: e[3],
                }),
                (s.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
                s.support.touch || !s.params.simulateTouch
                  ? s.touchEventsTouch
                  : s.touchEventsDesktop
              );
            })(),
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: s.params.focusableElements,
              lastClickTime: C(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0,
            },
            allowClick: !0,
            allowTouchMove: s.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          s.emit("_swiper"),
          s.params.init && s.init(),
          s
        );
      }
      enable() {
        const e = this;
        e.enabled ||
          ((e.enabled = !0),
          e.params.grabCursor && e.setGrabCursor(),
          e.emit("enable"));
      }
      disable() {
        const e = this;
        e.enabled &&
          ((e.enabled = !1),
          e.params.grabCursor && e.unsetGrabCursor(),
          e.emit("disable"));
      }
      setProgress(e, t) {
        const n = this;
        e = Math.min(Math.max(e, 0), 1);
        const i = n.minTranslate(),
          r = (n.maxTranslate() - i) * e + i;
        n.translateTo(r, void 0 === t ? 0 : t),
          n.updateActiveIndex(),
          n.updateSlidesClasses();
      }
      emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className
          .split(" ")
          .filter(
            (t) =>
              0 === t.indexOf("swiper") ||
              0 === t.indexOf(e.params.containerModifierClass)
          );
        e.emit("_containerClasses", t.join(" "));
      }
      getSlideClasses(e) {
        const t = this;
        return e.className
          .split(" ")
          .filter(
            (e) =>
              0 === e.indexOf("swiper-slide") ||
              0 === e.indexOf(t.params.slideClass)
          )
          .join(" ");
      }
      emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        e.slides.each((n) => {
          const i = e.getSlideClasses(n);
          t.push({ slideEl: n, classNames: i }), e.emit("_slideClass", n, i);
        }),
          e.emit("_slideClasses", t);
      }
      slidesPerViewDynamic(e, t) {
        void 0 === e && (e = "current"), void 0 === t && (t = !1);
        const {
          params: n,
          slides: i,
          slidesGrid: r,
          slidesSizesGrid: s,
          size: o,
          activeIndex: a,
        } = this;
        let l = 1;
        if (n.centeredSlides) {
          let e,
            t = i[a].swiperSlideSize;
          for (let n = a + 1; n < i.length; n += 1)
            i[n] &&
              !e &&
              ((t += i[n].swiperSlideSize), (l += 1), t > o && (e = !0));
          for (let n = a - 1; n >= 0; n -= 1)
            i[n] &&
              !e &&
              ((t += i[n].swiperSlideSize), (l += 1), t > o && (e = !0));
        } else if ("current" === e)
          for (let e = a + 1; e < i.length; e += 1) {
            (t ? r[e] + s[e] - r[a] < o : r[e] - r[a] < o) && (l += 1);
          }
        else
          for (let e = a - 1; e >= 0; e -= 1) {
            r[a] - r[e] < o && (l += 1);
          }
        return l;
      }
      update() {
        const e = this;
        if (!e || e.destroyed) return;
        const { snapGrid: t, params: n } = e;
        function i() {
          const t = e.rtlTranslate ? -1 * e.translate : e.translate,
            n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let r;
        n.breakpoints && e.setBreakpoint(),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.params.freeMode && e.params.freeMode.enabled
            ? (i(), e.params.autoHeight && e.updateAutoHeight())
            : ((r =
                ("auto" === e.params.slidesPerView ||
                  e.params.slidesPerView > 1) &&
                e.isEnd &&
                !e.params.centeredSlides
                  ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                  : e.slideTo(e.activeIndex, 0, !1, !0)),
              r || i()),
          n.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
          e.emit("update");
      }
      changeDirection(e, t) {
        void 0 === t && (t = !0);
        const n = this,
          i = n.params.direction;
        return (
          e || (e = "horizontal" === i ? "vertical" : "horizontal"),
          e === i ||
            ("horizontal" !== e && "vertical" !== e) ||
            (n.$el
              .removeClass(`${n.params.containerModifierClass}${i}`)
              .addClass(`${n.params.containerModifierClass}${e}`),
            n.emitContainerClasses(),
            (n.params.direction = e),
            n.slides.each((t) => {
              "vertical" === e ? (t.style.width = "") : (t.style.height = "");
            }),
            n.emit("changeDirection"),
            t && n.update()),
          n
        );
      }
      mount(e) {
        const t = this;
        if (t.mounted) return !0;
        const n = b(e || t.params.el);
        if (!(e = n[0])) return !1;
        e.swiper = t;
        const i = () =>
          `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let r = (() => {
          if (e && e.shadowRoot && e.shadowRoot.querySelector) {
            const t = b(e.shadowRoot.querySelector(i()));
            return (t.children = (e) => n.children(e)), t;
          }
          return n.children(i());
        })();
        if (0 === r.length && t.params.createElements) {
          const e = u().createElement("div");
          (r = b(e)),
            (e.className = t.params.wrapperClass),
            n.append(e),
            n.children(`.${t.params.slideClass}`).each((e) => {
              r.append(e);
            });
        }
        return (
          Object.assign(t, {
            $el: n,
            el: e,
            $wrapperEl: r,
            wrapperEl: r[0],
            mounted: !0,
            rtl: "rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction"),
            rtlTranslate:
              "horizontal" === t.params.direction &&
              ("rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction")),
            wrongRTL: "-webkit-box" === r.css("display"),
          }),
          !0
        );
      }
      init(e) {
        const t = this;
        if (t.initialized) return t;
        return (
          !1 === t.mount(e) ||
            (t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.params.loop && t.loopCreate(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.preloadImages && t.preloadImages(),
            t.params.loop
              ? t.slideTo(
                  t.params.initialSlide + t.loopedSlides,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                )
              : t.slideTo(
                  t.params.initialSlide,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                ),
            t.attachEvents(),
            (t.initialized = !0),
            t.emit("init"),
            t.emit("afterInit")),
          t
        );
      }
      destroy(e, t) {
        void 0 === e && (e = !0), void 0 === t && (t = !0);
        const n = this,
          { params: i, $el: r, $wrapperEl: s, slides: o } = n;
        return (
          void 0 === n.params ||
            n.destroyed ||
            (n.emit("beforeDestroy"),
            (n.initialized = !1),
            n.detachEvents(),
            i.loop && n.loopDestroy(),
            t &&
              (n.removeClasses(),
              r.removeAttr("style"),
              s.removeAttr("style"),
              o &&
                o.length &&
                o
                  .removeClass(
                    [
                      i.slideVisibleClass,
                      i.slideActiveClass,
                      i.slideNextClass,
                      i.slidePrevClass,
                    ].join(" ")
                  )
                  .removeAttr("style")
                  .removeAttr("data-swiper-slide-index")),
            n.emit("destroy"),
            Object.keys(n.eventsListeners).forEach((e) => {
              n.off(e);
            }),
            !1 !== e &&
              ((n.$el[0].swiper = null),
              (function (e) {
                const t = e;
                Object.keys(t).forEach((e) => {
                  try {
                    t[e] = null;
                  } catch (e) {}
                  try {
                    delete t[e];
                  } catch (e) {}
                });
              })(n)),
            (n.destroyed = !0)),
          null
        );
      }
      static extendDefaults(e) {
        L(re, e);
      }
      static get extendedDefaults() {
        return re;
      }
      static get defaults() {
        return te;
      }
      static installModule(e) {
        se.prototype.__modules__ || (se.prototype.__modules__ = []);
        const t = se.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
      static use(e) {
        return Array.isArray(e)
          ? (e.forEach((e) => se.installModule(e)), se)
          : (se.installModule(e), se);
      }
    }
    Object.keys(ie).forEach((e) => {
      Object.keys(ie[e]).forEach((t) => {
        se.prototype[t] = ie[e][t];
      });
    }),
      se.use([
        function (e) {
          let { swiper: t, on: n, emit: i } = e;
          const r = f();
          let s = null;
          const o = () => {
              t &&
                !t.destroyed &&
                t.initialized &&
                (i("beforeResize"), i("resize"));
            },
            a = () => {
              t && !t.destroyed && t.initialized && i("orientationchange");
            };
          n("init", () => {
            t.params.resizeObserver && void 0 !== r.ResizeObserver
              ? t &&
                !t.destroyed &&
                t.initialized &&
                ((s = new ResizeObserver((e) => {
                  const { width: n, height: i } = t;
                  let r = n,
                    s = i;
                  e.forEach((e) => {
                    let { contentBoxSize: n, contentRect: i, target: o } = e;
                    (o && o !== t.el) ||
                      ((r = i ? i.width : (n[0] || n).inlineSize),
                      (s = i ? i.height : (n[0] || n).blockSize));
                  }),
                    (r === n && s === i) || o();
                })),
                s.observe(t.el))
              : (r.addEventListener("resize", o),
                r.addEventListener("orientationchange", a));
          }),
            n("destroy", () => {
              s && s.unobserve && t.el && (s.unobserve(t.el), (s = null)),
                r.removeEventListener("resize", o),
                r.removeEventListener("orientationchange", a);
            });
        },
        function (e) {
          let { swiper: t, extendParams: n, on: i, emit: r } = e;
          const s = [],
            o = f(),
            a = function (e, t) {
              void 0 === t && (t = {});
              const n = new (o.MutationObserver || o.WebkitMutationObserver)(
                (e) => {
                  if (1 === e.length) return void r("observerUpdate", e[0]);
                  const t = function () {
                    r("observerUpdate", e[0]);
                  };
                  o.requestAnimationFrame
                    ? o.requestAnimationFrame(t)
                    : o.setTimeout(t, 0);
                }
              );
              n.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData,
              }),
                s.push(n);
            };
          n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
            i("init", () => {
              if (t.params.observer) {
                if (t.params.observeParents) {
                  const e = t.$el.parents();
                  for (let t = 0; t < e.length; t += 1) a(e[t]);
                }
                a(t.$el[0], { childList: t.params.observeSlideChildren }),
                  a(t.$wrapperEl[0], { attributes: !1 });
              }
            }),
            i("destroy", () => {
              s.forEach((e) => {
                e.disconnect();
              }),
                s.splice(0, s.length);
            });
        },
      ]);
    const oe = se;
    function ae(e) {
      let { swiper: t, extendParams: n, on: i, emit: r } = e;
      function s(e) {
        let n;
        return (
          e &&
            ((n = b(e)),
            t.params.uniqueNavElements &&
              "string" == typeof e &&
              n.length > 1 &&
              1 === t.$el.find(e).length &&
              (n = t.$el.find(e))),
          n
        );
      }
      function o(e, n) {
        const i = t.params.navigation;
        e &&
          e.length > 0 &&
          (e[n ? "addClass" : "removeClass"](i.disabledClass),
          e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = n),
          t.params.watchOverflow &&
            t.enabled &&
            e[t.isLocked ? "addClass" : "removeClass"](i.lockClass));
      }
      function a() {
        if (t.params.loop) return;
        const { $nextEl: e, $prevEl: n } = t.navigation;
        o(n, t.isBeginning && !t.params.rewind),
          o(e, t.isEnd && !t.params.rewind);
      }
      function l(e) {
        e.preventDefault(),
          (!t.isBeginning || t.params.loop || t.params.rewind) && t.slidePrev();
      }
      function c(e) {
        e.preventDefault(),
          (!t.isEnd || t.params.loop || t.params.rewind) && t.slideNext();
      }
      function d() {
        const e = t.params.navigation;
        if (
          ((t.params.navigation = (function (e, t, n, i) {
            const r = u();
            return (
              e.params.createElements &&
                Object.keys(i).forEach((s) => {
                  if (!n[s] && !0 === n.auto) {
                    let o = e.$el.children(`.${i[s]}`)[0];
                    o ||
                      ((o = r.createElement("div")),
                      (o.className = i[s]),
                      e.$el.append(o)),
                      (n[s] = o),
                      (t[s] = o);
                  }
                }),
              n
            );
          })(t, t.originalParams.navigation, t.params.navigation, {
            nextEl: "swiper-button-next",
            prevEl: "swiper-button-prev",
          })),
          !e.nextEl && !e.prevEl)
        )
          return;
        const n = s(e.nextEl),
          i = s(e.prevEl);
        n && n.length > 0 && n.on("click", c),
          i && i.length > 0 && i.on("click", l),
          Object.assign(t.navigation, {
            $nextEl: n,
            nextEl: n && n[0],
            $prevEl: i,
            prevEl: i && i[0],
          }),
          t.enabled ||
            (n && n.addClass(e.lockClass), i && i.addClass(e.lockClass));
      }
      function p() {
        const { $nextEl: e, $prevEl: n } = t.navigation;
        e &&
          e.length &&
          (e.off("click", c), e.removeClass(t.params.navigation.disabledClass)),
          n &&
            n.length &&
            (n.off("click", l),
            n.removeClass(t.params.navigation.disabledClass));
      }
      n({
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "swiper-button-disabled",
          hiddenClass: "swiper-button-hidden",
          lockClass: "swiper-button-lock",
        },
      }),
        (t.navigation = {
          nextEl: null,
          $nextEl: null,
          prevEl: null,
          $prevEl: null,
        }),
        i("init", () => {
          d(), a();
        }),
        i("toEdge fromEdge lock unlock", () => {
          a();
        }),
        i("destroy", () => {
          p();
        }),
        i("enable disable", () => {
          const { $nextEl: e, $prevEl: n } = t.navigation;
          e &&
            e[t.enabled ? "removeClass" : "addClass"](
              t.params.navigation.lockClass
            ),
            n &&
              n[t.enabled ? "removeClass" : "addClass"](
                t.params.navigation.lockClass
              );
        }),
        i("click", (e, n) => {
          const { $nextEl: i, $prevEl: s } = t.navigation,
            o = n.target;
          if (t.params.navigation.hideOnClick && !b(o).is(s) && !b(o).is(i)) {
            if (
              t.pagination &&
              t.params.pagination &&
              t.params.pagination.clickable &&
              (t.pagination.el === o || t.pagination.el.contains(o))
            )
              return;
            let e;
            i
              ? (e = i.hasClass(t.params.navigation.hiddenClass))
              : s && (e = s.hasClass(t.params.navigation.hiddenClass)),
              r(!0 === e ? "navigationShow" : "navigationHide"),
              i && i.toggleClass(t.params.navigation.hiddenClass),
              s && s.toggleClass(t.params.navigation.hiddenClass);
          }
        }),
        Object.assign(t.navigation, { update: a, init: d, destroy: p });
    }
    function le(e) {
      let { swiper: t, extendParams: n, on: i, emit: r } = e;
      n({
        lazy: {
          checkInView: !1,
          enabled: !1,
          loadPrevNext: !1,
          loadPrevNextAmount: 1,
          loadOnTransitionStart: !1,
          scrollingElement: "",
          elementClass: "swiper-lazy",
          loadingClass: "swiper-lazy-loading",
          loadedClass: "swiper-lazy-loaded",
          preloaderClass: "swiper-lazy-preloader",
        },
      }),
        (t.lazy = {});
      let s = !1,
        o = !1;
      function a(e, n) {
        void 0 === n && (n = !0);
        const i = t.params.lazy;
        if (void 0 === e) return;
        if (0 === t.slides.length) return;
        const s =
            t.virtual && t.params.virtual.enabled
              ? t.$wrapperEl.children(
                  `.${t.params.slideClass}[data-swiper-slide-index="${e}"]`
                )
              : t.slides.eq(e),
          o = s.find(
            `.${i.elementClass}:not(.${i.loadedClass}):not(.${i.loadingClass})`
          );
        !s.hasClass(i.elementClass) ||
          s.hasClass(i.loadedClass) ||
          s.hasClass(i.loadingClass) ||
          o.push(s[0]),
          0 !== o.length &&
            o.each((e) => {
              const o = b(e);
              o.addClass(i.loadingClass);
              const l = o.attr("data-background"),
                c = o.attr("data-src"),
                d = o.attr("data-srcset"),
                u = o.attr("data-sizes"),
                p = o.parent("picture");
              t.loadImage(o[0], c || l, d, u, !1, () => {
                if (null != t && t && (!t || t.params) && !t.destroyed) {
                  if (
                    (l
                      ? (o.css("background-image", `url("${l}")`),
                        o.removeAttr("data-background"))
                      : (d &&
                          (o.attr("srcset", d), o.removeAttr("data-srcset")),
                        u && (o.attr("sizes", u), o.removeAttr("data-sizes")),
                        p.length &&
                          p.children("source").each((e) => {
                            const t = b(e);
                            t.attr("data-srcset") &&
                              (t.attr("srcset", t.attr("data-srcset")),
                              t.removeAttr("data-srcset"));
                          }),
                        c && (o.attr("src", c), o.removeAttr("data-src"))),
                    o.addClass(i.loadedClass).removeClass(i.loadingClass),
                    s.find(`.${i.preloaderClass}`).remove(),
                    t.params.loop && n)
                  ) {
                    const e = s.attr("data-swiper-slide-index");
                    if (s.hasClass(t.params.slideDuplicateClass)) {
                      a(
                        t.$wrapperEl
                          .children(
                            `[data-swiper-slide-index="${e}"]:not(.${t.params.slideDuplicateClass})`
                          )
                          .index(),
                        !1
                      );
                    } else {
                      a(
                        t.$wrapperEl
                          .children(
                            `.${t.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`
                          )
                          .index(),
                        !1
                      );
                    }
                  }
                  r("lazyImageReady", s[0], o[0]),
                    t.params.autoHeight && t.updateAutoHeight();
                }
              }),
                r("lazyImageLoad", s[0], o[0]);
            });
      }
      function l() {
        const { $wrapperEl: e, params: n, slides: i, activeIndex: r } = t,
          s = t.virtual && n.virtual.enabled,
          l = n.lazy;
        let c = n.slidesPerView;
        function d(t) {
          if (s) {
            if (
              e.children(`.${n.slideClass}[data-swiper-slide-index="${t}"]`)
                .length
            )
              return !0;
          } else if (i[t]) return !0;
          return !1;
        }
        function u(e) {
          return s ? b(e).attr("data-swiper-slide-index") : b(e).index();
        }
        if (
          ("auto" === c && (c = 0), o || (o = !0), t.params.watchSlidesProgress)
        )
          e.children(`.${n.slideVisibleClass}`).each((e) => {
            a(s ? b(e).attr("data-swiper-slide-index") : b(e).index());
          });
        else if (c > 1) for (let e = r; e < r + c; e += 1) d(e) && a(e);
        else a(r);
        if (l.loadPrevNext)
          if (c > 1 || (l.loadPrevNextAmount && l.loadPrevNextAmount > 1)) {
            const e = l.loadPrevNextAmount,
              t = c,
              n = Math.min(r + t + Math.max(e, t), i.length),
              s = Math.max(r - Math.max(t, e), 0);
            for (let e = r + c; e < n; e += 1) d(e) && a(e);
            for (let e = s; e < r; e += 1) d(e) && a(e);
          } else {
            const t = e.children(`.${n.slideNextClass}`);
            t.length > 0 && a(u(t));
            const i = e.children(`.${n.slidePrevClass}`);
            i.length > 0 && a(u(i));
          }
      }
      function c() {
        const e = f();
        if (!t || t.destroyed) return;
        const n = t.params.lazy.scrollingElement
            ? b(t.params.lazy.scrollingElement)
            : b(e),
          i = n[0] === e,
          r = i ? e.innerWidth : n[0].offsetWidth,
          o = i ? e.innerHeight : n[0].offsetHeight,
          a = t.$el.offset(),
          { rtlTranslate: d } = t;
        let u = !1;
        d && (a.left -= t.$el[0].scrollLeft);
        const p = [
          [a.left, a.top],
          [a.left + t.width, a.top],
          [a.left, a.top + t.height],
          [a.left + t.width, a.top + t.height],
        ];
        for (let e = 0; e < p.length; e += 1) {
          const t = p[e];
          if (t[0] >= 0 && t[0] <= r && t[1] >= 0 && t[1] <= o) {
            if (0 === t[0] && 0 === t[1]) continue;
            u = !0;
          }
        }
        const h = !(
          "touchstart" !== t.touchEvents.start ||
          !t.support.passiveListener ||
          !t.params.passiveListeners
        ) && { passive: !0, capture: !1 };
        u
          ? (l(), n.off("scroll", c, h))
          : s || ((s = !0), n.on("scroll", c, h));
      }
      i("beforeInit", () => {
        t.params.lazy.enabled &&
          t.params.preloadImages &&
          (t.params.preloadImages = !1);
      }),
        i("init", () => {
          t.params.lazy.enabled && (t.params.lazy.checkInView ? c() : l());
        }),
        i("scroll", () => {
          t.params.freeMode &&
            t.params.freeMode.enabled &&
            !t.params.freeMode.sticky &&
            l();
        }),
        i("scrollbarDragMove resize _freeModeNoMomentumRelease", () => {
          t.params.lazy.enabled && (t.params.lazy.checkInView ? c() : l());
        }),
        i("transitionStart", () => {
          t.params.lazy.enabled &&
            (t.params.lazy.loadOnTransitionStart ||
              (!t.params.lazy.loadOnTransitionStart && !o)) &&
            (t.params.lazy.checkInView ? c() : l());
        }),
        i("transitionEnd", () => {
          t.params.lazy.enabled &&
            !t.params.lazy.loadOnTransitionStart &&
            (t.params.lazy.checkInView ? c() : l());
        }),
        i("slideChange", () => {
          const {
            lazy: e,
            cssMode: n,
            watchSlidesProgress: i,
            touchReleaseOnEdges: r,
            resistanceRatio: s,
          } = t.params;
          e.enabled && (n || (i && (r || 0 === s))) && l();
        }),
        Object.assign(t.lazy, { load: l, loadInSlide: a });
    }
    function ce() {
      let e = document.querySelectorAll(
        '[class*="__swiper"]:not(.swiper-wrapper)'
      );
      e &&
        e.forEach((e) => {
          e.parentElement.classList.add("swiper"),
            e.classList.add("swiper-wrapper");
          for (const t of e.children) t.classList.add("swiper-slide");
        });
    }
    window.addEventListener("load", function (e) {
      ce(),
        document.querySelector(".team") &&
          new oe(".team__slider", {
            modules: [ae, le],
            grabCursor: !0,
            observer: !0,
            observeParents: !0,
            slidesPerView: 3,
            speed: 500,
            lazy: !0,
            lazy: { loadPrevNext: !0 },
            navigation: { nextEl: ".team__next", prevEl: ".team__prev" },
            breakpoints: {
              320: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              992: { slidesPerView: 2, spaceBetween: 20 },
              1240: { slidesPerView: 3, spaceBetween: 30 },
            },
            on: {},
          });
    });
    class de {
      constructor(e) {
        (this.config = Object.assign({ logging: !0 }, e)),
          this.observer,
          !document.documentElement.classList.contains("watcher") &&
            this.scrollWatcherRun();
      }
      scrollWatcherUpdate() {
        this.scrollWatcherRun();
      }
      scrollWatcherRun() {
        document.documentElement.classList.add("watcher"),
          this.scrollWatcherConstructor(
            document.querySelectorAll("[data-watch]")
          );
      }
      scrollWatcherConstructor(e) {
        if (e.length) {
          this.scrollWatcherLogging(
            `Проснулся, слежу за объектами (${e.length})...`
          ),
            o(
              Array.from(e).map(function (e) {
                return `${
                  e.dataset.watchRoot ? e.dataset.watchRoot : null
                }|${e.dataset.watchMargin ? e.dataset.watchMargin : "0px"}|${e.dataset.watchThreshold ? e.dataset.watchThreshold : 0}`;
              })
            ).forEach((t) => {
              let n = t.split("|"),
                i = { root: n[0], margin: n[1], threshold: n[2] },
                r = Array.from(e).filter(function (e) {
                  let t = e.dataset.watchRoot ? e.dataset.watchRoot : null,
                    n = e.dataset.watchMargin ? e.dataset.watchMargin : "0px",
                    r = e.dataset.watchThreshold ? e.dataset.watchThreshold : 0;
                  if (
                    String(t) === i.root &&
                    String(n) === i.margin &&
                    String(r) === i.threshold
                  )
                    return e;
                }),
                s = this.getScrollWatcherConfig(i);
              this.scrollWatcherInit(r, s);
            });
        } else
          this.scrollWatcherLogging("Сплю, нет объектов для слежения. ZzzZZzz");
      }
      getScrollWatcherConfig(e) {
        let t = {};
        if (
          (document.querySelector(e.root)
            ? (t.root = document.querySelector(e.root))
            : "null" !== e.root &&
              this.scrollWatcherLogging(
                `Эмм... родительского объекта ${e.root} нет на странице`
              ),
          (t.rootMargin = e.margin),
          !(e.margin.indexOf("px") < 0 && e.margin.indexOf("%") < 0))
        ) {
          if ("prx" === e.threshold) {
            e.threshold = [];
            for (let t = 0; t <= 1; t += 0.005) e.threshold.push(t);
          } else e.threshold = e.threshold.split(",");
          return (t.threshold = e.threshold), t;
        }
        this.scrollWatcherLogging(
          "Ой ой, настройку data-watch-margin нужно задавать в PX или %"
        );
      }
      scrollWatcherCreate(e) {
        this.observer = new IntersectionObserver((e, t) => {
          e.forEach((e) => {
            this.scrollWatcherCallback(e, t);
          });
        }, e);
      }
      scrollWatcherInit(e, t) {
        this.scrollWatcherCreate(t), e.forEach((e) => this.observer.observe(e));
      }
      scrollWatcherIntersecting(e, t) {
        e.isIntersecting
          ? (!t.classList.contains("_watcher-view") &&
              t.classList.add("_watcher-view"),
            this.scrollWatcherLogging(
              `Я вижу ${t.classList}, добавил класс _watcher-view`
            ))
          : (t.classList.contains("_watcher-view") &&
              t.classList.remove("_watcher-view"),
            this.scrollWatcherLogging(
              `Я не вижу ${t.classList}, убрал класс _watcher-view`
            ));
      }
      scrollWatcherOff(e, t) {
        t.unobserve(e),
          this.scrollWatcherLogging(`Я перестал следить за ${e.classList}`);
      }
      scrollWatcherLogging(e) {
        this.config.logging && s(`[Наблюдатель]: ${e}`);
      }
      scrollWatcherCallback(e, t) {
        const n = e.target;
        this.scrollWatcherIntersecting(e, n),
          n.hasAttribute("data-watch-once") &&
            e.isIntersecting &&
            this.scrollWatcherOff(n, t),
          document.dispatchEvent(
            new CustomEvent("watcherCallback", { detail: { entry: e } })
          );
      }
    }
    let ue = !1;
    setTimeout(() => {
      if (ue) {
        let e = new Event("windowScroll");
        window.addEventListener("scroll", function (t) {
          document.dispatchEvent(e);
        });
      }
    }, 0);
    n(641);
    (window.FLS = !1),
      (function (e) {
        let t = new Image();
        (t.onload = t.onerror =
          function () {
            e(2 == t.height);
          }),
          (t.src =
            "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
      })(function (e) {
        let t = !0 === e ? "webp" : "no-webp";
        document.documentElement.classList.add(t);
      }),
      window.addEventListener("load", function () {
        setTimeout(function () {
          document.documentElement.classList.add("loaded");
        }, 0);
      }),
      (function () {
        let e = document.querySelector(".icon-menu");
        e &&
          e.addEventListener("click", function (e) {
            t &&
              (((e = 500) => {
                document.documentElement.classList.contains("lock")
                  ? i(e)
                  : r(e);
              })(),
              document.documentElement.classList.toggle("menu-open"));
          });
      })(),
      (function () {
        if (document.querySelectorAll("[data-fullscreen]").length && e.any()) {
          function e() {
            let e = 0.01 * window.innerHeight;
            document.documentElement.style.setProperty("--vh", `${e}px`);
          }
          window.addEventListener("resize", e), e();
        }
      })(),
      new de({}),
      (function () {
        function e(e) {
          if ("click" === e.type) {
            const t = e.target;
            if (t.closest("[data-goto]")) {
              const n = t.closest("[data-goto]"),
                i = n.dataset.goto ? n.dataset.goto : "",
                r = !!n.hasAttribute("data-goto-header"),
                s = n.dataset.gotoSpeed ? n.dataset.gotoSpeed : "500";
              a(i, r, s), e.preventDefault();
            }
          } else if ("watcherCallback" === e.type && e.detail) {
            const t = e.detail.entry,
              n = t.target;
            if ("navigator" === n.dataset.watch) {
              const e = n.id,
                i =
                  (document.querySelector("[data-goto]._navigator-active"),
                  document.querySelector(`[data-goto="${e}"]`));
              t.isIntersecting
                ? i && i.classList.add("_navigator-active")
                : i && i.classList.remove("_navigator-active");
            }
          }
        }
        document.addEventListener("click", e),
          document.addEventListener("watcherCallback", e);
      })(),
      (function () {
        ue = !0;
        const e = document.querySelector("header.header"),
          t = e.hasAttribute("data-scroll-show"),
          n = e.dataset.scrollShow ? e.dataset.scrollShow : 500,
          i = e.dataset.scroll ? e.dataset.scroll : 1;
        let r,
          s = 0;
        document.addEventListener("windowScroll", function (o) {
          const a = window.scrollY;
          clearTimeout(r),
            a >= i
              ? (!e.classList.contains("_header-scroll") &&
                  e.classList.add("_header-scroll"),
                t &&
                  (a > s
                    ? e.classList.contains("_header-show") &&
                      e.classList.remove("_header-show")
                    : !e.classList.contains("_header-show") &&
                      e.classList.add("_header-show"),
                  (r = setTimeout(() => {
                    !e.classList.contains("_header-show") &&
                      e.classList.add("_header-show");
                  }, n))))
              : (e.classList.contains("_header-scroll") &&
                  e.classList.remove("_header-scroll"),
                t &&
                  e.classList.contains("_header-show") &&
                  e.classList.remove("_header-show")),
            (s = a <= 0 ? 0 : a);
        });
      })();
  })();
})();
