import { ReactNode } from "react";
import { motion } from "framer-motion";

// Componente de seção que anima ao entrar na tela
interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

const Section = ({ id, children, className = "" }: SectionProps) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`min-h-screen flex items-center py-20 px-4 ${className}`}
    >
      <div className="container mx-auto max-w-5xl">{children}</div>
    </motion.section>
  );
};

export default Section;
