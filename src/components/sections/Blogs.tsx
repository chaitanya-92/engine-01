import {
    motion,
    useMotionValue,
    useAnimationFrame,
    useScroll,
    useSpring,
  } from "framer-motion";
  import { useRef, useState} from "react";
  import { ExternalLinkIcon } from "@/components/ui/Icons";
  import { useMediumPosts } from "@/hooks/useMediumPosts";
  
  export const Blogs = () => {
    const { posts, loading } = useMediumPosts();
    const containerRef = useRef<HTMLDivElement>(null);
  
    const x = useMotionValue(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
  
    const speed = 160;
  
  
    useAnimationFrame((_, delta) => {
      if (!isHovered && !isDragging && posts.length > 0) {
        x.set(x.get() - (delta / 1000) * speed);
  
        const containerWidth =
          containerRef.current?.scrollWidth || 0;
  
        if (Math.abs(x.get()) >= containerWidth / 2) {
          x.set(0);
        }
      }
    });
  
  
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
    });
  
    if (loading || posts.length === 0) return null;
  
    const duplicated = [...posts, ...posts];
  
    return (
      <section id="blogs" className="py-20 relative">
       
        <motion.div
          style={{ scaleX }}
          className="fixed top-0 left-0 right-0 h-[3px] bg-retro-orange origin-left z-50"
        />
  
        <h2 className="text-2xl font-semibold text-retro-black dark:text-retro-cream mb-2">
          Blogs
        </h2>
  
        <p className="text-retro-gray dark:text-retro-paper/60 mb-12">
        Notes on building and engineering.
        </p>
        
        <div className="relative">

          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-retro-cream dark:from-retro-black to-transparent z-10" />
  
          <div className="overflow-hidden py-4">
            <motion.div
              ref={containerRef}
              className="flex gap-8"
              style={{ x }}
              drag="x"
              dragConstraints={{ left: -1000, right: 0 }}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={() => setIsDragging(false)}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {duplicated.map((blog, index) => (
                <motion.a
                  key={index}
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -6 }}
                  className="
                    min-w-[360px]
                    rounded-2xl
                    overflow-hidden
                    bg-retro-paper dark:bg-retro-gray/20
                    border border-retro-black/5 dark:border-white/10
                    shadow-lg
                    hover:shadow-[0_10px_40px_rgba(255,115,0,0.35)]
                    transition-all duration-300
                    group
                  "
                >
                  {blog.thumbnail && (
                    <div className="overflow-hidden">
                      <img
                        src={blog.thumbnail}
                        alt={blog.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
  
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs text-retro-gray dark:text-retro-paper/60">
                        {blog.pubDate}
                      </span>
  
                      <span className="text-xs text-retro-orange flex items-center gap-1 group-hover:underline">
                        Read <ExternalLinkIcon className="w-3.5 h-3.5" />
                      </span>
                    </div>
  
                    <h3 className="font-semibold text-retro-black dark:text-retro-cream mb-3 leading-snug">
                      {blog.title}
                    </h3>
  
                    <p className="text-sm text-retro-gray dark:text-retro-paper/70 mb-4 line-clamp-3">
                      {blog.description}
                    </p>
  
                    <p className="text-xs text-retro-gray dark:text-retro-paper/60">
                      {blog.readTime}
                    </p>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    );
  };