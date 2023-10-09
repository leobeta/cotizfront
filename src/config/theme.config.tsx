import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

import React from "react";

type ThemeProp = {
  children: JSX.Element
}

export enum themePalette {
  BG = '#12181b',
  LIME = '#C8FA5F',
  FONT_GLOBAL = "'JetBrains Mono',  'monospace'",
  ERROR_MAIN = "#F44336",
  BG_ERROR_MAIN = "rgba(244,67,54,0.1)"
}

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: themePalette.BG
    },
    primary: {
      main: themePalette.LIME
    },
  },
  typography: {
    fontFamily: themePalette.FONT_GLOBAL
  },
  components: {
    MuiButton: {
      defaultProps: {
        style: {
          textTransform: 'none',
          textShadow: "none",
          borderRadius: "0.5em"
        }
      }
    },
    MuiPaper: {
      defaultProps: {
        style: {
          color: themePalette.LIME
        }
      }
    }
  }
})

export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}