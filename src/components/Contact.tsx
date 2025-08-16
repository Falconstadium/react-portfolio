import { socials } from "../assets/data";
import { getLang } from "../lib";
import { resources } from "../resources/sharedResources";
import type { LanguageKey } from "./Hero";

export const Contact = () => {
  const lang = getLang() as LanguageKey;

  return (
    <section className="bg-contact px-4 py-12" id="contact">
      <div className="mx-auto grid max-w-2xl gap-4">
        <h1 className="text-lg font-bold tracking-wide uppercase lg:text-xl xl:text-xl">
          {resources[lang].contact.title}
        </h1>
        <p className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-mail-icon lucide-mail text-secondary"
          >
            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
            <rect x="2" y="4" width="20" height="16" rx="2" />
          </svg>
          <a
            href="mailto:yassiraterta@gmail.com"
            className="text-secondary text-xs tracking-wide transition-colors duration-300 hover:text-white"
          >
            yassiraterta@gmail.com
          </a>
        </p>
        <p className="text-secondary grid gap-0.5 text-xs">
          <span>{resources[lang].contact.parag1}</span>
          <br />
          <span>{resources[lang].contact.parag2}</span>
        </p>
        <ul className="flex items-center gap-6 pl-1">
          {socials.map((social) => (
            <li
              key={social.id}
              className="transition-all duration-300 hover:-translate-y-1"
            >
              <a href={social.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={social.src}
                  alt={social.src}
                  className="size-5 text-white xl:size-6"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
