import { Calendar, Code, Trophy, Users } from "lucide-react";

export function Timeline() {
  const timelineData = [
    {
      year: "1st Year",
      period: "2015-2016",
      title: "Foundation & Discovery",
      image: "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=600&h=400&fit=crop",
      description:
        "Started my journey in Computer Science. Learned programming fundamentals with Python and Java. Joined the coding club and participated in my first hackathon.",
      highlights: [
        { icon: Code, text: "First programming course" },
        { icon: Users, text: "Joined coding club" },
        { icon: Trophy, text: "First hackathon participation" },
      ],
    },
    {
      year: "2nd Year",
      period: "2016-2017",
      title: "Building Skills",
      image: "https://images.unsplash.com/photo-1638029202288-451a89e0d55f?w=600&h=400&fit=crop",
      description:
        "Deepened my knowledge in data structures and algorithms. Built my first full-stack web application. Won second place in university coding competition.",
      highlights: [
        { icon: Code, text: "First full-stack project" },
        { icon: Trophy, text: "2nd place coding competition" },
        { icon: Users, text: "Study group leader" },
      ],
    },
    {
      year: "3rd Year",
      period: "2017-2018",
      title: "Professional Growth",
      image: "https://images.unsplash.com/photo-1611764461465-09162da6465a?w=600&h=400&fit=crop",
      description:
        "Completed summer internship at a tech startup. Worked on real-world projects using React and Node.js. Started contributing to open-source projects.",
      highlights: [
        { icon: Code, text: "Summer internship" },
        { icon: Trophy, text: "Open-source contributor" },
        { icon: Users, text: "Mentored juniors" },
      ],
    },
    {
      year: "4th Year",
      period: "2018-2019",
      title: "Achievement & Launch",
      image: "https://images.unsplash.com/photo-1623461487986-9400110de28e?w=600&h=400&fit=crop",
      description:
        "Graduated with honors. Completed capstone project on machine learning. Received job offer and started my career as a full-stack developer.",
      highlights: [
        { icon: Trophy, text: "Graduated with honors" },
        { icon: Code, text: "ML capstone project" },
        { icon: Users, text: "First developer job" },
      ],
    },
  ];

  return (
    <section id="timeline" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-[#F3F4F7]">
            My <span className="text-[#B5E3FF]">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-[#B5E3FF] mx-auto rounded-full"></div>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#B5E3FF]/50 to-[#B5E3FF]/10"></div>

          <div className="space-y-16">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className="w-5/12">
                  <div className="bg-[#1A1F35] p-6 rounded-lg border border-[#C7CCD9]/20 hover:border-[#B5E3FF]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#B5E3FF]/10">
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="text-[#B5E3FF]" size={16} />
                      <span className="text-[#B5E3FF] text-sm">{item.period}</span>
                    </div>
                    <h3 className="text-xl text-[#F3F4F7] mb-2">{item.title}</h3>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover rounded-lg mb-4 border border-[#C7CCD9]/20"
                    />
                    <p className="text-[#C7CCD9] text-sm mb-4">
                      {item.description}
                    </p>
                    <div className="space-y-2">
                      {item.highlights.map((highlight, idx) => {
                        const Icon = highlight.icon;
                        return (
                          <div key={idx} className="flex items-center gap-2">
                            <Icon className="text-[#B5E3FF]" size={16} />
                            <span className="text-[#C7CCD9] text-sm">
                              {highlight.text}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Year Badge */}
                <div className="w-2/12 flex justify-center">
                  <div className="w-24 h-24 bg-[#B5E3FF] rounded-full flex items-center justify-center text-[#0D0D12] z-10 border-4 border-[#0D0D12] shadow-lg shadow-[#B5E3FF]/30">
                    <span className="text-sm text-center">{item.year}</span>
                  </div>
                </div>

                {/* Empty space */}
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Timeline */}
        <div className="lg:hidden space-y-8">
          {timelineData.map((item, index) => (
            <div key={index} className="relative pl-12">
              {/* Vertical line */}
              {index !== timelineData.length - 1 && (
                <div className="absolute left-5 top-12 bottom-0 w-0.5 bg-gradient-to-b from-[#B5E3FF]/50 to-[#B5E3FF]/10"></div>
              )}

              {/* Year Badge */}
              <div className="absolute left-0 top-0 w-10 h-10 bg-[#B5E3FF] rounded-full flex items-center justify-center text-[#0D0D12] text-xs border-4 border-[#0D0D12] shadow-lg shadow-[#B5E3FF]/30">
                {index + 1}
              </div>

              {/* Content */}
              <div className="bg-[#1A1F35] p-6 rounded-lg border border-[#C7CCD9]/20 hover:border-[#B5E3FF]/50 transition-all duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="text-[#B5E3FF]" size={16} />
                  <span className="text-[#B5E3FF] text-sm">{item.period}</span>
                </div>
                <h3 className="text-xl text-[#F3F4F7] mb-2">{item.year} - {item.title}</h3>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-lg mb-4 border border-[#C7CCD9]/20"
                />
                <p className="text-[#C7CCD9] text-sm mb-4">{item.description}</p>
                <div className="space-y-2">
                  {item.highlights.map((highlight, idx) => {
                    const Icon = highlight.icon;
                    return (
                      <div key={idx} className="flex items-center gap-2">
                        <Icon className="text-[#B5E3FF]" size={16} />
                        <span className="text-[#C7CCD9] text-sm">
                          {highlight.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
