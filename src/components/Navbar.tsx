import { getLang } from "../lib";
import type { LanguageKey } from "./Hero";
import LangSelector from "./LangSelector";

export const Navbar = () => {
  const lang = getLang() as LanguageKey;
  const validatedLang: LanguageKey = ["en", "fr", "ar"].includes(lang)
    ? (lang as LanguageKey)
    : "en";
  return (
    <header className="font-satoshi px-6 py-8" dir="ltr">
      <nav className="mx-auto max-w-4xl">
        <div className="relative float-end">
          <LangSelector langName={validatedLang} />
        </div>
      </nav>
    </header>
  );
};
