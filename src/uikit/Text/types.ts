import { FontSizes, GlobalColors } from "../Theme/types";
import { SpaceProps } from "styled-system";

export interface TextProps extends SpaceProps {
  color?: keyof GlobalColors;
  fontSize?: keyof FontSizes;
  bold?: boolean;
  KO?: boolean;
  center?: boolean;
}
