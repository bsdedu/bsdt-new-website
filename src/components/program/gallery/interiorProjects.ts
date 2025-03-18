
import { ProjectCollection } from './types';

// Interior Design projects
export const interiorProjects: ProjectCollection = {
  residential: [
    { id: "1", title: "Modern Apartment Redesign", student: "Anika Patel", year: "2023", image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&auto=format&fit=crop" },
    { id: "2", title: "Minimalist Villa Interior", student: "Raj Sharma", year: "2023", image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&auto=format&fit=crop" },
    { id: "3", title: "Urban Loft Conversion", student: "Priya Malhotra", year: "2022", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop" },
    { id: "4", title: "Contemporary Home Design", student: "Arjun Kapoor", year: "2022", image: "https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=800&auto=format&fit=crop" },
  ],
  commercial: [
    { id: "1", title: "Boutique Hotel Lobby", student: "Neha Reddy", year: "2023", image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=800&auto=format&fit=crop" },
    { id: "2", title: "Corporate Office Design", student: "Vikram Singh", year: "2023", image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&auto=format&fit=crop" },
    { id: "3", title: "Retail Store Design", student: "Maya Joshi", year: "2022", image: "/lovable-uploads/bd80ca6d-217b-4c7b-aa96-351c6bd06122.png" },
    { id: "4", title: "Restaurant Interior Design", student: "Karan Mehta", year: "2022", image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=800&auto=format&fit=crop" },
  ],
  conceptual: [
    { id: "1", title: "Sustainable Living Space", student: "Divya Sharma", year: "2023", image: "/lovable-uploads/a9c8ce1e-1529-470a-8999-acff7698cf4f.png" },
    { id: "2", title: "Future Home Concept", student: "Rohan Kumar", year: "2023", image: "/lovable-uploads/34b0c2a2-04a5-4ea4-a255-4c1741233792.png" },
    { id: "3", title: "Biophilic Design Home", student: "Ananya Desai", year: "2022", image: "/lovable-uploads/eae8547f-d58b-4033-9238-f06feb28240f.png" },
    { id: "4", title: "Adaptive Reuse Project", student: "Sanjay Varma", year: "2022", image: "https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=800&auto=format&fit=crop" },
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
