import { ThemeProvider } from "@emotion/react";
import { PropsWithChildren, useMemo } from "react";
import { BrowserRouter } from "react-router-dom";
import themes from "../../constants/themes/themes";
import useSystemTheme from "react-use-system-theme";

const AppProvider = ({ children }: PropsWithChildren) => {
  const systemTheme = useSystemTheme("dark");

  const selectedTheme = useMemo(() => {
    return themes[systemTheme];
  }, [systemTheme]);

  return (
    <ThemeProvider theme={selectedTheme}>
      <BrowserRouter>{children}</BrowserRouter>
    </ThemeProvider>
  );
};

export default AppProvider;
