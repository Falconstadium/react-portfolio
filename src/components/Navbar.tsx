import { Link } from "react-router-dom";
import { resources } from "../resources/sharedResources";
import { langList } from "../lib";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export interface NavbarProps {
  langName: keyof typeof resources; // This ensures langName matches keys in `resources`.
}

export const Navbar = ({ langName }: NavbarProps) => {
  const langFullName = langList[langName];
  const pathName = window.location.pathname.split(langName)[1];
  const langKeys: Array<keyof typeof langList> = Object.keys(langList) as Array<
    keyof typeof langList
  >;

  let lang = langName;
  let pagePath = window.location.pathname.split(lang)[1];
  pagePath = pagePath.split("/")[1];
  if (!pagePath) {
    pagePath = "home";
  }

  const [showLngMenu, setShowLngMenu] = useState(false);

  // bg-sticky
  const [color, setColor] = useState(false);
  window.addEventListener("scroll", () => {
    window.scrollY >= 10 ? setColor(true) : setColor(false);
  });

  return (
    <header
      className={`bg-nav fixed top-0 z-20 w-full px-4 py-4 transition-all duration-300 ${color ? "bg-nav/75 py-5 backdrop-blur" : ""}`}
    >
      <nav className="relative mx-auto flex max-w-2xl items-center justify-between">
        <div>
          <Link
            to={"/"}
            className="text-xl font-semibold tracking-wide uppercase"
          >
            {resources[lang].nav.name}
          </Link>
        </div>
        <ul className="flex items-center gap-4">
          <li>
            <Link
              to={"/" + lang + "/projects"}
              className="transition-all duration-200 hover:font-medium"
            >
              {resources[lang].projects}
            </Link>
          </li>
          <button
            type="button"
            className="hover:bg-card text-secondary flex items-center gap-1 rounded px-2 py-1 text-sm font-light transition-colors duration-200 ease-in-out hover:text-white"
            onClick={() => setShowLngMenu(!showLngMenu)}
          >
            {langFullName}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`lucide lucide-chevron-up-icon lucide-chevron-up transition-all duration-200 ${showLngMenu ? "rotate-180" : ""}`}
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
          <AnimatePresence mode="wait">
            {showLngMenu ? (
              <motion.div
                className={`shadow-dark bg-secondary text-dark absolute top-10 grid gap-2 rounded-sm py-1 ${lang == "ar" ? "left-0 origin-top-left" : "right-1 origin-top-right"}`}
                initial={{ opacity: 0, scale: 0, translateY: -20 }}
                animate={{ opacity: 1, scale: 1, translateY: 0 }}
                exit={{ opacity: 0, scale: 0, translateY: -20 }}
                transition={{ duration: 0.4 }}
              >
                {langKeys.map((l) => (
                  <div
                    key={l}
                    className="grid px-3 text-center transition-all duration-200 ease-in-out hover:scale-105 hover:bg-white"
                  >
                    <a
                      href={"/" + l + pathName}
                      className="text-xs hover:font-medium"
                    >
                      {langList[l]}
                    </a>
                  </div>
                ))}
              </motion.div>
            ) : null}
          </AnimatePresence>
        </ul>
      </nav>
    </header>
  );
};
