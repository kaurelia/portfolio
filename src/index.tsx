import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/app/app";
createRoot(document.querySelector("#root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
