import { css, Global, useTheme } from "@emotion/react";
import { useMemo } from "react";

const GlobalStyles = () => {
  const theme = useTheme();
  const globalStyles = useMemo(() => {
    return css`
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
        color: ${theme.colors.primary};
        background: ${theme.colors.background};
        #root {
          min-height: 100vh;
        }
      }
    `;
  }, [theme]);

  return <Global styles={globalStyles} />;
};
export default GlobalStyles;
