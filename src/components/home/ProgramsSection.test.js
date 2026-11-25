import { describe, expect, test } from "bun:test";

const source = await Bun.file(new URL("./ProgramsSection.tsx", import.meta.url)).text();
const certificates = source.split("const certificatePrograms: Program[] = [")[1]?.split("const diplomaPrograms")[0] ?? "";
const diplomas = source.split("const diplomaPrograms: Program[] = [")[1] ?? "";

describe("Diploma program headings", () => {
  for (const name of ["Interior Design", "Visual Communication + UI & UX", "Landscape Design"]) {
    test(`${name} is listed as Professional / Post Graduate Diploma`, () => {
      expect(diplomas).toContain(`title: "Professional / Post Graduate Diploma in ${name}"`);
      expect(diplomas).not.toContain(`title: "Professional Diploma in ${name}"`);
    });
  }

  test("Interior Construction & Project Management is listed as Post Graduate Diploma", () => {
    expect(diplomas).toContain('title: "Post Graduate Diploma in Interior Construction & Project Management"');
    expect(diplomas).not.toContain('title: "Professional Diploma in Interior Construction & Project Management"');
  });
});

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