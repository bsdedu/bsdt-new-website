
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
    { id: "arch-6", title: "Public Library and Learning Center", student: "Meera Krishnan", year: "2024", semester: "6th Semester", image: "/lovable-uploads/4869cbcd-2619-477f-b5c6-bfdeccf70093.png" },
  ],
  conceptual: [
    // Adaptive Reuse Project moved to architectural projects
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
