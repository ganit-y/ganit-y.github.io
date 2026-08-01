import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Works from "./pages/Works";
import CaseStudy from "./pages/CaseStudy";
import About from "./pages/About";
import WorksGate from "./components/WorksGate";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/works"
            element={
              <WorksGate>
                <Works />
              </WorksGate>
            }
          />
          <Route
            path="/works/:slug"
            element={
              <WorksGate>
                <CaseStudy />
              </WorksGate>
            }
          />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
