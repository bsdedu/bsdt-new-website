export interface ElectiveData {
  id: string;
  number: number;
  semester: string;
  title: string;
  shortTitle: string;
  applicablePrograms: string;
  overview: string;
  courseOutcomes: string[];
  weeklyStructure: {
    week: number;
    title: string;
    duration: string;
    topics: string[];
    softwareLearning?: string[];
    assignments: string[];
  }[];
  finalProject: {
    title: string;
    brief: string;
    requirements: string[];
    deliverables?: string[];
  };
  assessmentMethods: string[];
}

export const electivesData: ElectiveData[] = [
  {
    id: "elective-1",
    number: 1,
    semester: "Semester 4",
    title: "Digital Presentation, Visual Communication & Interaction using Figma and its applications",
    shortTitle: "Digital Presentation & Figma",
    applicablePrograms: "All UG Design Programs",
    overview: "This skill enhancement elective is designed for students across Interior Design, Graphic Design, Computer Science, Animation, and allied disciplines to develop strong visual presentation, digital communication, and storytelling skills. The course emphasizes translating ideas into clear, engaging, and professional digital presentations using Figma—an industry-standard collaborative design tool.",
    courseOutcomes: [
      "Explain principles of visual communication, layout, and hierarchy applicable across disciplines.",
      "Create structured digital presentations using grids, typography, color, and visual systems.",
      "Develop interactive and narrative-driven presentations using Figma prototypes.",
      "Translate technical, spatial, or conceptual ideas into clear visual stories for diverse audiences.",
      "Present, justify, and defend ideas confidently using professional digital presentation workflows."
    ],
    weeklyStructure: [
      {
        week: 1,
        title: "Visual Thinking, Layout & Presentation Fundamentals",
        duration: "15 Hours",
        topics: [
          "Importance of presentation and communication skills across disciplines",
          "Visual thinking and idea structuring",
          "Principles of layout: grids, alignment, spacing, hierarchy",
          "Typography and color systems for clarity and impact",
          "Translating concepts into visual slides and boards",
          "Introduction to Figma interface and workflows"
        ],
        softwareLearning: [
          "Figma workspace and tools",
          "Frames, grids, styles, and components",
          "Organizing content for presentations",
          "Exporting and presentation modes"
        ],
        assignments: [
          "Visual presentation of a concept, project, or idea from the student's own department",
          "Redesign of an existing PPT into a structured Figma-based presentation",
          "Visual explanation board of a technical or creative topic using diagrams and layout"
        ]
      },
      {
        week: 2,
        title: "Interaction Design & Visual Storytelling",
        duration: "15 Hours",
        topics: [
          "Storytelling principles for presentations",
          "Narrative flow: beginning → development → conclusion",
          "User flow and audience-driven presentation design",
          "Interaction design for presentations",
          "Micro-interactions and transitions for engagement",
          "Converting static slides into interactive experiences"
        ],
        softwareLearning: [
          "Figma prototyping tools",
          "Click-through navigation",
          "Interactive transitions and overlays",
          "Designing guided presentation flows"
        ],
        assignments: [
          "Interactive presentation with navigation and storytelling",
          "Clickable walkthrough of a design, system, or process",
          "Interactive explanation of a complex concept using visuals and flow"
        ]
      },
      {
        week: 3,
        title: "Professional Presentation, Communication & Integration",
        duration: "15 Hours",
        topics: [
          "Structuring professional presentations for reviews and evaluations",
          "Communicating ideas to non-design audiences",
          "Visual clarity for technical and conceptual subjects",
          "Design justification and explanation techniques",
          "Handling feedback and design critique",
          "Preparing presentations for academic, client, or jury settings"
        ],
        softwareLearning: [
          "Presentation-ready layouts",
          "Visual consistency and refinement",
          "Exporting for PDF, screen presentation, and live demos",
          "Presentation rehearsal using Figma Present"
        ],
        assignments: [
          "Final refined interactive presentation of a project",
          "Redesign and improvement of a previous academic presentation",
          "Simulated professional presentation with concept explanation and justification"
        ]
      }
    ],
    finalProject: {
      title: "Interactive Digital Presentation & Visual Communication Project",
      brief: "Students will develop a complete professional digital presentation based on a project, concept, or subject from their respective discipline, using Figma for layout, interaction, and storytelling.",
      requirements: [
        "Clear objective and audience identification",
        "Structured content flow and narrative",
        "Figma-based layout system (grids, typography, color)",
        "Interactive prototype demonstrating navigation",
        "Visual explanation of ideas or processes",
        "Professional presentation and verbal justification"
      ]
    },
    assessmentMethods: [
      "Continuous Assessment through assignments",
      "Final Project Evaluation",
      "Presentation & Viva / Review"
    ]
  },
  {
    id: "elective-2",
    number: 2,
    semester: "Semester 4",
    title: "Design Entrepreneurship, Professional Practice & Ethical Communication",
    shortTitle: "Design Entrepreneurship",
    applicablePrograms: "All UG Design Programs",
    overview: "This course enables students across disciplines to transition from academic learning to professional practice by developing entrepreneurial mindset, professional communication, ethical awareness, and presentation skills. It is structured to support students aspiring to work as freelancers, studio professionals, consultants, start-up founders, or independent practitioners, irrespective of their core discipline.",
    courseOutcomes: [
      "Explain entrepreneurship and business fundamentals relevant to creative and technical professions.",
      "Apply professional communication skills in client interaction, proposal writing, and pitching.",
      "Demonstrate ethical judgment and professional responsibility in real-world decision-making.",
      "Develop basic business, branding, and service frameworks for professional practice.",
      "Present and defend professional ideas confidently using structured visual and verbal communication."
    ],
    weeklyStructure: [
      {
        week: 1,
        title: "Entrepreneurship & Business Fundamentals",
        duration: "15 Hours",
        topics: [
          "Role of entrepreneurship in contemporary professional careers",
          "Career pathways: Freelancing, Studio-based practice, Consultancy, Start-ups and independent ventures",
          "Introduction to business models and revenue streams",
          "Personal branding and professional positioning",
          "Understanding clients, markets, and value propositions",
          "Basics of service-based business thinking"
        ],
        assignments: [
          "Personal brand strategy or business model canvas",
          "Service definition and value proposition document"
        ]
      },
      {
        week: 2,
        title: "Professional Communication, Client Interaction & Presentation",
        duration: "15 Hours",
        topics: [
          "Professional communication standards and etiquette",
          "Client meetings, briefing methods, and expectation management",
          "Proposal writing and professional documentation",
          "Visual storytelling for pitching ideas",
          "Structuring persuasive presentations",
          "Confidence building and articulation of ideas"
        ],
        assignments: [
          "Client-ready proposal document",
          "Structured pitch presentation deck"
        ]
      },
      {
        week: 3,
        title: "Ethics, Legal Awareness & Practice Management",
        duration: "15 Hours",
        topics: [
          "Professional ethics and responsible practice",
          "Intellectual property, copyright, and originality",
          "Contracts, scope of work, timelines, and fee structures",
          "Sustainability, inclusivity, and social responsibility",
          "Practice management and professional accountability",
          "Risk awareness and ethical decision-making"
        ],
        assignments: [
          "Ethical case study analysis",
          "Professional practice framework document"
        ]
      }
    ],
    finalProject: {
      title: "Professional Practice Proposal & Business Pitch",
      brief: "Students will develop a complete professional practice proposal applicable to their discipline, integrating entrepreneurship, communication, ethics, and presentation skills.",
      requirements: [
        "Vision and mission statement",
        "Services offered and target audience",
        "Business and revenue model",
        "Branding and professional identity",
        "Client communication and proposal strategy",
        "Ethical guidelines and professional conduct framework",
        "Final professional pitch presentation"
      ]
    },
    assessmentMethods: [
      "Continuous assessment through practical outputs",
      "Final project evaluation",
      "Presentation and viva / review"
    ]
  },
  {
    id: "elective-3",
    number: 3,
    semester: "Semester 5",
    title: "Building Energy Management Systems (BEMS)",
    shortTitle: "Building Energy Management (BEMS)",
    applicablePrograms: "BSc IDD / BVA ISD",
    overview: "This course introduces interior design students to Building Energy Management Systems, focusing on how interior design decisions impact building energy consumption. Students learn to use energy simulation and analysis software to evaluate and optimize lighting, thermal comfort, and indoor environmental quality.",
    courseOutcomes: [
      "Explain building energy consumption patterns and their relationship with interior design decisions such as space planning, lighting, materials, and HVAC zoning.",
      "Use basic building energy simulation and analysis software to evaluate the energy impact of interior design strategies.",
      "Apply BEMS concepts through digital tools to optimize lighting, thermal comfort, and indoor environmental quality.",
      "Integrate smart controls and automation concepts into interior design proposals using software-based workflows.",
      "Develop energy-efficient interior design solutions supported by qualitative and basic quantitative software outputs."
    ],
    weeklyStructure: [
      {
        week: 1,
        title: "Energy Basics & Digital Energy Awareness",
        duration: "15 Hours",
        topics: [
          "Introduction to BEMS and role of interior designers",
          "Building energy flows: lighting, HVAC, equipment",
          "Interior design parameters affecting energy use",
          "Introduction to digital energy analysis in design",
          "Overview of software interfaces and workflows"
        ],
        softwareLearning: [
          "Navigating energy-related features in Revit / SketchUp",
          "Basic model setup: space, orientation, openings",
          "Understanding energy-related outputs (loads, lighting power density)"
        ],
        assignments: [
          "Digital modeling of a simple interior space with identification of energy-influencing elements",
          "Software-based comparison of two lighting layouts (conventional vs efficient)",
          "Case study supported by screenshots from energy software"
        ]
      },
      {
        week: 2,
        title: "Lighting, HVAC & Control Simulation",
        duration: "15 Hours",
        topics: [
          "Energy-efficient lighting systems and controls",
          "Interaction between interior layout and HVAC zoning",
          "Sensors, automation, and smart interiors",
          "Linking interior design decisions with system performance"
        ],
        softwareLearning: [
          "Dialux evo / Relux: Lighting power density, Daylight contribution, Energy savings through controls",
          "Revit / Insight: Lighting and HVAC zones, Conceptual energy performance comparison"
        ],
        assignments: [
          "Lighting energy optimization using Dialux / Relux",
          "Interior layout modification to improve HVAC efficiency using Revit",
          "Smart lighting and control strategy supported by software output"
        ]
      },
      {
        week: 3,
        title: "Integrated BEMS Design & Performance Evaluation",
        duration: "15 Hours",
        topics: [
          "Integrated energy management strategies for interiors",
          "Passive interior design supported by digital analysis",
          "Retrofitting interiors using software-based evaluation",
          "Cost–energy–design trade-offs",
          "Role of designers in multidisciplinary BEMS workflows"
        ],
        softwareLearning: [
          "Comparative energy analysis (design alternatives)",
          "Interpreting graphs, charts, and dashboards",
          "Translating software outputs into design decisions",
          "Communicating energy performance visually"
        ],
        assignments: [
          "Software-assisted retrofit proposal for an existing interior",
          "Energy-based material and lighting selection using digital tools",
          "Comparative study of two interior design concepts using energy outputs"
        ]
      }
    ],
    finalProject: {
      title: "Software-Based Energy-Efficient Interior Design Using BEMS Principles",
      brief: "Students will develop an interior design proposal for a selected space and validate design decisions using BEMS-related software tools.",
      requirements: [
        "Description of space and functional needs",
        "Digital interior model",
        "Identification of energy-intensive elements",
        "Software-based analysis of: Lighting energy, Daylight utilization, Interior layout impact on energy use",
        "Proposed BEMS strategies (controls, automation, zoning)",
        "Performance comparison: base case vs improved design"
      ]
    },
    assessmentMethods: [
      "Continuous assessment through assignments",
      "Final Project Evaluation",
      "Presentation & Viva / Review"
    ]
  },
  {
    id: "elective-4",
    number: 4,
    semester: "Semester 5",
    title: "Building Information Modeling (BIM) for Interior Design and Services Coordination",
    shortTitle: "BIM for Interior Design",
    applicablePrograms: "BSc IDD / BVA ISD",
    overview: "This course covers BIM concepts and integrated workflows for architectural design and building services coordination using Autodesk Revit. Students learn to model architectural elements, integrate lighting, plumbing, and HVAC systems at a conceptual coordination level.",
    courseOutcomes: [
      "Explain BIM concepts and integrated workflows for architectural design and building services coordination.",
      "Develop BIM-based architectural design models including spaces, levels, grids, and primary building elements.",
      "Model and integrate basic building services—lighting, plumbing, and HVAC—at a conceptual coordination level within architectural BIM models.",
      "Generate coordinated architectural and services drawings using BIM tools.",
      "Produce a BIM-supported architectural design proposal demonstrating spatial design, services coordination, and constructability awareness."
    ],
    weeklyStructure: [
      {
        week: 1,
        title: "BIM Fundamentals & Architectural Design Modeling",
        duration: "15 Hours",
        topics: [
          "Introduction to BIM and integrated architectural practice",
          "CAD vs BIM: model-based design approach",
          "BIM workflow: concept → model → coordination → documentation",
          "Architectural elements: Walls, floors, roofs, Levels, grids, cores, Openings and circulation",
          "Introduction to services coordination zones"
        ],
        assignments: [
          "BIM-based schematic architectural design of a small building",
          "Conversion of a 2D architectural plan into a BIM model",
          "Concept note: role of BIM in integrated architectural design"
        ]
      },
      {
        week: 2,
        title: "Lighting & Plumbing Systems Integration",
        duration: "15 Hours",
        topics: [
          "Architectural lighting design principles",
          "Lighting layouts and reflected ceiling plans (RCP)",
          "Plumbing systems overview: Water supply, Sanitary and drainage",
          "Plumbing fixtures, shafts, and service zones",
          "Coordination of lighting and plumbing with architecture"
        ],
        assignments: [
          "BIM-based lighting layout and RCP for an architectural space",
          "Coordinated architectural + plumbing model for a building zone",
          "Integrated lighting and plumbing coordination study"
        ]
      },
      {
        week: 3,
        title: "HVAC Coordination & Integrated BIM Design",
        duration: "15 Hours",
        topics: [
          "Role of HVAC systems in architectural design",
          "HVAC components: Air handling units, Ducts and diffusers, Return air paths",
          "HVAC zoning and ceiling coordination",
          "Service conflicts and constructability awareness",
          "Integrated architecture–services coordination"
        ],
        assignments: [
          "BIM-based HVAC coordination model for an architectural space",
          "Integrated lighting–plumbing–HVAC coordination study",
          "Identification and resolution of service clashes using BIM"
        ]
      }
    ],
    finalProject: {
      title: "Integrated BIM-Based Architectural Design with Lighting, Plumbing, and HVAC Coordination",
      brief: "Students will develop a BIM-based architectural design proposal for a small-scale building, demonstrating coordination of lighting, plumbing, and HVAC systems within the architectural model.",
      requirements: [
        "Architectural BIM model (plans, sections, elevations)",
        "Lighting layout and reflected ceiling plan",
        "Plumbing layout (water supply and sanitary – conceptual)",
        "HVAC layout (diffusers, ducts, zones – conceptual)",
        "Coordinated views showing service integration",
        "BIM-based visualization and presentation",
        "Basic fixture and component schedules"
      ]
    },
    assessmentMethods: [
      "Continuous assessment through assignments",
      "Final Project Evaluation",
      "Presentation & Viva / Review"
    ]
  },
  {
    id: "elective-5",
    number: 5,
    semester: "Semester 5",
    title: "Digital VFX & Motion Compositing",
    shortTitle: "Digital VFX & Motion Compositing",
    applicablePrograms: "BVA GD",
    overview: "This course introduces Visual Effects (VFX) as a design and communication tool. Designed for Graphic Design and Visual Communication students, it focuses on motion-based visual storytelling, compositing, and post-production workflows used in advertising, branding films, digital campaigns, UI motion, broadcast graphics, and social media content using Adobe After Effects and Foundry Nuke.",
    courseOutcomes: [
      "Explain the role of VFX in visual communication, advertising, branding, and digital media.",
      "Create motion-based visual effects using Adobe After Effects for communication-driven outcomes.",
      "Apply node-based compositing principles using Nuke for clean, layered visual outputs.",
      "Integrate typography, graphics, footage, and effects into coherent motion narratives.",
      "Develop industry-ready VFX compositions and present them with clear design intent."
    ],
    weeklyStructure: [
      {
        week: 1,
        title: "Foundations of VFX for Visual Communication",
        duration: "15 Hours",
        topics: [
          "What VFX means in Graphic & Visual Communication (not cinema)",
          "VFX vs Motion Graphics vs Animation",
          "Design-led VFX thinking: clarity, hierarchy, intent",
          "Basics of compositing: layers, alpha, mattes, masks",
          "Visual storytelling using motion",
          "Industry examples from advertising, branding, broadcast"
        ],
        softwareLearning: [
          "After Effects: Interface and workflow, Importing footage and assets",
          "Layer-based compositing, Masks, track mattes, blend modes",
          "Keyframes and basic animation principles",
          "Typography integration in motion"
        ],
        assignments: [
          "Motion-based poster or title animation using After Effects",
          "Simple compositing of footage + typography for a brand message",
          "Breakdown study of a VFX-heavy advertisement recreated partially in AE"
        ]
      },
      {
        week: 2,
        title: "Motion Effects, Tracking & Design-Driven VFX",
        duration: "15 Hours",
        topics: [
          "Visual effects as communication enhancers",
          "Motion tracking and object integration",
          "Green screen and chroma keying for design",
          "Transitions, reveals, and visual continuity",
          "Using effects responsibly (avoiding overdesign)"
        ],
        softwareLearning: [
          "After Effects: Motion tracking & stabilization, Rotoscoping, Green screen keying, Camera movement basics (2.5D)",
          "Introduction to Nuke: Node-based compositing concept, Read/Merge/Transform/Color nodes, Layer logic vs node logic"
        ],
        assignments: [
          "Brand-based VFX short (5–8 seconds) using tracking",
          "Green screen composite for a promotional visual",
          "Same composition executed in AE (layers) and Nuke (nodes) – comparison"
        ]
      },
      {
        week: 3,
        title: "Advanced Compositing & Professional VFX Presentation",
        duration: "15 Hours",
        topics: [
          "Advanced compositing workflows",
          "Color correction vs color grading",
          "Visual consistency and realism",
          "Integrating VFX into design systems",
          "Preparing work for clients, agencies, and portfolios",
          "Ethics in image manipulation and visual truth"
        ],
        softwareLearning: [
          "Nuke: Advanced node structures, Rotoscoping, Multi-pass compositing (basic)",
          "Color correction workflows, Render management",
          "Output formats for different platforms"
        ],
        assignments: [
          "Advertisement-style VFX composite (product / message-driven)",
          "Motion branding film using layered VFX",
          "Visual communication explainer using compositing techniques"
        ]
      }
    ],
    finalProject: {
      title: "Design-Led Visual Effects for Brand & Communication",
      brief: "Students will conceptualize and execute a VFX-based visual communication project using After Effects and/or Nuke, focusing on message clarity, motion storytelling, and professional compositing.",
      requirements: [
        "Project concept and communication objective",
        "Storyboard / motion flow plan",
        "VFX execution using After Effects (mandatory) and Nuke (recommended)",
        "Integration of typography, graphics, footage / assets",
        "Final output (10–20 seconds)",
        "Process documentation: Screenshots, Node graphs / layer structure, Design rationale"
      ],
      deliverables: [
        "Final rendered video",
        "Process PDF",
        "Presentation explaining concept, tools, and outcomes"
      ]
    },
    assessmentMethods: [
      "Continuous assessment through assignments",
      "Final Project Evaluation",
      "Presentation & Viva / Review"
    ]
  },
  {
    id: "elective-6",
    number: 6,
    semester: "Semester 5",
    title: "Design in Dimensions: 3D Asset Creation",
    shortTitle: "3D Asset Creation (Maya)",
    applicablePrograms: "BVA GD",
    overview: "This course introduces 3D modelling as a visual communication tool for Graphic Design and Visual Communication students using Autodesk Maya. The focus is on form, proportion, composition, lighting, and presentation, enabling students to create 3D visuals for branding, advertising, product visualization, motion graphics, and digital campaigns.",
    courseOutcomes: [
      "Explain the role of 3D modelling in contemporary graphic and visual communication.",
      "Create clean, design-oriented 3D models using Autodesk Maya.",
      "Apply principles of form, scale, proportion, and visual hierarchy in 3D space.",
      "Develop materials, lighting, and camera setups suitable for communication and branding.",
      "Present 3D design outputs clearly for print, digital, and motion-based platforms."
    ],
    weeklyStructure: [
      {
        week: 1,
        title: "3D Foundations & Design Thinking in Maya",
        duration: "15 Hours",
        topics: [
          "Why 3D matters for Graphic & Visual Communication",
          "3D vs 2D thinking: volume, depth, perspective",
          "Design principles in 3D: balance, rhythm, hierarchy",
          "Polygon modelling fundamentals",
          "Understanding topology for clean design output",
          "Introduction to industry use-cases (branding, ads, UI visuals)"
        ],
        softwareLearning: [
          "Maya: Interface and navigation, Primitives and transforms",
          "Polygon modelling tools, Edge flow and clean topology",
          "Basic grouping and scene organization"
        ],
        assignments: [
          "3D reinterpretation of a 2D logo or graphic symbol",
          "Simple product or object model focusing on proportion",
          "Geometric composition for a brand visual"
        ]
      },
      {
        week: 2,
        title: "Materials, Lighting & Visual Composition",
        duration: "15 Hours",
        topics: [
          "Materials as visual language",
          "Color, texture, and surface storytelling",
          "Lighting for mood, focus, and hierarchy",
          "Camera angles for communication impact",
          "Translating brand identity into 3D visuals"
        ],
        softwareLearning: [
          "Maya: Material creation (basic shaders), Texture mapping fundamentals",
          "Lighting types and setups, Camera controls and composition",
          "Test rendering for presentation"
        ],
        assignments: [
          "Product visualization with controlled lighting",
          "Brand-themed 3D visual (poster-style render)",
          "Material exploration for a packaging or branding concept"
        ]
      },
      {
        week: 3,
        title: "Advanced Modelling, Scene Building & Presentation",
        duration: "15 Hours",
        topics: [
          "Complex object modelling (non-organic)",
          "Scene composition and layout",
          "Rendering for print and digital platforms",
          "Still vs motion-ready 3D assets",
          "Ethics and realism in visual representation",
          "Portfolio and presentation standards"
        ],
        softwareLearning: [
          "Maya: Advanced polygon tools, Scene optimization",
          "Render settings (basic), Output formats and resolution standards",
          "Preparing assets for After Effects / motion use"
        ],
        assignments: [
          "Advertising-style 3D composition",
          "3D key visual for a campaign or brand launch",
          "Modular asset set for motion graphics use"
        ]
      }
    ],
    finalProject: {
      title: "Design-Led 3D Visual Communication Using Maya",
      brief: "Students will conceptualize and produce a 3D visual communication project using Autodesk Maya, demonstrating form clarity, material logic, lighting control, and professional presentation.",
      requirements: [
        "Concept and communication goal",
        "Reference and mood board",
        "3D modelling process",
        "Materials and lighting strategy",
        "Final renders (still or short motion)",
        "Application context (ad, branding, digital, print)"
      ],
      deliverables: [
        "Final rendered outputs",
        "Process PDF (screenshots + explanations)",
        "Presentation articulating design decisions"
      ]
    },
    assessmentMethods: [
      "Continuous assessment through assignments",
      "Final Project Evaluation",
      "Presentation & Viva / Review"
    ]
  }
];

// Maps program identifiers to their applicable elective numbers
export const programElectiveMap: Record<string, number[]> = {
  "bsc-interior-design": [1, 2, 3, 4],
  "bva-interior-spatial-design": [1, 2, 3, 4],
  "bva-graphic-design": [1, 2, 5, 6],
  "bva-animation-game-design": [1, 2],
  "bca-uiux": [1, 2],
  "bca-data-analytics": [1, 2],
  "bsc-fashion-design": [1, 2],
};

export const electiveSchedule = [
  {
    semester: "Sem 4",
    electives: ["Elective 1", "Elective 2"],
    programs: "All UG Design Programs"
  },
  {
    semester: "Sem 5",
    electives: ["Elective 3", "Elective 4"],
    programs: "BSc IDD / BVA ISD"
  },
  {
    semester: "Sem 5",
    electives: ["Elective 5", "Elective 6"],
    programs: "BVA GD"
  }
];
