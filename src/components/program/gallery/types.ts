
// Define common types for the student gallery components

export interface Project {
  id: string;
  title: string;
  description?: string;
  student: string;
  year: string;
  semester?: string;
  image: string;
  images?: string[]; // Support for multiple images per project
}

export interface ProjectCategory {
  id: string;
  name: string;
}

export interface ProjectCollection {
  [key: string]: Project[];
}
