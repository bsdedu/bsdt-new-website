
import { ProjectCollection } from './types';

// Interior & Spatial Design projects
export const interiorProjects: ProjectCollection = {
  residential: [
    { id: "3", title: "Contemporary Villa Interior", student: "Ananya Singh", year: "2022", image: "/lovable-uploads/23609cd5-2cbf-4e98-8211-0b953a25a5c3.png" },
  ],
  commercial: [
    { id: "5", title: "Law Firm Interiors", student: "Vidhi Pareek", year: "2024", semester: "6th Semester", image: "/lovable-uploads/4e3d34c6-ceab-43ba-b10a-a0b70450e10f.png" },
    { id: "6", title: "Gallery Space", student: "Kebisha Chathuguthi", year: "2024", image: "/lovable-uploads/a9ff4288-2450-4d09-bcc1-ac5a47b797f6.png" },
    { id: "7", title: "Dormitory - Backpacker's Hostel", student: "Kebisha Chathuguthi", year: "2024", image: "/lovable-uploads/be598cdf-2aef-413c-b9f0-84e54035473b.png" },
  ],
  conceptual: [
    { id: "4", title: "Adaptive Reuse Project", student: "Ishita Jain", year: "2022", image: "/lovable-uploads/a14f6c87-51d9-46f6-a691-d097e9dd9d7a.png" },
  ],
  // Add empty arrays for other categories for type consistency
  branding: [],
  digital: [],
  print: [],
  animation: [],
  game: [],
  character: [],
  uiux: [],
  aiml: [],
  webapps: [],
  architectural: [],
  construction: [],
  sustainable: [],
  ux: [],
  ui: [],
  interactive: []
};
