/* ===================================================================
 * Ceevee 2.0.0 - Main JS
 * ------------------------------------------------------------------- */

(function (html) {
  "use strict";

  html.className = html.className.replace(/\bno-js\b/g, "") + " js ";

  /* Preloader
   * -------------------------------------------------- */
  const ssPreloader = function () {
    const preloader = document.querySelector("#preloader");
    if (!preloader) return;

    window.addEventListener("load", function () {
      document.querySelector("body").classList.remove("ss-preload");
      document.querySelector("body").classList.add("ss-loaded");

      preloader.addEventListener("transitionend", function (e) {
        if (e.target.matches("#preloader")) {
          this.style.display = "none";
        }
      });
    });
  }; // end ssPreloader

  /* Parallax
   * -------------------------------------------------- */
  const ssParallax = function () {
    const rellax = new Rellax(".rellax");
  }; // end ssParallax

  /* Mobile Menu
   * ---------------------------------------------------- */
  const ssMobileMenu = function () {
    const toggleButton = document.querySelector(".s-header__menu-toggle");
    const headerNavWrap = document.querySelector(".s-header__nav-wrap");
    const siteBody = document.querySelector("body");

    if (!(toggleButton && headerNavWrap)) return;

    toggleButton.addEventListener("click", function (event) {
      event.preventDefault();
      toggleButton.classList.toggle("is-clicked");
      siteBody.classList.toggle("menu-is-open");
    });

    headerNavWrap.querySelectorAll(".s-header__nav a").forEach(function (link) {
      link.addEventListener("click", function (evt) {
        // at 800px and below
        if (window.matchMedia("(max-width: 800px)").matches) {
          toggleButton.classList.toggle("is-clicked");
          siteBody.classList.toggle("menu-is-open");
        }
      });
    });

    window.addEventListener("resize", function () {
      // above 800px
      if (window.matchMedia("(min-width: 801px)").matches) {
        if (siteBody.classList.contains("menu-is-open"))
          siteBody.classList.remove("menu-is-open");
        if (toggleButton.classList.contains("is-clicked"))
          toggleButton.classList.remove("is-clicked");
      }
    });
  }; // end ssMobileMenu

  /* Lightbox
   * ------------------------------------------------------ */
  const ssLightbox = function () {
    const folioLinks = document.querySelectorAll(".folio-item a");
    const modals = [];

    folioLinks.forEach(function (link) {
      let modalbox = link.getAttribute("href");
      let instance = basicLightbox.create(document.querySelector(modalbox), {
        onShow: function (instance) {
          //detect Escape key press
          document.addEventListener("keydown", function (evt) {
            evt = evt || window.event;
            if (evt.keyCode === 27) {
              instance.close();
            }
          });
        },
      });
      modals.push(instance);
    });

    folioLinks.forEach(function (link, index) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        modals[index].show();
      });
    });
  }; // end ssLightbox

  /* Smoothscroll
   * ------------------------------------------------------ */
  const ssSmoothScroll = function () {
    const triggers = document.querySelectorAll(".smoothscroll");

    triggers.forEach(function (trigger) {
      trigger.addEventListener("click", function () {
        const target = trigger.getAttribute("href");

        Jump(target, {
          duration: 1200,
        });
      });
    });
  }; // end ssSmoothScroll

  /* initialize
   * ------------------------------------------------------ */
  (function ssInit() {
    ssPreloader();
    ssParallax();
    ssMobileMenu();
    ssLightbox();
    ssSmoothScroll();
  })();
})(document.documentElement);
