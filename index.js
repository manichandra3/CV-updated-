/* ============================================================
   index.js — Zero-dependency interactions
   ============================================================ */

(function () {
    'use strict';

    // ── Scroll Progress Bar ──────────────────────────────────
    const scrollProgress = document.getElementById('scrollProgress');

    function updateScrollProgress() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        scrollProgress.style.width = percent + '%';
    }

    // ── Navbar Scroll State ──────────────────────────────────
    const navHeader = document.getElementById('navHeader');
    let lastScroll = 0;

    function handleNavScroll() {
        const current = window.scrollY;
        if (current > 40) {
            navHeader.classList.add('scrolled');
        } else {
            navHeader.classList.remove('scrolled');
        }
        lastScroll = current;
    }

    // Combine scroll handlers for performance
    function onScroll() {
        updateScrollProgress();
        handleNavScroll();
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // init

    // ── Mobile Menu ──────────────────────────────────────────
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    navToggle.addEventListener('click', function () {
        const isOpen = navMenu.classList.toggle('open');
        navToggle.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu when clicking a link
    navMenu.querySelectorAll('.nav-link').forEach(function (link) {
        link.addEventListener('click', function () {
            navMenu.classList.remove('open');
            navToggle.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        });
    });

    // Close menu on overlay click
    navMenu.addEventListener('click', function (e) {
        if (e.target === navMenu) {
            navMenu.classList.remove('open');
            navToggle.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    });

    // ── Smooth Scroll ────────────────────────────────────────
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var targetId = this.getAttribute('href');
            if (targetId === '#') return;
            var target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                var offset = parseInt(getComputedStyle(document.documentElement)
                    .getPropertyValue('--nav-height')) || 72;
                window.scrollTo({
                    top: target.offsetTop - offset,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ── Intersection Observer Reveal ─────────────────────────
    var reveals = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window) {
        var revealObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.12,
            rootMargin: '0px 0px -40px 0px'
        });

        reveals.forEach(function (el, i) {
            el.style.transitionDelay = (i % 4) * 0.08 + 's';
            revealObserver.observe(el);
        });
    } else {
        // Fallback: show everything
        reveals.forEach(function (el) { el.classList.add('visible'); });
    }

    // ── Typewriter Effect ────────────────────────────────────
    var typewriterEl = document.getElementById('typewriter');
    var phrases = [
        'intelligent systems.',
        'scalable backends.',
        'AI-powered apps.',
        'clean REST APIs.',
        'real-time games.'
    ];
    var phraseIndex = 0;
    var charIndex = 0;
    var isDeleting = false;
    var typingSpeed = 80;

    function type() {
        var current = phrases[phraseIndex];

        if (isDeleting) {
            typewriterEl.textContent = current.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typewriterEl.textContent = current.substring(0, charIndex + 1);
            charIndex++;
        }

        var delay = typingSpeed;

        if (!isDeleting && charIndex === current.length) {
            delay = 2000; // pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            delay = 400; // pause before next word
        } else if (isDeleting) {
            delay = 40; // faster delete
        }

        setTimeout(type, delay);
    }

    // Start typing after a short delay
    setTimeout(type, 1200);

    // ── Active Nav Link Highlighting ─────────────────────────
    var sections = document.querySelectorAll('section[id]');
    var navLinks = document.querySelectorAll('.nav-link');

    function highlightNav() {
        var scrollY = window.scrollY + 120;

        sections.forEach(function (section) {
            var top = section.offsetTop;
            var height = section.offsetHeight;
            var id = section.getAttribute('id');

            if (scrollY >= top && scrollY < top + height) {
                navLinks.forEach(function (link) {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNav, { passive: true });
    highlightNav();

})();
