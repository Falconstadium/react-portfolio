import { arSharedResources } from "./arSharedResources";
import { frSharedResources } from "./frSharedResources";

export const resources = {
  en: {
    nav: {
      name: "Yassir Aterta",
    },
    hero: {
      title:
        "Front-end Developer, focusing on developing and creating responsive beautiful UI and UX.",
      greeting: "Hi, I'm ",
      name: "yassir",
      desc: " based in Agadir, Morocco.📍",
      contact: "Get in Touch",
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
        desc: "DENTALAB is a landing page for a dental clinic, it includes a brief introduction and some of their services.",
      },
      huge: {
        title: "travel company",
        desc: "Huge Weather is a travel company that targets women. This company looks to increase their sales.",
      },
    },
  },
  fr: frSharedResources,
  ar: arSharedResources,
};
