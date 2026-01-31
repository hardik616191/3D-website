
import React from 'react';
import { Service, Project, Testimonial, VideoProject } from './types';

export interface Award {
  title: string;
  org: string;
  year: string;
  icon: string;
}

export const AWARDS: Award[] = [
  { title: "Top Rated Full Stack Developer", org: "Upwork Global", year: "2023", icon: "Trophy" },
  { title: "Special Kudos Award", org: "CSS Design Awards", year: "2024", icon: "Award" },
  { title: "Honorable Mention", org: "Awwwards", year: "2023", icon: "Star" },
  { title: "Certified Shopify Expert", org: "Shopify Partners", year: "2022", icon: "CheckCircle" },
  { title: "Best E-commerce Solution", org: "Tech Innovation Awards", year: "2024", icon: "Zap" },
  { title: "Innovation in Full Stack", org: "Global Dev Conference", year: "2024", icon: "Cpu" }
];

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
  // Web Projects (Unified Shopify, WordPress, WooCommerce, and Custom Web)
  { title: "Adored Vintage", category: "Web Projects", image: "https://picsum.photos/seed/vintage/800/1000", url: "https://www.adoredvintage.com/" },
  { title: "Meow Meow Tweet", category: "Web Projects", image: "https://picsum.photos/seed/skincare/800/1000", url: "https://meowmeowtweet.com/" },
  { title: "Pot Gang", category: "Web Projects", image: "https://picsum.photos/seed/potgang/800/1000", url: "https://potgang.co.uk/" },
  { title: "Artisaire", category: "Web Projects", image: "https://picsum.photos/seed/wax/800/1000", url: "https://www.artisaire.com/" },
  { title: "Bebemoss", category: "Web Projects", image: "https://picsum.photos/seed/toys/800/1000", url: "https://bebemoss.com/" },
  { title: "Terre Bleu", category: "Web Projects", image: "https://picsum.photos/seed/lavender/800/1000", url: "https://www.terrebleu.ca/" },
  { title: "Silk and Willow", category: "Web Projects", image: "https://picsum.photos/seed/wedding/800/1000", url: "https://www.silkandwillow.com/" },
  { title: "Uppercase Magazine", category: "Web Projects", image: "https://picsum.photos/seed/magazine/800/1000", url: "https://uppercasemagazine.com/" },
  { title: "Beefcake Swimwear", category: "Web Projects", image: "https://picsum.photos/seed/swim/800/1000", url: "https://www.beefcakeswimwear.com/" },
  { title: "Hiut Denim Co.", category: "Web Projects", image: "https://picsum.photos/seed/denim/800/1000", url: "https://hiutdenim.co.uk/" },
  { title: "Maguire Shoes", category: "Web Projects", image: "https://picsum.photos/seed/shoes/800/1000", url: "https://maguireshoes.com/" },
  { title: "The Outrage", category: "Web Projects", image: "https://picsum.photos/seed/outrage/800/1000", url: "https://www.theoutrage.com/" },
  { title: "Flambette", category: "Web Projects", image: "https://picsum.photos/seed/candles/800/1000", url: "https://flambette.com/" },
  { title: "Kulala", category: "Web Projects", image: "https://picsum.photos/seed/sleep/800/1000", url: "https://kulalaland.com/" },
  { title: "Fybelle", category: "Web Projects", image: "https://picsum.photos/seed/fybelle/800/1000", url: "https://fybelle.com/" },
  { title: "Claire Alice Designs", category: "Web Projects", image: "https://picsum.photos/seed/petportrait/800/1000", url: "https://clairealicedesigns.com/" },
  { title: "Paws on Pause", category: "Web Projects", image: "https://picsum.photos/seed/petfurniture/800/1000", url: "https://pawsonpause.com/" },
  { title: "Eigenhain", category: "Web Projects", image: "https://picsum.photos/seed/aesthetic/800/1000", url: "https://eigenhain.com/" },
  { title: "Orimono", category: "Web Projects", image: "https://picsum.photos/seed/berlin/800/1000", url: "https://www.orimono.eu/" },
  { title: "Poppabum", category: "Web Projects", image: "https://picsum.photos/seed/kidswear/800/1000", url: "https://poppabum.com/" },
  { title: "Siya Fashion", category: "Web Projects", image: "https://picsum.photos/seed/ethnic/800/1000", url: "https://www.siyafashion.com/" },
  { title: "Aja Frost", category: "Web Projects", image: "https://picsum.photos/seed/aja/800/1000", url: "https://ajafrost.com/" },
  { title: "Lauren Hom", category: "Web Projects", image: "https://picsum.photos/seed/lauren/800/1000", url: "https://www.homsweethom.com/" },
  { title: "Minimalist Baker", category: "Web Projects", image: "https://picsum.photos/seed/baker/800/1000", url: "https://minimalistbaker.com/" },
  { title: "Ine Agresta", category: "Web Projects", image: "https://picsum.photos/seed/ine/800/1000", url: "https://ineagresta.com/" },
  { title: "Hey Studio", category: "Web Projects", image: "https://picsum.photos/seed/hey/800/1000", url: "https://heystudio.es/" },
  { title: "Jun Lu", category: "Web Projects", image: "https://picsum.photos/seed/jun/800/1000", url: "https://jun-lu.com/" },
  { title: "Kelsey O'Halloran", category: "Web Projects", image: "https://picsum.photos/seed/kelsey/800/1000", url: "https://kelseyohalloran.com/" },
  { title: "Video Portfolio WP", category: "Web Projects", image: "https://picsum.photos/seed/wpvid/800/1000", url: "https://wordpress.org/showcase/" },
  { title: "Nove", category: "Web Projects", image: "https://picsum.photos/seed/nove/800/1000", url: "https://nove.no/" },
  { title: "Sean O’Brien", category: "Web Projects", image: "https://picsum.photos/seed/sean/800/1000", url: "https://seanobrien.com/" },
  { title: "Pho Cafe", category: "Web Projects", image: "https://picsum.photos/seed/pho/800/1000", url: "https://www.phocafe.co.uk/" },
  { title: "TED Blog", category: "Web Projects", image: "https://picsum.photos/seed/ted/800/1000", url: "https://blog.ted.com/" },
  { title: "9to5Mac", category: "Web Projects", image: "https://picsum.photos/seed/mac/800/1000", url: "https://9to5mac.com/" },
  { title: "The Gates Notes", category: "Web Projects", image: "https://picsum.photos/seed/gates/800/1000", url: "https://www.gatesnotes.com/" },
  { title: "Usain Bolt", category: "Web Projects", image: "https://picsum.photos/seed/bolt/800/1000", url: "https://usainbolt.com/" },
  { title: "Katy Perry", category: "Web Projects", image: "https://picsum.photos/seed/katy/800/1000", url: "https://www.katyperry.com/" },
  { title: "The City University of New York (CUNY)", category: "Web Projects", image: "https://picsum.photos/seed/cuny/800/1000", url: "https://www.cuny.edu/" },
  { title: "The Rolling Stones", category: "Web Projects", image: "https://picsum.photos/seed/stones/800/1000", url: "https://rollingstones.com/" },
  { title: "Wired (UK)", category: "Web Projects", image: "https://picsum.photos/seed/wired/800/1000", url: "https://www.wired.co.uk/" },
  { title: "Fortune", category: "Web Projects", image: "https://picsum.photos/seed/fortune/800/1000", url: "https://fortune.com/" },
  { title: "Quartz", category: "Web Projects", image: "https://picsum.photos/seed/quartz/800/1000", url: "https://qz.com/" },
  { title: "SaaS Analytics Dashboard", category: "Web Projects", image: "https://picsum.photos/seed/web2/800/1000", url: "#" },
  { title: "Headless CMS Portal", category: "Web Projects", image: "https://picsum.photos/seed/web3/800/1000", url: "#" },
  { title: "Real-time Auction System", category: "Web Projects", image: "https://picsum.photos/seed/web4/800/1000", url: "#" },

  // App Projects
  { title: "Fitness Tracking Mobile", category: "App Projects", image: "https://picsum.photos/seed/app1/800/1000", url: "#" },
  { title: "Meditation & Wellness", category: "App Projects", image: "https://picsum.photos/seed/app2/800/1000", url: "#" },
  
  // Designing Projects
  { title: "Brand Identity Revamp", category: "Designing Projects", image: "https://picsum.photos/seed/dsgn1/800/1000", url: "#" },
  { title: "Minimalist Icon Set", category: "Designing Projects", image: "https://picsum.photos/seed/dsgn2/800/1000", url: "#" }
];

export const VIDEO_PROJECTS: VideoProject[] = [
  {
    title: "NexGen ERP Solution",
    category: "SaaS Enterprise",
    image: "https://picsum.photos/seed/v1/800/600",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-on-laptop-screen-34538-large.mp4",
    url: "#",
    description: "A comprehensive enterprise resource planning tool built for modern logistics.",
    tech: ["React", "PostgreSQL", "Go", "Kubernetes"]
  },
  {
    title: "Stellar Crypto Wallet",
    category: "Web3/Fintech",
    image: "https://picsum.photos/seed/v2/800/600",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-web-development-codes-on-a-screen-44474-large.mp4",
    url: "#",
    description: "Secure, non-custodial wallet featuring multi-chain swaps and real-time gas tracking.",
    tech: ["Next.js", "Web3.js", "Ethereum", "Tailwind"]
  },
  {
    title: "Vitality Health Engine",
    category: "HealthTech AI",
    image: "https://picsum.photos/seed/v3/800/600",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-person-typing-fast-on-a-laptop-keyboard-44473-large.mp4",
    url: "#",
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
