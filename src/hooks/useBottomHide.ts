import { useEffect, useRef, useState } from 'react';

export function useBottomHide() {
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      const bottomBuffer = 30; 

      const isNearBottom =
        scrollY + windowHeight >= docHeight - bottomBuffer;

      const scrollingDown = scrollY > lastScrollY.current;

      if (isNearBottom) {
        setHidden(true);
      } 
      else if (!scrollingDown) {
        setHidden(false);
      }

      lastScrollY.current = scrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () =>
      window.removeEventListener('scroll', handleScroll);
  }, []);

  return hidden;
}
