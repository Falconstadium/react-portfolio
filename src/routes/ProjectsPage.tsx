import { twMerge } from "tailwind-merge";
import { projects } from "../assets/data";
import { getLang } from "../lib";
import { resources } from "../resources/sharedResources";
import type { LanguageKey } from "../components/Hero";
import { useState } from "react";

export const lang = getLang() as LanguageKey;

export const ProjectsPage = () => {
  // bg-sticky

  const [color, setColor] = useState(false);
  window.addEventListener("scroll", () => {
    window.scrollY >= 10 ? setColor(true) : setColor(false);
  });

  return (
    <main className="bg-card font-outfit text-white">
      <header
        className={`bg-nav sticky top-0 z-10 px-4 py-4 transition-all duration-300 ${color ? "bg-nav/75 backdrop-blur" : ""}`}
      >
        <nav className="mx-auto max-w-2xl">
          <h3 className="from-softOrange to-boldOrange bg-gradient-to-b bg-clip-text text-xl font-bold text-transparent uppercase">
            {resources[lang].projects}
          </h3>
        </nav>
      </header>
      <section className="mx-auto grid min-h-dvh max-w-2xl grid-rows-[auto_1fr]">
        <div className="grid place-content-center place-items-center gap-12 px-4 py-12">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="shadow-box mx-auto grid place-items-center gap-4 rounded px-4 py-6 lg:grid-cols-2"
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
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
