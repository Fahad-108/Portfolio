import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "SKILLS", path: "/skills" },
    { name: "PROJECTS", path: "/projects" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <>
      <header
        className={`flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop sticky top-0 z-50 py-4 border-b backdrop-blur-md transition-all duration-300 ${isScrolled
            ? "bg-background/95 border-white/10 shadow-md"
            : "bg-background/80 border-transparent"
          }`}
      >
        <Link
          to="/"
          className="flex flex-col leading-none"
        >
          <span className="text-lg md:text-xl font-bold tracking-tight text-white">
            Kinza Anwar
          </span>

          <span className="text-[11px] uppercase tracking-[0.25em] text-on-surface-variant mt-1">
            Portfolio
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative font-label-caps text-xs tracking-widest font-semibold transition-colors duration-200 ${isActive
                    ? "text-accent after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:bg-accent"
                    : "text-on-surface-variant hover:text-accent"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
          
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden flex items-center p-2 text-white hover:text-accent transition-colors cursor-pointer"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </header>

      {/* Sidebar / Drawer Backdrop */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-black/60 z-[55] transition-opacity duration-300"
        />
      )}

      {/* Sidebar / Drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-[60] flex flex-col p-8 bg-surface-container-highest border-l border-white/10 w-[85%] max-w-sm transition-transform duration-300 ease-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex justify-between items-center mb-12">
          <span className="font-label-caps text-xs tracking-widest text-accent font-bold">NAVIGATION</span>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 text-white hover:text-accent transition-colors cursor-pointer"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <ul className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `font-body-lg text-lg block py-2 transition-all duration-200 ${isActive
                    ? "text-accent font-bold border-b border-accent"
                    : "text-on-surface hover:text-accent border-b border-transparent"
                  }`
                }
              >
                {link.name.charAt(0) + link.name.slice(1).toLowerCase()}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="mt-8 pt-6 border-t border-white/10">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center block px-4 py-3 border border-accent text-accent font-label-caps text-xs font-semibold tracking-widest hover:bg-accent hover:text-white transition-all duration-200"
          >
            RESUME
          </a>
        </div>
      </div>
    </>
  );
}
