import { describe, expect, it } from "vitest";
import { projects, getProject } from "./projects";

describe("projects data", () => {
  it("has unique ids", () => {
    const ids = projects.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("gives every featured project an image and a case study", () => {
    for (const p of projects.filter((p) => p.featured)) {
      expect(p.image, `${p.id} image`).toBeTruthy();
      expect(p.problem, `${p.id} problem`).toBeTruthy();
      expect(p.contributions?.length, `${p.id} contributions`).toBeGreaterThan(
        0
      );
    }
  });

  it("every project has at least one link", () => {
    for (const p of projects) {
      expect(p.liveLink || p.repoLink, `${p.id} link`).toBeTruthy();
    }
  });

  it("getProject resolves a known id and misses gracefully", () => {
    expect(getProject("trading-journal")?.title).toBe("Trading Journal");
    expect(getProject("nope")).toBeUndefined();
  });
});
