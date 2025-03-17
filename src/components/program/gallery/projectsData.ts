
import { ProjectCategory, ProjectCollection } from './types';

// Categories based on program type
export const getProjectCategories = (programPath: string): ProjectCategory[] => {
  const isInteriorDesignProgram = programPath.includes('interior-design');
  const isAnimationGameProgram = programPath.includes('animation-game-design');
  
  if (isInteriorDesignProgram) {
    return [
      { id: "residential", name: "Residential Spaces" },
      { id: "commercial", name: "Commercial Projects" },
      { id: "conceptual", name: "Conceptual Designs" },
    ];
  } else if (isAnimationGameProgram) {
    return [
      { id: "animation", name: "3D Animation" },
      { id: "game", name: "Game Design" },
      { id: "character", name: "Character Design" },
    ];
  } else {
    // Default to graphic design
    return [
      { id: "branding", name: "Branding Projects" },
      { id: "digital", name: "Digital Design" },
      { id: "print", name: "Print & Editorial" },
    ];
  }
};

// Interior Design projects
export const interiorProjects: ProjectCollection = {
  residential: [
    { id: 1, title: "Modern Apartment Redesign", student: "Anika Patel", year: "2023", image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&auto=format&fit=crop" },
    { id: 2, title: "Minimalist Villa Interior", student: "Raj Sharma", year: "2023", image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&auto=format&fit=crop" },
    { id: 3, title: "Urban Loft Conversion", student: "Priya Malhotra", year: "2022", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&auto=format&fit=crop" },
    { id: 4, title: "Contemporary Home Design", student: "Arjun Kapoor", year: "2022", image: "https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=800&auto=format&fit=crop" },
  ],
  commercial: [
    { id: 1, title: "Boutique Hotel Lobby", student: "Neha Reddy", year: "2023", image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=800&auto=format&fit=crop" },
    { id: 2, title: "Corporate Office Design", student: "Vikram Singh", year: "2023", image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&auto=format&fit=crop" },
    { id: 3, title: "Retail Store Design", student: "Maya Joshi", year: "2022", image: "/lovable-uploads/bd80ca6d-217b-4c7b-aa96-351c6bd06122.png" },
    { id: 4, title: "Restaurant Interior Design", student: "Karan Mehta", year: "2022", image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=800&auto=format&fit=crop" },
  ],
  conceptual: [
    { id: 1, title: "Sustainable Living Space", student: "Divya Sharma", year: "2023", image: "/lovable-uploads/a9c8ce1e-1529-470a-8999-acff7698cf4f.png" },
    { id: 2, title: "Future Home Concept", student: "Rohan Kumar", year: "2023", image: "/lovable-uploads/34b0c2a2-04a5-4ea4-a255-4c1741233792.png" },
    { id: 3, title: "Biophilic Design Home", student: "Ananya Desai", year: "2022", image: "/lovable-uploads/eae8547f-d58b-4033-9238-f06feb28240f.png" },
    { id: 4, title: "Adaptive Reuse Project", student: "Sanjay Varma", year: "2022", image: "https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=800&auto=format&fit=crop" },
  ],
  // Add empty arrays for other categories for type consistency
  branding: [],
  digital: [],
  print: [],
  animation: [],
  game: [],
  character: []
};

// Graphic Design projects
export const graphicProjects: ProjectCollection = {
  branding: [
    { id: 1, title: "Eco-friendly Brand Identity", student: "Priya Sharma", year: "2023", image: "/lovable-uploads/9e5f0918-e471-4105-8926-6e066cea868e.png" },
    { id: 2, title: "Tech Startup Branding", student: "Arjun Mehta", year: "2023", image: "/lovable-uploads/e50eadd7-d31e-4b3e-a69a-e005ba9bd014.png" },
    { id: 3, title: "Restaurant Chain Rebrand", student: "Meera Patel", year: "2022", image: "/lovable-uploads/12afaa33-a164-4018-8397-4f5e550f4203.png" },
    { id: 4, title: "Artisanal Coffee Branding", student: "Vikram Reddy", year: "2022", image: "https://images.unsplash.com/photo-1579438428425-67f2a4d83827?w=800&auto=format&fit=crop" },
  ],
  digital: [
    { id: 1, title: "Mobile App UI Design", student: "Kiran Kumar", year: "2023", image: "https://images.unsplash.com/photo-1616469829941-c7200edec809?w=800&auto=format&fit=crop" },
    { id: 2, title: "E-commerce Website Redesign", student: "Aisha Khan", year: "2023", image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=800&auto=format&fit=crop" },
    { id: 3, title: "Social Media Campaign", student: "Rahul Joshi", year: "2022", image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop" },
    { id: 4, title: "Interactive Infographics", student: "Divya Menon", year: "2022", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop" },
  ],
  print: [
    { id: 1, title: "Magazine Layout Design", student: "Sanjay Varma", year: "2023", image: "/lovable-uploads/e147a9c5-a509-4f9d-9992-3a51afe37d7a.png" },
    { id: 2, title: "Annual Report Design", student: "Ananya Desai", year: "2023", image: "/lovable-uploads/3c658cbb-3091-4a72-bdd8-a2d236cb1511.png" },
    { id: 3, title: "Book Cover Series", student: "Rohan Murthy", year: "2022", image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&auto=format&fit=crop" },
    { id: 4, title: "Packaging Design Collection", student: "Neha Gupta", year: "2022", image: "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=800&auto=format&fit=crop" },
  ],
  // Add empty arrays for other categories for type consistency
  residential: [],
  commercial: [],
  conceptual: [],
  animation: [],
  game: [],
  character: []
};

// Animation & Game Design projects
export const animationProjects: ProjectCollection = {
  animation: [
    { id: 1, title: "Fantasy World Animation", student: "Arjun Kumar", year: "2023", image: "/lovable-uploads/412105e5-1bdd-40a1-9059-91164700052e.png" },
    { id: 2, title: "Animated Short Film", student: "Priya Singh", year: "2023", image: "/lovable-uploads/7e4fdef1-7a95-4c6d-8fbd-c6e393f9b15a.png" },
    { id: 3, title: "3D Character Animation", student: "Rohit Sharma", year: "2022", image: "/lovable-uploads/aa851f87-c841-4f88-b250-cd459e9ef035.png" },
    { id: 4, title: "Motion Graphics Showreel", student: "Meera Joshi", year: "2022", image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&auto=format&fit=crop" },
  ],
  game: [
    { id: 1, title: "Adventure Game Prototype", student: "Vikram Reddy", year: "2023", image: "/lovable-uploads/bd166343-0db2-4cf7-b8cf-209cc56641bc.png" },
    { id: 2, title: "Mobile Game UI Design", student: "Ananya Gupta", year: "2023", image: "/lovable-uploads/96eb81ec-f2fb-4f5c-88d8-ec2a099f67e3.png" },
    { id: 3, title: "2D Platformer Game", student: "Karan Mehta", year: "2022", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop" },
    { id: 4, title: "VR Experience Design", student: "Tanya Kapoor", year: "2022", image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800&auto=format&fit=crop" },
  ],
  character: [
    { id: 1, title: "Fantasy Character Design", student: "Rahul Verma", year: "2023", image: "/lovable-uploads/a595961e-d33b-4b0c-b044-3587eb6bea13.png" },
    { id: 2, title: "Game Avatar Collection", student: "Sanjana Patel", year: "2023", image: "https://images.unsplash.com/photo-1634029466991-43a9d8635376?w=800&auto=format&fit=crop" },
    { id: 3, title: "Stylized Character Models", student: "Aditya Raj", year: "2022", image: "https://images.unsplash.com/photo-1601987177651-8edfe6c20009?w=800&auto=format&fit=crop" },
    { id: 4, title: "Concept Art Series", student: "Nisha Kamdar", year: "2022", image: "https://images.unsplash.com/photo-1518331647614-7a1f04cd34cf?w=800&auto=format&fit=crop" },
  ],
  // Add empty arrays for other categories for type consistency
  branding: [],
  digital: [],
  print: [],
  residential: [],
  commercial: [],
  conceptual: []
};

export const getProjectsForProgram = (programPath: string): ProjectCollection => {
  if (programPath.includes('interior-design')) {
    return interiorProjects;
  } else if (programPath.includes('animation-game-design')) {
    return animationProjects;
  } 
  // Default to graphic design projects
  return graphicProjects;
};

export const getDefaultTabValue = (programPath: string): string => {
  if (programPath.includes('interior-design')) {
    return "residential";
  } else if (programPath.includes('animation-game-design')) {
    return "animation";
  }
  // Default to graphic design
  return "branding";
};
