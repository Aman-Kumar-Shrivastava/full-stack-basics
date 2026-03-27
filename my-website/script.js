/**
 * ============================================================
 *  data.js — All Portfolio Content
 * ============================================================
 *  HOW TO UPDATE:
 *  - Projects    : Push a new object to `projects`
 *  - Skills      : Add skill name strings to an existing category, or add a new category
 *  - Certificates: Push a new object to `certificates`
 *  - Experience  : Push a new object to `experience`
 *  - Achievements: Push a new object to `achievements`
 *  - Events      : Push a new object to `events`
 * ============================================================
 */

// ──────────────────────────────────────────── PROJECTS
const projects = [
  {
    title: "Multi-Function To-Do List",
    desc: "Feature-rich task manager with add, edit, delete, priority tagging, and local storage persistence. Fully responsive UI.",
    tech: ["HTML/CSS", "JavaScript"],
    github: "https://github.com/Aman-Kumar-Shrivastava",
    demo: "",
    image: "images/todo.webp" // Replace with real image path
  },
  {
    title: "Avengers Fan Website",
    desc: "Multi-page themed website featuring character profiles, responsive layout, and interactive UI elements built from scratch.",
    tech: ["HTML/CSS", "JavaScript"],
    github: "https://github.com/Aman-Kumar-Shrivastava",
    demo: "",
    image: "images/avengers.webp"
  },
  {
    title: "Portfolio Website",
    desc: "Personal developer portfolio showcasing projects, skills, and experience. Dark-theme, responsive, with modular code and a data-driven architecture.",
    tech: ["HTML/CSS", "JavaScript"],
    github: "https://github.com/Aman-Kumar-Shrivastava",
    demo: "",
    image: "images/portfolio.webp"
  },
  {
    title: "AQI Sensor Monitor",
    desc: "Air Quality Index monitoring system that reads sensor data, analyses pollution levels, and displays real-time AQI readings with threshold alerts.",
    tech: ["Python"],
    github: "https://github.com/Aman-Kumar-Shrivastava",
    demo: "",
    image: "images/aqi.webp"
  },
  {
    title: "Library Management System",
    desc: "Console application for managing book records — add, search, issue, return, and delete — with file handling for persistent data storage.",
    tech: ["C"],
    github: "https://github.com/Aman-Kumar-Shrivastava",
    demo: "",
    image: "images/library.webp"
  },
  {
    title: "Student Management System",
    desc: "Console-based system for managing student records with add, delete, update, and search operations using arrays and file handling.",
    tech: ["C"],
    github: "https://github.com/Aman-Kumar-Shrivastava",
    demo: "",
    image: "images/student.webp"
  }
];

// ──────────────────────────────────────────── SKILLS
// Items are plain strings — no percentages, just grouped tags
const skills = [
  {
    category: "Programming Languages",
    items: ["C", "Python", "Java"]
  },
  {
    category: "Web Development",
    items: ["HTML5", "CSS3", "JavaScript"]
  },
  {
    category: "Data Structures & Algorithms",
    items: ["Arrays", "Linked Lists", "Stacks & Queues", "Recursion", "Searching & Sorting"]
  },
  {
    category: "AI & Machine Learning",
    items: ["Machine Learning Basics", "AI Fundamentals", "Generative AI", "Kaggle"]
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "VS Code", "Kali Linux"]
  }
];

// ──────────────────────────────────────────── EXPERIENCE
const experience = [
  {
    role: "Member",
    org: "CodeGenX — Tech Club, DIT University",
    period: "March 2026 – Present",
    points: [
      "Participated in technical discussions and internal hackathons",
      "Collaborated with peers on development and problem-solving tasks",
      "Won 1st position in the club-organised hackathon"
    ]
  },
  {
    role: "Student Member",
    org: "IEEE — DIT University Chapter",
    period: "2025 – Present",
    points: [
      "Active member of the IEEE student branch",
      "Participated in technical seminars, workshops, and networking events"
    ]
  },
  {
    role: "Volunteer",
    org: "NSS — DIT University",
    period: "2024 – Present",
    points: [
      "Contributed to community outreach and campus social initiatives",
      "Participated in organised campaigns and awareness programmes"
    ]
  }
];

// ──────────────────────────────────────────── CERTIFICATES
const certificates = [
  {
    title: "Deloitte Virtual Internship",
    issuer: "Deloitte (via Forage)",
    date: "2025",
    image: "images/cert-deloitte.webp"
  },
  {
    title: "Generative AI",
    issuer: "Online Certification",
    date: "2025",
    image: "images/cert-genai.webp"
  },
  {
    title: "AI Detection",
    issuer: "Online Certification",
    date: "2024",
    image: "images/cert-aidetect.webp"
  },
  {
    title: "freeCodeCamp — Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "2024",
    image: "images/cert-fcc.webp"
  },
  {
    title: "Kali Linux",
    issuer: "Online Certification",
    date: "2024",
    image: "images/cert-kali.webp"
  },
  {
    title: "Git & GitHub",
    issuer: "Online Certification",
    date: "2024",
    image: "images/cert-git.webp"
  },
  {
    title: "Introduction to AI & Machine Learning",
    issuer: "Online Certification",
    date: "2024",
    image: "images/cert-introai.webp"
  },
  {
    title: "Idea Presentation — Participation",
    issuer: "DEAL, DRDO",
    date: "2024",
    image: "images/cert-drdo.webp"
  },
  {
    title: "1st Rank — Hackathon",
    issuer: "CodeGenX, DIT University",
    date: "2026",
    image: "images/cert-hackathon.webp"
  }
];

// ──────────────────────────────────────────── ACHIEVEMENTS
const achievements = [
  {
    title: "1st Position — CodeGenX Hackathon",
    desc: "Won first place in the hackathon organised by CodeGenX at DIT University.",
    color: "#f59e0b"
  },
  {
    title: "4th Position — DEAL DRDO Idea Presentation",
    desc: "Secured 4th position in the Idea Presentation Competition organised by DEAL (DRDO).",
    color: "#60a5fa"
  },
  {
    title: "LeetCode — 50+ Day Streak",
    desc: "Maintained a 50-day consecutive problem-solving streak on LeetCode.",
    color: "#a78bfa"
  },
  {
    title: "LeetCode — 50+ Problems Solved",
    desc: "Solved over 50 problems covering arrays, strings, recursion, and data structures.",
    color: "#22d3ee"
  }
];

// ──────────────────────────────────────────── EVENTS
const events = [
  {
    title: "Idea Representation — DEAL, DRDO",
    desc: "Presented an innovative project idea at the Defence Electronics Applications Laboratory (DEAL), organised by DRDO. Competed with teams from multiple institutions.",
    date: "2024"
  },
  {
    title: "Hands-on AI Automation + Kaggle Workshop",
    desc: "Attended a practical workshop covering AI automation techniques and Kaggle competition workflows, working with real-world datasets.",
    date: "2025"
  }
];


/**
 * ============================================================
 *  script.js — Portfolio Interactivity
 * ============================================================
 */

// ─── Theme Toggle ────────────────────────────────────────────
const themeBtn = document.getElementById("theme-toggle");
const body = document.body;

if (localStorage.getItem("theme") === "light") {
  body.classList.add("light");
  themeBtn.textContent = "Dark";
}

themeBtn.addEventListener("click", () => {
  body.classList.toggle("light");
  const isLight = body.classList.contains("light");
  themeBtn.textContent = isLight ? "Dark" : "Light";
  localStorage.setItem("theme", isLight ? "light" : "dark");
});

// ─── Typing Animation ────────────────────────────────────────
const typingTexts = [
  "Computer Science Student",
  "Aspiring AI/ML Engineer",
  "Web Developer",
  "Competitive Programmer",
  "Building the Future with Code"
];

let typeIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingEl = document.getElementById("typing-text");

function typeLoop() {
  const current = typingTexts[typeIndex];
  if (!isDeleting) {
    typingEl.textContent = current.slice(0, ++charIndex);
    if (charIndex === current.length) {
      isDeleting = true;
      setTimeout(typeLoop, 1800);
      return;
    }
  } else {
    typingEl.textContent = current.slice(0, --charIndex);
    if (charIndex === 0) {
      isDeleting = false;
      typeIndex = (typeIndex + 1) % typingTexts.length;
    }
  }
  setTimeout(typeLoop, isDeleting ? 40 : 80);
}
typeLoop();

// ─── Scroll Reveal ───────────────────────────────────────────
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 }
);

// Observe static reveal elements
document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

// ─── Active Nav Link on Scroll ───────────────────────────────
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === "#" + entry.target.id
          );
        });
      }
    });
  },
  { rootMargin: "-40% 0px -50% 0px" }
);
sections.forEach(s => navObserver.observe(s));

// ─── Navbar Scroll Effect ────────────────────────────────────
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 60);
});

// ─── Mobile Nav Toggle ───────────────────────────────────────
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  hamburger.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    hamburger.classList.remove("active");
  });
});

// ─── Render Projects ─────────────────────────────────────────
function getAllTechs() {
  const set = new Set();
  projects.forEach(p => p.tech.forEach(t => set.add(t)));
  return ["All", ...set];
}

function renderProjects(filter = "All") {
  const grid = document.getElementById("projects-grid");
  const filtered = filter === "All" ? projects : projects.filter(p => p.tech.includes(filter));
  grid.innerHTML = filtered.map(p => `
    <div class="project-card reveal">
      ${p.image ? `<img src="${p.image}" class="project-img" alt="${p.title}" loading="lazy" />` : ''}
      <div class="project-content">
        <div class="project-top">
          <h3>${p.title}</h3>
          <div class="project-links">
            ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener" class="btn-sm">GitHub</a>` : ""}
            ${p.demo  ? `<a href="${p.demo}"   target="_blank" rel="noopener" class="btn-sm btn-demo">Live</a>` : ""}
          </div>
        </div>
        <p>${p.desc}</p>
        <div class="tech-tags">
          ${p.tech.map(t => `<span class="tech-tag">${t}</span>`).join("")}
        </div>
      </div>
    </div>
  `).join("");

  grid.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));
}

function renderFilters() {
  const container = document.getElementById("filter-btns");
  getAllTechs().forEach(tech => {
    const btn = document.createElement("button");
    btn.className = "filter-btn" + (tech === "All" ? " active" : "");
    btn.textContent = tech;
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderProjects(tech);
    });
    container.appendChild(btn);
  });
}

// ─── Render Skills ───────────────────────────────────────────
function renderSkills() {
  const container = document.getElementById("skills-container");
  container.innerHTML = skills.map(cat => `
    <div class="skill-category reveal">
      <h3>${cat.category}</h3>
      <div class="skill-tags">
        ${cat.items.map(item => `<span class="skill-tag">${item}</span>`).join("")}
      </div>
    </div>
  `).join("");
  container.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));
}

// ─── Render Experience ───────────────────────────────────────
function renderExperience() {
  const container = document.getElementById("experience-timeline");
  container.innerHTML = experience.map(exp => `
    <div class="timeline-item reveal">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <span class="timeline-period">${exp.period}</span>
        <h3>${exp.role}</h3>
        <h4>${exp.org}</h4>
        <ul>
          ${exp.points.map(pt => `<li>${pt}</li>`).join("")}
        </ul>
      </div>
    </div>
  `).join("");
  container.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));
}

// ─── Render Certificates ─────────────────────────────────────
function renderCertificates() {
  const container = document.getElementById("certs-grid");
  container.innerHTML = certificates.map(cert => `
    <div class="cert-card reveal">
      ${cert.image ? `<img src="${cert.image}" class="cert-img" alt="${cert.title}" loading="lazy" />` : ''}
      <div class="cert-content">
        <p class="cert-issuer">${cert.issuer}</p>
        <h3>${cert.title}</h3>
        <span class="cert-date">${cert.date}</span>
      </div>
    </div>
  `).join("");
  container.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));
}

// ─── Render Achievements ─────────────────────────────────────
function renderAchievements() {
  const container = document.getElementById("achievements-grid");
  container.innerHTML = achievements.map(ach => `
    <div class="achievement-card reveal" style="--ach-color:${ach.color}">
      <h3>${ach.title}</h3>
      <p>${ach.desc}</p>
    </div>
  `).join("");
  container.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));
}

// ─── Render Events ───────────────────────────────────────────
function renderEvents() {
  const container = document.getElementById("events-grid");
  if (!container) return;
  container.innerHTML = events.map(ev => `
    <div class="event-card reveal">
      <h3>${ev.title}</h3>
      <p>${ev.desc}</p>
      <span class="event-date">${ev.date}</span>
    </div>
  `).join("");
  container.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));
}

// ─── Contact Form ────────────────────────────────────────────
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const toast = document.getElementById("toast");
  toast.classList.add("show");
  e.target.reset();
  setTimeout(() => toast.classList.remove("show"), 3500);
});

// ─── Initialise ──────────────────────────────────────────────
renderSkills();
renderFilters();
renderProjects();
renderExperience();
renderCertificates();
renderAchievements();
renderEvents();

// Observe all dynamically created reveal elements
document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));
