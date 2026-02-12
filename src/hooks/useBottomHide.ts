import { useEffect, useState } from 'react';

export function useBottomHide(offset = 50) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      const isAtBottom =
        scrollY + windowHeight >= docHeight - offset;

      const scrollingDown = scrollY > lastScrollY;

      if (isAtBottom && scrollingDown) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY = scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [offset]);

  return hidden;
}
