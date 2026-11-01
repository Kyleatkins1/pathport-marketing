import React, { createContext, useContext, useEffect, useState } from 'react';

type ThemeMode = 'system' | 'light' | 'dark';

interface ThemeContextType {
  theme: ThemeMode;
  resolvedTheme: 'light' | 'dark';
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
}

const THEME_CHANGE_EVENT = 'pathport:theme-change';

function getInitialResolvedTheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'light';
  const saved = window.localStorage.getItem('pathport_theme') as ThemeMode | null;
  if (saved === 'dark') return 'dark';
  if (saved === 'light') return 'light';
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const state = useStandaloneTheme();
  return <ThemeContext.Provider value={state}>{children}</ThemeContext.Provider>;
};

function useStandaloneTheme(): ThemeContextType {
  const [theme, setThemeState] = useState<ThemeMode>('light');
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const syncFromDomOrStorage = () => {
      const saved = (window.localStorage.getItem('pathport_theme') as ThemeMode) || 'light';
      setThemeState(saved);
      const isDark =
        saved === 'dark' ||
        (saved === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
      setResolvedTheme(isDark ? 'dark' : 'light');
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    syncFromDomOrStorage();

    const handleCustomChange = () => syncFromDomOrStorage();
    window.addEventListener(THEME_CHANGE_EVENT, handleCustomChange);
    return () => window.removeEventListener(THEME_CHANGE_EVENT, handleCustomChange);
  }, []);

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('pathport_theme', newTheme);
      const isDark =
        newTheme === 'dark' ||
        (newTheme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
      setResolvedTheme(isDark ? 'dark' : 'light');
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      window.dispatchEvent(new CustomEvent(THEME_CHANGE_EVENT));
    }
  };

  const toggleTheme = () => {
    const current = getInitialResolvedTheme();
    setTheme(current === 'dark' ? 'light' : 'dark');
  };

  return { theme, resolvedTheme, setTheme, toggleTheme };
}

export const useTheme = (): ThemeContextType => {
  const ctx = useContext(ThemeContext);
  const standalone = useStandaloneTheme();
  return ctx || standalone;
};
