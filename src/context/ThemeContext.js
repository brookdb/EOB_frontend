import React, { createContext, useContext } from "react";

// Create a theme context
const ThemeContext = createContext();

// Custom hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

// Theme provider component
export const ThemeProvider = ({ children }) => {
  // Define your theme properties here
  const theme = {
    color: {
      foreground: "#f0d353",
      foreground2: "#F1C70C",
      background: "#0f1d3f",
      backgroundLight: "#233769",
      black: "#09091a",
      cream: "#F5EEE7",
      accent: "#b41d22",
    },
    font: {
      fontFamily: {
        header: '"Oswald"',
        title: '"Aboreto", sans-serif',
        paragraph: '"Quicksand", sans-serif',
      },
      fontSize: {
        title: "2rem",
        subheader: "1.5rem",
        subtitle: "1rem",
        paragraph: "1rem",
        paragraph2: "1.35rem",
        hero: "2.5rem",
        pagination: "1.11rem",
      },
    },
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
