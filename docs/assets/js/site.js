"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var nav = document.querySelector(".site-nav");

  function updateNavigation() {
    if (nav) {
      nav.classList.toggle("nav-scrolled", window.scrollY > 16);
    }
  }

  updateNavigation();
  window.addEventListener("scroll", updateNavigation, { passive: true });

  // Close the responsive Bootstrap menu when navigating to a section.
  document.querySelectorAll("#navigation a[href^='#']").forEach(function (link) {
    link.addEventListener("click", function () {
      var collapse = document.getElementById("navigation");
      if (collapse && window.bootstrap && window.bootstrap.Collapse && collapse.classList.contains("show")) {
        window.bootstrap.Collapse.getOrCreateInstance(collapse, { toggle: false }).hide();
      }
    });
  });

});
