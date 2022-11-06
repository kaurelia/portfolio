import { Theme } from "@emotion/react";

const themes: { [key: string]: Theme } = {
  light: {
    colors: {
      primary: "#1d2d20",
      background: "#E7EDBD",
      hamburgerIcon: "#E7EDBD",
      hamburgerCorner: "#3A5A40",
    },
  },
  dark: {
    colors: {
      primary: "#E7EDBD",
      background: "#1d2d20",
      hamburgerIcon: "#E7EDBD",
      hamburgerCorner: "#5b641b",
    },
  },
};
export default themes;
