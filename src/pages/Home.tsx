import {
  AnimatePresence,
  domAnimation,
  LazyMotion,
  motion,
} from "framer-motion";
import { useEffect, useState } from "react";
import { Contact } from "../components/Contact";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { Projects } from "../components/Projects";

const Home = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setShow(window.scrollY >= 10);
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className="grid min-h-dvh grid-rows-[auto_1fr]">
      <LazyMotion features={domAnimation}>
        <Navbar />
        <div>
          <div className="mx-auto grid min-h-dvh gap-12 py-4">
            <Hero />
            <Projects />
          </div>
        </div>
        <div className="mx-auto h-[1px] w-[95%] bg-neutral-800 md:w-1/2" />
        <Contact />
        <AnimatePresence mode="wait">
          {show && (
            <motion.button
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              type="button"
              title="Return to Top"
              className={`fixed right-4 bottom-14 rounded-full bg-blue-600 p-1 transition-colors duration-300 hover:bg-blue-500 md:right-8 md:bottom-8`}
              onClick={scrollToTop}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-up-icon lucide-arrow-up"
              >
                <path d="m5 12 7-7 7 7" />
                <path d="M12 19V5" />
              </svg>
            </motion.button>
          )}
        </AnimatePresence>
      </LazyMotion>
    </main>
  );
};

export default Home;
