import { lazy, Suspense } from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Preloading from "./components/Preloading";

const Home = lazy(() => import("./components/Home"));
const ProjectsPage = lazy(() => import("./routes/ProjectsPage"));
const NotFound = lazy(() => import("./routes/NotFound"));

function Routing() {
  return (
    <Suspense
      fallback={
        <div className="bg-card grid min-h-dvh place-content-center">
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
