import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { socialLinks } from '@/data/portfolio';
import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
  SunIcon,
  MoonIcon,
  HomeIcon,
  FolderIcon,
  CodeIcon,
  TimelineIcon,
} from '@/components/ui/Icons';
import { useBottomHide } from '@/hooks/useBottomHide';

const renderSocialIcon = (icon: string) => {
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

const navItems = [
  { name: 'Hero', href: '#hero', icon: <HomeIcon className="w-5 h-5" /> },
  { name: 'Tech', href: '#tech', icon: <CodeIcon className="w-5 h-5" /> },
  { name: 'Experience', href: '#experience', icon: <TimelineIcon className="w-5 h-5" /> },
  { name: 'Projects', href: '#projects', icon: <FolderIcon className="w-5 h-5" /> },
];


export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const hidden = useBottomHide();

  return (
    <motion.nav
      initial={{ y: 80, opacity: 0 }}
      animate={{
        y: hidden ? 120 : 0,
        opacity: hidden ? 0 : 1,
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
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
      
        {navItems.map((item) => (
          <motion.a
            key={item.name}
            href={item.href}
            aria-label={item.name}
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
            {item.icon}
          </motion.a>
        ))}

        <div className="h-6 w-px bg-retro-black/10 dark:bg-retro-paper/10 mx-1" />

        {socialLinks
          .filter((link) => link.icon !== 'leetcode')
          .map(({ name, url, icon }) => {
            const IconElement = renderSocialIcon(icon);
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


        <div className="h-6 w-px bg-retro-black/10 dark:bg-retro-paper/10 mx-1" />

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
