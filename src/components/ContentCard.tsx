import { ReactNode } from "react";
import { motion } from "framer-motion";

// Card com borda roxa brilhante para organizar conteúdo
interface ContentCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const ContentCard = ({ children, className = "", delay = 0 }: ContentCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02 }}
      className={`bg-card border border-secondary/40 rounded-lg p-6 md:p-8 hover:glow-purple transition-shadow duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default ContentCard;
