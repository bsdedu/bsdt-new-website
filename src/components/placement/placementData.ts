
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
      companyLogo: "/placeholder.svg",
      salary: "₹7.5 LPA"
    },
    {
      name: "Niraj Pawar",
      program: "B.Sc Interior Design",
      company: "Hexa Design",
      companyLogo: "/placeholder.svg",
      salary: "₹5.5 LPA"
    }
  ],
  "2022": [
    {
      name: "Naadir Khan",
      program: "BVA Graphic Design",
      company: "Monochrome",
      companyLogo: "/placeholder.svg",
      salary: "₹7.5 LPA"
    },
    {
      name: "Shamanth P C",
      program: "BVA Graphic Design",
      company: "Eight Pixel",
      companyLogo: "/placeholder.svg",
      salary: "₹8 LPA"
    },
    {
      name: "Vidhi Pareek",
      program: "BVA Interior Architecture",
      company: "M Moser Associates",
      companyLogo: "https://media.licdn.com/dms/image/C4D0BAQEo88FPbAPOuA/company-logo_200_200/0/1630521048751/m_moser_associates_logo?e=2147483647&v=beta&t=GPf8TvnVZqudTN-3qBVml_lr31uPU0w7MFJDcvSDirs",
      salary: "₹6 LPA"
    }
  ],
  "2023": [
    {
      name: "Devayani B",
      program: "B.Sc Interior Design",
      company: "Livspace",
      companyLogo: "https://gumlet.assettype.com/afaqs/2022-06/301b5853-e454-49bd-b6a4-712278f235ff/Livspace_Logo.jpg",
      salary: "₹7.2 LPA"
    },
    {
      name: "Inchara",
      program: "B.Sc Interior Design",
      company: "Studio Primrose",
      companyLogo: "/placeholder.svg",
      salary: "₹6.5 LPA"
    },
    {
      name: "Thanushree",
      program: "B.Sc Interior Design",
      company: "Puravankara",
      companyLogo: "https://www.puravankara.com/upload/image/Puravankara-Logo.png",
      salary: "₹5.3 LPA"
    }
  ]
};
