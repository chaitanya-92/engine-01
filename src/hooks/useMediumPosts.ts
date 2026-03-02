import { useEffect, useState } from "react";

interface Post {
  title: string;
  link: string;
  description: string;
  readTime: string;
  pubDate: string;
  thumbnail: string;
}

export const useMediumPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@chaitanyashinde8290"
        );

        const data = await res.json();

        const formatted = data.items.slice(0, 5).map((item: any) => {
          const plainText = item.content.replace(/<[^>]+>/g, "");
          const words = plainText.split(/\s+/).length;
          const readTime = Math.ceil(words / 200);

          return {
            title: item.title,
            link: item.link,
            description: plainText.slice(0, 120) + "...",
            readTime: `${readTime} min read`,
            pubDate: new Date(item.pubDate).toLocaleDateString(),
            thumbnail: item.thumbnail || "",
          };
        });

        setPosts(formatted);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, loading };
};