import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Home } from "./components/Home";
import { NotFound } from "./components/NotFound";
import { ProjectsPage } from "./routes/ProjectsPage";

function Routing() {
  return (
    <Routes>
      <Route path="/:lang/" element={<Home />} />
      <Route path="/:lang/projects" element={<ProjectsPage />} />
      <Route path="/:lang/*" element={<NotFound />} />
    </Routes>
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
