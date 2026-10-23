/* =============================================
   Portfolio Main JavaScript
   Author: Bhavya
   ============================================= */

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== ACTIVE NAV LINK ON SCROLL =====
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

function updateActiveNav() {
  const scrollY = window.scrollY;
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
    if (navLink) {
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(l => l.classList.remove('active'));
        navLink.classList.add('active');
      }
    }
  });
}

window.addEventListener('scroll', updateActiveNav);

// ===== TYPEWRITER EFFECT =====
const typewriterEl = document.getElementById('typewriter');
const phrases = [
  'Full Stack Developer',
  'UI/UX Enthusiast',
  'Open Source Contributor',
  'Problem Solver',
  'Tech Explorer'
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typewriterTimeout;

function typeWriter() {
  const currentPhrase = phrases[phraseIndex];

  if (isDeleting) {
    typewriterEl.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typewriterEl.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
  }

  let speed = isDeleting ? 60 : 100;

  if (!isDeleting && charIndex === currentPhrase.length) {
    speed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    speed = 400;
  }

  typewriterTimeout = setTimeout(typeWriter, speed);
}

typeWriter();

// ===== SKILL PROGRESS BARS ANIMATION =====
const skillFills = document.querySelectorAll('.skill-fill');

function animateSkillBars(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      skillFills.forEach(fill => {
        const width = fill.getAttribute('data-width');
        fill.style.width = `${width}%`;
      });
      observer.unobserve(entry.target);
    }
  });
}

const skillsSection = document.getElementById('skills');
if (skillsSection) {
  const skillObserver = new IntersectionObserver(animateSkillBars, { threshold: 0.3 });
  skillObserver.observe(skillsSection);
}

// ===== SCROLL REVEAL ANIMATION =====
const revealElements = document.querySelectorAll(
  '.about-image-wrapper, .stat-card, .skill-category-card, .project-card, .contact-info-box, .contact-form, .section-header'
);

revealElements.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealElements.forEach(el => revealObserver.observe(el));

// ===== CONTACT FORM HANDLER =====
const contactForm = document.getElementById('contactForm');
const formAlert = document.getElementById('formAlert');
const btnText = document.getElementById('btnText');
const btnLoading = document.getElementById('btnLoading');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const message = document.getElementById('contactMessage').value.trim();

    if (!name || !email || !message) {
      showAlert('danger', '⚠️ Please fill in all required fields.');
      return;
    }

    if (!isValidEmail(email)) {
      showAlert('danger', '⚠️ Please enter a valid email address.');
      return;
    }

    // Show loading
    btnText.classList.add('d-none');
    btnLoading.classList.remove('d-none');

    // Simulate form submission
    setTimeout(() => {
      btnText.classList.remove('d-none');
      btnLoading.classList.add('d-none');
      showAlert('success', `✅ Thank you, ${name}! Your message has been sent successfully.`);
      contactForm.reset();
    }, 2000);
  });
}

function showAlert(type, message) {
  formAlert.className = `alert alert-${type} mt-3`;
  formAlert.textContent = message;
  formAlert.classList.remove('d-none');
  setTimeout(() => {
    formAlert.classList.add('d-none');
  }, 5000);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ===== SMOOTH SCROLL FOR NAV LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.offsetTop - offset;
      window.scrollTo({ top, behavior: 'smooth' });

      // Close mobile menu
      const navbarCollapse = document.getElementById('navbarNav');
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        const bsCollapse = window.bootstrap?.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) bsCollapse.hide();
      }
    }
  });
});

// ===== THEME TOGGLE (Feature Branch Addition) =====
function createThemeToggle() {
  const btn = document.createElement('button');
  btn.id = 'themeToggle';
  btn.innerHTML = '🌙';
  btn.title = 'Toggle Dark/Light Mode';
  document.body.appendChild(btn);

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'css/theme.css';
  document.head.appendChild(link);

  let isDark = true;
  btn.addEventListener('click', () => {
    isDark = !isDark;
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    btn.innerHTML = isDark ? '🌙' : '☀️';
  });
}

createThemeToggle();

// ===== CONSOLE EASTER EGG =====
console.log('%c👋 Hey there, developer!', 'font-size: 18px; color: #6366f1; font-weight: bold;');
console.log('%cPortfolio built by Bhavya using HTML5, CSS3, Bootstrap 5 & JavaScript', 'color: #a855f7');
console.log('%cModule 4 - Practical 1: Website Development & Version Control Using Git and GitHub', 'color: #06b6d4');
