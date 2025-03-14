
export type SubItem = {
  name: string;
  href: string;
};

export type NavStructure = {
  name: string;
  href: string;
  type: 'dropdown' | 'link';
  items?: SubItem[];
};

// Main navigation structure with nested menus
export const navStructure: NavStructure[] = [
  {
    name: 'About',
    href: '#about',
    type: 'dropdown',
    items: [
      { name: 'About BSD', href: '/about-bsdt' },
      { name: 'Leadership & Governance', href: '/leadership-governance' }
    ]
  },
  {
    name: 'Programs',
    href: '#programs',
    type: 'dropdown',
    items: [
      { name: 'Design Programs', href: '#design-programs' },
      { name: 'Technology Programs', href: '#technology-programs' },
      { name: 'Professional Certificate Courses', href: '#certificate-courses' },
      { name: 'Executive Education', href: '#executive-education' }
    ]
  },
  {
    name: 'Admissions',
    href: '#admissions',
    type: 'dropdown',
    items: [
      { name: 'Application Process', href: '#application-process' },
      { name: 'Eligibility', href: '#eligibility' },
      { name: 'Fees & Scholarships', href: '#fees-scholarships' },
      { name: 'FAQs', href: '#faqs' }
    ]
  },
  {
    name: 'Campus Life',
    href: '#campus-life',
    type: 'dropdown',
    items: [
      { name: 'Student Experience', href: '#student-experience' },
      { name: 'Facilities', href: '#facilities' },
      { name: 'Events & Activities', href: '#events' },
      { name: 'Accommodation', href: '#accommodation' }
    ]
  },
  {
    name: 'Contact',
    href: '#contact',
    type: 'link'
  }
];
