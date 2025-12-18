import { Code, Coffee, Lightbulb, Rocket } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable and scalable solutions",
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Finding creative solutions to complex challenges",
    },
    {
      icon: Rocket,
      title: "Fast Learner",
      description: "Constantly exploring new technologies",
    },
    {
      icon: Coffee,
      title: "Team Player",
      description: "Collaborating effectively with cross-functional teams",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-[#F3F4F7]">
            About <span className="text-[#B5E3FF]">Me</span>
          </h2>
          <div className="w-20 h-1 bg-[#B5E3FF] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-[#B5E3FF] rounded-lg blur-2xl opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
                alt="Workspace"
                className="relative rounded-lg shadow-2xl w-full h-64 sm:h-80 object-cover border border-[#C7CCD9]/20"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 md:order-2">
            <h3 className="text-2xl sm:text-3xl mb-6 text-[#F3F4F7]">
              Passionate Developer & Creative Thinker
            </h3>
            <p className="text-[#C7CCD9] mb-4">
              I'm a full-stack developer with a passion for creating beautiful,
              functional, and user-centered digital experiences. With several
              years of experience in the field, I've had the opportunity to work
              on a diverse range of projects.
            </p>
            <p className="text-[#C7CCD9] mb-4">
              My journey in tech started during my university years, where I
              discovered my love for coding and problem-solving. Since then,
              I've been constantly learning and evolving, staying up-to-date
              with the latest technologies and best practices.
            </p>
            <p className="text-[#C7CCD9]">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community.
            </p>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-[#1A1F35] p-6 rounded-lg border border-[#C7CCD9]/20 hover:border-[#B5E3FF]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#B5E3FF]/10"
              >
                <div className="w-12 h-12 bg-[#B5E3FF]/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-[#B5E3FF]" size={24} />
                </div>
                <h4 className="text-[#F3F4F7] mb-2">{item.title}</h4>
                <p className="text-[#C7CCD9] text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
