import type { LanguageKey } from "../components/Hero";
import { getLang } from "../lib";
import { resources } from "../resources/sharedResources";

import html from "/HTML.svg";
import css from "/CSS.svg";
import js from "/JavaScript.svg";
import ts from "/TypeScript.svg";
import tailwind from "/TailwindCSS-Dark.svg";
import react from "/React-Dark.svg";
import next from "/React-Dark.svg";

import risat from "/risat.jpeg";
import salla from "/salla.jpeg";
import dentalab from "/dentalab.jpeg";

import github from "/github.svg";
import linkedin from "/linkedin-1.svg";

const lang = getLang() as LanguageKey;

export const tech = [
  {
    id: 1,
    src: html,
  },
  {
    id: 2,
    src: css,
  },
  {
    id: 3,
    src: js,
  },
  {
    id: 4,
    src: ts,
  },
  {
    id: 5,
    src: tailwind,
  },
  {
    id: 6,
    src: react,
  },
];

export const socials = [
  {
    id: 1,
    src: github,
    link: "https://github.com/Falconstadium",
  },
  {
    id: 2,
    src: linkedin,
    link: "https://www.linkedin.com/in/yassiraterta",
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
    animate: "animate-risat",
    stack1: react,
    stack2: ts,
    stack3: tailwind,
  },
  {
    id: 2,
    src: salla,
    name: "salla",
    title: `${resources[lang].project.salla.title}`,
    desc: `${resources[lang].project.salla.desc}`,
    link: "https://salla-ten.vercel.app/",
    githubRepo: "https://github.com/Falconstadium/salla",
    className: `lg:-order-1 ${lang == "ar" ? "pr-6" : "pl-6"}`,
    animate: "animate-salla",
    stack1: next,
    stack2: ts,
    stack3: tailwind,
  },
  {
    id: 3,
    src: dentalab,
    name: "Dentalab",
    title: `${resources[lang].project.dentalab.title}`,
    desc: `${resources[lang].project.dentalab.desc}`,
    link: "https://dentalab.vercel.app/",
    githubRepo: "https://github.com/Falconstadium/DENTALAB",
    animate: "animate-dentalab",
    stack1: html,
    stack2: css,
    stack3: js,
  },
];
