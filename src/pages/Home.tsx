import { Contact } from "../components/Contact";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import { Projects } from "../components/Projects";

const Home = () => {
  return (
    <main className="font-main grid min-h-dvh grid-rows-[auto_1fr] bg-neutral-950 text-gray-50">
      <Navbar />
      <div>
        <div className="mx-auto grid min-h-dvh gap-12 py-10">
          <Hero />
          <Projects />
        </div>
      </div>
      <Contact />
    </main>
  );
};

export default Home;
