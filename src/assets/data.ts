import type { LanguageKey } from "../components/Hero";
import { getLang } from "../lib";
import { resources } from "../resources/sharedResources";

import dentalab from "./dentalab.jpeg";
import huge from "./hugeweather.jpeg";
import risat from "./risat.jpeg";
import shopper from "./shopper.png";

const lang = getLang() as LanguageKey;

export const tech = [
  {
    id: 1,
    title: "JavaScript",
  },
  {
    id: 2,
    title: "React.js",
  },
  {
    id: 3,
    title: "CSS",
  },
  {
    id: 4,
    title: "Zustand",
  },
  {
    id: 5,
    title: "UI/UX",
  },
];

export const projects = [
  {
    id: 1,
    src: risat,
    name: "Risat",
    title: `${resources[lang].project.risat.title}`,
    desc: `${resources[lang].project.risat.desc}`,
    link: "https://risat.vercel.app/",
    githubRepo: "https://github.com/Falconstadium/risat",
    stack: "React, TypeScript, Tailwind CSS, Tanstack Router",
    rotate: 5,
  },
  {
    id: 2,
    src: shopper,
    name: "shopper-store",
    title: `${resources[lang].project.salla.title}`,
    desc: `${resources[lang].project.salla.desc}`,
    link: "https://shopper-estore.vercel.app/",
    githubRepo: "https://github.com/Falconstadium/shopper-store",
    stack:
      "React, TypeScript, Tailwind CSS, Zustand, Tanstack Router, Tanstack Query",
    rotate: -5,
  },
  {
    id: 3,
    src: dentalab,
    name: "dentalab",
    title: `${resources[lang].project.dentalab.title}`,
    desc: `${resources[lang].project.dentalab.desc}`,
    link: "https://dentalab.vercel.app/",
    githubRepo: "https://github.com/Falconstadium/DENTALAB",
    stack: "Html, CSS, JavaScript, AOS",
    rotate: 5,
  },
  {
    id: 4,
    src: huge,
    name: "huge weather",
    title: `${resources[lang].project.huge.title}`,
    desc: `${resources[lang].project.huge.desc}`,
    link: "https://hugeweather.vercel.app/",
    githubRepo: "https://github.com/Falconstadium/hugeweather",
    stack: "Next.js, Tailwind CSS, TypeScript, GSAP",
    rotate: -5,
  },
];
