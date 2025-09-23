import { motion } from "framer-motion";
import { tech } from "../assets/data";
import { getLang } from "../lib";
import { resources } from "../resources/sharedResources";

export type LanguageKey = keyof typeof resources;

const lang = getLang() as LanguageKey;

export const Hero = () => {
  return (
    <div className="animate-fadein mx-auto grid max-w-lg place-content-center place-items-start gap-3 px-6 py-12">
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeIn" }}
        className="img mx-auto mb-4 size-32 bg-[url('./assets/hero-pic.jpg')] bg-cover bg-center bg-no-repeat md:mx-0"
      />
      <motion.h1
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-white"
      >
        {resources[lang].hero.greeting}
        <span className="capitalize">{resources[lang].hero.name}.</span>
      </motion.h1>
      <motion.p
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-sm text-neutral-400"
      >
        {resources[lang].hero.title}
        <span> {resources[lang].hero.desc}</span>
      </motion.p>

      <motion.h3
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="text-sm tracking-wide text-white capitalize"
      >
        {resources[lang].hero.tech}
      </motion.h3>
      <motion.ul
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="flex flex-wrap items-center gap-4"
      >
        {tech.map((stack) => (
          <li key={stack.id}>
            <h4 className="text-sm font-light text-neutral-400">
              {stack.title}
            </h4>
          </li>
        ))}
      </motion.ul>
      <motion.button
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="mt-6 rounded-4xl bg-white px-8 py-1.5 text-sm text-neutral-950 transition-colors duration-300 ease-in-out hover:bg-neutral-400 focus:bg-neutral-400"
      >
        <a href="#contact" className="font-medium">
          {resources[lang].hero.contact}
        </a>
      </motion.button>
    </div>
  );
};
