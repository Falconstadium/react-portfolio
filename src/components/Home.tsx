import { getLang } from "../lib";
import { Contact } from "./Contact";
import { Hero } from "./Hero";
import { Navbar } from "./Navbar";
import { Projects } from "./Projects";

type LanguageKey = "en" | "fr" | "ar";

const lang: any = getLang();
const validatedLang: LanguageKey = ["en", "fr", "ar"].includes(lang)
  ? (lang as LanguageKey)
  : "en";

export const Home = () => {
  return (
    <article className="font-outfit bg-dark text-white">
      <main className="grid min-h-dvh grid-rows-[1fr]">
        <Navbar langName={validatedLang} />
        <div className="bg-card">
          <div className="mx-auto max-w-2xl">
            <Hero />
            <Projects />
          </div>
        </div>
        <Contact />
      </main>
    </article>
  );
};
