/* ============================================
   I CONGRESSO ONLINE DE DIAGNOSTICO SALIVAR
   Main JavaScript v2
   ============================================ */

(function () {
  'use strict';

  /* ---- Scroll Progress Bar ---- */
  var scrollProgress = document.getElementById('scrollProgress');
  if (scrollProgress) {
    window.addEventListener('scroll', function () {
      var scrollTop = window.scrollY;
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      var progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      scrollProgress.style.width = progress + '%';
    }, { passive: true });
  }

  /* ---- Header Scroll Effect ---- */
  var header = document.getElementById('header');
  if (header) {
    var lastScroll = 0;
    window.addEventListener('scroll', function () {
      var currentScroll = window.scrollY;
      if (currentScroll > 60) {
        header.classList.add('header--scrolled');
      } else {
        header.classList.remove('header--scrolled');
      }
      lastScroll = currentScroll;
    }, { passive: true });
  }

  /* ---- Countdown Timer ---- */
  var countDays = document.getElementById('countDays');
  var countHours = document.getElementById('countHours');
  var countMinutes = document.getElementById('countMinutes');
  var countSeconds = document.getElementById('countSeconds');

  if (countDays && countHours && countMinutes && countSeconds) {
    // Target: April 15, 2026 at 19:00 BRT (UTC-3)
    var targetDate = new Date('2026-04-15T22:00:00Z');

    function updateCountdown() {
      var now = new Date();
      var diff = targetDate - now;

      if (diff <= 0) {
        countDays.textContent = '00';
        countHours.textContent = '00';
        countMinutes.textContent = '00';
        countSeconds.textContent = '00';
        return;
      }

      var days = Math.floor(diff / (1000 * 60 * 60 * 24));
      var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((diff % (1000 * 60)) / 1000);

      countDays.textContent = days < 10 ? '0' + days : days;
      countHours.textContent = hours < 10 ? '0' + hours : hours;
      countMinutes.textContent = minutes < 10 ? '0' + minutes : minutes;
      countSeconds.textContent = seconds < 10 ? '0' + seconds : seconds;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  /* ---- Reveal on Scroll (Intersection Observer) ---- */
  var revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealElements.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  /* ---- FAQ Accordion ---- */
  var accordionHeaders = document.querySelectorAll('.accordion__header');
  accordionHeaders.forEach(function (header) {
    header.addEventListener('click', function () {
      var isExpanded = this.getAttribute('aria-expanded') === 'true';
      var content = this.nextElementSibling;

      // Close all
      accordionHeaders.forEach(function (h) {
        h.setAttribute('aria-expanded', 'false');
        var c = h.nextElementSibling;
        if (c) c.style.maxHeight = null;
      });

      // Toggle current
      if (!isExpanded) {
        this.setAttribute('aria-expanded', 'true');
        if (content) {
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      }
    });
  });

  /* ---- Sticky CTA ---- */
  var stickyCta = document.getElementById('stickyCta');
  if (stickyCta) {
    var heroSection = document.getElementById('hero');
    window.addEventListener('scroll', function () {
      if (!heroSection) return;
      var heroBottom = heroSection.getBoundingClientRect().bottom;
      if (heroBottom < 0) {
        stickyCta.classList.add('sticky-cta--visible');
        stickyCta.setAttribute('aria-hidden', 'false');
      } else {
        stickyCta.classList.remove('sticky-cta--visible');
        stickyCta.setAttribute('aria-hidden', 'true');
      }
    }, { passive: true });
  }

  /* ---- Cronograma Tabs ---- */
  var cronoTabs = document.querySelectorAll('.crono-tab');
  var cronoPanels = document.querySelectorAll('.crono-panel');

  if (cronoTabs.length && cronoPanels.length) {
    cronoTabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var targetId = this.getAttribute('data-tab');

        // Deactivate all tabs
        cronoTabs.forEach(function (t) {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });

        // Deactivate all panels
        cronoPanels.forEach(function (p) {
          p.classList.remove('active');
        });

        // Activate clicked tab
        this.classList.add('active');
        this.setAttribute('aria-selected', 'true');

        // Activate matching panel
        var panel = document.getElementById('panel-' + targetId);
        if (panel) {
          panel.classList.add('active');

          // Re-trigger reveal animations inside the newly visible panel
          var panelReveals = panel.querySelectorAll('.reveal:not(.is-visible)');
          if (panelReveals.length && 'IntersectionObserver' in window) {
            panelReveals.forEach(function (el) {
              observer.observe(el);
            });
          }
        }
      });
    });
  }

  /* ---- Smooth Scroll for anchor links ---- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        var headerHeight = header ? header.offsetHeight : 0;
        var targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    });
  });

})();
