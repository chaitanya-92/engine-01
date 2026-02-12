import { motion } from 'framer-motion';
import { GitHubIcon, LeetCodeIcon, ExternalLinkIcon } from '../ui/Icons';
import { profiles } from '@/data/portfolio';
import { useGitHubData } from '@/hooks/useGitHubData';

const GitHubCard = ({ profile }: { profile: typeof profiles[0] }) => {
  const { repos, followers, loading, error } = useGitHubData(profile.username);

  return (
    <motion.a
      href={profile.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="retro-card retro-card-hover p-5 group block"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-retro-paper dark:bg-retro-gray/30">
            <GitHubIcon className="w-5 h-5 text-retro-gray dark:text-retro-paper/70" />
          </div>
          <span className="font-semibold text-retro-black dark:text-retro-cream">
            {profile.platform}
          </span>
        </div>
        <span className="text-sm text-retro-orange flex items-center gap-1 group-hover:underline">
          Visit <ExternalLinkIcon className="w-3.5 h-3.5" />
        </span>
      </div>

      <p className="text-sm text-retro-gray dark:text-retro-paper/70 mb-1">
        @{profile.username}
      </p>
      <p className="text-sm text-retro-gray dark:text-retro-paper/70">
        {profile.description}
      </p>

      <div className="flex gap-6 mt-4 pt-4 border-t border-retro-black/5 dark:border-white/5">
        <div>
          <p className="font-semibold text-retro-black dark:text-retro-cream">
            {loading ? '...' : error ? '—' : repos}
          </p>
          <p className="text-xs text-retro-gray dark:text-retro-paper/60">
            Repositories
          </p>
        </div>
        <div>
          <p className="font-semibold text-retro-black dark:text-retro-cream">
            {loading ? '...' : error ? '—' : followers}
          </p>
          <p className="text-xs text-retro-gray dark:text-retro-paper/60">
            Followers
          </p>
        </div>
      </div>
    </motion.a>
  );
};

const LeetCodeCard = ({ profile }: { profile: typeof profiles[0] }) => {
  return (
    <motion.a
      href={profile.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="retro-card retro-card-hover p-5 group block"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-retro-paper dark:bg-retro-gray/30">
            <LeetCodeIcon className="w-5 h-5 text-retro-gray dark:text-retro-paper/70" />
          </div>
          <span className="font-semibold text-retro-black dark:text-retro-cream">
            {profile.platform}
          </span>
        </div>
        <span className="text-sm text-retro-orange flex items-center gap-1 group-hover:underline">
          Visit <ExternalLinkIcon className="w-3.5 h-3.5" />
        </span>
      </div>

      <p className="text-sm text-retro-gray dark:text-retro-paper/70 mb-1">
        @{profile.username}
      </p>
      <p className="text-sm text-retro-gray dark:text-retro-paper/70">
        {profile.description}
      </p>

      <div className="flex gap-6 mt-4 pt-4 border-t border-retro-black/5 dark:border-white/5">
        <div>
          <p className="font-semibold text-retro-black dark:text-retro-cream">
            40+
          </p>
          <p className="text-xs text-retro-gray dark:text-retro-paper/60">
            Problems Solved
          </p>
        </div>
        <div>
          <p className="font-semibold text-retro-black dark:text-retro-cream">
            DSA
          </p>
          <p className="text-xs text-retro-gray dark:text-retro-paper/60">
            Focus Area
          </p>
        </div>
      </div>
    </motion.a>
  );
};

export const Profiles = () => {
  const githubProfile = profiles.find(p => p.platform === 'GitHub');
  const leetcodeProfile = profiles.find(p => p.platform === 'LeetCode');

  return (
    <section id="profiles" className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-retro-black dark:text-retro-cream mb-2">
          Achievements
        </h2>
        <p className="text-retro-gray dark:text-retro-paper/60 mb-8">
          A few things I'm proud of.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {githubProfile && <GitHubCard profile={githubProfile} />}
          {leetcodeProfile && <LeetCodeCard profile={leetcodeProfile} />}
        </div>
      </motion.div>
    </section>
  );
};
