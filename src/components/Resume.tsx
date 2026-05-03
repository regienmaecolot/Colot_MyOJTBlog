import { Briefcase, GraduationCap, Layers3 } from "lucide-react";

const profileCards = [
  {
    icon: GraduationCap,
    title: "Education",
    items: ["Bachelor of Science in Information Technology", "Focused on web systems, documentation, and applied software projects"],
  },
  {
    icon: Briefcase,
    title: "OJT Focus",
    items: ["Workplace readiness", "Technical support", "Web development practice", "Professional communication"],
  },
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Responsive Design",
  "Documentation",
  "Problem Solving",
  "Team Collaboration",
];

export function Resume() {
  return (
    <section id="resume" className="section-shell profile-section">
      <div className="section-heading compact">
        <p className="eyebrow">Profile snapshot</p>
        <h2>Skills and background, redesigned for quick reading.</h2>
      </div>

      <div className="profile-layout">
        <div className="profile-panel">
          <Layers3 size={28} />
          <h3>Personal Portfolio</h3>
          <p>
            A concise place to present school work, OJT progress, certificates,
            and reflections with a professional but approachable style.
          </p>
        </div>

        <div className="profile-cards">
          {profileCards.map((card) => {
            const Icon = card.icon;
            return (
              <article className="profile-card" key={card.title}>
                <Icon size={24} />
                <h3>{card.title}</h3>
                {card.items.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </article>
            );
          })}
        </div>
      </div>

      <div className="skill-cloud">
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </section>
  );
}
