// Email address that contact-form enquiries are sent to
const CONTACT_EMAIL = 'info@agutechlabs.com';

document.documentElement.classList.add('js');

/* ---------- Mobile navigation ---------- */
const header = document.querySelector('.header');
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.primary-nav');

function setMenu(open) {
  nav.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
}

toggle.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
nav.addEventListener('click', (e) => {
  if (e.target.closest('a')) setMenu(false);
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') setMenu(false);
});

/* ---------- Header shadow on scroll ---------- */
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ---------- Theme toggle ---------- */
const root = document.documentElement;
const media = window.matchMedia('(prefers-color-scheme: dark)');
const currentTheme = () => root.dataset.theme || (media.matches ? 'dark' : 'light');

document.querySelector('.theme-toggle').addEventListener('click', () => {
  const next = currentTheme() === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  try { localStorage.setItem('theme', next); } catch (e) { /* storage unavailable */ }
});

/* ---------- Active nav link ---------- */
const links = [...document.querySelectorAll('.nav-links a')];
const sections = links
  .map((a) => document.querySelector(a.getAttribute('href')))
  .filter(Boolean);

if ('IntersectionObserver' in window) {
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === `#${entry.target.id}`));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach((s) => spy.observe(s));
}

/* ---------- Scroll reveal ---------- */
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const revealer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  revealEls.forEach((el) => revealer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('visible'));
}

/* ---------- Animated stat counters ---------- */
const counters = document.querySelectorAll('[data-count]');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function runCounter(el) {
  const target = Number(el.dataset.count);
  if (reduceMotion) { el.textContent = target; return; }
  const start = performance.now();
  const duration = 1400;
  const step = (now) => {
    const p = Math.min((now - start) / duration, 1);
    el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

if ('IntersectionObserver' in window) {
  const counterObs = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      runCounter(entry.target);
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.6 });
  counters.forEach((c) => counterObs.observe(c));
} else {
  counters.forEach((c) => { c.textContent = c.dataset.count; });
}

/* ---------- Project filter ---------- */
const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.project-card');

filters.forEach((btn) => {
  btn.addEventListener('click', () => {
    const cat = btn.dataset.filter;
    filters.forEach((b) => {
      b.classList.toggle('active', b === btn);
      b.setAttribute('aria-pressed', String(b === btn));
    });
    cards.forEach((card) => {
      const show = cat === 'all' || card.dataset.category === cat;
      card.classList.toggle('hidden', !show);
      if (show) card.classList.add('visible');
    });
  });
});

/* ---------- Contact form ---------- */
// Opens the visitor's email app with the message pre-filled.
// To receive messages without an email app, point the form at a service
// like Formspree or Netlify Forms instead.
const form = document.querySelector('.contact-form');
const statusEl = form.querySelector('.form-status');

document.querySelectorAll('.contact-email').forEach((a) => {
  a.href = `mailto:${CONTACT_EMAIL}`;
  a.textContent = CONTACT_EMAIL;
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const fields = [...form.querySelectorAll('input, textarea')];
  let firstInvalid = null;

  fields.forEach((f) => {
    const valid = f.checkValidity() && f.value.trim() !== '';
    f.setAttribute('aria-invalid', String(!valid));
    if (!valid && !firstInvalid) firstInvalid = f;
  });

  if (firstInvalid) {
    statusEl.textContent = 'Please fill in all fields with a valid email address.';
    statusEl.className = 'form-status error';
    firstInvalid.focus();
    return;
  }

  const { name, email, message } = Object.fromEntries(new FormData(form));
  const subject = encodeURIComponent(`Project enquiry from ${name}`);
  const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

  statusEl.textContent = 'Thanks! Your email app should open to send the message.';
  statusEl.className = 'form-status success';
  form.reset();
});

/* ---------- Footer year ---------- */
document.getElementById('year').textContent = new Date().getFullYear();
