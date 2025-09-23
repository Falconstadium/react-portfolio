import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { langList } from "../lib";

const LangSelector = ({ langName }) => {
  const langFullName = langList[langName];
  const pathName = window.location.pathname.split(langName)[1];
  const langKeys: Array<keyof typeof langList> = Object.keys(langList) as Array<
    keyof typeof langList
  >;

  const lang = langName;
  let pagePath = window.location.pathname.split(lang)[1];
  pagePath = pagePath.split("/")[1];
  if (!pagePath) {
    pagePath = "home";
  }

  const [showLngMenu, setShowLngMenu] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setShowLngMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = () => {
    setShowLngMenu((prev) => !prev);
  };

  return (
    <>
      <motion.button
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        type="button"
        ref={buttonRef}
        onClick={() => handleClickOutside()}
        className="flex items-center gap-0.5 rounded px-2 py-1 text-sm font-medium text-neutral-300 transition-colors duration-200 ease-in-out hover:text-rose-500 focus:text-rose-500"
      >
        {langFullName}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`lucide lucide-chevron-up-icon lucide-chevron-up transition duration-300 ${showLngMenu ? (lang == "ar" ? "rotate-180" : "-rotate-180") : ""}`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </motion.button>
      <AnimatePresence mode="wait">
        {showLngMenu ? (
          <motion.div
            ref={menuRef}
            className={`absolute -top-6 grid gap-2 rounded-sm bg-gray-900 py-1 text-white ${lang == "ar" ? "left-0 origin-top-left" : "right-1 origin-top-right"}`}
            initial={{ opacity: 0, scale: 0, translateY: -20 }}
            animate={{ opacity: 1, scale: 1, translateY: 0 }}
            exit={{ opacity: 0, scale: 0, translateY: -20 }}
            transition={{ duration: 0.4 }}
          >
            {langKeys.map((l) => (
              <div
                key={l}
                className="grid px-3 py-0.5 text-center transition duration-200 ease-in-out hover:scale-105 hover:bg-neutral-600"
              >
                <a href={"/" + l + pathName} className="text-xs">
                  {langList[l]}
                </a>
              </div>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default LangSelector;
