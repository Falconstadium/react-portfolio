import { useEffect, useState } from "react";
import { projects } from "../assets/data";
import { motion } from "framer-motion";

export const Projects = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(projects.slice(0, 2));
  }, []);

  return (
    <section className="grid place-content-center place-items-center gap-6 pt-6 pb-20">
      <motion.h1
        className="from-softOrange to-boldOrange bg-gradient-to-b bg-clip-text text-xl font-bold text-transparent uppercase"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: "all", once: true }}
        transition={{ duration: 1, ease: "easeIn" }}
      >
        projects
      </motion.h1>
      <motion.div
        className="grid gap-6 md:grid-cols-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: "all", once: true }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 1 }}
      >
        {items?.map((pro) => (
          <div className="grid gap-3" key={pro.id}>
            <img
              src={pro.src}
              alt={pro.src}
              className="h-44 w-80 rounded-tl-md rounded-tr-md object-cover object-top transition-all duration-1000 hover:object-bottom"
            />
            <a
              href={pro.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-4"
            >
              <p className="grid">
                <span className="text-secondary text-xs uppercase">
                  Click here to visit
                </span>
                <span className="font-medium capitalize">
                  {pro.name}: {pro.title}
                </span>
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"
              >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </a>
          </div>
        ))}
      </motion.div>
    </section>
  );
};
