
import { Department, FacultyMember } from './types';

export const facultyMembers: FacultyMember[] = [
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
  }
];
