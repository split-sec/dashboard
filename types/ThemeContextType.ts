import { Dispatch, SetStateAction } from "react"

export type ThemeContextType = {
  isDarkThemeEnabled: boolean
  setIsDarkThemeEnabled: Dispatch<SetStateAction<boolean>>
}