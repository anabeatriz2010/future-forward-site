import { useState, useEffect } from "react";
import { Menu, X, Leaf } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Menu de navegação fixo no topo do site
const sections = [
  { id: "inicio", label: "Início" },
  { id: "problema", label: "O Problema" },
  { id: "solucoes", label: "Soluções" },
  { id: "energia", label: "Energia Limpa" },
  { id: "consumo", label: "Consumo" },
  { id: "acao", label: "Ação Local" },
  { id: "conclusao", label: "Conclusão" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => scrollTo("inicio")} className="flex items-center gap-2 group">
          <Leaf className="w-6 h-6 text-accent group-hover:animate-float" />
          <span className="font-display font-bold text-lg text-primary">
            Futuro Sustentável
          </span>
        </button>

        {/* Menu desktop */}
        <div className="hidden md:flex items-center gap-1">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className="px-3 py-2 rounded-md text-sm font-body text-muted-foreground hover:text-primary hover:bg-muted transition-all duration-200"
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Botão mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground p-2"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className="px-4 py-3 text-left rounded-md text-muted-foreground hover:text-primary hover:bg-muted transition-all"
                >
                  {s.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
