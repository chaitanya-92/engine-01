import { motion } from 'framer-motion';
import { useTime } from '@/hooks/useTime';
import { useScrollVisible } from '@/hooks/useScrollVisible';

export const FloatingTime = () => {
  const time = useTime();
  const visible = useScrollVisible(40);

  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="
        fixed top-4 right-4 z-50
        text-xs font-mono
        text-retro-gray dark:text-retro-paper/60
        pointer-events-none
      "
    >
      {time}
    </motion.div>
  );
};
