import { ArrowRight, BookOpen, BriefcaseBusiness, Sparkles } from "lucide-react";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-copy">
        <p className="eyebrow">OJT blog and portfolio</p>
        <h1>Regien Mae D. Colot</h1>
        <p className="hero-lead">
          A refreshed digital journal for documenting growth, training
          milestones, creative work, and the small wins that shape an internship
          journey.
        </p>

        <div className="hero-actions">
          <button className="primary-btn" onClick={() => scrollToSection("blog")}>
            Read the Journal <ArrowRight size={18} />
          </button>
          <button className="secondary-btn" onClick={() => scrollToSection("gallery")}>
            View Gallery
          </button>
        </div>

        <div className="hero-stats">
          <div>
            <strong>08</strong>
            <span>Core skills</span>
          </div>
          <div>
            <strong>04</strong>
            <span>Journey phases</span>
          </div>
          <div>
            <strong>06</strong>
            <span>Highlights</span>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1000&h=1200&fit=crop"
          alt="Laptop workspace for OJT documentation"
        />
        <div className="floating-note note-one">
          <Sparkles size={18} />
          <span>Fresh portfolio redesign</span>
        </div>
        <div className="floating-note note-two">
          <BookOpen size={18} />
          <span>Weekly reflection journal</span>
        </div>
        <div className="floating-note note-three">
          <BriefcaseBusiness size={18} />
          <span>Training-ready profile</span>
        </div>
      </div>
    </section>
  );
}
