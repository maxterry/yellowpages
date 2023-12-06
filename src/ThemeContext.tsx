import React, { createContext, useState, useEffect, ReactNode } from "react";

type ThemeContextProps = {
  children: ReactNode;
};

type ThemeContextType = {
  darkMode: boolean;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType,
);

export const ThemeProvider: React.FC<ThemeContextProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "false" ? false : true,
  );

  const toggleTheme = () => {
    const updatedMode = !darkMode;
    setDarkMode(updatedMode);
    localStorage.setItem("darkMode", String(updatedMode));
  };

  // TODO
  // if stored theme, prefer that
  // if prefers dark theme, use that
  // if prefers light theme, use that
  // otherwise use dark theme if between sunset and sunrise
  useEffect(() => {
    const prefersDarkTheme = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    const storedMode =
      localStorage.getItem("darkMode") === "false" ? false : true;
    setDarkMode(storedMode || prefersDarkTheme);

    const mediaQueryListener = (e: MediaQueryListEvent) => {
      setDarkMode(e.matches);
    };

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", mediaQueryListener);

    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", mediaQueryListener);
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
