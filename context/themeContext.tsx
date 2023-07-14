import { ThemeContextType } from "@/types/ThemeContextType";
import { createContext, useState, PropsWithChildren } from "react";

export const ThemeContext = createContext<ThemeContextType | boolean>(false);

export function ThemeProvider({children}: PropsWithChildren) {
  const [isDarkThemeEnabled, setIsDarkThemeEnabled] = useState(false);
  return(
    <ThemeContext.Provider value={{isDarkThemeEnabled, setIsDarkThemeEnabled}}>
      {children}
    </ThemeContext.Provider>
  )
}