import { useState } from "react";
import { Award, X } from "lucide-react";

const certificates = [
  {
    url: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=900&h=700&fit=crop",
    title: "OJT Completion Certificate",
    issuer: "Training Office",
    date: "2026",
  },
  {
    url: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=900&h=700&fit=crop",
    title: "Web Development Workshop",
    issuer: "Academic Program",
    date: "2025",
  },
  {
    url: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=900&h=700&fit=crop",
    title: "Digital Skills Seminar",
    issuer: "Campus Event",
    date: "2025",
  },
];

export function CertificateGallery() {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  const closeModal = () => {
    setSelectedCert(null);
    document.body.style.overflow = "auto";
  };

  const openModal = (index: number) => {
    setSelectedCert(index);
    document.body.style.overflow = "hidden";
  };

  return (
    <section id="certificates" className="section-shell certificate-section">
      <div className="section-heading compact">
        <p className="eyebrow">Credentials</p>
        <h2>Certificates now feel curated, not crowded.</h2>
      </div>

      <div className="certificate-grid">
        {certificates.map((cert, index) => (
          <button className="certificate-card" key={cert.title} onClick={() => openModal(index)}>
            <img src={cert.url} alt={cert.title} />
            <div>
              <Award size={22} />
              <span>{cert.date}</span>
            </div>
            <h3>{cert.title}</h3>
            <p>{cert.issuer}</p>
          </button>
        ))}
      </div>

      {selectedCert !== null && (
        <div className="lightbox" onClick={closeModal}>
          <button className="lightbox-close" onClick={closeModal} aria-label="Close certificate">
            <X size={24} />
          </button>
          <div className="certificate-modal" onClick={(event) => event.stopPropagation()}>
            <img src={certificates[selectedCert].url} alt={certificates[selectedCert].title} />
            <div>
              <h3>{certificates[selectedCert].title}</h3>
              <p>{certificates[selectedCert].issuer}</p>
              <span>{certificates[selectedCert].date}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
