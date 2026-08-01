import { motion } from "framer-motion";

// Wrap page content to get a consistent enter animation.
export default function PageTransition({ children }) {
  return (
    <motion.main
      className="page"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.main>
  );
}
