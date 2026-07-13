import { Code, Terminal, Globe, Shield, Cpu, Cloud } from "lucide-react";
import PageTransition from "../components/PageTransition";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      icon: Terminal,
      skills: [
        { name: "Python", level: "Intermediate" },
        { name: "C++", level: "Intermediate" },
        { name: "C#", level: "Basic" },
      ],
    },
    {
  title: "Web Fundamentals",
  icon: Globe,
  skills: [
    { name: "HTML", level: "Advanced" },
    { name: "CSS", level: "Intermediate" },
    { name: "JavaScript", level: "Basic" },
  ],
},
    {
  title: "Digital",
  icon: Cloud,
  skills: [
    { name: "Digital Marketing", level: "Basic" },
    { name: "Freelancing", level: "Basic" },
    { name: "Graphics Designing", level: "Intermediate" },
  ],
},
  ];

  return (
    <PageTransition>
      <div className="w-full py-16 md:py-24 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-5xl mx-auto text-left">
        {/* Title Section */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-10">
          <div>
            <h2 className="font-display-lg text-3xl md:text-4xl text-white font-bold">
              Skills & Technologies
            </h2>
            <p className="text-on-surface-variant mt-2 text-base font-body-md">
              Technologies and skills I am learning and using through academic projects and self-learning.
            </p>
          </div>
          <div className="text-accent font-label-caps text-xs tracking-widest font-bold">
            ALWAYS LEARNING
          </div>
        </div>

        {/* Competencies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="p-8 bg-surface-container-low border border-white/5 hover:border-accent/30 rounded-2xl transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-accent/10 rounded-xl text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <category.icon size={22} />
                </div>
                <h3 className="font-headline-sm text-lg text-white font-bold tracking-tight">
                  {category.title}
                </h3>
              </div>

              <ul className="space-y-4">
                {category.skills.map((skill, sIdx) => (
                  <li
                    key={sIdx}
                    className="flex justify-between items-center border-b border-white/5 pb-3 font-body-md text-base text-on-surface-variant hover:text-white transition-colors duration-200"
                  >
                    <span className="font-medium">{skill.name}</span>
                    <span className="font-label-caps text-[10px] bg-white/5 border border-white/10 px-2.5 py-1 text-accent font-bold tracking-wider rounded">
                      {skill.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      </div>
    </PageTransition>
  );
}
