import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Preloading from "./components/Preloading";

const Home = lazy(() => import("./pages/Home"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense
          fallback={
            <div className="grid min-h-dvh place-content-center bg-neutral-950">
              <Preloading />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Navigate to="/en/" replace />} />
            <Route path="/:lang/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
