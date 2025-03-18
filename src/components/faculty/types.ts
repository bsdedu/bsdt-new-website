
export type Department = 
  'Design' | 
  'Architecture' | 
  'Technology' | 
  'Management' | 
  'International Faculty' |
  'Guest Faculty' |
  'Design Mentors' |
  'Languages & Skill Enhancement' |
  'Tech' |
  'Graphic Design & UI/UX' |
  'Interior, Architecture & Landscape Design' |
  'All';

export interface FacultyMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  department: Department | Department[];
  qualifications?: string;
  specialization?: string;
  achievements?: string;
}
