import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <section className="font-satoshi px-6 py-8" id="contact" dir="ltr">
      <div className="mx-auto flex max-w-xl items-center justify-between">
        <div className="grid gap-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: "all" }}
            transition={{ duration: 1 }}
            className="flex items-center gap-3 text-neutral-400 transition-colors duration-300 hover:text-white active:text-white"
          >
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
              className="lucide lucide-mail-icon lucide-mail"
            >
              <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
              <rect x="2" y="4" width="20" height="16" rx="2" />
            </svg>
            <a
              href="mailto:aterta03@gmail.com"
              className="text-xs font-medium tracking-wide md:text-sm"
            >
              aterta03@gmail.com
            </a>
          </motion.div>
        </div>
        <ul className="flex items-center justify-end gap-8 text-sm font-medium text-neutral-400">
          <motion.li
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: "all" }}
            transition={{ duration: 1 }}
          >
            <a
              href="https://www.linkedin.com/in/yassiraterta"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-neutral-100"
            >
              Linkedin
            </a>
          </motion.li>
          <motion.li
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: "all" }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <a
              href="https://github.com/Falconstadium"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-neutral-100"
            >
              Github
            </a>
          </motion.li>
          <motion.li
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: "all" }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <a
              href="https://www.instagram.com/yassirdevs/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-neutral-100"
            >
              Instagram
            </a>
          </motion.li>
        </ul>
      </div>
    </section>
  );
};
