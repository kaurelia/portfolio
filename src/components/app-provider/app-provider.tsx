import { PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";

type AppProviderProps = PropsWithChildren;

const AppProvider = ({ children }: AppProviderProps) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

export default AppProvider;
