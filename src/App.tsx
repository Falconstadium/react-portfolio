import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Preloading from "./components/Preloading";

const Home = lazy(() => import("./routes/Home"));
const ProjectsPage = lazy(() => import("./routes/ProjectsPage"));
const NotFound = lazy(() => import("./routes/NotFound"));

function Routing() {
  return (
    <Suspense
      fallback={
        <div className="bg-hero grid min-h-dvh place-content-center">
          <Preloading />
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Navigate to="/en/" replace />} />
        <Route path="/:lang/" element={<Home />} />
        <Route path="/:lang/projects" element={<ProjectsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </>
  );
}

export default App;
