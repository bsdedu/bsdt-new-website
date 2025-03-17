
export type Department = 'Design' | 'Architecture' | 'Technology' | 'Management' | 'All';

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
