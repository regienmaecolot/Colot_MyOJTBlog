import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const photos = [
  {
    url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&h=700&fit=crop",
    title: "Workspace Session",
    category: "OJT",
  },
  {
    url: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&h=700&fit=crop",
    title: "Team Collaboration",
    category: "People",
  },
  {
    url: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&h=700&fit=crop",
    title: "Project Planning",
    category: "Process",
  },
  {
    url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&h=700&fit=crop",
    title: "Documentation Desk",
    category: "Records",
  },
  {
    url: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=900&h=700&fit=crop",
    title: "Learning Moment",
    category: "Growth",
  },
  {
    url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&h=700&fit=crop",
    title: "Group Output",
    category: "Milestone",
  },
];

export function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const move = (direction: -1 | 1) => {
    if (selectedImage === null) return;
    setSelectedImage((selectedImage + direction + photos.length) % photos.length);
  };

  return (
    <section id="gallery" className="section-shell gallery-section">
      <div className="section-heading">
        <p className="eyebrow">Gallery</p>
        <h2>Visual moments with a polished editorial grid.</h2>
      </div>

      <div className="photo-grid">
        {photos.map((photo, index) => (
          <button key={photo.title} className="photo-tile" onClick={() => openLightbox(index)}>
            <img src={photo.url} alt={photo.title} />
            <span>{photo.category}</span>
            <strong>{photo.title}</strong>
          </button>
        ))}
      </div>

      {selectedImage !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close image">
            <X size={24} />
          </button>
          <button
            className="lightbox-arrow previous"
            onClick={(event) => {
              event.stopPropagation();
              move(-1);
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={26} />
          </button>
          <img
            src={photos[selectedImage].url}
            alt={photos[selectedImage].title}
            onClick={(event) => event.stopPropagation()}
          />
          <button
            className="lightbox-arrow next"
            onClick={(event) => {
              event.stopPropagation();
              move(1);
            }}
            aria-label="Next image"
          >
            <ChevronRight size={26} />
          </button>
          <div className="lightbox-caption">
            <strong>{photos[selectedImage].title}</strong>
            <span>{photos[selectedImage].category}</span>
          </div>
        </div>
      )}
    </section>
  );
}
