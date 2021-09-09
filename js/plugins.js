/* ===================================================================
 * javascript plugins
 *
 * ------------------------------------------------------------------- */

/**
 * Jump JS
 * Minified by jsDelivr using UglifyJS v3.3.16.
 * Original file: /npm/jump.js@1.0.2/dist/jump.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr. com/using-sri-with-dynamic-files
 */
!(function (o, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : (o.Jump = t());
})(this, function () {
  "use strict";
  var v = function (o, t, e, n) {
      return (o /= n / 2) < 1
        ? (e / 2) * o * o + t
        : (-e / 2) * (--o * (o - 2) - 1) + t;
    },
    b =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (o) {
            return typeof o;
          }
        : function (o) {
            return o &&
              "function" == typeof Symbol &&
              o.constructor === Symbol &&
              o !== Symbol.prototype
              ? "symbol"
              : typeof o;
          };
  return (function () {
    var e = void 0,
      n = void 0,
      i = void 0,
      r = void 0,
      u = void 0,
      d = void 0,
      c = void 0,
      f = void 0,
      t = void 0,
      a = void 0,
      s = void 0,
      l = void 0;
    function y(o) {
      return o.getBoundingClientRect().top + n;
    }
    function m(o) {
      t || (t = o),
        (s = u((a = o - t), n, c, f)),
        window.scrollTo(0, s),
        a < f
          ? window.requestAnimationFrame(m)
          : (window.scrollTo(0, n + c),
            e && d && (e.setAttribute("tabindex", "-1"), e.focus()),
            "function" == typeof l && l(),
            (t = !1));
    }
    return function (o) {
      var t =
        1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
      switch (
        ((f = t.duration || 1e3),
        (r = t.offset || 0),
        (l = t.callback),
        (u = t.easing || v),
        (d = t.a11y || !1),
        (n = window.scrollY || window.pageYOffset),
        void 0 === o ? "undefined" : b(o))
      ) {
        case "number":
          (e = void 0), (d = !1), (i = n + o);
          break;
        case "object":
          i = y((e = o));
          break;
        case "string":
          (e = document.querySelector(o)), (i = y(e));
      }
      switch (((c = i - n + r), b(t.duration))) {
        case "number":
          f = t.duration;
          break;
        case "function":
          f = t.duration(c);
      }
      window.requestAnimationFrame(m);
    };
  })();
});

/**
 * Basic Lightbox
 * v. 5.0.3
 * https://basiclightbox.electerious.com/
 *
 */
!(function (e) {
  if ("object" == typeof exports && "undefined" != typeof module)
    module.exports = e();
  else if ("function" == typeof define && define.amd) define([], e);
  else {
    ("undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self
      ? self
      : this
    ).basicLightbox = e();
  }
})(function () {
  return (function e(n, t, o) {
    function r(c, u) {
      if (!t[c]) {
        if (!n[c]) {
          var s = "function" == typeof require && require;
          if (!u && s) return s(c, !0);
          if (i) return i(c, !0);
          var a = new Error("Cannot find module '" + c + "'");
          throw ((a.code = "MODULE_NOT_FOUND"), a);
        }
        var l = (t[c] = { exports: {} });
        n[c][0].call(
          l.exports,
          function (e) {
            return r(n[c][1][e] || e);
          },
          l,
          l.exports,
          e,
          n,
          t,
          o
        );
      }
      return t[c].exports;
    }
    for (
      var i = "function" == typeof require && require, c = 0;
      c < o.length;
      c++
    )
      r(o[c]);
    return r;
  })(
    {
      1: [
        function (e, n, t) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.create = t.visible = void 0);
          var o = function (e) {
              var n =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                t = document.createElement("div");
              return (
                (t.innerHTML = e.trim()), !0 === n ? t.children : t.firstChild
              );
            },
            r = function (e, n) {
              var t = e.children;
              return 1 === t.length && t[0].tagName === n;
            },
            i = function (e) {
              return (
                null != (e = e || document.querySelector(".basicLightbox")) &&
                !0 === e.ownerDocument.body.contains(e)
              );
            };
          t.visible = i;
          t.create = function (e, n) {
            var t = (function (e, n) {
                var t = o(
                    '\n\t\t<div class="basicLightbox '.concat(
                      n.className,
                      '">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t'
                    )
                  ),
                  i = t.querySelector(".basicLightbox__placeholder");
                e.forEach(function (e) {
                  return i.appendChild(e);
                });
                var c = r(i, "IMG"),
                  u = r(i, "VIDEO"),
                  s = r(i, "IFRAME");
                return (
                  !0 === c && t.classList.add("basicLightbox--img"),
                  !0 === u && t.classList.add("basicLightbox--video"),
                  !0 === s && t.classList.add("basicLightbox--iframe"),
                  t
                );
              })(
                (e = (function (e) {
                  var n = "string" == typeof e,
                    t = e instanceof HTMLElement == !0;
                  if (!1 === n && !1 === t)
                    throw new Error(
                      "Content must be a DOM element/node or string"
                    );
                  return !0 === n
                    ? Array.from(o(e, !0))
                    : "TEMPLATE" === e.tagName
                    ? [e.content.cloneNode(!0)]
                    : Array.from(e.children);
                })(e)),
                (n = (function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  if (
                    (null == (e = Object.assign({}, e)).closable &&
                      (e.closable = !0),
                    null == e.className && (e.className = ""),
                    null == e.onShow && (e.onShow = function () {}),
                    null == e.onClose && (e.onClose = function () {}),
                    "boolean" != typeof e.closable)
                  )
                    throw new Error("Property `closable` must be a boolean");
                  if ("string" != typeof e.className)
                    throw new Error("Property `className` must be a string");
                  if ("function" != typeof e.onShow)
                    throw new Error("Property `onShow` must be a function");
                  if ("function" != typeof e.onClose)
                    throw new Error("Property `onClose` must be a function");
                  return e;
                })(n))
              ),
              c = function (e) {
                return (
                  !1 !== n.onClose(u) &&
                  (function (e, n) {
                    return (
                      e.classList.remove("basicLightbox--visible"),
                      setTimeout(function () {
                        return (
                          !1 === i(e) || e.parentElement.removeChild(e), n()
                        );
                      }, 410),
                      !0
                    );
                  })(t, function () {
                    if ("function" == typeof e) return e(u);
                  })
                );
              };
            !0 === n.closable &&
              t.addEventListener("click", function (e) {
                e.target === t && c();
              });
            var u = {
              element: function () {
                return t;
              },
              visible: function () {
                return i(t);
              },
              show: function (e) {
                return (
                  !1 !== n.onShow(u) &&
                  (function (e, n) {
                    return (
                      document.body.appendChild(e),
                      setTimeout(function () {
                        requestAnimationFrame(function () {
                          return e.classList.add("basicLightbox--visible"), n();
                        });
                      }, 10),
                      !0
                    );
                  })(t, function () {
                    if ("function" == typeof e) return e(u);
                  })
                );
              },
              close: c,
            };
            return u;
          };
        },
        {},
      ],
    },
    {},
    [1]
  )(1);
});

/**
 * ------------------------------------------
 * Rellax.js
 * Buttery smooth parallax library
 * Copyright (c) 2016 Moe Amaya (@moeamaya)
 * MIT license
 *
 * Thanks to Paraxify.js and Jaime Cabllero
 * for parallax concepts
 */
(function (q, g) {
  "function" === typeof define && define.amd
    ? define([], g)
    : "object" === typeof module && module.exports
    ? (module.exports = g())
    : (q.Rellax = g());
})("undefined" !== typeof window ? window : global, function () {
  var q = function (g, u) {
    function C() {
      if (
        3 === a.options.breakpoints.length &&
        Array.isArray(a.options.breakpoints)
      ) {
        var f = !0,
          c = !0,
          b;
        a.options.breakpoints.forEach(function (a) {
          "number" !== typeof a && (c = !1);
          null !== b && a < b && (f = !1);
          b = a;
        });
        if (f && c) return;
      }
      a.options.breakpoints = [576, 768, 1201];
      console.warn(
        "Rellax: You must pass an array of 3 numbers in ascending order to the breakpoints option. Defaults reverted"
      );
    }
    var a = Object.create(q.prototype),
      l = 0,
      v = 0,
      m = 0,
      n = 0,
      d = [],
      w = !0,
      A =
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        function (a) {
          return setTimeout(a, 1e3 / 60);
        },
      p = null,
      x = !1;
    try {
      var k = Object.defineProperty({}, "passive", {
        get: function () {
          x = !0;
        },
      });
      window.addEventListener("testPassive", null, k);
      window.removeEventListener("testPassive", null, k);
    } catch (f) {}
    var D =
        window.cancelAnimationFrame ||
        window.mozCancelAnimationFrame ||
        clearTimeout,
      E =
        window.transformProp ||
        (function () {
          var a = document.createElement("div");
          if (null === a.style.transform) {
            var c = ["Webkit", "Moz", "ms"],
              b;
            for (b in c)
              if (void 0 !== a.style[c[b] + "Transform"])
                return c[b] + "Transform";
          }
          return "transform";
        })();
    a.options = {
      speed: -2,
      verticalSpeed: null,
      horizontalSpeed: null,
      breakpoints: [576, 768, 1201],
      center: !1,
      wrapper: null,
      relativeToWrapper: !1,
      round: !0,
      vertical: !0,
      horizontal: !1,
      verticalScrollAxis: "y",
      horizontalScrollAxis: "x",
      callback: function () {},
    };
    u &&
      Object.keys(u).forEach(function (d) {
        a.options[d] = u[d];
      });
    u && u.breakpoints && C();
    g || (g = ".rellax");
    k = "string" === typeof g ? document.querySelectorAll(g) : [g];
    if (0 < k.length) {
      a.elems = k;
      if (a.options.wrapper && !a.options.wrapper.nodeType)
        if ((k = document.querySelector(a.options.wrapper)))
          a.options.wrapper = k;
        else {
          console.warn(
            "Rellax: The wrapper you're trying to use doesn't exist."
          );
          return;
        }
      var F,
        B = function () {
          for (var f = 0; f < d.length; f++)
            a.elems[f].style.cssText = d[f].style;
          d = [];
          v = window.innerHeight;
          n = window.innerWidth;
          f = a.options.breakpoints;
          F =
            n < f[0]
              ? "xs"
              : n >= f[0] && n < f[1]
              ? "sm"
              : n >= f[1] && n < f[2]
              ? "md"
              : "lg";
          H();
          for (f = 0; f < a.elems.length; f++) {
            var c = void 0,
              b = a.elems[f],
              e = b.getAttribute("data-rellax-percentage"),
              y = b.getAttribute("data-rellax-speed"),
              t = b.getAttribute("data-rellax-xs-speed"),
              g = b.getAttribute("data-rellax-mobile-speed"),
              h = b.getAttribute("data-rellax-tablet-speed"),
              k = b.getAttribute("data-rellax-desktop-speed"),
              l = b.getAttribute("data-rellax-vertical-speed"),
              m = b.getAttribute("data-rellax-horizontal-speed"),
              p = b.getAttribute("data-rellax-vertical-scroll-axis"),
              q = b.getAttribute("data-rellax-horizontal-scroll-axis"),
              u = b.getAttribute("data-rellax-zindex") || 0,
              x = b.getAttribute("data-rellax-min"),
              A = b.getAttribute("data-rellax-max"),
              C = b.getAttribute("data-rellax-min-x"),
              D = b.getAttribute("data-rellax-max-x"),
              E = b.getAttribute("data-rellax-min-y"),
              L = b.getAttribute("data-rellax-max-y"),
              r = !0;
            t || g || h || k ? (c = { xs: t, sm: g, md: h, lg: k }) : (r = !1);
            t = a.options.wrapper
              ? a.options.wrapper.scrollTop
              : window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop;
            a.options.relativeToWrapper &&
              (t =
                (window.pageYOffset ||
                  document.documentElement.scrollTop ||
                  document.body.scrollTop) - a.options.wrapper.offsetTop);
            var z = a.options.vertical ? (e || a.options.center ? t : 0) : 0,
              I = a.options.horizontal
                ? e || a.options.center
                  ? a.options.wrapper
                    ? a.options.wrapper.scrollLeft
                    : window.pageXOffset ||
                      document.documentElement.scrollLeft ||
                      document.body.scrollLeft
                  : 0
                : 0;
            t = z + b.getBoundingClientRect().top;
            g = b.clientHeight || b.offsetHeight || b.scrollHeight;
            h = I + b.getBoundingClientRect().left;
            k = b.clientWidth || b.offsetWidth || b.scrollWidth;
            z = e ? e : (z - t + v) / (g + v);
            e = e ? e : (I - h + n) / (k + n);
            a.options.center && (z = e = 0.5);
            c = r && null !== c[F] ? Number(c[F]) : y ? y : a.options.speed;
            l = l ? l : a.options.verticalSpeed;
            m = m ? m : a.options.horizontalSpeed;
            p = p ? p : a.options.verticalScrollAxis;
            q = q ? q : a.options.horizontalScrollAxis;
            y = J(e, z, c, l, m);
            b = b.style.cssText;
            r = "";
            if ((e = /transform\s*:/i.exec(b)))
              (r = b.slice(e.index)),
                (r = (e = r.indexOf(";"))
                  ? " " + r.slice(11, e).replace(/\s/g, "")
                  : " " + r.slice(11).replace(/\s/g, ""));
            d.push({
              baseX: y.x,
              baseY: y.y,
              top: t,
              left: h,
              height: g,
              width: k,
              speed: c,
              verticalSpeed: l,
              horizontalSpeed: m,
              verticalScrollAxis: p,
              horizontalScrollAxis: q,
              style: b,
              transform: r,
              zindex: u,
              min: x,
              max: A,
              minX: C,
              maxX: D,
              minY: E,
              maxY: L,
            });
          }
          K();
          w && (window.addEventListener("resize", B), (w = !1), G());
        },
        H = function () {
          var d = l,
            c = m;
          l = a.options.wrapper
            ? a.options.wrapper.scrollTop
            : (
                document.documentElement ||
                document.body.parentNode ||
                document.body
              ).scrollTop || window.pageYOffset;
          m = a.options.wrapper
            ? a.options.wrapper.scrollLeft
            : (
                document.documentElement ||
                document.body.parentNode ||
                document.body
              ).scrollLeft || window.pageXOffset;
          a.options.relativeToWrapper &&
            (l =
              ((
                document.documentElement ||
                document.body.parentNode ||
                document.body
              ).scrollTop || window.pageYOffset) - a.options.wrapper.offsetTop);
          return (d != l && a.options.vertical) ||
            (c != m && a.options.horizontal)
            ? !0
            : !1;
        },
        J = function (d, c, b, e, g) {
          var f = {};
          d = 100 * (g ? g : b) * (1 - d);
          c = 100 * (e ? e : b) * (1 - c);
          f.x = a.options.round ? Math.round(d) : Math.round(100 * d) / 100;
          f.y = a.options.round ? Math.round(c) : Math.round(100 * c) / 100;
          return f;
        },
        h = function () {
          window.removeEventListener("resize", h);
          window.removeEventListener("orientationchange", h);
          (a.options.wrapper ? a.options.wrapper : window).removeEventListener(
            "scroll",
            h
          );
          (a.options.wrapper
            ? a.options.wrapper
            : document
          ).removeEventListener("touchmove", h);
          p = A(G);
        },
        G = function () {
          H() && !1 === w
            ? (K(), (p = A(G)))
            : ((p = null),
              window.addEventListener("resize", h),
              window.addEventListener("orientationchange", h),
              (a.options.wrapper ? a.options.wrapper : window).addEventListener(
                "scroll",
                h,
                x ? { passive: !0 } : !1
              ),
              (a.options.wrapper
                ? a.options.wrapper
                : document
              ).addEventListener("touchmove", h, x ? { passive: !0 } : !1));
        },
        K = function () {
          for (var f, c = 0; c < a.elems.length; c++) {
            var b = d[c].verticalScrollAxis.toLowerCase(),
              e = d[c].horizontalScrollAxis.toLowerCase();
            f = -1 != b.indexOf("x") ? l : 0;
            b = -1 != b.indexOf("y") ? l : 0;
            var g = -1 != e.indexOf("x") ? m : 0;
            e = -1 != e.indexOf("y") ? m : 0;
            f = J(
              (f + g - d[c].left + n) / (d[c].width + n),
              (b + e - d[c].top + v) / (d[c].height + v),
              d[c].speed,
              d[c].verticalSpeed,
              d[c].horizontalSpeed
            );
            e = f.y - d[c].baseY;
            b = f.x - d[c].baseX;
            null !== d[c].min &&
              (a.options.vertical &&
                !a.options.horizontal &&
                (e = e <= d[c].min ? d[c].min : e),
              a.options.horizontal &&
                !a.options.vertical &&
                (b = b <= d[c].min ? d[c].min : b));
            null != d[c].minY && (e = e <= d[c].minY ? d[c].minY : e);
            null != d[c].minX && (b = b <= d[c].minX ? d[c].minX : b);
            null !== d[c].max &&
              (a.options.vertical &&
                !a.options.horizontal &&
                (e = e >= d[c].max ? d[c].max : e),
              a.options.horizontal &&
                !a.options.vertical &&
                (b = b >= d[c].max ? d[c].max : b));
            null != d[c].maxY && (e = e >= d[c].maxY ? d[c].maxY : e);
            null != d[c].maxX && (b = b >= d[c].maxX ? d[c].maxX : b);
            a.elems[c].style[E] =
              "translate3d(" +
              (a.options.horizontal ? b : "0") +
              "px," +
              (a.options.vertical ? e : "0") +
              "px," +
              d[c].zindex +
              "px) " +
              d[c].transform;
          }
          a.options.callback(f);
        };
      a.destroy = function () {
        for (var f = 0; f < a.elems.length; f++)
          a.elems[f].style.cssText = d[f].style;
        w || (window.removeEventListener("resize", B), (w = !0));
        D(p);
        p = null;
      };
      B();
      a.refresh = B;
      return a;
    }
    console.warn("Rellax: The elements you're trying to select don't exist.");
  };
  return q;
});
