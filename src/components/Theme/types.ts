export type LightOrDark = "light" | "dark";

export interface GlobalColors {
  primary: string;
  secondary: string;
  textGray: string;
}

export interface Gradients {
  primaryGradient: string;
  primaryGradientHorizontal: string;
}

export interface ThemedColors extends GlobalColors {
  id: LightOrDark;
  text: string;
  secondaryButton: string;
  bodyBackgroundColor: string;
  cardBackgroundColor: string;
  modalBackgroundColor: string;
}

export interface Breakpoints {
  s: number;
  m: number;
  l: number;
  xl: number;
}

export interface MediaQueries {
  s: string;
  m: string;
  l: string;
  xl: string;
}

export interface FontSizes {
  s: number;
  m: number;
  l: number;
  xl: number;
  header: number;
}
