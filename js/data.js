/**
 * kaushalg.com.np — Portfolio Data
 * Centralised content for easy management.
 */

const portfolioData = {
  hero: {
    badge: "Available for work",
    title: {
      regular: "Full Stack",
      accent: "Developer"
    },
    subtitle: "Laravel & ReactJS · ERP Systems · Kathmandu, Nepal",
    description: "I'm <strong>Kaushal Ghimire</strong> — a detail-oriented developer with 2+ years of experience building scalable ERP systems and clean, performant web applications.",
    actions: [
      { text: "View My Work", link: "#portfolio", type: "primary" },
      { text: "Let's Talk", link: "#contact", type: "ghost" }
    ],
    stats: [
      { num: "10+", label: "Projects" },
      { num: "2+", label: "Years Exp." },
      { num: "5+", label: "Clients" }
    ],
    image: {
      url: "img/hero.png",
      alt: "Kaushal Ghimire — Full Stack Developer",
      badge: "Laravel · React"
    }
  },
  about: {
    tag: "About Me",
    title: "The Developer Behind the Code",
    lead: "Motivated and detail-oriented Software Developer specializing in Laravel and ReactJS Full Stack development. Recognized for strong problem-solving skills and commitment to clean, maintainable code.",
    body: "Based in Jorpati, Kathmandu, I focus on building seamless user experiences with strong backend foundations. I thrive on turning complex business requirements into elegant, scalable systems — particularly in ERP and enterprise contexts.",
    actions: [
      { text: "Download CV", link: "KAUSHAL_GHIMIRE_RESUME.pdf", icon: "download" },
      { text: "Send Email", link: "mailto:official.kaushalg@gmail.com", type: "ghost" }
    ],
    stats: [
      { num: "10+", label: "Projects Completed" },
      { num: "2+", label: "Years Experience" },
      { num: "5+", label: "Happy Clients" },
      { num: "12+", label: "Reviews" }
    ]
  },
  skills: {
    tag: "Expertise",
    title: "What I Work With",
    tags: [
      { name: "Laravel", primary: true },
      { name: "ReactJS", primary: false },
      { name: "PHP", primary: true },
      { name: "JavaScript (ES6+)", primary: false },
      { name: "REST API", primary: false },
      { name: "MySQL", primary: true },
      { name: "Node.js", primary: false },
      { name: "HTML / CSS / SCSS", primary: false },
      { name: "Git & GitHub", primary: false },
      { name: "Docker", primary: false },
      { name: "ERP Systems", primary: true },
      { name: "MongoDB", primary: false },
      { name: "Postman", primary: false },
      { name: "Bootstrap 5", primary: false }
    ],
    categories: [
      {
        id: "backend",
        title: "Backend",
        icon: "monitor",
        desc: "Laravel, PHP, Node.js, Express, REST API design, and scalable ERP architecture."
      },
      {
        id: "frontend",
        title: "Frontend",
        icon: "code",
        desc: "ReactJS SPA development, JavaScript ES6+, HTML/CSS/SCSS, pixel-perfect responsive interfaces."
      },
      {
        id: "database",
        title: "Database",
        icon: "database",
        desc: "MySQL/SQL schema design, query optimisation, MongoDB for document-based workloads."
      },
      {
        id: "devops",
        title: "DevOps",
        icon: "globe",
        desc: "Docker containers, Apache/LAMP stacks, XAMPP, Git version control, Postman API testing."
      }
    ]
  },
  projects: {
    tag: "Portfolio",
    title: "Selected Work",
    items: [
      {
        id: 1,
        title: "ERP System",
        stack: "Laravel · MySQL · ReactJS",
        image: "img/port1.jpg",
        links: { github: "#", live: "#" }
      },
      {
        id: 2,
        title: "Web Application",
        stack: "PHP · Bootstrap · MySQL",
        image: "img/port2.jpg",
        links: { github: "#", live: "#" }
      },
      {
        id: 3,
        title: "React SPA",
        stack: "ReactJS · Node.js · REST API",
        image: "img/port3.jpg",
        links: { github: "#", live: "#" }
      },
      {
        id: 4,
        title: "Business System",
        stack: "Laravel · Vue.js · MySQL",
        image: "img/port4.jpg",
        links: { github: "#", live: "#" }
      },
      {
        id: 5,
        title: "E-Commerce Module",
        stack: "PHP · JavaScript · Bootstrap",
        image: "img/port5.jpg",
        links: { github: "#", live: "#" }
      },
      {
        id: 6,
        title: "Admin Dashboard",
        stack: "ReactJS · Node.js · MongoDB",
        image: "img/port6.jpg",
        links: { github: "#", live: "#" }
      }
    ]
  },
  contact: {
    tag: "Get In Touch",
    title: "Let's Build Something Together",
    intro: "I'm open to freelance and long-term projects. Whether you have a system to build or a problem to solve — let's talk.",
    details: [
      { label: "Location", value: "Jorpati, Kathmandu, Nepal", icon: "map-pin" },
      { label: "Email", value: "official.kaushalg@gmail.com", link: "mailto:official.kaushalg@gmail.com", icon: "mail" },
      { label: "Phone", value: "+977 9804003501", link: "tel:+9779804003501", icon: "phone" },
      { label: "WhatsApp", value: "+977 9804003501", link: "https://wa.me/9779804003501", icon: "whatsapp" }
    ],
    social: [
      { name: "GitHub", link: "https://github.com/kaushalghimire", icon: "github" },
      { name: "LinkedIn", link: "https://www.linkedin.com/in/kaushalghimire", icon: "linkedin" },
      { name: "Twitter", link: "https://twitter.com/kaushaldev", icon: "twitter" },
      { name: "WhatsApp", link: "https://wa.me/9779804003501", icon: "whatsapp" }
    ]
  }
};
