import { ProjectCategory, ProjectCollection } from './types';

// Categories based on program type
export const getProjectCategories = (programPath: string): ProjectCategory[] => {
  const isInteriorDesignProgram = programPath.includes('interior-design');
  const isAnimationGameProgram = programPath.includes('animation-game-design');
  const isBcaProgram = programPath.includes('bca-uiux-aiml');
  const isInteractionDesignProgram = programPath.includes('bdes-interaction-experience');
  const isArchitecturalDesignProgram = programPath.includes('bdes-architectural');
  
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
  } else if (isBcaProgram) {
    return [
      { id: "uiux", name: "UI/UX Design" },
      { id: "aiml", name: "AI & ML Projects" },
      { id: "webapps", name: "Web & Mobile Apps" },
    ];
  } else if (isInteractionDesignProgram) {
    return [
      { id: "ux", name: "UX Case Studies" },
      { id: "ui", name: "UI Design" },
      { id: "interactive", name: "Interactive Media" },
    ];
  } else if (isArchitecturalDesignProgram) {
    return [
      { id: "architectural", name: "Architectural Design" },
      { id: "construction", name: "Construction Models" },
      { id: "sustainable", name: "Sustainable Design" },
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
  character: [],
  uiux: [],
  aiml: [],
  webapps: []
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
  character: [],
  uiux: [],
  aiml: [],
  webapps: []
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
    { id: 2, title: "Game Avatar Collection", student: "Sanjana Patel", year: "2023", image: "/lovable-uploads/4c8b3b7b-db32-48d5-af5a-b34c4f832998.png" },
    { id: 3, title: "Stylized Character Models", student: "Aditya Raj", year: "2022", image: "/lovable-uploads/95bc9670-3561-40b6-94a6-f9ae10b7769a.png" },
    { id: 4, title: "Concept Art Series", student: "Nisha Kamdar", year: "2022", image: "https://images.unsplash.com/photo-1518331647614-7a1f04cd34cf?w=800&auto=format&fit=crop" },
  ],
  // Add empty arrays for other categories for type consistency
  branding: [],
  digital: [],
  print: [],
  residential: [],
  commercial: [],
  conceptual: [],
  uiux: [],
  aiml: [],
  webapps: []
};

// BCA projects
export const bcaProjects: ProjectCollection = {
  uiux: [
    { id: 1, title: "Banking App Redesign", student: "Nisha Kapoor", year: "2023", image: "/lovable-uploads/31995f41-69f4-448b-a48c-ac1cbf3d59ea.png" },
    { id: 2, title: "Travel Booking Platform", student: "Rohan Verma", year: "2023", image: "/lovable-uploads/22d341bf-212e-47be-b781-4ffdee0d9881.png" },
    { id: 3, title: "Health Monitoring Dashboard", student: "Priya Gupta", year: "2022", image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&auto=format&fit=crop" },
    { id: 4, title: "E-learning Interface System", student: "Aryan Singh", year: "2022", image: "/lovable-uploads/b4ba02e9-bf46-424d-b4b6-56a4ba16608c.png" },
  ],
  aiml: [
    { id: 1, title: "Crop Disease Detection Model", student: "Anjali Sharma", year: "2023", image: "/lovable-uploads/dc95fbd7-f3b3-4377-8214-c2506a6e8829.png" },
    { id: 2, title: "Sentiment Analysis Tool", student: "Kunal Joshi", year: "2023", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop" },
    { id: 3, title: "Traffic Prediction System", student: "Varun Kumar", year: "2022", image: "/lovable-uploads/99873356-7514-41ed-a11f-1a752dc9ab4b.png" },
    { id: 4, title: "Healthcare Data Analysis", student: "Meera Reddy", year: "2022", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop" },
  ],
  webapps: [
    { id: 1, title: "Fitness Tracking App", student: "Vivek Nair", year: "2023", image: "/lovable-uploads/4d6b6f53-ef13-4f6a-82f1-34bc6295f8f6.png" },
    { id: 2, title: "Recipe Sharing Platform", student: "Maya Desai", year: "2023", image: "/lovable-uploads/5919811e-235d-43d1-8543-1b04dfd3112a.png" },
    { id: 3, title: "Student Collaboration Tool", student: "Rohit Malhotra", year: "2022", image: "/lovable-uploads/a15cb70f-8a11-4aa4-9394-23024a73f408.png" },
    { id: 4, title: "Inventory Management System", student: "Ankit Shah", year: "2022", image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&auto=format&fit=crop" },
  ],
  // Add empty arrays for other categories for type consistency
  branding: [],
  digital: [],
  print: [],
  residential: [],
  commercial: [],
  conceptual: [],
  animation: [],
  game: [],
  character: []
};

// Interaction & Experience Design projects
export const interactionProjects: ProjectCollection = {
  ux: [
    { id: 1, title: "Mental Health App UX Case Study", student: "Sneha Patel", year: "2023", image: "/lovable-uploads/31995f41-69f4-448b-a48c-ac1cbf3d59ea.png" },
    { id: 2, title: "E-commerce Checkout Redesign", student: "Rahul Joshi", year: "2023", image: "/lovable-uploads/22d341bf-212e-47be-b781-4ffdee0d9881.png" },
    { id: 3, title: "Finance Dashboard User Research", student: "Tanvi Sharma", year: "2022", image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&auto=format&fit=crop" },
    { id: 4, title: "Travel Planning Service Blueprint", student: "Vikram Desai", year: "2022", image: "/lovable-uploads/b4ba02e9-bf46-424d-b4b6-56a4ba16608c.png" },
  ],
  ui: [
    { id: 1, title: "Smart Home App UI Design", student: "Priya Verma", year: "2023", image: "https://images.unsplash.com/photo-1616469829941-c7200edec809?w=800&auto=format&fit=crop" },
    { id: 2, title: "Banking App UI Kit", student: "Aryan Kumar", year: "2023", image: "/lovable-uploads/4d6b6f53-ef13-4f6a-82f1-34bc6295f8f6.png" },
    { id: 3, title: "Educational Platform Interface", student: "Maya Nair", year: "2022", image: "/lovable-uploads/5919811e-235d-43d1-8543-1b04dfd3112a.png" },
    { id: 4, title: "Health Monitoring Dashboard", student: "Akash Reddy", year: "2022", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop" },
  ],
  interactive: [
    { id: 1, title: "Augmented Reality Museum Guide", student: "Neha Kapoor", year: "2023", image: "/lovable-uploads/a15cb70f-8a11-4aa4-9394-23024a73f408.png" },
    { id: 2, title: "Interactive Product Visualization", student: "Karan Singh", year: "2023", image: "/lovable-uploads/dc95fbd7-f3b3-4377-8214-c2506a6e8829.png" },
    { id: 3, title: "Voice-Controlled Smart Assistant", student: "Rohan Malhotra", year: "2022", image: "/lovable-uploads/99873356-7514-41ed-a11f-1a752dc9ab4b.png" },
    { id: 4, title: "Gesture-Based Interaction System", student: "Divya Menon", year: "2022", image: "https://images.unsplash.com/photo-1581092335203-5aac1f3e1d2d?w=800&auto=format&fit=crop" },
  ],
  // Add empty arrays for other categories for type consistency
  branding: [],
  digital: [],
  print: [],
  residential: [],
  commercial: [],
  conceptual: [],
  animation: [],
  game: [],
  character: [],
  uiux: [],
  aiml: [],
  webapps: []
};

// Architectural Construction Design projects
export const architecturalProjects: ProjectCollection = {
  architectural: [
    { id: 1, title: "Modern Urban Housing Complex", student: "Rohan Mehta", year: "2023", image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&auto=format&fit=crop" },
    { id: 2, title: "Sustainable Office Building", student: "Priya Sharma", year: "2023", image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=800&auto=format&fit=crop" },
    { id: 3, title: "Cultural Center Design", student: "Arjun Kapoor", year: "2022", image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&auto=format&fit=crop" },
    { id: 4, title: "Contemporary Museum Facade", student: "Neha Reddy", year: "2022", image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=800&auto=format&fit=crop" },
  ],
  construction: [
    { id: 1, title: "Modular Construction System", student: "Vikram Singh", year: "2023", image: "https://images.unsplash.com/photo-1541992880216-9d42a13782df?w=800&auto=format&fit=crop" },
    { id: 2, title: "Steel Structure Design", student: "Aisha Khan", year: "2023", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&auto=format&fit=crop" },
    { id: 3, title: "Prefabricated Housing Solution", student: "Rahul Joshi", year: "2022", image: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=800&auto=format&fit=crop" },
    { id: 4, title: "Timber Frame Construction", student: "Maya Desai", year: "2022", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop" },
  ],
  sustainable: [
    { id: 1, title: "Net-Zero Energy Building", student: "Sanjay Varma", year: "2023", image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800&auto=format&fit=crop" },
    { id: 2, title: "Passive House Design", student: "Ananya Desai", year: "2023", image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=800&auto=format&fit=crop" },
    { id: 3, title: "Green Roof Integration", student: "Rohan Murthy", year: "2022", image: "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?w=800&auto=format&fit=crop" },
    { id: 4, title: "Solar Responsive Facade", student: "Divya Menon", year: "2022", image: "https://images.unsplash.com/photo-1433832597046-4f10e10ac764?w=800&auto=format&fit=crop" },
  ],
  // Add empty arrays for other categories for type consistency
  branding: [],
  digital: [],
  print: [],
  residential: [],
  commercial: [],
  conceptual: [],
  animation: [],
  game: [],
  character: [],
  uiux: [],
  aiml: [],
  webapps: [],
  ux: [],
  ui: [],
  interactive: []
};

export const getProjectsForProgram = (programPath: string): ProjectCollection => {
  if (programPath.includes('interior-design')) {
    return interiorProjects;
  } else if (programPath.includes('animation-game-design')) {
    return animationProjects;
  } else if (programPath.includes('bca-uiux-aiml')) {
    return bcaProjects;
  } else if (programPath.includes('bdes-interaction-experience')) {
    return interactionProjects;
  } else if (programPath.includes('bdes-architectural')) {
    return architecturalProjects;
  }
  // Default to graphic design projects
  return graphicProjects;
};

export const getDefaultTabValue = (programPath: string): string => {
  if (programPath.includes('interior-design')) {
    return "residential";
  } else if (programPath.includes('animation-game-design')) {
    return "animation";
  } else if (programPath.includes('bca-uiux-aiml')) {
    return "uiux";
  } else if (programPath.includes('bdes-interaction-experience')) {
    return "ux";
  } else if (programPath.includes('bdes-architectural')) {
    return "architectural";
  }
  // Default to graphic design
  return "branding";
};
