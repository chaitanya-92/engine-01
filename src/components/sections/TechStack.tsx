import { motion } from 'framer-motion';
import { useState } from 'react';
import { techStack } from '@/data/portfolio';

export const TechStack = () => {
  // null = none open, number = single open, -1 = all open
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const allOpen = openIndex === -1;

  return (
    <section id="tech" className="py-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        {/* ---------- Header ---------- */}
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-2xl font-semibold">Skills</h2>

          {/* Expand / Collapse All */}
          <button
            onClick={() => setOpenIndex(allOpen ? null : -1)}
            title={allOpen ? 'Collapse all' : 'Expand all'}
            aria-label={allOpen ? 'Collapse all skills' : 'Expand all skills'}
            className="
              p-2
              rounded-md
              text-retro-gray
              hover:text-retro-orange
              hover:bg-retro-orange/10
              transition-all
              group
            "
          >
            <motion.span
              animate={{ rotate: allOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
              className="block text-sm"
            >
              ▶▶
            </motion.span>
          </button>
        </div>

        <p className="text-retro-gray dark:text-retro-paper/60 mb-8">
          Technologies I've worked with and continue to learn.
        </p>

        {/* ---------- Accordion ---------- */}
        <div className="space-y-4">
          {techStack.map((category, index) => {
            const isOpen = openIndex === index || openIndex === -1;

            return (
              <motion.div
                key={category.title}
                layout="position"
                className="retro-card"
              >
                {/* Accordion Header */}
                <button
                  onClick={() =>
                    setOpenIndex(isOpen && openIndex !== -1 ? null : index)
                  }
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                >
                  <h3 className="text-sm font-mono text-retro-orange ">
                    {'< '}{category.title}{' />'}
                  </h3>

                  <motion.span
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.15 }}
                    className="text-retro-gray dark:text-retro-paper/60"
                  >
                    ▶
                  </motion.span>
                </button>

                {/* Accordion Body */}
                {isOpen && (
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="px-5 pb-5"
                  >
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      variants={{
                        hidden: {},
                        visible: {
                          transition: {
                            staggerChildren: 0.035,
                          },
                        },
                      }}
                      className="flex flex-wrap gap-2 pt-2"
                    >
                      {category.items.map((item) => (
                        <motion.span
                          key={item.name}
                          variants={{
                            hidden: { opacity: 0, y: 6 },
                            visible: {
                              opacity: 1,
                              y: 0,
                              transition: {
                                duration: 0.22,
                                ease: 'easeOut',
                              },
                            },
                          }}
                          className="skill-tag"
                        >
                          {item.name}
                        </motion.span>
                      ))}
                    </motion.div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};
