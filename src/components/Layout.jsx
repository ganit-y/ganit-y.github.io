import { useOutlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { cloneElement } from "react";
import Navbar from "./Navbar";
import CustomCursor from "./CustomCursor";

export default function Layout() {
  const location = useLocation();
  const outlet = useOutlet();

  return (
    <div className="app">
      <CustomCursor />
      <Navbar />
      <AnimatePresence mode="wait">
        {/* key by pathname so the leaving page finishes its exit animation */}
        {outlet && cloneElement(outlet, { key: location.pathname })}
      </AnimatePresence>
      {/* Footer hidden for now — restore if needed.
      <footer className="footer">
        <span>© {new Date().getFullYear()} Ganit Yahud</span>
      </footer>
      */}
    </div>
  );
}
