/**
 * Reusable Projects Data Array
 * Centralized project showcase configuration.
 */

export const projects = [
  {
    id: "ummid-health-wallet",
    title: "UMMID — Digital Health Wallet",
    subtitle: "Full-Stack Healthcare Record Management & Doctor Access Platform",
    description: "A full-stack digital health wallet designed to help patients securely manage and access their healthcare information in one place. Features patient & doctor authentication, medical visits, prescriptions, report management, bill tracking, profile uploads, and doctor-access permissions.",
    longDescription: `UMMID is a MERN-based digital health record management system that provides patients with a centralized platform to manage important healthcare information. 

Features built into the architecture:
• Dual Portal Access: Secure patient and doctor registration and authentication with JWT and protected routes.
• Digital Health Profile: Comprehensive profile management, health metrics, and profile photo uploads.
• Medical Records Management: Structured visit tracking, digital prescription archive, and diagnostic report uploads.
• Bill Management & File Uploads: Invoice tracking with Multer & Cloudinary media integration for medical document storage.
• Doctor Access Control: Secure access authorization allowing designated doctors to review patient health histories.
• Healthcare Plan Upgrades: Integrated membership tier management and healthcare plan functionality.`,
    featured: true,
    category: "Full Stack / Healthcare Tech",
    role: "Full Stack Developer",
    technologies: [
      "React.js",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT Auth",
      "Cloudinary",
      "Multer",
      "Axios",
      "Bootstrap",
      "React Router",
      "REST API"
    ],
    // High-resolution healthcare dark tech preview image
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
    github: "https://github.com/sumitkarad07/ummid",
    demo: "#", // Add live URL when deployed
    architecture: {
      frontend: "React.js SPA built with Vite, React Router navigation, Axios HTTP client, and Bootstrap dynamic UI components.",
      backend: "Node.js & Express REST API server with JWT authentication middleware, Multer file handling, and Cloudinary CDN storage.",
      database: "MongoDB document database with Mongoose models for Patients, Doctors, Visits, Prescriptions, Reports, and Bills."
    },
    highlights: [
      "Patient & Doctor Registration / JWT Login",
      "Protected Routes & Role-Based Access Control",
      "Prescription & Diagnostic Report Archives",
      "Bill Tracking with Cloudinary File Uploads",
      "Doctor Access Authorization Engine",
      "Digital Health Profile & Healthcare Plans"
    ]
  },
  {
    id: "smartcheff-ai",
    title: "SmartcheFF — AI Recipe Generator",
    subtitle: "AI-Powered Recipe Recommendation & Cooking Guidance Platform",
    description: "An AI-powered web application that recommends recipes based on available ingredients using Google Gemini AI. Features a responsive frontend, Node.js/Express backend for AI dish suggestions & step-by-step recipes, YouTube video integration, and Vercel deployment.",
    longDescription: `SmartcheFF is an AI-powered recipe recommendation web application designed to help users generate customized dishes and step-by-step recipes using available ingredients.

Features built into the architecture:
• AI Recipe Generation: Integrated Google Gemini AI to analyze user-input ingredients and generate tailored recipe recommendations.
• Step-by-Step Cooking Instructions: Provides structured cooking guides, ingredient breakdowns, and detailed preparation steps.
• Video Search Guidance: Dynamically generates YouTube search links for video-based cooking tutorials and visual guidance.
• Responsive Web Interface: Clean, user-friendly UI built with HTML5, CSS3, and modern JavaScript for seamless experiences across devices.
• Scalable Express Backend: Node.js & Express REST API server acting as an API gateway for Gemini AI integration.
• Vercel Deployment: Deployed and hosted on Vercel for fast response times and high availability.`,
    featured: true,
    category: "Full Stack / AI Web App",
    role: "Full Stack Developer",
    technologies: [
      "Google Gemini AI",
      "Node.js",
      "Express.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "YouTube Search API",
      "Vercel",
      "REST API"
    ],
    // High-resolution culinary tech preview image
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1200&auto=format&fit=crop",
    github: "https://github.com/sumitkarad07/smartcheff",
    demo: "#", // Add live URL when deployed
    architecture: {
      frontend: "Responsive web interface built with HTML5, CSS3, and modern JavaScript.",
      backend: "Node.js & Express REST API server acting as API gateway for Gemini AI integration.",
      database: "Google Gemini AI generative engine with YouTube video search link integration."
    },
    highlights: [
      "Google Gemini AI Integration",
      "Ingredient-Based Recipe Recommendation",
      "Step-by-Step Cooking Instructions",
      "Node.js & Express API Gateway",
      "YouTube Video Guidance Links",
      "Vercel Cloud Deployment"
    ]
  }
];
