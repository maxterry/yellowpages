// declare module "ThemeContext" {
//   import { ReactNode } from "react";

//   type ThemeContextProps = {
//     children: ReactNode;
//   };

//   type ThemeContextType = {
//     darkMode: boolean;
//     toggleTheme: () => void;
//   };

//   export const ThemeProvider: React.FC<ThemeContextProps>;
//   export const ThemeContext: React.Context<ThemeContextType>;
// }
declare module "ThemeContext" {
  export interface ThemeContext {
    darkMode: boolean;
    toggleTheme: () => void;
  }
}
