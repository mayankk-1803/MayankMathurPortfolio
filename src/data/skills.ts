export interface SkillCategory {
  category: string;
  items: string[];
}

export const biography = {
  name: "Mayank Mathur",
  title: "SOFTWARE DEVELOPER",
  headline: "FULL STACK ENGINEERING · FINTECH · AI · CLOUD",
  shortIntro:
    "I build scalable web and mobile applications, production-ready backend systems, and modern digital experiences.",
  summary:
    "Full Stack & React Native Developer experienced in building scalable web and mobile applications using React.js, React Native, Node.js, Express.js, MongoDB, TypeScript, and JavaScript. Proficient in REST APIs, authentication, Docker, Redis, AWS, and modern DevOps practices.",
  currentRole: "Software Developer @ NetScale Software",
  education: {
    degree: "B.Tech Computer Science",
    institution: "IIMT Engineering College (AKTU)",
    period: "2022–2026",
    status: "Graduated",
  },
  contact: {
    email: "mayankmathur183@gmail.com",
    github: "https://github.com/mayankk-1803",
    linkedin: "https://www.linkedin.com/in/mayank-mathur-5095262aa/",
    resumeUrl: "/resume/Mayank-Mathur-Resume.pdf",
    location: "India",
  },
};

export const expertiseAreas: string[] = [
  "Full Stack Development",
  "FinTech Development",
  "React Native Development",
  "Backend Architecture",
  "API Development",
  "AI API Integrations",
  "Cloud and DevOps",
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3 / Sass", "SQL"],
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js (App Router)", "React Native", "Tailwind CSS", "Redux Toolkit", "Framer Motion"],
  },
  {
    category: "Backend & Systems",
    items: ["Node.js", "Express.js", "REST APIs", "Socket.io", "JWT Auth", "Microservices"],
  },
  {
    category: "Databases & Caching",
    items: ["MongoDB", "Mongoose", "Redis", "PostgreSQL"],
  },
  {
    category: "Cloud & DevOps",
    items: ["Docker", "AWS (EC2, S3)", "Linux / Bash", "PM2", "aaPanel", "CI/CD Workflows", "Git / GitHub"],
  },
];

