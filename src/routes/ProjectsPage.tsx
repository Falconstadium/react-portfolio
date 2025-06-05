import { twMerge } from "tailwind-merge";
import { projects } from "../assets/data";
import { getLang } from "../lib";
import { resources } from "../resources/sharedResources";
import type { LanguageKey } from "../components/Hero";
import { useState } from "react";
import { Link } from "react-router-dom";
import pic from "/y.svg";

export const lang = getLang() as LanguageKey;

const ProjectsPage = () => {
  // bg-sticky

  const [color, setColor] = useState(false);
  window.addEventListener("scroll", () => {
    window.scrollY >= 10 ? setColor(true) : setColor(false);
  });

  return (
    <main className="bg-card font-outfit text-white">
      <header
        className={`bg-nav py-.5 sticky top-0 z-10 px-4 py-0.5 transition-all duration-300 ${color ? "bg-nav/75 backdrop-blur" : ""}`}
      >
        <nav className="mx-auto flex max-w-2xl items-center justify-between">
          <div className="animate-salla">
            <Link
              to={"/" + lang}
              className="text-xl font-semibold tracking-wide uppercase"
            >
              <img src={pic} alt={pic} className="h-14 w-14" />
            </Link>
          </div>
          <h3 className="from-softOrange to-boldOrange animate-risat bg-gradient-to-b bg-clip-text text-xl font-bold text-transparent uppercase">
            {resources[lang].project.title}
          </h3>
        </nav>
      </header>

      <section className="mx-auto grid min-h-dvh max-w-2xl grid-rows-[auto_1fr]">
        <div className="grid place-content-center place-items-center gap-12 px-4 py-12">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className={twMerge(
                "shadow-box mx-auto grid w-full place-items-center gap-3 rounded px-4 py-4 lg:grid-cols-2",
                proj.animate,
              )}
            >
              <img
                src={proj.src}
                alt={proj.src}
                loading="lazy"
                className="h-40 w-64 cursor-pointer rounded object-cover object-top transition-all duration-1000 ease-in-out hover:object-bottom"
              />
              <div className={twMerge("grid gap-0.5 py-6", proj.className)}>
                <h2 className="font-semibold tracking-wide capitalize xl:text-lg">
                  {proj.title}
                </h2>
                <p className="text-secondary text-sm tracking-wider">
                  {proj.desc}
                </p>
                <div className="flex items-center justify-center gap-4 pt-3">
                  <img
                    src={proj.stack1}
                    alt={proj.stack1}
                    className="w-6 transition-all duration-300 hover:-translate-y-2"
                  />
                  <img
                    src={proj.stack2}
                    alt={proj.stack2}
                    className="w-6 transition-all duration-300 hover:-translate-y-2"
                  />
                  <img
                    src={proj.stack3}
                    alt={proj.stack3}
                    className="w-6 transition-all duration-300 hover:-translate-y-2"
                  />
                </div>
                <div className="mt-4 flex items-center justify-center gap-2">
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:bg-blue flex items-center gap-1.5 rounded-2xl bg-blue-500 px-4 py-1 transition-colors duration-300"
                  >
                    <span className="text-xs font-medium capitalize">
                      {resources[lang].hero.link}
                    </span>
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
                      className="lucide lucide-external-link-icon lucide-external-link"
                    >
                      <path d="M15 3h6v6" />
                      <path d="M10 14 21 3" />
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    </svg>
                  </a>
                  <a
                    href={proj.githubRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="github-repo"
                    className="bg-dark hover:bg-nav rounded px-2 py-1 transition-all duration-300 hover:scale-110"
                  >
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
                      className="lucide lucide-github-icon lucide-github"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;
