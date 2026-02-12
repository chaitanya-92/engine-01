import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const Card = ({ 
  children, 
  className = '', 
  delay = 0,
}: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay }}
      className={`retro-card retro-card-hover p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
};

// Keep GlassCard as alias for backwards compatibility
export const GlassCard = Card;
