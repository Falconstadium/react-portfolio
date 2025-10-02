import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="bg-neutral-950">
      <section className="font-oswald animate-fadein mx-auto grid min-h-dvh max-w-3xl place-content-center place-items-center">
        <h1 className="absolute animate-pulse text-[15rem] font-black tracking-tighter text-neutral-800 md:text-[20rem]">
          404
        </h1>
        <div className="z-10 grid place-items-center space-y-8 uppercase">
          <p className="text-4xl font-medium text-neutral-400 md:text-5xl">
            page not found
          </p>
          <p className="text-neutral-200">try starting again</p>
          <Link
            to={"/"}
            className="animate-bounce rounded-3xl bg-rose-700 px-6 py-2 text-sm text-neutral-50 transition-colors duration-300 hover:bg-rose-600"
          >
            return home
          </Link>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
