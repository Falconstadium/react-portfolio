import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <header className="px-6 py-8" dir="ltr">
      <nav className="mx-auto max-w-4xl">
        <ul className="flex items-center justify-end gap-8 text-sm text-neutral-400">
          <motion.li
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <a
              href="https://www.linkedin.com/in/yassiraterta"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-white"
            >
              Linkedin
            </a>
          </motion.li>
          <motion.li
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <a
              href="https://github.com/Falconstadium"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-white"
            >
              Github
            </a>
          </motion.li>
        </ul>
      </nav>
    </header>
  );
};
