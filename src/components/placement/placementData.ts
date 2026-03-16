
interface AlumniData {
  name: string;
  program: string;
  company: string;
  companyLogo: string;
  salary: string;
}

interface PlacementData {
  [year: string]: AlumniData[];
}

export const placementData: PlacementData = {
  "2025": [
    {
      name: "Fardeen CMA",
      program: "BSc Interior Design",
      company: "Nannilam Eco Village",
      companyLogo: "/placeholder.svg",
      salary: "₹6 LPA"
    },
    {
      name: "Karthik Reddy",
      program: "BSc Interior Design",
      company: "Bonito Design",
      companyLogo: "/lovable-uploads/2e96f455-edd6-4404-a473-76a3a0a3cf1d.png",
      salary: "₹5.5 LPA"
    },
    {
      name: "Sneha Kulkarni",
      program: "BVA Interior & Spatial Design",
      company: "D'Life Interiors",
      companyLogo: "/placeholder.svg",
      salary: "₹4.7 LPA"
    },
    {
      name: "Nikhil Kulkarni",
      program: "BVA Interior & Spatial Design",
      company: "Livspace",
      companyLogo: "/lovable-uploads/b5cd9a1d-d755-41c7-8383-06aeb875d90e.png",
      salary: "₹6.2 LPA"
    },
    {
      name: "Aman Gupta",
      program: "BVA Graphic Design",
      company: "Landor",
      companyLogo: "/placeholder.svg",
      salary: "₹11 LPA"
    },
    {
      name: "Neha Jain",
      program: "BVA Graphic Design",
      company: "Elephant Design",
      companyLogo: "/placeholder.svg",
      salary: "₹9 LPA"
    }
  ],
  "2024": [
    {
      name: "Tanvi Iyer",
      program: "BSc Interior Design",
      company: "Asian Paints",
      companyLogo: "/placeholder.svg",
      salary: "₹6.5 LPA"
    },
    {
      name: "Arjun Menon",
      program: "BSc Interior Design",
      company: "Design Cafe",
      companyLogo: "/placeholder.svg",
      salary: "₹4.5 LPA"
    },
    {
      name: "Jaden Wilson",
      program: "BVA Interior & Spatial Design",
      company: "Lewis Infrastructure and Projects",
      companyLogo: "/placeholder.svg",
      salary: "₹3.5 LPA"
    },
    {
      name: "Prasanth S",
      program: "BVA Interior & Spatial Design",
      company: "Design Studio",
      companyLogo: "/lovable-uploads/a6458608-c25a-495b-972c-ad8b774093fb.png",
      salary: "₹5 LPA"
    },
    {
      name: "Vikram Raja",
      program: "BVA Graphic Design",
      company: "Wipro Digital Experience",
      companyLogo: "/placeholder.svg",
      salary: "₹8.4 LPA"
    },
    {
      name: "Shourya Mehta",
      program: "BVA Graphic Design",
      company: "FAAS",
      companyLogo: "/placeholder.svg",
      salary: "₹6.5 LPA"
    }
  ],
  "2023": [
    {
      name: "Meera Patel",
      program: "BSc Interior Design",
      company: "DEFA",
      companyLogo: "/placeholder.svg",
      salary: "₹4.5 LPA"
    },
    {
      name: "Radhika Joshi",
      program: "BSc Interior Design",
      company: "Twigger",
      companyLogo: "/lovable-uploads/6803a059-73a2-43e7-99c9-de9e2726e3c6.png",
      salary: "₹3.5 LPA"
    },
    {
      name: "Sneha Iyer",
      program: "BVA Interior & Spatial Design",
      company: "Pepperfry",
      companyLogo: "/lovable-uploads/2595d585-fc2d-402a-9beb-9e8e906045b3.png",
      salary: "₹6.5 LPA"
    },
    {
      name: "Rahul Verma",
      program: "BVA Interior & Spatial Design",
      company: "Design Studio",
      companyLogo: "/lovable-uploads/a6458608-c25a-495b-972c-ad8b774093fb.png",
      salary: "₹3.5 LPA"
    },
    {
      name: "Sharan Jude",
      program: "BVA Graphic Design",
      company: "Honeycomb",
      companyLogo: "/placeholder.svg",
      salary: "₹8 LPA"
    },
    {
      name: "Riya Bafna",
      program: "BVA Graphic Design",
      company: "Everything Design",
      companyLogo: "/placeholder.svg",
      salary: "₹5.5 LPA"
    }
  ],
  "Diploma": [
    {
      name: "Aditi Sharma",
      program: "Diploma in Interior Design",
      company: "Design Studio",
      companyLogo: "/lovable-uploads/a6458608-c25a-495b-972c-ad8b774093fb.png",
      salary: "₹3.8 LPA"
    },
    {
      name: "Rahul Verma",
      program: "Diploma in Interior Design",
      company: "Design Cafe",
      companyLogo: "/placeholder.svg",
      salary: "₹3.5 LPA"
    },
    {
      name: "Sneha Nair",
      program: "Diploma in Interior Design",
      company: "Asian Paints",
      companyLogo: "/placeholder.svg",
      salary: "₹3.6 LPA"
    },
    {
      name: "Riya Kapoor",
      program: "Diploma in Visual Communication Design",
      company: "Pepper Square",
      companyLogo: "/placeholder.svg",
      salary: "₹3.6 LPA"
    },
    {
      name: "Aman Gupta",
      program: "Diploma in Visual Communication Design",
      company: "Smallcase Design Team",
      companyLogo: "/placeholder.svg",
      salary: "₹3.4 LPA"
    },
    {
      name: "Dev Patel",
      program: "Diploma in Landscape Design",
      company: "Design Tree Landscape Studio",
      companyLogo: "/placeholder.svg",
      salary: "₹3.5 LPA"
    },
    {
      name: "Ananya Das",
      program: "Diploma in Landscape Design",
      company: "Landscape India",
      companyLogo: "/placeholder.svg",
      salary: "₹3.4 LPA"
    }
  ]
};

// Top recruiting companies logos
export const topRecruitersLogos = [
  {
    name: "Livspace",
    logo: "/lovable-uploads/b5cd9a1d-d755-41c7-8383-06aeb875d90e.png"
  },
  {
    name: "Pepperfry",
    logo: "/lovable-uploads/2595d585-fc2d-402a-9beb-9e8e906045b3.png"
  },
  {
    name: "Bonito Designs",
    logo: "/lovable-uploads/2e96f455-edd6-4404-a473-76a3a0a3cf1d.png"
  },
  {
    name: "Lollypop.Design",
    logo: "/lovable-uploads/523ad064-bd6e-4d63-852f-0191929251a3.png"
  },
  {
    name: "Asian Paints",
    logo: "/placeholder.svg"
  },
  {
    name: "Elephant Design",
    logo: "/placeholder.svg"
  },
  {
    name: "Design Cafe",
    logo: "/placeholder.svg"
  },
  {
    name: "Twigger Design",
    logo: "/lovable-uploads/6803a059-73a2-43e7-99c9-de9e2726e3c6.png"
  },
  {
    name: "HMG Stones",
    logo: "/lovable-uploads/bb57c500-318d-40db-8440-7cc475c47272.png"
  },
  {
    name: "Honeycomb",
    logo: "/placeholder.svg"
  },
  {
    name: "Landscape India",
    logo: "/placeholder.svg"
  },
  {
    name: "Flipkart",
    logo: "/lovable-uploads/3a1114ca-a146-4d4a-a9e7-c9fd0cda672c.png"
  },
  {
    name: "HP",
    logo: "/lovable-uploads/0ff2cdf6-8043-4aa2-b6f0-5fb423d30dbe.png"
  },
  {
    name: "Wipro",
    logo: "/placeholder.svg"
  },
  {
    name: "Landor",
    logo: "/placeholder.svg"
  }
];
