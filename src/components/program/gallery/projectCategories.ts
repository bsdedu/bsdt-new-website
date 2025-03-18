
import { ProjectCategory } from './types';

// Categories based on program type
export const getProjectCategories = (programPath: string): ProjectCategory[] => {
  const isInteriorDesignProgram = programPath.includes('interior-design');
  const isAnimationGameProgram = programPath.includes('animation-game-design');
  const isBcaProgram = programPath.includes('bca-uiux-aiml');
  const isInteractionDesignProgram = programPath.includes('bdes-interaction-experience');
  const isArchitecturalDesignProgram = programPath.includes('bdes-architectural');
  
  if (isInteriorDesignProgram) {
    return [
      { id: "residential", name: "Residential Spaces" },
      { id: "commercial", name: "Commercial Projects" },
      { id: "conceptual", name: "Conceptual Designs" },
    ];
  } else if (isAnimationGameProgram) {
    return [
      { id: "animation", name: "3D Animation" },
      { id: "game", name: "Game Design" },
      { id: "character", name: "Character Design" },
    ];
  } else if (isBcaProgram) {
    return [
      { id: "uiux", name: "UI/UX Design" },
      { id: "aiml", name: "AI & ML Projects" },
      { id: "webapps", name: "Web & Mobile Apps" },
    ];
  } else if (isInteractionDesignProgram) {
    return [
      { id: "ux", name: "UX Case Studies" },
      { id: "ui", name: "UI Design" },
      { id: "interactive", name: "Interactive Media" },
    ];
  } else if (isArchitecturalDesignProgram) {
    return [
      { id: "architectural", name: "Architectural Design" },
      { id: "construction", name: "Construction Models" },
      { id: "sustainable", name: "Sustainable Design" },
    ];
  } else {
    // Default to graphic design
    return [
      { id: "branding", name: "Branding Projects" },
      { id: "digital", name: "Digital Design" },
      { id: "print", name: "Print & Editorial" },
    ];
  }
};

// Helper function to get default tab value based on program
export const getDefaultTabValue = (programPath: string): string => {
  if (programPath.includes('interior-design')) {
    return "residential";
  } else if (programPath.includes('animation-game-design')) {
    return "animation";
  } else if (programPath.includes('bca-uiux-aiml')) {
    return "uiux";
  } else if (programPath.includes('bdes-interaction-experience')) {
    return "ux";
  } else if (programPath.includes('bdes-architectural')) {
    return "architectural";
  }
  // Default to graphic design
  return "branding";
};
