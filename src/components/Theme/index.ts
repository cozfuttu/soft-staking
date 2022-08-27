import { createGlobalStyle } from "styled-components";
import globalTheme from "./config";
import darkTheme from "./dark";
import lightTheme from "./light";
import {
  Breakpoints,
  FontSizes,
  Gradients,
  MediaQueries,
  ThemedColors,
} from "./types";

export interface CustomTheme {
  colors: ThemedColors;
  gradients: Gradients;
  breakpoints: Breakpoints;
  mediaQueries: MediaQueries;
  fontSizes: FontSizes;
}

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
  html {
    font-size: 62.5%; // 1rem = 10px
    
    ${(p) => p.theme.mediaQueries.xl} {
      font-size: 50%; // 1rem = 8px
    }

    ${(p) => p.theme.mediaQueries.m} {
      font-size: 37.5%; // 1rem = 6px
    }
  }
  body {
    background: ${(p) => p.theme.colors.bodyBackgroundColor};
    margin: 0;
    padding: 0;
    min-height: 100vh;
    color: ${(p) => p.theme.colors.text};
  }
  
  #root {
    min-height: 100vh;
  }
`;

export const darkThemeConfig: CustomTheme = {
  colors: darkTheme,
  ...globalTheme,
};

export const lightThemeConfig: CustomTheme = {
  colors: lightTheme,
  ...globalTheme,
};

export { default as lightTheme } from "./light";
export { default as darkTheme } from "./dark";
