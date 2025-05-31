import { twMerge } from "tailwind-merge";
import { projects } from "../assets/data";
import { getLang } from "../lib";
import { resources } from "../resources/sharedResources";
import type { LanguageKey } from "./Hero";
import { motion } from "framer-motion";

const lang = getLang() as LanguageKey;

export const ProjectsPage = () => {
  return (
    <main className="bg-dark font-outfit text-white">
      <section className="mx-auto grid min-h-dvh max-w-2xl grid-rows-[auto_1fr]">
        <header className="border-b-secondary border-b-2 px-4">
          <motion.h1
            className="py-4 text-2xl font-semibold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 1 }}
          >
            {resources[lang].projects}
          </motion.h1>
        </header>
        <div className="grid place-content-center place-items-center gap-12 px-4 py-6">
          {projects.map((proj) => (
            <motion.div
              key={proj.id}
              className="shadow-box grid place-items-center gap-4 rounded px-4 py-6 lg:grid-cols-2"
              initial={{ opacity: 0, x: proj.initialX }}
              animate={{ opacity: 1, x: proj.animateX }}
              exit={{ opacity: 0, x: proj.initialX }}
              transition={{ duration: 1, delay: proj.delay }}
            >
              <img
                src={proj.src}
                alt={proj.src}
                className="h-36 w-64 cursor-pointer rounded object-cover object-top transition-all duration-1000 ease-in-out hover:object-bottom"
              />
              <div className={twMerge(proj.className)}>
                <h2 className="text-lg font-semibold capitalize">
                  {proj.title}
                </h2>
                <p className="text-secondary text-sm">{proj.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};
