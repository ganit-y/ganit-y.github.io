import { useEffect, useRef, useState } from "react";

// Tuned values from the cursor lab.
const REFRACTION = 52; // feDisplacementMap scale
const CHURN = 66; // turbulence animation amount
const LAG = 0.16; // (35 - followLag[19]) / 100
const BASE_FREQ = 0.012;

// A liquid-glass lens that follows the mouse and refracts the content behind it.
// Chromium (Chrome/Edge) renders the SVG displacement backdrop-filter; other
// browsers fall back to the soft blur ring.
export default function CustomCursor() {
  const ringRef = useRef(null);
  const handRef = useRef(null);
  const turbRef = useRef(null);
  const [hidden, setHidden] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clickable, setClickable] = useState(false);
  const [lens, setLens] = useState(false);

  useEffect(() => {
    // Disable on touch devices where a cursor makes no sense.
    if (window.matchMedia("(pointer: coarse)").matches) {
      setHidden(true);
      return;
    }

    // Only Chromium refracts the backdrop through an SVG url() filter.
    setLens(
      CSS.supports("backdrop-filter", "url(#cursor-lens)") ||
        CSS.supports("-webkit-backdrop-filter", "url(#cursor-lens)"),
    );

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: pos.x, y: pos.y };
    let raf;
    let t = 0;

    const onMove = (e) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      const el = e.target;
      // Zoomable case-study images keep the plain lens (no hand pointer).
      const zoomImage = el.closest(".cs__figure-img, .cs__gallery-img");
      const isClickable = el.closest("a[href], button, [role='button']");
      setHovering(!!el.closest("a, button, .hoverable"));
      setClickable(!!isClickable && !zoomImage);
    };

    const render = () => {
      t += 0.016;

      // Ring trails the pointer for a smooth, liquid feel.
      ring.x += (pos.x - ring.x) * LAG;
      ring.y += (pos.y - ring.y) * LAG;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.x}px, ${ring.y}px)`;
      }
      // The hand snaps to the exact pointer position (no lag) for precision.
      if (handRef.current) {
        handRef.current.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
      }

      // Animate the noise field so the glass keeps churning.
      if (turbRef.current) {
        const amp = 0.005 * (CHURN / 35);
        const fx = Math.max(0.002, BASE_FREQ + Math.sin(t * 1.3) * amp);
        const fy = Math.max(0.002, BASE_FREQ + Math.cos(t * 0.9) * amp);
        turbRef.current.setAttribute("baseFrequency", `${fx} ${fy}`);
      }

      raf = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMove);
    render();

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (hidden) return null;

  return (
    <>
      {lens && (
        <svg
          width="0"
          height="0"
          aria-hidden="true"
          style={{ position: "absolute" }}
        >
          <defs>
            <filter
              id="cursor-lens"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feTurbulence
                ref={turbRef}
                type="fractalNoise"
                baseFrequency="0.012"
                numOctaves="2"
                seed="3"
                result="noise"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="noise"
                scale={REFRACTION}
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
          </defs>
        </svg>
      )}
      <div
        ref={ringRef}
        className={`cursor-ring ${lens ? "cursor-ring--lens" : ""} ${
          hovering ? "cursor-ring--active" : ""
        } ${clickable ? "cursor-ring--hidden" : ""}`}
      />
      <div
        ref={handRef}
        aria-hidden="true"
        className={`cursor-hand ${clickable ? "cursor-hand--show" : ""}`}
      >
        <svg width="34" height="34" viewBox="-2 -2 20 20">
          <path
            d="M8.5 1.75v2.716l.047-.002c.312-.012.742-.016 1.051.046.28.056.543.18.738.288.273.152.456.385.56.642l.132-.012c.312-.024.794-.038 1.158.108.37.148.689.487.88.716q.113.137.195.248h.582a2 2 0 0 1 1.99 2.199l-.272 2.715a3.5 3.5 0 0 1-.444 1.389l-1.395 2.441A1.5 1.5 0 0 1 12.42 16H6.118a1.5 1.5 0 0 1-1.342-.83l-1.215-2.43L1.07 8.589a1.517 1.517 0 0 1 2.373-1.852L5 8.293V1.75a1.75 1.75 0 0 1 3.5 0"
            fill="#ffffff"
            stroke="#141414"
            strokeWidth="1.0"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </>
  );
}
