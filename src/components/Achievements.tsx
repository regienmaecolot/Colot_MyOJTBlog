import { Award, BadgeCheck, FileText, Medal, Presentation, Target } from "lucide-react";

const achievements = [
  { icon: BadgeCheck, title: "Consistent attendance", label: "Work ethic" },
  { icon: FileText, title: "Organized documentation", label: "OJT record" },
  { icon: Presentation, title: "Clear presentation style", label: "Communication" },
  { icon: Target, title: "Completed training tasks", label: "Milestone" },
  { icon: Medal, title: "Certificate-ready portfolio", label: "Credential" },
  { icon: Award, title: "Improved technical confidence", label: "Growth" },
];

export function Achievements() {
  return (
    <section id="achievements" className="section-shell wins-section">
      <div className="section-heading compact">
        <p className="eyebrow">Highlights</p>
        <h2>Small wins, presented with more confidence.</h2>
      </div>

      <div className="wins-grid">
        {achievements.map((achievement) => {
          const Icon = achievement.icon;
          return (
            <article className="win-card" key={achievement.title}>
              <Icon size={26} />
              <span>{achievement.label}</span>
              <h3>{achievement.title}</h3>
            </article>
          );
        })}
      </div>
    </section>
  );
}
