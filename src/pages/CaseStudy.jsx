import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import Lightbox from "../components/Lightbox";
import { getWork, works } from "../data/works";

// Renders a single content block inside a section's content column.
function Block({ block, onImageClick }) {
  switch (block.type) {
    case "lead":
      return <p className="cs__text">{block.text}</p>;

    case "text":
      return <p className="cs__text">{block.text}</p>;

    case "group":
      return (
        <div className="cs__group">
          {block.items.map((item, i) => (
            <p key={i} className="cs__text">
              {i === 0 && block.label ? (
                <>
                  <strong className="cs__lead-in">{block.label}</strong>
                  {" – "}
                  {item}
                </>
              ) : (
                item
              )}
            </p>
          ))}
        </div>
      );

    case "list":
      return (
        <ul className="cs__list">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );

    case "stats":
      return (
        <div
          className={`cs__stats${
            block.tone === "negative" ? " cs__stats--negative" : ""
          }`}
        >
          {block.items.map((s, i) => (
            <div key={i} className="cs__stat">
              <span className="cs__stat-value">{s.value}</span>
              <span className="cs__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      );

    case "image":
      if (block.src) {
        return (
          <figure
            className={`cs__figure ${
              block.contained ? "cs__figure--contained" : "cs__figure--image"
            }${block.frameless ? " cs__figure--frameless" : ""}${
              block.shadow ? " cs__figure--shadow" : ""
            }`}
          >
            <div
              className="cs__figure-media"
              style={block.maxWidth ? { maxWidth: block.maxWidth } : undefined}
            >
              <img
                className="cs__figure-img hoverable"
                src={block.src}
                alt={block.label}
                loading="lazy"
                onClick={() => onImageClick({ src: block.src, alt: block.label })}
              />
            </div>
            {block.label && <figcaption className="cs__figure-caption">{block.label}</figcaption>}
          </figure>
        );
      }
      return (
        <figure className={`cs__figure cs__figure--${block.tone || "light"}`}>
          <div className="cs__figure-inner">
            <span className="cs__figure-tag">Visual</span>
            <span className="cs__figure-caption">{block.label}</span>
          </div>
        </figure>
      );

    case "gallery": {
      const items = block.items || [];
      return (
        <figure
          className={`cs__gallery-stack${
            block.frameless ? " cs__gallery-stack--frameless" : ""
          }${block.shadow ? " cs__gallery-stack--shadow" : ""}`}
        >
          {items.map((img, i) => (
            <img
              key={i}
              className="cs__gallery-img hoverable"
              src={img.src}
              alt={img.label || ""}
              loading="lazy"
              onClick={() => onImageClick({ src: img.src, alt: img.label })}
            />
          ))}
          {block.label && (
            <figcaption className="cs__figure-caption cs__gallery-caption">
              {block.label}
            </figcaption>
          )}
        </figure>
      );
    }

    case "compare": {
      const afterImgs = Array.isArray(block.after) ? block.after : [block.after];
      const compareClass = [
        "cs__compare",
        block.layout === "stack" ? "cs__compare--stack" : "",
        block.frameless ? "cs__compare--frameless" : "",
      ]
        .filter(Boolean)
        .join(" ");
      return (
        <figure className={compareClass}>
          <div className="cs__compare-grid">
            <div className="cs__compare-col cs__compare-col--before">
              <span className="cs__compare-tag">Before</span>
              <img
                className="cs__compare-img"
                src={block.before.src}
                alt={block.before.label || "Before"}
                loading="lazy"
              />
            </div>
            <div className="cs__compare-col cs__compare-col--after">
              <span className="cs__compare-tag">After</span>
              <div className="cs__compare-after">
                {afterImgs.map((img, i) => (
                  <img
                    key={i}
                    className="cs__compare-img"
                    src={img.src}
                    alt={img.label || "After"}
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </div>
          {block.label && (
            <figcaption className="cs__figure-caption cs__compare-caption">
              {block.label}
            </figcaption>
          )}
        </figure>
      );
    }

    default:
      return null;
  }
}

export default function CaseStudy() {
  const { slug } = useParams();
  const work = getWork(slug);
  const [lightbox, setLightbox] = useState(null);

  if (!work) {
    return (
      <PageTransition>
        <section className="section section--top">
          <h1 className="page__title">Not found</h1>
          <p className="page__lede">
            That case study doesn&apos;t exist.{" "}
            <Link to="/works" className="link hoverable">
              Back to Works
            </Link>
          </p>
        </section>
      </PageTransition>
    );
  }

  // Determine the next project for a "next" link at the bottom.
  const index = works.findIndex((w) => w.slug === slug);
  const next = works[(index + 1) % works.length];

  return (
    <PageTransition>
      <article className="cs">
        {/* Hero */}
        <header className={`cs__hero${work.heroImage ? " cs__hero--with-media" : ""}`}>
          <div className="cs__hero-grid">
            <div className="cs__hero-text">
              <Link to="/works" className="link hoverable cs__back">
                ← Works
              </Link>
              <h1 className="cs__title">{work.title}</h1>
              <p className="cs__subtitle">{work.subtitle}</p>
              <dl className="cs__hero-meta">
                {work.meta.map((m) => (
                  <div key={m.label}>
                    <dt>{m.label}</dt>
                    <dd>{m.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            {work.heroImage && (
              <div className="cs__hero-media">
                <img src={work.heroImage} alt="" loading="eager" />
              </div>
            )}
          </div>
        </header>

        {/* Sections */}
        {work.sections.map((section, i) => {
          // Split blocks into ordered segments: runs of text-like blocks that
          // stay in the narrow reading column, and media blocks (image /
          // compare) that break out to full page width.
          const segments = [];
          let run = [];
          const flushRun = () => {
            if (run.length) {
              segments.push({ kind: "text", blocks: run });
              run = [];
            }
          };
          section.blocks.forEach((b) => {
            const isFullWidth =
              (b.type === "image" && !b.contained) || b.type === "compare";
            if (isFullWidth) {
              flushRun();
              segments.push({ kind: "media", block: b });
            } else {
              run.push(b);
            }
          });
          flushRun();

          let headerPlaced = false;
          return (
            <motion.section
              key={i}
              className="cs__section"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
            >
              {segments.map((seg, s) => {
                if (seg.kind === "media") {
                  return <Block key={s} block={seg.block} onImageClick={setLightbox} />;
                }
                const withHeader = !headerPlaced;
                headerPlaced = true;
                return (
                  <div className="cs__row" key={s}>
                    <div className="cs__rail">
                      {withHeader && section.kicker && (
                        <span className="cs__kicker">{section.kicker}</span>
                      )}
                    </div>
                    <div className="cs__content">
                      {withHeader && section.heading && (
                        <h2 className="cs__heading">{section.heading}</h2>
                      )}
                      {seg.blocks.map((block, j) => (
                        <Block key={j} block={block} onImageClick={setLightbox} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </motion.section>
          );
        })}

        {/* Next project */}
        <div className="cs__next">
          <span>Next project</span>
          <Link to={`/works/${next.slug}`} className="link hoverable">
            {next.title} →
          </Link>
        </div>
        <Lightbox item={lightbox} onClose={() => setLightbox(null)} />
      </article>
    </PageTransition>
  );
}
