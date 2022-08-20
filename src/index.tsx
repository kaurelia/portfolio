import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/app/app";
import { load } from "webfontloader";

load({
  google: {
    families: ["Titan One"],
  },
  fontactive: () => {},
});

createRoot(document.querySelector("#root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
