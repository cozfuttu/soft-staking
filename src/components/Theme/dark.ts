import { globalColors } from "./config";
import { ThemedColors } from "./types";

const darkTheme: ThemedColors = {
  ...globalColors,
  id: "dark",
  text: "#fffc",
  bodyBackgroundColor: "#00001f",
  cardBackgroundColor: "#101527",
  secondaryButton: "#00003f",
  modalBackgroundColor: "#00001f",
};

export default darkTheme;
