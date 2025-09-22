import { arSharedResources } from "./arSharedResources";
import { frSharedResources } from "./frSharedResources";

export const resources = {
  en: {
    nav: {
      name: "Yassir Aterta",
    },
    hero: {
      title:
        "Front-end Web Developer, focusing on developing beautiful UI and UX,",
      greeting: "Hi, I'm ",
      name: "yassir",
      desc: " based in Agadir, Morocco.📍",
      contact: "Get in touch",
      tech: "tech stack",
      link: "Click here to visit",
    },
    contact: {
      title: "contact",
      parag2: "Don't hesitate to contact me! 👇",
    },
    project: {
      title: "Projects",
      risat: {
        title: "personal project",
        desc: "I've always wanted a platform that combines multiple tools and utilises them daily, which is why I created this website.",
      },
      salla: {
        title: "e-commerce site",
        desc: "Shopper store is an ecommerce site. This site is built using fake store api with tanstack query to fetch data and zustand for state management.",
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
