import { ArrowRight, Download } from "lucide-react";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#B5E3FF] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#B5E3FF] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#B5E3FF] rounded-full blur-xl opacity-30"></div>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop"
                alt="Profile"
                className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-[#B5E3FF]/30"
              />
            </div>
          </div>

          {/* Greeting */}
          <p className="text-[#C7CCD9] mb-4">
            Hi, I'm
          </p>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 text-[#F3F4F7]">
            <span className="inline-block">Your Name</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl md:text-3xl mb-8 text-[#C7CCD9] max-w-3xl mx-auto">
            A passionate{" "}
            <span className="text-[#B5E3FF]">developer</span> crafting{" "}
            <span className="text-[#B5E3FF]">elegant solutions</span> to complex
            problems
          </p>

          {/* Description */}
          <p className="text-[#C7CCD9] mb-12 max-w-2xl mx-auto">
            I specialize in building modern web applications with cutting-edge
            technologies. Let's create something amazing together.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection("about")}
              className="px-8 py-3 bg-[#B5E3FF] text-[#0D0D12] rounded-lg hover:bg-[#B5E3FF]/90 transition-all duration-300 flex items-center gap-2 group w-full sm:w-auto justify-center"
            >
              About Me
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button
              onClick={() => scrollToSection("resume")}
              className="px-8 py-3 bg-transparent border-2 border-[#B5E3FF] text-[#B5E3FF] rounded-lg hover:bg-[#B5E3FF]/10 transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <Download size={20} />
              View Resume
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#B5E3FF] rounded-full p-1">
          <div className="w-1.5 h-3 bg-[#B5E3FF] rounded-full mx-auto"></div>
        </div>
      </div>
    </section>
  );
}
