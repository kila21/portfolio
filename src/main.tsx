import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Analytics } from "@vercel/analytics/react";

import App from "./App";
import { AllProjects } from "./pages/AllProjects";
import { ProjectDetail } from "./pages/ProjectDetail";
import { NotFound, RouteError } from "./pages/NotFound";
import { GlobalStyles } from "./styles/GlobalStyles";
import { theme } from "./styles/theme";
import { ThemeModeProvider } from "./context/ThemeMode";

const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <RouteError /> },
  { path: "/projects", element: <AllProjects />, errorElement: <RouteError /> },
  {
    path: "/projects/:id",
    element: <ProjectDetail />,
    errorElement: <RouteError />,
  },
  { path: "*", element: <NotFound /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeModeProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <RouterProvider router={router} />
        <Analytics />
      </ThemeProvider>
    </ThemeModeProvider>
  </React.StrictMode>
);
