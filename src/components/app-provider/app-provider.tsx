import { Theme, ThemeProvider } from "@emotion/react";
import { PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";

type AppProviderProps = PropsWithChildren;

const themes: { [key: string]: Theme } = {
  light: { colors: { primary: "#1b00ff" } },
};

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ThemeProvider theme={themes.light}>
      <BrowserRouter>{children}</BrowserRouter>
    </ThemeProvider>
  );
};

export default AppProvider;
