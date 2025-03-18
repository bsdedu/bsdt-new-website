
import { Project } from './types';
import { interiorProjects } from './interiorProjects';
import { graphicProjects } from './graphicProjects';
import { animationProjects } from './animationProjects';
import { bcaProjects } from './bcaProjects';
import { interactionProjects } from './interactionProjects';
import { architecturalProjects } from './architecturalProjects';

// Function to get default tab value for a program
export const getDefaultTabValue = (programPath: string): string => {
  if (programPath.includes('interior-design')) return 'residential';
  if (programPath.includes('animation-game-design')) return 'animation';
  if (programPath.includes('bca-uiux-aiml')) return 'uiux';
  if (programPath.includes('bdes-interaction-experience')) return 'ux';
  if (programPath.includes('bdes-architectural')) return 'architectural';
  return 'branding'; // Default for graphic design
};

// Function to get project categories for a program
export const getProjectCategories = (programPath: string): string[] => {
  if (programPath.includes('interior-design')) return ['residential', 'commercial', 'conceptual'];
  if (programPath.includes('animation-game-design')) return ['animation', 'game', 'character'];
  if (programPath.includes('bca-uiux-aiml')) return ['uiux', 'aiml', 'webapps'];
  if (programPath.includes('bdes-interaction-experience')) return ['ux', 'ui', 'interactive'];
  if (programPath.includes('bdes-architectural')) return ['architectural', 'construction', 'sustainable'];
  return ['branding', 'digital', 'print']; // Default for graphic design
};

// Map of category names to their project arrays
export const projectCategories: Record<string, Project[]> = {
  // Interior Design
  residential: interiorProjects && Array.isArray(interiorProjects.residential) ? interiorProjects.residential : [],
  commercial: interiorProjects && Array.isArray(interiorProjects.commercial) ? interiorProjects.commercial : [],
  conceptual: interiorProjects && Array.isArray(interiorProjects.conceptual) ? interiorProjects.conceptual : [],
  
  // Graphic Design
  branding: graphicProjects && Array.isArray(graphicProjects.branding) ? graphicProjects.branding : [],
  digital: graphicProjects && Array.isArray(graphicProjects.digital) ? graphicProjects.digital : [],
  print: graphicProjects && Array.isArray(graphicProjects.print) ? graphicProjects.print : [],
  
  // Animation & Game Design
  animation: animationProjects && Array.isArray(animationProjects.animation) ? animationProjects.animation : [],
  game: animationProjects && Array.isArray(animationProjects.game) ? animationProjects.game : [],
  character: animationProjects && Array.isArray(animationProjects.character) ? animationProjects.character : [],
  
  // BCA Program
  uiux: bcaProjects && Array.isArray(bcaProjects.uiux) ? bcaProjects.uiux : [],
  aiml: bcaProjects && Array.isArray(bcaProjects.aiml) ? bcaProjects.aiml : [],
  webapps: bcaProjects && Array.isArray(bcaProjects.webapps) ? bcaProjects.webapps : [],
  
  // Interaction & Experience Design
  ux: interactionProjects && Array.isArray(interactionProjects.ux) ? interactionProjects.ux : [],
  ui: interactionProjects && Array.isArray(interactionProjects.ui) ? interactionProjects.ui : [],
  interactive: interactionProjects && Array.isArray(interactionProjects.interactive) ? interactionProjects.interactive : [],
  
  // Architectural Design
  architectural: architecturalProjects
};
