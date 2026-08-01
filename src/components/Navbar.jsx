import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/works", label: "Works" },
  { to: "/about", label: "About" },
];

export default function Navbar() {
  return (
    <header className="nav">
      <NavLink to="/" end className="nav__brand">
        Ganit
      </NavLink>
      <nav className="nav__links">
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.end}
            className={({ isActive }) =>
              `nav__link ${isActive ? "nav__link--active" : ""}`
            }
          >
            {l.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
