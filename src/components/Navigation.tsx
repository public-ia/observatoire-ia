import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { edition } from "@/data";
const navItems = [
  { id: "accueil", label: "Accueil" },
  { id: "chiffres-cles", label: "Chiffres clés" },
  { id: "quiz", label: "Quiz" },
  { id: "data", label: "Data" },
  { id: "souverainete", label: "Souveraineté" },
  { id: "ia", label: "IA" },
  { id: "citoyens", label: "Citoyens" },
  { id: "recommandations", label: "Recommandations" },
  { id: "methodologie", label: "Méthodologie" },
];
export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("accueil");
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
      setIsOpen(false);
    }
  };
  return <nav className="sticky top-0 z-50 bg-accent/95 backdrop-blur-md shadow-elegant border-b border-accent-foreground/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Title */}
          <div className="flex-shrink-0">
            <p className="text-xl md:text-2xl font-bold text-accent-foreground tracking-tight">Observatoire IA <span className="text-primary">{edition.annee}</span></p>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-1">
            {navItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className={`px-3 xl:px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors duration-300 ${activeSection === item.id ? "bg-primary text-accent" : "text-accent-foreground hover:bg-accent-foreground/10"}`}>
                {item.label}
              </button>)}
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden">
            <Button variant="ghost" size="icon" aria-label="Menu" onClick={() => setIsOpen(!isOpen)} className="text-accent-foreground hover:bg-accent-foreground/10">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="xl:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {navItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className={`px-5 py-3 rounded-lg text-sm font-semibold text-left transition-colors duration-300 ${activeSection === item.id ? "bg-primary text-accent" : "text-accent-foreground hover:bg-accent-foreground/10"}`}>
                  {item.label}
                </button>)}
            </div>
          </div>}
      </div>
    </nav>;
};