/*
 * Portfolio configuration
 * Add your PUBLIC LinkedIn profile URL below to show the LinkedIn link.
 * You can also change the email address in index.html if it changes.
 */
const CONFIG = {
  linkedinUrl: '', // Example: 'https://www.linkedin.com/in/your-public-name/'
  email: 'sfmakiankonghoenoh@widener.edu'
};

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#primary-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  nav.classList.toggle('is-open', !isOpen);
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Open navigation');
    nav.classList.remove('is-open');
  });
});

const filters = document.querySelectorAll('.filter-button');
const projects = document.querySelectorAll('.project-card');
filters.forEach((button) => {
  button.addEventListener('click', () => {
    const selected = button.dataset.filter;
    filters.forEach((filter) => {
      const active = filter === button;
      filter.classList.toggle('is-active', active);
      filter.setAttribute('aria-pressed', String(active));
    });
    projects.forEach((project) => {
      project.hidden = selected !== 'all' && project.dataset.category !== selected;
    });
  });
});

const linkedinLink = document.querySelector('#linkedin-link');
if (linkedinLink && /^https:\/\/([\w-]+\.)?linkedin\.com\//i.test(CONFIG.linkedinUrl)) {
  linkedinLink.href = CONFIG.linkedinUrl;
  linkedinLink.hidden = false;
}

document.querySelector('#current-year').textContent = String(new Date().getFullYear());

const copyButton = document.querySelector('#copy-email');
const copyFeedback = document.querySelector('#copy-feedback');
copyButton?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(CONFIG.email);
    copyFeedback.textContent = 'Email copied! ✨';
  } catch (error) {
    copyFeedback.textContent = `Email: ${CONFIG.email}`;
  }
});

const revealElements = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('is-visible'));
}
