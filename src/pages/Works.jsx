import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import { works } from "../data/works";

export default function Works() {
  return (
    <PageTransition>
      <section className="section section--top">
        <ul className="worklist">
          {works.map((w, i) => (
            <motion.li
              key={w.slug}
              className="worklist__row"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                to={`/works/${w.slug}`}
                className="worklist__media hoverable"
                aria-label={w.title}
              >
                <img src={w.cardImage} alt="" loading="lazy" />
              </Link>
              <Link to={`/works/${w.slug}`} className="worklist__text hoverable">
                <h3 className="worklist__title">{w.title}</h3>
                <p className="worklist__desc">{w.subtitle}</p>
                {w.tags && w.tags.length > 0 && (
                  <div className="worklist__tags">
                    {w.tags.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </section>
    </PageTransition>
  );
}
