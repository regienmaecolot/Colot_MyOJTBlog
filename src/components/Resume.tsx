import { Download, Briefcase, GraduationCap } from "lucide-react";

export function Resume() {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      description:
        "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting solutions for complex business requirements.",
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Co.",
      period: "2020 - 2022",
      description:
        "Developed and maintained multiple client-facing applications. Collaborated with cross-functional teams to deliver high-quality products on time and within budget.",
    },
    {
      title: "Junior Developer",
      company: "StartUp Studio",
      period: "2019 - 2020",
      description:
        "Built responsive web applications and learned best practices in modern web development. Contributed to various projects using React, TypeScript, and RESTful APIs.",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Technology",
      period: "2015 - 2019",
      description:
        "Graduated with honors. Specialized in software engineering and web development. Active member of the computer science club.",
    },
  ];

  const skills = [
    { name: "React / Next.js", level: 90 },
    { name: "TypeScript / JavaScript", level: 95 },
    { name: "Node.js / Express", level: 85 },
    { name: "Python / Django", level: 80 },
    { name: "PostgreSQL / MongoDB", level: 85 },
    { name: "Docker / AWS", level: 75 },
    { name: "Git / CI/CD", level: 90 },
    { name: "UI/UX Design", level: 70 },
  ];

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1A1F35]/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-[#F3F4F7]">
            Resume & <span className="text-[#B5E3FF]">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-[#B5E3FF] mx-auto rounded-full mb-6"></div>
          <button className="px-6 py-3 bg-[#B5E3FF] text-[#0D0D12] rounded-lg hover:bg-[#B5E3FF]/90 transition-all duration-300 flex items-center gap-2 mx-auto">
            <Download size={20} />
            Download CV
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-[#B5E3FF]/10 rounded-lg flex items-center justify-center">
                <Briefcase className="text-[#B5E3FF]" size={20} />
              </div>
              <h3 className="text-2xl text-[#F3F4F7]">Experience</h3>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-8 pb-8 border-l-2 border-[#C7CCD9]/20 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#B5E3FF] rounded-full border-4 border-[#0D0D12]"></div>

                  <div className="bg-[#1A1F35] p-6 rounded-lg border border-[#C7CCD9]/20 hover:border-[#B5E3FF]/50 transition-all duration-300">
                    <p className="text-[#B5E3FF] text-sm mb-2">{exp.period}</p>
                    <h4 className="text-[#F3F4F7] mb-1">{exp.title}</h4>
                    <p className="text-[#C7CCD9] text-sm mb-3">{exp.company}</p>
                    <p className="text-[#C7CCD9] text-sm">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-[#B5E3FF]/10 rounded-lg flex items-center justify-center">
                <GraduationCap className="text-[#B5E3FF]" size={20} />
              </div>
              <h3 className="text-2xl text-[#F3F4F7]">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="relative pl-8 pb-8 border-l-2 border-[#C7CCD9]/20 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#B5E3FF] rounded-full border-4 border-[#0D0D12]"></div>

                  <div className="bg-[#1A1F35] p-6 rounded-lg border border-[#C7CCD9]/20 hover:border-[#B5E3FF]/50 transition-all duration-300">
                    <p className="text-[#B5E3FF] text-sm mb-2">{edu.period}</p>
                    <h4 className="text-[#F3F4F7] mb-1">{edu.degree}</h4>
                    <p className="text-[#C7CCD9] text-sm mb-3">{edu.school}</p>
                    <p className="text-[#C7CCD9] text-sm">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div>
          <h3 className="text-2xl text-[#F3F4F7] mb-8 text-center">
            Technical Skills
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-[#F3F4F7]">{skill.name}</span>
                  <span className="text-[#B5E3FF]">{skill.level}%</span>
                </div>
                <div className="h-2 bg-[#1A1F35] rounded-full overflow-hidden border border-[#C7CCD9]/20">
                  <div
                    className="h-full bg-gradient-to-r from-[#B5E3FF] to-[#B5E3FF]/70 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
