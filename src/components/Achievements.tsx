import { Award, Trophy, Star, Target, Zap, Medal } from "lucide-react";

export function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      title: "Best Capstone Project Award",
      category: "Academic Excellence",
      year: "2019",
      description:
        "Recognized for outstanding final year project on machine learning applications in healthcare.",
    },
    {
      icon: Award,
      title: "Hackathon Winner",
      category: "Innovation",
      year: "2018",
      description:
        "First place in 48-hour coding challenge, developing an AI-powered productivity tool.",
    },
    {
      icon: Star,
      title: "Dean's List",
      category: "Academic Achievement",
      year: "2016-2019",
      description:
        "Maintained GPA above 3.8 for three consecutive years, earning Dean's List honors.",
    },
    {
      icon: Medal,
      title: "Open Source Contributor",
      category: "Community",
      year: "2018-Present",
      description:
        "Active contributor to popular open-source projects with 500+ merged pull requests.",
    },
    {
      icon: Target,
      title: "Coding Competition",
      category: "Technical Skills",
      year: "2017",
      description:
        "Second place in regional programming competition with 200+ participants.",
    },
    {
      icon: Zap,
      title: "Innovation Award",
      category: "Leadership",
      year: "2020",
      description:
        "Recognized for implementing automated testing system that improved team productivity by 40%.",
    },
  ];

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1A1F35]/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-[#F3F4F7]">
            Achievements & <span className="text-[#B5E3FF]">Awards</span>
          </h2>
          <div className="w-20 h-1 bg-[#B5E3FF] mx-auto rounded-full"></div>
        </div>

        {/* Masonry Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className="bg-[#1A1F35] p-6 rounded-lg border border-[#C7CCD9]/20 hover:border-[#B5E3FF]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#B5E3FF]/10 hover:-translate-y-1 group"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-[#B5E3FF]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#B5E3FF]/20 transition-colors">
                  <Icon className="text-[#B5E3FF]" size={28} />
                </div>

                {/* Category & Year */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[#B5E3FF] text-xs px-2 py-1 bg-[#B5E3FF]/10 rounded">
                    {achievement.category}
                  </span>
                  <span className="text-[#C7CCD9] text-xs">
                    {achievement.year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[#F3F4F7] text-lg mb-3">
                  {achievement.title}
                </h3>

                {/* Description */}
                <p className="text-[#C7CCD9] text-sm">
                  {achievement.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
