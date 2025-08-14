import { tech } from "../assets/data";
import { getLang } from "../lib";
import { resources } from "../resources/sharedResources";

export type LanguageKey = keyof typeof resources;

const lang = getLang() as LanguageKey;

export const Hero = () => {
  return (
    <div className="animate-fadein grid place-content-center place-items-center gap-6 px-6 py-10 xl:py-12">
      <div className="img aspect-square w-48 bg-[url('/me-yassir.jpeg')] bg-cover bg-no-repeat"></div>
      <div className="grid gap-2 text-center">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tighter xl:text-3xl">
            {resources[lang].hero.title}
          </h1>
          <p className="text-secondary text-xs">
            <span>
              {resources[lang].hero.greeting}
              <strong className="uppercase">
                {resources[lang].hero.name}.
              </strong>
            </span>
            <span> {resources[lang].hero.desc}</span>
          </p>
        </div>
        <button className="text-dark hover:bg-secondary active:bg-secondary mx-auto mt-2 rounded-2xl bg-white px-4 py-1 text-xs font-semibold transition-colors duration-300 ease-in-out">
          <a href="#contact" className="">
            {resources[lang].hero.contact}
          </a>
        </button>
        <div className="grid gap-3 pt-6">
          <h3 className="to-secondary bg-gradient-to-b from-white bg-clip-text text-sm font-bold tracking-wide text-transparent uppercase">
            {resources[lang].hero.tech}
          </h3>
          <ul className="flex items-center justify-center gap-4">
            {tech.map((stack) => (
              <li key={stack.id}>
                <img
                  src={stack.src}
                  alt={stack.src}
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
