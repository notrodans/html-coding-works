(() => {
  var e = {
      732: function (e) {
        e.exports = (function () {
          "use strict";
          function e() {
            return (
              (e =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var s = arguments[t];
                    for (var n in s)
                      Object.prototype.hasOwnProperty.call(s, n) &&
                        (e[n] = s[n]);
                  }
                  return e;
                }),
              e.apply(this, arguments)
            );
          }
          var t = "undefined" != typeof window,
            s =
              (t && !("onscroll" in window)) ||
              ("undefined" != typeof navigator &&
                /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
            n = t && "IntersectionObserver" in window,
            i = t && "classList" in document.createElement("p"),
            r = t && window.devicePixelRatio > 1,
            a = {
              elements_selector: ".lazy",
              container: s || t ? document : null,
              threshold: 300,
              thresholds: null,
              data_src: "src",
              data_srcset: "srcset",
              data_sizes: "sizes",
              data_bg: "bg",
              data_bg_hidpi: "bg-hidpi",
              data_bg_multi: "bg-multi",
              data_bg_multi_hidpi: "bg-multi-hidpi",
              data_poster: "poster",
              class_applied: "applied",
              class_loading: "loading",
              class_loaded: "loaded",
              class_error: "error",
              class_entered: "entered",
              class_exited: "exited",
              unobserve_completed: !0,
              unobserve_entered: !1,
              cancel_on_exit: !0,
              callback_enter: null,
              callback_exit: null,
              callback_applied: null,
              callback_loading: null,
              callback_loaded: null,
              callback_error: null,
              callback_finish: null,
              callback_cancel: null,
              use_native: !1,
            },
            o = function (t) {
              return e({}, a, t);
            },
            l = function (e, t) {
              var s,
                n = "LazyLoad::Initialized",
                i = new e(t);
              try {
                s = new CustomEvent(n, { detail: { instance: i } });
              } catch (e) {
                (s = document.createEvent("CustomEvent")).initCustomEvent(
                  n,
                  !1,
                  !1,
                  { instance: i }
                );
              }
              window.dispatchEvent(s);
            },
            d = "src",
            c = "srcset",
            u = "sizes",
            p = "poster",
            f = "llOriginalAttrs",
            h = "loading",
            m = "loaded",
            g = "applied",
            v = "error",
            w = "native",
            b = "data-",
            S = "ll-status",
            T = function (e, t) {
              return e.getAttribute(b + t);
            },
            y = function (e) {
              return T(e, S);
            },
            E = function (e, t) {
              return (function (e, t, s) {
                var n = "data-ll-status";
                null !== s ? e.setAttribute(n, s) : e.removeAttribute(n);
              })(e, 0, t);
            },
            x = function (e) {
              return E(e, null);
            },
            C = function (e) {
              return null === y(e);
            },
            L = function (e) {
              return y(e) === w;
            },
            k = [h, m, g, v],
            M = function (e, t, s, n) {
              e &&
                (void 0 === n ? (void 0 === s ? e(t) : e(t, s)) : e(t, s, n));
            },
            _ = function (e, t) {
              i
                ? e.classList.add(t)
                : (e.className += (e.className ? " " : "") + t);
            },
            P = function (e, t) {
              i
                ? e.classList.remove(t)
                : (e.className = e.className
                    .replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ")
                    .replace(/^\s+/, "")
                    .replace(/\s+$/, ""));
            },
            O = function (e) {
              return e.llTempImage;
            },
            $ = function (e, t) {
              if (t) {
                var s = t._observer;
                s && s.unobserve(e);
              }
            },
            A = function (e, t) {
              e && (e.loadingCount += t);
            },
            I = function (e, t) {
              e && (e.toLoadCount = t);
            },
            z = function (e) {
              for (var t, s = [], n = 0; (t = e.children[n]); n += 1)
                "SOURCE" === t.tagName && s.push(t);
              return s;
            },
            D = function (e, t) {
              var s = e.parentNode;
              s && "PICTURE" === s.tagName && z(s).forEach(t);
            },
            G = function (e, t) {
              z(e).forEach(t);
            },
            N = [d],
            B = [d, p],
            V = [d, c, u],
            H = function (e) {
              return !!e[f];
            },
            j = function (e) {
              return e[f];
            },
            F = function (e) {
              return delete e[f];
            },
            R = function (e, t) {
              if (!H(e)) {
                var s = {};
                t.forEach(function (t) {
                  s[t] = e.getAttribute(t);
                }),
                  (e[f] = s);
              }
            },
            W = function (e, t) {
              if (H(e)) {
                var s = j(e);
                t.forEach(function (t) {
                  !(function (e, t, s) {
                    s ? e.setAttribute(t, s) : e.removeAttribute(t);
                  })(e, t, s[t]);
                });
              }
            },
            q = function (e, t, s) {
              _(e, t.class_loading),
                E(e, h),
                s && (A(s, 1), M(t.callback_loading, e, s));
            },
            Y = function (e, t, s) {
              s && e.setAttribute(t, s);
            },
            X = function (e, t) {
              Y(e, u, T(e, t.data_sizes)),
                Y(e, c, T(e, t.data_srcset)),
                Y(e, d, T(e, t.data_src));
            },
            U = {
              IMG: function (e, t) {
                D(e, function (e) {
                  R(e, V), X(e, t);
                }),
                  R(e, V),
                  X(e, t);
              },
              IFRAME: function (e, t) {
                R(e, N), Y(e, d, T(e, t.data_src));
              },
              VIDEO: function (e, t) {
                G(e, function (e) {
                  R(e, N), Y(e, d, T(e, t.data_src));
                }),
                  R(e, B),
                  Y(e, p, T(e, t.data_poster)),
                  Y(e, d, T(e, t.data_src)),
                  e.load();
              },
            },
            K = ["IMG", "IFRAME", "VIDEO"],
            Q = function (e, t) {
              !t ||
                (function (e) {
                  return e.loadingCount > 0;
                })(t) ||
                (function (e) {
                  return e.toLoadCount > 0;
                })(t) ||
                M(e.callback_finish, t);
            },
            J = function (e, t, s) {
              e.addEventListener(t, s), (e.llEvLisnrs[t] = s);
            },
            Z = function (e, t, s) {
              e.removeEventListener(t, s);
            },
            ee = function (e) {
              return !!e.llEvLisnrs;
            },
            te = function (e) {
              if (ee(e)) {
                var t = e.llEvLisnrs;
                for (var s in t) {
                  var n = t[s];
                  Z(e, s, n);
                }
                delete e.llEvLisnrs;
              }
            },
            se = function (e, t, s) {
              !(function (e) {
                delete e.llTempImage;
              })(e),
                A(s, -1),
                (function (e) {
                  e && (e.toLoadCount -= 1);
                })(s),
                P(e, t.class_loading),
                t.unobserve_completed && $(e, s);
            },
            ne = function (e, t, s) {
              var n = O(e) || e;
              ee(n) ||
                (function (e, t, s) {
                  ee(e) || (e.llEvLisnrs = {});
                  var n = "VIDEO" === e.tagName ? "loadeddata" : "load";
                  J(e, n, t), J(e, "error", s);
                })(
                  n,
                  function (i) {
                    !(function (e, t, s, n) {
                      var i = L(t);
                      se(t, s, n),
                        _(t, s.class_loaded),
                        E(t, m),
                        M(s.callback_loaded, t, n),
                        i || Q(s, n);
                    })(0, e, t, s),
                      te(n);
                  },
                  function (i) {
                    !(function (e, t, s, n) {
                      var i = L(t);
                      se(t, s, n),
                        _(t, s.class_error),
                        E(t, v),
                        M(s.callback_error, t, n),
                        i || Q(s, n);
                    })(0, e, t, s),
                      te(n);
                  }
                );
            },
            ie = function (e, t, s) {
              !(function (e) {
                e.llTempImage = document.createElement("IMG");
              })(e),
                ne(e, t, s),
                (function (e) {
                  H(e) || (e[f] = { backgroundImage: e.style.backgroundImage });
                })(e),
                (function (e, t, s) {
                  var n = T(e, t.data_bg),
                    i = T(e, t.data_bg_hidpi),
                    a = r && i ? i : n;
                  a &&
                    ((e.style.backgroundImage = 'url("'.concat(a, '")')),
                    O(e).setAttribute(d, a),
                    q(e, t, s));
                })(e, t, s),
                (function (e, t, s) {
                  var n = T(e, t.data_bg_multi),
                    i = T(e, t.data_bg_multi_hidpi),
                    a = r && i ? i : n;
                  a &&
                    ((e.style.backgroundImage = a),
                    (function (e, t, s) {
                      _(e, t.class_applied),
                        E(e, g),
                        s &&
                          (t.unobserve_completed && $(e, t),
                          M(t.callback_applied, e, s));
                    })(e, t, s));
                })(e, t, s);
            },
            re = function (e, t, s) {
              !(function (e) {
                return K.indexOf(e.tagName) > -1;
              })(e)
                ? ie(e, t, s)
                : (function (e, t, s) {
                    ne(e, t, s),
                      (function (e, t, s) {
                        var n = U[e.tagName];
                        n && (n(e, t), q(e, t, s));
                      })(e, t, s);
                  })(e, t, s);
            },
            ae = function (e) {
              e.removeAttribute(d), e.removeAttribute(c), e.removeAttribute(u);
            },
            oe = function (e) {
              D(e, function (e) {
                W(e, V);
              }),
                W(e, V);
            },
            le = {
              IMG: oe,
              IFRAME: function (e) {
                W(e, N);
              },
              VIDEO: function (e) {
                G(e, function (e) {
                  W(e, N);
                }),
                  W(e, B),
                  e.load();
              },
            },
            de = function (e, t) {
              (function (e) {
                var t = le[e.tagName];
                t
                  ? t(e)
                  : (function (e) {
                      if (H(e)) {
                        var t = j(e);
                        e.style.backgroundImage = t.backgroundImage;
                      }
                    })(e);
              })(e),
                (function (e, t) {
                  C(e) ||
                    L(e) ||
                    (P(e, t.class_entered),
                    P(e, t.class_exited),
                    P(e, t.class_applied),
                    P(e, t.class_loading),
                    P(e, t.class_loaded),
                    P(e, t.class_error));
                })(e, t),
                x(e),
                F(e);
            },
            ce = ["IMG", "IFRAME", "VIDEO"],
            ue = function (e) {
              return e.use_native && "loading" in HTMLImageElement.prototype;
            },
            pe = function (e, t, s) {
              e.forEach(function (e) {
                return (function (e) {
                  return e.isIntersecting || e.intersectionRatio > 0;
                })(e)
                  ? (function (e, t, s, n) {
                      var i = (function (e) {
                        return k.indexOf(y(e)) >= 0;
                      })(e);
                      E(e, "entered"),
                        _(e, s.class_entered),
                        P(e, s.class_exited),
                        (function (e, t, s) {
                          t.unobserve_entered && $(e, s);
                        })(e, s, n),
                        M(s.callback_enter, e, t, n),
                        i || re(e, s, n);
                    })(e.target, e, t, s)
                  : (function (e, t, s, n) {
                      C(e) ||
                        (_(e, s.class_exited),
                        (function (e, t, s, n) {
                          s.cancel_on_exit &&
                            (function (e) {
                              return y(e) === h;
                            })(e) &&
                            "IMG" === e.tagName &&
                            (te(e),
                            (function (e) {
                              D(e, function (e) {
                                ae(e);
                              }),
                                ae(e);
                            })(e),
                            oe(e),
                            P(e, s.class_loading),
                            A(n, -1),
                            x(e),
                            M(s.callback_cancel, e, t, n));
                        })(e, t, s, n),
                        M(s.callback_exit, e, t, n));
                    })(e.target, e, t, s);
              });
            },
            fe = function (e) {
              return Array.prototype.slice.call(e);
            },
            he = function (e) {
              return e.container.querySelectorAll(e.elements_selector);
            },
            me = function (e) {
              return (function (e) {
                return y(e) === v;
              })(e);
            },
            ge = function (e, t) {
              return (function (e) {
                return fe(e).filter(C);
              })(e || he(t));
            },
            ve = function (e, s) {
              var i = o(e);
              (this._settings = i),
                (this.loadingCount = 0),
                (function (e, t) {
                  n &&
                    !ue(e) &&
                    (t._observer = new IntersectionObserver(
                      function (s) {
                        pe(s, e, t);
                      },
                      (function (e) {
                        return {
                          root: e.container === document ? null : e.container,
                          rootMargin: e.thresholds || e.threshold + "px",
                        };
                      })(e)
                    ));
                })(i, this),
                (function (e, s) {
                  t &&
                    window.addEventListener("online", function () {
                      !(function (e, t) {
                        var s;
                        ((s = he(e)), fe(s).filter(me)).forEach(function (t) {
                          P(t, e.class_error), x(t);
                        }),
                          t.update();
                      })(e, s);
                    });
                })(i, this),
                this.update(s);
            };
          return (
            (ve.prototype = {
              update: function (e) {
                var t,
                  i,
                  r = this._settings,
                  a = ge(e, r);
                I(this, a.length),
                  !s && n
                    ? ue(r)
                      ? (function (e, t, s) {
                          e.forEach(function (e) {
                            -1 !== ce.indexOf(e.tagName) &&
                              (function (e, t, s) {
                                e.setAttribute("loading", "lazy"),
                                  ne(e, t, s),
                                  (function (e, t) {
                                    var s = U[e.tagName];
                                    s && s(e, t);
                                  })(e, t),
                                  E(e, w);
                              })(e, t, s);
                          }),
                            I(s, 0);
                        })(a, r, this)
                      : ((i = a),
                        (function (e) {
                          e.disconnect();
                        })((t = this._observer)),
                        (function (e, t) {
                          t.forEach(function (t) {
                            e.observe(t);
                          });
                        })(t, i))
                    : this.loadAll(a);
              },
              destroy: function () {
                this._observer && this._observer.disconnect(),
                  he(this._settings).forEach(function (e) {
                    F(e);
                  }),
                  delete this._observer,
                  delete this._settings,
                  delete this.loadingCount,
                  delete this.toLoadCount;
              },
              loadAll: function (e) {
                var t = this,
                  s = this._settings;
                ge(e, s).forEach(function (e) {
                  $(e, t), re(e, s, t);
                });
              },
              restoreAll: function () {
                var e = this._settings;
                he(e).forEach(function (t) {
                  de(t, e);
                });
              },
            }),
            (ve.load = function (e, t) {
              var s = o(t);
              re(e, s);
            }),
            (ve.resetStatus = function (e) {
              x(e);
            }),
            t &&
              (function (e, t) {
                if (t)
                  if (t.length) for (var s, n = 0; (s = t[n]); n += 1) l(e, s);
                  else l(e, t);
              })(ve, window.lazyLoadOptions),
            ve
          );
        })();
      },
    },
    t = {};
  function s(n) {
    var i = t[n];
    if (void 0 !== i) return i.exports;
    var r = (t[n] = { exports: {} });
    return e[n].call(r.exports, r, r.exports, s), r.exports;
  }
  (() => {
    "use strict";
    let e = !0,
      t = (t = 500) => {
        let s = document.querySelector("body");
        if (e) {
          let n = document.querySelectorAll("[data-lp]");
          setTimeout(() => {
            for (let e = 0; e < n.length; e++) {
              n[e].style.paddingRight = "0px";
            }
            (s.style.paddingRight = "0px"),
              document.documentElement.classList.remove("lock");
          }, t),
            (e = !1),
            setTimeout(function () {
              e = !0;
            }, t);
        }
      },
      n = (t = 500) => {
        let s = document.querySelector("body");
        if (e) {
          let n = document.querySelectorAll("[data-lp]");
          for (let e = 0; e < n.length; e++) {
            n[e].style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px";
          }
          (s.style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px"),
            document.documentElement.classList.add("lock"),
            (e = !1),
            setTimeout(function () {
              e = !0;
            }, t);
        }
      };
    function i(e) {
      setTimeout(() => {
        window.FLS && console.log(e);
      }, 0);
    }
    let r = (e, s = !1, n = 500, r = 0) => {
      const a = document.querySelector(e);
      if (a) {
        let o = "",
          l = 0;
        s &&
          ((o = "header.header"), (l = document.querySelector(o).offsetHeight));
        let d = {
          speedAsDuration: !0,
          speed: n,
          header: o,
          offset: r,
          easing: "easeOutQuad",
        };
        if (
          (document.documentElement.classList.contains("menu-open") &&
            (t(), document.documentElement.classList.remove("menu-open")),
          "undefined" != typeof SmoothScroll)
        )
          new SmoothScroll().animateScroll(a, "", d);
        else {
          let e = a.getBoundingClientRect().top + scrollY;
          window.scrollTo({ top: l ? e - l : e, behavior: "smooth" });
        }
        i(`[gotoBlock]: Юхуу...едем к ${e}`);
      } else i(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${e}`);
    };
    function a(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function o(e = {}, t = {}) {
      Object.keys(t).forEach((s) => {
        void 0 === e[s]
          ? (e[s] = t[s])
          : a(t[s]) && a(e[s]) && Object.keys(t[s]).length > 0 && o(e[s], t[s]);
      });
    }
    const l = {
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
    function d() {
      const e = "undefined" != typeof document ? document : {};
      return o(e, l), e;
    }
    const c = {
      document: l,
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
    function u() {
      const e = "undefined" != typeof window ? window : {};
      return o(e, c), e;
    }
    class p extends Array {
      constructor(e) {
        super(...(e || [])),
          (function (e) {
            const t = e.__proto__;
            Object.defineProperty(e, "__proto__", {
              get: () => t,
              set(e) {
                t.__proto__ = e;
              },
            });
          })(this);
      }
    }
    function f(e = []) {
      const t = [];
      return (
        e.forEach((e) => {
          Array.isArray(e) ? t.push(...f(e)) : t.push(e);
        }),
        t
      );
    }
    function h(e, t) {
      return Array.prototype.filter.call(e, t);
    }
    function m(e, t) {
      const s = u(),
        n = d();
      let i = [];
      if (!t && e instanceof p) return e;
      if (!e) return new p(i);
      if ("string" == typeof e) {
        const s = e.trim();
        if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
          let e = "div";
          0 === s.indexOf("<li") && (e = "ul"),
            0 === s.indexOf("<tr") && (e = "tbody"),
            (0 !== s.indexOf("<td") && 0 !== s.indexOf("<th")) || (e = "tr"),
            0 === s.indexOf("<tbody") && (e = "table"),
            0 === s.indexOf("<option") && (e = "select");
          const t = n.createElement(e);
          t.innerHTML = s;
          for (let e = 0; e < t.childNodes.length; e += 1)
            i.push(t.childNodes[e]);
        } else
          i = (function (e, t) {
            if ("string" != typeof e) return [e];
            const s = [],
              n = t.querySelectorAll(e);
            for (let e = 0; e < n.length; e += 1) s.push(n[e]);
            return s;
          })(e.trim(), t || n);
      } else if (e.nodeType || e === s || e === n) i.push(e);
      else if (Array.isArray(e)) {
        if (e instanceof p) return e;
        i = e;
      }
      return new p(
        (function (e) {
          const t = [];
          for (let s = 0; s < e.length; s += 1)
            -1 === t.indexOf(e[s]) && t.push(e[s]);
          return t;
        })(i)
      );
    }
    m.fn = p.prototype;
    const g = "resize scroll".split(" ");
    function v(e) {
      return function (...t) {
        if (void 0 === t[0]) {
          for (let t = 0; t < this.length; t += 1)
            g.indexOf(e) < 0 &&
              (e in this[t] ? this[t][e]() : m(this[t]).trigger(e));
          return this;
        }
        return this.on(e, ...t);
      };
    }
    v("click"),
      v("blur"),
      v("focus"),
      v("focusin"),
      v("focusout"),
      v("keyup"),
      v("keydown"),
      v("keypress"),
      v("submit"),
      v("change"),
      v("mousedown"),
      v("mousemove"),
      v("mouseup"),
      v("mouseenter"),
      v("mouseleave"),
      v("mouseout"),
      v("mouseover"),
      v("touchstart"),
      v("touchend"),
      v("touchmove"),
      v("resize"),
      v("scroll");
    const w = {
      addClass: function (...e) {
        const t = f(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.add(...t);
          }),
          this
        );
      },
      removeClass: function (...e) {
        const t = f(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.remove(...t);
          }),
          this
        );
      },
      hasClass: function (...e) {
        const t = f(e.map((e) => e.split(" ")));
        return (
          h(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
            .length > 0
        );
      },
      toggleClass: function (...e) {
        const t = f(e.map((e) => e.split(" ")));
        this.forEach((e) => {
          t.forEach((t) => {
            e.classList.toggle(t);
          });
        });
      },
      attr: function (e, t) {
        if (1 === arguments.length && "string" == typeof e)
          return this[0] ? this[0].getAttribute(e) : void 0;
        for (let s = 0; s < this.length; s += 1)
          if (2 === arguments.length) this[s].setAttribute(e, t);
          else
            for (const t in e)
              (this[s][t] = e[t]), this[s].setAttribute(t, e[t]);
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
        let [t, s, n, i] = e;
        function r(e) {
          const t = e.target;
          if (!t) return;
          const i = e.target.dom7EventData || [];
          if ((i.indexOf(e) < 0 && i.unshift(e), m(t).is(s))) n.apply(t, i);
          else {
            const e = m(t).parents();
            for (let t = 0; t < e.length; t += 1)
              m(e[t]).is(s) && n.apply(e[t], i);
          }
        }
        function a(e) {
          const t = (e && e.target && e.target.dom7EventData) || [];
          t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t);
        }
        "function" == typeof e[1] && (([t, n, i] = e), (s = void 0)),
          i || (i = !1);
        const o = t.split(" ");
        let l;
        for (let e = 0; e < this.length; e += 1) {
          const t = this[e];
          if (s)
            for (l = 0; l < o.length; l += 1) {
              const e = o[l];
              t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                t.dom7LiveListeners[e].push({ listener: n, proxyListener: r }),
                t.addEventListener(e, r, i);
            }
          else
            for (l = 0; l < o.length; l += 1) {
              const e = o[l];
              t.dom7Listeners || (t.dom7Listeners = {}),
                t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                t.dom7Listeners[e].push({ listener: n, proxyListener: a }),
                t.addEventListener(e, a, i);
            }
        }
        return this;
      },
      off: function (...e) {
        let [t, s, n, i] = e;
        "function" == typeof e[1] && (([t, n, i] = e), (s = void 0)),
          i || (i = !1);
        const r = t.split(" ");
        for (let e = 0; e < r.length; e += 1) {
          const t = r[e];
          for (let e = 0; e < this.length; e += 1) {
            const r = this[e];
            let a;
            if (
              (!s && r.dom7Listeners
                ? (a = r.dom7Listeners[t])
                : s && r.dom7LiveListeners && (a = r.dom7LiveListeners[t]),
              a && a.length)
            )
              for (let e = a.length - 1; e >= 0; e -= 1) {
                const s = a[e];
                (n && s.listener === n) ||
                (n &&
                  s.listener &&
                  s.listener.dom7proxy &&
                  s.listener.dom7proxy === n)
                  ? (r.removeEventListener(t, s.proxyListener, i),
                    a.splice(e, 1))
                  : n ||
                    (r.removeEventListener(t, s.proxyListener, i),
                    a.splice(e, 1));
              }
          }
        }
        return this;
      },
      trigger: function (...e) {
        const t = u(),
          s = e[0].split(" "),
          n = e[1];
        for (let i = 0; i < s.length; i += 1) {
          const r = s[i];
          for (let s = 0; s < this.length; s += 1) {
            const i = this[s];
            if (t.CustomEvent) {
              const s = new t.CustomEvent(r, {
                detail: n,
                bubbles: !0,
                cancelable: !0,
              });
              (i.dom7EventData = e.filter((e, t) => t > 0)),
                i.dispatchEvent(s),
                (i.dom7EventData = []),
                delete i.dom7EventData;
            }
          }
        }
        return this;
      },
      transitionEnd: function (e) {
        const t = this;
        return (
          e &&
            t.on("transitionend", function s(n) {
              n.target === this && (e.call(this, n), t.off("transitionend", s));
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
        const e = u();
        return this[0] ? e.getComputedStyle(this[0], null) : {};
      },
      offset: function () {
        if (this.length > 0) {
          const e = u(),
            t = d(),
            s = this[0],
            n = s.getBoundingClientRect(),
            i = t.body,
            r = s.clientTop || i.clientTop || 0,
            a = s.clientLeft || i.clientLeft || 0,
            o = s === e ? e.scrollY : s.scrollTop,
            l = s === e ? e.scrollX : s.scrollLeft;
          return { top: n.top + o - r, left: n.left + l - a };
        }
        return null;
      },
      css: function (e, t) {
        const s = u();
        let n;
        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (n = 0; n < this.length; n += 1)
              for (const t in e) this[n].style[t] = e[t];
            return this;
          }
          if (this[0])
            return s.getComputedStyle(this[0], null).getPropertyValue(e);
        }
        if (2 === arguments.length && "string" == typeof e) {
          for (n = 0; n < this.length; n += 1) this[n].style[e] = t;
          return this;
        }
        return this;
      },
      each: function (e) {
        return e
          ? (this.forEach((t, s) => {
              e.apply(t, [t, s]);
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
        const t = u(),
          s = d(),
          n = this[0];
        let i, r;
        if (!n || void 0 === e) return !1;
        if ("string" == typeof e) {
          if (n.matches) return n.matches(e);
          if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
          if (n.msMatchesSelector) return n.msMatchesSelector(e);
          for (i = m(e), r = 0; r < i.length; r += 1) if (i[r] === n) return !0;
          return !1;
        }
        if (e === s) return n === s;
        if (e === t) return n === t;
        if (e.nodeType || e instanceof p) {
          for (i = e.nodeType ? [e] : e, r = 0; r < i.length; r += 1)
            if (i[r] === n) return !0;
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
        if (e > t - 1) return m([]);
        if (e < 0) {
          const s = t + e;
          return m(s < 0 ? [] : [this[s]]);
        }
        return m([this[e]]);
      },
      append: function (...e) {
        let t;
        const s = d();
        for (let n = 0; n < e.length; n += 1) {
          t = e[n];
          for (let e = 0; e < this.length; e += 1)
            if ("string" == typeof t) {
              const n = s.createElement("div");
              for (n.innerHTML = t; n.firstChild; )
                this[e].appendChild(n.firstChild);
            } else if (t instanceof p)
              for (let s = 0; s < t.length; s += 1) this[e].appendChild(t[s]);
            else this[e].appendChild(t);
        }
        return this;
      },
      prepend: function (e) {
        const t = d();
        let s, n;
        for (s = 0; s < this.length; s += 1)
          if ("string" == typeof e) {
            const i = t.createElement("div");
            for (i.innerHTML = e, n = i.childNodes.length - 1; n >= 0; n -= 1)
              this[s].insertBefore(i.childNodes[n], this[s].childNodes[0]);
          } else if (e instanceof p)
            for (n = 0; n < e.length; n += 1)
              this[s].insertBefore(e[n], this[s].childNodes[0]);
          else this[s].insertBefore(e, this[s].childNodes[0]);
        return this;
      },
      next: function (e) {
        return this.length > 0
          ? e
            ? this[0].nextElementSibling && m(this[0].nextElementSibling).is(e)
              ? m([this[0].nextElementSibling])
              : m([])
            : this[0].nextElementSibling
            ? m([this[0].nextElementSibling])
            : m([])
          : m([]);
      },
      nextAll: function (e) {
        const t = [];
        let s = this[0];
        if (!s) return m([]);
        for (; s.nextElementSibling; ) {
          const n = s.nextElementSibling;
          e ? m(n).is(e) && t.push(n) : t.push(n), (s = n);
        }
        return m(t);
      },
      prev: function (e) {
        if (this.length > 0) {
          const t = this[0];
          return e
            ? t.previousElementSibling && m(t.previousElementSibling).is(e)
              ? m([t.previousElementSibling])
              : m([])
            : t.previousElementSibling
            ? m([t.previousElementSibling])
            : m([]);
        }
        return m([]);
      },
      prevAll: function (e) {
        const t = [];
        let s = this[0];
        if (!s) return m([]);
        for (; s.previousElementSibling; ) {
          const n = s.previousElementSibling;
          e ? m(n).is(e) && t.push(n) : t.push(n), (s = n);
        }
        return m(t);
      },
      parent: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1)
          null !== this[s].parentNode &&
            (e
              ? m(this[s].parentNode).is(e) && t.push(this[s].parentNode)
              : t.push(this[s].parentNode));
        return m(t);
      },
      parents: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1) {
          let n = this[s].parentNode;
          for (; n; )
            e ? m(n).is(e) && t.push(n) : t.push(n), (n = n.parentNode);
        }
        return m(t);
      },
      closest: function (e) {
        let t = this;
        return void 0 === e ? m([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
      },
      find: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1) {
          const n = this[s].querySelectorAll(e);
          for (let e = 0; e < n.length; e += 1) t.push(n[e]);
        }
        return m(t);
      },
      children: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1) {
          const n = this[s].children;
          for (let s = 0; s < n.length; s += 1)
            (e && !m(n[s]).is(e)) || t.push(n[s]);
        }
        return m(t);
      },
      filter: function (e) {
        return m(h(this, e));
      },
      remove: function () {
        for (let e = 0; e < this.length; e += 1)
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this;
      },
    };
    Object.keys(w).forEach((e) => {
      Object.defineProperty(m.fn, e, { value: w[e], writable: !0 });
    });
    const b = m;
    function S(e, t = 0) {
      return setTimeout(e, t);
    }
    function T() {
      return Date.now();
    }
    function y(e, t = "x") {
      const s = u();
      let n, i, r;
      const a = (function (e) {
        const t = u();
        let s;
        return (
          t.getComputedStyle && (s = t.getComputedStyle(e, null)),
          !s && e.currentStyle && (s = e.currentStyle),
          s || (s = e.style),
          s
        );
      })(e);
      return (
        s.WebKitCSSMatrix
          ? ((i = a.transform || a.webkitTransform),
            i.split(",").length > 6 &&
              (i = i
                .split(", ")
                .map((e) => e.replace(",", "."))
                .join(", ")),
            (r = new s.WebKitCSSMatrix("none" === i ? "" : i)))
          : ((r =
              a.MozTransform ||
              a.OTransform ||
              a.MsTransform ||
              a.msTransform ||
              a.transform ||
              a
                .getPropertyValue("transform")
                .replace("translate(", "matrix(1, 0, 0, 1,")),
            (n = r.toString().split(","))),
        "x" === t &&
          (i = s.WebKitCSSMatrix
            ? r.m41
            : 16 === n.length
            ? parseFloat(n[12])
            : parseFloat(n[4])),
        "y" === t &&
          (i = s.WebKitCSSMatrix
            ? r.m42
            : 16 === n.length
            ? parseFloat(n[13])
            : parseFloat(n[5])),
        i || 0
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
    function x(...e) {
      const t = Object(e[0]),
        s = ["__proto__", "constructor", "prototype"];
      for (let i = 1; i < e.length; i += 1) {
        const r = e[i];
        if (
          null != r &&
          ((n = r),
          !("undefined" != typeof window && void 0 !== window.HTMLElement
            ? n instanceof HTMLElement
            : n && (1 === n.nodeType || 11 === n.nodeType)))
        ) {
          const e = Object.keys(Object(r)).filter((e) => s.indexOf(e) < 0);
          for (let s = 0, n = e.length; s < n; s += 1) {
            const n = e[s],
              i = Object.getOwnPropertyDescriptor(r, n);
            void 0 !== i &&
              i.enumerable &&
              (E(t[n]) && E(r[n])
                ? r[n].__swiper__
                  ? (t[n] = r[n])
                  : x(t[n], r[n])
                : !E(t[n]) && E(r[n])
                ? ((t[n] = {}), r[n].__swiper__ ? (t[n] = r[n]) : x(t[n], r[n]))
                : (t[n] = r[n]));
          }
        }
      }
      var n;
      return t;
    }
    function C(e, t, s) {
      e.style.setProperty(t, s);
    }
    function L({ swiper: e, targetPosition: t, side: s }) {
      const n = u(),
        i = -e.translate;
      let r,
        a = null;
      const o = e.params.speed;
      (e.wrapperEl.style.scrollSnapType = "none"),
        n.cancelAnimationFrame(e.cssModeFrameID);
      const l = t > i ? "next" : "prev",
        d = (e, t) => ("next" === l && e >= t) || ("prev" === l && e <= t),
        c = () => {
          (r = new Date().getTime()), null === a && (a = r);
          const l = Math.max(Math.min((r - a) / o, 1), 0),
            u = 0.5 - Math.cos(l * Math.PI) / 2;
          let p = i + u * (t - i);
          if ((d(p, t) && (p = t), e.wrapperEl.scrollTo({ [s]: p }), d(p, t)))
            return (
              (e.wrapperEl.style.overflow = "hidden"),
              (e.wrapperEl.style.scrollSnapType = ""),
              setTimeout(() => {
                (e.wrapperEl.style.overflow = ""),
                  e.wrapperEl.scrollTo({ [s]: p });
              }),
              void n.cancelAnimationFrame(e.cssModeFrameID)
            );
          e.cssModeFrameID = n.requestAnimationFrame(c);
        };
      c();
    }
    let k, M, _;
    function P() {
      return (
        k ||
          (k = (function () {
            const e = u(),
              t = d();
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
                  const s = Object.defineProperty({}, "passive", {
                    get() {
                      t = !0;
                    },
                  });
                  e.addEventListener("testPassiveListener", null, s);
                } catch (e) {}
                return t;
              })(),
              gestures: "ongesturestart" in e,
            };
          })()),
        k
      );
    }
    function O(e = {}) {
      return (
        M ||
          (M = (function ({ userAgent: e } = {}) {
            const t = P(),
              s = u(),
              n = s.navigator.platform,
              i = e || s.navigator.userAgent,
              r = { ios: !1, android: !1 },
              a = s.screen.width,
              o = s.screen.height,
              l = i.match(/(Android);?[\s\/]+([\d.]+)?/);
            let d = i.match(/(iPad).*OS\s([\d_]+)/);
            const c = i.match(/(iPod)(.*OS\s([\d_]+))?/),
              p = !d && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              f = "Win32" === n;
            let h = "MacIntel" === n;
            return (
              !d &&
                h &&
                t.touch &&
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
                ].indexOf(`${a}x${o}`) >= 0 &&
                ((d = i.match(/(Version)\/([\d.]+)/)),
                d || (d = [0, 1, "13_0_0"]),
                (h = !1)),
              l && !f && ((r.os = "android"), (r.android = !0)),
              (d || p || c) && ((r.os = "ios"), (r.ios = !0)),
              r
            );
          })(e)),
        M
      );
    }
    function $() {
      return (
        _ ||
          (_ = (function () {
            const e = u();
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
        _
      );
    }
    const A = {
      on(e, t, s) {
        const n = this;
        if ("function" != typeof t) return n;
        const i = s ? "unshift" : "push";
        return (
          e.split(" ").forEach((e) => {
            n.eventsListeners[e] || (n.eventsListeners[e] = []),
              n.eventsListeners[e][i](t);
          }),
          n
        );
      },
      once(e, t, s) {
        const n = this;
        if ("function" != typeof t) return n;
        function i(...s) {
          n.off(e, i),
            i.__emitterProxy && delete i.__emitterProxy,
            t.apply(n, s);
        }
        return (i.__emitterProxy = t), n.on(e, i, s);
      },
      onAny(e, t) {
        const s = this;
        if ("function" != typeof e) return s;
        const n = t ? "unshift" : "push";
        return (
          s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[n](e), s
        );
      },
      offAny(e) {
        const t = this;
        if (!t.eventsAnyListeners) return t;
        const s = t.eventsAnyListeners.indexOf(e);
        return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
      },
      off(e, t) {
        const s = this;
        return s.eventsListeners
          ? (e.split(" ").forEach((e) => {
              void 0 === t
                ? (s.eventsListeners[e] = [])
                : s.eventsListeners[e] &&
                  s.eventsListeners[e].forEach((n, i) => {
                    (n === t || (n.__emitterProxy && n.__emitterProxy === t)) &&
                      s.eventsListeners[e].splice(i, 1);
                  });
            }),
            s)
          : s;
      },
      emit(...e) {
        const t = this;
        if (!t.eventsListeners) return t;
        let s, n, i;
        "string" == typeof e[0] || Array.isArray(e[0])
          ? ((s = e[0]), (n = e.slice(1, e.length)), (i = t))
          : ((s = e[0].events), (n = e[0].data), (i = e[0].context || t)),
          n.unshift(i);
        return (
          (Array.isArray(s) ? s : s.split(" ")).forEach((e) => {
            t.eventsAnyListeners &&
              t.eventsAnyListeners.length &&
              t.eventsAnyListeners.forEach((t) => {
                t.apply(i, [e, ...n]);
              }),
              t.eventsListeners &&
                t.eventsListeners[e] &&
                t.eventsListeners[e].forEach((e) => {
                  e.apply(i, n);
                });
          }),
          t
        );
      },
    };
    const I = {
      updateSize: function () {
        const e = this;
        let t, s;
        const n = e.$el;
        (t =
          void 0 !== e.params.width && null !== e.params.width
            ? e.params.width
            : n[0].clientWidth),
          (s =
            void 0 !== e.params.height && null !== e.params.height
              ? e.params.height
              : n[0].clientHeight),
          (0 === t && e.isHorizontal()) ||
            (0 === s && e.isVertical()) ||
            ((t =
              t -
              parseInt(n.css("padding-left") || 0, 10) -
              parseInt(n.css("padding-right") || 0, 10)),
            (s =
              s -
              parseInt(n.css("padding-top") || 0, 10) -
              parseInt(n.css("padding-bottom") || 0, 10)),
            Number.isNaN(t) && (t = 0),
            Number.isNaN(s) && (s = 0),
            Object.assign(e, {
              width: t,
              height: s,
              size: e.isHorizontal() ? t : s,
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
        function s(e, s) {
          return parseFloat(e.getPropertyValue(t(s)) || 0);
        }
        const n = e.params,
          { $wrapperEl: i, size: r, rtlTranslate: a, wrongRTL: o } = e,
          l = e.virtual && n.virtual.enabled,
          d = l ? e.virtual.slides.length : e.slides.length,
          c = i.children(`.${e.params.slideClass}`),
          u = l ? e.virtual.slides.length : c.length;
        let p = [];
        const f = [],
          h = [];
        let m = n.slidesOffsetBefore;
        "function" == typeof m && (m = n.slidesOffsetBefore.call(e));
        let g = n.slidesOffsetAfter;
        "function" == typeof g && (g = n.slidesOffsetAfter.call(e));
        const v = e.snapGrid.length,
          w = e.slidesGrid.length;
        let b = n.spaceBetween,
          S = -m,
          T = 0,
          y = 0;
        if (void 0 === r) return;
        "string" == typeof b &&
          b.indexOf("%") >= 0 &&
          (b = (parseFloat(b.replace("%", "")) / 100) * r),
          (e.virtualSize = -b),
          a
            ? c.css({ marginLeft: "", marginBottom: "", marginTop: "" })
            : c.css({ marginRight: "", marginBottom: "", marginTop: "" }),
          n.centeredSlides &&
            n.cssMode &&
            (C(e.wrapperEl, "--swiper-centered-offset-before", ""),
            C(e.wrapperEl, "--swiper-centered-offset-after", ""));
        const E = n.grid && n.grid.rows > 1 && e.grid;
        let x;
        E && e.grid.initSlides(u);
        const L =
          "auto" === n.slidesPerView &&
          n.breakpoints &&
          Object.keys(n.breakpoints).filter(
            (e) => void 0 !== n.breakpoints[e].slidesPerView
          ).length > 0;
        for (let i = 0; i < u; i += 1) {
          x = 0;
          const a = c.eq(i);
          if (
            (E && e.grid.updateSlide(i, a, u, t), "none" !== a.css("display"))
          ) {
            if ("auto" === n.slidesPerView) {
              L && (c[i].style[t("width")] = "");
              const r = getComputedStyle(a[0]),
                o = a[0].style.transform,
                l = a[0].style.webkitTransform;
              if (
                (o && (a[0].style.transform = "none"),
                l && (a[0].style.webkitTransform = "none"),
                n.roundLengths)
              )
                x = e.isHorizontal() ? a.outerWidth(!0) : a.outerHeight(!0);
              else {
                const e = s(r, "width"),
                  t = s(r, "padding-left"),
                  n = s(r, "padding-right"),
                  i = s(r, "margin-left"),
                  o = s(r, "margin-right"),
                  l = r.getPropertyValue("box-sizing");
                if (l && "border-box" === l) x = e + i + o;
                else {
                  const { clientWidth: s, offsetWidth: r } = a[0];
                  x = e + t + n + i + o + (r - s);
                }
              }
              o && (a[0].style.transform = o),
                l && (a[0].style.webkitTransform = l),
                n.roundLengths && (x = Math.floor(x));
            } else
              (x = (r - (n.slidesPerView - 1) * b) / n.slidesPerView),
                n.roundLengths && (x = Math.floor(x)),
                c[i] && (c[i].style[t("width")] = `${x}px`);
            c[i] && (c[i].swiperSlideSize = x),
              h.push(x),
              n.centeredSlides
                ? ((S = S + x / 2 + T / 2 + b),
                  0 === T && 0 !== i && (S = S - r / 2 - b),
                  0 === i && (S = S - r / 2 - b),
                  Math.abs(S) < 0.001 && (S = 0),
                  n.roundLengths && (S = Math.floor(S)),
                  y % n.slidesPerGroup == 0 && p.push(S),
                  f.push(S))
                : (n.roundLengths && (S = Math.floor(S)),
                  (y - Math.min(e.params.slidesPerGroupSkip, y)) %
                    e.params.slidesPerGroup ==
                    0 && p.push(S),
                  f.push(S),
                  (S = S + x + b)),
              (e.virtualSize += x + b),
              (T = x),
              (y += 1);
          }
        }
        if (
          ((e.virtualSize = Math.max(e.virtualSize, r) + g),
          a &&
            o &&
            ("slide" === n.effect || "coverflow" === n.effect) &&
            i.css({ width: `${e.virtualSize + n.spaceBetween}px` }),
          n.setWrapperSize &&
            i.css({ [t("width")]: `${e.virtualSize + n.spaceBetween}px` }),
          E && e.grid.updateWrapperSize(x, p, t),
          !n.centeredSlides)
        ) {
          const t = [];
          for (let s = 0; s < p.length; s += 1) {
            let i = p[s];
            n.roundLengths && (i = Math.floor(i)),
              p[s] <= e.virtualSize - r && t.push(i);
          }
          (p = t),
            Math.floor(e.virtualSize - r) - Math.floor(p[p.length - 1]) > 1 &&
              p.push(e.virtualSize - r);
        }
        if ((0 === p.length && (p = [0]), 0 !== n.spaceBetween)) {
          const s = e.isHorizontal() && a ? "marginLeft" : t("marginRight");
          c.filter((e, t) => !n.cssMode || t !== c.length - 1).css({
            [s]: `${b}px`,
          });
        }
        if (n.centeredSlides && n.centeredSlidesBounds) {
          let e = 0;
          h.forEach((t) => {
            e += t + (n.spaceBetween ? n.spaceBetween : 0);
          }),
            (e -= n.spaceBetween);
          const t = e - r;
          p = p.map((e) => (e < 0 ? -m : e > t ? t + g : e));
        }
        if (n.centerInsufficientSlides) {
          let e = 0;
          if (
            (h.forEach((t) => {
              e += t + (n.spaceBetween ? n.spaceBetween : 0);
            }),
            (e -= n.spaceBetween),
            e < r)
          ) {
            const t = (r - e) / 2;
            p.forEach((e, s) => {
              p[s] = e - t;
            }),
              f.forEach((e, s) => {
                f[s] = e + t;
              });
          }
        }
        if (
          (Object.assign(e, {
            slides: c,
            snapGrid: p,
            slidesGrid: f,
            slidesSizesGrid: h,
          }),
          n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
        ) {
          C(e.wrapperEl, "--swiper-centered-offset-before", -p[0] + "px"),
            C(
              e.wrapperEl,
              "--swiper-centered-offset-after",
              e.size / 2 - h[h.length - 1] / 2 + "px"
            );
          const t = -e.snapGrid[0],
            s = -e.slidesGrid[0];
          (e.snapGrid = e.snapGrid.map((e) => e + t)),
            (e.slidesGrid = e.slidesGrid.map((e) => e + s));
        }
        u !== d && e.emit("slidesLengthChange"),
          p.length !== v &&
            (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
          f.length !== w && e.emit("slidesGridLengthChange"),
          n.watchSlidesProgress && e.updateSlidesOffset();
      },
      updateAutoHeight: function (e) {
        const t = this,
          s = [],
          n = t.virtual && t.params.virtual.enabled;
        let i,
          r = 0;
        "number" == typeof e
          ? t.setTransition(e)
          : !0 === e && t.setTransition(t.params.speed);
        const a = (e) =>
          n
            ? t.slides.filter(
                (t) =>
                  parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e
              )[0]
            : t.slides.eq(e)[0];
        if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
          if (t.params.centeredSlides)
            t.visibleSlides.each((e) => {
              s.push(e);
            });
          else
            for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
              const e = t.activeIndex + i;
              if (e > t.slides.length && !n) break;
              s.push(a(e));
            }
        else s.push(a(t.activeIndex));
        for (i = 0; i < s.length; i += 1)
          if (void 0 !== s[i]) {
            const e = s[i].offsetHeight;
            r = e > r ? e : r;
          }
        (r || 0 === r) && t.$wrapperEl.css("height", `${r}px`);
      },
      updateSlidesOffset: function () {
        const e = this,
          t = e.slides;
        for (let s = 0; s < t.length; s += 1)
          t[s].swiperSlideOffset = e.isHorizontal()
            ? t[s].offsetLeft
            : t[s].offsetTop;
      },
      updateSlidesProgress: function (e = (this && this.translate) || 0) {
        const t = this,
          s = t.params,
          { slides: n, rtlTranslate: i, snapGrid: r } = t;
        if (0 === n.length) return;
        void 0 === n[0].swiperSlideOffset && t.updateSlidesOffset();
        let a = -e;
        i && (a = e),
          n.removeClass(s.slideVisibleClass),
          (t.visibleSlidesIndexes = []),
          (t.visibleSlides = []);
        for (let e = 0; e < n.length; e += 1) {
          const o = n[e];
          let l = o.swiperSlideOffset;
          s.cssMode && s.centeredSlides && (l -= n[0].swiperSlideOffset);
          const d =
              (a + (s.centeredSlides ? t.minTranslate() : 0) - l) /
              (o.swiperSlideSize + s.spaceBetween),
            c =
              (a - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - l) /
              (o.swiperSlideSize + s.spaceBetween),
            u = -(a - l),
            p = u + t.slidesSizesGrid[e];
          ((u >= 0 && u < t.size - 1) ||
            (p > 1 && p <= t.size) ||
            (u <= 0 && p >= t.size)) &&
            (t.visibleSlides.push(o),
            t.visibleSlidesIndexes.push(e),
            n.eq(e).addClass(s.slideVisibleClass)),
            (o.progress = i ? -d : d),
            (o.originalProgress = i ? -c : c);
        }
        t.visibleSlides = b(t.visibleSlides);
      },
      updateProgress: function (e) {
        const t = this;
        if (void 0 === e) {
          const s = t.rtlTranslate ? -1 : 1;
          e = (t && t.translate && t.translate * s) || 0;
        }
        const s = t.params,
          n = t.maxTranslate() - t.minTranslate();
        let { progress: i, isBeginning: r, isEnd: a } = t;
        const o = r,
          l = a;
        0 === n
          ? ((i = 0), (r = !0), (a = !0))
          : ((i = (e - t.minTranslate()) / n), (r = i <= 0), (a = i >= 1)),
          Object.assign(t, { progress: i, isBeginning: r, isEnd: a }),
          (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
            t.updateSlidesProgress(e),
          r && !o && t.emit("reachBeginning toEdge"),
          a && !l && t.emit("reachEnd toEdge"),
          ((o && !r) || (l && !a)) && t.emit("fromEdge"),
          t.emit("progress", i);
      },
      updateSlidesClasses: function () {
        const e = this,
          {
            slides: t,
            params: s,
            $wrapperEl: n,
            activeIndex: i,
            realIndex: r,
          } = e,
          a = e.virtual && s.virtual.enabled;
        let o;
        t.removeClass(
          `${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`
        ),
          (o = a
            ? e.$wrapperEl.find(
                `.${s.slideClass}[data-swiper-slide-index="${i}"]`
              )
            : t.eq(i)),
          o.addClass(s.slideActiveClass),
          s.loop &&
            (o.hasClass(s.slideDuplicateClass)
              ? n
                  .children(
                    `.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`
                  )
                  .addClass(s.slideDuplicateActiveClass)
              : n
                  .children(
                    `.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`
                  )
                  .addClass(s.slideDuplicateActiveClass));
        let l = o.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
        s.loop &&
          0 === l.length &&
          ((l = t.eq(0)), l.addClass(s.slideNextClass));
        let d = o.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
        s.loop &&
          0 === d.length &&
          ((d = t.eq(-1)), d.addClass(s.slidePrevClass)),
          s.loop &&
            (l.hasClass(s.slideDuplicateClass)
              ? n
                  .children(
                    `.${s.slideClass}:not(.${
                      s.slideDuplicateClass
                    })[data-swiper-slide-index="${l.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(s.slideDuplicateNextClass)
              : n
                  .children(
                    `.${s.slideClass}.${
                      s.slideDuplicateClass
                    }[data-swiper-slide-index="${l.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(s.slideDuplicateNextClass),
            d.hasClass(s.slideDuplicateClass)
              ? n
                  .children(
                    `.${s.slideClass}:not(.${
                      s.slideDuplicateClass
                    })[data-swiper-slide-index="${d.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(s.slideDuplicatePrevClass)
              : n
                  .children(
                    `.${s.slideClass}.${
                      s.slideDuplicateClass
                    }[data-swiper-slide-index="${d.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(s.slideDuplicatePrevClass)),
          e.emitSlidesClasses();
      },
      updateActiveIndex: function (e) {
        const t = this,
          s = t.rtlTranslate ? t.translate : -t.translate,
          {
            slidesGrid: n,
            snapGrid: i,
            params: r,
            activeIndex: a,
            realIndex: o,
            snapIndex: l,
          } = t;
        let d,
          c = e;
        if (void 0 === c) {
          for (let e = 0; e < n.length; e += 1)
            void 0 !== n[e + 1]
              ? s >= n[e] && s < n[e + 1] - (n[e + 1] - n[e]) / 2
                ? (c = e)
                : s >= n[e] && s < n[e + 1] && (c = e + 1)
              : s >= n[e] && (c = e);
          r.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
        }
        if (i.indexOf(s) >= 0) d = i.indexOf(s);
        else {
          const e = Math.min(r.slidesPerGroupSkip, c);
          d = e + Math.floor((c - e) / r.slidesPerGroup);
        }
        if ((d >= i.length && (d = i.length - 1), c === a))
          return void (
            d !== l && ((t.snapIndex = d), t.emit("snapIndexChange"))
          );
        const u = parseInt(
          t.slides.eq(c).attr("data-swiper-slide-index") || c,
          10
        );
        Object.assign(t, {
          snapIndex: d,
          realIndex: u,
          previousIndex: a,
          activeIndex: c,
        }),
          t.emit("activeIndexChange"),
          t.emit("snapIndexChange"),
          o !== u && t.emit("realIndexChange"),
          (t.initialized || t.params.runCallbacksOnInit) &&
            t.emit("slideChange");
      },
      updateClickedSlide: function (e) {
        const t = this,
          s = t.params,
          n = b(e).closest(`.${s.slideClass}`)[0];
        let i,
          r = !1;
        if (n)
          for (let e = 0; e < t.slides.length; e += 1)
            if (t.slides[e] === n) {
              (r = !0), (i = e);
              break;
            }
        if (!n || !r)
          return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
        (t.clickedSlide = n),
          t.virtual && t.params.virtual.enabled
            ? (t.clickedIndex = parseInt(
                b(n).attr("data-swiper-slide-index"),
                10
              ))
            : (t.clickedIndex = i),
          s.slideToClickedSlide &&
            void 0 !== t.clickedIndex &&
            t.clickedIndex !== t.activeIndex &&
            t.slideToClickedSlide();
      },
    };
    const z = {
      getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
        const {
          params: t,
          rtlTranslate: s,
          translate: n,
          $wrapperEl: i,
        } = this;
        if (t.virtualTranslate) return s ? -n : n;
        if (t.cssMode) return n;
        let r = y(i[0], e);
        return s && (r = -r), r || 0;
      },
      setTranslate: function (e, t) {
        const s = this,
          {
            rtlTranslate: n,
            params: i,
            $wrapperEl: r,
            wrapperEl: a,
            progress: o,
          } = s;
        let l,
          d = 0,
          c = 0;
        s.isHorizontal() ? (d = n ? -e : e) : (c = e),
          i.roundLengths && ((d = Math.floor(d)), (c = Math.floor(c))),
          i.cssMode
            ? (a[s.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                s.isHorizontal() ? -d : -c)
            : i.virtualTranslate ||
              r.transform(`translate3d(${d}px, ${c}px, 0px)`),
          (s.previousTranslate = s.translate),
          (s.translate = s.isHorizontal() ? d : c);
        const u = s.maxTranslate() - s.minTranslate();
        (l = 0 === u ? 0 : (e - s.minTranslate()) / u),
          l !== o && s.updateProgress(e),
          s.emit("setTranslate", s.translate, t);
      },
      minTranslate: function () {
        return -this.snapGrid[0];
      },
      maxTranslate: function () {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo: function (e = 0, t = this.params.speed, s = !0, n = !0, i) {
        const r = this,
          { params: a, wrapperEl: o } = r;
        if (r.animating && a.preventInteractionOnTransition) return !1;
        const l = r.minTranslate(),
          d = r.maxTranslate();
        let c;
        if (
          ((c = n && e > l ? l : n && e < d ? d : e),
          r.updateProgress(c),
          a.cssMode)
        ) {
          const e = r.isHorizontal();
          if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -c;
          else {
            if (!r.support.smoothScroll)
              return (
                L({ swiper: r, targetPosition: -c, side: e ? "left" : "top" }),
                !0
              );
            o.scrollTo({ [e ? "left" : "top"]: -c, behavior: "smooth" });
          }
          return !0;
        }
        return (
          0 === t
            ? (r.setTransition(0),
              r.setTranslate(c),
              s &&
                (r.emit("beforeTransitionStart", t, i),
                r.emit("transitionEnd")))
            : (r.setTransition(t),
              r.setTranslate(c),
              s &&
                (r.emit("beforeTransitionStart", t, i),
                r.emit("transitionStart")),
              r.animating ||
                ((r.animating = !0),
                r.onTranslateToWrapperTransitionEnd ||
                  (r.onTranslateToWrapperTransitionEnd = function (e) {
                    r &&
                      !r.destroyed &&
                      e.target === this &&
                      (r.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        r.onTranslateToWrapperTransitionEnd
                      ),
                      r.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        r.onTranslateToWrapperTransitionEnd
                      ),
                      (r.onTranslateToWrapperTransitionEnd = null),
                      delete r.onTranslateToWrapperTransitionEnd,
                      s && r.emit("transitionEnd"));
                  }),
                r.$wrapperEl[0].addEventListener(
                  "transitionend",
                  r.onTranslateToWrapperTransitionEnd
                ),
                r.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  r.onTranslateToWrapperTransitionEnd
                ))),
          !0
        );
      },
    };
    function D({ swiper: e, runCallbacks: t, direction: s, step: n }) {
      const { activeIndex: i, previousIndex: r } = e;
      let a = s;
      if (
        (a || (a = i > r ? "next" : i < r ? "prev" : "reset"),
        e.emit(`transition${n}`),
        t && i !== r)
      ) {
        if ("reset" === a) return void e.emit(`slideResetTransition${n}`);
        e.emit(`slideChangeTransition${n}`),
          "next" === a
            ? e.emit(`slideNextTransition${n}`)
            : e.emit(`slidePrevTransition${n}`);
      }
    }
    const G = {
      slideTo: function (e = 0, t = this.params.speed, s = !0, n, i) {
        if ("number" != typeof e && "string" != typeof e)
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
        const r = this;
        let a = e;
        a < 0 && (a = 0);
        const {
          params: o,
          snapGrid: l,
          slidesGrid: d,
          previousIndex: c,
          activeIndex: u,
          rtlTranslate: p,
          wrapperEl: f,
          enabled: h,
        } = r;
        if (
          (r.animating && o.preventInteractionOnTransition) ||
          (!h && !n && !i)
        )
          return !1;
        const m = Math.min(r.params.slidesPerGroupSkip, a);
        let g = m + Math.floor((a - m) / r.params.slidesPerGroup);
        g >= l.length && (g = l.length - 1),
          (u || o.initialSlide || 0) === (c || 0) &&
            s &&
            r.emit("beforeSlideChangeStart");
        const v = -l[g];
        if ((r.updateProgress(v), o.normalizeSlideIndex))
          for (let e = 0; e < d.length; e += 1) {
            const t = -Math.floor(100 * v),
              s = Math.floor(100 * d[e]),
              n = Math.floor(100 * d[e + 1]);
            void 0 !== d[e + 1]
              ? t >= s && t < n - (n - s) / 2
                ? (a = e)
                : t >= s && t < n && (a = e + 1)
              : t >= s && (a = e);
          }
        if (r.initialized && a !== u) {
          if (!r.allowSlideNext && v < r.translate && v < r.minTranslate())
            return !1;
          if (
            !r.allowSlidePrev &&
            v > r.translate &&
            v > r.maxTranslate() &&
            (u || 0) !== a
          )
            return !1;
        }
        let w;
        if (
          ((w = a > u ? "next" : a < u ? "prev" : "reset"),
          (p && -v === r.translate) || (!p && v === r.translate))
        )
          return (
            r.updateActiveIndex(a),
            o.autoHeight && r.updateAutoHeight(),
            r.updateSlidesClasses(),
            "slide" !== o.effect && r.setTranslate(v),
            "reset" !== w && (r.transitionStart(s, w), r.transitionEnd(s, w)),
            !1
          );
        if (o.cssMode) {
          const e = r.isHorizontal(),
            s = p ? v : -v;
          if (0 === t) {
            const t = r.virtual && r.params.virtual.enabled;
            t &&
              ((r.wrapperEl.style.scrollSnapType = "none"),
              (r._immediateVirtual = !0)),
              (f[e ? "scrollLeft" : "scrollTop"] = s),
              t &&
                requestAnimationFrame(() => {
                  (r.wrapperEl.style.scrollSnapType = ""),
                    (r._swiperImmediateVirtual = !1);
                });
          } else {
            if (!r.support.smoothScroll)
              return (
                L({ swiper: r, targetPosition: s, side: e ? "left" : "top" }),
                !0
              );
            f.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
          }
          return !0;
        }
        return (
          r.setTransition(t),
          r.setTranslate(v),
          r.updateActiveIndex(a),
          r.updateSlidesClasses(),
          r.emit("beforeTransitionStart", t, n),
          r.transitionStart(s, w),
          0 === t
            ? r.transitionEnd(s, w)
            : r.animating ||
              ((r.animating = !0),
              r.onSlideToWrapperTransitionEnd ||
                (r.onSlideToWrapperTransitionEnd = function (e) {
                  r &&
                    !r.destroyed &&
                    e.target === this &&
                    (r.$wrapperEl[0].removeEventListener(
                      "transitionend",
                      r.onSlideToWrapperTransitionEnd
                    ),
                    r.$wrapperEl[0].removeEventListener(
                      "webkitTransitionEnd",
                      r.onSlideToWrapperTransitionEnd
                    ),
                    (r.onSlideToWrapperTransitionEnd = null),
                    delete r.onSlideToWrapperTransitionEnd,
                    r.transitionEnd(s, w));
                }),
              r.$wrapperEl[0].addEventListener(
                "transitionend",
                r.onSlideToWrapperTransitionEnd
              ),
              r.$wrapperEl[0].addEventListener(
                "webkitTransitionEnd",
                r.onSlideToWrapperTransitionEnd
              )),
          !0
        );
      },
      slideToLoop: function (e = 0, t = this.params.speed, s = !0, n) {
        const i = this;
        let r = e;
        return i.params.loop && (r += i.loopedSlides), i.slideTo(r, t, s, n);
      },
      slideNext: function (e = this.params.speed, t = !0, s) {
        const n = this,
          { animating: i, enabled: r, params: a } = n;
        if (!r) return n;
        let o = a.slidesPerGroup;
        "auto" === a.slidesPerView &&
          1 === a.slidesPerGroup &&
          a.slidesPerGroupAuto &&
          (o = Math.max(n.slidesPerViewDynamic("current", !0), 1));
        const l = n.activeIndex < a.slidesPerGroupSkip ? 1 : o;
        if (a.loop) {
          if (i && a.loopPreventsSlide) return !1;
          n.loopFix(), (n._clientLeft = n.$wrapperEl[0].clientLeft);
        }
        return a.rewind && n.isEnd
          ? n.slideTo(0, e, t, s)
          : n.slideTo(n.activeIndex + l, e, t, s);
      },
      slidePrev: function (e = this.params.speed, t = !0, s) {
        const n = this,
          {
            params: i,
            animating: r,
            snapGrid: a,
            slidesGrid: o,
            rtlTranslate: l,
            enabled: d,
          } = n;
        if (!d) return n;
        if (i.loop) {
          if (r && i.loopPreventsSlide) return !1;
          n.loopFix(), (n._clientLeft = n.$wrapperEl[0].clientLeft);
        }
        function c(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }
        const u = c(l ? n.translate : -n.translate),
          p = a.map((e) => c(e));
        let f = a[p.indexOf(u) - 1];
        if (void 0 === f && i.cssMode) {
          let e;
          a.forEach((t, s) => {
            u >= t && (e = s);
          }),
            void 0 !== e && (f = a[e > 0 ? e - 1 : e]);
        }
        let h = 0;
        return (
          void 0 !== f &&
            ((h = o.indexOf(f)),
            h < 0 && (h = n.activeIndex - 1),
            "auto" === i.slidesPerView &&
              1 === i.slidesPerGroup &&
              i.slidesPerGroupAuto &&
              ((h = h - n.slidesPerViewDynamic("previous", !0) + 1),
              (h = Math.max(h, 0)))),
          i.rewind && n.isBeginning
            ? n.slideTo(n.slides.length - 1, e, t, s)
            : n.slideTo(h, e, t, s)
        );
      },
      slideReset: function (e = this.params.speed, t = !0, s) {
        return this.slideTo(this.activeIndex, e, t, s);
      },
      slideToClosest: function (e = this.params.speed, t = !0, s, n = 0.5) {
        const i = this;
        let r = i.activeIndex;
        const a = Math.min(i.params.slidesPerGroupSkip, r),
          o = a + Math.floor((r - a) / i.params.slidesPerGroup),
          l = i.rtlTranslate ? i.translate : -i.translate;
        if (l >= i.snapGrid[o]) {
          const e = i.snapGrid[o];
          l - e > (i.snapGrid[o + 1] - e) * n && (r += i.params.slidesPerGroup);
        } else {
          const e = i.snapGrid[o - 1];
          l - e <= (i.snapGrid[o] - e) * n && (r -= i.params.slidesPerGroup);
        }
        return (
          (r = Math.max(r, 0)),
          (r = Math.min(r, i.slidesGrid.length - 1)),
          i.slideTo(r, e, t, s)
        );
      },
      slideToClickedSlide: function () {
        const e = this,
          { params: t, $wrapperEl: s } = e,
          n =
            "auto" === t.slidesPerView
              ? e.slidesPerViewDynamic()
              : t.slidesPerView;
        let i,
          r = e.clickedIndex;
        if (t.loop) {
          if (e.animating) return;
          (i = parseInt(b(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
            t.centeredSlides
              ? r < e.loopedSlides - n / 2 ||
                r > e.slides.length - e.loopedSlides + n / 2
                ? (e.loopFix(),
                  (r = s
                    .children(
                      `.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
                    )
                    .eq(0)
                    .index()),
                  S(() => {
                    e.slideTo(r);
                  }))
                : e.slideTo(r)
              : r > e.slides.length - n
              ? (e.loopFix(),
                (r = s
                  .children(
                    `.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
                  )
                  .eq(0)
                  .index()),
                S(() => {
                  e.slideTo(r);
                }))
              : e.slideTo(r);
        } else e.slideTo(r);
      },
    };
    const N = {
      loopCreate: function () {
        const e = this,
          t = d(),
          { params: s, $wrapperEl: n } = e,
          i = n.children().length > 0 ? b(n.children()[0].parentNode) : n;
        i.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
        let r = i.children(`.${s.slideClass}`);
        if (s.loopFillGroupWithBlank) {
          const e = s.slidesPerGroup - (r.length % s.slidesPerGroup);
          if (e !== s.slidesPerGroup) {
            for (let n = 0; n < e; n += 1) {
              const e = b(t.createElement("div")).addClass(
                `${s.slideClass} ${s.slideBlankClass}`
              );
              i.append(e);
            }
            r = i.children(`.${s.slideClass}`);
          }
        }
        "auto" !== s.slidesPerView ||
          s.loopedSlides ||
          (s.loopedSlides = r.length),
          (e.loopedSlides = Math.ceil(
            parseFloat(s.loopedSlides || s.slidesPerView, 10)
          )),
          (e.loopedSlides += s.loopAdditionalSlides),
          e.loopedSlides > r.length && (e.loopedSlides = r.length);
        const a = [],
          o = [];
        r.each((t, s) => {
          const n = b(t);
          s < e.loopedSlides && o.push(t),
            s < r.length && s >= r.length - e.loopedSlides && a.push(t),
            n.attr("data-swiper-slide-index", s);
        });
        for (let e = 0; e < o.length; e += 1)
          i.append(b(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
        for (let e = a.length - 1; e >= 0; e -= 1)
          i.prepend(b(a[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
      },
      loopFix: function () {
        const e = this;
        e.emit("beforeLoopFix");
        const {
          activeIndex: t,
          slides: s,
          loopedSlides: n,
          allowSlidePrev: i,
          allowSlideNext: r,
          snapGrid: a,
          rtlTranslate: o,
        } = e;
        let l;
        (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
        const d = -a[t] - e.getTranslate();
        if (t < n) {
          (l = s.length - 3 * n + t), (l += n);
          e.slideTo(l, 0, !1, !0) &&
            0 !== d &&
            e.setTranslate((o ? -e.translate : e.translate) - d);
        } else if (t >= s.length - n) {
          (l = -s.length + t + n), (l += n);
          e.slideTo(l, 0, !1, !0) &&
            0 !== d &&
            e.setTranslate((o ? -e.translate : e.translate) - d);
        }
        (e.allowSlidePrev = i), (e.allowSlideNext = r), e.emit("loopFix");
      },
      loopDestroy: function () {
        const { $wrapperEl: e, params: t, slides: s } = this;
        e
          .children(
            `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
          )
          .remove(),
          s.removeAttr("data-swiper-slide-index");
      },
    };
    function B(e) {
      const t = this,
        s = d(),
        n = u(),
        i = t.touchEventsData,
        { params: r, touches: a, enabled: o } = t;
      if (!o) return;
      if (t.animating && r.preventInteractionOnTransition) return;
      !t.animating && r.cssMode && r.loop && t.loopFix();
      let l = e;
      l.originalEvent && (l = l.originalEvent);
      let c = b(l.target);
      if ("wrapper" === r.touchEventsTarget && !c.closest(t.wrapperEl).length)
        return;
      if (
        ((i.isTouchEvent = "touchstart" === l.type),
        !i.isTouchEvent && "which" in l && 3 === l.which)
      )
        return;
      if (!i.isTouchEvent && "button" in l && l.button > 0) return;
      if (i.isTouched && i.isMoved) return;
      !!r.noSwipingClass &&
        "" !== r.noSwipingClass &&
        l.target &&
        l.target.shadowRoot &&
        e.path &&
        e.path[0] &&
        (c = b(e.path[0]));
      const p = r.noSwipingSelector
          ? r.noSwipingSelector
          : `.${r.noSwipingClass}`,
        f = !(!l.target || !l.target.shadowRoot);
      if (
        r.noSwiping &&
        (f
          ? (function (e, t = this) {
              return (function t(s) {
                return s && s !== d() && s !== u()
                  ? (s.assignedSlot && (s = s.assignedSlot),
                    s.closest(e) || t(s.getRootNode().host))
                  : null;
              })(t);
            })(p, l.target)
          : c.closest(p)[0])
      )
        return void (t.allowClick = !0);
      if (r.swipeHandler && !c.closest(r.swipeHandler)[0]) return;
      (a.currentX =
        "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX),
        (a.currentY =
          "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY);
      const h = a.currentX,
        m = a.currentY,
        g = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
        v = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
      if (g && (h <= v || h >= n.innerWidth - v)) {
        if ("prevent" !== g) return;
        e.preventDefault();
      }
      if (
        (Object.assign(i, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0,
        }),
        (a.startX = h),
        (a.startY = m),
        (i.touchStartTime = T()),
        (t.allowClick = !0),
        t.updateSize(),
        (t.swipeDirection = void 0),
        r.threshold > 0 && (i.allowThresholdMove = !1),
        "touchstart" !== l.type)
      ) {
        let e = !0;
        c.is(i.focusableElements) && (e = !1),
          s.activeElement &&
            b(s.activeElement).is(i.focusableElements) &&
            s.activeElement !== c[0] &&
            s.activeElement.blur();
        const n = e && t.allowTouchMove && r.touchStartPreventDefault;
        (!r.touchStartForcePreventDefault && !n) ||
          c[0].isContentEditable ||
          l.preventDefault();
      }
      t.emit("touchStart", l);
    }
    function V(e) {
      const t = d(),
        s = this,
        n = s.touchEventsData,
        { params: i, touches: r, rtlTranslate: a, enabled: o } = s;
      if (!o) return;
      let l = e;
      if ((l.originalEvent && (l = l.originalEvent), !n.isTouched))
        return void (
          n.startMoving &&
          n.isScrolling &&
          s.emit("touchMoveOpposite", l)
        );
      if (n.isTouchEvent && "touchmove" !== l.type) return;
      const c =
          "touchmove" === l.type &&
          l.targetTouches &&
          (l.targetTouches[0] || l.changedTouches[0]),
        u = "touchmove" === l.type ? c.pageX : l.pageX,
        p = "touchmove" === l.type ? c.pageY : l.pageY;
      if (l.preventedByNestedSwiper) return (r.startX = u), void (r.startY = p);
      if (!s.allowTouchMove)
        return (
          (s.allowClick = !1),
          void (
            n.isTouched &&
            (Object.assign(r, {
              startX: u,
              startY: p,
              currentX: u,
              currentY: p,
            }),
            (n.touchStartTime = T()))
          )
        );
      if (n.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
        if (s.isVertical()) {
          if (
            (p < r.startY && s.translate <= s.maxTranslate()) ||
            (p > r.startY && s.translate >= s.minTranslate())
          )
            return (n.isTouched = !1), void (n.isMoved = !1);
        } else if (
          (u < r.startX && s.translate <= s.maxTranslate()) ||
          (u > r.startX && s.translate >= s.minTranslate())
        )
          return;
      if (
        n.isTouchEvent &&
        t.activeElement &&
        l.target === t.activeElement &&
        b(l.target).is(n.focusableElements)
      )
        return (n.isMoved = !0), void (s.allowClick = !1);
      if (
        (n.allowTouchCallbacks && s.emit("touchMove", l),
        l.targetTouches && l.targetTouches.length > 1)
      )
        return;
      (r.currentX = u), (r.currentY = p);
      const f = r.currentX - r.startX,
        h = r.currentY - r.startY;
      if (s.params.threshold && Math.sqrt(f ** 2 + h ** 2) < s.params.threshold)
        return;
      if (void 0 === n.isScrolling) {
        let e;
        (s.isHorizontal() && r.currentY === r.startY) ||
        (s.isVertical() && r.currentX === r.startX)
          ? (n.isScrolling = !1)
          : f * f + h * h >= 25 &&
            ((e = (180 * Math.atan2(Math.abs(h), Math.abs(f))) / Math.PI),
            (n.isScrolling = s.isHorizontal()
              ? e > i.touchAngle
              : 90 - e > i.touchAngle));
      }
      if (
        (n.isScrolling && s.emit("touchMoveOpposite", l),
        void 0 === n.startMoving &&
          ((r.currentX === r.startX && r.currentY === r.startY) ||
            (n.startMoving = !0)),
        n.isScrolling)
      )
        return void (n.isTouched = !1);
      if (!n.startMoving) return;
      (s.allowClick = !1),
        !i.cssMode && l.cancelable && l.preventDefault(),
        i.touchMoveStopPropagation && !i.nested && l.stopPropagation(),
        n.isMoved ||
          (i.loop && !i.cssMode && s.loopFix(),
          (n.startTranslate = s.getTranslate()),
          s.setTransition(0),
          s.animating &&
            s.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
          (n.allowMomentumBounce = !1),
          !i.grabCursor ||
            (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
            s.setGrabCursor(!0),
          s.emit("sliderFirstMove", l)),
        s.emit("sliderMove", l),
        (n.isMoved = !0);
      let m = s.isHorizontal() ? f : h;
      (r.diff = m),
        (m *= i.touchRatio),
        a && (m = -m),
        (s.swipeDirection = m > 0 ? "prev" : "next"),
        (n.currentTranslate = m + n.startTranslate);
      let g = !0,
        v = i.resistanceRatio;
      if (
        (i.touchReleaseOnEdges && (v = 0),
        m > 0 && n.currentTranslate > s.minTranslate()
          ? ((g = !1),
            i.resistance &&
              (n.currentTranslate =
                s.minTranslate() -
                1 +
                (-s.minTranslate() + n.startTranslate + m) ** v))
          : m < 0 &&
            n.currentTranslate < s.maxTranslate() &&
            ((g = !1),
            i.resistance &&
              (n.currentTranslate =
                s.maxTranslate() +
                1 -
                (s.maxTranslate() - n.startTranslate - m) ** v)),
        g && (l.preventedByNestedSwiper = !0),
        !s.allowSlideNext &&
          "next" === s.swipeDirection &&
          n.currentTranslate < n.startTranslate &&
          (n.currentTranslate = n.startTranslate),
        !s.allowSlidePrev &&
          "prev" === s.swipeDirection &&
          n.currentTranslate > n.startTranslate &&
          (n.currentTranslate = n.startTranslate),
        s.allowSlidePrev ||
          s.allowSlideNext ||
          (n.currentTranslate = n.startTranslate),
        i.threshold > 0)
      ) {
        if (!(Math.abs(m) > i.threshold || n.allowThresholdMove))
          return void (n.currentTranslate = n.startTranslate);
        if (!n.allowThresholdMove)
          return (
            (n.allowThresholdMove = !0),
            (r.startX = r.currentX),
            (r.startY = r.currentY),
            (n.currentTranslate = n.startTranslate),
            void (r.diff = s.isHorizontal()
              ? r.currentX - r.startX
              : r.currentY - r.startY)
          );
      }
      i.followFinger &&
        !i.cssMode &&
        (((i.freeMode && i.freeMode.enabled && s.freeMode) ||
          i.watchSlidesProgress) &&
          (s.updateActiveIndex(), s.updateSlidesClasses()),
        s.params.freeMode &&
          i.freeMode.enabled &&
          s.freeMode &&
          s.freeMode.onTouchMove(),
        s.updateProgress(n.currentTranslate),
        s.setTranslate(n.currentTranslate));
    }
    function H(e) {
      const t = this,
        s = t.touchEventsData,
        {
          params: n,
          touches: i,
          rtlTranslate: r,
          slidesGrid: a,
          enabled: o,
        } = t;
      if (!o) return;
      let l = e;
      if (
        (l.originalEvent && (l = l.originalEvent),
        s.allowTouchCallbacks && t.emit("touchEnd", l),
        (s.allowTouchCallbacks = !1),
        !s.isTouched)
      )
        return (
          s.isMoved && n.grabCursor && t.setGrabCursor(!1),
          (s.isMoved = !1),
          void (s.startMoving = !1)
        );
      n.grabCursor &&
        s.isMoved &&
        s.isTouched &&
        (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
        t.setGrabCursor(!1);
      const d = T(),
        c = d - s.touchStartTime;
      if (t.allowClick) {
        const e = l.path || (l.composedPath && l.composedPath());
        t.updateClickedSlide((e && e[0]) || l.target),
          t.emit("tap click", l),
          c < 300 &&
            d - s.lastClickTime < 300 &&
            t.emit("doubleTap doubleClick", l);
      }
      if (
        ((s.lastClickTime = T()),
        S(() => {
          t.destroyed || (t.allowClick = !0);
        }),
        !s.isTouched ||
          !s.isMoved ||
          !t.swipeDirection ||
          0 === i.diff ||
          s.currentTranslate === s.startTranslate)
      )
        return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
      let u;
      if (
        ((s.isTouched = !1),
        (s.isMoved = !1),
        (s.startMoving = !1),
        (u = n.followFinger
          ? r
            ? t.translate
            : -t.translate
          : -s.currentTranslate),
        n.cssMode)
      )
        return;
      if (t.params.freeMode && n.freeMode.enabled)
        return void t.freeMode.onTouchEnd({ currentPos: u });
      let p = 0,
        f = t.slidesSizesGrid[0];
      for (
        let e = 0;
        e < a.length;
        e += e < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup
      ) {
        const t = e < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
        void 0 !== a[e + t]
          ? u >= a[e] && u < a[e + t] && ((p = e), (f = a[e + t] - a[e]))
          : u >= a[e] && ((p = e), (f = a[a.length - 1] - a[a.length - 2]));
      }
      const h = (u - a[p]) / f,
        m = p < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
      if (c > n.longSwipesMs) {
        if (!n.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection &&
          (h >= n.longSwipesRatio ? t.slideTo(p + m) : t.slideTo(p)),
          "prev" === t.swipeDirection &&
            (h > 1 - n.longSwipesRatio ? t.slideTo(p + m) : t.slideTo(p));
      } else {
        if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation &&
        (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl)
          ? l.target === t.navigation.nextEl
            ? t.slideTo(p + m)
            : t.slideTo(p)
          : ("next" === t.swipeDirection && t.slideTo(p + m),
            "prev" === t.swipeDirection && t.slideTo(p));
      }
    }
    function j() {
      const e = this,
        { params: t, el: s } = e;
      if (s && 0 === s.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      const { allowSlideNext: n, allowSlidePrev: i, snapGrid: r } = e;
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
        (e.allowSlidePrev = i),
        (e.allowSlideNext = n),
        e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
    }
    function F(e) {
      const t = this;
      t.enabled &&
        (t.allowClick ||
          (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
            t.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function R() {
      const e = this,
        { wrapperEl: t, rtlTranslate: s, enabled: n } = e;
      if (!n) return;
      let i;
      (e.previousTranslate = e.translate),
        e.isHorizontal()
          ? (e.translate = -t.scrollLeft)
          : (e.translate = -t.scrollTop),
        -0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
      const r = e.maxTranslate() - e.minTranslate();
      (i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
        i !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1);
    }
    let W = !1;
    function q() {}
    const Y = (e, t) => {
      const s = d(),
        {
          params: n,
          touchEvents: i,
          el: r,
          wrapperEl: a,
          device: o,
          support: l,
        } = e,
        c = !!n.nested,
        u = "on" === t ? "addEventListener" : "removeEventListener",
        p = t;
      if (l.touch) {
        const t = !(
          "touchstart" !== i.start ||
          !l.passiveListener ||
          !n.passiveListeners
        ) && { passive: !0, capture: !1 };
        r[u](i.start, e.onTouchStart, t),
          r[u](
            i.move,
            e.onTouchMove,
            l.passiveListener ? { passive: !1, capture: c } : c
          ),
          r[u](i.end, e.onTouchEnd, t),
          i.cancel && r[u](i.cancel, e.onTouchEnd, t);
      } else
        r[u](i.start, e.onTouchStart, !1),
          s[u](i.move, e.onTouchMove, c),
          s[u](i.end, e.onTouchEnd, !1);
      (n.preventClicks || n.preventClicksPropagation) &&
        r[u]("click", e.onClick, !0),
        n.cssMode && a[u]("scroll", e.onScroll),
        n.updateOnWindowResize
          ? e[p](
              o.ios || o.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              j,
              !0
            )
          : e[p]("observerUpdate", j, !0);
    };
    const X = {
        attachEvents: function () {
          const e = this,
            t = d(),
            { params: s, support: n } = e;
          (e.onTouchStart = B.bind(e)),
            (e.onTouchMove = V.bind(e)),
            (e.onTouchEnd = H.bind(e)),
            s.cssMode && (e.onScroll = R.bind(e)),
            (e.onClick = F.bind(e)),
            n.touch && !W && (t.addEventListener("touchstart", q), (W = !0)),
            Y(e, "on");
        },
        detachEvents: function () {
          Y(this, "off");
        },
      },
      U = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    const K = {
      setBreakpoint: function () {
        const e = this,
          {
            activeIndex: t,
            initialized: s,
            loopedSlides: n = 0,
            params: i,
            $el: r,
          } = e,
          a = i.breakpoints;
        if (!a || (a && 0 === Object.keys(a).length)) return;
        const o = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
        if (!o || e.currentBreakpoint === o) return;
        const l = (o in a ? a[o] : void 0) || e.originalParams,
          d = U(e, i),
          c = U(e, l),
          u = i.enabled;
        d && !c
          ? (r.removeClass(
              `${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`
            ),
            e.emitContainerClasses())
          : !d &&
            c &&
            (r.addClass(`${i.containerModifierClass}grid`),
            ((l.grid.fill && "column" === l.grid.fill) ||
              (!l.grid.fill && "column" === i.grid.fill)) &&
              r.addClass(`${i.containerModifierClass}grid-column`),
            e.emitContainerClasses());
        const p = l.direction && l.direction !== i.direction,
          f = i.loop && (l.slidesPerView !== i.slidesPerView || p);
        p && s && e.changeDirection(), x(e.params, l);
        const h = e.params.enabled;
        Object.assign(e, {
          allowTouchMove: e.params.allowTouchMove,
          allowSlideNext: e.params.allowSlideNext,
          allowSlidePrev: e.params.allowSlidePrev,
        }),
          u && !h ? e.disable() : !u && h && e.enable(),
          (e.currentBreakpoint = o),
          e.emit("_beforeBreakpoint", l),
          f &&
            s &&
            (e.loopDestroy(),
            e.loopCreate(),
            e.updateSlides(),
            e.slideTo(t - n + e.loopedSlides, 0, !1)),
          e.emit("breakpoint", l);
      },
      getBreakpoint: function (e, t = "window", s) {
        if (!e || ("container" === t && !s)) return;
        let n = !1;
        const i = u(),
          r = "window" === t ? i.innerHeight : s.clientHeight,
          a = Object.keys(e).map((e) => {
            if ("string" == typeof e && 0 === e.indexOf("@")) {
              const t = parseFloat(e.substr(1));
              return { value: r * t, point: e };
            }
            return { value: e, point: e };
          });
        a.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
        for (let e = 0; e < a.length; e += 1) {
          const { point: r, value: o } = a[e];
          "window" === t
            ? i.matchMedia(`(min-width: ${o}px)`).matches && (n = r)
            : o <= s.clientWidth && (n = r);
        }
        return n || "max";
      },
    };
    const Q = {
      addClasses: function () {
        const e = this,
          {
            classNames: t,
            params: s,
            rtl: n,
            $el: i,
            device: r,
            support: a,
          } = e,
          o = (function (e, t) {
            const s = [];
            return (
              e.forEach((e) => {
                "object" == typeof e
                  ? Object.keys(e).forEach((n) => {
                      e[n] && s.push(t + n);
                    })
                  : "string" == typeof e && s.push(t + e);
              }),
              s
            );
          })(
            [
              "initialized",
              s.direction,
              { "pointer-events": !a.touch },
              { "free-mode": e.params.freeMode && s.freeMode.enabled },
              { autoheight: s.autoHeight },
              { rtl: n },
              { grid: s.grid && s.grid.rows > 1 },
              {
                "grid-column":
                  s.grid && s.grid.rows > 1 && "column" === s.grid.fill,
              },
              { android: r.android },
              { ios: r.ios },
              { "css-mode": s.cssMode },
              { centered: s.cssMode && s.centeredSlides },
            ],
            s.containerModifierClass
          );
        t.push(...o), i.addClass([...t].join(" ")), e.emitContainerClasses();
      },
      removeClasses: function () {
        const { $el: e, classNames: t } = this;
        e.removeClass(t.join(" ")), this.emitContainerClasses();
      },
    };
    const J = {
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
    function Z(e, t) {
      return function (s = {}) {
        const n = Object.keys(s)[0],
          i = s[n];
        "object" == typeof i && null !== i
          ? (["navigation", "pagination", "scrollbar"].indexOf(n) >= 0 &&
              !0 === e[n] &&
              (e[n] = { auto: !0 }),
            n in e && "enabled" in i
              ? (!0 === e[n] && (e[n] = { enabled: !0 }),
                "object" != typeof e[n] ||
                  "enabled" in e[n] ||
                  (e[n].enabled = !0),
                e[n] || (e[n] = { enabled: !1 }),
                x(t, s))
              : x(t, s))
          : x(t, s);
      };
    }
    const ee = {
        eventsEmitter: A,
        update: I,
        translate: z,
        transition: {
          setTransition: function (e, t) {
            const s = this;
            s.params.cssMode || s.$wrapperEl.transition(e),
              s.emit("setTransition", e, t);
          },
          transitionStart: function (e = !0, t) {
            const s = this,
              { params: n } = s;
            n.cssMode ||
              (n.autoHeight && s.updateAutoHeight(),
              D({ swiper: s, runCallbacks: e, direction: t, step: "Start" }));
          },
          transitionEnd: function (e = !0, t) {
            const s = this,
              { params: n } = s;
            (s.animating = !1),
              n.cssMode ||
                (s.setTransition(0),
                D({ swiper: s, runCallbacks: e, direction: t, step: "End" }));
          },
        },
        slide: G,
        loop: N,
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
            const s =
              "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
            (s.style.cursor = "move"),
              (s.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
              (s.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
              (s.style.cursor = e ? "grabbing" : "grab");
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
        events: X,
        breakpoints: K,
        checkOverflow: {
          checkOverflow: function () {
            const e = this,
              { isLocked: t, params: s } = e,
              { slidesOffsetBefore: n } = s;
            if (n) {
              const t = e.slides.length - 1,
                s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * n;
              e.isLocked = e.size > s;
            } else e.isLocked = 1 === e.snapGrid.length;
            !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
              !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
              t && t !== e.isLocked && (e.isEnd = !1),
              t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
          },
        },
        classes: Q,
        images: {
          loadImage: function (e, t, s, n, i, r) {
            const a = u();
            let o;
            function l() {
              r && r();
            }
            b(e).parent("picture")[0] || (e.complete && i)
              ? l()
              : t
              ? ((o = new a.Image()),
                (o.onload = l),
                (o.onerror = l),
                n && (o.sizes = n),
                s && (o.srcset = s),
                t && (o.src = t))
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
            for (let s = 0; s < e.imagesToLoad.length; s += 1) {
              const n = e.imagesToLoad[s];
              e.loadImage(
                n,
                n.currentSrc || n.getAttribute("src"),
                n.srcset || n.getAttribute("srcset"),
                n.sizes || n.getAttribute("sizes"),
                !0,
                t
              );
            }
          },
        },
      },
      te = {};
    class se {
      constructor(...e) {
        let t, s;
        if (
          (1 === e.length &&
          e[0].constructor &&
          "Object" === Object.prototype.toString.call(e[0]).slice(8, -1)
            ? (s = e[0])
            : ([t, s] = e),
          s || (s = {}),
          (s = x({}, s)),
          t && !s.el && (s.el = t),
          s.el && b(s.el).length > 1)
        ) {
          const e = [];
          return (
            b(s.el).each((t) => {
              const n = x({}, s, { el: t });
              e.push(new se(n));
            }),
            e
          );
        }
        const n = this;
        (n.__swiper__ = !0),
          (n.support = P()),
          (n.device = O({ userAgent: s.userAgent })),
          (n.browser = $()),
          (n.eventsListeners = {}),
          (n.eventsAnyListeners = []),
          (n.modules = [...n.__modules__]),
          s.modules && Array.isArray(s.modules) && n.modules.push(...s.modules);
        const i = {};
        n.modules.forEach((e) => {
          e({
            swiper: n,
            extendParams: Z(s, i),
            on: n.on.bind(n),
            once: n.once.bind(n),
            off: n.off.bind(n),
            emit: n.emit.bind(n),
          });
        });
        const r = x({}, J, i);
        return (
          (n.params = x({}, r, te, s)),
          (n.originalParams = x({}, n.params)),
          (n.passedParams = x({}, s)),
          n.params &&
            n.params.on &&
            Object.keys(n.params.on).forEach((e) => {
              n.on(e, n.params.on[e]);
            }),
          n.params && n.params.onAny && n.onAny(n.params.onAny),
          (n.$ = b),
          Object.assign(n, {
            enabled: n.params.enabled,
            el: t,
            classNames: [],
            slides: b(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === n.params.direction,
            isVertical: () => "vertical" === n.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: n.params.allowSlideNext,
            allowSlidePrev: n.params.allowSlidePrev,
            touchEvents: (function () {
              const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                t = ["pointerdown", "pointermove", "pointerup"];
              return (
                (n.touchEventsTouch = {
                  start: e[0],
                  move: e[1],
                  end: e[2],
                  cancel: e[3],
                }),
                (n.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
                n.support.touch || !n.params.simulateTouch
                  ? n.touchEventsTouch
                  : n.touchEventsDesktop
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
              focusableElements: n.params.focusableElements,
              lastClickTime: T(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0,
            },
            allowClick: !0,
            allowTouchMove: n.params.allowTouchMove,
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
          n.emit("_swiper"),
          n.params.init && n.init(),
          n
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
        const s = this;
        e = Math.min(Math.max(e, 0), 1);
        const n = s.minTranslate(),
          i = (s.maxTranslate() - n) * e + n;
        s.translateTo(i, void 0 === t ? 0 : t),
          s.updateActiveIndex(),
          s.updateSlidesClasses();
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
        e.slides.each((s) => {
          const n = e.getSlideClasses(s);
          t.push({ slideEl: s, classNames: n }), e.emit("_slideClass", s, n);
        }),
          e.emit("_slideClasses", t);
      }
      slidesPerViewDynamic(e = "current", t = !1) {
        const {
          params: s,
          slides: n,
          slidesGrid: i,
          slidesSizesGrid: r,
          size: a,
          activeIndex: o,
        } = this;
        let l = 1;
        if (s.centeredSlides) {
          let e,
            t = n[o].swiperSlideSize;
          for (let s = o + 1; s < n.length; s += 1)
            n[s] &&
              !e &&
              ((t += n[s].swiperSlideSize), (l += 1), t > a && (e = !0));
          for (let s = o - 1; s >= 0; s -= 1)
            n[s] &&
              !e &&
              ((t += n[s].swiperSlideSize), (l += 1), t > a && (e = !0));
        } else if ("current" === e)
          for (let e = o + 1; e < n.length; e += 1) {
            (t ? i[e] + r[e] - i[o] < a : i[e] - i[o] < a) && (l += 1);
          }
        else
          for (let e = o - 1; e >= 0; e -= 1) {
            i[o] - i[e] < a && (l += 1);
          }
        return l;
      }
      update() {
        const e = this;
        if (!e || e.destroyed) return;
        const { snapGrid: t, params: s } = e;
        function n() {
          const t = e.rtlTranslate ? -1 * e.translate : e.translate,
            s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let i;
        s.breakpoints && e.setBreakpoint(),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.params.freeMode && e.params.freeMode.enabled
            ? (n(), e.params.autoHeight && e.updateAutoHeight())
            : ((i =
                ("auto" === e.params.slidesPerView ||
                  e.params.slidesPerView > 1) &&
                e.isEnd &&
                !e.params.centeredSlides
                  ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                  : e.slideTo(e.activeIndex, 0, !1, !0)),
              i || n()),
          s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
          e.emit("update");
      }
      changeDirection(e, t = !0) {
        const s = this,
          n = s.params.direction;
        return (
          e || (e = "horizontal" === n ? "vertical" : "horizontal"),
          e === n ||
            ("horizontal" !== e && "vertical" !== e) ||
            (s.$el
              .removeClass(`${s.params.containerModifierClass}${n}`)
              .addClass(`${s.params.containerModifierClass}${e}`),
            s.emitContainerClasses(),
            (s.params.direction = e),
            s.slides.each((t) => {
              "vertical" === e ? (t.style.width = "") : (t.style.height = "");
            }),
            s.emit("changeDirection"),
            t && s.update()),
          s
        );
      }
      mount(e) {
        const t = this;
        if (t.mounted) return !0;
        const s = b(e || t.params.el);
        if (!(e = s[0])) return !1;
        e.swiper = t;
        const n = () =>
          `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let i = (() => {
          if (e && e.shadowRoot && e.shadowRoot.querySelector) {
            const t = b(e.shadowRoot.querySelector(n()));
            return (t.children = (e) => s.children(e)), t;
          }
          return s.children(n());
        })();
        if (0 === i.length && t.params.createElements) {
          const e = d().createElement("div");
          (i = b(e)),
            (e.className = t.params.wrapperClass),
            s.append(e),
            s.children(`.${t.params.slideClass}`).each((e) => {
              i.append(e);
            });
        }
        return (
          Object.assign(t, {
            $el: s,
            el: e,
            $wrapperEl: i,
            wrapperEl: i[0],
            mounted: !0,
            rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
            rtlTranslate:
              "horizontal" === t.params.direction &&
              ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
            wrongRTL: "-webkit-box" === i.css("display"),
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
      destroy(e = !0, t = !0) {
        const s = this,
          { params: n, $el: i, $wrapperEl: r, slides: a } = s;
        return (
          void 0 === s.params ||
            s.destroyed ||
            (s.emit("beforeDestroy"),
            (s.initialized = !1),
            s.detachEvents(),
            n.loop && s.loopDestroy(),
            t &&
              (s.removeClasses(),
              i.removeAttr("style"),
              r.removeAttr("style"),
              a &&
                a.length &&
                a
                  .removeClass(
                    [
                      n.slideVisibleClass,
                      n.slideActiveClass,
                      n.slideNextClass,
                      n.slidePrevClass,
                    ].join(" ")
                  )
                  .removeAttr("style")
                  .removeAttr("data-swiper-slide-index")),
            s.emit("destroy"),
            Object.keys(s.eventsListeners).forEach((e) => {
              s.off(e);
            }),
            !1 !== e &&
              ((s.$el[0].swiper = null),
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
              })(s)),
            (s.destroyed = !0)),
          null
        );
      }
      static extendDefaults(e) {
        x(te, e);
      }
      static get extendedDefaults() {
        return te;
      }
      static get defaults() {
        return J;
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
    Object.keys(ee).forEach((e) => {
      Object.keys(ee[e]).forEach((t) => {
        se.prototype[t] = ee[e][t];
      });
    }),
      se.use([
        function ({ swiper: e, on: t, emit: s }) {
          const n = u();
          let i = null;
          const r = () => {
              e &&
                !e.destroyed &&
                e.initialized &&
                (s("beforeResize"), s("resize"));
            },
            a = () => {
              e && !e.destroyed && e.initialized && s("orientationchange");
            };
          t("init", () => {
            e.params.resizeObserver && void 0 !== n.ResizeObserver
              ? e &&
                !e.destroyed &&
                e.initialized &&
                ((i = new ResizeObserver((t) => {
                  const { width: s, height: n } = e;
                  let i = s,
                    a = n;
                  t.forEach(
                    ({ contentBoxSize: t, contentRect: s, target: n }) => {
                      (n && n !== e.el) ||
                        ((i = s ? s.width : (t[0] || t).inlineSize),
                        (a = s ? s.height : (t[0] || t).blockSize));
                    }
                  ),
                    (i === s && a === n) || r();
                })),
                i.observe(e.el))
              : (n.addEventListener("resize", r),
                n.addEventListener("orientationchange", a));
          }),
            t("destroy", () => {
              i && i.unobserve && e.el && (i.unobserve(e.el), (i = null)),
                n.removeEventListener("resize", r),
                n.removeEventListener("orientationchange", a);
            });
        },
        function ({ swiper: e, extendParams: t, on: s, emit: n }) {
          const i = [],
            r = u(),
            a = (e, t = {}) => {
              const s = new (r.MutationObserver || r.WebkitMutationObserver)(
                (e) => {
                  if (1 === e.length) return void n("observerUpdate", e[0]);
                  const t = function () {
                    n("observerUpdate", e[0]);
                  };
                  r.requestAnimationFrame
                    ? r.requestAnimationFrame(t)
                    : r.setTimeout(t, 0);
                }
              );
              s.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData,
              }),
                i.push(s);
            };
          t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
            s("init", () => {
              if (e.params.observer) {
                if (e.params.observeParents) {
                  const t = e.$el.parents();
                  for (let e = 0; e < t.length; e += 1) a(t[e]);
                }
                a(e.$el[0], { childList: e.params.observeSlideChildren }),
                  a(e.$wrapperEl[0], { attributes: !1 });
              }
            }),
            s("destroy", () => {
              i.forEach((e) => {
                e.disconnect();
              }),
                i.splice(0, i.length);
            });
        },
      ]);
    const ne = se;
    function ie({ swiper: e, extendParams: t, on: s, emit: n }) {
      const i = d();
      let r,
        a,
        o,
        l,
        c = !1,
        u = null,
        p = null;
      function f() {
        if (!e.params.scrollbar.el || !e.scrollbar.el) return;
        const { scrollbar: t, rtlTranslate: s, progress: n } = e,
          { $dragEl: i, $el: r } = t,
          l = e.params.scrollbar;
        let d = a,
          c = (o - a) * n;
        s
          ? ((c = -c),
            c > 0 ? ((d = a - c), (c = 0)) : -c + a > o && (d = o + c))
          : c < 0
          ? ((d = a + c), (c = 0))
          : c + a > o && (d = o - c),
          e.isHorizontal()
            ? (i.transform(`translate3d(${c}px, 0, 0)`),
              (i[0].style.width = `${d}px`))
            : (i.transform(`translate3d(0px, ${c}px, 0)`),
              (i[0].style.height = `${d}px`)),
          l.hide &&
            (clearTimeout(u),
            (r[0].style.opacity = 1),
            (u = setTimeout(() => {
              (r[0].style.opacity = 0), r.transition(400);
            }, 1e3)));
      }
      function h() {
        if (!e.params.scrollbar.el || !e.scrollbar.el) return;
        const { scrollbar: t } = e,
          { $dragEl: s, $el: n } = t;
        (s[0].style.width = ""),
          (s[0].style.height = ""),
          (o = e.isHorizontal() ? n[0].offsetWidth : n[0].offsetHeight),
          (l =
            e.size /
            (e.virtualSize +
              e.params.slidesOffsetBefore -
              (e.params.centeredSlides ? e.snapGrid[0] : 0))),
          (a =
            "auto" === e.params.scrollbar.dragSize
              ? o * l
              : parseInt(e.params.scrollbar.dragSize, 10)),
          e.isHorizontal()
            ? (s[0].style.width = `${a}px`)
            : (s[0].style.height = `${a}px`),
          (n[0].style.display = l >= 1 ? "none" : ""),
          e.params.scrollbar.hide && (n[0].style.opacity = 0),
          e.params.watchOverflow &&
            e.enabled &&
            t.$el[e.isLocked ? "addClass" : "removeClass"](
              e.params.scrollbar.lockClass
            );
      }
      function m(t) {
        return e.isHorizontal()
          ? "touchstart" === t.type || "touchmove" === t.type
            ? t.targetTouches[0].clientX
            : t.clientX
          : "touchstart" === t.type || "touchmove" === t.type
          ? t.targetTouches[0].clientY
          : t.clientY;
      }
      function g(t) {
        const { scrollbar: s, rtlTranslate: n } = e,
          { $el: i } = s;
        let l;
        (l =
          (m(t) -
            i.offset()[e.isHorizontal() ? "left" : "top"] -
            (null !== r ? r : a / 2)) /
          (o - a)),
          (l = Math.max(Math.min(l, 1), 0)),
          n && (l = 1 - l);
        const d = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * l;
        e.updateProgress(d),
          e.setTranslate(d),
          e.updateActiveIndex(),
          e.updateSlidesClasses();
      }
      function v(t) {
        const s = e.params.scrollbar,
          { scrollbar: i, $wrapperEl: a } = e,
          { $el: o, $dragEl: l } = i;
        (c = !0),
          (r =
            t.target === l[0] || t.target === l
              ? m(t) -
                t.target.getBoundingClientRect()[
                  e.isHorizontal() ? "left" : "top"
                ]
              : null),
          t.preventDefault(),
          t.stopPropagation(),
          a.transition(100),
          l.transition(100),
          g(t),
          clearTimeout(p),
          o.transition(0),
          s.hide && o.css("opacity", 1),
          e.params.cssMode && e.$wrapperEl.css("scroll-snap-type", "none"),
          n("scrollbarDragStart", t);
      }
      function w(t) {
        const { scrollbar: s, $wrapperEl: i } = e,
          { $el: r, $dragEl: a } = s;
        c &&
          (t.preventDefault ? t.preventDefault() : (t.returnValue = !1),
          g(t),
          i.transition(0),
          r.transition(0),
          a.transition(0),
          n("scrollbarDragMove", t));
      }
      function T(t) {
        const s = e.params.scrollbar,
          { scrollbar: i, $wrapperEl: r } = e,
          { $el: a } = i;
        c &&
          ((c = !1),
          e.params.cssMode &&
            (e.$wrapperEl.css("scroll-snap-type", ""), r.transition("")),
          s.hide &&
            (clearTimeout(p),
            (p = S(() => {
              a.css("opacity", 0), a.transition(400);
            }, 1e3))),
          n("scrollbarDragEnd", t),
          s.snapOnRelease && e.slideToClosest());
      }
      function y(t) {
        const {
            scrollbar: s,
            touchEventsTouch: n,
            touchEventsDesktop: r,
            params: a,
            support: o,
          } = e,
          l = s.$el[0],
          d = !(!o.passiveListener || !a.passiveListeners) && {
            passive: !1,
            capture: !1,
          },
          c = !(!o.passiveListener || !a.passiveListeners) && {
            passive: !0,
            capture: !1,
          };
        if (!l) return;
        const u = "on" === t ? "addEventListener" : "removeEventListener";
        o.touch
          ? (l[u](n.start, v, d), l[u](n.move, w, d), l[u](n.end, T, c))
          : (l[u](r.start, v, d), i[u](r.move, w, d), i[u](r.end, T, c));
      }
      function E() {
        const { scrollbar: t, $el: s } = e;
        e.params.scrollbar = (function (e, t, s, n) {
          const i = d();
          return (
            e.params.createElements &&
              Object.keys(n).forEach((r) => {
                if (!s[r] && !0 === s.auto) {
                  let a = e.$el.children(`.${n[r]}`)[0];
                  a ||
                    ((a = i.createElement("div")),
                    (a.className = n[r]),
                    e.$el.append(a)),
                    (s[r] = a),
                    (t[r] = a);
                }
              }),
            s
          );
        })(e, e.originalParams.scrollbar, e.params.scrollbar, {
          el: "swiper-scrollbar",
        });
        const n = e.params.scrollbar;
        if (!n.el) return;
        let i = b(n.el);
        e.params.uniqueNavElements &&
          "string" == typeof n.el &&
          i.length > 1 &&
          1 === s.find(n.el).length &&
          (i = s.find(n.el));
        let r = i.find(`.${e.params.scrollbar.dragClass}`);
        0 === r.length &&
          ((r = b(`<div class="${e.params.scrollbar.dragClass}"></div>`)),
          i.append(r)),
          Object.assign(t, { $el: i, el: i[0], $dragEl: r, dragEl: r[0] }),
          n.draggable && e.params.scrollbar.el && y("on"),
          i &&
            i[e.enabled ? "removeClass" : "addClass"](
              e.params.scrollbar.lockClass
            );
      }
      function x() {
        e.params.scrollbar.el && y("off");
      }
      t({
        scrollbar: {
          el: null,
          dragSize: "auto",
          hide: !1,
          draggable: !1,
          snapOnRelease: !0,
          lockClass: "swiper-scrollbar-lock",
          dragClass: "swiper-scrollbar-drag",
        },
      }),
        (e.scrollbar = { el: null, dragEl: null, $el: null, $dragEl: null }),
        s("init", () => {
          E(), h(), f();
        }),
        s("update resize observerUpdate lock unlock", () => {
          h();
        }),
        s("setTranslate", () => {
          f();
        }),
        s("setTransition", (t, s) => {
          !(function (t) {
            e.params.scrollbar.el &&
              e.scrollbar.el &&
              e.scrollbar.$dragEl.transition(t);
          })(s);
        }),
        s("enable disable", () => {
          const { $el: t } = e.scrollbar;
          t &&
            t[e.enabled ? "removeClass" : "addClass"](
              e.params.scrollbar.lockClass
            );
        }),
        s("destroy", () => {
          x();
        }),
        Object.assign(e.scrollbar, {
          updateSize: h,
          setTranslate: f,
          init: E,
          destroy: x,
        });
    }
    function re({ swiper: e, extendParams: t, on: s, emit: n }) {
      let i;
      function r() {
        const t = e.slides.eq(e.activeIndex);
        let s = e.params.autoplay.delay;
        t.attr("data-swiper-autoplay") &&
          (s = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
          clearTimeout(i),
          (i = S(() => {
            let t;
            e.params.autoplay.reverseDirection
              ? e.params.loop
                ? (e.loopFix(),
                  (t = e.slidePrev(e.params.speed, !0, !0)),
                  n("autoplay"))
                : e.isBeginning
                ? e.params.autoplay.stopOnLastSlide
                  ? o()
                  : ((t = e.slideTo(
                      e.slides.length - 1,
                      e.params.speed,
                      !0,
                      !0
                    )),
                    n("autoplay"))
                : ((t = e.slidePrev(e.params.speed, !0, !0)), n("autoplay"))
              : e.params.loop
              ? (e.loopFix(),
                (t = e.slideNext(e.params.speed, !0, !0)),
                n("autoplay"))
              : e.isEnd
              ? e.params.autoplay.stopOnLastSlide
                ? o()
                : ((t = e.slideTo(0, e.params.speed, !0, !0)), n("autoplay"))
              : ((t = e.slideNext(e.params.speed, !0, !0)), n("autoplay")),
              ((e.params.cssMode && e.autoplay.running) || !1 === t) && r();
          }, s));
      }
      function a() {
        return (
          void 0 === i &&
          !e.autoplay.running &&
          ((e.autoplay.running = !0), n("autoplayStart"), r(), !0)
        );
      }
      function o() {
        return (
          !!e.autoplay.running &&
          void 0 !== i &&
          (i && (clearTimeout(i), (i = void 0)),
          (e.autoplay.running = !1),
          n("autoplayStop"),
          !0)
        );
      }
      function l(t) {
        e.autoplay.running &&
          (e.autoplay.paused ||
            (i && clearTimeout(i),
            (e.autoplay.paused = !0),
            0 !== t && e.params.autoplay.waitForTransition
              ? ["transitionend", "webkitTransitionEnd"].forEach((t) => {
                  e.$wrapperEl[0].addEventListener(t, u);
                })
              : ((e.autoplay.paused = !1), r())));
      }
      function c() {
        const t = d();
        "hidden" === t.visibilityState && e.autoplay.running && l(),
          "visible" === t.visibilityState &&
            e.autoplay.paused &&
            (r(), (e.autoplay.paused = !1));
      }
      function u(t) {
        e &&
          !e.destroyed &&
          e.$wrapperEl &&
          t.target === e.$wrapperEl[0] &&
          (["transitionend", "webkitTransitionEnd"].forEach((t) => {
            e.$wrapperEl[0].removeEventListener(t, u);
          }),
          (e.autoplay.paused = !1),
          e.autoplay.running ? r() : o());
      }
      function p() {
        e.params.autoplay.disableOnInteraction ? o() : l(),
          ["transitionend", "webkitTransitionEnd"].forEach((t) => {
            e.$wrapperEl[0].removeEventListener(t, u);
          });
      }
      function f() {
        e.params.autoplay.disableOnInteraction ||
          ((e.autoplay.paused = !1), r());
      }
      (e.autoplay = { running: !1, paused: !1 }),
        t({
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1,
            pauseOnMouseEnter: !1,
          },
        }),
        s("init", () => {
          if (e.params.autoplay.enabled) {
            a();
            d().addEventListener("visibilitychange", c),
              e.params.autoplay.pauseOnMouseEnter &&
                (e.$el.on("mouseenter", p), e.$el.on("mouseleave", f));
          }
        }),
        s("beforeTransitionStart", (t, s, n) => {
          e.autoplay.running &&
            (n || !e.params.autoplay.disableOnInteraction
              ? e.autoplay.pause(s)
              : o());
        }),
        s("sliderFirstMove", () => {
          e.autoplay.running &&
            (e.params.autoplay.disableOnInteraction ? o() : l());
        }),
        s("touchEnd", () => {
          e.params.cssMode &&
            e.autoplay.paused &&
            !e.params.autoplay.disableOnInteraction &&
            r();
        }),
        s("destroy", () => {
          e.$el.off("mouseenter", p),
            e.$el.off("mouseleave", f),
            e.autoplay.running && o();
          d().removeEventListener("visibilitychange", c);
        }),
        Object.assign(e.autoplay, { pause: l, run: r, start: a, stop: o });
    }
    function ae() {
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
      ae(),
        document.querySelector(".slider-team") &&
          new ne(".slider-team__cards", {
            modules: [ie, re],
            autoplay: { delay: 1500, disableOnInteraction: !1 },
            scrollbar: {
              el: ".slider-team__scrollbar",
              draggable: !0,
              dragSize: 80,
            },
            slidesPerView: 4,
            spaceBetween: 30,
            speed: 800,
            breakpoints: {
              320: {
                slidesPerView: 1,
                spaceBetween: 0,
                scrollbar: { dragSize: 40 },
              },
              475: { slidesPerView: 2, spaceBetween: 20 },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
                scrollbar: { dragSize: 50 },
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 20,
                scrollbar: { dragSize: 60 },
              },
              1268: {
                slidesPerView: 4,
                spaceBetween: 30,
                scrollbar: { dragSize: 80 },
              },
            },
            on: {},
          }),
        document.querySelector(".cards-project") &&
          new ne(".cards-project__slider", {
            modules: [re],
            autoplay: { delay: 2500, disableOnInteraction: !1 },
            slidesPerView: 3,
            spaceBetween: 30,
            speed: 800,
            breakpoints: {
              320: { slidesPerView: 1, spaceBetween: 20 },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
                centeredSlides: !0,
                centeredSlidesBounds: !1,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 20,
                centeredSlides: !0,
                centeredSlidesBounds: !0,
              },
              1268: {
                slidesPerView: 3,
                spaceBetween: 30,
                centeredSlides: !0,
                centeredSlidesBounds: !0,
              },
            },
            on: {},
          });
    });
    new (s(732))({
      elements_selector: "[data-src]",
      class_loaded: "_lazy-loaded",
      use_native: !0,
    }).update();
    let oe = !1;
    setTimeout(() => {
      if (oe) {
        let e = new Event("windowScroll");
        window.addEventListener("scroll", function (t) {
          document.dispatchEvent(e);
        });
      }
    }, 0),
      (window.FLS = !0),
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
      (function () {
        let s = document.querySelector(".icon-menu");
        s &&
          s.addEventListener("click", function (s) {
            e &&
              (((e = 500) => {
                document.documentElement.classList.contains("lock")
                  ? t(e)
                  : n(e);
              })(),
              document.documentElement.classList.toggle("menu-open"));
          });
      })(),
      (function () {
        function e(e) {
          if ("click" === e.type) {
            const t = e.target;
            if (t.closest("[data-goto]")) {
              const s = t.closest("[data-goto]"),
                n = s.dataset.goto ? s.dataset.goto : "",
                i = !!s.hasAttribute("data-goto-header"),
                a = s.dataset.gotoSpeed ? s.dataset.gotoSpeed : "500";
              r(n, i, a), e.preventDefault();
            }
          } else if ("watcherCallback" === e.type && e.detail) {
            const t = e.detail.entry,
              s = t.target;
            if ("navigator" === s.dataset.watch) {
              const e = s.id,
                n =
                  (document.querySelector("[data-goto]._navigator-active"),
                  document.querySelector(`[data-goto="${e}"]`));
              t.isIntersecting
                ? n && n.classList.add("_navigator-active")
                : n && n.classList.remove("_navigator-active");
            }
          }
        }
        document.addEventListener("click", e),
          document.addEventListener("watcherCallback", e);
      })(),
      (function () {
        oe = !0;
        const e = document.querySelector("header.header"),
          t = e.hasAttribute("data-scroll-show"),
          s = e.dataset.scrollShow ? e.dataset.scrollShow : 500,
          n = e.dataset.scroll ? e.dataset.scroll : 1;
        let i,
          r = 0;
        document.addEventListener("windowScroll", function (a) {
          const o = window.scrollY;
          clearTimeout(i),
            o >= n
              ? (!e.classList.contains("_header-scroll") &&
                  e.classList.add("_header-scroll"),
                t &&
                  (o > r
                    ? e.classList.contains("_header-show") &&
                      e.classList.remove("_header-show")
                    : !e.classList.contains("_header-show") &&
                      e.classList.add("_header-show"),
                  (i = setTimeout(() => {
                    !e.classList.contains("_header-show") &&
                      e.classList.add("_header-show");
                  }, s))))
              : (e.classList.contains("_header-scroll") &&
                  e.classList.remove("_header-scroll"),
                t &&
                  e.classList.contains("_header-show") &&
                  e.classList.remove("_header-show")),
            (r = o <= 0 ? 0 : o);
        });
      })();
  })();
})();
