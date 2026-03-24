/**
 * kaushalg.com.np — Rendering Engine
 * Injects data from data.js into the DOM.
 */

document.addEventListener('DOMContentLoaded', () => {
  renderHero();
  renderAbout();
  renderSkills();
  renderPortfolio();
  renderContact();
  initAnimations();
});

function renderHero() {
  const hero = portfolioData.hero;
  const section = document.getElementById('home');
  if (!section) return;

  section.innerHTML = `
    <div class="container hero-inner">
      <div class="hero-content reveal">
        <div class="hero-badge">
          <span class="hero-badge-dot"></span>
          ${hero.badge}
        </div>
        <h1 class="hero-title">
          ${hero.title.regular}<br>
          <span class="hero-title-accent">${hero.title.accent}</span>
        </h1>
        <p class="hero-subtitle">${hero.subtitle}</p>
        <p class="hero-desc">${hero.description}</p>
        <div class="hero-actions">
          ${hero.actions.map(a => `<a href="${a.link}" class="btn-${a.type}">${a.text}</a>`).join('')}
        </div>
        <div class="hero-stats">
          ${hero.stats.map(s => `
            <div class="hero-stat">
              <span class="hero-stat-num">${s.num}</span>
              <span class="hero-stat-label">${s.label}</span>
            </div>
          `).join('')}
        </div>
      </div>
      <div class="hero-image-wrap reveal float-anim">
        <img src="${hero.image.url}" alt="${hero.image.alt}" class="hero-image">
        <div class="hero-image-badge">
         <i class="fa-solid fa-code"></i> ${hero.image.badge}
        </div>
      </div>
    </div>
  `;
}

function renderAbout() {
  const about = portfolioData.about;
  const section = document.getElementById('about');
  if (!section) return;

  section.innerHTML = `
    <div class="container">
      <div class="section-header reveal">
        <span class="section-tag">${about.tag}</span>
        <h2 class="section-title">${about.title.replace('<br>', '<br>')}</h2>
      </div>
      <div class="about-grid">
        <div class="about-text reveal">
          <p class="about-lead">${about.lead}</p>
          <p class="about-body">${about.body}</p>
          <div class="about-actions" style="margin-top: 2rem; display: flex; gap: 1rem;">
            ${about.actions.map(a => `
              <a href="${a.link}" class="btn-${a.type || 'primary'}" ${a.icon === 'download' ? 'download' : ''}>
                ${a.icon === 'download' ? '<i class="fa-solid fa-download"></i> ' : ''}${a.text}
              </a>
            `).join('')}
          </div>
        </div>
        <div class="about-stats-grid reveal">
          ${about.stats.map(s => `
            <div class="stat-card">
              <span class="stat-num">${s.num}</span>
              <span class="stat-label">${s.label}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function renderSkills() {
  const skills = portfolioData.skills;
  const section = document.getElementById('skills');
  if (!section) return;

  section.innerHTML = `
    <div class="container">
      <div class="section-header reveal">
        <span class="section-tag">${skills.tag}</span>
        <h2 class="section-title">${skills.title}</h2>
      </div>
      <div class="skills-tags reveal" style="margin-bottom: 4rem;">
        ${skills.tags.map(t => `
          <span class="skill-tag ${t.primary ? 'skill-tag-primary' : ''}">${t.name}</span>
        `).join('')}
      </div>
      <div class="skills-grid">
        ${skills.categories.map(c => `
          <article class="skill-card reveal">
            <div class="skill-card-icon">
              <i class="fa-solid fa-${c.icon === 'monitor' ? 'display' : c.icon === 'code' ? 'code' : c.icon === 'database' ? 'database' : 'globe'} fa-2x"></i>
            </div>
            <h3 class="skill-card-title" style="font-family: var(--font-display); margin-bottom: 1rem;">${c.title}</h3>
            <p class="skill-card-desc" style="font-size: 0.9rem; color: var(--color-text-muted);">${c.desc}</p>
          </article>
        `).join('')}
      </div>
    </div>
  `;
}

function renderPortfolio() {
  const portfolio = portfolioData.projects;
  const section = document.getElementById('portfolio');
  if (!section) return;

  section.innerHTML = `
    <div class="container">
      <div class="section-header reveal">
        <span class="section-tag">${portfolio.tag}</span>
        <h2 class="section-title">${portfolio.title}</h2>
      </div>
      <div class="portfolio-grid">
        ${portfolio.items.map(p => `
          <article class="portfolio-card reveal">
            <img src="${p.image}" alt="${p.title}" class="portfolio-img">
            <div class="portfolio-overlay">
              <div class="portfolio-content">
                <h3 class="portfolio-title">${p.title}</h3>
                <p class="portfolio-stack">${p.stack}</p>
                <div class="portfolio-links" style="margin-top: 1rem; display: flex; gap: 0.5rem;">
                   <a href="${p.links.github}" style="color: white;"><i class="fa-brands fa-github fa-lg"></i></a>
                   <a href="${p.links.live}" style="color: white;"><i class="fa-solid fa-arrow-up-right-from-square fa-lg"></i></a>
                </div>
              </div>
            </div>
          </article>
        `).join('')}
      </div>
    </div>
  `;
}

function renderContact() {
  const contact = portfolioData.contact;
  const section = document.getElementById('contact');
  if (!section) return;

  section.innerHTML = `
    <div class="container">
      <div class="section-header reveal">
        <span class="section-tag">${contact.tag}</span>
        <h2 class="section-title">${contact.title}</h2>
      </div>
      <div class="contact-grid">
        <div class="contact-info reveal">
          <p class="contact-intro" style="font-size: 1.2rem; margin-bottom: 2rem;">${contact.intro}</p>
          <div class="contact-list">
            ${contact.details.map(d => `
              <div class="contact-item">
                <div class="contact-item-icon">
                  <i class="${d.icon === 'whatsapp' || d.icon === 'facebook' ? 'fa-brands' : 'fa-solid'} fa-${d.icon}"></i>
                </div>
                <div>
                  <div style="font-size: 0.7rem; text-transform: uppercase; color: var(--color-text-dim);">${d.label}</div>
                  <div style="font-weight: 600;">${d.value}</div>
                </div>
              </div>
            `).join('')}
          </div>
          <div class="social-links" style="display: flex; gap: 1.5rem; margin-top: 2rem;">
            ${contact.social.map(s => `
              <a href="${s.link}" target="_blank" class="social-link" style="color: var(--color-text-muted); font-size: 1.5rem;">
                <i class="fa-brands fa-${s.icon}"></i>
              </a>
            `).join('')}
          </div>
        </div>
        <div class="contact-form-wrap reveal">
          <form class="contact-form" action="mailto:${contact.details.find(d => d.label === 'Email').value}" method="post">
            <input type="text" placeholder="Your Name" class="form-input" required>
            <input type="email" placeholder="Email Address" class="form-input" required>
            <textarea placeholder="Your Message" class="form-textarea" rows="5" required></textarea>
            <button type="submit" class="btn-primary" style="width: 100%; justify-content: center; margin-bottom: 1rem;">
              Send Message <i class="fa-brands fa-whatsapp"></i>
            </button>
          </form>
          <div style="text-align: center; margin-top: 1rem;">
            <p style="color: var(--color-text-dim); font-size: 0.8rem; margin-bottom: 0.5rem;">Or reach out directly via</p>
            <a href="https://wa.me/9779804003501" class="btn-whatsapp" style="width: 100%; justify-content: center;">
              WhatsApp Chat <i class="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderFloatingWhatsApp() {
  const btn = document.createElement('a');
  btn.href = 'https://wa.me/9779804003501';
  btn.target = '_blank';
  btn.className = 'floating-whatsapp';
  btn.innerHTML = '<i class="fa-brands fa-whatsapp"></i>';
  document.body.appendChild(btn);
}

function initAnimations() {
  renderFloatingWhatsApp();
  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.1 });
  revealEls.forEach(el => observer.observe(el));

  // ── Navbar Scroll ───────────────────────────────────────────
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (nav) nav.classList.toggle('nav-scrolled', window.scrollY > 50);
  });

  // ── Mobile Menu Toggle ──────────────────────────────────────
  const toggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // Close on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }
}
