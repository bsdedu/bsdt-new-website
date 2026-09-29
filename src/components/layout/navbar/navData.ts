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
        title: 'DIPLOMA PROGRAMS',
        items: [
          { name: 'Professional Diploma in Interior Design', href: '/academics/professional-diploma-in-interior-design' },
          { name: 'Professional Diploma in Visual Communication + UI UX', href: '/academics/professional-diploma-graphics-design-ui-ux' },
          { name: 'Post Graduate Diploma in Landscape Design', href: '/academics/post-graduate-diploma-in-landscape-design' },
          { name: 'Professional Diploma in UI & UX', href: '/academics/diploma-in-hci-for-ui-ux' },
          { name: 'Post Graduate Diploma in Residential Architecture and Design', href: '/academics/master-diploma-in-interior-design' },
          { name: 'Professional Diploma in Interior Construction & Project Management', href: '/academics/professional-diploma-interior-construction-project-management' }
        ]
      },
      {
        title: 'UG DEGREE PROGRAMS',
        items: [
          { name: 'B.Sc Interior Design', href: '/academics/bsc-interior-design' },
          { name: 'BVA Graphic & Communication Design', href: '/academics/bva-graphic-design' },
          { name: 'BVA Interior & Spatial Design', href: '/academics/bva-interior-spatial-design' },

          { name: 'BVA Animation & Game Art', href: '/bva-animation-and-multimedia-game-design' },
          { name: 'BCA with UI/UX & AI/ML', href: '/academics/b-computer-application-ui-ux' },
          { name: 'BCA with Data Analytics & Cyber Security', href: '/academics/bca-data-analytics-cyber-security' }
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
      { name: 'Scholarships & Support', href: '/admissions/fees-scholarships' },
      { name: 'Schedule a counselling call', href: '/request-information' },
      { name: 'Schedule a Campus Visit', href: '/plan-a-visit' },
      { name: 'Accommodation and Transport', href: '/housing-transport' },
      { name: 'Skill-Enhancing Electives', href: '/academics/skill-enhancing-electives' },
      { name: 'Studio BSD', href: '/studio-bsd' },
      { name: 'We Go Beyond Curriculum', href: '/we-go-beyond-curriculum' },
      { name: 'FAQs', href: '/request-information' }
    ]
  },
  {
    name: 'Discover BSDT',
    href: '#campus-life',
    type: 'dropdown',
    items: [
      { name: 'Student Spotlight', href: '/student-spotlight' },
      { name: 'Student Clubs', href: '/student-clubs' },
      { name: 'Student Experience', href: '/student-experience' },
      { name: 'Events & Activities', href: '/campus-life/events-activities' },
      { name: 'Alumni & Placement Stories', href: '/alumni-stories' },
      { name: 'Accommodation & Transport', href: '/housing-transport' }
    ]
  },
  {
    name: 'About',
    href: '#about',
    type: 'dropdown',
    items: [
      { name: 'About BSDT', href: '/about' },
      { name: 'Our Team', href: '/faculty' },
      { name: 'Leadership & Governance', href: '/leadership' },
      { name: 'Careers', href: '/careers' }
    ]
  },
  {
    name: 'Futr School',
    href: 'https://futrschool.edmingle.com/',
    type: 'link'
  }
];
