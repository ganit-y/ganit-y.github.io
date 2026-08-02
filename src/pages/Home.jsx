import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";

// ── Staggered entrance variants ─────────────────────────────────
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const rise = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};
const titleContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};
const word = {
  hidden: { opacity: 0, y: "0.5em" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const TITLE =
  "I design enterprise products that help experts make confident decisions.";

export default function Home() {
  const heroRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const words = TITLE.split(" ");

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
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="hero__eyebrow" variants={rise}>
            Ganit Yahud{" "}
            <span className="hero__eyebrow-mark" style={{ margin: "0 0.12em" }}>
              <motion.span
                style={{
                  display: "inline-block",
                  fontSize: "1.5em",
                  lineHeight: 1,
                  transformOrigin: "50% 33%",
                }}
                animate={{ rotate: 360, scale: [1, 1.22, 1] }}
                transition={{
                  rotate: { duration: 5, ease: "linear", repeat: Infinity },
                  scale: { duration: 2.6, ease: "easeInOut", repeat: Infinity },
                }}
              >
                *
              </motion.span>
            </span>{" "}
            Senior Product Designer
          </motion.p>

          <motion.h1 className="hero__title" variants={titleContainer}>
            {words.map((w, i) => (
              <motion.span
                key={`${w}-${i}`}
                variants={word}
                style={{ display: "inline-block", marginRight: "0.28em" }}
              >
                {w}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p className="hero__lede" variants={rise}>
            Over 7 years at Microsoft, I designed enterprise cybersecurity
            products used by security analysts to investigate threats, manage
            vulnerabilities, and make high-stakes decisions.
          </motion.p>

          <motion.div variants={rise}>
            <Link to="/works" className="btn btn--primary hoverable">
              See selected work
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </PageTransition>
  );
}
