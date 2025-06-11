import { Link } from "react-router-dom";

import { resources } from "../resources/sharedResources";

import pic from "/y.svg";
import LangSelector from "./LangSelector";

interface NavbarProps {
  langName: keyof typeof resources;
}

export const Navbar = ({ langName }: NavbarProps) => {
  let lang = langName;

  return (
    <header className="bg-nav w-full px-4 py-0.5 transition-all duration-300">
      <nav className="relative mx-auto flex max-w-2xl items-center justify-between">
        <div className="animate-salla">
          <Link
            to={"/" + lang}
            className="text-xl font-semibold tracking-wide uppercase"
          >
            <img src={pic} alt={pic} loading="lazy" className="h-14 w-14" />
          </Link>
        </div>
        <ul className="animate-risat flex items-center gap-4">
          <li>
            <Link
              to={"/" + lang + "/projects"}
              className="transition-all duration-200 hover:font-medium active:font-medium"
            >
              {resources[lang].project.title}
            </Link>
          </li>

          {/* lang menu */}
          <LangSelector langName={langName} />
        </ul>
      </nav>
    </header>
  );
};
