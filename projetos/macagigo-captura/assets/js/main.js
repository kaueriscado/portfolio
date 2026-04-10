document.addEventListener('DOMContentLoaded', function () {

    // ========================================
    // SECTION REVEAL ON SCROLL
    // ========================================

    var sectionObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                sectionObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    var sections = document.querySelectorAll(
        '.para-quien, .vivir-section, .resumen-section, .metodo-section, ' +
        '.antes-despues, .cronograma-section, .bono-section, .oferta-section, ' +
        '.posicionamiento-section, .resultados-section, .cta-final-section, ' +
        '.sobre-section, .faq-section'
    );

    sections.forEach(function (section) {
        section.classList.add('reveal');
        sectionObserver.observe(section);
    });

    // ========================================
    // STAGGERED CARD ANIMATIONS
    // ========================================

    var cardObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                var cards = entry.target.querySelectorAll('.modulo-card-cartoon, .chip-cartoon, .comparison-row, .crono-item, .faq-item');
                cards.forEach(function (card, index) {
                    setTimeout(function () {
                        card.classList.add('card-visible');
                    }, index * 100);
                });
                cardObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    var cardContainers = document.querySelectorAll('.modulos-grid, .clarity-chips, .comparison-table, .crono-timeline, .faq-list, .resultados-chips');
    cardContainers.forEach(function (container) {
        cardObserver.observe(container);
    });

    // ========================================
    // FAQ ACCORDION
    // ========================================

    var faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(function (item) {
        var question = item.querySelector('.faq-question');

        question.addEventListener('click', function () {
            var isActive = item.classList.contains('active');

            // Close all
            faqItems.forEach(function (other) {
                if (other !== item) {
                    other.classList.remove('active');
                    other.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
                }
            });

            // Toggle
            if (isActive) {
                item.classList.remove('active');
                question.setAttribute('aria-expanded', 'false');
            } else {
                item.classList.add('active');
                question.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // ========================================
    // SMOOTH SCROLL
    // ========================================

    var anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            var href = this.getAttribute('href');
            if (href === '#') { e.preventDefault(); return; }
            var target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ========================================
    // HERO ENTRANCE
    // ========================================

    var heroElements = document.querySelectorAll('.hero .hero-badges, .hero .hero-logo-wrap, .hero .hero-subtitle, .hero .hero-desc, .hero .btn-cartoon, .hero .progress-wrap');
    heroElements.forEach(function (el, i) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(25px)';
        setTimeout(function () {
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 150 + i * 120);
    });

    // ========================================
    // COUNTDOWN TIMER — March 3, 2026 midnight COT
    // ========================================

    function updateCountdown() {
        // March 3, 2026 00:00:00 Colombia Time (UTC-5)
        var target = new Date('2026-03-17T02:59:00Z').getTime();
        var now = Date.now();
        var diff = target - now;

        if (diff <= 0) {
            document.querySelectorAll('[data-days]').forEach(function (el) { el.textContent = '00'; });
            document.querySelectorAll('[data-hours]').forEach(function (el) { el.textContent = '00'; });
            document.querySelectorAll('[data-minutes]').forEach(function (el) { el.textContent = '00'; });
            document.querySelectorAll('[data-seconds]').forEach(function (el) { el.textContent = '00'; });
            return;
        }

        var days = Math.floor(diff / (1000 * 60 * 60 * 24));
        var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((diff % (1000 * 60)) / 1000);

        function pad(n) { return n < 10 ? '0' + n : n; }

        document.querySelectorAll('[data-days]').forEach(function (el) { el.textContent = pad(days); });
        document.querySelectorAll('[data-hours]').forEach(function (el) { el.textContent = pad(hours); });
        document.querySelectorAll('[data-minutes]').forEach(function (el) { el.textContent = pad(minutes); });
        document.querySelectorAll('[data-seconds]').forEach(function (el) { el.textContent = pad(seconds); });
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

    // ========================================
    // DOODLE FLOAT ANIMATION (parallax-light)
    // ========================================

    var doodles = document.querySelectorAll('.doodle');
    if (doodles.length) {
        window.addEventListener('scroll', function () {
            var scrollY = window.pageYOffset;
            doodles.forEach(function (d, i) {
                var speed = 0.03 + (i * 0.015);
                d.style.transform = 'translateY(' + (scrollY * speed) + 'px) rotate(' + (scrollY * 0.02) + 'deg)';
            });
        }, { passive: true });
    }

});
