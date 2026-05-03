import { CalendarDays, CheckCircle2 } from "lucide-react";

const timelineData = [
  {
    year: "Phase 01",
    period: "Orientation",
    title: "Getting familiar with the workplace",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&h=650&fit=crop",
    points: ["Introduced to team culture", "Reviewed tools and responsibilities", "Set learning goals"],
  },
  {
    year: "Phase 02",
    period: "Practice",
    title: "Building confidence through assigned tasks",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=650&fit=crop",
    points: ["Handled guided activities", "Improved documentation habits", "Practiced technical workflows"],
  },
  {
    year: "Phase 03",
    period: "Contribution",
    title: "Applying skills to real outputs",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&h=650&fit=crop",
    points: ["Completed practical deliverables", "Collaborated on small improvements", "Received feedback"],
  },
  {
    year: "Phase 04",
    period: "Reflection",
    title: "Preparing the next step",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=900&h=650&fit=crop",
    points: ["Collected evidence of learning", "Reviewed progress", "Prepared final portfolio entries"],
  },
];

export function Timeline() {
  return (
    <section id="timeline" className="section-shell timeline-section">
      <div className="section-heading">
        <p className="eyebrow">OJT journey</p>
        <h2>A cleaner timeline for every stage of training.</h2>
      </div>

      <div className="timeline-grid">
        {timelineData.map((item) => (
          <article className="journey-card" key={item.year}>
            <img src={item.image} alt={item.title} />
            <div className="journey-content">
              <div className="journey-meta">
                <span>{item.year}</span>
                <span>
                  <CalendarDays size={15} />
                  {item.period}
                </span>
              </div>
              <h3>{item.title}</h3>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>
                    <CheckCircle2 size={16} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
