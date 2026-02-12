import { useEffect, useState } from 'react';

export function useLiveAge(dob: string) {
  const birth = new Date(dob).getTime();
  const [age, setAge] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = Date.now() - birth;
      const years = diff / (1000 * 60 * 60 * 24 * 365.25);
      setAge(years.toFixed(10));
    }, 100);

    return () => clearInterval(interval);
  }, [birth]);

  return age;
}
