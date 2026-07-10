const projects = [
  {
    title: 'Customer Segmentation ML',
    category: 'Data Analysis',
    desc: 'A machine learning workflow that turns raw customer data into actionable marketing segments using clear model evaluation and visual storytelling.',
    longDesc: 'The project combined exploratory analysis, feature engineering, and several classification models to identify buying patterns, then packaged the result into a simple report and notebook workflow.',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'ML'],
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80'
    ],
    github: '#',
    demo: '#'
  },
  {
    title: 'Personal Portfolio Website',
    category: 'Web Development',
    desc: 'A refined portfolio experience with a polished interface, theme switching, and a Node.js/Express backend for contact handling.',
    longDesc: 'This project focused on user experience and maintainability, pairing an elegant frontend with a lightweight API and accessible interactions.',
    tags: ['Node.js', 'Express', 'HTML/CSS', 'JS'],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Express'],
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
    screenshots: [
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80'
    ],
    github: '#',
    demo: '#'
  },
  {
    title: 'Java OOP Library System',
    category: 'Other',
    desc: 'A modular library management system that uses inheritance, interfaces, and file handling to model real-world records.',
    longDesc: 'The system covers user accounts, inventory tracking, borrowing rules, and error handling in a structured object-oriented design.',
    tags: ['Java', 'OOP', 'Exception Handling'],
    technologies: ['Java', 'OOP', 'File I/O'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
    screenshots: ['https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Neural Network From Scratch',
    category: 'Data Analysis',
    desc: 'A custom neural network built with NumPy that demonstrates forward propagation, backpropagation, and activation tuning from the ground up.',
    longDesc: 'This deep learning exercise focused on understanding the mechanics behind gradient-based optimization rather than relying on a framework.',
    tags: ['Python', 'NumPy', 'Deep Learning'],
    technologies: ['Python', 'NumPy', 'Neural Networks'],
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80',
    screenshots: ['https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Data Viz Dashboard',
    category: 'UI/UX Design',
    desc: 'An interactive dashboard that lets users explore tabular data through filters, charts, and quick summaries.',
    longDesc: 'The interface prioritizes clarity, responsive layout, and thoughtful interactions so analysis feels approachable and fast.',
    tags: ['JavaScript', 'Chart.js', 'CSS Grid'],
    technologies: ['JavaScript', 'Chart.js', 'CSS Grid'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    screenshots: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Auth REST API',
    category: 'Web Development',
    desc: 'A secure REST API with JWT auth, password hashing, and role-based access controls for professional applications.',
    longDesc: 'The backend includes validation, middleware, and structured error handling so the API remains reliable under real-world use.',
    tags: ['Node.js', 'Express', 'JWT', 'REST'],
    technologies: ['Node.js', 'Express', 'JWT', 'bcrypt'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
    screenshots: ['https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80'],
    github: '#',
    demo: '#'
  }
];

const articles = [
  {
    title: 'Designing accessible forms without losing polish',
    summary: 'Practical tips for reducing friction while improving clarity and keyboard support.',
    meta: 'Accessibility • 6 min read',
    content: 'Accessible forms are easier to maintain when labels, errors, and focus states are treated as first-class UI requirements. Small interactions such as inline validation and descriptive error copy make a big difference.'
  },
  {
    title: 'Optimizing web performance with lightweight assets',
    summary: 'How to cut loading time by improving resource delivery and reducing render cost.',
    meta: 'Performance • 5 min read',
    content: 'A faster site is built through careful choices around image size, lazy loading, and code organization. These adjustments improve perceived responsiveness and keep the experience smooth on weaker devices.'
  },
  {
    title: 'Why modular JavaScript makes portfolios easier to extend',
    summary: 'A simple structure that keeps interactive features easy to update as your site grows.',
    meta: 'JavaScript • 4 min read',
    content: 'Breaking UI logic into focused functions helps maintain clarity over time. This pattern makes debugging and feature requests faster while keeping the code readable for future changes.'
  }
];

const skills = [
  { name: 'JavaScript (ES6+)', level: 85 },
  { name: 'Node.js / Express', level: 80 },
  { name: 'Python / Scikit-learn', level: 78 },
  { name: 'HTML5 / CSS3', level: 90 },
  { name: 'Java / OOP', level: 70 },
  { name: 'Git / GitHub', level: 82 }
];

const testimonials = [
  {
    name: 'Yasir Ali',
    role: 'Fellow CS Student, AWKUM',
    quote: 'Abdullah breaks down tricky algorithms in a way that actually makes sense. Working with him on projects always pushes the quality bar up.'
  },
  {
    name: 'Sara Khan',
    role: 'Project Collaborator',
    quote: 'His attention to detail on the backend APIs saved us a ton of debugging time. Clean code, clear commits, always on time.'
  },
  {
    name: 'Dr. Imran Shah',
    role: 'Course Instructor',
    quote: 'One of the more curious students I\'ve taught — consistently goes beyond the assignment to understand the why behind the theory.'
  }
];

let currentTestimonial = 0;

function renderSkills() {
  const wrap = document.getElementById('skills-bars');
  if (!wrap) return;
  skills.forEach((s, i) => {
    const row = document.createElement('div');
    row.className = 'skill-bar-row fade-up';
    row.style.transitionDelay = `${i * 60}ms`;
    row.innerHTML = `
      <div class="skill-bar-top">
        <span class="skill-bar-name">${s.name}</span>
        <span class="skill-bar-pct">${s.level}%</span>
      </div>
      <div class="skill-bar-track">
        <div class="skill-bar-fill" data-level="${s.level}" style="width:0%"></div>
      </div>
    `;
    wrap.appendChild(row);
  });
}

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const fill = entry.target.querySelector('.skill-bar-fill');
      if (fill) fill.style.width = `${fill.dataset.level}%`;
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

function observeSkillBars() {
  document.querySelectorAll('.skill-bar-row').forEach((el) => skillObserver.observe(el));
}

function renderTestimonials() {
  const track = document.getElementById('testimonials-track');
  const dotsWrap = document.getElementById('testimonials-dots');
  if (!track || !dotsWrap) return;

  testimonials.forEach((t) => {
    const card = document.createElement('div');
    card.className = 'testimonial-card';
    card.innerHTML = `
      <p class="testimonial-quote">"${t.quote}"</p>
      <div class="testimonial-author">
        <div class="testimonial-avatar">${t.name.split(' ').map((n) => n[0]).join('')}</div>
        <div>
          <div class="testimonial-name">${t.name}</div>
          <div class="testimonial-role">${t.role}</div>
        </div>
      </div>
    `;
    track.appendChild(card);
  });

  testimonials.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = `testimonial-dot${i === 0 ? ' active' : ''}`;
    dot.setAttribute('aria-label', `Go to testimonial ${i + 1}`);
    dot.addEventListener('click', () => goToTestimonial(i));
    dotsWrap.appendChild(dot);
  });
}

function goToTestimonial(index) {
  const track = document.getElementById('testimonials-track');
  if (!track) return;
  currentTestimonial = (index + testimonials.length) % testimonials.length;
  track.style.transform = `translateX(-${currentTestimonial * 100}%)`;
  document.querySelectorAll('.testimonial-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === currentTestimonial);
  });
}

function startTestimonialAutoplay() {
  window.setInterval(() => goToTestimonial(currentTestimonial + 1), 6000);
}

function initThemeToggle() {
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;
  const saved = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);

  toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
}

function initActiveSectionNav() {
  const links = document.querySelectorAll('.nav-links a[data-section]');
  const sections = Array.from(links)
    .map((link) => document.getElementById(link.dataset.section))
    .filter(Boolean);

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        links.forEach((link) => link.classList.toggle('active', link.dataset.section === id));
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });

  sections.forEach((section) => navObserver.observe(section));
}

function renderProjects(filter = 'All') {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  grid.innerHTML = '';

  const visibleProjects = filter === 'All'
    ? projects
    : projects.filter((project) => project.category === filter);

  visibleProjects.forEach((project, index) => {
    const card = document.createElement('article');
    card.className = 'project-card fade-up';
    card.style.transitionDelay = `${index * 80}ms`;
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `View details for ${project.title}`);
    card.dataset.category = project.category;

    const tagsHTML = project.tags.map((tag) => `<span class="tag">${tag}</span>`).join('');

    card.innerHTML = `
      <div class="project-image">
        <img src="${project.image}" alt="${project.title}" loading="lazy" decoding="async" />
      </div>
      <div class="project-body">
        <h3>${project.title}</h3>
        <p>${project.desc}</p>
        <div class="project-tags">${tagsHTML}</div>
        <div class="project-actions">
          <a href="${project.demo}" target="_blank" rel="noreferrer" class="btn-demo">Live Demo</a>
          <a href="${project.github}" target="_blank" rel="noreferrer" class="btn-github">GitHub</a>
        </div>
      </div>
    `;

    card.addEventListener('click', () => openProjectModal(project));
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openProjectModal(project);
      }
    });

    grid.appendChild(card);
  });

  observeAll();
}

function renderArticles() {
  const grid = document.getElementById('articles-grid');
  if (!grid) return;

  articles.forEach((article) => {
    const card = document.createElement('article');
    card.className = 'article-card fade-up';
    card.innerHTML = `
      <div class="article-meta">${article.meta}</div>
      <h3>${article.title}</h3>
      <p>${article.summary}</p>
      <button class="btn-ghost article-link" type="button" data-expanded="false">Read More</button>
      <p class="article-content" hidden>${article.content}</p>
    `;

    const toggle = card.querySelector('.article-link');
    const content = card.querySelector('.article-content');
    toggle.addEventListener('click', () => {
      const expanded = toggle.dataset.expanded === 'true';
      toggle.dataset.expanded = expanded ? 'false' : 'true';
      toggle.textContent = expanded ? 'Read More' : 'Show Less';
      content.hidden = expanded;
    });

    grid.appendChild(card);
  });
}

function openProjectModal(project) {
  const modal = document.getElementById('project-modal');
  const content = document.getElementById('modal-content');
  if (!modal || !content) return;

  const slides = (project.screenshots || [project.image]).map((src) => `<img class="modal-image" src="${src}" alt="${project.title} screenshot" loading="lazy" decoding="async" />`).join('');

  content.innerHTML = `
    <div class="modal-content">
      ${slides}
      <h3 id="modal-title">${project.title}</h3>
      <p>${project.longDesc}</p>
      <div class="modal-meta">${project.technologies.map((tech) => `<span>${tech}</span>`).join('')}</div>
      <div class="modal-links">
        <a href="${project.demo}" target="_blank" rel="noreferrer">Live Demo</a>
        <a href="${project.github}" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </div>
  `;

  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  if (!modal) return;
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function setupProjectFilters() {
  document.querySelectorAll('.filter-btn').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
      renderProjects(button.dataset.filter || 'All');
    });
  });
}

function validateField(field, message) {
  const error = document.getElementById(`${field.id}-error`);
  if (!error) return true;

  if (message) {
    error.textContent = message;
    field.classList.add('is-invalid');
    return false;
  }

  error.textContent = '';
  field.classList.remove('is-invalid');
  return true;
}

function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  const submitBtn = document.getElementById('submit-btn');
  if (!contactForm || !formStatus || !submitBtn) return;

  const fields = {
    name: document.getElementById('name'),
    email: document.getElementById('email'),
    message: document.getElementById('message')
  };

  const validateForm = () => {
    const nameOk = validateField(fields.name, fields.name.value.trim() ? '' : 'Please enter your name.');
    const emailOk = validateField(fields.email, fields.email.value.trim() ? '' : 'Please enter your email.');
    const messageOk = validateField(fields.message, fields.message.value.trim() ? '' : 'Please enter a short message.');

    if (fields.email.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.value.trim())) {
      validateField(fields.email, 'Please enter a valid email address.');
      return false;
    }

    if (fields.message.value.trim() && fields.message.value.trim().length < 10) {
      validateField(fields.message, 'Message must be at least 10 characters.');
      return false;
    }

    return nameOk && emailOk && messageOk;
  };

  Object.values(fields).forEach((field) => {
    field.addEventListener('input', () => {
      validateForm();
    });
  });

  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!validateForm()) {
      formStatus.textContent = 'Please fix the highlighted fields and try again.';
      formStatus.className = 'form-status error';
      return;
    }

    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    const body = {
      name: fields.name.value.trim(),
      email: fields.email.value.trim(),
      message: fields.message.value.trim()
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      const data = await response.json();

      if (response.ok) {
        formStatus.textContent = '✓ Message sent! I will get back to you soon.';
        formStatus.className = 'form-status success';
        contactForm.reset();
        Object.values(fields).forEach((field) => field.classList.remove('is-invalid'));
        document.querySelectorAll('.field-error').forEach((error) => {
          error.textContent = '';
        });
      } else {
        throw new Error(data.message || 'Something went wrong.');
      }
    } catch (error) {
      formStatus.textContent = `✗ ${error.message}`;
      formStatus.className = 'form-status error';
    } finally {
      submitBtn.textContent = 'Send Message';
      submitBtn.disabled = false;
    }
  });
}

function initNavigation() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (!navbar || !hamburger || !navLinks) return;

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  document.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

function observeAll() {
  document.querySelectorAll('.fade-up, .project-card, .skill-card').forEach((element) => {
    observer.observe(element);
  });
}

function addFadeUps() {
  document.querySelectorAll('.section-label, .section-title, .about-text, .about-card, .contact-sub, .contact-form').forEach((element) => {
    element.classList.add('fade-up');
  });
}

function initModal() {
  const modal = document.getElementById('project-modal');
  const closeButton = document.getElementById('modal-close');
  if (!modal || !closeButton) return;

  closeButton.addEventListener('click', closeProjectModal);
  modal.addEventListener('click', (event) => {
    if (event.target.hasAttribute('data-close-modal')) closeProjectModal();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('is-open')) closeProjectModal();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initNavigation();
  initModal();
  initContactForm();
  setupProjectFilters();
  renderProjects();
  renderArticles();
  renderSkills();
  renderTestimonials();
  addFadeUps();
  observeAll();
  observeSkillBars();
  initActiveSectionNav();
  startTestimonialAutoplay();
});
