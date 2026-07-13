import { BookOpen, Code2, MapPin, Target } from "lucide-react";
import PageTransition from "../components/PageTransition";

export default function About() {
  const infoDetails = [
    {
      title: "Education",
      value: "BS Information Technology",
      icon: BookOpen,
    },
    {
      title: "Skills",
      value: "Python, Web Development & Digital Marketing",
      icon: Code2,
    },
    {
      title: "Location",
      value: "Hajiwala, Pakistan",
      icon: MapPin,
    },
    {
      title: "Current Goal",
      value: "Building Practical Projects",
      icon: Target,
    },
  ];

  return (
    <PageTransition>
      <div className="w-full py-16 md:py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
      <div className="max-w-5xl mx-auto text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Narrative & Philosophy */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="font-display-lg text-3xl md:text-4xl text-white font-bold leading-tight">
                About Me
              </h2>
            </div>

            <div className="space-y-6 font-body-md text-base text-on-surface-variant leading-relaxed">
              <p>
                I'm <strong className="text-white font-bold">Kinza Anwar</strong>, an Information Technology student with a passion for learning programming and building practical software solutions. My journey is driven by curiosity, continuous learning, and the desire to turn ideas into real-world applications through technology.
              </p>
              <p>
                I enjoy working with <strong className="text-white font-bold">Python</strong>, exploring <strong className="text-white font-bold">web development</strong>, and expanding my knowledge of <strong className="text-white font-bold">digital marketing</strong>. Most of my experience comes from university coursework, academic projects, and self-learning, where I continuously improve my technical and problem-solving skills.
              </p>
              <p>
                I believe every project is an opportunity to learn something new, collaborate with others, and grow as a developer. My goal is to build practical, user-friendly applications while strengthening my foundation in modern software development.
              </p>
            </div>

            {/* Ethos Quote block */}
            <div className="p-6 bg-accent/5 border-l-2 border-accent rounded-r-xl italic font-medium text-accent font-body-lg text-lg">
              "Always learning, always building, and always improving."
            </div>
          </div>

          {/* Right Column: Structured Key Info Details */}
          <div className="lg:col-span-5 space-y-8 pl-6 border-l border-white/10 py-2 lg:ml-6">
            {infoDetails.map((detail, idx) => (
              <div key={idx} className="group flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-xl text-accent group-hover:bg-accent group-hover:text-white transition-all flex items-center justify-center shrink-0">
                  <detail.icon size={20} />
                </div>
                <div>
                  <h4 className="font-label-caps text-[11px] uppercase tracking-[0.15em] text-on-surface-variant/50 font-bold">
                    {detail.title}
                  </h4>
                  <p className="font-body-md text-sm md:text-base text-on-surface font-semibold mt-1">
                    {detail.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
      </div>
    </PageTransition>
  );
}
