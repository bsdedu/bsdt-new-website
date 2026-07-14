Plan: Move the hero carousel into a compact homepage banner

Goal
- Remove the current full-height HeroSection (Student Spotlight, Design IQ, Electives, Hybrid Diploma slides) from the top hero position.
- Keep the PGD Residential Architecture & Design video hero at the top of the homepage as the only full-height hero.
- Reintroduce the same carousel slides as a new compact banner section immediately after ProgramsSection and before WhyChooseSection.
- Set the banner height to a medium ~380–420 px strip, not full viewport.

Implementation steps
1. Audit existing code
   - Read src/components/home/HeroSection.tsx to extract the slide data, navigation controls, and overlay styling.
   - Read src/pages/Index.tsx to confirm the current section order and how PGDResidentialHero and HeroSection are placed.
   - Read src/components/home/ProgramsSection.tsx and src/components/home/WhyChooseSection.tsx to match the section spacing and background classes.

2. Create a compact banner carousel component
   - Add src/components/home/HomeBannerCarousel.tsx (or equivalent name).
   - Reuse the exact slide data, titles, subtitles, descriptions, and CTA behavior from HeroSection so the functionality does not change.
   - Replace the full-screen height and absolute positioning with a relative container of fixed medium height (~380–420 px) and rounded corners, similar to the existing HeroImageCarousel pattern.
   - Keep the same content overlay, slide transitions, dot indicators, and navigation arrows.
   - Preserve the same CTA routing (Apply Now, Explore Programs, View Student Works, Explore Electives, Take the Quiz).

3. Update the homepage layout
   - In src/pages/Index.tsx, remove the <HeroSection /> call from the top of <main>.
   - Insert the new compact banner carousel immediately after <ProgramsSection /> and before <WhyChooseSection />.
   - Ensure the PGDResidentialHero remains as the first section after <Navbar />.

4. Clean up and verify
   - Remove any unused imports if HeroSection is no longer used elsewhere.
   - Check that the new component uses browser-compatible timer types (ReturnType<typeof setInterval> per project memory).
   - Run a build to confirm no TypeScript errors.
   - Optionally preview desktop and mobile to confirm the banner height, text readability, and carousel controls work.

Files expected to change
- src/pages/Index.tsx — reorder homepage sections.
- src/components/home/HeroSection.tsx — may be replaced or retained as the source of truth; if no longer used, consider deprecation or keep it if used on other pages.
- src/components/home/HomeBannerCarousel.tsx — new compact banner component.

Out of scope
- No changes to the PGD Residential hero styling, video behavior, or CTA.
- No changes to ProgramsSection, WhyChooseSection, or any other homepage section content.
- No changes to navigation, footer, enquiry form, or other pages.