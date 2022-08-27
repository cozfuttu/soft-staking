import { GlobalColors } from "components/Theme/types";
import { SpaceProps } from "styled-system";

export type TextVariants = "s" | "m" | "l" | "xl" | "header";

export interface TextProps extends SpaceProps {
  color?: keyof GlobalColors;
  fontSize?: TextVariants;
  bold?: boolean;
}
