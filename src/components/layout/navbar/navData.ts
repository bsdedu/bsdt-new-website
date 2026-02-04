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
          { name: 'B.Sc Interior Design', href: '/academics/bsc-interior-design' },
          { name: 'BVA Graphic & Communication Design', href: '/academics/bva-graphic-design' },
          { name: 'BVA Interior & Spatial Design', href: '/academics/bva-interior-spatial-design' },
          
          { name: 'BVA Animation & Game Design', href: '/bva-animation-and-multimedia-game-design' },
          { name: 'BCA with UI/UX & AI/ML', href: '/academics/b-computer-application-ui-ux' },
          { name: 'BCA with Data Analytics & Cyber Security', href: '/programs/bsc-cs-analytics-security' }
        ]
      },
      {
        title: 'DIPLOMA PROGRAMS',
        items: [
          { name: 'Professional Dip. Interior Design', href: '/academics/professional-diploma-in-interior-design' },
          { name: 'Master Diploma in Advanced Residential Design', href: '/academics/master-diploma-in-interior-design' },
          { name: 'Professional Dip. Visual Communication + UI & UX', href: '/academics/professional-diploma-graphics-design-ui-ux' },
          { name: 'Professional Dip. in UI & UX', href: '/academics/diploma-in-hci-for-ui-ux' },
          { name: 'Professional Dip. in Sustainable System & Circular Design', href: '/academics/professional-diploma-sustainable-circular-design' },
          { name: 'Professional Dip. in AI & Integrated Service Design', href: '/academics/professional-diploma-ai-service-design' },
          { name: 'Post Grad Dip. Landscape Design', href: '/academics/post-graduate-diploma-in-landscape-design' }
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
      { name: 'Scholarships', href: '/admissions/fees-scholarships' },
      { name: 'Schedule a Campus Visit', href: '/plan-a-visit' },
      { name: 'Faculty', href: '/faculty' },
      { name: 'Studio BSD', href: '/studio-bsd' },
      { name: 'We Go Beyond Curriculum', href: '/we-go-beyond-curriculum' },
      { name: 'FAQs', href: '/request-information' }
    ]
  },
  {
    name: 'Campus Life',
    href: '#campus-life',
    type: 'dropdown',
    items: [
      { name: 'Student Spotlight', href: '/student-spotlight' },
      { name: 'Student Clubs', href: '/student-clubs' },
      { name: 'Student Experience', href: '/student-experience' },
      { name: 'Events & Activities', href: '/campus-life/events-activities' },
      { name: 'Hostel & Transport', href: '/housing-transport' }
    ]
  },
  {
    name: 'About',
    href: '#about',
    type: 'dropdown',
    items: [
      { name: 'About BSDT', href: '/about' },
      { name: 'Leadership & Governance', href: '/leadership' }
    ]
  },
  {
    name: 'Futr School',
    href: 'https://futrschool.edmingle.com/',
    type: 'link'
  }
];
