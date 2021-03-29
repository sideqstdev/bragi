import "../src/styles/globals.css";
import { theme } from "../tailwind.config";
import { ThemeProvider, useTheme } from '../src/theme/theme.provider';
import { useEffect, useState } from "react";
import { themes } from '@storybook/theming';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: `dark`,
    values: [
      {name: `light`, value: theme.colors.light.background},
      {name: `dark`, value: theme.colors.dark.background}
    ]
  },
  docs: {
    theme: themes.dark
  }
}

export const globalTypes = {
  theme: {
    name: `Theme`,
    description: `Uses local storage to read global theme (requires page refresh)`,
    defaultValue: `dark`,
    toolbar: {
      icon: `circlehollow`,
      items: [`light`, `dark`]
    }
  }
}

const withThemeProvider=(Story, context) => {
  const toolbarTheme = context.globals.theme
  const themeCtx = useTheme()

  const [theme, setTheme] = useState(themeCtx.theme)

  useEffect(() => {
    localStorage.setItem("sq-theme", toolbarTheme)
    setTheme(themeCtx.theme)
    context.parameters.backgrounds.defa
  })
  
  

  return (
    <ThemeProvider>
      <Story {...context}/>
    </ThemeProvider>
  )
}

export const decorators = [withThemeProvider]