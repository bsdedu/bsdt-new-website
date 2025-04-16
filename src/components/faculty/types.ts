
export type Department = 
  'Design' | 
  'Technology' | 
  'International Faculty' |
  'Guest Faculty' |
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
