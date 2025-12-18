import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const photos = [
    {
      url: "https://images.unsplash.com/photo-1617634667039-8e4cb277ab46?w=800&h=600&fit=crop",
      title: "Mountain Adventure",
      category: "Nature",
    },
    {
      url: "https://images.unsplash.com/photo-1493134799591-2c9eed26201a?w=800&h=600&fit=crop",
      title: "City Lights",
      category: "Urban",
    },
    {
      url: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800&h=600&fit=crop",
      title: "Coffee Culture",
      category: "Lifestyle",
    },
    {
      url: "https://images.unsplash.com/photo-1578592391689-0e3d1a1b52b9?w=800&h=600&fit=crop",
      title: "Hiking Trails",
      category: "Adventure",
    },
    {
      url: "https://images.unsplash.com/photo-1623715537851-8bc15aa8c145?w=800&h=600&fit=crop",
      title: "Tech Setup",
      category: "Work",
    },
    {
      url: "https://images.unsplash.com/photo-1647962431451-d0fdaf1cf21c?w=800&h=600&fit=crop",
      title: "Beach Vibes",
      category: "Travel",
    },
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? photos.length - 1 : selectedImage - 1
      );
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === photos.length - 1 ? 0 : selectedImage + 1
      );
    }
  };

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-[#F3F4F7]">
            Photo <span className="text-[#B5E3FF]">Gallery</span>
          </h2>
          <div className="w-20 h-1 bg-[#B5E3FF] mx-auto rounded-full"></div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className="relative group cursor-pointer overflow-hidden rounded-lg border border-[#C7CCD9]/20 hover:border-[#B5E3FF]/50 transition-all duration-300"
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D12]/90 via-[#0D0D12]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-[#F3F4F7]">{photo.title}</h3>
                <p className="text-[#B5E3FF] text-sm">{photo.category}</p>
              </div>
              {/* Blue glow on hover */}
              <div className="absolute inset-0 shadow-lg shadow-[#B5E3FF]/0 group-hover:shadow-[#B5E3FF]/30 transition-shadow duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 bg-[#0D0D12]/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-10 h-10 bg-[#1A1F35] hover:bg-[#B5E3FF]/20 rounded-full flex items-center justify-center text-[#F3F4F7] hover:text-[#B5E3FF] transition-colors z-10"
            >
              <X size={24} />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 w-10 h-10 bg-[#1A1F35] hover:bg-[#B5E3FF]/20 rounded-full flex items-center justify-center text-[#F3F4F7] hover:text-[#B5E3FF] transition-colors"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 w-10 h-10 bg-[#1A1F35] hover:bg-[#B5E3FF]/20 rounded-full flex items-center justify-center text-[#F3F4F7] hover:text-[#B5E3FF] transition-colors"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl w-full"
            >
              <img
                src={photos[selectedImage].url}
                alt={photos[selectedImage].title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg border border-[#C7CCD9]/20"
              />
              <div className="mt-4 text-center">
                <h3 className="text-[#F3F4F7] text-xl mb-1">
                  {photos[selectedImage].title}
                </h3>
                <p className="text-[#B5E3FF]">
                  {photos[selectedImage].category}
                </p>
              </div>
            </div>

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[#C7CCD9] text-sm">
              {selectedImage + 1} / {photos.length}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
