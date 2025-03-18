
import { Project } from './types';
import { interiorProjects } from './interiorProjects';
import { graphicProjects } from './graphicProjects';
import { animationProjects } from './animationProjects';
import { bcaProjects } from './bcaProjects';
import { interactionProjects } from './interactionProjects';
import { architecturalProjects } from './architecturalProjects';

// Map of category names to their project arrays
export const projectCategories: Record<string, Project[]> = {
  interior: interiorProjects,
  graphic: graphicProjects,
  animation: animationProjects,
  bca: bcaProjects,
  interaction: interactionProjects,
  architectural: architecturalProjects,
};
