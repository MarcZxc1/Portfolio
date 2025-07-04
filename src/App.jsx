import { Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy } from "react";
import Navigation from "./Components/Navigation";
import { AnimatePresence } from "framer-motion";

const Homepage = lazy(() => import("./Pages/Homepage"));
const AboutMe = lazy(() => import("./Pages/AboutMe"));
const Contact = lazy(() => import("./Pages/Contact"));
const TechStack = lazy(() => import("./Pages/TechStack"));

function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <div className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Homepage />} />
            <Route path="/tech-stack" element={<TechStack />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
