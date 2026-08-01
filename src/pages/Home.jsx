import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";

export default function Home() {
  const heroRef = useRef(null);
  const [offset, setOffset] = useState(0);

  // Simple parallax: shift hero content as the user scrolls.
  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <PageTransition>
      <section className="hero" ref={heroRef}>
        <div
          className="hero__bg"
          style={{ transform: `translateY(${offset * 0.35}px)` }}
        />
        <motion.div
          className="hero__content"
          style={{ transform: `translateY(${offset * -0.15}px)` }}
        >
          <p className="hero__eyebrow">Ganit Yahud &lowast; Senior Product Designer</p>
          <h1 className="hero__title">
            I define and design complex products for expert users.
          </h1>
          <p className="hero__lede">
            I spent 8 years designing enterprise cybersecurity products at
            Microsoft.
          </p>
          <Link to="/works" className="btn btn--primary hoverable">
            View my work
          </Link>
        </motion.div>
      </section>
    </PageTransition>
  );
}
