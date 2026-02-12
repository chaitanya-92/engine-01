import { useEffect, useState } from 'react';

export function useTime() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-IN', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          timeZoneName: 'short',
        })
      );
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return time;
}
