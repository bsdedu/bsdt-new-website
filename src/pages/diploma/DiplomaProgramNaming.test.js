import { describe, expect, test } from "bun:test";

const paths = {
  navigation: "../../components/layout/navbar/navData.ts",
  explore: "../../components/admissions/ExplorePrograms.tsx",
  enquiry: "../../components/home/enquiry/EnquiryForm.tsx",
  contact: "../../components/home/ContactSection.tsx",
  admissionsBanner: "../../components/home/AdmissionsBanner.tsx",
  testimonials: "../../components/home/TestimonialsSection.tsx",
  alumni: "../campus-life/AlumniStories.tsx",
  fees: "../../components/admissions/fees/feeStructureData.ts",
  interiorPage: "./DiplomaProgramInteriorDesign.tsx",
  interiorHero: "../../components/diploma/InteriorDesign/HeroSection.tsx",
  interiorOverview: "../../components/diploma/InteriorDesign/ProgramOverviewSection.tsx",
  interiorFeatures: "../../components/diploma/InteriorDesign/ProgramFeatures.tsx",
  interiorAdmissions: "../../components/diploma/InteriorDesign/AdmissionsInfo.tsx",
  visualPage: "./DiplomaProgramGraphicUIUX.tsx",
  visualHero: "../../components/diploma/GraphicUIUX/HeroSection.tsx",
  visualOverview: "../../components/diploma/GraphicUIUX/ProgramOverviewSection.tsx",
  visualFeatures: "../../components/diploma/GraphicUIUX/ProgramFeatures.tsx",
  visualAdmissions: "../../components/diploma/GraphicUIUX/AdmissionsInfo.tsx",
  landscapePage: "./DiplomaProgramLandscapeDesign.tsx",
  landscapeHero: "../../components/diploma/LandscapeDesign/HeroSection.tsx",
  landscapeOverview: "../../components/diploma/LandscapeDesign/ProgramOverviewSection.tsx",
  landscapeAdmissions: "../../components/diploma/LandscapeDesign/AdmissionsInfo.tsx",
};

const entries = await Promise.all(
  Object.entries(paths).map(async ([key, path]) => [
    key,
    await Bun.file(new URL(path, import.meta.url)).text(),
  ]),
);
const source = Object.fromEntries(entries);

describe("Combined Professional / Post Graduate Diploma naming", () => {
  test("Interior Design uses the combined name everywhere", () => {
    const name = "Professional / Post Graduate Diploma in Interior Design";
    for (const key of [
      "navigation",
      "explore",
      "enquiry",
      "contact",
      "admissionsBanner",
      "testimonials",
      "alumni",
      "fees",
      "interiorPage",
      "interiorOverview",
      "interiorFeatures",
    ]) {
      expect(source[key]).toContain(name);
    }
    expect(source.interiorHero).toContain("Professional / Post Graduate Diploma in<br />");
    expect(source.interiorHero).toContain(`The ${name} is`);
    expect(source.interiorHero).toContain("Professional / Post Graduate Diploma Certificate Recognised by BSDT");
    expect(source.interiorHero).not.toContain("PD in ID");
    expect(source.interiorAdmissions).toContain("Join Our Professional / Post Graduate Diploma Program");
    expect(source.enquiry).not.toContain("P.Diploma Interior Design");
    expect(source.contact).not.toContain("P.Diploma Interior Design");
  });

  test("Visual Communication + UI/UX uses the combined name everywhere", () => {
    const name = "Professional / Post Graduate Diploma in Visual Communication + UI/UX";
    expect(source.visualPage).toContain(name);
    expect(source.visualFeatures).toContain(name);
    expect(source.fees).toContain(name);
    expect(source.navigation).toContain("Professional / Post Graduate Diploma in Visual Communication + UI UX");
    expect(source.explore).toContain("Professional / Post Graduate Diploma in Visual Communication + UI & UX");
    expect(source.admissionsBanner).toContain("Professional / Post Graduate Diploma in Visual Communication + UI UX");
    expect(source.visualOverview).toContain("Professional / Post Graduate Diploma in Visual Communication + UI UX");
    expect(source.visualHero).toContain("Professional / Post Graduate Diploma in<br />");
    expect(source.visualHero).toContain("The Professional / Post Graduate Diploma in Visual Communication Design + UI/UX is");
    expect(source.visualHero).toContain("Professional / Post Graduate Diploma Certificate Recognised by BSDT");
    expect(source.visualAdmissions).toContain("Join Our Professional / Post Graduate Diploma Program");
    for (const key of ["enquiry", "contact"]) {
      expect(source[key]).toContain('value="Professional / Post Graduate Diploma in Visual Communication + UI & UX"');
      expect(source[key]).not.toContain("P.Diploma Graphic Design");
    }
  });

  test("Landscape Design uses the combined name everywhere", () => {
    const name = "Professional / Post Graduate Diploma in Landscape Design";
    for (const key of [
      "navigation",
      "explore",
      "enquiry",
      "contact",
      "admissionsBanner",
      "fees",
      "landscapePage",
      "landscapeOverview",
      "landscapeAdmissions",
    ]) {
      expect(source[key]).toContain(name);
    }
    expect(source.landscapeHero).toContain("Professional / Post Graduate Diploma in<br />");
    expect(source.landscapeHero).toContain(`The ${name} is`);
    expect(source.landscapeHero).toContain("Professional / Post Graduate Diploma Certificate Recognised by BSDT");
    expect(source.enquiry).not.toContain("PG.Diploma Landscape Design");
    expect(source.contact).not.toContain("PG.Diploma Landscape Design");
  });
});
