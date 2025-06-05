import { tech } from "../assets/data";
import { getLang } from "../lib";
import { resources } from "../resources/sharedResources";

export type LanguageKey = keyof typeof resources;

const lang = getLang() as LanguageKey;

export const Hero = () => {
  return (
    <div className="animate-fadein grid min-h-dvh place-content-center place-items-center gap-6 px-6 pt-8">
      <div className="img aspect-square w-56 bg-[url('/me-yassir.jpeg')] bg-cover bg-no-repeat xl:w-60"></div>
      <div className="grid gap-2 text-center">
        <div>
          <h1 className="text-xl font-semibold lg:text-3xl">
            {resources[lang].hero.title}
          </h1>
          <p className="text-secondary text-xs tracking-wider lg:text-sm">
            <span>
              {resources[lang].hero.greeting}{" "}
              <strong className="uppercase">
                {resources[lang].hero.name}.
              </strong>
            </span>
            <span> {resources[lang].hero.desc}</span>
          </p>
        </div>
        <button className="text-dark hover:bg-secondary mx-auto mt-2 rounded-2xl bg-white px-4 py-1 text-sm font-medium capitalize transition-colors duration-300 ease-in-out">
          <a href="#contact">{resources[lang].hero.contact}</a>
        </button>
        <div className="grid gap-3 pt-6">
          <h3 className="to-secondary bg-gradient-to-b from-white bg-clip-text font-semibold tracking-wide text-transparent uppercase xl:text-lg">
            {resources[lang].hero.tech}
          </h3>
          <ul className="flex items-center justify-center gap-4">
            {tech.map((stack) => (
              <li key={stack.id}>
                <img
                  src={stack.src}
                  alt={stack.src}
                  loading="lazy"
                  className="w-5 transition-transform duration-500 ease-in-out hover:-translate-y-1 lg:w-7"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
