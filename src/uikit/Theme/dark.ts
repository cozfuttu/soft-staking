import { globalColors } from "./config";
import { ThemedColors } from "./types";

const darkTheme: ThemedColors = {
  ...globalColors,
  id: "dark",
  text: "#fffc",
  bodyBackgroundColor: "#227AB6",
  cardBackgroundColor: "#101527",
  secondaryButton: "#00003f",
  modalBackgroundColor: "#00001f",
};

export default darkTheme;
