import { ThemeProvider } from "@emotion/react";
import { PropsWithChildren, useMemo } from "react";
import { BrowserRouter } from "react-router-dom";
import useSystemTheme from "react-use-system-theme";
import themes from "~frontend/src/constants/themes/themes";
import useMobileListener from "~frontend/src/hooks/use-mobile-listener";

const AppProvider = ({ children }: PropsWithChildren) => {
  const systemTheme = useSystemTheme("dark");

  const selectedTheme = useMemo(() => {
    return themes[systemTheme];
  }, [systemTheme]);
  useMobileListener();
  return (
    <ThemeProvider theme={selectedTheme}>
      <BrowserRouter>{children}</BrowserRouter>
    </ThemeProvider>
  );
};

export default AppProvider;
