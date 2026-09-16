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

export const PROFILE = {
  name: 'Mohamed Esam',
  role: 'Full-Stack & AI Systems Engineer',
  tagline: 'I architect scalable Node/NestJS backends, production AI/RAG services, and high-performance real-time web applications.',
  bio: 'Full-stack engineer specializing in distributed microservices, WebSockets, relational/NoSQL architectures, and modern AI pipelines. Creator of multi-tier systems like Apex Athletic (AI-powered fitness SaaS with RAG + Gemini), Chatify, and enterprise NestJS backends.',
  status: 'Available for High-Impact Freelance Contracts',
  location: 'Cairo, Egypt (UTC+3) / Remote Worldwide',
  github: 'https://github.com/Mohamed11Esam',
  email: 'mohamed.esam.dev@gmail.com',
  linkedin: 'https://linkedin.com/in/mohamed-esam',
  metrics: [
    { label: 'Production Deploys', value: '4+' },
    { label: 'AI RAG Integrations', value: 'Gemini + FastAPI' },
    { label: 'Backend Architecture', value: 'Node • NestJS • Express' },
    { label: 'Realtime Protocols', value: 'WebSockets • Socket.io' },
  ]
};

export const FLAGSHIP_PROJECT = {
  id: 'apex-athletic',
  title: 'Apex Athletic (SmartCoach AI)',
  headline: 'Full-Stack AI Fitness & Nutrition Ecosystem',
  description: 'A commercial-grade, 4-tier distributed SaaS platform featuring an AI fitness coach powered by FastAPI and Gemini RAG, dual web applications (Athlete Client Portal + Executive Admin Dashboard), and an event-driven Dockerized Node backend.',
  liveClientUrl: 'https://apex-athletic-beta.vercel.app',
  liveDashboardUrl: 'https://smart-coach-dashboard.vercel.app',
  backendDeployUrl: 'https://exact-gwenette-fitglow-38dc47eb.koyeb.app',
  githubClient: 'https://github.com/Mohamed11Esam/SmartCoachFront',
  githubBackend: 'https://github.com/Mohamed11Esam/SmartCoachBack',
  githubAI: 'https://github.com/Mohamed11Esam/SmartCoachAI',
  githubDashboard: 'https://github.com/Mohamed11Esam/SmartCoachDashboard',
  tiers: [
    {
      name: 'Athlete Client Web App',
      badge: 'React 19 • Zustand • Recharts',
      url: 'https://apex-athletic-beta.vercel.app',
      status: 'Live on Vercel',
      description: 'Interactive athlete portal for workout tracking, biometric charts, custom plan generation, and real-time AI coach conversations.'
    },
    {
      name: 'Executive Admin Dashboard',
      badge: 'Vite • TypeScript • Tailwind',
      url: 'https://smart-coach-dashboard.vercel.app',
      status: 'Live on Vercel',
      description: 'Comprehensive management portal for platform metrics, user management, workout template auditing, and subscription tracking.'
    },
    {
      name: 'Core Backend Service',
      badge: 'Node.js • TypeScript • Docker • Koyeb',
      url: 'https://exact-gwenette-fitglow-38dc47eb.koyeb.app',
      status: 'Live on Koyeb',
      description: 'Production RESTful API handling JWT authentication, Stripe subscription webhooks, Cloudinary media storage, and MongoDB persistence.'
    },
    {
      name: 'AI & RAG Microservice',
      badge: 'FastAPI • Python • Gemini • Vector Search',
      status: 'FastAPI Inference',
      description: 'Intelligent inference engine using Google Gemini and contextual fitness embeddings to generate personalized meal and workout regimes.'
    }
  ],
  features: [
    'Contextual RAG Inference with Google Gemini',
    'Real-time biometrics analytics powered by Recharts',
    'Stripe checkout sessions & webhook fulfillment',
    'Dockerized container builds on Koyeb Edge Infrastructure',
    'Zod runtime validation and optimistic state updates'
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'chatify',
    title: 'Chatify',
    subtitle: 'Real-Time Collaborative Messaging Platform',
    category: 'realtime',
    description: 'Full-stack real-time messaging application with persistent WebSockets, automated bot defense, cloud media uploads, and end-to-end authentication.',
    highlights: [
      'Persistent two-way WebSockets via Socket.io with user presence tracking',
      'Arcjet bot protection & intelligent rate-limiting layer',
      'Cloudinary media integration with chunked photo delivery',
      'Unified monolithic deployment architecture with Express & Vite'
    ],
    techStack: ['React 19', 'Socket.io', 'Zustand', 'Express', 'MongoDB', 'Arcjet', 'Cloudinary'],
    githubUrl: 'https://github.com/Mohamed11Esam/Chatify-App',
    statusBadge: 'Full-Stack Monolith',
    featured: true
  },
  {
    id: 'ecommerce-enterprise',
    title: 'Enterprise E-Commerce Suite',
    subtitle: 'Modular NestJS 11 Backend + React Storefront',
    category: 'fullstack',
    description: 'Production-ready digital storefront powered by an enterprise NestJS backend featuring Google OAuth, Passport JWT security, and a responsive Tailwind client.',
    highlights: [
      'Modular NestJS 11 architecture with Class-Validator DTOs',
      'Dual authentication strategy: Google OAuth 2.0 & Passport JWT',
      'Product filtering, shopping cart persistence, and coupon validation',
      'Production-ready Swagger / OpenAPI documentation architecture'
    ],
    techStack: ['NestJS 11', 'TypeScript', 'React', 'MongoDB', 'Passport.js', 'Tailwind CSS'],
    liveUrl: 'https://e-commerce-phi-coral.vercel.app',
    githubUrl: 'https://github.com/Mohamed11Esam/E-Commerce-BE',
    statusBadge: 'Live Storefront + NestJS',
    featured: true
  },
  {
    id: 'wallet-fintech',
    title: 'Fintech Wallet & Ledger API',
    subtitle: 'High-Concurrency Transactional Engine',
    category: 'backend',
    description: 'Financial ledger and digital wallet backend built with Express 5 and Prisma ORM, engineered for atomic balance transfers and strict transaction isolation.',
    highlights: [
      'Prisma ORM transactions ensuring ACID compliance on wallet balance transfers',
      'Relational schema modeling with Postgres-ready entity relations',
      'Deposit, transfer, and withdrawal authorization workflows',
      'Express 5 async handler pipelines with type-safe error boundaries'
    ],
    techStack: ['Express 5', 'Prisma ORM', 'TypeScript', 'PostgreSQL', 'Node.js'],
    githubUrl: 'https://github.com/Mohamed11Esam/walletStoreApp',
    statusBadge: 'Backend Ledger'
  },
  {
    id: 'social-graphql',
    title: 'Social Graph & Realtime Feed API',
    subtitle: 'GraphQL + WebSocket Social Service',
    category: 'backend',
    description: 'Event-driven social networking backend utilizing GraphQL queries, real-time Socket.io updates, Zod validation, and MongoDB indexing.',
    highlights: [
      'GraphQL query and mutation resolvers with graphql-http',
      'Zod schema validation on incoming mutation payloads',
      'Real-time notifications and comment broadcasts over WebSockets',
      'Nodemailer transactional email triggers for onboarding'
    ],
    techStack: ['GraphQL', 'Express 5', 'Socket.io', 'MongoDB', 'Zod', 'TypeScript'],
    githubUrl: 'https://github.com/Mohamed11Esam/socialApp',
    statusBadge: 'GraphQL & WebSockets'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'ai-rag',
    title: 'AI & RAG Solutions',
    subtitle: 'Turn company data into intelligent chatbots & workflows',
    description: 'I build bespoke AI microservices utilizing FastAPI, vector embeddings, and LLMs (Google Gemini / OpenAI) to automate client support, document analysis, and dynamic recommendations.',
    deliverables: [
      'Custom RAG vector search over your company PDFs/documents',
      'Conversational AI chat widgets with memory & source citations',
      'FastAPI microservice containerized with Docker',
      'Strict token limiters and cost optimization'
    ],
    tech: ['FastAPI', 'Python', 'Google Gemini', 'LangChain/RAG', 'Vector DBs'],
    idealFor: 'SaaS founders, e-commerce stores, and startups seeking AI automation.'
  },
  {
    id: 'backend-architecture',
    title: 'Scalable Backend & APIs',
    subtitle: 'Robust Node.js & NestJS enterprise backends',
    description: 'I architect high-throughput REST and GraphQL APIs with clean domain-driven architecture, Prisma/Mongoose ORMs, and secure auth (OAuth, JWT, RBAC).',
    deliverables: [
      'Production NestJS or Express backend with modular architecture',
      'Interactive Swagger/OpenAPI documentation',
      'Payment gateway integration (Stripe, Paymob, PayPal)',
      'Docker & Cloud deployment (Koyeb, Render, AWS, Railway)'
    ],
    tech: ['NestJS', 'Node.js', 'TypeScript', 'Prisma', 'MongoDB', 'PostgreSQL'],
    idealFor: 'Businesses requiring a scalable, bulletproof foundation for mobile or web apps.'
  },
  {
    id: 'realtime-systems',
    title: 'Real-Time Systems & WebSockets',
    subtitle: 'Instant collaborative experiences with zero delay',
    description: 'From live messaging apps to interactive dashboards and notification feeds, I design low-latency bidirectional WebSocket pipelines with state synchronization.',
    deliverables: [
      'Persistent Socket.io infrastructure with room & channel logic',
      'Live user presence (online/offline tracking, typing indicators)',
      'Bot defense, DDoS mitigation, and Arcjet rate-limiting',
      'Reconnecting client libraries with optimistic UI updates'
    ],
    tech: ['Socket.io', 'WebSockets', 'Zustand', 'Redis', 'Express'],
    idealFor: 'Teams building team collaboration tools, chat platforms, or live tracking.'
  },
  {
    id: 'fullstack-mvp',
    title: 'Full-Stack MVP from 0 to 1',
    subtitle: 'Launch your product in weeks, not months',
    description: 'End-to-end web application development from interactive React/Next.js frontend to database modeling, authentication, and live production deployment.',
    deliverables: [
      'Modern responsive UI with Tailwind CSS and smooth micro-interactions',
      'Secure authentication (Google OAuth, magic links, email/password)',
      'Admin dashboard with analytics and user management',
      'Complete CI/CD setup and production cloud deployment'
    ],
    tech: ['Next.js 15', 'React 19', 'Tailwind CSS', 'TypeScript', 'Vercel'],
    idealFor: 'Founders looking to validate product concepts with paying users quickly.'
  }
];
