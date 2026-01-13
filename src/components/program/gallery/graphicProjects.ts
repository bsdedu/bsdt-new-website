import { ProjectCollection } from './types';

// Graphic Design projects
export const graphicProjects: ProjectCollection = {
  branding: [
    { 
      id: "1", 
      title: "Graphic Design & Communication Portfolio", 
      description: "A comprehensive portfolio showcasing ad campaigns, storyboards, and visual communication projects including Adidas advertisement concepts.",
      student: "Nidhi Pastey", 
      year: "2024", 
      semester: "4th Semester", 
      image: "/lovable-uploads/gd-portfolio-nidhi-1.jpg",
      images: [
        "/lovable-uploads/gd-portfolio-nidhi-1.jpg",
        "/lovable-uploads/gd-portfolio-nidhi-2.jpg",
        "/lovable-uploads/gd-portfolio-nidhi-3.jpg",
        "/lovable-uploads/gd-portfolio-nidhi-4.jpg",
        "/lovable-uploads/gd-portfolio-nidhi-5.jpg",
        "/lovable-uploads/gd-portfolio-nidhi-6.jpg"
      ]
    },
    { 
      id: "2",
      title: "A Kingdom Far Far Away", 
      description: "A storybook animation with an originally written story about King Shock and Jerome the Goblin, inspired by G-Shock watch features. Scenes designed on Illustrator and animated in After Effects.",
      student: "Diploma Student", 
      year: "2024", 
      semester: "2nd Semester", 
      image: "/lovable-uploads/gd-character-animation-1.jpg",
      images: [
        "/lovable-uploads/gd-character-animation-1.jpg",
        "/lovable-uploads/gd-character-animation-2.jpg",
        "/lovable-uploads/gd-character-animation-3.jpg",
        "/lovable-uploads/gd-character-animation-4.jpg",
        "/lovable-uploads/gd-character-animation-5.jpg",
        "/lovable-uploads/gd-character-animation-6.jpg"
      ]
    },
    { 
      id: "3", 
      title: "G-Shock Advertisement", 
      description: "A product advertisement for Casio G-Shock watches. Shoots cut, edited and composed on Premier Pro, with overlay effects added in After Effects.",
      student: "Diploma Student", 
      year: "2024", 
      semester: "2nd Semester", 
      image: "/lovable-uploads/gd-ad-commercial-1.jpg",
      images: [
        "/lovable-uploads/gd-ad-commercial-1.jpg",
        "/lovable-uploads/gd-ad-commercial-2.jpg",
        "/lovable-uploads/gd-ad-commercial-3.jpg",
        "/lovable-uploads/gd-ad-commercial-4.jpg",
        "/lovable-uploads/gd-ad-commercial-5.jpg",
        "/lovable-uploads/gd-ad-commercial-6.jpg"
      ]
    },
    { 
      id: "4",
      title: "MBTI Personality Magazine", 
      description: "A magazine based on Myers-Briggs 16 personality types with original illustrations and a digital quiz. Helps readers discover their personality type.",
      student: "Diploma Student", 
      year: "2024", 
      semester: "2nd Semester", 
      image: "/lovable-uploads/gd-magazine-1.jpg",
      images: [
        "/lovable-uploads/gd-magazine-1.jpg",
        "/lovable-uploads/gd-magazine-2.jpg",
        "/lovable-uploads/gd-magazine-3.jpg",
        "/lovable-uploads/gd-magazine-4.jpg",
        "/lovable-uploads/gd-magazine-5.jpg",
        "/lovable-uploads/gd-magazine-6.jpg",
        "/lovable-uploads/gd-magazine-7.jpg"
      ]
    },
  ],
  digital: [
    { id: "1", title: "Mobile App UI Design", student: "Kiran Kumar", year: "2023", image: "https://images.unsplash.com/photo-1616469829941-c7200edec809?w=800&auto=format&fit=crop" },
    { id: "2", title: "E-commerce Website Redesign", student: "Aisha Khan", year: "2023", image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=800&auto=format&fit=crop" },
    { id: "3", title: "Social Media Campaign", student: "Rahul Joshi", year: "2022", image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop" },
    { id: "4", title: "Interactive Infographics", student: "Divya Menon", year: "2022", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop" },
  ],
  print: [
    { id: "1", title: "Magazine Layout Design", student: "Sanjay Varma", year: "2023", image: "/lovable-uploads/e147a9c5-a509-4f9d-9992-3a51afe37d7a.png" },
    { id: "2", title: "Annual Report Design", student: "Ananya Desai", year: "2023", image: "/lovable-uploads/3c658cbb-3091-4a72-bdd8-a2d236cb1511.png" },
    { id: "3", title: "Book Cover Series", student: "Rohan Murthy", year: "2022", image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&auto=format&fit=crop" },
    { id: "4", title: "Packaging Design Collection", student: "Neha Gupta", year: "2022", image: "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=800&auto=format&fit=crop" },
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
  webapps: [],
  architectural: [],
  construction: [],
  sustainable: [],
  ux: [],
  ui: [],
  interactive: []
};
