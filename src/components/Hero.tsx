import { tech } from "../assets/data";
import { getLang } from "../lib";
import { resources } from "../resources/sharedResources";

export type LanguageKey = keyof typeof resources;

const lang = getLang() as LanguageKey;

export const Hero = () => {
  return (
    <div className="animate-fadein mx-auto grid max-w-lg place-content-center place-items-start gap-3 px-6 py-12">
      <div className="img mx-auto mb-4 aspect-square w-32 bg-[url('./assets/hero-pic.jpg')] bg-cover bg-center bg-no-repeat md:mx-0"></div>
      <h1 className="leading-none text-white">
        {resources[lang].hero.greeting}
        <span className="capitalize">{resources[lang].hero.name}.</span>
      </h1>
      <p className="text-sm text-neutral-400">
        {resources[lang].hero.title}
        <span> {resources[lang].hero.desc}</span>
      </p>

      <h3 className="text-sm tracking-wide text-white capitalize">
        {resources[lang].hero.tech}
      </h3>
      <ul className="flex flex-wrap items-center gap-4">
        {tech.map((stack) => (
          <li key={stack.id}>
            <h4 className="text-sm font-light text-neutral-400">
              {stack.title}
            </h4>
          </li>
        ))}
      </ul>
      <button className="mt-6 rounded-4xl bg-white px-8 py-1.5 text-sm text-neutral-950 transition-colors duration-300 ease-in-out hover:bg-neutral-400 focus:bg-neutral-400">
        <a href="#contact" className="font-medium">
          {resources[lang].hero.contact}
        </a>
      </button>
    </div>
  );
};
