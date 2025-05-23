
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
  "2020": [
    {
      name: "Navyashree G",
      program: "B.Sc Interior Design",
      company: "Square Yards",
      companyLogo: "/lovable-uploads/fb299145-de7a-450e-b1b9-6db180baf0aa.png",
      salary: "₹6.5 LPA"
    },
    {
      name: "Sk Saifuddin",
      program: "B.Sc Interior Design",
      company: "Design Studio",
      companyLogo: "/lovable-uploads/a6458608-c25a-495b-972c-ad8b774093fb.png",
      salary: "₹7.5 LPA"
    },
    {
      name: "Niraj Pawar",
      program: "B.Sc Interior Design",
      company: "Hexa Design",
      companyLogo: "/lovable-uploads/1e36c4b3-6b23-4c97-91ac-4e38c1cf44a0.png",
      salary: "₹5.5 LPA"
    }
  ],
  "2022": [
    {
      name: "Naadir Khan",
      program: "BVA Graphic Design",
      company: "Monochrome",
      companyLogo: "/lovable-uploads/b913b9c5-9b3d-4937-b1f9-97886aec7eed.png",
      salary: "₹7.5 LPA"
    },
    {
      name: "Shamanth P C",
      program: "BVA Graphic Design",
      company: "Eight Pixel",
      companyLogo: "/lovable-uploads/aa01636b-5779-4c5d-9c2d-5a292dc619a4.png",
      salary: "₹8 LPA"
    },
    {
      name: "Vidhi Pareek",
      program: "BVA Interior Architecture",
      company: "M Moser Associates",
      companyLogo: "/lovable-uploads/90086c0b-8084-4d9f-a23c-a25f377e67da.png",
      salary: "₹6 LPA"
    }
  ],
  "2023": [
    {
      name: "Devayani B",
      program: "B.Sc Interior Design",
      company: "Livspace",
      companyLogo: "/lovable-uploads/b5cd9a1d-d755-41c7-8383-06aeb875d90e.png",
      salary: "₹7.2 LPA"
    },
    {
      name: "Inchara",
      program: "B.Sc Interior Design",
      company: "Studio Primrose",
      companyLogo: "/lovable-uploads/245c70cd-7c97-4c99-ade8-1f922913dd59.png",
      salary: "₹6.5 LPA"
    },
    {
      name: "Thanushree",
      program: "B.Sc Interior Design",
      company: "Puravankara",
      companyLogo: "/lovable-uploads/eb98d6a2-de55-49a3-8aec-0c51416e2367.png",
      salary: "₹5.3 LPA"
    }
  ]
};

// Top recruiting companies logos
export const topRecruitersLogos = [
  {
    name: "Twigger Design",
    logo: "/lovable-uploads/6803a059-73a2-43e7-99c9-de9e2726e3c6.png"
  },
  {
    name: "Flipkart",
    logo: "/lovable-uploads/3a1114ca-a146-4d4a-a9e7-c9fd0cda672c.png"
  },
  {
    name: "Thence",
    logo: "/lovable-uploads/5a2d9a30-ad17-467a-a3eb-45eed52a9ba2.png"
  },
  {
    name: "Lollypop.Design",
    logo: "/lovable-uploads/523ad064-bd6e-4d63-852f-0191929251a3.png"
  },
  {
    name: "HP",
    logo: "/lovable-uploads/0ff2cdf6-8043-4aa2-b6f0-5fb423d30dbe.png"
  },
  {
    name: "Bonito Designs",
    logo: "/lovable-uploads/2e96f455-edd6-4404-a473-76a3a0a3cf1d.png"
  },
  {
    name: "Pepperfry",
    logo: "/lovable-uploads/2595d585-fc2d-402a-9beb-9e8e906045b3.png"
  },
  {
    name: "Livspace",
    logo: "/lovable-uploads/b5cd9a1d-d755-41c7-8383-06aeb875d90e.png"
  },
  {
    name: "Philips",
    logo: "/lovable-uploads/b520d93f-6809-4935-9548-716b8c17a66a.png"
  },
  {
    name: "HCL",
    logo: "/lovable-uploads/0ae72b8a-07cc-49d2-b849-2ed58b4560e8.png"
  },
  {
    name: "Honeywell",
    logo: "/lovable-uploads/183ffb4c-ed98-4bf2-96c0-10b29c4c87db.png"
  },
  {
    name: "VMware",
    logo: "/lovable-uploads/476fd190-4c25-4173-8752-fbc47df7d467.png"
  },
  {
    name: "Capgemini",
    logo: "/lovable-uploads/8514240d-03da-4876-8bcf-4f6eaefbb30c.png"
  },
  {
    name: "Hexaspace",
    logo: "/lovable-uploads/32d9a48d-79a3-4841-b4d7-5e245d1d7ab4.png"
  },
  {
    name: "HMG Stones",
    logo: "/lovable-uploads/bb57c500-318d-40db-8440-7cc475c47272.png"
  },
  {
    name: "DEFA",
    logo: "/lovable-uploads/630a0988-811e-49f8-b79e-4f7543c67e11.png"
  }
];
