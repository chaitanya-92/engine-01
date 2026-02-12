import { motion } from "framer-motion";
import { useState } from "react";
import type { Experience } from "@/types";
import { Modal } from "@/components/ui/Modal";

interface Props {
  exp: Experience;
  index: number;
}

export const Card = ({ exp, index }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.05 }}
        onClick={() => setOpen(true)}
        className="retro-card retro-card-hover p-5 cursor-pointer"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-retro-black dark:text-retro-cream">
            {exp.role}
          </h3>

          {exp.current && (
            <span className="text-xs px-2 py-0.5 rounded bg-retro-orange/10 text-retro-orange">
              Recent
            </span>
          )}
        </div>

        <p className="text-sm text-retro-gray dark:text-retro-paper/60 mb-3">
          {exp.company} · {exp.duration}
        </p>

        <p className="text-sm text-retro-gray dark:text-retro-paper/70 line-clamp-2">
          {exp.achievements[0]}
        </p>

        {/* Footer */}
        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-retro-black/5 dark:border-white/5">
          {exp.skills?.map((skill) => (
            <span key={skill} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      </motion.article>

      {open && <Modal exp={exp} onClose={() => setOpen(false)} />}
    </>
  );
};
