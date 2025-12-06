import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Theme } from "@radix-ui/themes";
import "./styles/reset.css";
import "./styles/radix-colors.css";
import "./styles/variables.css";
import "./styles/global.css";
import App from "./App.tsx";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");

createRoot(rootElement).render(
  <StrictMode>
    <Theme appearance="dark">
      <App />
    </Theme>
  </StrictMode>
);
