import { european_union, fortytwo, selftaught } from "../images";

export type Experience = {
  title: string;
  companyName: string;
  period: string;
  description: string;
  icon?: string;
  features: string[];
  languages: string[];
};

type Experiences = {
  [K: string]: Experience;
};

export const experiences = {
  SJeuropeanCommission: {
    title: "Full stack developper",
    period: "Sep 2023 - August 2025",
    companyName: "IT consultant at the European Commission Legal Service",
    icon: european_union,
    description: `• Maintained and migrated Angular and Symfony applications. 
• Developed and implemented end-to-end tests and a reusable quality code package. 
• Integrated various features, including an AI chatbot and documents management using EU commission's web services.`,
    features: [
      "Angular & Symfony applications maintenance",
      "Testing & quality frameworks implementation",
      "AI & EU API powered features",
    ],
    languages: ["Angular", "Symfony (PHP)", "Oracle (SQL)"],
  },
  selfLearningJourney: {
    title: "Self learning journey",
    period: "Sep 2022 - August 2023",
    companyName: "Self taught",
    icon: selftaught,
    description: `I built a full-stack web application from scratch with React, NestJS, and PostgreSQL, including a custom UI library, admin panel, authentication, and CI/CD deployment—gaining hands-on expertise across the full modern web stack.`,
    features: [
      "Custom UI library",
      "Custom admin panel",
      "Authentication",
      "CI/CD",
    ],
    languages: [
      "React",
      "NestJS",
      "Docker",
      "Lerna",
      "Postgres",
      "Webpack",
      "Nginx",
    ],
  },
  school19: {
    title: "Software developer",
    companyName: "School 19",
    period: "July 2021 - Sep 2022",
    icon: fortytwo,
    description: `I trained at School 19 (42 Network): a project-driven, peer-to-peer program that builds developers through autonomy, collaboration, and problem-solving. 

I developed strong skills in algorithms, low-level programming, and full-stack web projects.`,
    features: ["Algorithms", "Full-Stack website", "3D graphics"],
    languages: ["C", "C++", "React", "NestJS"],
  },
} satisfies Experiences;

export const experiencesArray = Object.entries(experiences).map(
  ([id, experience]) => ({ id, ...experience }),
);
