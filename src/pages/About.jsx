import PageTransition from "../components/PageTransition";

const experience = [
  {
    company: "Microsoft Defender",
    role: "Senior Product Designer",
    period: "Sep 2024 – Jul 2026",
  },
  {
    company: "Microsoft Defender",
    role: "Product Designer",
    period: "Sep 2019 – Sep 2024",
  },
  {
    company: "Microsoft Cortana",
    role: "Product Design Intern",
    period: "Oct 2018 – Sep 2019",
  },
  {
    company: "Microsoft Power BI",
    role: "Product Design Intern",
    period: "Aug 2018 – Oct 2018",
  },
];

const skills = [
  "Complex Workflows",
  "Information Architecture",
  "Journey Mapping",
  "User Research",
  "Usability Testing",
  "Prototyping",
  "Design Systems",
  "Accessibility",
  "Data Visualization",
  "Figma",
  "AI-Assisted Prototyping",
];

export default function About() {
  return (
    <PageTransition>
      <section className="section section--top about">
        <div className="about__grid">
          <div className="about__text">
            <p className="about__intro">
              I&apos;m a Senior Product Designer at Microsoft with 8 years of
              experience in enterprise cybersecurity and complex B2B SaaS.
              <br />
              I turn ambiguous, dense, technical problem spaces into clean,
              intuitive workflows. I&apos;ve led 0→1 product incubations and
              helped define UX foundations across Microsoft Defender.
            </p>

            <ul className="about__contact">
              <li>
                <span className="about__contact-mark">*</span>
                <a
                  className="link hoverable"
                  href="mailto:ganit.yahud@gmail.com"
                >
                  Email me
                </a>
                <span className="about__contact-note">
                  {" "}
                  → Best way to contact me
                </span>
              </li>
              <li>
                <span className="about__contact-mark">*</span>
                <a
                  className="link hoverable"
                  href="https://www.linkedin.com/in/ganit-yahud/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
          <div className="about__photo">
            <img src="/assets/IMG_5255.jpg" alt="Ganit Yahud" />
          </div>
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

        <div className="resume__block">
          <h2>Experience</h2>
          {experience.map((job, i) => (
            <div key={i} className="resume__row">
              <h3>
                {job.company}{" "}
                <span className="resume__role">· {job.role}</span>
              </h3>
              <span className="resume__period">{job.period}</span>
            </div>
          ))}
        </div>

        <div className="resume__block">
          <h2>Education</h2>
          <div className="resume__item">
            <div className="resume__item-head">
              <h3>
                B.Des. in Visual Communication (UX) ·{" "}
                <span>Shenkar College of Engineering, Art and Design</span>
              </h3>
              <span className="resume__period">2015 – 2019</span>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
