
type Program = {
  name: string;
  specialization?: string;
  duration: string;
  semesters: number;
  totalFee: number;
  semesterFees: Array<number | null>;
};

type FeeStructure = {
  academicYear: string;
  registrationFee: number;
  programs: Program[];
};

export const feeStructureData: FeeStructure = {
  academicYear: "2025-2026",
  registrationFee: 30000,
  programs: [
    {
      name: "B.Sc. Interior Design & Decoration",
      duration: "3 Years",
      semesters: 6,
      totalFee: 490000,
      semesterFees: [51667, 81667, 81667, 81667, 81667, 81667, null, null]
    },
    {
      name: "BVA Graphic Design",
      duration: "4 Years",
      semesters: 8,
      totalFee: 540000,
      semesterFees: [37500, 67500, 67500, 67500, 67500, 67500, 67500, 67500]
    },
    {
      name: "BVA Animation & Multimedia",
      duration: "4 Years",
      semesters: 8,
      totalFee: 580000,
      semesterFees: [42500, 72500, 72500, 72500, 72500, 72500, 72500, 72500]
    },
    {
      name: "BCA + UI/UX",
      duration: "3 Years",
      semesters: 6,
      totalFee: 275000,
      semesterFees: [15833, 45833, 45833, 45833, 45833, 45833, null, null]
    },
    {
      name: "B.Sc. Computer Science +",
      specialization: "(AI / ML / Data Analytics / Cyber Security)",
      duration: "3 Years",
      semesters: 6,
      totalFee: 275000,
      semesterFees: [15833, 45833, 45833, 45833, 45833, 45833, null, null]
    },
    {
      name: "B. Des (Hons.) Architectural Design Construction",
      duration: "4 Years",
      semesters: 8,
      totalFee: 700000,
      semesterFees: [57500, 87500, 87500, 87500, 87500, 87500, 87500, 87500]
    },
    {
      name: "B. Des (Hons.) Interaction and Experience Design",
      duration: "4 Years",
      semesters: 8,
      totalFee: 750000,
      semesterFees: [63750, 93750, 93750, 93750, 93750, 93750, 93750, 93750]
    },
    {
      name: "Professional Diploma in Interior Design",
      duration: "1 Year",
      semesters: 2,
      totalFee: 177000,
      semesterFees: [58500, 88500, null, null, null, null, null, null]
    },
    {
      name: "Professional Diploma in Graphic Design + UI/UX",
      duration: "1 Year",
      semesters: 2,
      totalFee: 147500,
      semesterFees: [43750, 73750, null, null, null, null, null, null]
    },
    {
      name: "Diploma in UI/UX",
      duration: "6 Months",
      semesters: 1,
      totalFee: 70800,
      semesterFees: [40800, null, null, null, null, null, null, null]
    },
    {
      name: "Post Graduate Diploma in Landscape Design",
      duration: "1 Year",
      semesters: 2,
      totalFee: 147500,
      semesterFees: [43750, 73750, null, null, null, null, null, null]
    }
  ]
};
