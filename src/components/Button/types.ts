import { ReactNode } from "react";
import { DefaultTheme } from "styled-components";
import { SpaceProps } from "styled-system";

export type ButtonVariants = "primary" | "secondary";

export interface ButtonProps extends SpaceProps {
  variant?: ButtonVariants;
  children: ReactNode;
}

export interface ThemedButtonProps extends ButtonProps {
  theme: DefaultTheme;
}
