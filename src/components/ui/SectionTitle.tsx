import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <h2 className="text-2xl font-semibold text-retro-black dark:text-retro-cream">
        {title}
      </h2>
      {subtitle && (
        <p className="text-retro-gray dark:text-retro-paper/60 mt-1">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
