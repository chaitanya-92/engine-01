import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { socialLinks } from '@/data/portfolio';
import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
  SunIcon,
  MoonIcon,
} from '@/components/ui/Icons';

const renderIcon = (icon: string) => {
  switch (icon.toLowerCase()) {
    case 'github':
      return <GitHubIcon className="w-5 h-5" />;
    case 'linkedin':
      return <LinkedInIcon className="w-5 h-5" />;
    case 'twitter':
    case 'x':
      return <TwitterIcon className="w-5 h-5" />;
    default:
      return null;
  }
};

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.nav
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="
        fixed bottom-4 inset-x-0 z-50
        flex justify-center
        px-3 sm:px-4
      "
    >
      <div
        className="
          flex items-center gap-1 sm:gap-2
          px-2 sm:px-3 py-2
          rounded-2xl
          bg-retro-cream/80 dark:bg-retro-black/80
          backdrop-blur-md
          border border-retro-black/10 dark:border-retro-paper/10
          shadow-lg
        "
      >
        {socialLinks
          .filter(link => link.icon !== 'leetcode') // ❌ no LeetCode in navbar
          .map(({ name, url, icon }) => {
            const IconElement = renderIcon(icon);
            if (!IconElement) return null;

            return (
              <motion.a
                key={name}
                href={url}
                target="_blank"
                rel="noreferrer"
                aria-label={name}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="
                  p-2 sm:p-2.5
                  rounded-xl
                  text-retro-gray dark:text-retro-paper/70
                  hover:text-retro-orange
                  hover:bg-retro-paper dark:hover:bg-retro-gray/30
                  transition-all
                "
              >
                {IconElement}
              </motion.a>
            );
          })}

        {/* Theme Toggle */}
        <motion.button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="
            p-2 sm:p-2.5
            rounded-xl
            text-retro-gray dark:text-retro-paper/70
            hover:text-retro-orange
            hover:bg-retro-paper dark:hover:bg-retro-gray/30
            transition-all
          "
        >
          {theme === 'light' ? (
            <MoonIcon className="w-5 h-5" />
          ) : (
            <SunIcon className="w-5 h-5" />
          )}
        </motion.button>
      </div>
    </motion.nav>
  );
};
