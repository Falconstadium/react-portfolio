import { tech } from "../assets/data";
import { getLang } from "../lib";
import { resources } from "../resources/sharedResources";

export type LanguageKey = keyof typeof resources;

const lang = getLang() as LanguageKey;

export const Hero = () => {
  return (
    <div className="animate-fadein mt-4 grid place-content-center place-items-center gap-6 px-6 py-10 md:mt-8 xl:py-16">
      <div className="img aspect-square w-52 bg-[url('/me-yassir.jpeg')] bg-cover bg-no-repeat"></div>
      <div className="grid gap-2 text-center">
        <div className="grid gap-2 md:gap-1">
          <h1 className="bg-gradient-to-b from-white to-neutral-300 bg-clip-text text-2xl leading-none font-extrabold tracking-tighter text-transparent xl:text-3xl">
            {resources[lang].hero.title}
          </h1>
          <p className="text-xs text-neutral-300">
            <span>
              {resources[lang].hero.greeting}
              <strong className="uppercase">
                {resources[lang].hero.name}.
              </strong>
            </span>
            <span> {resources[lang].hero.desc}</span>
          </p>
        </div>
        <button className="mx-auto mt-2 rounded-2xl bg-white px-4 py-2 text-xs text-neutral-900 transition-colors duration-300 ease-in-out hover:bg-neutral-300 active:bg-neutral-400">
          <a href="#contact" className="font-semibold">
            {resources[lang].hero.contact}
          </a>
        </button>
        <div className="grid gap-3 pt-6">
          <h3 className="bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-sm font-bold tracking-wide text-transparent uppercase">
            {resources[lang].hero.tech}
          </h3>
          <ul className="flex items-center justify-center gap-4">
            {tech.map((stack) => (
              <li key={stack.id}>
                <img
                  src={stack.src}
                  alt={stack.title}
                  loading="lazy"
                  className="w-8 transition-transform duration-500 ease-in-out hover:-translate-y-1 active:-translate-y-1"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
