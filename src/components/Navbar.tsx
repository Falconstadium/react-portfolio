export const Navbar = () => {
  return (
    <header className="px-6 py-4">
      <nav className="mx-auto max-w-4xl">
        <ul className="flex items-center justify-end gap-6 text-sm text-neutral-400">
          <li>
            <a
              href="https://www.linkedin.com/in/yassiraterta"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-white"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Falconstadium"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-white"
            >
              Github
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
