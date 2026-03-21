export interface Project {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  solution: string;
  stack: string[];
  features: string[];
  screenshots: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  highlights?: string[];
}

export const featuredProjects: Project[] = [
  {
    slug: "ai-social-content-generator",
    title: "AI Social Content Generator",
    summary:
      "AI-powered SaaS platform that generates social media content for businesses with scheduling, usage tracking, and Stripe billing.",
    problem:
      "Businesses struggle to consistently create engaging social media content across platforms. Writing posts, generating hashtags, and maintaining brand voice takes significant time and effort.",
    solution:
      "A full-stack SaaS application that uses AI (Anthropic Claude + OpenAI) to generate platform-specific social media posts, captions, hashtags, and image prompts — tailored to each business's industry, tone, and audience.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Fastify",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "Stripe",
      "Docker",
      "Turborepo",
    ],
    features: [
      "AI-powered post generation with platform-specific optimization",
      "Business profile setup with industry, tone, and audience targeting",
      "Post scheduling and content calendar",
      "Usage tracking and metering system",
      "Subscription billing via Stripe integration",
      "Background job processing with BullMQ and Redis",
      "JWT authentication with rate limiting",
      "Production-ready Docker deployment with Nginx reverse proxy",
    ],
    screenshots: ["/project-screenshots/ai-social-content-generator-home.svg"],
    githubUrl:
      "https://github.com/michaeljoniferecmj/ai-social-content-generator",
    featured: true,
    highlights: [
      "Turborepo monorepo architecture separating frontend and backend",
      "Dual AI provider integration (Anthropic + OpenAI)",
      "Full payment lifecycle with Stripe webhooks",
      "Production infrastructure with Docker Compose and Nginx",
    ],
  },
  {
    slug: "business-operations-platform",
    title: "Business Operations Management Platform",
    summary:
      "Comprehensive business operations platform for managing employees, payroll, attendance, inventory, sales, KPIs, and internal communication.",
    problem:
      "Small to mid-size businesses need a centralized system to handle day-to-day operations — from employee management and payroll processing to inventory tracking and performance monitoring — without juggling multiple disconnected tools.",
    solution:
      "An enterprise-grade operations dashboard with 20+ modules covering the full spectrum of business management, built with role-based access control and real-time data visualization.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Prisma",
      "PostgreSQL",
      "NextAuth",
      "Recharts",
      "TanStack Table",
      "React Hook Form",
      "Zod",
    ],
    features: [
      "Employee management with role-based access (8 distinct roles)",
      "Payroll processing with draft/processing/approved/paid workflows",
      "Attendance tracking with multiple status types",
      "Inventory management with stock movement tracking",
      "KPI dashboards with analytics and charting",
      "Document management for IDs, contracts, certificates, and compliance",
      "Internal messaging and communication system",
      "Leave management and cash advance tracking",
      "Audit logging and workflow automation",
      "Self-service employee portal",
    ],
    screenshots: [
      "/project-screenshots/business-operations-platform-home.svg",
    ],
    githubUrl:
      "https://github.com/michaeljoniferecmj/Business-Operations-Management-Platform",
    featured: true,
    highlights: [
      "20+ interconnected dashboard modules",
      "Complex role-based authorization system with 8 roles",
      "Real-time data visualization with Recharts",
      "Enterprise-grade data modeling with Prisma",
    ],
  },
  {
    slug: "elite-barbers",
    title: "Elite Barbers",
    summary:
      "Modern barbershop website with AI-powered concierge chat, animated gallery, custom service builder, and customer reviews.",
    problem:
      "Local barbershops need a professional web presence that goes beyond a basic landing page — something that engages visitors, answers questions instantly, and showcases services effectively.",
    solution:
      "A visually polished business website featuring an AI concierge powered by Google Gemini that answers customer questions in real-time, combined with smooth GSAP animations and an interactive service builder.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GSAP",
      "Google Gemini AI",
    ],
    features: [
      "AI-powered concierge chat using Google Gemini",
      "Smooth animated gallery slider with GSAP",
      "Custom service builder interface",
      "Customer reviews and testimonials section",
      "Fully responsive design",
      "API route for AI concierge backend",
    ],
    screenshots: ["/project-screenshots/elite-barbers-home.svg"],
    githubUrl: "https://github.com/michaeljoniferecmj/Elite-Barbers",
    liveUrl: "https://elite-barbers-two.vercel.app",
    featured: true,
    highlights: [
      "Real-time AI chat integration with Google Gemini",
      "Production GSAP animation pipeline",
      "Client-ready business website with live deployment",
    ],
  },
  {
    slug: "bags-emporium-ecommerce",
    title: "Bags Emporium E-Commerce",
    summary:
      "Modern e-commerce platform for curated preloved luxury bags with cart functionality, product states, and responsive design.",
    problem:
      "Curated resale businesses need an e-commerce frontend that handles variable product availability — items can be sold, reserved, or unavailable — while maintaining a premium shopping experience.",
    solution:
      "A clean, responsive e-commerce storefront with real-time cart management, product state handling (available, sold, unavailable), and a polished shopping UI built for luxury product presentation.",
    stack: ["React", "JavaScript", "Tailwind CSS", "React Router", "Vite"],
    features: [
      "Product browsing with curated luxury bag listings",
      "Smart product states: available, sold, and unavailable",
      "Add-to-cart with custom cart hook",
      "Responsive hero-balanced shop layout",
      "Hover elevation effects on product cards",
      "Currency formatting utilities",
    ],
    screenshots: ["/project-screenshots/bags-emporium-home.svg"],
    githubUrl:
      "https://github.com/michaeljoniferecmj/Bags-Emporium-E-Commerce",
    liveUrl: "https://bags-emporium-e-commerce.vercel.app",
    featured: true,
    highlights: [
      "Clean product-focused UI design",
      "Custom React hooks for cart state management",
      "Live deployment on Vercel",
    ],
  },
  {
    slug: "marcimetzger-home",
    title: "Marci Metzger Real Estate",
    summary:
      "Professional real estate agent website with property search, gallery carousel, and map integration.",
    problem:
      "Real estate agents need a professional website that showcases listings, builds credibility, and provides easy ways for potential clients to search properties and get in touch.",
    solution:
      "A polished client website with property search functionality, interactive gallery carousel, service listings, and integrated contact section with map — delivered as a complete freelance project.",
    stack: ["React", "JavaScript", "Tailwind CSS", "Vite"],
    features: [
      "Property search and listings display",
      "Interactive gallery carousel",
      "Listing promotion section",
      "Service overview and about section",
      "Contact form with map integration",
      "Fully responsive design",
    ],
    screenshots: ["/project-screenshots/marcimetzger-home.svg"],
    githubUrl: "https://github.com/michaeljoniferecmj/marcimetzger-home",
    liveUrl: "https://marcimetzger-home.vercel.app",
    featured: true,
    highlights: [
      "Real client/freelance project delivery",
      "Property search and filtering functionality",
      "Live production deployment",
    ],
  },
];

export const additionalProjects: Project[] = [
  {
    slug: "expense-tracker-dashboard",
    title: "Expense Tracker Dashboard",
    summary:
      "Personal expense tracking dashboard for logging and visualizing expenses with a clean, responsive interface.",
    problem: "Need a simple way to log and track personal expenses.",
    solution:
      "A lightweight React dashboard for logging expenses with visual summaries.",
    stack: ["React", "JavaScript", "Tailwind CSS", "Vite"],
    features: [
      "Expense logging and categorization",
      "Dashboard visualization",
      "Responsive design",
    ],
    screenshots: [],
    githubUrl:
      "https://github.com/michaeljoniferecmj/Expense-Tracker-Dashboard",
    liveUrl: "https://expense-tracker-dashboard-one.vercel.app",
    featured: false,
  },
  {
    slug: "bags-inventory",
    title: "Bags Inventory System",
    summary:
      "Inventory management system with Supabase backend, PDF report generation, and data visualization.",
    problem: "Need to track bag inventory, payments, and generate reports.",
    solution:
      "A full-stack inventory app with Supabase auth, chart dashboards, and PDF export capabilities.",
    stack: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Supabase",
      "Recharts",
      "Chart.js",
      "React PDF",
    ],
    features: [
      "Inventory item management",
      "Payment tracking",
      "PDF report generation",
      "Data visualization with charts",
      "Authentication via Supabase",
    ],
    screenshots: [],
    githubUrl: "https://github.com/michaeljoniferecmj/Bags-Inventory",
    featured: false,
  },
];
