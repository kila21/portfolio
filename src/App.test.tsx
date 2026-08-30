import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import App from "./App";
import { renderWithProviders } from "./test/render";
import { profile } from "./data/profile";

describe("App (home)", () => {
  it("renders the name as the h1", () => {
    renderWithProviders(<App />);
    expect(
      screen.getByRole("heading", { level: 1, name: profile.name })
    ).toBeInTheDocument();
  });

  it("renders every main section with an accessible heading", () => {
    renderWithProviders(<App />);
    for (const name of [
      /things i've built/i,
      /where i've worked/i,
      /a bit about me/i,
      /let's work together/i,
    ]) {
      expect(screen.getByRole("heading", { name })).toBeInTheDocument();
    }
  });

  it("shows the featured projects", () => {
    renderWithProviders(<App />);
    expect(screen.getByText("Trading Journal")).toBeInTheDocument();
    expect(screen.getByText("Spotify Profile App")).toBeInTheDocument();
  });

  it("has a skip link to the main content", () => {
    renderWithProviders(<App />);
    expect(
      screen.getByRole("link", { name: /skip to content/i })
    ).toHaveAttribute("href", "#main");
  });
});
