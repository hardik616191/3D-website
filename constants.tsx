
import React from 'react';
import { Service, Project, Testimonial, VideoProject } from './types';

export const SERVICES: Service[] = [
  {
    title: "Performance Engineering",
    description: "Building lightning-fast web applications optimized for speed, reliability, and modern user experiences.",
    icon: "Rocket"
  },
  {
    title: "Backend Architecture",
    description: "Designing robust server-side systems with Node.js and Python that scale seamlessly to millions of users.",
    icon: "Database"
  },
  {
    title: "Full Stack Development",
    description: "End-to-end product engineering from database design to high-fidelity frontend execution.",
    icon: "Layout"
  },
  {
    title: "Cloud & DevOps",
    description: "Streamlining deployment pipelines and managing infrastructure with AWS, Docker, and Kubernetes.",
    icon: "Cloud"
  }
];

export const PROJECTS: Project[] = [
  // Web Projects
  { title: "E-commerce Platform", category: "Web Projects", image: "https://picsum.photos/seed/web1/800/1000" },
  { title: "SaaS Analytics Dashboard", category: "Web Projects", image: "https://picsum.photos/seed/web2/800/1000" },
  { title: "Headless CMS Portal", category: "Web Projects", image: "https://picsum.photos/seed/web3/800/1000" },
  { title: "Real-time Auction System", category: "Web Projects", image: "https://picsum.photos/seed/web4/800/1000" },
  { title: "EdTech Learning Hub", category: "Web Projects", image: "https://picsum.photos/seed/web5/800/1000" },
  { title: "Crypto Exchange UI", category: "Web Projects", image: "https://picsum.photos/seed/web6/800/1000" },
  { title: "Legal Tech Platform", category: "Web Projects", image: "https://picsum.photos/seed/web7/800/1000" },
  { title: "B2B Supply Chain Tool", category: "Web Projects", image: "https://picsum.photos/seed/web8/800/1000" },
  { title: "Community Forum Engine", category: "Web Projects", image: "https://picsum.photos/seed/web9/800/1000" },
  { title: "Personal Finance Manager", category: "Web Projects", image: "https://picsum.photos/seed/web10/800/1000" },

  // App Projects
  { title: "Fitness Tracking Mobile", category: "App Projects", image: "https://picsum.photos/seed/app1/800/1000" },
  { title: "Meditation & Wellness", category: "App Projects", image: "https://picsum.photos/seed/app2/800/1000" },
  { title: "Smart Home Interface", category: "App Projects", image: "https://picsum.photos/seed/app3/800/1000" },
  { title: "Language Learning App", category: "App Projects", image: "https://picsum.photos/seed/app4/800/1000" },
  { title: "On-demand Delivery", category: "App Projects", image: "https://picsum.photos/seed/app5/800/1000" },
  { title: "Travel Itinerary Planner", category: "App Projects", image: "https://picsum.photos/seed/app6/800/1000" },
  { title: "Budgeting Companion", category: "App Projects", image: "https://picsum.photos/seed/app7/800/1000" },
  { title: "Event Networking App", category: "App Projects", image: "https://picsum.photos/seed/app8/800/1000" },
  { title: "Remote Team Chat", category: "App Projects", image: "https://picsum.photos/seed/app9/800/1000" },
  { title: "NFT Marketplace Mobile", category: "App Projects", image: "https://picsum.photos/seed/app10/800/1000" },

  // Designing Projects
  { title: "Brand Identity Revamp", category: "Designing Projects", image: "https://picsum.photos/seed/dsgn1/800/1000" },
  { title: "Minimalist Icon Set", category: "Designing Projects", image: "https://picsum.photos/seed/dsgn2/800/1000" },
  { title: "UX Research Case Study", category: "Designing Projects", image: "https://picsum.photos/seed/dsgn3/800/1000" },
  { title: "Fintech App Redesign", category: "Designing Projects", image: "https://picsum.photos/seed/dsgn4/800/1000" },
  { title: "Typography Collection", category: "Designing Projects", image: "https://picsum.photos/seed/dsgn5/800/1000" },
  { title: "Corporate Design System", category: "Designing Projects", image: "https://picsum.photos/seed/dsgn6/800/1000" },
  { title: "Digital Marketing Assets", category: "Designing Projects", image: "https://picsum.photos/seed/dsgn7/800/1000" },
  { title: "Vector Illustration Series", category: "Designing Projects", image: "https://picsum.photos/seed/dsgn8/800/1000" },
  { title: "Portfolio Concept Art", category: "Designing Projects", image: "https://picsum.photos/seed/dsgn9/800/1000" },
  { title: "Social Media Style Guide", category: "Designing Projects", image: "https://picsum.photos/seed/dsgn10/800/1000" },
];

export const VIDEO_PROJECTS: VideoProject[] = [
  {
    title: "NexGen ERP Solution",
    category: "SaaS Enterprise",
    image: "https://picsum.photos/seed/v1/800/600",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-on-laptop-screen-34538-large.mp4",
    description: "A comprehensive enterprise resource planning tool built for modern logistics.",
    tech: ["React", "PostgreSQL", "Go", "Kubernetes"]
  },
  {
    title: "Stellar Crypto Wallet",
    category: "Web3/Fintech",
    image: "https://picsum.photos/seed/v2/800/600",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-web-development-codes-on-a-screen-44474-large.mp4",
    description: "Secure, non-custodial wallet featuring multi-chain swaps and real-time gas tracking.",
    tech: ["Next.js", "Web3.js", "Ethereum", "Tailwind"]
  },
  {
    title: "Vitality Health Engine",
    category: "HealthTech AI",
    image: "https://picsum.photos/seed/v3/800/600",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-person-typing-fast-on-a-laptop-keyboard-44473-large.mp4",
    description: "AI-driven diagnostics platform that analyzes patient data in milliseconds.",
    tech: ["Python", "PyTorch", "React Native", "FastAPI"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Hardik has an uncanny ability to see the 'big picture' while executing the smallest details perfectly. Our system latency dropped by 60%.",
    author: "Sarah Jenkins",
    role: "CTO, Lumina Tech"
  },
  {
    quote: "Working with Hardik was a game-changer for our product launch. His full-stack expertise is unparalleled in the industry.",
    author: "Marcus Thorne",
    role: "Product Director, Shift Engineering"
  }
];

export const HARDIK_SYSTEM_PROMPT = `
You are the AI assistant for Hardik Sonagara, a world-class Full Stack Developer. 
Hardik specializes in React, Node.js, Cloud Architecture, and building results-driven products.
Your tone is professional, technical, yet accessible and highly strategic.
When users ask about services, mention his 7 years of experience in Frontend Excellence, Backend Scalability, and Cloud solutions.
If they ask for a consultation, guide them to the contact section or the "Book Free Consultation" button.
Keep responses concise and elegant.
`;
