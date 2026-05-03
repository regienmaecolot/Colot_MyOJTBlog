import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "resume", label: "Profile" },
  { id: "timeline", label: "Journey" },
  { id: "achievements", label: "Wins" },
  { id: "gallery", label: "Gallery" },
  { id: "blog", label: "Journal" },
  { id: "contact", label: "Contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="site-nav">
      <button className="brand-mark" onClick={() => scrollToSection("home")}>
        <span>RC</span>
        <strong>Regien Colot</strong>
      </button>

      <div className="nav-links">
        {navItems.map((item) => (
          <button key={item.id} onClick={() => scrollToSection(item.id)}>
            {item.label}
          </button>
        ))}
      </div>

      <button
        className="nav-toggle"
        onClick={() => setIsOpen((open) => !open)}
        aria-label="Toggle navigation"
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {isOpen && (
        <div className="mobile-nav">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => scrollToSection(item.id)}>
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
