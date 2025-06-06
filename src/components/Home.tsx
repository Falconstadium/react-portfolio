import { getLang } from "../lib";
import { Contact } from "./Contact";
import { Hero } from "./Hero";
import { Navbar } from "./Navbar";
import { Projects } from "./Projects";

type LanguageKey = "en" | "fr" | "ar";

const lang = getLang();
const validatedLang: LanguageKey = ["en", "fr", "ar"].includes(lang)
  ? (lang as LanguageKey)
  : "en";

const Home = () => {
  return (
    <article className="font-main bg-dark text-white">
      <main className="grid min-h-dvh grid-rows-[auto_1fr]">
        <Navbar langName={validatedLang} />
        <div className="bg-card">
          <div className="mx-auto grid min-h-dvh max-w-2xl gap-5">
            <Hero />
            <Projects />
          </div>
        </div>
        <Contact />
      </main>
    </article>
  );
};

export default Home;
