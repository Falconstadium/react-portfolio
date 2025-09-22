import { getLang } from "../lib";
import { resources } from "../resources/sharedResources";
import type { LanguageKey } from "./Hero";
import LangSelector from "./LangSelector";

export const Contact = () => {
  const lang = getLang() as LanguageKey;
  const validatedLang: LanguageKey = ["en", "fr", "ar"].includes(lang)
    ? (lang as LanguageKey)
    : "en";

  return (
    <section className="bg-gray-950/40 px-6 py-10" id="contact">
      <div className="relative mx-auto flex max-w-4xl items-end justify-between">
        <div className="grid gap-4">
          <h1 className="font-bold tracking-wide uppercase">
            {resources[lang].contact.title}
          </h1>
          <p className="text-sm text-neutral-300">
            {resources[lang].contact.parag2}
          </p>
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
              className="lucide lucide-mail-icon lucide-mail text-neutral-300"
            >
              <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
              <rect x="2" y="4" width="20" height="16" rx="2" />
            </svg>
            <a
              href="mailto:yassiraterta@gmail.com"
              className="text-xs tracking-wide text-neutral-400 transition-colors duration-300 hover:text-white"
            >
              yassiraterta@gmail.com
            </a>
          </p>
        </div>
        <LangSelector langName={validatedLang} />
      </div>
    </section>
  );
};
