import type { IconType } from "react-icons";
import {
  correctionWebsite,
  cub3d,
  portfolio3D,
  therapyServices,
  todocal,
} from "../images/projects";

import { FiFigma, FiGithub, FiExternalLink } from "react-icons/fi";

type Media = {
  src: string;
};

type Link = {
  href: string;
  icon: IconType;
};

type Project = {
  name: string;
  description: string;
  links: Link[];
  medias: Readonly<Media[]>;
  tools: string[];
  features?: string[];
};

type Projects = {
  [K: string]: Project;
};

const projects = {
  therapyServices: {
    name: "Therapy services",
    description:
      "A simple, responsive, frontend website designed according to client preferences and following solid design principles.\n\n" +
      "The project was first designed in Figma, then translated in React and Tailwind.",
    links: [
      {
        icon: FiFigma,
        href: "https://www.figma.com/design/qfk1O1lY4IgJpreh9inOi1/Marie-Therapy-V1?node-id=54925-66&t=GjyoN93vTMGA6FH0-1",
      },
      { icon: FiGithub, href: "https://github.com/tamighi/marie-therapy" },
      { icon: FiExternalLink, href: "https://tamighi.github.io/marie-therapy" },
    ],
    medias: [{ src: therapyServices }],
    tools: ["React", "TailwindCSS", "Figma"],
  },
  correctionServices: {
    name: "Correction Services",
    description:
      "A full-stack website built from scratch, including CI/CD deployment, custom UI components and backend API and AUTH, " +
      "allowing me to gain hands-on expertise across the full modern web stack.",
    links: [
      {
        icon: FiGithub,
        href: "https://github.com/tamighi/correction-service-website",
      },
      {
        icon: FiExternalLink,
        href: "https://tamighi.github.io/correction-demo",
      },
    ],
    medias: [
      {
        src: correctionWebsite,
      },
    ],
    tools: [
      "React",
      "NestJS",
      "PostgreSQL",
      "React Query",
      "Lerna",
      "Webpack",
      "Docker",
      "Nginx",
    ],
    features: [
      "Custom UI library",
      "Custom admin panel",
      "Authentication",
      "File upload",
    ],
  },
  todocal: {
    name: "Todocal",
    description: `React-Native mobile application for managing tasks withing a calendar.

The focus was on simplicity of user experience (minimizing clicks) and speed (optimistic updates and efficient queries).`,
    links: [{ icon: FiGithub, href: "https://github.com/tamighi/todocal" }],
    medias: [
      {
        src: todocal,
      },
    ],
    tools: ["React Native", "Expo", "SQLite", "React Query"],
    features: ["Tasks management", "Drag and drop", "Recurring events"],
  },
  cub3d: {
    name: "cub3d",
    description: `Based on the FPS game Wolfenstein 3D, implementing the raycasting technique. 

Developed during my cursus at School 19 and built entirely in C, where we pushed the project to its limits and had a lot of fun experimenting.`,
    links: [{ icon: FiGithub, href: "https://github.com/Lysique/cub3d" }],
    medias: [{ src: cub3d }],
    tools: ["C"],
  },
  portfolio3D: {
    name: "Portfolio 3D",
    description: `A 3D portfolio in progress..`,
    links: [
      { icon: FiGithub, href: "https://github.com/tamighi/portfolio-3d" },
      { icon: FiExternalLink, href: "https://tamighi.github.io/portfolio-3d/" },
    ],
    medias: [{ src: portfolio3D }],
    tools: ["React", "ThreeJS", "GLSL", "Blender"],
  },
} satisfies Projects;

const projectsArray = Object.entries(projects).map(([id, project]) => ({
  id: id as keyof typeof projects,
  ...project,
}));

projectsArray.splice(3);

export { projectsArray, projects };
