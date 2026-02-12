import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLinkIcon, GitHubIcon, ExpandIcon } from '../ui/Icons';
import { projects } from '@/data/portfolio';
import { Modal } from '@/components/ui/Modal';
import type { Project } from '@/types';

type Tab = 'personal' | 'client';

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState<Tab>('personal');

  const filteredProjects = projects.filter(
    (p) => p.category === activeTab
  );

  return (
    <section id="projects" className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-2">Projects</h2>

        <p className="text-retro-gray dark:text-retro-paper/60 mb-6 max-w-2xl">
          A selection of projects spanning AI, accessibility, collaboration,
          and healthcare systems.
        </p>

        {/* ---------- Tabs ---------- */}
        <div className="flex justify-center items-center gap-2 mb-6">
          {(['personal', 'client'] as Tab[]).map((tab: Tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                px-4 py-1.5 text-sm rounded-md transition-all
                ${
                  activeTab === tab
                    ? 'bg-retro-orange/15 text-retro-orange'
                    : 'text-retro-gray hover:text-retro-black dark:hover:text-retro-cream'
                }
              `}
            >
              {tab === 'personal' ? 'Personal Projects' : 'Client Projects'}
            </button>
          ))}
        </div>

        {/* ---------- Projects Grid ---------- */}
        <div className="grid md:grid-cols-2 gap-4">
          {filteredProjects.map((project: Project, index: number) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="retro-card retro-card-hover p-5"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-semibold">{project.title}</h3>
                  <p className="text-xs text-retro-gray dark:text-retro-paper/60">
                    {project.subtitle} 
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      text-xs px-2.5 py-1 rounded-md
                      bg-retro-orange/10 text-retro-orange
                      hover:bg-retro-orange/20
                      flex items-center gap-1
                    "
                  >
                    Live <ExternalLinkIcon className="w-3 h-3" />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      text-xs px-2.5 py-1 rounded-md
                      border border-retro-black/10 dark:border-white/10
                      text-retro-gray dark:text-retro-paper/70
                      hover:text-retro-black dark:hover:text-retro-cream
                      flex items-center gap-1
                    "
                  >
                    <GitHubIcon className="w-3 h-3" />
                    GitHub
                  </a>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-retro-gray dark:text-retro-paper/70 mb-3">
                {project.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-1 mb-4 text-sm text-retro-gray dark:text-retro-paper/70">
                {project.highlights.slice(0, 3).map((h: string, i: number) => (
                  <li key={i}>• {h}</li>
                ))}
              </ul>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-retro-black/5 dark:border-white/5">
                <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 3).map((tech: string) => (
                  <span key={tech} className="skill-tag">
                    {tech}
                  </span>
                ))}

                {project.tech.length > 3 && (
                    <button
                      type="button"
                      onClick={() => setActiveProject(project)}
                      className="skill-tag opacity-60 hover:opacity-100 transition cursor-pointer"
                      aria-label="View all technologies"
                    >
                      +{project.tech.length - 3} more
                    </button>
                  )}
                </div>

                <button
                  onClick={() => setActiveProject(project)}
                  aria-label="View project details"
                  className="
                    p-2 rounded-md
                    text-retro-gray
                    hover:text-retro-orange
                    hover:bg-retro-orange/10
                    transition-all
                    group
                  "
                >
                  <ExpandIcon className="w-4 h-4 transition-transform group-hover:scale-110" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ---------- Modal ---------- */}
      {activeProject && (
        <Modal
          exp={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}
