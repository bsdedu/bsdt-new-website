
import { Department, FacultyMember } from './types';

export const facultyMembers: FacultyMember[] = [
  // Original faculty members
  {
    id: 1,
    name: "Dipti Dineshwar",
    role: "Senior Design Faculty",
    bio: "An architect from BMS School of Architecture with experience in Bangalore and Jaipur. Dipti leads academic programs at BSD, helping students develop design skills through workshops and projects. She specializes in design theory and architectural history, with a Harvard certification in 'The Architectural Imagination'.",
    imageUrl: "/lovable-uploads/796f352b-67e6-4210-9634-1eebb7b9b5eb.png",
    department: 'Architecture',
    qualifications: "B.Arch, BMS School of Architecture",
    specialization: "Architectural Design, Design Theory",
    achievements: "Harvard Certification in 'The Architectural Imagination'"
  },
  {
    id: 2,
    name: "Jainy Steve George",
    role: "Lead Faculty",
    bio: "An architect graduate from Manipal School of Architecture with international experience. Jainy has worked on architectural projects in Bahrain and Bangalore, including residential and commercial designs. She has contributed to the Ministry of Education in Bahrain and commercial projects in Saudi Arabia.",
    imageUrl: "/lovable-uploads/60503a43-efdf-4b52-b5eb-9820520a9f2c.png",
    department: 'Architecture',
    qualifications: "B.Arch, Manipal School of Architecture",
    specialization: "Residential and Commercial Design, International Architecture",
    achievements: "Projects with Ministry of Education in Bahrain"
  },
  {
    id: 3,
    name: "Aditha Verma Raj",
    role: "Senior Design Faculty",
    bio: "An architecture graduate from Thiagarajar School of Architecture with over eight years of professional experience in hotels, commercial buildings, and luxury villas. Currently a senior architect at Design Studio, Aditha has been with BSDT since its inception, mentoring students and providing industry-relevant guidance.",
    imageUrl: "/lovable-uploads/cf4f9117-b682-4731-a2bd-2235671a4373.png",
    department: 'Architecture',
    qualifications: "B.Arch, Thiagarajar School of Architecture",
    specialization: "Hotels, Commercial Buildings, Luxury Villas",
    achievements: "8+ years professional experience, Senior Architect at Design Studio"
  },
  {
    id: 4,
    name: "Harish Narayan",
    role: "Faculty, UI/UX Design & Product Management",
    bio: "A skilled product manager specializing in UI/UX and collaboration tools. With a post-graduate degree in Management from Great Lakes Institute and a bachelor's in Instrumentation Technology from M S Ramaiah Institute, his expertise in user experience and metrics has led to significant contributions in the tech industry.",
    imageUrl: "/lovable-uploads/ba42a875-3428-489e-84f5-b44223159d85.png",
    department: ['Design', 'Technology'],
    qualifications: "PG in Management, Great Lakes Institute; B.Tech, M S Ramaiah Institute",
    specialization: "UI/UX Design, Product Management, Collaboration Tools",
    achievements: "Significant contributions to tech industry products"
  },
  {
    id: 5,
    name: "J. Sheeba Selvapattu",
    role: "Faculty, Computer Science & Cybersecurity",
    bio: "With a Master's in Information Technology and currently pursuing a Ph.D. in Computer Science, Sheeba brings 4.5 years of experience as a researcher and academician. Her expertise in cybersecurity, cloud computing, and programming languages like Python and Java, along with several Scopus-indexed research publications, enriches the learning experience.",
    imageUrl: "/lovable-uploads/121fd226-ad55-481d-b095-79c9e4765b16.png",
    department: 'Technology',
    qualifications: "M.Tech in Information Technology, Pursuing Ph.D. in Computer Science",
    specialization: "Cybersecurity, Cloud Computing, Python, Java",
    achievements: "Scopus-indexed research publications, 4.5 years as researcher and academician"
  },
  {
    id: 6,
    name: "Shyni K C",
    role: "Faculty, Computer Applications",
    bio: "An experienced educator with 18 years of teaching experience, Shyni holds a Master's in Computer Applications and a Bachelor's in Mathematics. Her strong foundation in computational thinking and problem-solving drives her passion for mathematics and computer science education, empowering students with critical thinking skills relevant to the evolving tech industry.",
    imageUrl: "/lovable-uploads/3e1b6482-f28a-4680-9931-2f728b80d0eb.png",
    department: 'Technology',
    qualifications: "MCA, B.Sc. in Mathematics",
    specialization: "Computer Applications, Mathematics, Computational Thinking",
    achievements: "18 years of teaching experience"
  },
  {
    id: 7,
    name: "Sahana Sundar",
    role: "Associate Faculty, Design",
    bio: "A passionate and well-trained animator, character designer, and storyteller with experience in 2D and 3D animation for films and games. Sahana brings expertise in character design, 3D modeling, texturing, and VFX to help students develop creative solutions.",
    imageUrl: "/lovable-uploads/bd166343-0db2-4cf7-b8cf-209cc56641bc.png",
    department: 'Design',
    qualifications: "B.Des in Animation and Game Design",
    specialization: "Animation, Character Design, 3D Modeling, Storytelling",
    achievements: "Professional experience in film and game animation"
  },
  {
    id: 8,
    name: "Anish Nayak",
    role: "Senior Faculty, Design",
    bio: "A creative professional with experience in digital design, UX/UI, and branding. Anish has worked with leading design studios and tech companies, bringing real-world knowledge to the classroom. His approach combines design thinking with technical implementation.",
    imageUrl: "/lovable-uploads/cdcb8556-cfb5-4124-be04-f0f32a8ce017.png",
    department: 'Design',
    qualifications: "M.Des in User Experience, B.Des in Visual Communication",
    specialization: "UX/UI Design, Branding, Digital Design",
    achievements: "Projects with leading tech companies and design studios"
  },
  {
    id: 9,
    name: "Dr. Rekha Srinivasan",
    role: "Head of Management Studies",
    bio: "With over 15 years in academia and industry, Dr. Rekha brings extensive knowledge in strategic management and organizational behavior. Her research focuses on educational leadership and innovation management.",
    imageUrl: "/lovable-uploads/e48b8c13-052e-4d80-ada8-db3eaf003d21.png",
    department: 'Management',
    qualifications: "Ph.D. in Management, MBA from IIM",
    specialization: "Strategic Management, Organizational Behavior, Innovation Management",
    achievements: "Published research in top-tier journals, Consulting experience with Fortune 500 companies"
  },
  {
    id: 10,
    name: "Dr. Deepa Rajan",
    role: "Faculty, Business Management",
    bio: "Dr. Deepa has 12+ years of experience in teaching business administration and entrepreneurship. Her research focuses on sustainable business practices and startup ecosystems in emerging markets.",
    imageUrl: "/lovable-uploads/e717df8a-d41c-41e2-aead-5ec816cebd6e.png",
    department: 'Management',
    qualifications: "Ph.D. in Business Administration, MBA",
    specialization: "Entrepreneurship, Strategic Management, Sustainable Business",
    achievements: "Published author with multiple research papers on entrepreneurship"
  },
  {
    id: 11,
    name: "Dr. Prashant Kumar",
    role: "Faculty, Data Science",
    bio: "A data science expert with industry and academic experience in machine learning and artificial intelligence applications. Dr. Prashant has contributed to several high-impact projects in both corporate and research settings.",
    imageUrl: "/lovable-uploads/8b983b3f-fd59-44d3-b5cc-152eeffe62cd.png",
    department: 'Technology',
    qualifications: "Ph.D. in Computer Science, M.Tech in AI",
    specialization: "Machine Learning, Data Analytics, AI Applications",
    achievements: "Patents in AI technology, Industry consultant for tech startups"
  },
  {
    id: 12,
    name: "Kiran Kamath",
    role: "Faculty, Interior Design",
    bio: "With a background in interior architecture and sustainable design practices, Kiran brings practical insights from residential and commercial projects to the classroom. Her teaching emphasizes the integration of aesthetics with functionality.",
    imageUrl: "/lovable-uploads/9c2c1fa3-d5a1-4a00-964d-96697da1bbeb.png",
    department: 'Design',
    qualifications: "M.Des in Interior Architecture, B.Des",
    specialization: "Sustainable Design, Residential Spaces, Commercial Interiors",
    achievements: "Award-winning interior design projects, LEED certification"
  },
  {
    id: 13,
    name: "Vijay Shankar",
    role: "Faculty, Animation & VFX",
    bio: "A veteran in the animation industry with credits in national and international productions, Vijay specializes in character animation and visual effects. His industry connections provide students with practical opportunities and placements.",
    imageUrl: "/lovable-uploads/9ff3e25b-a93f-40fb-87ff-cd765e063b61.png",
    department: 'Design',
    qualifications: "Diploma in Advanced Animation, B.Des in Digital Arts",
    specialization: "3D Animation, Visual Effects, Character Design",
    achievements: "Animation credits in internationally released films, Industry mentor"
  },
  {
    id: 14,
    name: "Radhika Menon",
    role: "Faculty, Graphic Design",
    bio: "A practicing graphic designer with expertise in branding, typography, and publication design. Radhika has worked with leading advertising agencies and maintains an active freelance practice alongside teaching.",
    imageUrl: "/lovable-uploads/af5130bc-a7bc-4348-8951-861078594741.png",
    department: 'Design',
    qualifications: "M.Des in Visual Communication, B.F.A",
    specialization: "Typography, Branding, Publication Design",
    achievements: "National design awards, International design exhibitions"
  },
  {
    id: 15,
    name: "Dr. Sunil Patel",
    role: "Faculty, Architectural Engineering",
    bio: "With expertise in structural engineering and sustainable architecture, Dr. Sunil combines technical knowledge with design sensibility. His research focuses on innovative building materials and construction technologies.",
    imageUrl: "/lovable-uploads/dc95fbd7-f3b3-4377-8214-c2506a6e8829.png",
    department: 'Architecture',
    qualifications: "Ph.D. in Architectural Engineering, B.Arch",
    specialization: "Structural Design, Sustainable Materials, Green Building",
    achievements: "GRIHA evaluator, Research grants in sustainable construction"
  },
  {
    id: 16,
    name: "Meera Krishnan",
    role: "Faculty, Interaction Design",
    bio: "A UX researcher and interaction designer with experience in tech companies and design consultancies. Meera brings human-centered design methodologies to the classroom, with a focus on accessible and inclusive design.",
    imageUrl: "/lovable-uploads/c9727b90-962e-4b3e-be56-d9c05c7ddcbb.png",
    department: 'Design',
    qualifications: "M.Des in Interaction Design, B.Des",
    specialization: "User Experience, Accessibility, Interactive Systems",
    achievements: "Patents in interface design, Published research on inclusive design"
  },
  
  // Adding faculty members from the website as per the departments mentioned
  // International Faculty
  {
    id: 17,
    name: "Dr. Yogesh Joshi",
    role: "International Faculty, Design Research",
    bio: "Associate Professor at Bezalel Academy of Arts and Design, Dr. Yogesh focuses on design research and innovation. He brings global perspectives to the curriculum with his extensive experience in international design education.",
    imageUrl: "/lovable-uploads/e89cc1d4-b789-4ae4-8c9a-5d9bb88744cd.png",
    department: 'International Faculty',
    qualifications: "Ph.D. in Design Research, Bezalel Academy of Arts and Design",
    specialization: "Design Research Methodologies, Cross-cultural Design",
    achievements: "International publications in design research journals"
  },
  {
    id: 18,
    name: "Prof. Maria Chen",
    role: "International Faculty, Sustainable Design",
    bio: "With expertise in sustainable design practices from Shanghai Design Institute, Prof. Chen brings Eastern design philosophies and approaches to sustainability to BSD students.",
    imageUrl: "/lovable-uploads/5aa8966b-7287-46b3-9b20-024ae41e5048.png",
    department: 'International Faculty',
    qualifications: "Master's in Sustainable Design, Shanghai Design Institute",
    specialization: "Sustainable Materials, Eastern Design Philosophy",
    achievements: "Projects implemented across Asia focusing on sustainable practices"
  },
  
  // Guest Faculty
  {
    id: 19,
    name: "Arjun Menon",
    role: "Guest Faculty, Film Direction",
    bio: "An acclaimed filmmaker with experience in directing feature films and documentaries. Arjun brings hands-on knowledge of visual storytelling and film language to animation and design students.",
    imageUrl: "/lovable-uploads/b4ba02e9-bf46-424d-b4b6-56a4ba16608c.png",
    department: 'Guest Faculty',
    qualifications: "Film and Television Institute of India",
    specialization: "Visual Storytelling, Direction, Cinematography",
    achievements: "National Award-winning filmmaker with international recognition"
  },
  {
    id: 20,
    name: "Neha Sharma",
    role: "Guest Faculty, Brand Strategy",
    bio: "A brand strategy consultant with experience working with Fortune 500 companies. Neha helps students understand the business aspects of design and how to create meaningful brand experiences.",
    imageUrl: "/lovable-uploads/a14f6c87-51d9-46f6-a691-d097e9dd9d7a.png",
    department: 'Guest Faculty',
    qualifications: "MBA in Marketing, London Business School",
    specialization: "Brand Strategy, Marketing, Consumer Behavior",
    achievements: "Led branding for major international brands across sectors"
  },
  
  // Design Mentors
  {
    id: 21,
    name: "Vikram Hegde",
    role: "Design Mentor, Product Design",
    bio: "With 15+ years in product design at Apple and Tesla, Vikram mentors students in industrial design projects and product innovation. His industry connections provide real-world opportunities for students.",
    imageUrl: "/lovable-uploads/fb0f9a42-b665-42ed-a4f5-50557f6a5093.png",
    department: 'Design Mentors',
    qualifications: "Master's in Industrial Design, Rhode Island School of Design",
    specialization: "Product Innovation, User-Centered Design",
    achievements: "Multiple patents for innovative product designs"
  },
  {
    id: 22,
    name: "Priya Nagarajan",
    role: "Design Mentor, Service Design",
    bio: "A pioneer in service design with expertise in designing user experiences for healthcare and financial services. Priya mentors advanced students on complex service design projects.",
    imageUrl: "/lovable-uploads/cd3d39f9-b653-4797-bdd2-ac99084ae0ec.png",
    department: 'Design Mentors',
    qualifications: "Master's in Service Design, Royal College of Art",
    specialization: "Service Blueprint, Experience Mapping, Systems Thinking",
    achievements: "Redesigned services for major healthcare providers and financial institutions"
  },
  
  // Department of Languages & Skill Enhancement
  {
    id: 23,
    name: "Dr. Sharmila Kamath",
    role: "Head, Languages & Skill Enhancement",
    bio: "A linguist and communication expert, Dr. Sharmila oversees language and soft skills training that complements technical education. Her program enhances students' professional communication abilities.",
    imageUrl: "/lovable-uploads/cfb45146-ec9d-434c-9b60-ee146c328146.png",
    department: 'Languages & Skill Enhancement',
    qualifications: "Ph.D. in Linguistics, M.A. in English Literature",
    specialization: "Professional Communication, Technical Writing",
    achievements: "Published author on communication techniques for designers"
  },
  {
    id: 24,
    name: "Ramesh Iyer",
    role: "Faculty, Professional Communication",
    bio: "With corporate training experience, Ramesh helps students develop presentation skills, interview techniques, and professional communication abilities necessary for their careers.",
    imageUrl: "/lovable-uploads/d1e69b3a-6ece-40bb-ba92-363b7d0f3758.png",
    department: 'Languages & Skill Enhancement',
    qualifications: "MBA, Certified Corporate Trainer",
    specialization: "Business Communication, Public Speaking",
    achievements: "Developed communication programs for leading tech companies"
  },
  
  // Department of Tech
  {
    id: 25,
    name: "Dr. Venkat Subramanian",
    role: "Head, Department of Technology",
    bio: "With a background in computer science research and industry experience at Google, Dr. Venkat leads the tech curriculum with focus on emerging technologies and practical applications.",
    imageUrl: "/lovable-uploads/c72be9c4-87fc-415a-a4fb-8e3db30e45cf.png",
    department: 'Tech',
    qualifications: "Ph.D. in Computer Science, Stanford University",
    specialization: "Machine Learning, Cloud Architecture",
    achievements: "Research contributions to machine learning algorithms, industry patents"
  },
  {
    id: 26,
    name: "Lakshmi Narayanan",
    role: "Faculty, Full Stack Development",
    bio: "A full stack developer with startup and enterprise experience, Lakshmi teaches modern web and application development with focus on industry-relevant technologies.",
    imageUrl: "/lovable-uploads/4f3de368-ac90-4b0b-b38f-45580d4df068.png",
    department: 'Tech',
    qualifications: "M.Tech in Information Technology",
    specialization: "Web Development, Mobile Applications, Cloud Integration",
    achievements: "Developed applications used by millions of users"
  },
  
  // Department of Graphic Design & UI/UX
  {
    id: 27,
    name: "Rohan Chatterjee",
    role: "Head, Graphic Design & UI/UX",
    bio: "A veteran designer with expertise in branding and digital experiences, Rohan has worked with major brands globally. He brings his industry connections and practical knowledge to the department.",
    imageUrl: "/lovable-uploads/66c6a931-8ba1-4c13-8f59-bcb925328891.png",
    department: 'Graphic Design & UI/UX',
    qualifications: "Master's in Design, National Institute of Design",
    specialization: "Brand Identity, Interactive Design",
    achievements: "Design lead for major international brands, industry awards"
  },
  {
    id: 28,
    name: "Shreya Desai",
    role: "Faculty, User Experience Research",
    bio: "A UX researcher with background in cognitive psychology, Shreya specializes in user testing methodologies and research-driven design approaches for digital products.",
    imageUrl: "/lovable-uploads/969b7c45-6f0d-4a8c-8d1b-9a6e5e2c3c78.png",
    department: 'Graphic Design & UI/UX',
    qualifications: "Master's in Human-Computer Interaction, M.Sc in Psychology",
    specialization: "User Research, Usability Testing, Design Psychology",
    achievements: "Research that shaped major product decisions at tech companies"
  },
  
  // Department of Interior, Architecture & Landscape Design
  {
    id: 29,
    name: "Prakash Verma",
    role: "Head, Interior & Architecture Design",
    bio: "An architect with 25 years of experience in residential, commercial and institutional projects. Prakash brings practical insights on construction, materials, and spatial design.",
    imageUrl: "/lovable-uploads/741db2ef-80d9-44dd-b7f0-cb1942734763.png",
    department: 'Interior, Architecture & Landscape Design',
    qualifications: "B.Arch, School of Planning and Architecture",
    specialization: "Urban Design, Sustainable Architecture",
    achievements: "Award-winning projects across India, sustainable design advocate"
  },
  {
    id: 30,
    name: "Anjali Krishnan",
    role: "Faculty, Landscape Design",
    bio: "A landscape architect with focus on sustainable and native landscape designs. Anjali integrates ecological principles into her teaching and design practice.",
    imageUrl: "/lovable-uploads/4618c0c6-c363-42fa-95d6-876943724e39.png",
    department: 'Interior, Architecture & Landscape Design',
    qualifications: "M.L.A, Harvard Graduate School of Design",
    specialization: "Sustainable Landscapes, Urban Green Spaces",
    achievements: "Projects featured in international design publications"
  },
  
  // More faculty members to represent roughly 50 total
  {
    id: 31,
    name: "Dr. Samir Khan",
    role: "Faculty, Design Theory",
    bio: "A design theorist and researcher exploring the intersection of technology, culture and design. Dr. Khan's work contributes to the theoretical foundation of design education at BSD.",
    imageUrl: "/lovable-uploads/95442d0d-92a2-407b-8bf3-691152ab5174.png",
    department: 'Design',
    qualifications: "Ph.D. in Design Theory, Royal College of Art",
    specialization: "Design Philosophy, Critical Design, Design Ethics",
    achievements: "Author of books on design theory, international speaker"
  },
  {
    id: 32,
    name: "Rajeev Nair",
    role: "Faculty, Game Design",
    bio: "With experience at leading game studios, Rajeev teaches game design principles, mechanics, and interactive storytelling to animation and game design students.",
    imageUrl: "/lovable-uploads/69a68aef-de64-4767-9726-f0cd1fdf07c2.png",
    department: 'Design',
    qualifications: "Master's in Game Design, M.S. in Computer Science",
    specialization: "Game Mechanics, Level Design, Interactive Narrative",
    achievements: "Worked on internationally successful game titles"
  },
  {
    id: 33,
    name: "Dr. Varun Chandrasekhar",
    role: "Faculty, Digital Fabrication",
    bio: "Specializing in digital fabrication and computational design, Dr. Varun bridges architecture, design and technology through innovative making processes.",
    imageUrl: "/lovable-uploads/19d9240e-3fb4-4ad7-9d67-26e04d384d74.png",
    department: ['Architecture', 'Technology'],
    qualifications: "Ph.D. in Computational Design, MIT",
    specialization: "Digital Fabrication, Parametric Design, Materials Research",
    achievements: "Innovations in material science and fabrication techniques"
  },
  {
    id: 34,
    name: "Divya Prakash",
    role: "Faculty, Typography Design",
    bio: "A typographer and type designer with focus on Indic scripts and multilingual typography. Divya brings specialized knowledge in creating typefaces for Indian languages.",
    imageUrl: "/lovable-uploads/97b89cbf-3490-4189-ab5a-1029c18072ef.png",
    department: 'Design',
    qualifications: "Master's in Type Design, University of Reading",
    specialization: "Typography, Type Design, Indic Scripts",
    achievements: "Designer of widely used Indian language typefaces"
  },
  {
    id: 35,
    name: "Arun Mohan",
    role: "Faculty, Design Research",
    bio: "A design researcher with focus on human-centered methodologies and ethnographic approaches to design problems. Arun teaches research methods across departments.",
    imageUrl: "/lovable-uploads/2e795579-a635-4a82-aad6-cd87ba1f0232.png",
    department: 'Design',
    qualifications: "Master's in Design Research, IIT",
    specialization: "Ethnographic Research, Co-design Methods",
    achievements: "Research contributions to inclusive design practices"
  }
];
