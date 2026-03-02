import { motion } from "framer-motion";
import type { Experience, Project } from "@/types";

interface Props {
  exp: Experience | Project;
  onClose: () => void;
}

/* ---------------- Animations ---------------- */

const modalContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.18,
      ease: "easeOut",
      when: "beforeChildren",
    },
  },
};

const staggerWrapper = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const loadItem = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.28,
      ease: "easeOut",
    },
  },
};

/* ---------------- Type Guards ---------------- */

const isExperience = (
  data: Experience | Project
): data is Experience => {
  return (data as Experience).company !== undefined;
};

const getSkills = (exp: Experience | Project): string[] => {
  return isExperience(exp) ? exp.skills ?? [] : exp.tech;
};

const getAchievements = (exp: Experience | Project): string[] => {
  return isExperience(exp) ? exp.achievements : exp.highlights;
};

export const Modal = ({ exp, onClose }: Props) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      onClick={onClose}
    >
      <motion.div
        variants={modalContainer}
        initial="hidden"
        animate="visible"
        onClick={(e) => e.stopPropagation()}
        className="
          retro-card
          w-full
          max-w-2xl
          max-h-[80vh]
          overflow-hidden
          p-0
        "
      >
        <motion.div
          variants={staggerWrapper}
          initial="hidden"
          animate="visible"
        >
          {/* ---------- HEADER ---------- */}
          <motion.div
            variants={loadItem}
            className="flex items-start justify-between p-6 border-b border-retro-black/10 dark:border-white/10"
          >
            <div>
              <h3 className="text-xl font-semibold">
                {isExperience(exp) ? exp.role : exp.title}
              </h3>

              <p className="text-sm text-retro-gray dark:text-retro-paper/70">
                {isExperience(exp)
                  ? `${exp.company} · ${exp.type}`
                  : exp.description}
              </p>
            </div>

            <button
              onClick={onClose}
              className="text-retro-gray hover:text-retro-black dark:hover:text-retro-cream dark:text-retro-paper/70"
            >
              ✕
            </button>
          </motion.div>

          {/* ---------- BODY ---------- */}
          <div className="p-6 overflow-y-auto max-h-[calc(80vh-88px)]">
            {isExperience(exp) && (
              <motion.p
                variants={loadItem}
                className="text-xs text-retro-gray mb-4 dark:text-retro-paper/70"
              >
                {exp.duration}
              </motion.p>
            )}

            {/* Skills / Tech */}
            <motion.h4
              variants={loadItem}
              className="text-sm font-medium text-retro-orange mb-2"
            >
              {isExperience(exp) ? "Tech Stack" : "Technologies Used"}
            </motion.h4>

            <motion.div
              variants={staggerWrapper}
              className="flex flex-wrap gap-2 mb-6"
            >
              {getSkills(exp).map((skill: string) => (
                <motion.span
                  key={skill}
                  variants={loadItem}
                  className="skill-tag"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            {/* Achievements / Learnings */}
            <motion.h4
              variants={loadItem}
              className="text-sm font-medium text-retro-orange mb-2"
            >
              {isExperience(exp) ? "Key Achievements" : "Key Learnings"}
            </motion.h4>

            <motion.ul
              variants={staggerWrapper}
              className="space-y-3 text-sm text-retro-gray dark:text-retro-paper/70"
            >
              {getAchievements(exp).map((a: string, i: number) => (
                <motion.li key={i} variants={loadItem}>
                  • {a}
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <motion.div
            variants={loadItem}
            className="px-6 pb-6 pt-2 text-xs text-retro-gray dark:text-retro-paper/50"
          >
            {/* {isExperience(exp)
              ? "Professional Experience"
              : "Personal / Independent Project"} */}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};
