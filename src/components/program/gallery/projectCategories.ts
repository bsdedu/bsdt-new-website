
import { ProjectCollection } from './types';
import { graphicProjects } from './graphicProjects';
import { animationProjects } from './animationProjects';
import { bcaProjects } from './bcaProjects';
import { interactionProjects } from './interactionProjects';
import { interiorProjects } from './interiorProjects';
import { architecturalProjects } from './architecturalProjects';

// Export all project categories for easy access
export const projectCategories: Record<string, Project[]> = {
  // Graphic Design categories
  branding: graphicProjects.branding || [],
  digital: graphicProjects.digital || [],
  print: graphicProjects.print || [],
  
  // Animation & Game Design categories
  animation: animationProjects.animation || [],
  game: animationProjects.game || [],
  character: animationProjects.character || [],
  
  // BCA categories
  uiux: bcaProjects.uiux || [],
  aiml: bcaProjects.aiml || [],
  webapps: bcaProjects.webapps || [],
  
  // Interior Design categories
  residential: interiorProjects.residential || [],
  commercial: interiorProjects.commercial || [],
  conceptual: interiorProjects.conceptual || [],
  
  // Interaction & Experience Design categories
  ux: interactionProjects.ux || [],
  ui: interactionProjects.ui || [],
  interactive: interactionProjects.interactive || [],
  
  // Architectural Design categories
  architectural: architecturalProjects.architectural || [],
  construction: architecturalProjects.construction || [],
  sustainable: architecturalProjects.sustainable || [],
};

// Now we need to make sure that the Project type is also defined here
// so that we can use it in the ProjectCategories type
import { Project } from './types';
