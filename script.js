// Sticky nav: reveal once the user scrolls past the hero area.
const nav = document.querySelector('.nav');
if (nav) {
  const onScroll = () => {
    nav.classList.toggle('nav--visible', window.scrollY > 160);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// Contact form: preview-only handler (no backend wired up yet).
const form = document.querySelector('.kontakt-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Vielen Dank! Dies ist eine Vorschau – das Formular ist noch nicht aktiv.');
  });
}
