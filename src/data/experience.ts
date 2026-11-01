export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  duration: string;
  periodLabel: string;
  location: string;
  current?: boolean;
  responsibilities: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "netscale",
    company: "NetScale Software Private Limited",
    role: "Software Developer",
    duration: "August 2026 – Present",
    periodLabel: "CURRENT ROLE",
    location: "India",
    current: true,
    responsibilities: [
      "Work with cloud technologies, databases, authentication, deployment workflows, and modern software development practices.",
      "Collaborate with cross-functional teams to analyze requirements, troubleshoot issues, optimize application performance, and deliver production-ready features.",
      "Architect resilient backend microservices and maintain continuous integration and deployment pipelines.",
    ],
  },
  {
    id: "dizipay",
    company: "Dizipay InfoTech PVT. LTD.",
    role: "Software Developer",
    duration: "March 2026 – July 2026",
    periodLabel: "FINTECH ENGINEERING",
    location: "India",
    current: false,
    responsibilities: [
      "Developed and maintained scalable backend services using modern JavaScript/TypeScript practices.",
      "Implemented Redis caching and queue-based processing to improve performance and scalability under peak transaction volumes.",
      "Engineered automated provider failovers for mobile, DTH, and utility payment switches, maintaining high availability.",
    ],
  },
  {
    id: "codetech",
    company: "CodeTech IT Solutions Pvt. Ltd.",
    role: "Frontend Developer Intern",
    duration: "June 2024 – July 2024",
    periodLabel: "FRONTEND INTERN",
    location: "Remote",
    current: false,
    responsibilities: [
      "Built highly responsive React.js web interfaces, enhancing user experiences.",
      "Optimized client-side rendering speed and improved UI modularity by 25%.",
      "Developed interactive user dashboards with elegant modern layouts and states.",
    ],
  },
  {
    id: "unified-mentor",
    company: "Unified Mentor",
    role: "Full Stack Developer Intern",
    duration: "March 2024 – May 2024",
    periodLabel: "FULL STACK INTERN",
    location: "Remote",
    current: false,
    responsibilities: [
      "Engineered end-to-end MERN stack web applications from layout to deployment.",
      "Designed secure REST APIs with JWT authentication tokens and MongoDB handlers.",
      "Integrated complex database relationships and optimized query latency schemas.",
    ],
  },
];

