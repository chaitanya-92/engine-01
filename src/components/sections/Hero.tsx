import { motion } from 'framer-motion';
import { GitHubIcon, LinkedInIcon, LeetCodeIcon, TwitterIcon ,  } from '../ui/Icons';
import { socialLinks } from '@/data/portfolio';

import { useLiveAge } from '@/hooks/useLiveAge';


const iconMap = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  leetcode: LeetCodeIcon,
  twitter: TwitterIcon,
  
};


export const Hero = () => {


  const age = useLiveAge('2005-04-26');
  
  return (
    <section id="hero" className="pt-28 pb-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
      <div className="relative">

        <h1 className="text-3xl md:text-4xl font-semibold mb-1">
          Hey, I&apos;m <span className="text-retro-orange">Chaitanya</span>
        </h1>

        <p className="text-sm text-retro-gray dark:text-retro-paper/60 mb-6">
          Applied AI + Full Stack Engineer | {age}
        </p>
      </div>


        <div className="space-y-3 text-retro-gray dark:text-retro-paper/80 leading-relaxed max-w-3xl">
          <p>
            I enjoy building things people actually use.
            I work across the stack, turning ideas into reliable, real-world web applications.
          </p>

          <p>
            I focus on clean code, scalable systems, and practical
            <span className="font-medium text-retro-black dark:text-retro-cream">
              {' '}AI-driven features{' '}
            </span>
            for modern
            <span className="font-medium text-retro-black dark:text-retro-cream">
              {' '}SaaS{' '}
            </span>
            and
            <span className="font-medium text-retro-black dark:text-retro-cream">
              {' '}web platforms
            </span>.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8"
        >
          <p className="text-sm text-retro-gray dark:text-retro-paper/60 mb-3">
            Where to find me
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon as keyof typeof iconMap];
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  className="p-2.5 rounded-lg bg-retro-paper dark:bg-retro-gray/30 text-retro-gray dark:text-retro-paper/70 hover:text-retro-orange hover:bg-retro-orange/10 transition-all"
                  aria-label={link.name}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
