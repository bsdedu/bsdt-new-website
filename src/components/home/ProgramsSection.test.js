import { describe, expect, test } from "bun:test";

const source = await Bun.file(new URL("./ProgramsSection.tsx", import.meta.url)).text();
const certificates = source.split("const certificatePrograms: Program[] = [")[1]?.split("const diplomaPrograms")[0] ?? "";

describe("Tutler certificate durations", () => {
  for (const title of [
    "Ethical Hacking and Red Teaming",
    "Cloud Security and DevSecOps",
    "Digital Forensics and Incident Response",
    "SOC and Blue Teaming",
    "GRC and Controls",
  ]) {
    test(`${title} lasts four weeks`, () => {
      const course = certificates.split(`title: "${title}"`)[1]?.split("},")[0];
      expect(course).toBeDefined();
      expect(course).toContain('duration: "4 weeks"');
    });
  }
});