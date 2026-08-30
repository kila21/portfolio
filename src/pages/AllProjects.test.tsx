import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import { AllProjects } from "./AllProjects";
import { projects } from "../data/projects";
import { renderWithProviders } from "../test/render";

describe("AllProjects", () => {
  it("lists every project, newest first", () => {
    renderWithProviders(<AllProjects />);
    for (const p of projects) {
      expect(screen.getByText(p.title)).toBeInTheDocument();
    }
    const years = screen
      .getAllByText(/^20\d{2}$/)
      .map((el) => Number(el.textContent));
    expect(years).toEqual([...years].sort((a, b) => b - a));
  });

  it("links each card to its detail route", () => {
    renderWithProviders(<AllProjects />);
    const link = screen.getByRole("link", { name: /trading journal/i });
    expect(link).toHaveAttribute("href", "/projects/trading-journal");
  });
});
