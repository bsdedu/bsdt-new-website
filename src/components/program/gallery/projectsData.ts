
import { ProjectCollection } from './types';
import { interiorProjects } from './interiorProjects';
import { graphicProjects } from './graphicProjects';
import { animationProjects } from './animationProjects';
import { bcaProjects } from './bcaProjects';
import { interactionProjects } from './interactionProjects';
import { architecturalProjects } from './architecturalProjects';
import { projectCategories, getProjectCategories, getDefaultTabValue } from './projectCategories';

// Function to get projects for a specific program
export const getProjectsForProgram = (programPath: string): ProjectCollection => {
  if (programPath.includes('interior-design')) {
    return interiorProjects;
  } else if (programPath.includes('animation-game-design')) {
    return animationProjects;
  } else if (programPath.includes('bca-uiux-aiml')) {
    return bcaProjects;
  } else if (programPath.includes('bdes-interaction-experience')) {
    return interactionProjects;
  } else if (programPath.includes('bdes-architectural')) {
    // Create a ProjectCollection for architectural projects which is currently just an array
    return { architectural: architecturalProjects, construction: [], sustainable: [] };
  } else if (programPath.includes('diploma-uiux')) {
    // For the UI/UX diploma program, use the UX projects from the interaction design program
    return { uiux: interactionProjects.ux, interface: interactionProjects.ui, mobile: interactionProjects.interactive };
  }
  // Default to graphic design projects
  return graphicProjects;
};

export { getProjectCategories, getDefaultTabValue, projectCategories };
