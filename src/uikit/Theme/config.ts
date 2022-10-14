import {
  Breakpoints,
  FontSizes,
  GlobalColors,
  Gradients,
  MediaQueries,
} from "./types";

export const breakpoints: Breakpoints = {
  s: 30, // 30rem = 480px
  m: 48, // 48rem = 768px
  l: 64, // 64rem = 1024px
  xl: 84, // 84rem = 1344px
};

export const mediaQueries: MediaQueries = {
  s: `@media (max-width: ${breakpoints.s}rem)`,
  m: `@media (max-width: ${breakpoints.m}rem)`,
  l: `@media (max-width: ${breakpoints.l}rem)`,
  xl: `@media (max-width: ${breakpoints.xl}rem)`,
};

export const fontSizes: FontSizes = {
  xs: 1.2, // 1.2rem = 12px
  s: 1.6, // 1.6rem = 16px
  m: 2.4, // 2.4rem = 24px
  l: 3.2, // 3.2rem = 32px
  xl: 6.4, // 6.4rem = 64px
  header: 4.8, // 4.8rem = 48px
};

export const globalColors: GlobalColors = {
  primary: "#DAC1EC",
  secondary: "#554F48",
  textGray: "#E5E5E5",
  red: "#D10000",
  green: "#C1E980",
};

export const gradients: Gradients = {
  primaryGradient: `linear-gradient(180deg, ${globalColors.primary} 0%, ${globalColors.secondary} 100%)`,
  primaryGradientHorizontal: `linear-gradient(90deg, ${globalColors.primary} 0%, ${globalColors.secondary} 100%)`,
  primaryGradientTransparent: `linear-gradient(180deg, ${globalColors.primary}66 0%, ${globalColors.secondary}66 100%)`,
  primaryGradientHorizontalTransparent: `linear-gradient(90deg, ${globalColors.primary}66 0%, ${globalColors.secondary}66 100%)`,
};

const globalTheme = {
  breakpoints,
  mediaQueries,
  fontSizes,
  gradients,
};

export default globalTheme;
