import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Award, ShieldAlert } from "lucide-react";
import PageTransition from "../components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <section className="grid grid-cols-1 lg:grid-cols-12 min-h-[85vh] items-stretch border-b border-white/10" id="home">
        <div className="lg:col-span-7 px-margin-mobile md:px-margin-desktop py-16 md:py-24 flex flex-col justify-center">
          <div className="max-w-2xl text-left">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[1px] bg-accent"></span>
              <span className="font-label-caps text-xs text-accent uppercase tracking-widest font-bold">
                Web Developer
              </span>
            </div>
            <h1 className="font-display-lg text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight text-white font-bold">
              Building Practical <br />
              <span className="text-accent italic font-semibold font-headline-md">Digital Experiences</span>
            </h1>
            <p className="font-body-lg text-lg text-on-surface-variant mb-10 max-w-lg leading-relaxed">
              I enjoy learning programming, web development, and digital marketing while building practical academic projects and continuously improving my technical skills. </p>
            <div className="flex flex-wrap gap-4 md:gap-6">
              <Link
                className="px-8 py-4 bg-accent text-white font-label-caps text-xs font-bold flex items-center gap-3 hover:bg-indigo-600 transition-all shadow-lg hover:translate-y-[-2px] duration-200"
                to="/projects"
              >
                VIEW PROJECTS
                <ArrowRight size={16} />
              </Link>
              <Link
                className="px-8 py-4 border border-white/20 text-white font-label-caps text-xs font-bold hover:border-accent hover:text-accent hover:translate-y-[-2px] transition-all duration-200"
                to="/contact"
              >
                LET'S CONNECT
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 relative min-h-[400px] lg:min-h-0 bg-surface-container-low flex items-center justify-center p-8 lg:p-0 overflow-hidden">
          <div className="absolute inset-0 bg-accent/5 mix-blend-overlay"></div>
          <img
            alt="Illustration of a girl coding on a laptop at a workspace table"
            className="w-full h-full object-cover opacity-90 transition-all duration-1000 scale-105 hover:scale-100"
            src="/girl_coding.jpg"
          />
          <div className="absolute inset-0 border-l border-white/10"></div>
        </div>
      </section>
      <section className="py-20 md:py-24 px-margin-mobile md:px-margin-desktop border-b border-white/10 bg-surface-container-lowest">
        <div className="max-w-5xl mx-auto text-left">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-4">
              <span className="font-label-caps text-xs text-accent mb-4 block uppercase tracking-[0.2em] font-bold">
                The Narrative
              </span>
              <h2 className="font-headline-md text-2xl md:text-3xl text-white mb-6 font-bold">
                Learning Through Practice
              </h2>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-accent hover:text-white font-label-caps text-xs tracking-wider font-bold transition-all duration-200 mt-2"
              >
              </Link>
            </div>
            <div className="md:col-span-8">
              <p className="font-display-lg text-xl md:text-2xl leading-relaxed text-on-surface italic mb-8 font-medium">
                "I believe every project is an opportunity to learn something new and improve my skills."
              </p>
              <p className="font-body-lg text-base text-on-surface-variant leading-relaxed">
                I am currently pursuing a Bachelor's degree in Information Technology. Most of my experience comes from university coursework, academic projects, and self-learning. I enjoy solving problems, learning modern technologies, and continuously improving my programming skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      

      <section className="py-24 md:py-32 accent-gradient text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="font-label-caps text-xs opacity-80 mb-6 block uppercase tracking-[0.3em] font-bold">
            The Developer Ethos
          </span>
          <blockquote className="font-display-lg text-2xl md:text-4xl lg:text-5xl leading-tight italic font-semibold max-w-3xl mx-auto">
            "I believe consistent learning and practical experience create better developers than shortcuts."
          </blockquote>
          <div className="w-16 h-[2px] bg-white mx-auto mt-10 opacity-50"></div>
        </div>
      </section>
    </PageTransition>
  );
}
