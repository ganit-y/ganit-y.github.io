import PageTransition from "../components/PageTransition";

const experience = [
  {
    role: "Senior Product Designer",
    company: "Company Name",
    period: "2022 – Present",
    points: [
      "Describe a key responsibility or achievement here.",
      "Add another accomplishment with a measurable result.",
    ],
  },
  {
    role: "Product Designer",
    company: "Previous Company",
    period: "2019 – 2022",
    points: [
      "Describe a key responsibility or achievement here.",
      "Add another accomplishment with a measurable result.",
    ],
  },
];

const skills = [
  "UX Design",
  "UI Design",
  "Prototyping",
  "Design Systems",
  "User Research",
  "Figma",
  "HTML/CSS",
  "Accessibility",
];

export default function About() {
  return (
    <PageTransition>
      <section className="section section--top about">
        <div className="resume__head">
          <div>
            <h1 className="page__title">About me</h1>
          </div>
        </div>

        <div className="about__grid">
          <div className="about__photo">
            <img src="/assets/IMG_5255.jpg" alt="Ganit Yahud" />
          </div>
          <div className="about__text">
            <p>
              Replace this with your bio. Talk about your background, what you
              care about as a designer, and the kinds of problems you love to
              solve.
            </p>
            <p>
              You can add a second paragraph about your approach, your interests
              outside of work, or what you&apos;re looking for next.
            </p>

            <h3>What I do</h3>
            <ul className="about__list">
              <li>Product &amp; UX design</li>
              <li>Design systems</li>
              <li>Prototyping &amp; interaction design</li>
              <li>User research</li>
            </ul>

            <h3>Get in touch</h3>
            <p>
              <a className="link hoverable" href="mailto:ganit.yahud@gmail.com">
                ganit.yahud@gmail.com
              </a>
            </p>
            <p>
              <a
                className="link hoverable"
                href="https://www.linkedin.com/in/ganit-yahud/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>

        <div className="resume__block">
          <h2>Experience</h2>
          {experience.map((job) => (
            <div key={job.role} className="resume__item">
              <div className="resume__item-head">
                <h3>
                  {job.role} · <span>{job.company}</span>
                </h3>
                <span className="resume__period">{job.period}</span>
              </div>
              <ul>
                {job.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="resume__block">
          <h2>Skills</h2>
          <div className="tags">
            {skills.map((s) => (
              <span key={s} className="tag">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
