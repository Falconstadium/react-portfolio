import { motion } from "framer-motion";
import { tech } from "../assets/data";
import { getLang } from "../lib";
import { resources } from "../resources/sharedResources";

export type LanguageKey = keyof typeof resources;

const lang = getLang() as LanguageKey;

export const Hero = () => {
  return (
    <div className="grid min-h-dvh place-content-center place-items-center gap-6 px-6 pt-8">
      <motion.div
        className="aspect-square w-40 rounded-full bg-[url('/me-yassir.jpeg')] bg-cover bg-top bg-no-repeat md:w-52"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 1.5 }}
      ></motion.div>
      <div className="grid gap-2 text-center">
        <div>
          <motion.h1
            className="text-xl font-semibold xl:text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            {resources[lang].title}
          </motion.h1>
          <motion.p
            className="text-secondary text-xs tracking-wider xl:text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            Hi, I'm <strong className="uppercase">yassir aterta</strong> A
            Frontend Web Developer based in Agadir, Morocco.📍
          </motion.p>
        </div>
        <motion.button
          className="text-dark hover:bg-secondary mx-auto mt-5 rounded-2xl bg-white px-4 py-1 text-sm font-medium capitalize transition-colors duration-300 ease-in-out"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 1.5 }}
        >
          <a href="#contact">get in touch</a>
        </motion.button>
        <div className="grid gap-3 pt-6">
          <motion.h3
            className="to-secondary bg-gradient-to-b from-white bg-clip-text font-semibold text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            Tech Stack
          </motion.h3>
          <motion.ul
            className="flex items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 1.5, delay: 0.2 }}
          >
            {tech.map((stack) => (
              <li key={stack.id}>
                <img
                  src={stack.src}
                  alt={stack.src}
                  className="w-8 transition-transform duration-500 ease-in-out hover:-translate-y-1"
                />
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </div>
  );
};
