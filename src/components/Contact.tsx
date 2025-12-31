import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <section className="font-satoshi py-8" id="contact" dir="ltr">
      <div className="mx-auto grid max-w-2xl place-items-center gap-6 md:grid-cols-2">
        <div className="flex items-center gap-2 text-neutral-400 transition-colors duration-300 hover:text-white active:text-white">
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
        </div>

        <ul className="flex items-center justify-end gap-6 text-xs font-medium text-neutral-400 md:text-sm">
          <motion.li
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: "all" }}
            transition={{ duration: 1, ease: "easeOut" }}
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
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
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
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
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
