import type { LanguageKey } from "../components/Hero";
import { getLang } from "../lib";
import { resources } from "../resources/sharedResources";

import css from "./CSS.svg";
import html from "./HTML.svg";
import js from "./JavaScript.svg";
import react from "./React-Dark.svg";
import tailwind from "./TailwindCSS-Dark.svg";
import ts from "./TypeScript.svg";

import dentalab from "/dentalab.jpeg";
import risat from "/risat.jpeg";
import shopper from "/shopper.png";

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
    title: "Tailwind CSS",
  },
  {
    id: 4,
    title: "Redux",
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
    stack1: react,
    stack2: ts,
    stack3: tailwind,
  },
  {
    id: 2,
    src: shopper,
    name: "shopper-store",
    title: `${resources[lang].project.salla.title}`,
    desc: `${resources[lang].project.salla.desc}`,
    link: "https://shopper-estore.vercel.app/",
    githubRepo: "https://github.com/Falconstadium/shopper-store",
    className: "md:-order-1",
    stack1: react,
    stack2: ts,
    stack3: tailwind,
  },
  {
    id: 3,
    src: dentalab,
    name: "dentalab",
    title: `${resources[lang].project.dentalab.title}`,
    desc: `${resources[lang].project.dentalab.desc}`,
    link: "https://dentalab.vercel.app/",
    githubRepo: "https://github.com/Falconstadium/DENTALAB",
    stack1: html,
    stack2: css,
    stack3: js,
  },
];
