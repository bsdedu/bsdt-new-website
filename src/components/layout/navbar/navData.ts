
export type SubItem = {
  name: string;
  href: string;
};

export type NavStructure = {
  name: string;
  href: string;
  type: 'dropdown' | 'link' | 'megamenu';
  items?: SubItem[];
  categories?: {
    title: string;
    items: SubItem[];
  }[];
};

// Main navigation structure with nested menus
export const navStructure: NavStructure[] = [
  {
    name: 'Programs',
    href: '#programs',
    type: 'megamenu',
    categories: [
      {
        title: 'UG DEGREE PROGRAMS',
        items: [
          { name: 'B.Sc Interior Design', href: '/programs/bsc-interior-design' },
          { name: 'BVA Graphic & Communication Design', href: '/programs/bva-graphic-design' },
          { name: 'BVA Animation & Game Design', href: '/programs/bva-animation-game-design' },
          { name: 'BCA with UI/UX & AI/ML', href: '/programs/bca-uiux-aiml' },
          { name: 'B.Sc Computer Science Data Analytics & Cyber Security', href: '/programs/bsc-cs-analytics-security' },
          { name: 'B.Des in Interaction & Experience Design', href: '/programs/bdes-interaction-experience' },
          { name: 'B.Des in Architectural Construction Design', href: '/programs/bdes-architectural-design' }
        ]
      },
      {
        title: 'DIPLOMA PROGRAMS',
        items: [
          { name: 'Professional Dip. Interior Design', href: '/programs/diploma-interior-design' },
          { name: 'Professional Dip. Graphic Design + UI & UX', href: '/programs/diploma-graphic-uiux' },
          { name: 'Professional Dip. in UI & UX', href: '/programs/diploma-uiux' },
          { name: 'Post Grad Dip. Landscape Design', href: '/programs/pgd-landscape-design' }
        ]
      }
    ]
  },
  {
    name: 'Admissions',
    href: '#admissions',
    type: 'dropdown',
    items: [
      { name: 'Application Process', href: '/admissions/application-process' },
      { name: 'Fees & Scholarships', href: '/admissions/fees-scholarships' },
      { name: 'Schedule a Campus Visit', href: '/admissions/schedule-visit' },
      { name: 'Faculty', href: '/admissions/faculty' },
      { name: 'Studio BSD', href: '/admissions/studio-bsd' },
      { name: 'We Go Beyond Curriculum', href: '/admissions/beyond-curriculum' },
      { name: 'FAQs', href: '/admissions/faqs' }
    ]
  },
  {
    name: 'Campus Life',
    href: '#campus-life',
    type: 'dropdown',
    items: [
      { name: 'Student Clubs', href: '/campus-life/student-clubs' },
      { name: 'Student Experience', href: '/campus-life/student-experience' },
      { name: 'Sports Facility', href: '/campus-life/sports-facility' },
      { name: 'Events & Activities', href: '/campus-life/events-activities' },
      { name: 'Hostel & Transport', href: '/campus-life/hostel-transport' }
    ]
  },
  {
    name: 'About',
    href: '#about',
    type: 'dropdown',
    items: [
      { name: 'About BSDT', href: '/about-bsdt' },
      { name: 'Leadership & Governance', href: '/leadership-governance' }
    ]
  }
];
