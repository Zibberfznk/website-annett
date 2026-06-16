// Sticky nav: reveal once the user scrolls past the hero area.
const nav = document.querySelector('.nav');
if (nav) {
  const onScroll = () => {
    nav.classList.toggle('nav--visible', window.scrollY > 160);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// Mobile nav: toggle the folded dropdown menu open/closed.
const navToggle = document.querySelector('.nav-toggle');
if (nav && navToggle) {
  const setMenu = (open) => {
    nav.classList.toggle('nav--open', open);
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
  };
  navToggle.addEventListener('click', () => {
    setMenu(!nav.classList.contains('nav--open'));
  });
  // Collapse the menu once a destination is chosen.
  nav.querySelectorAll('.nav-link, .nav-cta').forEach((link) => {
    link.addEventListener('click', () => setMenu(false));
  });
}

// Contact form: submit to Web3Forms via fetch so the visitor stays on the page.
const form = document.querySelector('.kontakt-form');
if (form) {
  const status = form.querySelector('.form-status');
  const submitBtn = form.querySelector('.form-submit');
  const btnLabel = submitBtn ? submitBtn.textContent : '';

  const setStatus = (message, type) => {
    if (!status) return;
    status.textContent = message;
    status.className = 'form-status' + (type ? ' form-status--' + type : '');
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    setStatus('Wird gesendet …', 'pending');
    if (submitBtn) submitBtn.disabled = true;

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('Vielen Dank! Ihre Nachricht wurde gesendet.', 'success');
        form.reset();
      } else {
        setStatus(data.message || 'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.', 'error');
      }
    } catch (err) {
      setStatus('Senden nicht möglich. Bitte prüfen Sie Ihre Verbindung und versuchen Sie es erneut.', 'error');
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = btnLabel;
      }
    }
  });
}
