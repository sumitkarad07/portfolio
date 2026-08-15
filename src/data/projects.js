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
    id: "mern-ecommerce",
    title: "MERN Stack E-Commerce Platform",
    subtitle: "Full-Featured Online Retail & Admin Management Web Application",
    description: "A feature-rich, full-stack e-commerce platform built with the MERN stack (MongoDB, Express, React, Node.js). Includes JWT authentication, comprehensive product catalog, dynamic cart management, user order tracking, reviews system, wishlist, and an extensive admin dashboard for product & user management.",
    longDescription: `This application provides an end-to-end shopping experience powered by a robust REST API backend and a responsive React frontend. 

Features built into the architecture:
• Authentication & Authorization: Secure user registration, login with JWT, role-based access control (User & Admin).
• Catalog & Discovery: Product listings with category filters, dynamic search, price sorting, and detailed product pages.
• Shopping Workflow: Interactive cart management, wishlist curation, and checkout process for simulated orders.
• Social & Feedback: Product review ratings and customer feedback threads.
• Admin Portal: Full CRUD operations for managing products, categories, user accounts, and monitoring orders.`,
    featured: true,
    category: "Full Stack",
    role: "Full Stack Developer",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
      "JWT Auth",
      "Bootstrap / Tailwind",
      "Postman"
    ],
    // High-resolution dark tech aesthetic preview image
    image: "https://images.unsplash.com/photo-1556742049-0a67daf64f42?q=80&w=1200&auto=format&fit=crop",
    github: "https://github.com/sumitkarad07",
    demo: "#", // Add live URL when deployed
    architecture: {
      frontend: "React.js SPA with state management, modular components, and responsive grid system.",
      backend: "Node.js & Express REST API server with custom middleware and error handling.",
      database: "MongoDB document store with Mongoose schemas for Users, Products, Orders, and Reviews."
    },
    highlights: [
      "User Authentication & JWT Tokens",
      "Product Catalog & Category Filtering",
      "Cart & Order Management",
      "User Reviews & Wishlist Functionality",
      "Admin Panel for Products & User Roles",
      "RESTful API & MongoDB Integration"
    ]
  }
];
