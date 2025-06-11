import { arSharedResources } from "./arSharedResources";
import { frSharedResources } from "./frSharedResources";

export const resources = {
  en: {
    nav: {
      name: "Yassir Aterta",
    },
    hero: {
      title: "Front-End Web Developer.",
      greeting: "Hi, I'm",
      name: "yassir",
      desc: "A Front-End Web Developer based in Agadir, Morocco.📍",
      contact: "get in touch",
      tech: "tech stack",
      link: "Click here to visit",
    },
    contact: {
      title: "contact",
      parag1:
        "Front-end web developer, focusing on developing landing pages and user interfaces.",
      parag2:
        "My main stack currently is React in combination with Tailwind CSS and TypeScript.",
    },
    project: {
      title: "Projects",
      risat: {
        title: "personal project",
        desc: "I have always wanted a platform that combines multiple tools and utilises them daily, which is why I created this website.",
      },
      salla: {
        title: "e-commerce website",
        desc: "Salla is an ecommerce site. This project uses Next.js and Shadcn-UI.",
      },
      dentalab: {
        title: "landing page",
        desc: "DENTALAB is a landing page for a dental clinic",
      },
      rayyan: {
        title: "al rayyan honey",
        desc: "This website presents some different types of honey and their benefits.",
      },
    },
  },
  fr: frSharedResources,
  ar: arSharedResources,
};
