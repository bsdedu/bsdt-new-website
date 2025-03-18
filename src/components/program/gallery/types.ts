
// Define common types for the student gallery components

export interface Project {
  id: string; // Changed from number to string to match the architectural projects format
  title: string;
  description?: string; // Make description optional
  student: string;
  year: string;
  semester?: string; // Make semester optional
  image: string;
}

export interface ProjectCategory {
  id: string;
  name: string;
}

export interface ProjectCollection {
  [key: string]: Project[];
}
