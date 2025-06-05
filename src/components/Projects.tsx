import { useEffect, useState } from "react";
import { projects } from "../assets/data";
import { resources } from "../resources/sharedResources";
import { getLang } from "../lib";
import type { LanguageKey } from "./Hero";

export const Projects = () => {
  // show only 2 projects on the screen.
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(projects.slice(0, 2));
  }, []);

  const lang = getLang() as LanguageKey;

  return (
    <section className="grid place-content-center place-items-center gap-6 pt-6 pb-20">
      <h1 className="from-softOrange to-boldOrange bg-gradient-to-b bg-clip-text text-xl font-bold text-transparent uppercase">
        {resources[lang].project.title}
      </h1>
      <div className="grid gap-6 md:grid-cols-2">
        {items?.map((pro) => (
          <div className="grid gap-3" key={pro.id}>
            <img
              src={pro.src}
              alt={pro.src}
              loading="lazy"
              className="h-44 w-80 rounded-tl-md rounded-tr-md object-cover object-top transition-all duration-1000 hover:object-bottom"
            />
            <a
              href={pro.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-4"
            >
              <p className="grid">
                <span className="text-secondary text-xs uppercase">
                  {resources[lang].hero.link}
                </span>
                <span className="font-medium capitalize">
                  {pro.name}: {pro.title}
                </span>
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"
              >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
