/* ==========================================================
   SPRING BOOT // LANDING — script.js (vanilla JS)
   ========================================================== */

   document.addEventListener('DOMContentLoaded', () => {
    initNavToggle();
    initBootTerminal();
    initScrollReveal();
    initStatsCounter();
    initGlitchHeadline();
  });
  
  /* ---------- Menú móvil ---------- */
  function initNavToggle() {
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');
    if (!toggle || !links) return;
  
    toggle.addEventListener('click', () => {
      const isOpen = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
    });
  
    links.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        links.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
  
  /* ---------- Terminal de arranque animada ---------- */
  function initBootTerminal() {
    const el = document.getElementById('bootLog');
    if (!el) return;
  
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
    const lines = [
      "  .   ____          _            __ _ _",
      " /\\\\ / ___'_ __ _ _(_)_ __  __ _ \\ \\ \\ \\",
      "( ( )\\___ | '_ | '_| | '_ \\/ _` | \\ \\ \\ \\",
      " \\\\/  ___)| |_)| | | | | || (_| |  ) ) ) )",
      "  '  |____| .__|_| |_|_| |_\\__, | / / / /",
      " =========|_|==============|___/=/_/_/_/",
      " :: Spring Boot ::                (v3.3.x)",
      "",
      "INFO  Starting Application on localhost",
      "INFO  No active profile set, falling back to default",
      "INFO  Tomcat initialized with port(s): 8080 (http)",
      "INFO  Starting service [Tomcat]",
      "INFO  Initializing Spring embedded WebApplicationContext",
      "INFO  Completed initialization in 412 ms",
      "INFO  Tomcat started on port(s): 8080 (http)",
      "INFO  Started Application in 1.038 seconds",
      "",
      " > listo. tu turno." ,
    ];
  
    if (prefersReducedMotion) {
      el.textContent = lines.join('\n');
      return;
    }
  
    let lineIndex = 0;
    let charIndex = 0;
    let output = '';
  
    function typeNext() {
      if (lineIndex >= lines.length) {
        // pausa y reinicia el ciclo, como un redeploy
        setTimeout(() => {
          output = '';
          lineIndex = 0;
          charIndex = 0;
          el.textContent = '';
          typeNext();
        }, 4000);
        return;
      }
  
      const currentLine = lines[lineIndex];
  
      if (charIndex <= currentLine.length) {
        el.textContent = output + currentLine.slice(0, charIndex);
        charIndex++;
        const speed = currentLine.startsWith(' ') && currentLine.includes('/') ? 4 : 12;
        setTimeout(typeNext, speed);
      } else {
        output += currentLine + '\n';
        el.textContent = output;
        lineIndex++;
        charIndex = 0;
        setTimeout(typeNext, currentLine === '' ? 60 : 90);
      }
    }
  
    typeNext();
  }
  
  /* ---------- Revelado al hacer scroll ---------- */
  function initScrollReveal() {
    const targets = document.querySelectorAll(
      '.feature-card, .roadmap__item, .code-window, .stat, .final-cta__box, .section__head'
    );
  
    targets.forEach(t => t.classList.add('reveal'));
  
    if (!('IntersectionObserver' in window)) {
      targets.forEach(t => t.classList.add('is-visible'));
      return;
    }
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  
    targets.forEach(t => observer.observe(t));
  }
  
  /* ---------- Contador animado de stats ---------- */
  function initStatsCounter() {
    const stats = document.querySelectorAll('.stat__value');
    if (!stats.length) return;
  
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
    const animate = (el) => {
      const target = parseInt(el.dataset.count, 10) || 0;
      if (prefersReducedMotion) {
        el.textContent = target;
        return;
      }
      let current = 0;
      const duration = 1200;
      const start = performance.now();
  
      function step(now) {
        const progress = Math.min((now - start) / duration, 1);
        current = Math.floor(progress * target);
        el.textContent = current;
        if (progress < 1) requestAnimationFrame(step);
        else el.textContent = target;
      }
      requestAnimationFrame(step);
    };
  
    if (!('IntersectionObserver' in window)) {
      stats.forEach(animate);
      return;
    }
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animate(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
  
    stats.forEach(s => observer.observe(s));
  }
  
  /* ---------- Micro-glitch en el titular al pasar el mouse ---------- */
  function initGlitchHeadline() {
    const el = document.querySelector('.hero__title');
    if (!el) return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;
  
    const original = el.innerHTML;
  
    el.addEventListener('mouseenter', () => {
      el.style.textShadow = '2px 0 var(--circuit-cyan), -2px 0 var(--signal-magenta)';
      setTimeout(() => { el.style.textShadow = ''; }, 140);
    });
  }