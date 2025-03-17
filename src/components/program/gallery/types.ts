
// Define common types for the student gallery components

export interface Project {
  id: number;
  title: string;
  student: string;
  year: string;
  image: string;
}

export interface ProjectCategory {
  id: string;
  name: string;
}

export interface ProjectCollection {
  [key: string]: Project[];
}
