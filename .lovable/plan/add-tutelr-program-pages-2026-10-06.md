# Add @Tutelr program pages

## Goal
Turn “@Tutelr” into a subheading within the Cybersecurity / AI / Embedded Robotics menu group, then add the five program titles shown in the uploaded image as links to dedicated pages.

## Implementation
1. Extend the Programs menu structure to support the @Tutelr subheading on desktop and mobile.
2. Add these linked programs beneath it:
   - Ethical Hacking and Red Teaming
   - Cloud Security and DevSecOps
   - Digital Forensics and Incident Response
   - SOC and Blue Teaming
   - GRC and Controls
3. Create a consistent BSDT/Tutelr page for each program with focused introductory content and a link to Tutelr for further details.
4. Register direct URLs for all five pages and add page-specific search and social metadata.
5. Verify the menu hierarchy, all five links, mobile navigation, and page rendering.

## Technical details
- Reuse one shared page layout with program-specific content to keep the five pages visually consistent and lightweight.
- Keep each standalone page in `src/pages` and register every URL in the central router.
- Use the existing site navigation, footer, semantic colors, and Tutelr banner image.
