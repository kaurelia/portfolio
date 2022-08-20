import { css } from "@emotion/react";

export const globalStyles = css`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
  }
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    font-family: "Titan One", cursive;
    color: #1b00ff;
  }
`;
