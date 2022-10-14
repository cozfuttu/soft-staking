import { globalColors } from "./config";
import { ThemedColors } from "./types";

const lightTheme: ThemedColors = {
  ...globalColors,
  id: "light",
  text: "#000c",
  bodyBackgroundColor: "#fff",
  cardBackgroundColor: "#A6B5EA",
  secondaryButton: "#00003f",
  modalBackgroundColor: "#A6B5EA",
};

export default lightTheme;
