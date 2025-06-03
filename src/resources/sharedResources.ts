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
    projects: "Projects",
  },
  fr: frSharedResources,
  ar: arSharedResources,
};
