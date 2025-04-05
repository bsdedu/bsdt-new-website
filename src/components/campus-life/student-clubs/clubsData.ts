
export interface Club {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
}

export const clubsData: Club[] = [
  {
    id: 1,
    name: "Design Hub",
    category: "Creative",
    description: "A collaborative community of design enthusiasts who explore various design disciplines through workshops, competitions, and creative projects.",
    image: "/lovable-uploads/72b11af0-1a63-4937-a381-39778b981ae3.png",
    tags: ["UX/UI", "Graphic Design", "Product Design"]
  },
  {
    id: 2,
    name: "Shutterbugs Photography",
    category: "Arts",
    description: "For photography enthusiasts to learn, practice, and showcase their skills through photo walks, exhibitions, and competitions.",
    image: "/lovable-uploads/7e22def2-79bd-4950-95e1-18ada8d171ab.png",
    tags: ["Photography", "Visual Arts", "Exhibitions"]
  },
  {
    id: 3,
    name: "Tech Innovators",
    category: "Technology",
    description: "Focuses on technological innovations and developments in AI, machine learning, and other cutting-edge technologies through workshops and hackathons.",
    image: "/lovable-uploads/a3b0f02e-a441-4988-a7c8-d26d8f11150d.png",
    tags: ["Coding", "AI/ML", "Hackathons"]
  },
  {
    id: 4,
    name: "Drama Society",
    category: "Performing Arts",
    description: "A platform for students to express themselves through theater, street plays, and dramatic performances while learning acting skills.",
    image: "/lovable-uploads/5729785a-a4a4-4bd8-a51c-ac5f994e99d1.png",
    tags: ["Theater", "Acting", "Storytelling"]
  },
  {
    id: 5,
    name: "Eco Warriors",
    category: "Environmental",
    description: "Raises awareness about environmental issues and promotes sustainable practices through campaigns, plantation drives, and recycling initiatives.",
    image: "/lovable-uploads/c72be9c4-87fc-415a-a4fb-8e3db30e45cf.png",
    tags: ["Sustainability", "Conservation", "Awareness"]
  },
  {
    id: 6,
    name: "3D Modeling Club",
    category: "Technology",
    description: "Dedicated to 3D modeling, animation, and game development. Members collaborate on projects and learn advanced techniques in 3D design.",
    image: "/lovable-uploads/cf7871df-3c22-4504-ae9f-824fd6ec7804.png",
    tags: ["3D Design", "Animation", "Game Design"]
  },
  {
    id: 7,
    name: "Entrepreneurship Club",
    category: "Business",
    description: "Nurtures entrepreneurial mindset and skills through startup workshops, business plan competitions, and networking with industry professionals.",
    image: "/lovable-uploads/469b16b9-1a86-4abc-926f-fecba15128d3.png",
    tags: ["Startups", "Business", "Innovation"]
  },
  {
    id: 8,
    name: "Cultural Club",
    category: "Cultural",
    description: "Celebrates diversity and promotes cultural exchange through festivals, traditional performances, and cultural exhibitions.",
    image: "/lovable-uploads/07851c39-faf4-444d-9c08-69fefdccb59c.png",
    tags: ["Cultural Events", "Diversity", "Traditional Arts"]
  },
  {
    id: 9,
    name: "Literature & Debate",
    category: "Academic",
    description: "Fosters critical thinking and communication skills through book discussions, literary events, debates, and public speaking competitions.",
    image: "/lovable-uploads/bd51d218-84b7-4b37-a7e0-edb734785adc.png",
    tags: ["Debate", "Literature", "Public Speaking"]
  }
];
