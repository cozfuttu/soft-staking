import "styled-components";
import { CustomTheme } from "./Theme";
import { ThemedColors } from "./Theme/types";

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {
    setTheme: () => void;
  }
}
