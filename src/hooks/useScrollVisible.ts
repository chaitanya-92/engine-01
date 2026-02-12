import { useEffect, useState } from 'react';

export function useScrollVisible(
  threshold = 40,
  visibleDuration = 1000 // ms
) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timeoutId: number | null = null;

    const onScroll = () => {
      if (window.scrollY > threshold) {
        setVisible(true);

        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = window.setTimeout(() => {
          setVisible(false);
        }, visibleDuration);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [threshold, visibleDuration]);

  return visible;
}
