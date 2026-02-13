import { GitHubIcon, LinkedInIcon, LeetCodeIcon, TwitterIcon } from '../ui/Icons';
import { socialLinks } from '@/data/portfolio';

const iconMap = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  leetcode: LeetCodeIcon,
  twitter: TwitterIcon,
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 mt-16 border-t border-retro-black/5 dark:border-white/5">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
       
          <p className="text-sm text-retro-gray dark:text-retro-paper/60">
            © {currentYear} Chaitanya Shinde
          </p>

         
          <a
            href="mailto:chaitanyashinde8290@gmail.com"
            className="text-sm text-retro-gray dark:text-retro-paper/60 hover:text-retro-orange transition-colors"
          >
            chaitanyashinde8290@gmail.com
          </a>

          {/* Right - Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon as keyof typeof iconMap];
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-retro-gray dark:text-retro-paper/60 hover:text-retro-orange transition-colors"
                  aria-label={link.name}
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};
