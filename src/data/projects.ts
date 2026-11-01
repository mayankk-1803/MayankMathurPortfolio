export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  role: string;
  description: string;
  problem: string;
  solution: string;
  impact: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imagePath: string;
  featured?: boolean;
  imageFit?: "contain" | "cover";
}

export const projects: Project[] = [
  {
    id: "ai-saas",
    number: "01",
    title: "AI SAAS PLATFORM",
    category: "AI + Content Generation SaaS",
    role: "Full Stack & AI Developer",
    description:
      "A premium AI-powered SaaS platform for content and image generation, engineered for low-latency batch prompt dispatch and intelligent rate-limiting.",
    problem:
      "High computational latency for multi-turn AI calls, lack of client request caching, and potential service throttling under burst traffic.",
    solution:
      "Integrated the Groq API for rapid inference and built an in-memory Redis caching queue to parallelize model requests and eliminate redundant computations.",
    impact:
      "Handles 100+ requests daily, reduced backend API response times by ~40%, and containerized services with Docker for instant scaling.",
    technologies: ["Next.js", "React", "Groq API", "Redis", "Docker", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/mayankk-1803",
    liveUrl: "https://neurogenai-app.vercel.app",
    imagePath: "/images/projects/aisaasplatform.png",
    featured: true,
    imageFit: "contain",
  },
  {
    id: "irecharge",
    number: "02",
    title: "IRECHARGE FINTECH",
    category: "FinTech Recharge & Wallet Platform",
    role: "Full Stack Developer",
    description:
      "Production-ready FinTech platform processing mobile recharges, DTH, FASTag, and utility bill payments with real-time wallet tracking and provider failover.",
    problem:
      "Third-party payment gateways experienced frequent downtime with unhandled transaction states, slow bill queries, and zero automated retry mechanisms.",
    solution:
      "Architected a fault-tolerant MERN stack with smart multi-provider routing, Redis session caching, JWT token auth, and PM2 process management.",
    impact:
      "Deployed on AWS, Linux, aaPanel and Docker at irecharge.in with real user balances, instant cashbacks, and 99.9% recharge completion rate.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Redis", "Docker", "PM2", "AWS", "Linux"],
    githubUrl: "https://github.com/mayankk-1803",
    liveUrl: "https://irecharge.in",
    imagePath: "/images/projects/irecharge.png",
    featured: true,
  },
  {
    id: "realtime-chat",
    number: "03",
    title: "REAL-TIME CHAT ENGINE",
    category: "MERN + WebSockets Messaging",
    role: "Full Stack Engineer",
    description:
      "High-speed messaging application featuring real-time room communication, online presence alerts, and end-to-end encrypted chat persistence.",
    problem:
      "Traditional HTTP polling creates high server overhead, significant delivery latency, and inconsistent status indicators under multiple users.",
    solution:
      "Implemented bi-directional WebSockets via Socket.io with event dispatch queues and transactional MongoDB message collections.",
    impact:
      "Seamlessly powers concurrent chat rooms with message broadcast latency maintained under 200ms.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.io", "JWT", "Tailwind CSS"],
    githubUrl: "https://github.com/mayankk-1803",
    liveUrl: "https://fullstack-chat-app-580o.onrender.com/login",
    imagePath: "/images/projects/chatapp.png",
  },
  {
    id: "prime-origin",
    number: "04",
    title: "PRIME ORIGIN EXPORT",
    category: "Global Logistics Business Platform",
    role: "Frontend Architect",
    description:
      "High-performance international trade showcase platform designed to convert B2B enterprise leads and present global supply operations.",
    problem:
      "Original web portal had severe mobile rendering slowdowns, high bounce rates, and poor Google search indexing.",
    solution:
      "Engineered a Next.js server-rendered application with structured JSON-LD schemas, asset compression, and clean responsive typographic layouts.",
    impact:
      "Achieved an 80% improvement in Core Web Vitals and 100% fluid mobile responsiveness across all devices.",
    technologies: ["Next.js", "React.js", "Tailwind CSS", "TypeScript", "SEO Optimization"],
    githubUrl: "https://github.com/mayankk-1803",
    liveUrl: "https://prime-origin-exports.vercel.app/",
    imagePath: "/images/projects/primeoriginexport.png",
  },
  {
    id: "medimind",
    number: "05",
    title: "MEDIMIND AI CLINICAL",
    category: "Healthcare Diagnostic Assistant",
    role: "Lead Developer",
    description:
      "Intelligent healthcare support application providing symptom triage, medical report summarization, and interactive clinical consultations.",
    problem:
      "Patients frequently struggle to comprehend complex diagnostic reports or identify urgency levels for common health symptoms.",
    solution:
      "Developed an interactive conversational triage engine utilizing custom clinical prompt pipelines and Groq language models.",
    impact:
      "Provides structured, easy-to-understand medical insights and preliminary symptom analysis in seconds.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Groq API", "Tailwind CSS"],
    githubUrl: "https://github.com/mayankk-1803",
    liveUrl: "https://vitamedi-mind.vercel.app/",
    imagePath: "/images/projects/medimind.png",
  },
];
