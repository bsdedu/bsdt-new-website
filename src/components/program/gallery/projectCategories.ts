
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
  
  // Architectural Design categories - fixed to use array instead of accessing properties
  architectural: architecturalProjects || [],
  construction: [],
  sustainable: [],
};

// Now we need to make sure that the Project type is also defined here
// so that we can use it in the ProjectCategories type
import { Project } from './types';

// Export helper functions that projectsData.ts is expecting
export const getProjectCategories = (programPath: string): string[] => {
  if (programPath.includes('interior-design')) {
    return ['residential', 'commercial', 'conceptual'];
  } else if (programPath.includes('animation-game-design')) {
    return ['animation', 'game', 'character'];
  } else if (programPath.includes('bca-uiux-aiml')) {
    return ['uiux', 'aiml', 'webapps'];
  } else if (programPath.includes('bdes-interaction-experience')) {
    return ['ux', 'ui', 'interactive'];
  } else if (programPath.includes('bdes-architectural')) {
    return ['architectural', 'construction', 'sustainable'];
  }
  // Default to graphic design categories
  return ['branding', 'digital', 'print'];
};

export const getDefaultTabValue = (programPath: string): string => {
  if (programPath.includes('interior-design')) {
    return 'residential';
  } else if (programPath.includes('animation-game-design')) {
    return 'animation';
  } else if (programPath.includes('bca-uiux-aiml')) {
    return 'uiux';
  } else if (programPath.includes('bdes-interaction-experience')) {
    return 'ux';
  } else if (programPath.includes('bdes-architectural')) {
    return 'architectural';
  }
  // Default to graphic design branding
  return 'branding';
};
