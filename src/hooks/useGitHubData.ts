import { useEffect, useState } from 'react';

interface GitHubUser {
  public_repos: number;
  followers: number;
  following: number;
}

interface GitHubData {
  repos: number;
  followers: number;
  loading: boolean;
  error: boolean;
}

export const useGitHubData = (username: string): GitHubData => {
  const [data, setData] = useState<GitHubData>({
    repos: 0,
    followers: 0,
    loading: true,
    error: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) throw new Error('Failed to fetch');
        const userData: GitHubUser = await response.json();
        
        setData({
          repos: userData.public_repos,
          followers: userData.followers,
          loading: false,
          error: false,
        });
      } catch {
        setData(prev => ({ ...prev, loading: false, error: true }));
      }
    };

    fetchData();
  }, [username]);

  return data;
};
