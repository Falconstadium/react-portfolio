import { motion } from "framer-motion";
import { projects } from "../assets/data";
import { getLang } from "../lib";
import { resources } from "../resources/sharedResources";
import type { LanguageKey } from "./Hero";

export const Projects = () => {
  const lang = getLang() as LanguageKey;

  return (
    <section className="mx-auto grid max-w-xl place-content-center place-items-center gap-6 px-4 py-12">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
        className="font-semibold text-rose-500 uppercase"
      >
        {resources[lang].project.title}
      </motion.h1>
      <div className="grid gap-10">
        {projects.map((pro) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            className="shadow-dark grid gap-3 rounded px-4 py-2"
            key={pro.id}
          >
            <img
              src={pro.src}
              alt={pro.name}
              loading="lazy"
              className="h-52 w-full rounded-sm object-cover object-top transition-all duration-1000 hover:object-bottom active:object-bottom md:h-[260px]"
            />
            <div className="grid place-content-center space-y-4 px-4 py-2">
              <h3 className="text-sm font-medium capitalize">
                {pro.name}: {pro.title}
              </h3>
              <p className="text-sm text-neutral-400">{pro.desc}</p>
              <p className="text-sm font-light text-neutral-400">{pro.stack}</p>
              <div className="flex items-center justify-center gap-4">
                <a
                  href={pro.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 rounded bg-blue-700 px-3 py-1.5 text-xs font-medium transition duration-300 hover:bg-blue-600 active:bg-blue-600"
                >
                  {resources[lang].hero.link}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`lucide lucide-arrow-up-right-icon lucide-arrow-up-right ${lang == "ar" ? "-rotate-90" : ""}`}
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </a>
                <a
                  href={pro.githubRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 rounded bg-white px-3 py-1.5 transition duration-300 hover:bg-neutral-400 active:bg-neutral-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-github-icon lucide-github text-gray-950"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  <p className="text-xs font-medium text-gray-950">
                    source code
                  </p>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
