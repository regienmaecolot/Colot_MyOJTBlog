import { Code2, Handshake, Lightbulb, NotebookPen } from "lucide-react";

const highlights = [
  {
    icon: NotebookPen,
    title: "Reflective learner",
    description: "Documents lessons clearly and turns daily tasks into useful learning notes.",
  },
  {
    icon: Code2,
    title: "Practical builder",
    description: "Enjoys making simple, useful web experiences with clean structure.",
  },
  {
    icon: Lightbulb,
    title: "Curious thinker",
    description: "Asks questions, studies patterns, and improves with every project iteration.",
  },
  {
    icon: Handshake,
    title: "Reliable teammate",
    description: "Values communication, accountability, and respectful collaboration.",
  },
];

export function About() {
  return (
    <section id="about" className="section-shell about-section">
      <div className="section-heading">
        <p className="eyebrow">About the author</p>
        <h2>Built for learning, reflection, and growth.</h2>
      </div>

      <div className="about-grid">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&h=700&fit=crop"
            alt="Workspace with laptop and notes"
          />
        </div>

        <div className="about-copy">
          <p>
            This portfolio presents Regien Mae D. Colot's OJT journey in a more
            polished, readable, and personal way. It brings together her profile,
            skills, school milestones, certificates, photos, and blog entries in
            one fresh experience.
          </p>
          <p>
            The design focuses on clarity: strong spacing, friendly colors, crisp
            cards, and a journal-style layout that makes the website feel modern
            while still being easy to scan.
          </p>

          <div className="highlight-grid">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="mini-card">
                  <Icon size={22} />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
