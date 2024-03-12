import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Progress from "./pages/progressContainer";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { getTheme } from "./utils/theme.ts";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={getTheme()}>
      <CssBaseline />
      <Suspense fallback={<Progress />}>
        <App />
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>
);
