/*! For license information please see app.min.js.LICENSE.txt */
(() => {
  var t = {
      97: function (t) {
        t.exports = (function () {
          "use strict";
          var t = function () {
              return (t =
                Object.assign ||
                function (t) {
                  for (var e, i = 1, s = arguments.length; i < s; i++)
                    for (var o in (e = arguments[i]))
                      Object.prototype.hasOwnProperty.call(e, o) &&
                        (t[o] = e[o]);
                  return t;
                }).apply(this, arguments);
            },
            e = {
              thumbnail: !0,
              animateThumb: !0,
              currentPagerPosition: "middle",
              alignThumbnails: "middle",
              thumbWidth: 100,
              thumbHeight: "80px",
              thumbMargin: 5,
              appendThumbnailsTo: ".lg-components",
              toggleThumb: !1,
              enableThumbDrag: !0,
              enableThumbSwipe: !0,
              thumbnailSwipeThreshold: 10,
              loadYouTubeThumbnail: !0,
              youTubeThumbSize: 1,
              thumbnailPluginStrings: { toggleThumbnails: "Toggle thumbnails" },
            },
            i = "lgContainerResize",
            s = "lgUpdateSlides",
            o = "lgBeforeOpen",
            n = "lgBeforeSlide";
          return (function () {
            function r(t, e) {
              return (
                (this.thumbOuterWidth = 0),
                (this.thumbTotalWidth = 0),
                (this.translateX = 0),
                (this.thumbClickable = !1),
                (this.core = t),
                (this.$LG = e),
                this
              );
            }
            return (
              (r.prototype.init = function () {
                (this.settings = t(t({}, e), this.core.settings)),
                  (this.thumbOuterWidth = 0),
                  (this.thumbTotalWidth =
                    this.core.galleryItems.length *
                    (this.settings.thumbWidth + this.settings.thumbMargin)),
                  (this.translateX = 0),
                  this.setAnimateThumbStyles(),
                  this.core.settings.allowMediaOverlap ||
                    (this.settings.toggleThumb = !1),
                  this.settings.thumbnail &&
                    (this.build(),
                    this.settings.animateThumb
                      ? (this.settings.enableThumbDrag &&
                          this.enableThumbDrag(),
                        this.settings.enableThumbSwipe &&
                          this.enableThumbSwipe(),
                        (this.thumbClickable = !1))
                      : (this.thumbClickable = !0),
                    this.toggleThumbBar(),
                    this.thumbKeyPress());
              }),
              (r.prototype.build = function () {
                var t = this;
                this.setThumbMarkup(),
                  this.manageActiveClassOnSlideChange(),
                  this.$lgThumb
                    .first()
                    .on("click.lg touchend.lg", function (e) {
                      var i = t.$LG(e.target);
                      i.hasAttribute("data-lg-item-id") &&
                        setTimeout(function () {
                          if (t.thumbClickable && !t.core.lgBusy) {
                            var e = parseInt(i.attr("data-lg-item-id"));
                            t.core.slide(e, !1, !0, !1);
                          }
                        }, 50);
                    }),
                  this.core.LGel.on(n + ".thumb", function (e) {
                    var i = e.detail.index;
                    t.animateThumb(i);
                  }),
                  this.core.LGel.on(o + ".thumb", function () {
                    t.thumbOuterWidth = t.core.outer.get().offsetWidth;
                  }),
                  this.core.LGel.on(s + ".thumb", function () {
                    t.rebuildThumbnails();
                  }),
                  this.core.LGel.on(i + ".thumb", function () {
                    t.core.lgOpened &&
                      setTimeout(function () {
                        (t.thumbOuterWidth = t.core.outer.get().offsetWidth),
                          t.animateThumb(t.core.index),
                          (t.thumbOuterWidth = t.core.outer.get().offsetWidth);
                      }, 50);
                  });
              }),
              (r.prototype.setThumbMarkup = function () {
                var t = "lg-thumb-outer ";
                this.settings.alignThumbnails &&
                  (t += "lg-thumb-align-" + this.settings.alignThumbnails);
                var e =
                  '<div class="' +
                  t +
                  '">\n        <div class="lg-thumb lg-group">\n        </div>\n        </div>';
                this.core.outer.addClass("lg-has-thumb"),
                  ".lg-components" === this.settings.appendThumbnailsTo
                    ? this.core.$lgComponents.append(e)
                    : this.core.outer.append(e),
                  (this.$thumbOuter = this.core.outer
                    .find(".lg-thumb-outer")
                    .first()),
                  (this.$lgThumb = this.core.outer.find(".lg-thumb").first()),
                  this.settings.animateThumb &&
                    this.core.outer
                      .find(".lg-thumb")
                      .css(
                        "transition-duration",
                        this.core.settings.speed + "ms"
                      )
                      .css("width", this.thumbTotalWidth + "px")
                      .css("position", "relative"),
                  this.setThumbItemHtml(this.core.galleryItems);
              }),
              (r.prototype.enableThumbDrag = function () {
                var t = this,
                  e = {
                    cords: { startX: 0, endX: 0 },
                    isMoved: !1,
                    newTranslateX: 0,
                    startTime: new Date(),
                    endTime: new Date(),
                    touchMoveTime: 0,
                  },
                  i = !1;
                this.$thumbOuter.addClass("lg-grab"),
                  this.core.outer
                    .find(".lg-thumb")
                    .first()
                    .on("mousedown.lg.thumb", function (s) {
                      t.thumbTotalWidth > t.thumbOuterWidth &&
                        (s.preventDefault(),
                        (e.cords.startX = s.pageX),
                        (e.startTime = new Date()),
                        (t.thumbClickable = !1),
                        (i = !0),
                        (t.core.outer.get().scrollLeft += 1),
                        (t.core.outer.get().scrollLeft -= 1),
                        t.$thumbOuter
                          .removeClass("lg-grab")
                          .addClass("lg-grabbing"));
                    }),
                  this.$LG(window).on(
                    "mousemove.lg.thumb.global" + this.core.lgId,
                    function (s) {
                      t.core.lgOpened &&
                        i &&
                        ((e.cords.endX = s.pageX), (e = t.onThumbTouchMove(e)));
                    }
                  ),
                  this.$LG(window).on(
                    "mouseup.lg.thumb.global" + this.core.lgId,
                    function () {
                      t.core.lgOpened &&
                        (e.isMoved
                          ? (e = t.onThumbTouchEnd(e))
                          : (t.thumbClickable = !0),
                        i &&
                          ((i = !1),
                          t.$thumbOuter
                            .removeClass("lg-grabbing")
                            .addClass("lg-grab")));
                    }
                  );
              }),
              (r.prototype.enableThumbSwipe = function () {
                var t = this,
                  e = {
                    cords: { startX: 0, endX: 0 },
                    isMoved: !1,
                    newTranslateX: 0,
                    startTime: new Date(),
                    endTime: new Date(),
                    touchMoveTime: 0,
                  };
                this.$lgThumb.on("touchstart.lg", function (i) {
                  t.thumbTotalWidth > t.thumbOuterWidth &&
                    (i.preventDefault(),
                    (e.cords.startX = i.targetTouches[0].pageX),
                    (t.thumbClickable = !1),
                    (e.startTime = new Date()));
                }),
                  this.$lgThumb.on("touchmove.lg", function (i) {
                    t.thumbTotalWidth > t.thumbOuterWidth &&
                      (i.preventDefault(),
                      (e.cords.endX = i.targetTouches[0].pageX),
                      (e = t.onThumbTouchMove(e)));
                  }),
                  this.$lgThumb.on("touchend.lg", function () {
                    e.isMoved
                      ? (e = t.onThumbTouchEnd(e))
                      : (t.thumbClickable = !0);
                  });
              }),
              (r.prototype.rebuildThumbnails = function () {
                var t = this;
                this.$thumbOuter.addClass("lg-rebuilding-thumbnails"),
                  setTimeout(function () {
                    (t.thumbTotalWidth =
                      t.core.galleryItems.length *
                      (t.settings.thumbWidth + t.settings.thumbMargin)),
                      t.$lgThumb.css("width", t.thumbTotalWidth + "px"),
                      t.$lgThumb.empty(),
                      t.setThumbItemHtml(t.core.galleryItems),
                      t.animateThumb(t.core.index);
                  }, 50),
                  setTimeout(function () {
                    t.$thumbOuter.removeClass("lg-rebuilding-thumbnails");
                  }, 200);
              }),
              (r.prototype.setTranslate = function (t) {
                this.$lgThumb.css(
                  "transform",
                  "translate3d(-" + t + "px, 0px, 0px)"
                );
              }),
              (r.prototype.getPossibleTransformX = function (t) {
                return (
                  t > this.thumbTotalWidth - this.thumbOuterWidth &&
                    (t = this.thumbTotalWidth - this.thumbOuterWidth),
                  t < 0 && (t = 0),
                  t
                );
              }),
              (r.prototype.animateThumb = function (t) {
                if (
                  (this.$lgThumb.css(
                    "transition-duration",
                    this.core.settings.speed + "ms"
                  ),
                  this.settings.animateThumb)
                ) {
                  var e = 0;
                  switch (this.settings.currentPagerPosition) {
                    case "left":
                      e = 0;
                      break;
                    case "middle":
                      e =
                        this.thumbOuterWidth / 2 - this.settings.thumbWidth / 2;
                      break;
                    case "right":
                      e = this.thumbOuterWidth - this.settings.thumbWidth;
                  }
                  (this.translateX =
                    (this.settings.thumbWidth + this.settings.thumbMargin) * t -
                    1 -
                    e),
                    this.translateX >
                      this.thumbTotalWidth - this.thumbOuterWidth &&
                      (this.translateX =
                        this.thumbTotalWidth - this.thumbOuterWidth),
                    this.translateX < 0 && (this.translateX = 0),
                    this.setTranslate(this.translateX);
                }
              }),
              (r.prototype.onThumbTouchMove = function (t) {
                return (
                  (t.newTranslateX = this.translateX),
                  (t.isMoved = !0),
                  (t.touchMoveTime = new Date().valueOf()),
                  (t.newTranslateX -= t.cords.endX - t.cords.startX),
                  (t.newTranslateX = this.getPossibleTransformX(
                    t.newTranslateX
                  )),
                  this.setTranslate(t.newTranslateX),
                  this.$thumbOuter.addClass("lg-dragging"),
                  t
                );
              }),
              (r.prototype.onThumbTouchEnd = function (t) {
                (t.isMoved = !1),
                  (t.endTime = new Date()),
                  this.$thumbOuter.removeClass("lg-dragging");
                var e = t.endTime.valueOf() - t.startTime.valueOf(),
                  i = t.cords.endX - t.cords.startX,
                  s = Math.abs(i) / e;
                return (
                  s > 0.15 && t.endTime.valueOf() - t.touchMoveTime < 30
                    ? ((s += 1) > 2 && (s += 1),
                      (s += s * (Math.abs(i) / this.thumbOuterWidth)),
                      this.$lgThumb.css(
                        "transition-duration",
                        Math.min(s - 1, 2) + "settings"
                      ),
                      (i *= s),
                      (this.translateX = this.getPossibleTransformX(
                        this.translateX - i
                      )),
                      this.setTranslate(this.translateX))
                    : (this.translateX = t.newTranslateX),
                  Math.abs(t.cords.endX - t.cords.startX) <
                    this.settings.thumbnailSwipeThreshold &&
                    (this.thumbClickable = !0),
                  t
                );
              }),
              (r.prototype.getThumbHtml = function (t, e) {
                var i,
                  s = this.core.galleryItems[e].__slideVideoInfo || {};
                return (
                  (i =
                    s.youtube && this.settings.loadYouTubeThumbnail
                      ? "//img.youtube.com/vi/" +
                        s.youtube[1] +
                        "/" +
                        this.settings.youTubeThumbSize +
                        ".jpg"
                      : t),
                  '<div data-lg-item-id="' +
                    e +
                    '" class="lg-thumb-item ' +
                    (e === this.core.index ? " active" : "") +
                    '" \n        style="width:' +
                    this.settings.thumbWidth +
                    "px; height: " +
                    this.settings.thumbHeight +
                    ";\n            margin-right: " +
                    this.settings.thumbMargin +
                    'px;">\n            <img data-lg-item-id="' +
                    e +
                    '" src="' +
                    i +
                    '" />\n        </div>'
                );
              }),
              (r.prototype.getThumbItemHtml = function (t) {
                for (var e = "", i = 0; i < t.length; i++)
                  e += this.getThumbHtml(t[i].thumb, i);
                return e;
              }),
              (r.prototype.setThumbItemHtml = function (t) {
                var e = this.getThumbItemHtml(t);
                this.$lgThumb.html(e);
              }),
              (r.prototype.setAnimateThumbStyles = function () {
                this.settings.animateThumb &&
                  this.core.outer.addClass("lg-animate-thumb");
              }),
              (r.prototype.manageActiveClassOnSlideChange = function () {
                var t = this;
                this.core.LGel.on(n + ".thumb", function (e) {
                  var i = t.core.outer.find(".lg-thumb-item"),
                    s = e.detail.index;
                  i.removeClass("active"), i.eq(s).addClass("active");
                });
              }),
              (r.prototype.toggleThumbBar = function () {
                var t = this;
                this.settings.toggleThumb &&
                  (this.core.outer.addClass("lg-can-toggle"),
                  this.core.$toolbar.append(
                    '<button type="button" aria-label="' +
                      this.settings.thumbnailPluginStrings.toggleThumbnails +
                      '" class="lg-toggle-thumb lg-icon"></button>'
                  ),
                  this.core.outer
                    .find(".lg-toggle-thumb")
                    .first()
                    .on("click.lg", function () {
                      t.core.outer.toggleClass("lg-components-open");
                    }));
              }),
              (r.prototype.thumbKeyPress = function () {
                var t = this;
                this.$LG(window).on(
                  "keydown.lg.thumb.global" + this.core.lgId,
                  function (e) {
                    t.core.lgOpened &&
                      t.settings.toggleThumb &&
                      (38 === e.keyCode
                        ? (e.preventDefault(),
                          t.core.outer.addClass("lg-components-open"))
                        : 40 === e.keyCode &&
                          (e.preventDefault(),
                          t.core.outer.removeClass("lg-components-open")));
                  }
                );
              }),
              (r.prototype.destroy = function () {
                this.settings.thumbnail &&
                  (this.$LG(window).off(".lg.thumb.global" + this.core.lgId),
                  this.core.LGel.off(".lg.thumb"),
                  this.core.LGel.off(".thumb"),
                  this.$thumbOuter.remove(),
                  this.core.outer.removeClass("lg-has-thumb"));
              }),
              r
            );
          })();
        })();
      },
      86: function (t) {
        t.exports = (function () {
          "use strict";
          var t = function () {
              return (t =
                Object.assign ||
                function (t) {
                  for (var e, i = 1, s = arguments.length; i < s; i++)
                    for (var o in (e = arguments[i]))
                      Object.prototype.hasOwnProperty.call(e, o) &&
                        (t[o] = e[o]);
                  return t;
                }).apply(this, arguments);
            },
            e = {
              scale: 1,
              zoom: !0,
              actualSize: !0,
              showZoomInOutIcons: !1,
              actualSizeIcons: { zoomIn: "lg-zoom-in", zoomOut: "lg-zoom-out" },
              enableZoomAfter: 300,
              zoomPluginStrings: {
                zoomIn: "Zoom in",
                zoomOut: "Zoom out",
                viewActualSize: "View actual size",
              },
            },
            i = "lgContainerResize",
            s = "lgBeforeOpen",
            o = "lgAfterOpen",
            n = "lgSlideItemLoad",
            r = "lgAfterSlide",
            a = "lgRotateLeft",
            l = "lgRotateRight",
            h = "lgFlipHorizontal",
            c = "lgFlipVertical";
          return (function () {
            function d(i, s) {
              return (
                (this.core = i),
                (this.$LG = s),
                (this.settings = t(t({}, e), this.core.settings)),
                this
              );
            }
            return (
              (d.prototype.buildTemplates = function () {
                var t = this.settings.showZoomInOutIcons
                  ? '<button id="' +
                    this.core.getIdName("lg-zoom-in") +
                    '" type="button" aria-label="' +
                    this.settings.zoomPluginStrings.zoomIn +
                    '" class="lg-zoom-in lg-icon"></button><button id="' +
                    this.core.getIdName("lg-zoom-out") +
                    '" type="button" aria-label="' +
                    this.settings.zoomPluginStrings.zoomIn +
                    '" class="lg-zoom-out lg-icon"></button>'
                  : "";
                this.settings.actualSize &&
                  (t +=
                    '<button id="' +
                    this.core.getIdName("lg-actual-size") +
                    '" type="button" aria-label="' +
                    this.settings.zoomPluginStrings.viewActualSize +
                    '" class="' +
                    this.settings.actualSizeIcons.zoomIn +
                    ' lg-icon"></button>'),
                  this.core.outer.addClass("lg-use-transition-for-zoom"),
                  this.core.$toolbar.first().append(t);
              }),
              (d.prototype.enableZoom = function (t) {
                var e = this,
                  i = this.settings.enableZoomAfter + t.detail.delay;
                this.$LG("body").first().hasClass("lg-from-hash") &&
                t.detail.delay
                  ? (i = 0)
                  : this.$LG("body").first().removeClass("lg-from-hash"),
                  (this.zoomableTimeout = setTimeout(function () {
                    e.isImageSlide() &&
                      (e.core
                        .getSlideItem(t.detail.index)
                        .addClass("lg-zoomable"),
                      t.detail.index === e.core.index && e.setZoomEssentials());
                  }, i + 30));
              }),
              (d.prototype.enableZoomOnSlideItemLoad = function () {
                this.core.LGel.on(n + ".zoom", this.enableZoom.bind(this));
              }),
              (d.prototype.getModifier = function (t, e, i) {
                var s = t;
                t = Math.abs(t);
                var o = this.getCurrentTransform(i);
                if (!o) return 1;
                var n = 1;
                if ("X" === e) {
                  var r = Math.sign(parseFloat(o[0]));
                  0 === t || 180 === t
                    ? (n = 1)
                    : 90 === t &&
                      (n =
                        (-90 === s && 1 === r) || (90 === s && -1 === r)
                          ? -1
                          : 1),
                    (n *= r);
                } else {
                  var a = Math.sign(parseFloat(o[3]));
                  if (0 === t || 180 === t) n = 1;
                  else if (90 === t) {
                    var l = parseFloat(o[1]),
                      h = parseFloat(o[2]);
                    n = Math.sign(l * h * s * a);
                  }
                  n *= a;
                }
                return n;
              }),
              (d.prototype.getImageSize = function (t, e, i) {
                return (
                  90 === Math.abs(e) && (i = "x" === i ? "y" : "x"),
                  t[{ y: "offsetHeight", x: "offsetWidth" }[i]]
                );
              }),
              (d.prototype.getDragCords = function (t, e) {
                return 90 === e
                  ? { x: t.pageY, y: t.pageX }
                  : { x: t.pageX, y: t.pageY };
              }),
              (d.prototype.getSwipeCords = function (t, e) {
                var i = t.targetTouches[0].pageX,
                  s = t.targetTouches[0].pageY;
                return 90 === e ? { x: s, y: i } : { x: i, y: s };
              }),
              (d.prototype.getDragAllowedAxises = function (t, e) {
                e = e || this.scale || 1;
                var i = this.imageYSize * e > this.containerRect.height,
                  s = this.imageXSize * e > this.containerRect.width;
                return 90 === t
                  ? { allowX: i, allowY: s }
                  : { allowX: s, allowY: i };
              }),
              (d.prototype.getCurrentTransform = function (t) {
                if (t) {
                  var e = window.getComputedStyle(t, null),
                    i =
                      e.getPropertyValue("-webkit-transform") ||
                      e.getPropertyValue("-moz-transform") ||
                      e.getPropertyValue("-ms-transform") ||
                      e.getPropertyValue("-o-transform") ||
                      e.getPropertyValue("transform") ||
                      "none";
                  return "none" !== i
                    ? i.split("(")[1].split(")")[0].split(",")
                    : void 0;
                }
              }),
              (d.prototype.getCurrentRotation = function (t) {
                if (!t) return 0;
                var e = this.getCurrentTransform(t);
                return e
                  ? Math.round(
                      Math.atan2(parseFloat(e[1]), parseFloat(e[0])) *
                        (180 / Math.PI)
                    )
                  : 0;
              }),
              (d.prototype.setZoomEssentials = function () {
                var t = this.core
                    .getSlideItem(this.core.index)
                    .find(".lg-image")
                    .first(),
                  e = this.core
                    .getSlideItem(this.core.index)
                    .find(".lg-img-rotate")
                    .first()
                    .get();
                (this.rotateValue = this.getCurrentRotation(e)),
                  (this.imageYSize = this.getImageSize(
                    t.get(),
                    this.rotateValue,
                    "y"
                  )),
                  (this.imageXSize = this.getImageSize(
                    t.get(),
                    this.rotateValue,
                    "x"
                  )),
                  (this.containerRect = this.core.outer
                    .get()
                    .getBoundingClientRect()),
                  (this.modifierX = this.getModifier(this.rotateValue, "X", e)),
                  (this.modifierY = this.getModifier(this.rotateValue, "Y", e));
              }),
              (d.prototype.zoomImage = function (t) {
                var e,
                  i,
                  s =
                    (this.containerRect.width - this.imageXSize) / 2 +
                    this.containerRect.left,
                  o = this.core.mediaContainerPosition,
                  n = o.top,
                  r = o.bottom,
                  a = Math.abs(n - r) / 2,
                  l =
                    (this.containerRect.height -
                      this.imageYSize -
                      a * this.modifierX) /
                      2 +
                    this.scrollTop +
                    this.containerRect.top;
                1 === t && (this.positionChanged = !1);
                var h = this.getDragAllowedAxises(
                    Math.abs(this.rotateValue),
                    t
                  ),
                  c = h.allowY,
                  d = h.allowX;
                this.positionChanged &&
                  ((e = this.left / (this.scale - 1)),
                  (i = this.top / (this.scale - 1)),
                  (this.pageX = Math.abs(e) + s),
                  (this.pageY = Math.abs(i) + l),
                  (this.positionChanged = !1));
                var g = this.getPossibleSwipeDragCords(this.rotateValue, t),
                  u = (t - 1) * (s - this.pageX),
                  m = (t - 1) * (l - this.pageY);
                d
                  ? this.isBeyondPossibleLeft(u, g.minX)
                    ? (u = g.minX)
                    : this.isBeyondPossibleRight(u, g.maxX) && (u = g.maxX)
                  : t > 1 &&
                    (u < g.minX ? (u = g.minX) : u > g.maxX && (u = g.maxX)),
                  c
                    ? this.isBeyondPossibleTop(m, g.minY)
                      ? (m = g.minY)
                      : this.isBeyondPossibleBottom(m, g.maxY) && (m = g.maxY)
                    : t > 1 &&
                      (m < g.minY ? (m = g.minY) : m > g.maxY && (m = g.maxY)),
                  this.setZoomStyles({ x: u, y: m, scale: t });
              }),
              (d.prototype.setZoomStyles = function (t) {
                var e = this.core
                    .getSlideItem(this.core.index)
                    .find(".lg-image")
                    .first(),
                  i = this.core.outer.find(".lg-current .lg-dummy-img").first(),
                  s = e.parent();
                (this.scale = t.scale),
                  e.css(
                    "transform",
                    "scale3d(" + t.scale + ", " + t.scale + ", 1)"
                  ),
                  i.css(
                    "transform",
                    "scale3d(" + t.scale + ", " + t.scale + ", 1)"
                  );
                var o = "translate3d(" + t.x + "px, " + t.y + "px, 0)";
                s.css("transform", o), (this.left = t.x), (this.top = t.y);
              }),
              (d.prototype.setActualSize = function (t, e) {
                var i = this;
                if (
                  this.isImageSlide() &&
                  !this.core.outer.hasClass("lg-first-slide-loading")
                ) {
                  var s = this.getCurrentImageActualSizeScale();
                  this.core.outer.hasClass("lg-zoomed")
                    ? (this.scale = 1)
                    : (this.scale = this.getScale(s)),
                    this.setPageCords(e),
                    this.beginZoom(this.scale),
                    this.zoomImage(this.scale),
                    setTimeout(function () {
                      i.core.outer
                        .removeClass("lg-grabbing")
                        .addClass("lg-grab");
                    }, 10);
                }
              }),
              (d.prototype.getNaturalWidth = function (t) {
                var e = this.core.getSlideItem(t).find(".lg-image").first(),
                  i = this.core.galleryItems[t].width;
                return i ? parseFloat(i) : e.get().naturalWidth;
              }),
              (d.prototype.getActualSizeScale = function (t, e) {
                return t > e ? t / e || 2 : 1;
              }),
              (d.prototype.getCurrentImageActualSizeScale = function () {
                var t = this.core
                    .getSlideItem(this.core.index)
                    .find(".lg-image")
                    .first()
                    .get().offsetWidth,
                  e = this.getNaturalWidth(this.core.index) || t;
                return this.getActualSizeScale(e, t);
              }),
              (d.prototype.getPageCords = function (t) {
                var e = {};
                if (t)
                  (e.x = t.pageX || t.targetTouches[0].pageX),
                    (e.y = t.pageY || t.targetTouches[0].pageY);
                else {
                  var i = this.core.outer.get().getBoundingClientRect();
                  (e.x = i.width / 2 + i.left),
                    (e.y = i.height / 2 + this.scrollTop + i.top);
                }
                return e;
              }),
              (d.prototype.setPageCords = function (t) {
                var e = this.getPageCords(t);
                (this.pageX = e.x), (this.pageY = e.y);
              }),
              (d.prototype.beginZoom = function (t) {
                return (
                  this.core.outer.removeClass(
                    "lg-zoom-drag-transition lg-zoom-dragging"
                  ),
                  t > 1
                    ? (this.core.outer.addClass("lg-zoomed"),
                      this.core
                        .getElementById("lg-actual-size")
                        .removeClass(this.settings.actualSizeIcons.zoomIn)
                        .addClass(this.settings.actualSizeIcons.zoomOut))
                    : this.resetZoom(),
                  t > 1
                );
              }),
              (d.prototype.getScale = function (t) {
                var e = this.getCurrentImageActualSizeScale();
                return t < 1 ? (t = 1) : t > e && (t = e), t;
              }),
              (d.prototype.init = function () {
                var t = this;
                if (this.settings.zoom) {
                  this.buildTemplates(), this.enableZoomOnSlideItemLoad();
                  var e = null;
                  this.core.outer.on("dblclick.lg", function (e) {
                    t.$LG(e.target).hasClass("lg-image") &&
                      t.setActualSize(t.core.index, e);
                  }),
                    this.core.outer.on("touchstart.lg", function (i) {
                      var s = t.$LG(i.target);
                      1 === i.targetTouches.length &&
                        s.hasClass("lg-image") &&
                        (e
                          ? (clearTimeout(e),
                            (e = null),
                            i.preventDefault(),
                            t.setActualSize(t.core.index, i))
                          : (e = setTimeout(function () {
                              e = null;
                            }, 300)));
                    }),
                    this.core.LGel.on(
                      i +
                        ".zoom " +
                        l +
                        ".zoom " +
                        a +
                        ".zoom " +
                        h +
                        ".zoom " +
                        c +
                        ".zoom",
                      function () {
                        t.core.lgOpened &&
                          t.isImageSlide() &&
                          (t.setPageCords(),
                          t.setZoomEssentials(),
                          t.zoomImage(t.scale));
                      }
                    ),
                    this.$LG(window).on(
                      "scroll.lg.zoom.global" + this.core.lgId,
                      function () {
                        t.core.lgOpened &&
                          (t.scrollTop = t.$LG(window).scrollTop());
                      }
                    ),
                    this.core
                      .getElementById("lg-zoom-out")
                      .on("click.lg", function () {
                        t.core.outer.find(".lg-current .lg-image").get() &&
                          ((t.scale -= t.settings.scale),
                          (t.scale = t.getScale(t.scale)),
                          t.beginZoom(t.scale),
                          t.zoomImage(t.scale));
                      }),
                    this.core
                      .getElementById("lg-zoom-in")
                      .on("click.lg", function () {
                        t.zoomIn();
                      }),
                    this.core
                      .getElementById("lg-actual-size")
                      .on("click.lg", function () {
                        t.setActualSize(t.core.index);
                      }),
                    this.core.LGel.on(s + ".zoom", function () {
                      t.core.outer.find(".lg-item").removeClass("lg-zoomable");
                    }),
                    this.core.LGel.on(o + ".zoom", function () {
                      (t.scrollTop = t.$LG(window).scrollTop()),
                        (t.pageX = t.core.outer.width() / 2),
                        (t.pageY = t.core.outer.height() / 2 + t.scrollTop),
                        (t.scale = 1);
                    }),
                    this.core.LGel.on(r + ".zoom", function (e) {
                      var i = e.detail.prevIndex;
                      (t.scale = 1),
                        (t.positionChanged = !1),
                        t.resetZoom(i),
                        t.isImageSlide() && t.setZoomEssentials();
                    }),
                    this.zoomDrag(),
                    this.pinchZoom(),
                    this.zoomSwipe(),
                    (this.zoomableTimeout = !1),
                    (this.positionChanged = !1);
                }
              }),
              (d.prototype.zoomIn = function (t) {
                this.isImageSlide() &&
                  (t ? (this.scale = t) : (this.scale += this.settings.scale),
                  (this.scale = this.getScale(this.scale)),
                  this.beginZoom(this.scale),
                  this.zoomImage(this.scale));
              }),
              (d.prototype.resetZoom = function (t) {
                this.core.outer.removeClass(
                  "lg-zoomed lg-zoom-drag-transition"
                );
                var e = this.core.getElementById("lg-actual-size"),
                  i = this.core.getSlideItem(
                    void 0 !== t ? t : this.core.index
                  );
                e
                  .removeClass(this.settings.actualSizeIcons.zoomOut)
                  .addClass(this.settings.actualSizeIcons.zoomIn),
                  i.find(".lg-img-wrap").first().removeAttr("style"),
                  i.find(".lg-image").first().removeAttr("style"),
                  (this.scale = 1),
                  (this.left = 0),
                  (this.top = 0),
                  this.setPageCords();
              }),
              (d.prototype.getTouchDistance = function (t) {
                return Math.sqrt(
                  (t.targetTouches[0].pageX - t.targetTouches[1].pageX) *
                    (t.targetTouches[0].pageX - t.targetTouches[1].pageX) +
                    (t.targetTouches[0].pageY - t.targetTouches[1].pageY) *
                      (t.targetTouches[0].pageY - t.targetTouches[1].pageY)
                );
              }),
              (d.prototype.pinchZoom = function () {
                var t = this,
                  e = 0,
                  i = !1,
                  s = 1,
                  o = this.core.getSlideItem(this.core.index);
                this.core.$inner.on("touchstart.lg", function (i) {
                  (o = t.core.getSlideItem(t.core.index)),
                    t.isImageSlide() &&
                      (2 !== i.targetTouches.length ||
                        t.core.outer.hasClass("lg-first-slide-loading") ||
                        (!t.$LG(i.target).hasClass("lg-item") &&
                          !o.get().contains(i.target)) ||
                        ((s = t.scale || 1),
                        t.core.outer.removeClass(
                          "lg-zoom-drag-transition lg-zoom-dragging"
                        ),
                        (t.core.touchAction = "pinch"),
                        (e = t.getTouchDistance(i))));
                }),
                  this.core.$inner.on("touchmove.lg", function (n) {
                    if (
                      2 === n.targetTouches.length &&
                      "pinch" === t.core.touchAction &&
                      (t.$LG(n.target).hasClass("lg-item") ||
                        o.get().contains(n.target))
                    ) {
                      n.preventDefault();
                      var r = t.getTouchDistance(n),
                        a = e - r;
                      !i && Math.abs(a) > 5 && (i = !0),
                        i &&
                          ((t.scale = Math.max(1, s + 0.008 * -a)),
                          t.zoomImage(t.scale));
                    }
                  }),
                  this.core.$inner.on("touchend.lg", function (s) {
                    "pinch" === t.core.touchAction &&
                      (t.$LG(s.target).hasClass("lg-item") ||
                        o.get().contains(s.target)) &&
                      ((i = !1),
                      (e = 0),
                      t.scale <= 1
                        ? t.resetZoom()
                        : ((t.scale = t.getScale(t.scale)),
                          t.zoomImage(t.scale),
                          t.core.outer.addClass("lg-zoomed")),
                      (t.core.touchAction = void 0));
                  });
              }),
              (d.prototype.touchendZoom = function (t, e, i, s, o, n) {
                var r = e.x - t.x,
                  a = e.y - t.y,
                  l = Math.abs(r) / o + 1,
                  h = Math.abs(a) / o + 1;
                l > 2 && (l += 1), h > 2 && (h += 1), (r *= l), (a *= h);
                var c = this.core
                    .getSlideItem(this.core.index)
                    .find(".lg-img-wrap")
                    .first(),
                  d = {};
                (d.x = this.left + r * this.modifierX),
                  (d.y = this.top + a * this.modifierY);
                var g = this.getPossibleSwipeDragCords(n);
                (Math.abs(r) > 15 || Math.abs(a) > 15) &&
                  (s &&
                    (this.isBeyondPossibleTop(d.y, g.minY)
                      ? (d.y = g.minY)
                      : this.isBeyondPossibleBottom(d.y, g.maxY) &&
                        (d.y = g.maxY)),
                  i &&
                    (this.isBeyondPossibleLeft(d.x, g.minX)
                      ? (d.x = g.minX)
                      : this.isBeyondPossibleRight(d.x, g.maxX) &&
                        (d.x = g.maxX)),
                  s ? (this.top = d.y) : (d.y = this.top),
                  i ? (this.left = d.x) : (d.x = this.left),
                  this.setZoomSwipeStyles(c, d),
                  (this.positionChanged = !0));
              }),
              (d.prototype.getZoomSwipeCords = function (t, e, i, s, o) {
                var n = {};
                if (s) {
                  if (
                    ((n.y = this.top + (e.y - t.y) * this.modifierY),
                    this.isBeyondPossibleTop(n.y, o.minY))
                  ) {
                    var r = o.minY - n.y;
                    n.y = o.minY - r / 6;
                  } else if (this.isBeyondPossibleBottom(n.y, o.maxY)) {
                    var a = n.y - o.maxY;
                    n.y = o.maxY + a / 6;
                  }
                } else n.y = this.top;
                if (i) {
                  if (
                    ((n.x = this.left + (e.x - t.x) * this.modifierX),
                    this.isBeyondPossibleLeft(n.x, o.minX))
                  ) {
                    var l = o.minX - n.x;
                    n.x = o.minX - l / 6;
                  } else if (this.isBeyondPossibleRight(n.x, o.maxX)) {
                    var h = n.x - o.maxX;
                    n.x = o.maxX + h / 6;
                  }
                } else n.x = this.left;
                return n;
              }),
              (d.prototype.isBeyondPossibleLeft = function (t, e) {
                return t >= e;
              }),
              (d.prototype.isBeyondPossibleRight = function (t, e) {
                return t <= e;
              }),
              (d.prototype.isBeyondPossibleTop = function (t, e) {
                return t >= e;
              }),
              (d.prototype.isBeyondPossibleBottom = function (t, e) {
                return t <= e;
              }),
              (d.prototype.isImageSlide = function () {
                var t = this.core.galleryItems[this.core.index];
                return "image" === this.core.getSlideType(t);
              }),
              (d.prototype.getPossibleSwipeDragCords = function (t, e) {
                var i = e || this.scale || 1,
                  s = Math.abs(i),
                  o = this.core.mediaContainerPosition,
                  n = o.top,
                  r = o.bottom,
                  a = Math.abs(n - r) / 2,
                  l =
                    (this.imageYSize - this.containerRect.height) / 2 +
                    a * this.modifierX,
                  h = this.containerRect.height - this.imageYSize * s + l,
                  c = (this.imageXSize - this.containerRect.width) / 2,
                  d = this.containerRect.width - this.imageXSize * s + c,
                  g = { minY: l, maxY: h, minX: c, maxX: d };
                return (
                  90 === Math.abs(t) &&
                    (g = { minY: c, maxY: d, minX: l, maxX: h }),
                  g
                );
              }),
              (d.prototype.setZoomSwipeStyles = function (t, e) {
                t.css(
                  "transform",
                  "translate3d(" + e.x + "px, " + e.y + "px, 0)"
                );
              }),
              (d.prototype.zoomSwipe = function () {
                var t,
                  e,
                  i = this,
                  s = {},
                  o = {},
                  n = !1,
                  r = !1,
                  a = !1,
                  l = new Date(),
                  h = (new Date(), this.core.getSlideItem(this.core.index));
                this.core.$inner.on("touchstart.lg", function (o) {
                  if (
                    i.isImageSlide() &&
                    ((h = i.core.getSlideItem(i.core.index)),
                    (i.$LG(o.target).hasClass("lg-item") ||
                      h.get().contains(o.target)) &&
                      1 === o.targetTouches.length &&
                      i.core.outer.hasClass("lg-zoomed"))
                  ) {
                    o.preventDefault(),
                      (l = new Date()),
                      (i.core.touchAction = "zoomSwipe"),
                      (e = i.core
                        .getSlideItem(i.core.index)
                        .find(".lg-img-wrap")
                        .first());
                    var n = i.getDragAllowedAxises(Math.abs(i.rotateValue));
                    (a = n.allowY),
                      ((r = n.allowX) || a) &&
                        (s = i.getSwipeCords(o, Math.abs(i.rotateValue))),
                      (t = i.getPossibleSwipeDragCords(i.rotateValue)),
                      i.core.outer.addClass(
                        "lg-zoom-dragging lg-zoom-drag-transition"
                      );
                  }
                }),
                  this.core.$inner.on("touchmove.lg", function (l) {
                    if (
                      1 === l.targetTouches.length &&
                      "zoomSwipe" === i.core.touchAction &&
                      (i.$LG(l.target).hasClass("lg-item") ||
                        h.get().contains(l.target))
                    ) {
                      l.preventDefault(),
                        (i.core.touchAction = "zoomSwipe"),
                        (o = i.getSwipeCords(l, Math.abs(i.rotateValue)));
                      var c = i.getZoomSwipeCords(s, o, r, a, t);
                      (Math.abs(o.x - s.x) > 15 || Math.abs(o.y - s.y) > 15) &&
                        ((n = !0), i.setZoomSwipeStyles(e, c));
                    }
                  }),
                  this.core.$inner.on("touchend.lg", function (t) {
                    if (
                      "zoomSwipe" === i.core.touchAction &&
                      (i.$LG(t.target).hasClass("lg-item") ||
                        h.get().contains(t.target))
                    ) {
                      if (
                        ((i.core.touchAction = void 0),
                        i.core.outer.removeClass("lg-zoom-dragging"),
                        !n)
                      )
                        return;
                      n = !1;
                      var e = new Date().valueOf() - l.valueOf();
                      i.touchendZoom(s, o, r, a, e, i.rotateValue);
                    }
                  });
              }),
              (d.prototype.zoomDrag = function () {
                var t,
                  e,
                  i,
                  s,
                  o = this,
                  n = {},
                  r = {},
                  a = !1,
                  l = !1,
                  h = !1,
                  c = !1;
                this.core.outer.on("mousedown.lg.zoom", function (e) {
                  if (o.isImageSlide()) {
                    var r = o.core.getSlideItem(o.core.index);
                    if (
                      o.$LG(e.target).hasClass("lg-item") ||
                      r.get().contains(e.target)
                    ) {
                      (t = new Date()),
                        (s = o.core
                          .getSlideItem(o.core.index)
                          .find(".lg-img-wrap")
                          .first());
                      var l = o.getDragAllowedAxises(Math.abs(o.rotateValue));
                      (c = l.allowY),
                        (h = l.allowX),
                        o.core.outer.hasClass("lg-zoomed") &&
                          o.$LG(e.target).hasClass("lg-object") &&
                          (h || c) &&
                          (e.preventDefault(),
                          (n = o.getDragCords(e, Math.abs(o.rotateValue))),
                          (i = o.getPossibleSwipeDragCords(o.rotateValue)),
                          (a = !0),
                          (o.core.outer.get().scrollLeft += 1),
                          (o.core.outer.get().scrollLeft -= 1),
                          o.core.outer
                            .removeClass("lg-grab")
                            .addClass(
                              "lg-grabbing lg-zoom-drag-transition lg-zoom-dragging"
                            ));
                    }
                  }
                }),
                  this.$LG(window).on(
                    "mousemove.lg.zoom.global" + this.core.lgId,
                    function (t) {
                      if (a) {
                        (l = !0),
                          (r = o.getDragCords(t, Math.abs(o.rotateValue)));
                        var e = o.getZoomSwipeCords(n, r, h, c, i);
                        o.setZoomSwipeStyles(s, e);
                      }
                    }
                  ),
                  this.$LG(window).on(
                    "mouseup.lg.zoom.global" + this.core.lgId,
                    function (i) {
                      if (a) {
                        if (
                          ((e = new Date()),
                          (a = !1),
                          o.core.outer.removeClass("lg-zoom-dragging"),
                          l && (n.x !== r.x || n.y !== r.y))
                        ) {
                          r = o.getDragCords(i, Math.abs(o.rotateValue));
                          var s = e.valueOf() - t.valueOf();
                          o.touchendZoom(n, r, h, c, s, o.rotateValue);
                        }
                        l = !1;
                      }
                      o.core.outer
                        .removeClass("lg-grabbing")
                        .addClass("lg-grab");
                    }
                  );
              }),
              (d.prototype.closeGallery = function () {
                this.resetZoom();
              }),
              (d.prototype.destroy = function () {
                this.$LG(window).off(".lg.zoom.global" + this.core.lgId),
                  this.core.LGel.off(".lg.zoom"),
                  this.core.LGel.off(".zoom"),
                  clearTimeout(this.zoomableTimeout),
                  (this.zoomableTimeout = !1);
              }),
              d
            );
          })();
        })();
      },
      732: function (t) {
        t.exports = (function () {
          "use strict";
          function t() {
            return (
              (t =
                Object.assign ||
                function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var i = arguments[e];
                    for (var s in i)
                      Object.prototype.hasOwnProperty.call(i, s) &&
                        (t[s] = i[s]);
                  }
                  return t;
                }),
              t.apply(this, arguments)
            );
          }
          var e = "undefined" != typeof window,
            i =
              (e && !("onscroll" in window)) ||
              ("undefined" != typeof navigator &&
                /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
            s = e && "IntersectionObserver" in window,
            o = e && "classList" in document.createElement("p"),
            n = e && window.devicePixelRatio > 1,
            r = {
              elements_selector: ".lazy",
              container: i || e ? document : null,
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
            a = function (e) {
              return t({}, r, e);
            },
            l = function (t, e) {
              var i,
                s = "LazyLoad::Initialized",
                o = new t(e);
              try {
                i = new CustomEvent(s, { detail: { instance: o } });
              } catch (t) {
                (i = document.createEvent("CustomEvent")).initCustomEvent(
                  s,
                  !1,
                  !1,
                  { instance: o }
                );
              }
              window.dispatchEvent(i);
            },
            h = "src",
            c = "srcset",
            d = "sizes",
            g = "poster",
            u = "llOriginalAttrs",
            m = "data",
            p = "loading",
            f = "loaded",
            v = "applied",
            b = "error",
            y = "native",
            C = "data-",
            w = "ll-status",
            I = function (t, e) {
              return t.getAttribute(C + e);
            },
            T = function (t) {
              return I(t, w);
            },
            S = function (t, e) {
              return (function (t, e, i) {
                var s = "data-ll-status";
                null !== i ? t.setAttribute(s, i) : t.removeAttribute(s);
              })(t, 0, e);
            },
            x = function (t) {
              return S(t, null);
            },
            E = function (t) {
              return null === T(t);
            },
            z = function (t) {
              return T(t) === y;
            },
            L = [p, f, v, b],
            _ = function (t, e, i, s) {
              t &&
                (void 0 === s ? (void 0 === i ? t(e) : t(e, i)) : t(e, i, s));
            },
            A = function (t, e) {
              o
                ? t.classList.add(e)
                : (t.className += (t.className ? " " : "") + e);
            },
            O = function (t, e) {
              o
                ? t.classList.remove(e)
                : (t.className = t.className
                    .replace(new RegExp("(^|\\s+)" + e + "(\\s+|$)"), " ")
                    .replace(/^\s+/, "")
                    .replace(/\s+$/, ""));
            },
            M = function (t) {
              return t.llTempImage;
            },
            D = function (t, e) {
              if (e) {
                var i = e._observer;
                i && i.unobserve(t);
              }
            },
            k = function (t, e) {
              t && (t.loadingCount += e);
            },
            P = function (t, e) {
              t && (t.toLoadCount = e);
            },
            X = function (t) {
              for (var e, i = [], s = 0; (e = t.children[s]); s += 1)
                "SOURCE" === e.tagName && i.push(e);
              return i;
            },
            G = function (t, e) {
              var i = t.parentNode;
              i && "PICTURE" === i.tagName && X(i).forEach(e);
            },
            B = function (t, e) {
              X(t).forEach(e);
            },
            $ = [h],
            Y = [h, g],
            W = [h, c, d],
            F = [m],
            H = function (t) {
              return !!t[u];
            },
            V = function (t) {
              return t[u];
            },
            N = function (t) {
              return delete t[u];
            },
            R = function (t, e) {
              if (!H(t)) {
                var i = {};
                e.forEach(function (e) {
                  i[e] = t.getAttribute(e);
                }),
                  (t[u] = i);
              }
            },
            j = function (t, e) {
              if (H(t)) {
                var i = V(t);
                e.forEach(function (e) {
                  !(function (t, e, i) {
                    i ? t.setAttribute(e, i) : t.removeAttribute(e);
                  })(t, e, i[e]);
                });
              }
            },
            Z = function (t, e, i) {
              A(t, e.class_loading),
                S(t, p),
                i && (k(i, 1), _(e.callback_loading, t, i));
            },
            q = function (t, e, i) {
              i && t.setAttribute(e, i);
            },
            U = function (t, e) {
              q(t, d, I(t, e.data_sizes)),
                q(t, c, I(t, e.data_srcset)),
                q(t, h, I(t, e.data_src));
            },
            K = {
              IMG: function (t, e) {
                G(t, function (t) {
                  R(t, W), U(t, e);
                }),
                  R(t, W),
                  U(t, e);
              },
              IFRAME: function (t, e) {
                R(t, $), q(t, h, I(t, e.data_src));
              },
              VIDEO: function (t, e) {
                B(t, function (t) {
                  R(t, $), q(t, h, I(t, e.data_src));
                }),
                  R(t, Y),
                  q(t, g, I(t, e.data_poster)),
                  q(t, h, I(t, e.data_src)),
                  t.load();
              },
              OBJECT: function (t, e) {
                R(t, F), q(t, m, I(t, e.data_src));
              },
            },
            Q = ["IMG", "IFRAME", "VIDEO", "OBJECT"],
            J = function (t, e) {
              !e ||
                (function (t) {
                  return t.loadingCount > 0;
                })(e) ||
                (function (t) {
                  return t.toLoadCount > 0;
                })(e) ||
                _(t.callback_finish, e);
            },
            tt = function (t, e, i) {
              t.addEventListener(e, i), (t.llEvLisnrs[e] = i);
            },
            et = function (t, e, i) {
              t.removeEventListener(e, i);
            },
            it = function (t) {
              return !!t.llEvLisnrs;
            },
            st = function (t) {
              if (it(t)) {
                var e = t.llEvLisnrs;
                for (var i in e) {
                  var s = e[i];
                  et(t, i, s);
                }
                delete t.llEvLisnrs;
              }
            },
            ot = function (t, e, i) {
              !(function (t) {
                delete t.llTempImage;
              })(t),
                k(i, -1),
                (function (t) {
                  t && (t.toLoadCount -= 1);
                })(i),
                O(t, e.class_loading),
                e.unobserve_completed && D(t, i);
            },
            nt = function (t, e, i) {
              var s = M(t) || t;
              it(s) ||
                (function (t, e, i) {
                  it(t) || (t.llEvLisnrs = {});
                  var s = "VIDEO" === t.tagName ? "loadeddata" : "load";
                  tt(t, s, e), tt(t, "error", i);
                })(
                  s,
                  function (o) {
                    !(function (t, e, i, s) {
                      var o = z(e);
                      ot(e, i, s),
                        A(e, i.class_loaded),
                        S(e, f),
                        _(i.callback_loaded, e, s),
                        o || J(i, s);
                    })(0, t, e, i),
                      st(s);
                  },
                  function (o) {
                    !(function (t, e, i, s) {
                      var o = z(e);
                      ot(e, i, s),
                        A(e, i.class_error),
                        S(e, b),
                        _(i.callback_error, e, s),
                        o || J(i, s);
                    })(0, t, e, i),
                      st(s);
                  }
                );
            },
            rt = function (t, e, i) {
              !(function (t) {
                t.llTempImage = document.createElement("IMG");
              })(t),
                nt(t, e, i),
                (function (t) {
                  H(t) || (t[u] = { backgroundImage: t.style.backgroundImage });
                })(t),
                (function (t, e, i) {
                  var s = I(t, e.data_bg),
                    o = I(t, e.data_bg_hidpi),
                    r = n && o ? o : s;
                  r &&
                    ((t.style.backgroundImage = 'url("'.concat(r, '")')),
                    M(t).setAttribute(h, r),
                    Z(t, e, i));
                })(t, e, i),
                (function (t, e, i) {
                  var s = I(t, e.data_bg_multi),
                    o = I(t, e.data_bg_multi_hidpi),
                    r = n && o ? o : s;
                  r &&
                    ((t.style.backgroundImage = r),
                    (function (t, e, i) {
                      A(t, e.class_applied),
                        S(t, v),
                        i &&
                          (e.unobserve_completed && D(t, e),
                          _(e.callback_applied, t, i));
                    })(t, e, i));
                })(t, e, i);
            },
            at = function (t, e, i) {
              !(function (t) {
                return Q.indexOf(t.tagName) > -1;
              })(t)
                ? rt(t, e, i)
                : (function (t, e, i) {
                    nt(t, e, i),
                      (function (t, e, i) {
                        var s = K[t.tagName];
                        s && (s(t, e), Z(t, e, i));
                      })(t, e, i);
                  })(t, e, i);
            },
            lt = function (t) {
              t.removeAttribute(h), t.removeAttribute(c), t.removeAttribute(d);
            },
            ht = function (t) {
              G(t, function (t) {
                j(t, W);
              }),
                j(t, W);
            },
            ct = {
              IMG: ht,
              IFRAME: function (t) {
                j(t, $);
              },
              VIDEO: function (t) {
                B(t, function (t) {
                  j(t, $);
                }),
                  j(t, Y),
                  t.load();
              },
              OBJECT: function (t) {
                j(t, F);
              },
            },
            dt = function (t, e) {
              (function (t) {
                var e = ct[t.tagName];
                e
                  ? e(t)
                  : (function (t) {
                      if (H(t)) {
                        var e = V(t);
                        t.style.backgroundImage = e.backgroundImage;
                      }
                    })(t);
              })(t),
                (function (t, e) {
                  E(t) ||
                    z(t) ||
                    (O(t, e.class_entered),
                    O(t, e.class_exited),
                    O(t, e.class_applied),
                    O(t, e.class_loading),
                    O(t, e.class_loaded),
                    O(t, e.class_error));
                })(t, e),
                x(t),
                N(t);
            },
            gt = ["IMG", "IFRAME", "VIDEO"],
            ut = function (t) {
              return t.use_native && "loading" in HTMLImageElement.prototype;
            },
            mt = function (t, e, i) {
              t.forEach(function (t) {
                return (function (t) {
                  return t.isIntersecting || t.intersectionRatio > 0;
                })(t)
                  ? (function (t, e, i, s) {
                      var o = (function (t) {
                        return L.indexOf(T(t)) >= 0;
                      })(t);
                      S(t, "entered"),
                        A(t, i.class_entered),
                        O(t, i.class_exited),
                        (function (t, e, i) {
                          e.unobserve_entered && D(t, i);
                        })(t, i, s),
                        _(i.callback_enter, t, e, s),
                        o || at(t, i, s);
                    })(t.target, t, e, i)
                  : (function (t, e, i, s) {
                      E(t) ||
                        (A(t, i.class_exited),
                        (function (t, e, i, s) {
                          i.cancel_on_exit &&
                            (function (t) {
                              return T(t) === p;
                            })(t) &&
                            "IMG" === t.tagName &&
                            (st(t),
                            (function (t) {
                              G(t, function (t) {
                                lt(t);
                              }),
                                lt(t);
                            })(t),
                            ht(t),
                            O(t, i.class_loading),
                            k(s, -1),
                            x(t),
                            _(i.callback_cancel, t, e, s));
                        })(t, e, i, s),
                        _(i.callback_exit, t, e, s));
                    })(t.target, t, e, i);
              });
            },
            pt = function (t) {
              return Array.prototype.slice.call(t);
            },
            ft = function (t) {
              return t.container.querySelectorAll(t.elements_selector);
            },
            vt = function (t) {
              return (function (t) {
                return T(t) === b;
              })(t);
            },
            bt = function (t, e) {
              return (function (t) {
                return pt(t).filter(E);
              })(t || ft(e));
            },
            yt = function (t, i) {
              var o = a(t);
              (this._settings = o),
                (this.loadingCount = 0),
                (function (t, e) {
                  s &&
                    !ut(t) &&
                    (e._observer = new IntersectionObserver(
                      function (i) {
                        mt(i, t, e);
                      },
                      (function (t) {
                        return {
                          root: t.container === document ? null : t.container,
                          rootMargin: t.thresholds || t.threshold + "px",
                        };
                      })(t)
                    ));
                })(o, this),
                (function (t, i) {
                  e &&
                    window.addEventListener("online", function () {
                      !(function (t, e) {
                        var i;
                        ((i = ft(t)), pt(i).filter(vt)).forEach(function (e) {
                          O(e, t.class_error), x(e);
                        }),
                          e.update();
                      })(t, i);
                    });
                })(o, this),
                this.update(i);
            };
          return (
            (yt.prototype = {
              update: function (t) {
                var e,
                  o,
                  n = this._settings,
                  r = bt(t, n);
                P(this, r.length),
                  !i && s
                    ? ut(n)
                      ? (function (t, e, i) {
                          t.forEach(function (t) {
                            -1 !== gt.indexOf(t.tagName) &&
                              (function (t, e, i) {
                                t.setAttribute("loading", "lazy"),
                                  nt(t, e, i),
                                  (function (t, e) {
                                    var i = K[t.tagName];
                                    i && i(t, e);
                                  })(t, e),
                                  S(t, y);
                              })(t, e, i);
                          }),
                            P(i, 0);
                        })(r, n, this)
                      : ((o = r),
                        (function (t) {
                          t.disconnect();
                        })((e = this._observer)),
                        (function (t, e) {
                          e.forEach(function (e) {
                            t.observe(e);
                          });
                        })(e, o))
                    : this.loadAll(r);
              },
              destroy: function () {
                this._observer && this._observer.disconnect(),
                  ft(this._settings).forEach(function (t) {
                    N(t);
                  }),
                  delete this._observer,
                  delete this._settings,
                  delete this.loadingCount,
                  delete this.toLoadCount;
              },
              loadAll: function (t) {
                var e = this,
                  i = this._settings;
                bt(t, i).forEach(function (t) {
                  D(t, e), at(t, i, e);
                });
              },
              restoreAll: function () {
                var t = this._settings;
                ft(t).forEach(function (e) {
                  dt(e, t);
                });
              },
            }),
            (yt.load = function (t, e) {
              var i = a(e);
              at(t, i);
            }),
            (yt.resetStatus = function (t) {
              x(t);
            }),
            e &&
              (function (t, e) {
                if (e)
                  if (e.length) for (var i, s = 0; (i = e[s]); s += 1) l(t, i);
                  else l(t, e);
              })(yt, window.lazyLoadOptions),
            yt
          );
        })();
      },
    },
    e = {};
  function i(s) {
    var o = e[s];
    if (void 0 !== o) return o.exports;
    var n = (e[s] = { exports: {} });
    return t[s].call(n.exports, n, n.exports, i), n.exports;
  }
  (() => {
    "use strict";
    const t = {};
    let e = !0,
      s = (t = 500) => {
        let i = document.querySelector("body");
        if (e) {
          let s = document.querySelectorAll("[data-lp]");
          setTimeout(() => {
            for (let t = 0; t < s.length; t++) {
              s[t].style.paddingRight = "0px";
            }
            (i.style.paddingRight = "0px"),
              document.documentElement.classList.remove("lock");
          }, t),
            (e = !1),
            setTimeout(function () {
              e = !0;
            }, t);
        }
      },
      o = (t = 500) => {
        let i = document.querySelector("body");
        if (e) {
          let s = document.querySelectorAll("[data-lp]");
          for (let t = 0; t < s.length; t++) {
            s[t].style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px";
          }
          (i.style.paddingRight =
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
    function n(t) {
      setTimeout(() => {
        window.FLS && console.log(t);
      }, 0);
    }
    let r = (t, e = !1, i = 500, o = 0) => {
      const r = document.querySelector(t);
      if (r) {
        let a = "",
          l = 0;
        e &&
          ((a = "header.header"), (l = document.querySelector(a).offsetHeight));
        let h = {
          speedAsDuration: !0,
          speed: i,
          header: a,
          offset: o,
          easing: "easeOutQuad",
        };
        if (
          (document.documentElement.classList.contains("menu-open") &&
            (s(), document.documentElement.classList.remove("menu-open")),
          "undefined" != typeof SmoothScroll)
        )
          new SmoothScroll().animateScroll(r, "", h);
        else {
          let t = r.getBoundingClientRect().top + scrollY;
          (t = l ? t - l : t),
            (t = o ? t - o : t),
            window.scrollTo({ top: t, behavior: "smooth" });
        }
        n(`[gotoBlock]: Юхуу...едем к ${t}`);
      } else n(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${t}`);
    };
    let a = {
      getErrors(t) {
        let e = 0,
          i = t.querySelectorAll("*[data-required]");
        return (
          i.length &&
            i.forEach((t) => {
              (null === t.offsetParent && "SELECT" !== t.tagName) ||
                t.disabled ||
                (e += this.validateInput(t));
            }),
          e
        );
      },
      validateInput(t) {
        let e = 0;
        return (
          "email" === t.dataset.required
            ? ((t.value = t.value.replace(" ", "")),
              this.emailTest(t) ? (this.addError(t), e++) : this.removeError(t))
            : ("checkbox" !== t.type || t.checked) && t.value
            ? this.removeError(t)
            : (this.addError(t), e++),
          e
        );
      },
      addError(t) {
        t.classList.add("_form-error"),
          t.parentElement.classList.add("_form-error");
        let e = t.parentElement.querySelector(".form__error");
        e && t.parentElement.removeChild(e),
          t.dataset.error &&
            t.parentElement.insertAdjacentHTML(
              "beforeend",
              `<div class="form__error">${t.dataset.error}</div>`
            );
      },
      removeError(t) {
        t.classList.remove("_form-error"),
          t.parentElement.classList.remove("_form-error"),
          t.parentElement.querySelector(".form__error") &&
            t.parentElement.removeChild(
              t.parentElement.querySelector(".form__error")
            );
      },
      formClean(e) {
        e.reset(),
          setTimeout(() => {
            let i = e.querySelectorAll("input,textarea");
            for (let t = 0; t < i.length; t++) {
              const e = i[t];
              e.parentElement.classList.remove("_form-focus"),
                e.classList.remove("_form-focus"),
                a.removeError(e);
            }
            let s = e.querySelectorAll(".checkbox__input");
            if (s.length > 0)
              for (let t = 0; t < s.length; t++) {
                s[t].checked = !1;
              }
            if (t.select) {
              let i = e.querySelectorAll(".select");
              if (i.length)
                for (let e = 0; e < i.length; e++) {
                  const s = i[e].querySelector("select");
                  t.select.selectBuild(s);
                }
            }
          }, 0);
      },
      emailTest: (t) =>
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(t.value),
    };
    new (i(732))({
      elements_selector: "[data-src],[data-srcset]",
      class_loaded: "_lazy-loaded",
      use_native: !0,
    });
    let l = !1;
    setTimeout(() => {
      if (l) {
        let t = new Event("windowScroll");
        window.addEventListener("scroll", function (e) {
          document.dispatchEvent(t);
        });
      }
    }, 0);
    var h = function () {
      return (
        (h =
          Object.assign ||
          function (t) {
            for (var e, i = 1, s = arguments.length; i < s; i++)
              for (var o in (e = arguments[i]))
                Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t;
          }),
        h.apply(this, arguments)
      );
    };
    var c = "lgAfterAppendSlide",
      d = "lgInit",
      g = "lgHasVideo",
      u = "lgContainerResize",
      m = "lgUpdateSlides",
      p = "lgAfterAppendSubHtml",
      f = "lgBeforeOpen",
      v = "lgAfterOpen",
      b = "lgSlideItemLoad",
      y = "lgBeforeSlide",
      C = "lgAfterSlide",
      w = "lgPosterClick",
      I = "lgDragStart",
      T = "lgDragMove",
      S = "lgDragEnd",
      x = "lgBeforeNextSlide",
      E = "lgBeforePrevSlide",
      z = "lgBeforeClose",
      L = "lgAfterClose",
      _ = {
        mode: "lg-slide",
        easing: "ease",
        speed: 400,
        licenseKey: "0000-0000-000-0000",
        height: "100%",
        width: "100%",
        addClass: "",
        startClass: "lg-start-zoom",
        backdropDuration: 300,
        container: "",
        startAnimationDuration: 400,
        zoomFromOrigin: !0,
        hideBarsDelay: 0,
        showBarsAfter: 1e4,
        slideDelay: 0,
        supportLegacyBrowser: !0,
        allowMediaOverlap: !1,
        videoMaxSize: "1280-720",
        loadYouTubePoster: !0,
        defaultCaptionHeight: 0,
        ariaLabelledby: "",
        ariaDescribedby: "",
        closable: !0,
        swipeToClose: !0,
        closeOnTap: !0,
        showCloseIcon: !0,
        showMaximizeIcon: !1,
        loop: !0,
        escKey: !0,
        keyPress: !0,
        controls: !0,
        slideEndAnimation: !0,
        hideControlOnEnd: !1,
        mousewheel: !1,
        getCaptionFromTitleOrAlt: !0,
        appendSubHtmlTo: ".lg-sub-html",
        subHtmlSelectorRelative: !1,
        preload: 2,
        numberOfSlideItemsInDom: 10,
        selector: "",
        selectWithin: "",
        nextHtml: "",
        prevHtml: "",
        index: 0,
        iframeWidth: "100%",
        iframeHeight: "100%",
        iframeMaxWidth: "100%",
        iframeMaxHeight: "100%",
        download: !0,
        counter: !0,
        appendCounterTo: ".lg-toolbar",
        swipeThreshold: 50,
        enableSwipe: !0,
        enableDrag: !0,
        dynamic: !1,
        dynamicEl: [],
        extraProps: [],
        exThumbImage: "",
        isMobile: void 0,
        mobileSettings: { controls: !1, showCloseIcon: !1, download: !1 },
        plugins: [],
        strings: {
          closeGallery: "Close gallery",
          toggleMaximize: "Toggle maximize",
          previousSlide: "Previous slide",
          nextSlide: "Next slide",
          download: "Download",
          playVideo: "Play video",
        },
      };
    var A = (function () {
      function t(t) {
        return (
          (this.cssVenderPrefixes = [
            "TransitionDuration",
            "TransitionTimingFunction",
            "Transform",
            "Transition",
          ]),
          (this.selector = this._getSelector(t)),
          (this.firstElement = this._getFirstEl()),
          this
        );
      }
      return (
        (t.generateUUID = function () {
          return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
            /[xy]/g,
            function (t) {
              var e = (16 * Math.random()) | 0;
              return ("x" == t ? e : (3 & e) | 8).toString(16);
            }
          );
        }),
        (t.prototype._getSelector = function (t, e) {
          return (
            void 0 === e && (e = document),
            "string" != typeof t
              ? t
              : ((e = e || document),
                "#" === t.substring(0, 1)
                  ? e.querySelector(t)
                  : e.querySelectorAll(t))
          );
        }),
        (t.prototype._each = function (t) {
          return this.selector
            ? (void 0 !== this.selector.length
                ? [].forEach.call(this.selector, t)
                : t(this.selector, 0),
              this)
            : this;
        }),
        (t.prototype._setCssVendorPrefix = function (t, e, i) {
          var s = e.replace(/-([a-z])/gi, function (t, e) {
            return e.toUpperCase();
          });
          -1 !== this.cssVenderPrefixes.indexOf(s)
            ? ((t.style[s.charAt(0).toLowerCase() + s.slice(1)] = i),
              (t.style["webkit" + s] = i),
              (t.style["moz" + s] = i),
              (t.style["ms" + s] = i),
              (t.style["o" + s] = i))
            : (t.style[s] = i);
        }),
        (t.prototype._getFirstEl = function () {
          return this.selector && void 0 !== this.selector.length
            ? this.selector[0]
            : this.selector;
        }),
        (t.prototype.isEventMatched = function (t, e) {
          var i = e.split(".");
          return t
            .split(".")
            .filter(function (t) {
              return t;
            })
            .every(function (t) {
              return -1 !== i.indexOf(t);
            });
        }),
        (t.prototype.attr = function (t, e) {
          return void 0 === e
            ? this.firstElement
              ? this.firstElement.getAttribute(t)
              : ""
            : (this._each(function (i) {
                i.setAttribute(t, e);
              }),
              this);
        }),
        (t.prototype.find = function (t) {
          return O(this._getSelector(t, this.selector));
        }),
        (t.prototype.first = function () {
          return this.selector && void 0 !== this.selector.length
            ? O(this.selector[0])
            : O(this.selector);
        }),
        (t.prototype.eq = function (t) {
          return O(this.selector[t]);
        }),
        (t.prototype.parent = function () {
          return O(this.selector.parentElement);
        }),
        (t.prototype.get = function () {
          return this._getFirstEl();
        }),
        (t.prototype.removeAttr = function (t) {
          var e = t.split(" ");
          return (
            this._each(function (t) {
              e.forEach(function (e) {
                return t.removeAttribute(e);
              });
            }),
            this
          );
        }),
        (t.prototype.wrap = function (t) {
          if (!this.firstElement) return this;
          var e = document.createElement("div");
          return (
            (e.className = t),
            this.firstElement.parentNode.insertBefore(e, this.firstElement),
            this.firstElement.parentNode.removeChild(this.firstElement),
            e.appendChild(this.firstElement),
            this
          );
        }),
        (t.prototype.addClass = function (t) {
          return (
            void 0 === t && (t = ""),
            this._each(function (e) {
              t.split(" ").forEach(function (t) {
                t && e.classList.add(t);
              });
            }),
            this
          );
        }),
        (t.prototype.removeClass = function (t) {
          return (
            this._each(function (e) {
              t.split(" ").forEach(function (t) {
                t && e.classList.remove(t);
              });
            }),
            this
          );
        }),
        (t.prototype.hasClass = function (t) {
          return !!this.firstElement && this.firstElement.classList.contains(t);
        }),
        (t.prototype.hasAttribute = function (t) {
          return !!this.firstElement && this.firstElement.hasAttribute(t);
        }),
        (t.prototype.toggleClass = function (t) {
          return this.firstElement
            ? (this.hasClass(t) ? this.removeClass(t) : this.addClass(t), this)
            : this;
        }),
        (t.prototype.css = function (t, e) {
          var i = this;
          return (
            this._each(function (s) {
              i._setCssVendorPrefix(s, t, e);
            }),
            this
          );
        }),
        (t.prototype.on = function (e, i) {
          var s = this;
          return this.selector
            ? (e.split(" ").forEach(function (e) {
                Array.isArray(t.eventListeners[e]) ||
                  (t.eventListeners[e] = []),
                  t.eventListeners[e].push(i),
                  s.selector.addEventListener(e.split(".")[0], i);
              }),
              this)
            : this;
        }),
        (t.prototype.once = function (t, e) {
          var i = this;
          return (
            this.on(t, function () {
              i.off(t), e(t);
            }),
            this
          );
        }),
        (t.prototype.off = function (e) {
          var i = this;
          return this.selector
            ? (Object.keys(t.eventListeners).forEach(function (s) {
                i.isEventMatched(e, s) &&
                  (t.eventListeners[s].forEach(function (t) {
                    i.selector.removeEventListener(s.split(".")[0], t);
                  }),
                  (t.eventListeners[s] = []));
              }),
              this)
            : this;
        }),
        (t.prototype.trigger = function (t, e) {
          if (!this.firstElement) return this;
          var i = new CustomEvent(t.split(".")[0], { detail: e || null });
          return this.firstElement.dispatchEvent(i), this;
        }),
        (t.prototype.load = function (t) {
          var e = this;
          return (
            fetch(t)
              .then(function (t) {
                return t.text();
              })
              .then(function (t) {
                e.selector.innerHTML = t;
              }),
            this
          );
        }),
        (t.prototype.html = function (t) {
          return void 0 === t
            ? this.firstElement
              ? this.firstElement.innerHTML
              : ""
            : (this._each(function (e) {
                e.innerHTML = t;
              }),
              this);
        }),
        (t.prototype.append = function (t) {
          return (
            this._each(function (e) {
              "string" == typeof t
                ? e.insertAdjacentHTML("beforeend", t)
                : e.appendChild(t);
            }),
            this
          );
        }),
        (t.prototype.prepend = function (t) {
          return (
            this._each(function (e) {
              e.insertAdjacentHTML("afterbegin", t);
            }),
            this
          );
        }),
        (t.prototype.remove = function () {
          return (
            this._each(function (t) {
              t.parentNode.removeChild(t);
            }),
            this
          );
        }),
        (t.prototype.empty = function () {
          return (
            this._each(function (t) {
              t.innerHTML = "";
            }),
            this
          );
        }),
        (t.prototype.scrollTop = function (t) {
          return void 0 !== t
            ? ((document.body.scrollTop = t),
              (document.documentElement.scrollTop = t),
              this)
            : window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop ||
                0;
        }),
        (t.prototype.scrollLeft = function (t) {
          return void 0 !== t
            ? ((document.body.scrollLeft = t),
              (document.documentElement.scrollLeft = t),
              this)
            : window.pageXOffset ||
                document.documentElement.scrollLeft ||
                document.body.scrollLeft ||
                0;
        }),
        (t.prototype.offset = function () {
          if (!this.firstElement) return { left: 0, top: 0 };
          var t = this.firstElement.getBoundingClientRect(),
            e = O("body").style().marginLeft;
          return {
            left: t.left - parseFloat(e) + this.scrollLeft(),
            top: t.top + this.scrollTop(),
          };
        }),
        (t.prototype.style = function () {
          return this.firstElement
            ? this.firstElement.currentStyle ||
                window.getComputedStyle(this.firstElement)
            : {};
        }),
        (t.prototype.width = function () {
          var t = this.style();
          return (
            this.firstElement.clientWidth -
            parseFloat(t.paddingLeft) -
            parseFloat(t.paddingRight)
          );
        }),
        (t.prototype.height = function () {
          var t = this.style();
          return (
            this.firstElement.clientHeight -
            parseFloat(t.paddingTop) -
            parseFloat(t.paddingBottom)
          );
        }),
        (t.eventListeners = {}),
        t
      );
    })();
    function O(t) {
      return (
        (function () {
          if ("function" == typeof window.CustomEvent) return !1;
          window.CustomEvent = function (t, e) {
            e = e || { bubbles: !1, cancelable: !1, detail: null };
            var i = document.createEvent("CustomEvent");
            return i.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), i;
          };
        })(),
        Element.prototype.matches ||
          (Element.prototype.matches =
            Element.prototype.msMatchesSelector ||
            Element.prototype.webkitMatchesSelector),
        new A(t)
      );
    }
    var M = [
      "src",
      "sources",
      "subHtml",
      "subHtmlUrl",
      "html",
      "video",
      "poster",
      "slideName",
      "responsive",
      "srcset",
      "sizes",
      "iframe",
      "downloadUrl",
      "download",
      "width",
      "facebookShareUrl",
      "tweetText",
      "iframeTitle",
      "twitterShareUrl",
      "pinterestShareUrl",
      "pinterestText",
      "fbHtml",
      "disqusIdentifier",
      "disqusUrl",
    ];
    function D(t) {
      return "href" === t
        ? "src"
        : (t = (t =
            (t = t.replace("data-", "")).charAt(0).toLowerCase() +
            t.slice(1)).replace(/-([a-z])/g, function (t) {
            return t[1].toUpperCase();
          }));
    }
    var k = function (t, e, i, s) {
        void 0 === i && (i = 0);
        var o = O(t).attr("data-lg-size") || s;
        if (o) {
          var n = o.split(",");
          if (n[1])
            for (var r = window.innerWidth, a = 0; a < n.length; a++) {
              var l = n[a];
              if (parseInt(l.split("-")[2], 10) > r) {
                o = l;
                break;
              }
              a === n.length - 1 && (o = l);
            }
          var h = o.split("-"),
            c = parseInt(h[0], 10),
            d = parseInt(h[1], 10),
            g = e.width(),
            u = e.height() - i,
            m = Math.min(g, c),
            p = Math.min(u, d),
            f = Math.min(m / c, p / d);
          return { width: c * f, height: d * f };
        }
      },
      P = function (t, e, i, s, o) {
        if (o) {
          var n = O(t).find("img").first();
          if (n.get()) {
            var r = e.get().getBoundingClientRect(),
              a = r.width,
              l = e.height() - (i + s),
              h = n.width(),
              c = n.height(),
              d = n.style(),
              g =
                (a - h) / 2 -
                n.offset().left +
                (parseFloat(d.paddingLeft) || 0) +
                (parseFloat(d.borderLeft) || 0) +
                O(window).scrollLeft() +
                r.left,
              u =
                (l - c) / 2 -
                n.offset().top +
                (parseFloat(d.paddingTop) || 0) +
                (parseFloat(d.borderTop) || 0) +
                O(window).scrollTop() +
                i;
            return (
              "translate3d(" +
              (g *= -1) +
              "px, " +
              (u *= -1) +
              "px, 0) scale3d(" +
              h / o.width +
              ", " +
              c / o.height +
              ", 1)"
            );
          }
        }
      },
      X = function (t, e, i, s, o, n) {
        return (
          '<div class="lg-video-cont lg-has-iframe" style="width:' +
          t +
          "; max-width:" +
          i +
          "; height: " +
          e +
          "; max-height:" +
          s +
          '">\n                    <iframe class="lg-object" frameborder="0" ' +
          (n ? 'title="' + n + '"' : "") +
          ' src="' +
          o +
          '"  allowfullscreen="true"></iframe>\n                </div>'
        );
      },
      G = function (t, e, i, s, o, n) {
        var r =
            "<img " +
            i +
            " " +
            (s ? 'srcset="' + s + '"' : "") +
            "  " +
            (o ? 'sizes="' + o + '"' : "") +
            ' class="lg-object lg-image" data-index="' +
            t +
            '" src="' +
            e +
            '" />',
          a = "";
        n &&
          (a = ("string" == typeof n ? JSON.parse(n) : n).map(function (t) {
            var e = "";
            return (
              Object.keys(t).forEach(function (i) {
                e += " " + i + '="' + t[i] + '"';
              }),
              "<source " + e + "></source>"
            );
          }));
        return "" + a + r;
      },
      B = function (t) {
        for (var e = [], i = [], s = "", o = 0; o < t.length; o++) {
          var n = t[o].split(" ");
          "" === n[0] && n.splice(0, 1), i.push(n[0]), e.push(n[1]);
        }
        for (var r = window.innerWidth, a = 0; a < e.length; a++)
          if (parseInt(e[a], 10) > r) {
            s = i[a];
            break;
          }
        return s;
      },
      $ = function (t) {
        return !!t && !!t.complete && 0 !== t.naturalWidth;
      },
      Y = function (t, e, i, s, o) {
        return (
          '<div class="lg-video-cont ' +
          (o && o.youtube
            ? "lg-has-youtube"
            : o && o.vimeo
            ? "lg-has-vimeo"
            : "lg-has-html5") +
          '" style="' +
          i +
          '">\n                <div class="lg-video-play-button">\n                <svg\n                    viewBox="0 0 20 20"\n                    preserveAspectRatio="xMidYMid"\n                    focusable="false"\n                    aria-labelledby="' +
          s +
          '"\n                    role="img"\n                    class="lg-video-play-icon"\n                >\n                    <title>' +
          s +
          '</title>\n                    <polygon class="lg-video-play-icon-inner" points="1,0 20,10 1,20"></polygon>\n                </svg>\n                <svg class="lg-video-play-icon-bg" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle></svg>\n                <svg class="lg-video-play-icon-circle" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle>\n                </svg>\n            </div>\n            ' +
          (e || "") +
          '\n            <img class="lg-object lg-video-poster" src="' +
          t +
          '" />\n        </div>'
        );
      },
      W = function (t, e, i, s) {
        var o = [],
          n = (function () {
            for (var t = 0, e = 0, i = arguments.length; e < i; e++)
              t += arguments[e].length;
            var s = Array(t),
              o = 0;
            for (e = 0; e < i; e++)
              for (var n = arguments[e], r = 0, a = n.length; r < a; r++, o++)
                s[o] = n[r];
            return s;
          })(M, e);
        return (
          [].forEach.call(t, function (t) {
            for (var e = {}, r = 0; r < t.attributes.length; r++) {
              var a = t.attributes[r];
              if (a.specified) {
                var l = D(a.name),
                  h = "";
                n.indexOf(l) > -1 && (h = l), h && (e[h] = a.value);
              }
            }
            var c = O(t),
              d = c.find("img").first().attr("alt"),
              g = c.attr("title"),
              u = s ? c.attr(s) : c.find("img").first().attr("src");
            (e.thumb = u),
              i && !e.subHtml && (e.subHtml = g || d || ""),
              (e.alt = d || g || ""),
              o.push(e);
          }),
          o
        );
      },
      F = function () {
        return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      },
      H = function (t, e, i) {
        if (!t)
          return e
            ? { html5: !0 }
            : void console.error(
                "lightGallery :- data-src is not provided on slide item " +
                  (i + 1) +
                  ". Please make sure the selector property is properly configured. More info - https://www.lightgalleryjs.com/demos/html-markup/"
              );
        var s = t.match(
            /\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)([\&|?][\S]*)*/i
          ),
          o = t.match(
            /\/\/(?:www\.)?(?:player\.)?vimeo.com\/(?:video\/)?([0-9a-z\-_]+)(.*)?/i
          ),
          n = t.match(
            /https?:\/\/(.+)?(wistia\.com|wi\.st)\/(medias|embed)\/([0-9a-z\-_]+)(.*)/
          );
        return s
          ? { youtube: s }
          : o
          ? { vimeo: o }
          : n
          ? { wistia: n }
          : void 0;
      },
      V = 0,
      N = (function () {
        function t(t, e) {
          if (
            ((this.lgOpened = !1),
            (this.index = 0),
            (this.plugins = []),
            (this.lGalleryOn = !1),
            (this.lgBusy = !1),
            (this.currentItemsInDom = []),
            (this.prevScrollTop = 0),
            (this.isDummyImageRemoved = !1),
            (this.dragOrSwipeEnabled = !1),
            (this.mediaContainerPosition = { top: 0, bottom: 0 }),
            !t)
          )
            return this;
          if (
            (V++,
            (this.lgId = V),
            (this.el = t),
            (this.LGel = O(t)),
            this.generateSettings(e),
            this.buildModules(),
            this.settings.dynamic &&
              void 0 !== this.settings.dynamicEl &&
              !Array.isArray(this.settings.dynamicEl))
          )
            throw "When using dynamic mode, you must also define dynamicEl as an Array.";
          return (
            (this.galleryItems = this.getItems()),
            this.normalizeSettings(),
            this.init(),
            this.validateLicense(),
            this
          );
        }
        return (
          (t.prototype.generateSettings = function (t) {
            if (
              ((this.settings = h(h({}, _), t)),
              this.settings.isMobile &&
              "function" == typeof this.settings.isMobile
                ? this.settings.isMobile()
                : F())
            ) {
              var e = h(
                h({}, this.settings.mobileSettings),
                this.settings.mobileSettings
              );
              this.settings = h(h({}, this.settings), e);
            }
          }),
          (t.prototype.normalizeSettings = function () {
            this.settings.slideEndAnimation &&
              (this.settings.hideControlOnEnd = !1),
              this.settings.closable || (this.settings.swipeToClose = !1),
              (this.zoomFromOrigin = this.settings.zoomFromOrigin),
              this.settings.dynamic && (this.zoomFromOrigin = !1),
              this.settings.container ||
                (this.settings.container = document.body),
              (this.settings.preload = Math.min(
                this.settings.preload,
                this.galleryItems.length
              ));
          }),
          (t.prototype.init = function () {
            var t = this;
            this.addSlideVideoInfo(this.galleryItems),
              this.buildStructure(),
              this.LGel.trigger(d, { instance: this }),
              this.settings.keyPress && this.keyPress(),
              setTimeout(function () {
                t.enableDrag(), t.enableSwipe(), t.triggerPosterClick();
              }, 50),
              this.arrow(),
              this.settings.mousewheel && this.mousewheel(),
              this.settings.dynamic || this.openGalleryOnItemClick();
          }),
          (t.prototype.openGalleryOnItemClick = function () {
            for (
              var t = this,
                e = function (e) {
                  var s = i.items[e],
                    o = O(s),
                    n = A.generateUUID();
                  o.attr("data-lg-id", n).on(
                    "click.lgcustom-item-" + n,
                    function (i) {
                      i.preventDefault();
                      var o = t.settings.index || e;
                      t.openGallery(o, s);
                    }
                  );
                },
                i = this,
                s = 0;
              s < this.items.length;
              s++
            )
              e(s);
          }),
          (t.prototype.buildModules = function () {
            var t = this;
            this.settings.plugins.forEach(function (e) {
              t.plugins.push(new e(t, O));
            });
          }),
          (t.prototype.validateLicense = function () {
            this.settings.licenseKey
              ? "0000-0000-000-0000" === this.settings.licenseKey &&
                console.warn(
                  "lightGallery: " +
                    this.settings.licenseKey +
                    " license key is not valid for production use"
                )
              : console.error("Please provide a valid license key");
          }),
          (t.prototype.getSlideItem = function (t) {
            return O(this.getSlideItemId(t));
          }),
          (t.prototype.getSlideItemId = function (t) {
            return "#lg-item-" + this.lgId + "-" + t;
          }),
          (t.prototype.getIdName = function (t) {
            return t + "-" + this.lgId;
          }),
          (t.prototype.getElementById = function (t) {
            return O("#" + this.getIdName(t));
          }),
          (t.prototype.manageSingleSlideClassName = function () {
            this.galleryItems.length < 2
              ? this.outer.addClass("lg-single-item")
              : this.outer.removeClass("lg-single-item");
          }),
          (t.prototype.buildStructure = function () {
            var t = this;
            if (!(this.$container && this.$container.get())) {
              var e = "",
                i = "";
              this.settings.controls &&
                (e =
                  '<button type="button" id="' +
                  this.getIdName("lg-prev") +
                  '" aria-label="' +
                  this.settings.strings.previousSlide +
                  '" class="lg-prev lg-icon"> ' +
                  this.settings.prevHtml +
                  ' </button>\n                <button type="button" id="' +
                  this.getIdName("lg-next") +
                  '" aria-label="' +
                  this.settings.strings.nextSlide +
                  '" class="lg-next lg-icon"> ' +
                  this.settings.nextHtml +
                  " </button>"),
                ".lg-item" !== this.settings.appendSubHtmlTo &&
                  (i =
                    '<div class="lg-sub-html" role="status" aria-live="polite"></div>');
              var s = "";
              this.settings.allowMediaOverlap && (s += "lg-media-overlap ");
              var o = this.settings.ariaLabelledby
                  ? 'aria-labelledby="' + this.settings.ariaLabelledby + '"'
                  : "",
                n = this.settings.ariaDescribedby
                  ? 'aria-describedby="' + this.settings.ariaDescribedby + '"'
                  : "",
                r =
                  "lg-container " +
                  this.settings.addClass +
                  " " +
                  (document.body !== this.settings.container
                    ? "lg-inline"
                    : ""),
                a =
                  this.settings.closable && this.settings.showCloseIcon
                    ? '<button type="button" aria-label="' +
                      this.settings.strings.closeGallery +
                      '" id="' +
                      this.getIdName("lg-close") +
                      '" class="lg-close lg-icon"></button>'
                    : "",
                l = this.settings.showMaximizeIcon
                  ? '<button type="button" aria-label="' +
                    this.settings.strings.toggleMaximize +
                    '" id="' +
                    this.getIdName("lg-maximize") +
                    '" class="lg-maximize lg-icon"></button>'
                  : "",
                h =
                  '\n        <div class="' +
                  r +
                  '" id="' +
                  this.getIdName("lg-container") +
                  '" tabindex="-1" aria-modal="true" ' +
                  o +
                  " " +
                  n +
                  ' role="dialog"\n        >\n            <div id="' +
                  this.getIdName("lg-backdrop") +
                  '" class="lg-backdrop"></div>\n\n            <div id="' +
                  this.getIdName("lg-outer") +
                  '" class="lg-outer lg-use-css3 lg-css3 lg-hide-items ' +
                  s +
                  ' ">\n\n              <div id="' +
                  this.getIdName("lg-content") +
                  '" class="lg-content">\n                <div id="' +
                  this.getIdName("lg-inner") +
                  '" class="lg-inner">\n                </div>\n                ' +
                  e +
                  '\n              </div>\n                <div id="' +
                  this.getIdName("lg-toolbar") +
                  '" class="lg-toolbar lg-group">\n                    ' +
                  l +
                  "\n                    " +
                  a +
                  "\n                    </div>\n                    " +
                  (".lg-outer" === this.settings.appendSubHtmlTo ? i : "") +
                  '\n                <div id="' +
                  this.getIdName("lg-components") +
                  '" class="lg-components">\n                    ' +
                  (".lg-sub-html" === this.settings.appendSubHtmlTo ? i : "") +
                  "\n                </div>\n            </div>\n        </div>\n        ";
              O(this.settings.container).append(h),
                document.body !== this.settings.container &&
                  O(this.settings.container).css("position", "relative"),
                (this.outer = this.getElementById("lg-outer")),
                (this.$lgComponents = this.getElementById("lg-components")),
                (this.$backdrop = this.getElementById("lg-backdrop")),
                (this.$container = this.getElementById("lg-container")),
                (this.$inner = this.getElementById("lg-inner")),
                (this.$content = this.getElementById("lg-content")),
                (this.$toolbar = this.getElementById("lg-toolbar")),
                this.$backdrop.css(
                  "transition-duration",
                  this.settings.backdropDuration + "ms"
                );
              var c = this.settings.mode + " ";
              this.manageSingleSlideClassName(),
                this.settings.enableDrag && (c += "lg-grab "),
                this.outer.addClass(c),
                this.$inner.css(
                  "transition-timing-function",
                  this.settings.easing
                ),
                this.$inner.css(
                  "transition-duration",
                  this.settings.speed + "ms"
                ),
                this.settings.download &&
                  this.$toolbar.append(
                    '<a id="' +
                      this.getIdName("lg-download") +
                      '" target="_blank" rel="noopener" aria-label="' +
                      this.settings.strings.download +
                      '" download class="lg-download lg-icon"></a>'
                  ),
                this.counter(),
                O(window).on(
                  "resize.lg.global" +
                    this.lgId +
                    " orientationchange.lg.global" +
                    this.lgId,
                  function () {
                    t.refreshOnResize();
                  }
                ),
                this.hideBars(),
                this.manageCloseGallery(),
                this.toggleMaximize(),
                this.initModules();
            }
          }),
          (t.prototype.refreshOnResize = function () {
            if (this.lgOpened) {
              var t = this.galleryItems[this.index].__slideVideoInfo;
              this.mediaContainerPosition = this.getMediaContainerPosition();
              var e = this.mediaContainerPosition,
                i = e.top,
                s = e.bottom;
              if (
                ((this.currentImageSize = k(
                  this.items[this.index],
                  this.outer,
                  i + s,
                  t && this.settings.videoMaxSize
                )),
                t && this.resizeVideoSlide(this.index, this.currentImageSize),
                this.zoomFromOrigin && !this.isDummyImageRemoved)
              ) {
                var o = this.getDummyImgStyles(this.currentImageSize);
                this.outer
                  .find(".lg-current .lg-dummy-img")
                  .first()
                  .attr("style", o);
              }
              this.LGel.trigger(u);
            }
          }),
          (t.prototype.resizeVideoSlide = function (t, e) {
            var i = this.getVideoContStyle(e);
            this.getSlideItem(t).find(".lg-video-cont").attr("style", i);
          }),
          (t.prototype.updateSlides = function (t, e) {
            if (
              (this.index > t.length - 1 && (this.index = t.length - 1),
              1 === t.length && (this.index = 0),
              t.length)
            ) {
              var i = this.galleryItems[e].src;
              (this.galleryItems = t),
                this.updateControls(),
                this.$inner.empty(),
                (this.currentItemsInDom = []);
              var s = 0;
              this.galleryItems.some(function (t, e) {
                return t.src === i && ((s = e), !0);
              }),
                (this.currentItemsInDom = this.organizeSlideItems(s, -1)),
                this.loadContent(s, !0),
                this.getSlideItem(s).addClass("lg-current"),
                (this.index = s),
                this.updateCurrentCounter(s),
                this.LGel.trigger(m);
            } else this.closeGallery();
          }),
          (t.prototype.getItems = function () {
            if (((this.items = []), this.settings.dynamic))
              return this.settings.dynamicEl || [];
            if ("this" === this.settings.selector) this.items.push(this.el);
            else if (this.settings.selector)
              if ("string" == typeof this.settings.selector)
                if (this.settings.selectWithin) {
                  var t = O(this.settings.selectWithin);
                  this.items = t.find(this.settings.selector).get();
                } else
                  this.items = this.el.querySelectorAll(this.settings.selector);
              else this.items = this.settings.selector;
            else this.items = this.el.children;
            return W(
              this.items,
              this.settings.extraProps,
              this.settings.getCaptionFromTitleOrAlt,
              this.settings.exThumbImage
            );
          }),
          (t.prototype.openGallery = function (t, e) {
            var i = this;
            if ((void 0 === t && (t = this.settings.index), !this.lgOpened)) {
              (this.lgOpened = !0),
                this.outer.get().focus(),
                this.outer.removeClass("lg-hide-items"),
                this.$container.addClass("lg-show");
              var s = this.getItemsToBeInsertedToDom(t, t);
              this.currentItemsInDom = s;
              var o = "";
              s.forEach(function (t) {
                o = o + '<div id="' + t + '" class="lg-item"></div>';
              }),
                this.$inner.append(o),
                this.addHtml(t);
              var n = "";
              this.mediaContainerPosition = this.getMediaContainerPosition();
              var r = this.mediaContainerPosition,
                a = r.top,
                l = r.bottom;
              this.settings.allowMediaOverlap ||
                this.setMediaContainerPosition(a, l);
              var h = this.galleryItems[t].__slideVideoInfo;
              this.zoomFromOrigin &&
                e &&
                ((this.currentImageSize = k(
                  e,
                  this.outer,
                  a + l,
                  h && this.settings.videoMaxSize
                )),
                (n = P(e, this.outer, a, l, this.currentImageSize))),
                (this.zoomFromOrigin && n) ||
                  (this.outer.addClass(this.settings.startClass),
                  this.getSlideItem(t).removeClass("lg-complete"));
              var c = this.settings.zoomFromOrigin
                ? 100
                : this.settings.backdropDuration;
              setTimeout(function () {
                i.outer.addClass("lg-components-open");
              }, c),
                (this.index = t),
                this.LGel.trigger(f),
                this.getSlideItem(t).addClass("lg-current"),
                (this.lGalleryOn = !1),
                (this.prevScrollTop = O(window).scrollTop()),
                setTimeout(function () {
                  if (i.zoomFromOrigin && n) {
                    var e = i.getSlideItem(t);
                    e.css("transform", n),
                      setTimeout(function () {
                        e
                          .addClass("lg-start-progress lg-start-end-progress")
                          .css(
                            "transition-duration",
                            i.settings.startAnimationDuration + "ms"
                          ),
                          i.outer.addClass("lg-zoom-from-image");
                      }),
                      setTimeout(function () {
                        e.css("transform", "translate3d(0, 0, 0)");
                      }, 100);
                  }
                  setTimeout(function () {
                    i.$backdrop.addClass("in"),
                      i.$container.addClass("lg-show-in");
                  }, 10),
                    (i.zoomFromOrigin && n) ||
                      setTimeout(function () {
                        i.outer.addClass("lg-visible");
                      }, i.settings.backdropDuration),
                    i.slide(t, !1, !1, !1),
                    i.LGel.trigger(v);
                }),
                document.body === this.settings.container &&
                  O("html").addClass("lg-on");
            }
          }),
          (t.prototype.getMediaContainerPosition = function () {
            if (this.settings.allowMediaOverlap) return { top: 0, bottom: 0 };
            var t = this.$toolbar.get().clientHeight || 0,
              e = this.outer.find(".lg-components .lg-sub-html").get(),
              i =
                this.settings.defaultCaptionHeight ||
                (e && e.clientHeight) ||
                0,
              s = this.outer.find(".lg-thumb-outer").get();
            return { top: t, bottom: (s ? s.clientHeight : 0) + i };
          }),
          (t.prototype.setMediaContainerPosition = function (t, e) {
            void 0 === t && (t = 0),
              void 0 === e && (e = 0),
              this.$content.css("top", t + "px").css("bottom", e + "px");
          }),
          (t.prototype.hideBars = function () {
            var t = this;
            setTimeout(function () {
              t.outer.removeClass("lg-hide-items"),
                t.settings.hideBarsDelay > 0 &&
                  (t.outer.on(
                    "mousemove.lg click.lg touchstart.lg",
                    function () {
                      t.outer.removeClass("lg-hide-items"),
                        clearTimeout(t.hideBarTimeout),
                        (t.hideBarTimeout = setTimeout(function () {
                          t.outer.addClass("lg-hide-items");
                        }, t.settings.hideBarsDelay));
                    }
                  ),
                  t.outer.trigger("mousemove.lg"));
            }, this.settings.showBarsAfter);
          }),
          (t.prototype.initPictureFill = function (t) {
            if (this.settings.supportLegacyBrowser)
              try {
                picturefill({ elements: [t.get()] });
              } catch (t) {
                console.warn(
                  "lightGallery :- If you want srcset or picture tag to be supported for older browser please include picturefil javascript library in your document."
                );
              }
          }),
          (t.prototype.counter = function () {
            if (this.settings.counter) {
              var t =
                '<div class="lg-counter" role="status" aria-live="polite">\n                <span id="' +
                this.getIdName("lg-counter-current") +
                '" class="lg-counter-current">' +
                (this.index + 1) +
                ' </span> /\n                <span id="' +
                this.getIdName("lg-counter-all") +
                '" class="lg-counter-all">' +
                this.galleryItems.length +
                " </span></div>";
              this.outer.find(this.settings.appendCounterTo).append(t);
            }
          }),
          (t.prototype.addHtml = function (t) {
            var e, i;
            if (
              (this.galleryItems[t].subHtmlUrl
                ? (i = this.galleryItems[t].subHtmlUrl)
                : (e = this.galleryItems[t].subHtml),
              !i)
            )
              if (e) {
                var s = e.substring(0, 1);
                ("." !== s && "#" !== s) ||
                  (e =
                    this.settings.subHtmlSelectorRelative &&
                    !this.settings.dynamic
                      ? O(this.items).eq(t).find(e).first().html()
                      : O(e).first().html());
              } else e = "";
            if (".lg-item" !== this.settings.appendSubHtmlTo)
              i
                ? this.outer.find(".lg-sub-html").load(i)
                : this.outer.find(".lg-sub-html").html(e);
            else {
              var o = O(this.getSlideItemId(t));
              i
                ? o.load(i)
                : o.append('<div class="lg-sub-html">' + e + "</div>");
            }
            null != e &&
              ("" === e
                ? this.outer
                    .find(this.settings.appendSubHtmlTo)
                    .addClass("lg-empty-html")
                : this.outer
                    .find(this.settings.appendSubHtmlTo)
                    .removeClass("lg-empty-html")),
              this.LGel.trigger(p, { index: t });
          }),
          (t.prototype.preload = function (t) {
            for (
              var e = 1;
              e <= this.settings.preload &&
              !(e >= this.galleryItems.length - t);
              e++
            )
              this.loadContent(t + e, !1);
            for (var i = 1; i <= this.settings.preload && !(t - i < 0); i++)
              this.loadContent(t - i, !1);
          }),
          (t.prototype.getDummyImgStyles = function (t) {
            return t
              ? "width:" +
                  t.width +
                  "px;\n                margin-left: -" +
                  t.width / 2 +
                  "px;\n                margin-top: -" +
                  t.height / 2 +
                  "px;\n                height:" +
                  t.height +
                  "px"
              : "";
          }),
          (t.prototype.getVideoContStyle = function (t) {
            return t
              ? "width:" +
                  t.width +
                  "px;\n                height:" +
                  t.height +
                  "px"
              : "";
          }),
          (t.prototype.getDummyImageContent = function (t, e, i) {
            var s;
            if ((this.settings.dynamic || (s = O(this.items).eq(e)), s)) {
              var o = void 0;
              if (
                !(o = this.settings.exThumbImage
                  ? s.attr(this.settings.exThumbImage)
                  : s.find("img").first().attr("src"))
              )
                return "";
              var n =
                "<img " +
                i +
                ' style="' +
                this.getDummyImgStyles(this.currentImageSize) +
                '" class="lg-dummy-img" src="' +
                o +
                '" />';
              return (
                t.addClass("lg-first-slide"),
                this.outer.addClass("lg-first-slide-loading"),
                n
              );
            }
            return "";
          }),
          (t.prototype.setImgMarkup = function (t, e, i) {
            var s = this.galleryItems[i],
              o = s.alt,
              n = s.srcset,
              r = s.sizes,
              a = s.sources,
              l = o ? 'alt="' + o + '"' : "",
              h =
                '<picture class="lg-img-wrap"> ' +
                (this.isFirstSlideWithZoomAnimation()
                  ? this.getDummyImageContent(e, i, l)
                  : G(i, t, l, n, r, a)) +
                "</picture>";
            e.prepend(h);
          }),
          (t.prototype.onSlideObjectLoad = function (t, e, i, s) {
            var o = t.find(".lg-object").first();
            $(o.get()) || e
              ? i()
              : (o.on("load.lg error.lg", function () {
                  i && i();
                }),
                o.on("error.lg", function () {
                  s && s();
                }));
          }),
          (t.prototype.onLgObjectLoad = function (t, e, i, s, o, n) {
            var r = this;
            this.onSlideObjectLoad(
              t,
              n,
              function () {
                r.triggerSlideItemLoad(t, e, i, s, o);
              },
              function () {
                t.addClass("lg-complete lg-complete_"),
                  t.html(
                    '<span class="lg-error-msg">Oops... Failed to load content...</span>'
                  );
              }
            );
          }),
          (t.prototype.triggerSlideItemLoad = function (t, e, i, s, o) {
            var n = this,
              r = this.galleryItems[e],
              a = o && "video" === this.getSlideType(r) && !r.poster ? s : 0;
            setTimeout(function () {
              t.addClass("lg-complete lg-complete_"),
                n.LGel.trigger(b, { index: e, delay: i || 0, isFirstSlide: o });
            }, a);
          }),
          (t.prototype.isFirstSlideWithZoomAnimation = function () {
            return !(
              this.lGalleryOn ||
              !this.zoomFromOrigin ||
              !this.currentImageSize
            );
          }),
          (t.prototype.addSlideVideoInfo = function (t) {
            var e = this;
            t.forEach(function (t, i) {
              (t.__slideVideoInfo = H(t.src, !!t.video, i)),
                t.__slideVideoInfo &&
                  e.settings.loadYouTubePoster &&
                  !t.poster &&
                  t.__slideVideoInfo.youtube &&
                  (t.poster =
                    "//img.youtube.com/vi/" +
                    t.__slideVideoInfo.youtube[1] +
                    "/maxresdefault.jpg");
            });
          }),
          (t.prototype.loadContent = function (t, e) {
            var i = this,
              s = this.galleryItems[t],
              o = O(this.getSlideItemId(t)),
              n = s.poster,
              r = s.srcset,
              a = s.sizes,
              l = s.sources,
              h = s.src,
              d = s.video,
              u = d && "string" == typeof d ? JSON.parse(d) : d;
            if (s.responsive) {
              var m = s.responsive.split(",");
              h = B(m) || h;
            }
            var p = s.__slideVideoInfo,
              f = "",
              v = !!s.iframe,
              b = !this.lGalleryOn,
              y = 0;
            if (
              (b &&
                (y =
                  this.zoomFromOrigin && this.currentImageSize
                    ? this.settings.startAnimationDuration + 10
                    : this.settings.backdropDuration + 10),
              !o.hasClass("lg-loaded"))
            ) {
              if (p) {
                var C = this.mediaContainerPosition,
                  w = C.top,
                  I = C.bottom,
                  T = k(
                    this.items[t],
                    this.outer,
                    w + I,
                    p && this.settings.videoMaxSize
                  );
                f = this.getVideoContStyle(T);
              }
              if (v) {
                var S = X(
                  this.settings.iframeWidth,
                  this.settings.iframeHeight,
                  this.settings.iframeMaxWidth,
                  this.settings.iframeMaxHeight,
                  h,
                  s.iframeTitle
                );
                o.prepend(S);
              } else if (n) {
                var x = "";
                b &&
                  this.zoomFromOrigin &&
                  this.currentImageSize &&
                  (x = this.getDummyImageContent(o, t, ""));
                S = Y(n, x || "", f, this.settings.strings.playVideo, p);
                o.prepend(S);
              } else if (p) {
                S = '<div class="lg-video-cont " style="' + f + '"></div>';
                o.prepend(S);
              } else if ((this.setImgMarkup(h, o, t), r || l)) {
                var E = o.find(".lg-object");
                this.initPictureFill(E);
              }
              (n || p) &&
                this.LGel.trigger(g, {
                  index: t,
                  src: h,
                  html5Video: u,
                  hasPoster: !!n,
                }),
                this.LGel.trigger(c, { index: t }),
                this.lGalleryOn &&
                  ".lg-item" === this.settings.appendSubHtmlTo &&
                  this.addHtml(t);
            }
            var z = 0;
            y && !O(document.body).hasClass("lg-from-hash") && (z = y),
              this.isFirstSlideWithZoomAnimation() &&
                (setTimeout(function () {
                  o.removeClass(
                    "lg-start-end-progress lg-start-progress"
                  ).removeAttr("style");
                }, this.settings.startAnimationDuration + 100),
                o.hasClass("lg-loaded") ||
                  setTimeout(function () {
                    if (
                      "image" === i.getSlideType(s) &&
                      (o
                        .find(".lg-img-wrap")
                        .append(G(t, h, "", r, a, s.sources)),
                      r || l)
                    ) {
                      var e = o.find(".lg-object");
                      i.initPictureFill(e);
                    }
                    ("image" === i.getSlideType(s) ||
                      ("video" === i.getSlideType(s) && n)) &&
                      (i.onLgObjectLoad(o, t, y, z, !0, !1),
                      i.onSlideObjectLoad(
                        o,
                        !(!p || !p.html5 || n),
                        function () {
                          i.loadContentOnFirstSlideLoad(t, o, z);
                        },
                        function () {
                          i.loadContentOnFirstSlideLoad(t, o, z);
                        }
                      ));
                  }, this.settings.startAnimationDuration + 100)),
              o.addClass("lg-loaded"),
              (this.isFirstSlideWithZoomAnimation() &&
                ("video" !== this.getSlideType(s) || n)) ||
                this.onLgObjectLoad(o, t, y, z, b, !(!p || !p.html5 || n)),
              (this.zoomFromOrigin && this.currentImageSize) ||
                !o.hasClass("lg-complete_") ||
                this.lGalleryOn ||
                setTimeout(function () {
                  o.addClass("lg-complete");
                }, this.settings.backdropDuration),
              (this.lGalleryOn = !0),
              !0 === e &&
                (o.hasClass("lg-complete_")
                  ? this.preload(t)
                  : o
                      .find(".lg-object")
                      .first()
                      .on("load.lg error.lg", function () {
                        i.preload(t);
                      }));
          }),
          (t.prototype.loadContentOnFirstSlideLoad = function (t, e, i) {
            var s = this;
            setTimeout(function () {
              e.find(".lg-dummy-img").remove(),
                e.removeClass("lg-first-slide"),
                s.outer.removeClass("lg-first-slide-loading"),
                (s.isDummyImageRemoved = !0),
                s.preload(t);
            }, i + 300);
          }),
          (t.prototype.getItemsToBeInsertedToDom = function (t, e, i) {
            var s = this;
            void 0 === i && (i = 0);
            var o = [],
              n = Math.max(i, 3);
            n = Math.min(n, this.galleryItems.length);
            var r = "lg-item-" + this.lgId + "-" + e;
            if (this.galleryItems.length <= 3)
              return (
                this.galleryItems.forEach(function (t, e) {
                  o.push("lg-item-" + s.lgId + "-" + e);
                }),
                o
              );
            if (t < (this.galleryItems.length - 1) / 2) {
              for (var a = t; a > t - n / 2 && a >= 0; a--)
                o.push("lg-item-" + this.lgId + "-" + a);
              var l = o.length;
              for (a = 0; a < n - l; a++)
                o.push("lg-item-" + this.lgId + "-" + (t + a + 1));
            } else {
              for (
                a = t;
                a <= this.galleryItems.length - 1 && a < t + n / 2;
                a++
              )
                o.push("lg-item-" + this.lgId + "-" + a);
              for (l = o.length, a = 0; a < n - l; a++)
                o.push("lg-item-" + this.lgId + "-" + (t - a - 1));
            }
            return (
              this.settings.loop &&
                (t === this.galleryItems.length - 1
                  ? o.push("lg-item-" + this.lgId + "-0")
                  : 0 === t &&
                    o.push(
                      "lg-item-" +
                        this.lgId +
                        "-" +
                        (this.galleryItems.length - 1)
                    )),
              -1 === o.indexOf(r) && o.push("lg-item-" + this.lgId + "-" + e),
              o
            );
          }),
          (t.prototype.organizeSlideItems = function (t, e) {
            var i = this,
              s = this.getItemsToBeInsertedToDom(
                t,
                e,
                this.settings.numberOfSlideItemsInDom
              );
            return (
              s.forEach(function (t) {
                -1 === i.currentItemsInDom.indexOf(t) &&
                  i.$inner.append('<div id="' + t + '" class="lg-item"></div>');
              }),
              this.currentItemsInDom.forEach(function (t) {
                -1 === s.indexOf(t) && O("#" + t).remove();
              }),
              s
            );
          }),
          (t.prototype.getPreviousSlideIndex = function () {
            var t = 0;
            try {
              var e = this.outer.find(".lg-current").first().attr("id");
              t = parseInt(e.split("-")[3]) || 0;
            } catch (e) {
              t = 0;
            }
            return t;
          }),
          (t.prototype.setDownloadValue = function (t) {
            if (this.settings.download) {
              var e = this.galleryItems[t];
              if (!1 === e.downloadUrl || "false" === e.downloadUrl)
                this.outer.addClass("lg-hide-download");
              else {
                var i = this.getElementById("lg-download");
                this.outer.removeClass("lg-hide-download"),
                  i.attr("href", e.downloadUrl || e.src),
                  e.download && i.attr("download", e.download);
              }
            }
          }),
          (t.prototype.makeSlideAnimation = function (t, e, i) {
            var s = this;
            this.lGalleryOn && i.addClass("lg-slide-progress"),
              setTimeout(
                function () {
                  s.outer.addClass("lg-no-trans"),
                    s.outer
                      .find(".lg-item")
                      .removeClass("lg-prev-slide lg-next-slide"),
                    "prev" === t
                      ? (e.addClass("lg-prev-slide"),
                        i.addClass("lg-next-slide"))
                      : (e.addClass("lg-next-slide"),
                        i.addClass("lg-prev-slide")),
                    setTimeout(function () {
                      s.outer.find(".lg-item").removeClass("lg-current"),
                        e.addClass("lg-current"),
                        s.outer.removeClass("lg-no-trans");
                    }, 50);
                },
                this.lGalleryOn ? this.settings.slideDelay : 0
              );
          }),
          (t.prototype.slide = function (t, e, i, s) {
            var o = this,
              n = this.getPreviousSlideIndex();
            if (
              ((this.currentItemsInDom = this.organizeSlideItems(t, n)),
              !this.lGalleryOn || n !== t)
            ) {
              var r = this.galleryItems.length;
              if (!this.lgBusy) {
                this.settings.counter && this.updateCurrentCounter(t);
                var a = this.getSlideItem(t),
                  l = this.getSlideItem(n),
                  h = this.galleryItems[t],
                  c = h.__slideVideoInfo;
                if (
                  (this.outer.attr("data-lg-slide-type", this.getSlideType(h)),
                  this.setDownloadValue(t),
                  c)
                ) {
                  var d = this.mediaContainerPosition,
                    g = d.top,
                    u = d.bottom,
                    m = k(
                      this.items[t],
                      this.outer,
                      g + u,
                      c && this.settings.videoMaxSize
                    );
                  this.resizeVideoSlide(t, m);
                }
                if (
                  (this.LGel.trigger(y, {
                    prevIndex: n,
                    index: t,
                    fromTouch: !!e,
                    fromThumb: !!i,
                  }),
                  (this.lgBusy = !0),
                  clearTimeout(this.hideBarTimeout),
                  this.arrowDisable(t),
                  s || (t < n ? (s = "prev") : t > n && (s = "next")),
                  e)
                ) {
                  this.outer
                    .find(".lg-item")
                    .removeClass("lg-prev-slide lg-current lg-next-slide");
                  var p = void 0,
                    f = void 0;
                  r > 2
                    ? ((p = t - 1),
                      (f = t + 1),
                      ((0 === t && n === r - 1) || (t === r - 1 && 0 === n)) &&
                        ((f = 0), (p = r - 1)))
                    : ((p = 0), (f = 1)),
                    "prev" === s
                      ? this.getSlideItem(f).addClass("lg-next-slide")
                      : this.getSlideItem(p).addClass("lg-prev-slide"),
                    a.addClass("lg-current");
                } else this.makeSlideAnimation(s, a, l);
                this.lGalleryOn
                  ? setTimeout(function () {
                      o.loadContent(t, !0),
                        ".lg-item" !== o.settings.appendSubHtmlTo &&
                          o.addHtml(t);
                    }, this.settings.speed +
                      50 +
                      (e ? 0 : this.settings.slideDelay))
                  : this.loadContent(t, !0),
                  setTimeout(function () {
                    (o.lgBusy = !1),
                      l.removeClass("lg-slide-progress"),
                      o.LGel.trigger(C, {
                        prevIndex: n,
                        index: t,
                        fromTouch: e,
                        fromThumb: i,
                      });
                  }, (this.lGalleryOn ? this.settings.speed + 100 : 100) +
                    (e ? 0 : this.settings.slideDelay));
              }
              this.index = t;
            }
          }),
          (t.prototype.updateCurrentCounter = function (t) {
            this.getElementById("lg-counter-current").html(t + 1 + "");
          }),
          (t.prototype.updateCounterTotal = function () {
            this.getElementById("lg-counter-all").html(
              this.galleryItems.length + ""
            );
          }),
          (t.prototype.getSlideType = function (t) {
            return t.__slideVideoInfo ? "video" : t.iframe ? "iframe" : "image";
          }),
          (t.prototype.touchMove = function (t, e, i) {
            var s = e.pageX - t.pageX,
              o = e.pageY - t.pageY,
              n = !1;
            if (
              (this.swipeDirection
                ? (n = !0)
                : Math.abs(s) > 15
                ? ((this.swipeDirection = "horizontal"), (n = !0))
                : Math.abs(o) > 15 &&
                  ((this.swipeDirection = "vertical"), (n = !0)),
              n)
            ) {
              var r = this.getSlideItem(this.index);
              if ("horizontal" === this.swipeDirection) {
                null == i || i.preventDefault(),
                  this.outer.addClass("lg-dragging"),
                  this.setTranslate(r, s, 0);
                var a = r.get().offsetWidth,
                  l = (15 * a) / 100 - Math.abs((10 * s) / 100);
                this.setTranslate(
                  this.outer.find(".lg-prev-slide").first(),
                  -a + s - l,
                  0
                ),
                  this.setTranslate(
                    this.outer.find(".lg-next-slide").first(),
                    a + s + l,
                    0
                  );
              } else if (
                "vertical" === this.swipeDirection &&
                this.settings.swipeToClose
              ) {
                null == i || i.preventDefault(),
                  this.$container.addClass("lg-dragging-vertical");
                var h = 1 - Math.abs(o) / window.innerHeight;
                this.$backdrop.css("opacity", h);
                var c = 1 - Math.abs(o) / (2 * window.innerWidth);
                this.setTranslate(r, 0, o, c, c),
                  Math.abs(o) > 100 &&
                    this.outer
                      .addClass("lg-hide-items")
                      .removeClass("lg-components-open");
              }
            }
          }),
          (t.prototype.touchEnd = function (t, e, i) {
            var s,
              o = this;
            "lg-slide" !== this.settings.mode &&
              this.outer.addClass("lg-slide"),
              setTimeout(function () {
                o.$container.removeClass("lg-dragging-vertical"),
                  o.outer
                    .removeClass("lg-dragging lg-hide-items")
                    .addClass("lg-components-open");
                var n = !0;
                if ("horizontal" === o.swipeDirection) {
                  s = t.pageX - e.pageX;
                  var r = Math.abs(t.pageX - e.pageX);
                  s < 0 && r > o.settings.swipeThreshold
                    ? (o.goToNextSlide(!0), (n = !1))
                    : s > 0 &&
                      r > o.settings.swipeThreshold &&
                      (o.goToPrevSlide(!0), (n = !1));
                } else if ("vertical" === o.swipeDirection) {
                  if (
                    ((s = Math.abs(t.pageY - e.pageY)),
                    o.settings.closable && o.settings.swipeToClose && s > 100)
                  )
                    return void o.closeGallery();
                  o.$backdrop.css("opacity", 1);
                }
                if (
                  (o.outer.find(".lg-item").removeAttr("style"),
                  n && Math.abs(t.pageX - e.pageX) < 5)
                ) {
                  var a = O(i.target);
                  o.isPosterElement(a) && o.LGel.trigger(w);
                }
                o.swipeDirection = void 0;
              }),
              setTimeout(function () {
                o.outer.hasClass("lg-dragging") ||
                  "lg-slide" === o.settings.mode ||
                  o.outer.removeClass("lg-slide");
              }, this.settings.speed + 100);
          }),
          (t.prototype.enableSwipe = function () {
            var t = this,
              e = {},
              i = {},
              s = !1,
              o = !1;
            this.settings.enableSwipe &&
              (this.$inner.on("touchstart.lg", function (i) {
                t.dragOrSwipeEnabled = !0;
                var s = t.getSlideItem(t.index);
                (!O(i.target).hasClass("lg-item") &&
                  !s.get().contains(i.target)) ||
                  t.outer.hasClass("lg-zoomed") ||
                  t.lgBusy ||
                  1 !== i.targetTouches.length ||
                  ((o = !0),
                  (t.touchAction = "swipe"),
                  t.manageSwipeClass(),
                  (e = {
                    pageX: i.targetTouches[0].pageX,
                    pageY: i.targetTouches[0].pageY,
                  }));
              }),
              this.$inner.on("touchmove.lg", function (n) {
                o &&
                  "swipe" === t.touchAction &&
                  1 === n.targetTouches.length &&
                  ((i = {
                    pageX: n.targetTouches[0].pageX,
                    pageY: n.targetTouches[0].pageY,
                  }),
                  t.touchMove(e, i, n),
                  (s = !0));
              }),
              this.$inner.on("touchend.lg", function (n) {
                if ("swipe" === t.touchAction) {
                  if (s) (s = !1), t.touchEnd(i, e, n);
                  else if (o) {
                    var r = O(n.target);
                    t.isPosterElement(r) && t.LGel.trigger(w);
                  }
                  (t.touchAction = void 0), (o = !1);
                }
              }));
          }),
          (t.prototype.enableDrag = function () {
            var t = this,
              e = {},
              i = {},
              s = !1,
              o = !1;
            this.settings.enableDrag &&
              (this.outer.on("mousedown.lg", function (i) {
                t.dragOrSwipeEnabled = !0;
                var o = t.getSlideItem(t.index);
                (O(i.target).hasClass("lg-item") ||
                  o.get().contains(i.target)) &&
                  (t.outer.hasClass("lg-zoomed") ||
                    t.lgBusy ||
                    (i.preventDefault(),
                    t.lgBusy ||
                      (t.manageSwipeClass(),
                      (e = { pageX: i.pageX, pageY: i.pageY }),
                      (s = !0),
                      (t.outer.get().scrollLeft += 1),
                      (t.outer.get().scrollLeft -= 1),
                      t.outer.removeClass("lg-grab").addClass("lg-grabbing"),
                      t.LGel.trigger(I))));
              }),
              O(window).on("mousemove.lg.global" + this.lgId, function (n) {
                s &&
                  t.lgOpened &&
                  ((o = !0),
                  (i = { pageX: n.pageX, pageY: n.pageY }),
                  t.touchMove(e, i),
                  t.LGel.trigger(T));
              }),
              O(window).on("mouseup.lg.global" + this.lgId, function (n) {
                if (t.lgOpened) {
                  var r = O(n.target);
                  o
                    ? ((o = !1), t.touchEnd(i, e, n), t.LGel.trigger(S))
                    : t.isPosterElement(r) && t.LGel.trigger(w),
                    s &&
                      ((s = !1),
                      t.outer.removeClass("lg-grabbing").addClass("lg-grab"));
                }
              }));
          }),
          (t.prototype.triggerPosterClick = function () {
            var t = this;
            this.$inner.on("click.lg", function (e) {
              !t.dragOrSwipeEnabled &&
                t.isPosterElement(O(e.target)) &&
                t.LGel.trigger(w);
            });
          }),
          (t.prototype.manageSwipeClass = function () {
            var t = this.index + 1,
              e = this.index - 1;
            this.settings.loop &&
              this.galleryItems.length > 2 &&
              (0 === this.index
                ? (e = this.galleryItems.length - 1)
                : this.index === this.galleryItems.length - 1 && (t = 0)),
              this.outer
                .find(".lg-item")
                .removeClass("lg-next-slide lg-prev-slide"),
              e > -1 && this.getSlideItem(e).addClass("lg-prev-slide"),
              this.getSlideItem(t).addClass("lg-next-slide");
          }),
          (t.prototype.goToNextSlide = function (t) {
            var e = this,
              i = this.settings.loop;
            t && this.galleryItems.length < 3 && (i = !1),
              this.lgBusy ||
                (this.index + 1 < this.galleryItems.length
                  ? (this.index++,
                    this.LGel.trigger(x, { index: this.index }),
                    this.slide(this.index, !!t, !1, "next"))
                  : i
                  ? ((this.index = 0),
                    this.LGel.trigger(x, { index: this.index }),
                    this.slide(this.index, !!t, !1, "next"))
                  : this.settings.slideEndAnimation &&
                    !t &&
                    (this.outer.addClass("lg-right-end"),
                    setTimeout(function () {
                      e.outer.removeClass("lg-right-end");
                    }, 400)));
          }),
          (t.prototype.goToPrevSlide = function (t) {
            var e = this,
              i = this.settings.loop;
            t && this.galleryItems.length < 3 && (i = !1),
              this.lgBusy ||
                (this.index > 0
                  ? (this.index--,
                    this.LGel.trigger(E, { index: this.index, fromTouch: t }),
                    this.slide(this.index, !!t, !1, "prev"))
                  : i
                  ? ((this.index = this.galleryItems.length - 1),
                    this.LGel.trigger(E, { index: this.index, fromTouch: t }),
                    this.slide(this.index, !!t, !1, "prev"))
                  : this.settings.slideEndAnimation &&
                    !t &&
                    (this.outer.addClass("lg-left-end"),
                    setTimeout(function () {
                      e.outer.removeClass("lg-left-end");
                    }, 400)));
          }),
          (t.prototype.keyPress = function () {
            var t = this;
            O(window).on("keydown.lg.global" + this.lgId, function (e) {
              t.lgOpened &&
                !0 === t.settings.escKey &&
                27 === e.keyCode &&
                (e.preventDefault(),
                t.settings.allowMediaOverlap &&
                t.outer.hasClass("lg-can-toggle") &&
                t.outer.hasClass("lg-components-open")
                  ? t.outer.removeClass("lg-components-open")
                  : t.closeGallery()),
                t.lgOpened &&
                  t.galleryItems.length > 1 &&
                  (37 === e.keyCode && (e.preventDefault(), t.goToPrevSlide()),
                  39 === e.keyCode && (e.preventDefault(), t.goToNextSlide()));
            });
          }),
          (t.prototype.arrow = function () {
            var t = this;
            this.getElementById("lg-prev").on("click.lg", function () {
              t.goToPrevSlide();
            }),
              this.getElementById("lg-next").on("click.lg", function () {
                t.goToNextSlide();
              });
          }),
          (t.prototype.arrowDisable = function (t) {
            if (!this.settings.loop && this.settings.hideControlOnEnd) {
              var e = this.getElementById("lg-prev"),
                i = this.getElementById("lg-next");
              t + 1 === this.galleryItems.length
                ? i.attr("disabled", "disabled").addClass("disabled")
                : i.removeAttr("disabled").removeClass("disabled"),
                0 === t
                  ? e.attr("disabled", "disabled").addClass("disabled")
                  : e.removeAttr("disabled").removeClass("disabled");
            }
          }),
          (t.prototype.setTranslate = function (t, e, i, s, o) {
            void 0 === s && (s = 1),
              void 0 === o && (o = 1),
              t.css(
                "transform",
                "translate3d(" +
                  e +
                  "px, " +
                  i +
                  "px, 0px) scale3d(" +
                  s +
                  ", " +
                  o +
                  ", 1)"
              );
          }),
          (t.prototype.mousewheel = function () {
            var t = this,
              e = 0;
            this.outer.on("wheel.lg", function (i) {
              if (i.deltaY && !(t.galleryItems.length < 2)) {
                i.preventDefault();
                var s = new Date().getTime();
                s - e < 1e3 ||
                  ((e = s),
                  i.deltaY > 0
                    ? t.goToNextSlide()
                    : i.deltaY < 0 && t.goToPrevSlide());
              }
            });
          }),
          (t.prototype.isSlideElement = function (t) {
            return (
              t.hasClass("lg-outer") ||
              t.hasClass("lg-item") ||
              t.hasClass("lg-img-wrap")
            );
          }),
          (t.prototype.isPosterElement = function (t) {
            var e = this.getSlideItem(this.index)
              .find(".lg-video-play-button")
              .get();
            return (
              t.hasClass("lg-video-poster") ||
              t.hasClass("lg-video-play-button") ||
              (e && e.contains(t.get()))
            );
          }),
          (t.prototype.toggleMaximize = function () {
            var t = this;
            this.getElementById("lg-maximize").on("click.lg", function () {
              t.$container.toggleClass("lg-inline"), t.refreshOnResize();
            });
          }),
          (t.prototype.invalidateItems = function () {
            for (var t = 0; t < this.items.length; t++) {
              var e = O(this.items[t]);
              e.off("click.lgcustom-item-" + e.attr("data-lg-id"));
            }
          }),
          (t.prototype.manageCloseGallery = function () {
            var t = this;
            if (this.settings.closable) {
              var e = !1;
              this.getElementById("lg-close").on("click.lg", function () {
                t.closeGallery();
              }),
                this.settings.closeOnTap &&
                  (this.outer.on("mousedown.lg", function (i) {
                    var s = O(i.target);
                    e = !!t.isSlideElement(s);
                  }),
                  this.outer.on("mousemove.lg", function () {
                    e = !1;
                  }),
                  this.outer.on("mouseup.lg", function (i) {
                    var s = O(i.target);
                    t.isSlideElement(s) &&
                      e &&
                      (t.outer.hasClass("lg-dragging") || t.closeGallery());
                  }));
            }
          }),
          (t.prototype.closeGallery = function (t) {
            var e = this;
            if (!this.lgOpened || (!this.settings.closable && !t)) return 0;
            this.LGel.trigger(z), O(window).scrollTop(this.prevScrollTop);
            var i,
              s = this.items[this.index];
            if (this.zoomFromOrigin && s) {
              var o = this.mediaContainerPosition,
                n = o.top,
                r = o.bottom,
                a = this.galleryItems[this.index],
                l = a.__slideVideoInfo,
                h = a.poster,
                c = k(
                  s,
                  this.outer,
                  n + r,
                  l && h && this.settings.videoMaxSize
                );
              i = P(s, this.outer, n, r, c);
            }
            this.zoomFromOrigin && i
              ? (this.outer.addClass("lg-closing lg-zoom-from-image"),
                this.getSlideItem(this.index)
                  .addClass("lg-start-end-progress")
                  .css(
                    "transition-duration",
                    this.settings.startAnimationDuration + "ms"
                  )
                  .css("transform", i))
              : (this.outer.addClass("lg-hide-items"),
                this.outer.removeClass("lg-zoom-from-image")),
              this.destroyModules(),
              (this.lGalleryOn = !1),
              (this.isDummyImageRemoved = !1),
              (this.zoomFromOrigin = this.settings.zoomFromOrigin),
              clearTimeout(this.hideBarTimeout),
              (this.hideBarTimeout = !1),
              O("html").removeClass("lg-on"),
              this.outer.removeClass("lg-visible lg-components-open"),
              this.$backdrop.removeClass("in").css("opacity", 0);
            var d =
              this.zoomFromOrigin && i
                ? Math.max(
                    this.settings.startAnimationDuration,
                    this.settings.backdropDuration
                  )
                : this.settings.backdropDuration;
            return (
              this.$container.removeClass("lg-show-in"),
              setTimeout(function () {
                e.zoomFromOrigin &&
                  i &&
                  e.outer.removeClass("lg-zoom-from-image"),
                  e.$container.removeClass("lg-show"),
                  e.$backdrop
                    .removeAttr("style")
                    .css(
                      "transition-duration",
                      e.settings.backdropDuration + "ms"
                    ),
                  e.outer.removeClass("lg-closing " + e.settings.startClass),
                  e.getSlideItem(e.index).removeClass("lg-start-end-progress"),
                  e.$inner.empty(),
                  e.lgOpened && e.LGel.trigger(L, { instance: e }),
                  e.outer.get() && e.outer.get().blur(),
                  (e.lgOpened = !1);
              }, d + 100),
              d + 100
            );
          }),
          (t.prototype.initModules = function () {
            this.plugins.forEach(function (t) {
              try {
                t.init();
              } catch (t) {
                console.warn(
                  "lightGallery:- make sure lightGallery module is properly initiated"
                );
              }
            });
          }),
          (t.prototype.destroyModules = function (t) {
            this.plugins.forEach(function (e) {
              try {
                t ? e.destroy() : e.closeGallery && e.closeGallery();
              } catch (t) {
                console.warn(
                  "lightGallery:- make sure lightGallery module is properly destroyed"
                );
              }
            });
          }),
          (t.prototype.refresh = function (t) {
            this.settings.dynamic || this.invalidateItems(),
              (this.galleryItems = t || this.getItems()),
              this.updateControls(),
              this.openGalleryOnItemClick(),
              this.LGel.trigger(m);
          }),
          (t.prototype.updateControls = function () {
            this.addSlideVideoInfo(this.galleryItems),
              this.updateCounterTotal(),
              this.manageSingleSlideClassName();
          }),
          (t.prototype.destroy = function () {
            var t = this,
              e = this.closeGallery(!0);
            return (
              setTimeout(function () {
                t.destroyModules(!0),
                  t.settings.dynamic || t.invalidateItems(),
                  O(window).off(".lg.global" + t.lgId),
                  t.LGel.off(".lg"),
                  t.$container.remove();
              }, e),
              e
            );
          }),
          t
        );
      })();
    const R = function (t, e) {
      return new N(t, e);
    };
    var j = i(97),
      Z = i(86);
    const q = document.querySelectorAll("[data-gallery]");
    if (q.length) {
      let e = [];
      q.forEach((t) => {
        e.push({
          gallery: t,
          galleryClass: R(t, {
            plugins: [Z, j],
            licenseKey: "7EC452A9-0CFD441C-BD984C7C-17C8456E",
            speed: 500,
            selector: "[data-gallery-item]",
          }),
        });
      }),
        (t.gallery = e);
    }
    function U(t) {
      this.type = t;
    }
    (U.prototype.init = function () {
      const t = this;
      (this.оbjects = []),
        (this.daClassname = "_dynamic_adapt_"),
        (this.nodes = document.querySelectorAll("[data-da]"));
      for (let t = 0; t < this.nodes.length; t++) {
        const e = this.nodes[t],
          i = e.dataset.da.trim().split(","),
          s = {};
        (s.element = e),
          (s.parent = e.parentNode),
          (s.destination = document.querySelector(i[0].trim())),
          (s.breakpoint = i[1] ? i[1].trim() : "767"),
          (s.place = i[2] ? i[2].trim() : "last"),
          (s.index = this.indexInParent(s.parent, s.element)),
          this.оbjects.push(s);
      }
      this.arraySort(this.оbjects),
        (this.mediaQueries = Array.prototype.map.call(
          this.оbjects,
          function (t) {
            return (
              "(" +
              this.type +
              "-width: " +
              t.breakpoint +
              "px)," +
              t.breakpoint
            );
          },
          this
        )),
        (this.mediaQueries = Array.prototype.filter.call(
          this.mediaQueries,
          function (t, e, i) {
            return Array.prototype.indexOf.call(i, t) === e;
          }
        ));
      for (let e = 0; e < this.mediaQueries.length; e++) {
        const i = this.mediaQueries[e],
          s = String.prototype.split.call(i, ","),
          o = window.matchMedia(s[0]),
          n = s[1],
          r = Array.prototype.filter.call(this.оbjects, function (t) {
            return t.breakpoint === n;
          });
        o.addListener(function () {
          t.mediaHandler(o, r);
        }),
          this.mediaHandler(o, r);
      }
    }),
      (U.prototype.mediaHandler = function (t, e) {
        if (t.matches)
          for (let t = 0; t < e.length; t++) {
            const i = e[t];
            (i.index = this.indexInParent(i.parent, i.element)),
              this.moveTo(i.place, i.element, i.destination);
          }
        else
          for (let t = e.length - 1; t >= 0; t--) {
            const i = e[t];
            i.element.classList.contains(this.daClassname) &&
              this.moveBack(i.parent, i.element, i.index);
          }
      }),
      (U.prototype.moveTo = function (t, e, i) {
        e.classList.add(this.daClassname),
          "last" === t || t >= i.children.length
            ? i.insertAdjacentElement("beforeend", e)
            : "first" !== t
            ? i.children[t].insertAdjacentElement("beforebegin", e)
            : i.insertAdjacentElement("afterbegin", e);
      }),
      (U.prototype.moveBack = function (t, e, i) {
        e.classList.remove(this.daClassname),
          void 0 !== t.children[i]
            ? t.children[i].insertAdjacentElement("beforebegin", e)
            : t.insertAdjacentElement("beforeend", e);
      }),
      (U.prototype.indexInParent = function (t, e) {
        const i = Array.prototype.slice.call(t.children);
        return Array.prototype.indexOf.call(i, e);
      }),
      (U.prototype.arraySort = function (t) {
        "min" === this.type
          ? Array.prototype.sort.call(t, function (t, e) {
              return t.breakpoint === e.breakpoint
                ? t.place === e.place
                  ? 0
                  : "first" === t.place || "last" === e.place
                  ? -1
                  : "last" === t.place || "first" === e.place
                  ? 1
                  : t.place - e.place
                : t.breakpoint - e.breakpoint;
            })
          : Array.prototype.sort.call(t, function (t, e) {
              return t.breakpoint === e.breakpoint
                ? t.place === e.place
                  ? 0
                  : "first" === t.place || "last" === e.place
                  ? 1
                  : "last" === t.place || "first" === e.place
                  ? -1
                  : e.place - t.place
                : e.breakpoint - t.breakpoint;
            });
      });
    new U("max").init(),
      (window.FLS = !0),
      (function (t) {
        let e = new Image();
        (e.onload = e.onerror =
          function () {
            t(2 == e.height);
          }),
          (e.src =
            "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
      })(function (t) {
        let e = !0 === t ? "webp" : "no-webp";
        document.documentElement.classList.add(e);
      }),
      window.addEventListener("load", function () {
        setTimeout(function () {
          document.documentElement.classList.add("loaded");
        }, 0);
      }),
      document.querySelector(".icon-menu") &&
        document.addEventListener("click", function (t) {
          e &&
            t.target.closest(".icon-menu") &&
            (((t = 500) => {
              document.documentElement.classList.contains("lock") ? s(t) : o(t);
            })(),
            document.documentElement.classList.toggle("menu-open"));
        }),
      (function () {
        const t = document.querySelectorAll(
          "input[placeholder],textarea[placeholder]"
        );
        t.length &&
          t.forEach((t) => {
            t.dataset.placeholder = t.placeholder;
          }),
          document.body.addEventListener("focusin", function (t) {
            const e = t.target;
            ("INPUT" !== e.tagName && "TEXTAREA" !== e.tagName) ||
              (e.dataset.placeholder && (e.placeholder = ""),
              e.classList.add("_form-focus"),
              e.parentElement.classList.add("_form-focus"),
              a.removeError(e));
          }),
          document.body.addEventListener("focusout", function (t) {
            const e = t.target;
            ("INPUT" !== e.tagName && "TEXTAREA" !== e.tagName) ||
              (e.dataset.placeholder && (e.placeholder = e.dataset.placeholder),
              e.classList.remove("_form-focus"),
              e.parentElement.classList.remove("_form-focus"),
              e.hasAttribute("data-validate") && a.validateInput(e));
          });
      })(),
      (function (e) {
        t.popup && t.popup.open("some");
        const i = document.forms;
        if (i.length)
          for (const t of i)
            t.addEventListener("submit", function (t) {
              s(t.target, t);
            }),
              t.addEventListener("reset", function (t) {
                const e = t.target;
                a.formClean(e);
              });
        async function s(t, i) {
          if (0 === (e ? a.getErrors(t) : 0)) {
            if (t.hasAttribute("data-ajax")) {
              i.preventDefault();
              const e = t.getAttribute("action")
                  ? t.getAttribute("action").trim()
                  : "#",
                s = t.getAttribute("method")
                  ? t.getAttribute("method").trim()
                  : "GET",
                n = new FormData(t);
              t.classList.add("_sending");
              const r = await fetch(e, { method: s, body: n });
              if (r.ok) {
                await r.json();
                t.classList.remove("_sending"), o(t);
              } else alert("Ошибка"), t.classList.remove("_sending");
            } else t.hasAttribute("data-dev") && (i.preventDefault(), o(t));
          } else {
            i.preventDefault();
            const e = t.querySelector("._form-error");
            e && t.hasAttribute("data-goto-error") && r(e, !0, 1e3);
          }
        }
        function o(e) {
          document.dispatchEvent(
            new CustomEvent("formSent", { detail: { form: e } })
          ),
            setTimeout(() => {
              if (t.popup) {
                const i = e.dataset.popupMessage;
                i && t.popup.open(i);
              }
            }, 0),
            a.formClean(e),
            n(`[Формы]: ${"Форма отправлена!"}`);
        }
      })(!0),
      (function () {
        l = !0;
        const t = document.querySelector("header.header"),
          e = t.hasAttribute("data-scroll-show"),
          i = t.dataset.scrollShow ? t.dataset.scrollShow : 500,
          s = t.dataset.scroll ? t.dataset.scroll : 1;
        let o,
          n = 0;
        document.addEventListener("windowScroll", function (r) {
          const a = window.scrollY;
          clearTimeout(o),
            a >= s
              ? (!t.classList.contains("_header-scroll") &&
                  t.classList.add("_header-scroll"),
                e &&
                  (a > n
                    ? t.classList.contains("_header-show") &&
                      t.classList.remove("_header-show")
                    : !t.classList.contains("_header-show") &&
                      t.classList.add("_header-show"),
                  (o = setTimeout(() => {
                    !t.classList.contains("_header-show") &&
                      t.classList.add("_header-show");
                  }, i))))
              : (t.classList.contains("_header-scroll") &&
                  t.classList.remove("_header-scroll"),
                e &&
                  t.classList.contains("_header-show") &&
                  t.classList.remove("_header-show")),
            (n = a <= 0 ? 0 : a);
        });
      })();
  })();
})();
