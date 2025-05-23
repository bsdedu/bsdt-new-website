
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
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Square_Yards_Logo.png/320px-Square_Yards_Logo.png",
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
