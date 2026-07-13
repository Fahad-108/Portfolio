import { Terminal, Code, Cpu, Database, Award } from "lucide-react";
import PageTransition from "../components/PageTransition";

export default function Projects() {
  const projects = [
    {
      title: "Scientific Calculator",
      type: "Academic Project",
      description:
"Developed a scientific calculator as part of a university programming assignment to perform arithmetic operations while strengthening programming logic and problem-solving skills.",
      tags: ["Python", "Programming", "Problem Solving"],
      category: "UNIVERSITY COURSEWORK",
    },
    {
      title: "Gym Membership Management System",
      type: "Academic Project",
      description:
"Built a gym membership management system as a semester group project to manage member records and basic administrative tasks while improving teamwork and development skills.",
      tags: ["Python", "Database", "Team Project"],
      category: "UNIVERSITY COURSEWORK",
    },
  ];

  return (
    <PageTransition>
      <div className="w-full py-16 md:py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-low">
      <div className="max-w-5xl mx-auto text-left">
        {/* Header Block */}
        <div className="mb-16 border-b border-white/10 pb-10">
          <span className="font-label-caps text-xs text-accent mb-3 block tracking-widest font-bold">
            ACADEMIC PROJECTS
          </span>
          <h2 className="font-display-lg text-3xl md:text-4xl text-white font-bold leading-tight">
            Projects
          </h2>
        </div>

        {/* Project Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group p-8 md:p-10 bg-surface-container-highest border border-white/5 hover:border-accent/30 rounded-2xl flex flex-col justify-between hover:translate-y-[-4px] transition-all duration-300 shadow-xl"
            >
              <div>
                <div className="flex justify-between items-center mb-8">
                  <span className="px-3.5 py-1.5 bg-accent/10 border border-accent/20 text-accent font-label-caps text-[10px] uppercase tracking-wider font-bold rounded">
                    {project.type}
                  </span>
                  <span className="text-on-surface-variant font-mono text-xs">{project.date}</span>
                </div>
                
                <h3 className="font-headline-sm text-xl text-white mb-4 group-hover:text-accent transition-colors duration-200 font-bold">
                  {project.title}
                </h3>
                
                <p className="font-body-md text-base text-on-surface-variant leading-relaxed mb-8">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech tags */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-xs text-accent/80 font-bold tracking-wider font-label-caps">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer divider */}
                <footer className="pt-6 border-t border-white/5 font-label-caps text-[10px] text-on-surface-variant flex items-center gap-3 tracking-widest font-bold">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  {project.category}
                </footer>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </PageTransition>
  );
}
