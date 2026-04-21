import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@radix-ui/themes/styles.css";
import "./index.css";
import App from "./App.tsx";
import { Theme, ThemePanel } from "@radix-ui/themes";
import { ThemeProvider } from "./providers/ThemeProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Theme accentColor="teal" grayColor="gray">
        <App />
        <ThemePanel />
      </Theme>
    </ThemeProvider>
  </StrictMode>,
);
