import html from "/HTML.svg";
import css from "/CSS.svg";
import js from "/JavaScript.svg";
import ts from "/TypeScript.svg";
import tailwind from "/TailwindCSS-Dark.svg";
import react from "/React-Dark.svg";

import risat from "/risat.jpeg";
import salla from "/salla.jpeg";

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

// export const projectsHome = [
//   {
//     id: 1,
//     src: risat,
//     title: "Risat",
//     link: "https://risat.vercel.app/",
//     desc: "personal project",
//   },
//   {
//     id: 2,
//     src: salla,
//     title: "Salla",
//     link: "https://salla-ten.vercel.app/",
//     desc: "ecommerce website",
//   },
// ];

export const projects = [
  {
    id: 1,
    src: risat,
    name: "Risat",
    title: "personal project",
    desc: "I always wanted a platform that combines a lot of tools, and uses them every day that's why I created this website.",
    link: "https://risat.vercel.app/",
    initialX: -20,
    animateX: 0,
    delay: 0.2,
  },
  {
    id: 2,
    src: salla,
    name: "salla",
    title: "ecommerce website",
    desc: "Salla is an e-commerce website, in this project I used nextjs, this is the first time I have worked with next, I also used shadcn-ui.",
    link: "https://salla-ten.vercel.app/",
    className: "lg:-order-1",
    initialX: 20,
    animateX: 0,
    delay: 0.4,
  },
  {
    id: 3,
    src: risat,
    name: "Dentalab",
    title: "landing page",
    desc: "DENTALAB is a landing page for a dentist to introduce its lab and let people know about it, The page welcomes visitors and highlighting it as the best place to make teeth look great, with lots of services.",
    initialX: -20,
    animateX: 0,
    delay: 0.6,
  },
];
