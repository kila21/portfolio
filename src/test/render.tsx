import { ReactElement } from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ThemeModeProvider } from "../context/ThemeMode";
import { theme } from "../styles/theme";

/** Render a component with the providers the app needs. */
export const renderWithProviders = (
  ui: ReactElement,
  { route = "/" }: { route?: string } = {}
) =>
  render(
    <ThemeModeProvider>
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>
      </ThemeProvider>
    </ThemeModeProvider>
  );
