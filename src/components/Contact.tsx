import { socials } from "../assets/data";
import { getLang } from "../lib";
import { resources } from "../resources/sharedResources";
import type { LanguageKey } from "./Hero";

export const Contact = () => {
  const lang = getLang() as LanguageKey;

  return (
    <section className="bg-contact px-4 py-12" id="contact">
      <div className="mx-auto grid max-w-2xl gap-6">
        <h1 className="text-lg font-bold uppercase lg:text-xl">
          {resources[lang].contact.title}
        </h1>
        <p className="flex items-center gap-2 text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
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
          yassiraterta@gmail.com
        </p>
        <p className="text-secondary text-sm leading-relaxed tracking-wide">
          {resources[lang].contact.parag1} <br />{" "}
          {resources[lang].contact.parag2}
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
                  className="size-6 text-white xl:size-7"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
