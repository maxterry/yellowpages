import React from "react";
import { createRoot } from "react-dom/client";

// import { ThemeProvider } from "../ThemeContext";
import { ThemeProvider } from "./ThemeContext";

import App from "./App";
import "./index.css";

const root = document.getElementById("root");

if (root) {
  createRoot(root).render(
    <ThemeProvider>
      <App />
    </ThemeProvider>,
  );
}
