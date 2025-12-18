import { useState } from "react";
import { X, Award } from "lucide-react";

export function CertificateGallery() {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  const certificates = [
    {
      url: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&h=600&fit=crop",
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
    },
    {
      url: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop",
      title: "React Advanced Certification",
      issuer: "Meta Blueprint",
      date: "2022",
    },
    {
      url: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&h=600&fit=crop",
      title: "Google Cloud Professional",
      issuer: "Google Cloud",
      date: "2022",
    },
    {
      url: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop",
      title: "Full Stack Web Development",
      issuer: "Coursera",
      date: "2021",
    },
    {
      url: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&h=600&fit=crop",
      title: "Machine Learning Specialization",
      issuer: "Stanford Online",
      date: "2021",
    },
    {
      url: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop",
      title: "Agile & Scrum Master",
      issuer: "Scrum Alliance",
      date: "2020",
    },
  ];

  const openModal = (index: number) => {
    setSelectedCert(index);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedCert(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1A1F35]/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-[#F3F4F7]">
            Certificates & <span className="text-[#B5E3FF]">Credentials</span>
          </h2>
          <div className="w-20 h-1 bg-[#B5E3FF] mx-auto rounded-full"></div>
        </div>

        {/* Certificates Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              onClick={() => openModal(index)}
              className="bg-[#1A1F35] rounded-lg border border-[#C7CCD9]/40 hover:border-[#B5E3FF] transition-all duration-300 cursor-pointer group overflow-hidden hover:shadow-lg hover:shadow-[#B5E3FF]/10 hover:-translate-y-1"
            >
              {/* Certificate Image */}
              <div className="relative overflow-hidden bg-[#0D0D12]/50 aspect-[4/3]">
                <img
                  src={cert.url}
                  alt={cert.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
                {/* Icon overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D12]/90 to-transparent flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 bg-[#B5E3FF] rounded-full flex items-center justify-center">
                    <Award className="text-[#0D0D12]" size={24} />
                  </div>
                </div>
              </div>

              {/* Certificate Info */}
              <div className="p-4">
                <h3 className="text-[#F3F4F7] mb-2">{cert.title}</h3>
                <p className="text-[#C7CCD9] text-sm mb-1">{cert.issuer}</p>
                <p className="text-[#B5E3FF] text-xs">{cert.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Modal */}
        {selectedCert !== null && (
          <div
            className="fixed inset-0 z-50 bg-[#0D0D12]/95 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-10 h-10 bg-[#1A1F35] hover:bg-[#B5E3FF]/20 rounded-full flex items-center justify-center text-[#F3F4F7] hover:text-[#B5E3FF] transition-colors z-10"
            >
              <X size={24} />
            </button>

            {/* Certificate Content */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full bg-[#1A1F35] rounded-lg border border-[#C7CCD9]/20 overflow-hidden"
            >
              {/* Certificate Image */}
              <div className="bg-[#0D0D12]/50">
                <img
                  src={certificates[selectedCert].url}
                  alt={certificates[selectedCert].title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
              </div>

              {/* Certificate Details */}
              <div className="p-6 border-t border-[#C7CCD9]/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#B5E3FF]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="text-[#B5E3FF]" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[#F3F4F7] text-xl mb-2">
                      {certificates[selectedCert].title}
                    </h3>
                    <p className="text-[#C7CCD9] mb-1">
                      Issued by: {certificates[selectedCert].issuer}
                    </p>
                    <p className="text-[#B5E3FF]">
                      {certificates[selectedCert].date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
