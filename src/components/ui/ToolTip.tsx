import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode, useState } from 'react';

interface TooltipProps {
  content: string;
  children: ReactNode;
  side?: 'top' | 'bottom' | 'left' | 'right';
}

const positionMap = {
  top: 'bottom-full mb-2 left-1/2 -translate-x-1/2',
  bottom: 'top-full mt-2 left-1/2 -translate-x-1/2',
  left: 'right-full mr-2 top-1/2 -translate-y-1/2',
  right: 'left-full ml-2 top-1/2 -translate-y-1/2',
};

export const Tooltip = ({
  content,
  children,
  side = 'top',
}: TooltipProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      {children}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className={`
              absolute z-50
              ${positionMap[side]}
              pointer-events-none
            `}
          >
            <div
              className="
                whitespace-nowrap
                rounded-md
                bg-retro-black
                px-2.5
                py-1
                text-xs
                text-retro-cream
                shadow-lg
                dark:bg-retro-paper
                dark:text-retro-black
              "
              role="tooltip"
            >
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
