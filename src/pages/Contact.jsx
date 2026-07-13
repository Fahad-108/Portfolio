import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

// Custom SVG Icons for Brands
function GithubIcon({ size = 24, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 24, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert("Please fill in your name, email, and message.");
      return;
    }
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 4000);
  };

  const contactDetails = [
    {
      title: "Email",
      value: "kinzaanar31380@gmail.com",
      link: "mailto:kinzaanar31380@gmail.com",
      icon: Mail,
    },
    {
      title: "Whatsapp",
      value: "+92 326 6448706",
      link: "https://wa.me/923266448706",
      icon: Phone,
    },
    {
      title: "Location",
      value: "Hajiwala, Pakistan",
      link: "https://www.google.com/maps/place/Hajiwala,+Pakistan",
      icon: MapPin,
    },
    {
      title: "GitHub",
      value: "Kinza-090",
      link: "https://github.com/",
      icon: GithubIcon,
    },
    {
      title: "LinkedIn",
      value: "Kinza Anwar",
      link: "https://www.linkedin.com/",
      icon: LinkedinIcon,
    },
  ];

  return (
    <div className="w-full py-16 md:py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest animate-fade-in">
      <div className="max-w-5xl mx-auto text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-stretch">
          
          {/* Left Side: Contact Information */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h2 className="font-display-lg text-3xl md:text-4xl text-white mb-6 font-bold leading-tight">
                Let's discuss future collaborations.
              </h2>
              <p className="font-body-lg text-base text-on-surface-variant leading-relaxed mb-12 max-w-md">
                Have a project, internship opportunity, or just want to say hello? Feel free to reach out. I'm always open to discussing new ideas, collaborations, and exciting opportunities
              </p>

              <div className="space-y-6">
                {contactDetails.map((detail, idx) => (
                  <a
                    key={idx}
                    href={detail.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-5 p-4 rounded-xl bg-surface-container-low border border-white/5 hover:border-accent/40 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-accent/10 rounded-lg text-accent group-hover:bg-accent group-hover:text-white transition-all flex items-center justify-center shrink-0">
                      <detail.icon size={20} />
                    </div>
                    <div>
                      <span className="font-label-caps text-[10px] text-on-surface-variant/50 block uppercase tracking-widest font-bold">
                        {detail.title}
                      </span>
                      <span className="font-body-md text-sm md:text-base font-bold text-white group-hover:text-accent transition-colors duration-200">
                        {detail.value}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:col-span-7 bg-surface-container-high p-8 md:p-12 border border-white/5 rounded-2xl relative shadow-2xl">
            {isSubmitted ? (
              <div className="absolute inset-0 bg-surface-container-high rounded-2xl flex flex-col items-center justify-center p-8 text-center animate-fade-in">
                <div className="p-4 bg-accent/10 text-accent rounded-full mb-4">
                  <Send size={32} />
                </div>
                <h3 className="font-headline-sm text-xl text-white font-bold mb-2">Message Sent Successfully!</h3>
                <p className="text-on-surface-variant text-sm max-w-sm">
                  Thank you, {form.name}. Your message has been received. I'll get back to you shortly.
                </p>
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="relative">
                <label className="font-label-caps text-xs text-accent mb-2 block uppercase font-bold tracking-wider">
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-transparent border-b border-white/10 py-3 focus:border-accent outline-none transition-all font-body-md text-white placeholder:text-white/20"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="relative">
                <label className="font-label-caps text-xs text-accent mb-2 block uppercase font-bold tracking-wider">
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-transparent border-b border-white/10 py-3 focus:border-accent outline-none transition-all font-body-md text-white placeholder:text-white/20"
                  placeholder="Enter your email address"
                />
              </div>

              <div className="relative">
                <label className="font-label-caps text-xs text-accent mb-2 block uppercase font-bold tracking-wider">
                  Subject
                </label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full bg-transparent border-b border-white/10 py-3 focus:border-accent outline-none transition-all font-body-md text-white placeholder:text-white/20"
                  placeholder="Enter the subject"
                />
              </div>

              <div className="relative">
                <label className="font-label-caps text-xs text-accent mb-2 block uppercase font-bold tracking-wider">
                  Message
                </label>
                <textarea
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-transparent border-b border-white/10 py-3 focus:border-accent outline-none transition-all font-body-md text-white resize-none h-32 placeholder:text-white/20"
                  placeholder="Write your message here..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-5 bg-accent text-white font-label-caps text-xs font-bold hover:bg-indigo-600 active:scale-[0.98] transition-all shadow-xl shadow-accent/20 cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
