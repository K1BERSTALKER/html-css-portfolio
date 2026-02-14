/**
 * DATA MODULE
 * All static data (projects, skills, socials, links) in one place.
 */

const DATA = {
  projects: [
    {
      id: 1,
      title: "EcoSphere AI",
      description:
        "A sustainability tracking platform using real-time sensor data and machine learning for carbon footprint reduction.",
      tags: ["React", "TypeScript", "D3.js", "Gemini API"],
      imageUrl: "https://picsum.photos/seed/eco/600/400",
      link: "#",
    },
    {
      id: 2,
      title: "Lumina Dashboard",
      description:
        "Enterprise-grade analytics dashboard with customizable widgets and ultra-low latency data synchronization.",
      tags: ["Next.js", "Tailwind CSS", "Redux Toolkit"],
      imageUrl: "https://picsum.photos/seed/dashboard/600/400",
      link: "#",
    },
    {
      id: 3,
      title: "CryptoFlow Mobile",
      description:
        "Decentralized wallet management with integrated swapping and NFT gallery visualization.",
      tags: ["React Native", "Web3.js", "Framer Motion"],
      imageUrl: "https://picsum.photos/seed/crypto/600/400",
      link: "#",
    },
  ],

  skills: [
    { name: "React / Next.js", category: "frontend", icon: "⚛️" },
    { name: "TypeScript", category: "frontend", icon: "📘" },
    { name: "Tailwind CSS", category: "frontend", icon: "🎨" },
    { name: "Node.js", category: "backend", icon: "🟢" },
    { name: "PostgreSQL", category: "backend", icon: "🐘" },
    { name: "Gemini / LLMs", category: "tools", icon: "✨" },
    { name: "Docker", category: "tools", icon: "🐳" },
    { name: "Unit Testing", category: "tools", icon: "🧪" },
  ],

  socials: ["Twitter", "GitHub", "LinkedIn", "Dribbble"],

  footerLinks: ["Home", "Skills", "Projects", "Contact"],
};
