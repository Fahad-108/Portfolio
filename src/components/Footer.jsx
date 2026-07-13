export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-surface-container-lowest">
  <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-10 flex flex-col md:flex-row justify-between items-center gap-8">

    {/* Left */}
    <div className="text-center md:text-left">
      <h3 className="text-lg font-bold text-white tracking-tight">
        Kinza Anwar
      </h3>

      <p className="text-sm text-on-surface-variant mt-1">
        IT Student • Python Learner • Web Development Enthusiast
      </p>
    </div>

    {/* Center */}
    <div className="text-center">
      <p className="text-sm text-on-surface-variant">
        © 2026 Kinza Anwar. All rights reserved.
      </p>

      <p className="text-xs tracking-[0.2em] uppercase text-accent mt-2">
        Always Learning • Always Building
      </p>
    </div>

    {/* Right */}
    <div className="flex items-center gap-6">
      <a
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-on-surface-variant hover:text-white transition-colors"
      >
        LinkedIn
      </a>

      <span className="w-1 h-1 rounded-full bg-white/30"></span>

      <a
        href="https://github.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-on-surface-variant hover:text-white transition-colors"
      >
        GitHub
      </a>
    </div>

  </div>
</footer>
  );
}
