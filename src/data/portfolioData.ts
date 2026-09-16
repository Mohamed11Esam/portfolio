export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'ai' | 'fullstack' | 'backend' | 'realtime';
  description: string;
  highlights: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl: string;
  statusBadge: string;
  featured?: boolean;
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  tech: string[];
  idealFor: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  type: string;
  highlights: string[];
  tech: string[];
}

export const PROFILE = {
  name: "Mohamed Esam",
  role: "Software Engineer | Full-Stack Developer",
  tagline: "I architect modern frontends, scalable backends, and production AI SaaS systems with real enterprise impact.",
  bio: "Software Engineer with professional production experience developing enterprise ERP systems, cloud collaboration platforms, and intelligent AI architectures. Skilled in React, Next.js, Node.js, NestJS, Python, FastAPI, and Frappe Framework. Experienced in integrating enterprise payment gateways (Stripe, Paymob), cloud storage (AWS S3), and live collaboration tools.",
  status: "Available for Full-Stack & Frontend Contracts",
  location: "Sheikh Zayed, Giza, Egypt (Remote Worldwide)",
  phone: "+20 109 842 1112",
  email: "mohamedesam123443211234@gmail.com",
  github: "https://github.com/Mohamed11Esam",
  linkedin: "https://linkedin.com/in/mohamedesam9",
  resumeUrl: "/Mohamed_Esam_Resume.pdf",
  education: {
    degree: "Bachelor of Computer Science",
    university: "Misr University for Science and Technology (MUST)",
    graduation: "Graduated: July 2026",
    coursework: "Data Structures & Algorithms, Database Systems, Operating Systems, Computer Networks, Software Engineering, AI, Web Development, Cloud Computing"
  },
  credentials: [
    { title: "Full Stack Web Development Diploma", issuer: "Route Academy" },
    { title: "2x ICPC / CPC Programming Competition Participant", issuer: "ICPC Egypt / ECPC" }
  ],
  metrics: [
    { label: "Frontend Engineering", value: "React 19 • Next.js" },
    { label: "AI RAG Integrations", value: "FastAPI • LLMs • RAG" },
    { label: "Enterprise Systems", value: "Frappe • ERPNext • NestJS" },
    { label: "Production Deploys", value: "4+ Live Cloud Apps" },
  ]
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: "V.Connct",
    role: "Junior Full-Stack Developer",
    period: "2025 - Present",
    type: "Enterprise ERP & Cloud Collaboration",
    highlights: [
      "Develop and maintain production ERP applications using Frappe Framework and ERPNext for enterprise clients.",
      "Design RESTful APIs and multi-service features for live meetings, streaming, chat, polls, document collaboration, and workflow automation.",
      "Integrated 5 enterprise services: OnlyOffice, Stripe, Paymob, AWS S3, and Frappe Press with secure API communication.",
      "Built AI-powered workflow features, optimized application performance, resolved production issues, and reduced site provisioning time to under one minute.",
      "Collaborate in Agile/Scrum teams using Git, code review, testing, CI/CD workflows, and production support practices."
    ],
    tech: ["React", "Next.js", "Node.js", "NestJS", "Python", "Frappe Framework", "ERPNext", "Stripe", "Paymob", "AWS S3", "LiveKit"]
  },
  {
    company: "V.Connct",
    role: "Full-Stack Developer Intern",
    period: "2024 - 2025",
    type: "Full-Stack Web & Integrations",
    highlights: [
      "Developed frontend and backend features using React, Node.js, Python, Frappe, and PostgreSQL.",
      "Built API integrations, customized ERP modules, and participated in testing, debugging, deployment, and production support."
    ],
    tech: ["React", "Node.js", "Python", "PostgreSQL", "Frappe"]
  }
];

export const FLAGSHIP_PROJECT = {
  id: "apex-athletic",
  title: "Smart Coach - AI Fitness Platform",
  headline: "Full-Stack AI Fitness & Nutrition Ecosystem",
  description: "A modular, commercial-grade fitness platform featuring an AI coaching engine powered by FastAPI and RAG architecture, dual web applications (Athlete Client Portal + Executive Admin Dashboard), and an event-driven Dockerized Node backend.",
  liveClientUrl: "https://apex-athletic-beta.vercel.app",
  liveDashboardUrl: "https://smart-coach-dashboard.vercel.app",
  backendDeployUrl: "https://exact-gwenette-fitglow-38dc47eb.koyeb.app",
  githubClient: "https://github.com/Mohamed11Esam/SmartCoachFront",
  githubBackend: "https://github.com/Mohamed11Esam/SmartCoachBack",
  githubAI: "https://github.com/Mohamed11Esam/SmartCoachAI",
  githubDashboard: "https://github.com/Mohamed11Esam/SmartCoachDashboard",
  tiers: [
    {
      name: "Athlete Client Web App (Apex Athletic)",
      badge: "React 19 • Zustand • Recharts",
      url: "https://apex-athletic-beta.vercel.app",
      status: "Live on Vercel",
      description: "Interactive athlete portal for workout tracking, biometric charts, custom plan generation, and real-time AI coach conversations."
    },
    {
      name: "Executive Admin Dashboard",
      badge: "Vite • TypeScript • Tailwind",
      url: "https://smart-coach-dashboard.vercel.app",
      status: "Live on Vercel",
      description: "Comprehensive management portal for platform metrics, user management, workout template auditing, and subscription tracking."
    },
    {
      name: "Core Backend Service",
      badge: "Node.js • TypeScript • Docker • Koyeb",
      url: "https://exact-gwenette-fitglow-38dc47eb.koyeb.app",
      status: "Live on Koyeb",
      description: "Production RESTful API handling JWT authentication, Stripe subscription webhooks, Cloudinary media storage, and MongoDB persistence."
    },
    {
      name: "AI & RAG Microservice",
      badge: "FastAPI • Python • LLM RAG • Vector Search",
      status: "FastAPI Inference",
      description: "Intelligent inference engine using contextual vector embeddings and LLM reasoning to generate personalized meal and workout regimes via 7 dedicated endpoints."
    }
  ],
  features: [
    "Contextual RAG Inference with Vector Search & LLMs",
    "Real-time biometrics analytics powered by Recharts",
    "Stripe checkout sessions & webhook fulfillment",
    "Dockerized container builds on Koyeb Edge Infrastructure",
    "Zod runtime validation and optimistic state updates"
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "chatify",
    title: "Chatify",
    subtitle: "Real-Time Collaborative Messaging Platform",
    category: "realtime",
    description: "Full-stack real-time messaging application with persistent WebSockets, automated bot defense, cloud media uploads, and end-to-end authentication.",
    highlights: [
      "Persistent two-way WebSockets via Socket.io with user presence tracking",
      "Arcjet bot protection & intelligent rate-limiting layer",
      "Cloudinary media integration with chunked photo delivery",
      "Unified monolithic deployment architecture with Express & Vite"
    ],
    techStack: ["React 19", "Socket.io", "Zustand", "Express", "MongoDB", "Arcjet", "Cloudinary"],
    githubUrl: "https://github.com/Mohamed11Esam/Chatify-App",
    statusBadge: "Full-Stack Monolith",
    featured: true
  },
  {
    id: "ecommerce-enterprise",
    title: "Fresh Cart / Enterprise E-Commerce",
    subtitle: "Modular NestJS 11 Backend + React Storefront",
    category: "fullstack",
    description: "Production-ready digital storefront powered by an enterprise NestJS backend featuring Google OAuth, Passport JWT security, and a responsive Tailwind client.",
    highlights: [
      "Modular NestJS 11 architecture with Class-Validator DTOs",
      "Dual authentication strategy: Google OAuth 2.0 & Passport JWT",
      "Product filtering, shopping cart persistence, and coupon validation",
      "Production-ready Swagger / OpenAPI documentation architecture"
    ],
    techStack: ["NestJS 11", "TypeScript", "React", "MongoDB", "Passport.js", "Tailwind CSS"],
    liveUrl: "https://e-commerce-phi-coral.vercel.app",
    githubUrl: "https://github.com/Mohamed11Esam/E-Commerce-BE",
    statusBadge: "Live Storefront + NestJS",
    featured: true
  },
  {
    id: "wallet-fintech",
    title: "Fintech Wallet & Ledger API",
    subtitle: "High-Concurrency Transactional Engine",
    category: "backend",
    description: "Financial ledger and digital wallet backend built with Express 5 and Prisma ORM, engineered for atomic balance transfers and strict transaction isolation.",
    highlights: [
      "Prisma ORM transactions ensuring ACID compliance on wallet balance transfers",
      "Relational schema modeling with Postgres-ready entity relations",
      "Deposit, transfer, and withdrawal authorization workflows",
      "Express 5 async handler pipelines with type-safe error boundaries"
    ],
    techStack: ["Express 5", "Prisma ORM", "TypeScript", "PostgreSQL", "Node.js"],
    githubUrl: "https://github.com/Mohamed11Esam/walletStoreApp",
    statusBadge: "Backend Ledger"
  },
  {
    id: "social-graphql",
    title: "Social Graph & Realtime Feed API",
    subtitle: "GraphQL + WebSocket Social Service",
    category: "backend",
    description: "Event-driven social networking backend utilizing GraphQL queries, real-time Socket.io updates, Zod validation, and MongoDB indexing.",
    highlights: [
      "GraphQL query and mutation resolvers with graphql-http",
      "Zod schema validation on incoming mutation payloads",
      "Real-time notifications and comment broadcasts over WebSockets",
      "Nodemailer transactional email triggers for onboarding"
    ],
    techStack: ["GraphQL", "Express 5", "Socket.io", "MongoDB", "Zod", "TypeScript"],
    githubUrl: "https://github.com/Mohamed11Esam/socialApp",
    statusBadge: "GraphQL & WebSockets"
  }
];

export const SERVICES: Service[] = [
  {
    id: "ai-rag",
    title: "AI & RAG Solutions",
    subtitle: "Turn company data into intelligent chatbots & workflows",
    description: "I build bespoke AI microservices utilizing FastAPI, vector embeddings, and Custom LLMs & Vector Databases to automate client support, document analysis, and dynamic recommendations.",
    deliverables: [
      "Custom RAG vector search over your company PDFs/documents",
      "Conversational AI chat widgets with memory & source citations",
      "FastAPI microservice containerized with Docker",
      "Strict token limiters and cost optimization"
    ],
    tech: ["FastAPI", "Python", "LLMs", "LangChain/RAG", "Vector DBs"],
    idealFor: "SaaS founders, e-commerce stores, and startups seeking AI automation."
  },
  {
    id: "backend-architecture",
    title: "Scalable Backend & APIs",
    subtitle: "Robust Node.js & NestJS enterprise backends",
    description: "I architect high-throughput REST and GraphQL APIs with clean domain-driven architecture, Prisma/Mongoose ORMs, and secure auth (OAuth, JWT, RBAC).",
    deliverables: [
      "Production NestJS or Express backend with modular architecture",
      "Interactive Swagger/OpenAPI documentation",
      "Payment gateway integration (Stripe, Paymob, PayPal)",
      "Docker & Cloud deployment (Koyeb, Render, AWS, Railway)"
    ],
    tech: ["NestJS", "Node.js", "TypeScript", "Prisma", "MongoDB", "PostgreSQL"],
    idealFor: "Businesses requiring a scalable, bulletproof foundation for mobile or web apps."
  },
  {
    id: "realtime-systems",
    title: "Real-Time Systems & WebSockets",
    subtitle: "Instant collaborative experiences with zero delay",
    description: "From live messaging apps to interactive dashboards and notification feeds, I design low-latency bidirectional WebSocket pipelines with state synchronization.",
    deliverables: [
      "Persistent Socket.io infrastructure with room & channel logic",
      "Live user presence (online/offline tracking, typing indicators)",
      "Bot defense, DDoS mitigation, and Arcjet rate-limiting",
      "Reconnecting client libraries with optimistic UI updates"
    ],
    tech: ["Socket.io", "WebSockets", "Zustand", "Redis", "Express"],
    idealFor: "Teams building team collaboration tools, chat platforms, or live tracking."
  },
  {
    id: "fullstack-mvp",
    title: "Full-Stack MVP from 0 to 1",
    subtitle: "Launch your product in weeks, not months",
    description: "End-to-end web application development from interactive React/Next.js frontend to database modeling, authentication, and live production deployment.",
    deliverables: [
      "Modern responsive UI with Tailwind CSS and smooth micro-interactions",
      "Secure authentication (Google OAuth, magic links, email/password)",
      "Admin dashboard with analytics and user management",
      "Complete CI/CD setup and production cloud deployment"
    ],
    tech: ["Next.js 15", "React 19", "Tailwind CSS", "TypeScript", "Vercel"],
    idealFor: "Founders looking to validate product concepts with paying users quickly."
  }
];
