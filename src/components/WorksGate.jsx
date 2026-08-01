import { useState } from "react";
import PageTransition from "./PageTransition";

const PASSWORD = "polarbears";
const STORAGE_KEY = "works-unlocked";

// Client-side gate for the Works section. This is a light deterrent, not real
// security — the password ships in the bundle. Once unlocked, the answer is
// remembered for the browser session so visitors aren't re-prompted.
export default function WorksGate({ children }) {
  const [unlocked, setUnlocked] = useState(
    () => sessionStorage.getItem(STORAGE_KEY) === "yes"
  );
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  if (unlocked) return children;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim().toLowerCase() === PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, "yes");
      setUnlocked(true);
    } else {
      setError(true);
    }
  };

  return (
    <PageTransition>
      <section className="section section--top gate">
        <div className="gate__box">
          <h1 className="page__title">Protected</h1>
          <p className="gate__lede">
            This section is password protected. Enter the password to continue.
          </p>
          <form className="gate__form" onSubmit={handleSubmit}>
            <input
              className="gate__input hoverable"
              type="password"
              placeholder="Password"
              autoFocus
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                setError(false);
              }}
              aria-label="Password"
            />
            <button className="btn btn--primary hoverable" type="submit">
              Unlock
            </button>
          </form>
          {error && (
            <p className="gate__error">Incorrect password. Try again.</p>
          )}
        </div>
      </section>
    </PageTransition>
  );
}
