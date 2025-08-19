
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; // Updated import
import { HelmetProvider } from 'react-helmet-async';
import { FloatingEnquiryForm } from "./components/ui-elements/FloatingEnquiryForm";
import { FloatingCallCTA } from "./components/ui-elements/FloatingCallCTA";
import { FloatingWhatsAppCTA } from "./components/ui-elements/FloatingWhatsAppCTA";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutBSDT from "./pages/AboutBSDT";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import LeadershipGovernance from "./pages/LeadershipGovernance";
import ProgramInteriorDesign from "./pages/ProgramInteriorDesign";
import ProgramFashionDesign from "./pages/ProgramFashionDesign";
import ProgramProductDesign from "./pages/ProgramProductDesign";
import ProgramGraphicDesign from "./pages/ProgramGraphicDesign";
import ProgramAnimationGameDesign from "./pages/ProgramAnimationGameDesign";
import ProgramBCA from "./pages/ProgramBCA";
import ProgramBScCS from "./pages/ProgramBScCS";
import ProgramInteractionExperience from "./pages/ProgramInteractionExperience";
import ProgramArchitecturalDesign from "./pages/ProgramArchitecturalDesign";
import ProgramInteriorSpatialDesign from "./pages/ProgramInteriorSpatialDesign";
import DiplomaProgramGraphicUIUX from "./pages/diploma/DiplomaProgramGraphicUIUX";
import DiplomaProgramInteriorDesign from "./pages/diploma/DiplomaProgramInteriorDesign";
import DiplomaProgramHCIUIUX from "./pages/diploma/DiplomaProgramHCIUIUX";
import DiplomaProgramLandscapeDesign from "./pages/diploma/DiplomaProgramLandscapeDesign";
import DiplomaProgramSustainableCircularDesign from "./pages/diploma/DiplomaProgramSustainableCircularDesign";
import DiplomaProgramAIServiceDesign from "./pages/diploma/DiplomaProgramAIServiceDesign";
import DiplomaProgramFashionDesign from "./pages/diploma/DiplomaProgramFashionDesign";
import DiplomaProgramMasterInteriorDesign from "./pages/diploma/DiplomaProgramMasterInteriorDesign";
import ApplicationProcess from "./pages/admissions/ApplicationProcess";
import FeesScholarships from "./pages/admissions/FeesScholarships";
import ScheduleVisit from "./pages/admissions/ScheduleVisit";
import Faculty from "./pages/admissions/Faculty";
import StudioBSD from "./pages/admissions/StudioBSD";
import BeyondCurriculum from "./pages/admissions/BeyondCurriculum";
import FAQs from "./pages/admissions/FAQs";
import PlacementReport from "./pages/PlacementReport";
import HostelTransport from "./pages/campus-life/HostelTransport";
import StudentClubs from "./pages/campus-life/StudentClubs";
import EventsActivities from "./pages/EventsActivities";
import StudentExperience from "./pages/StudentExperience";
import FutureSchool from "./pages/FutureSchool";
// Course Imports - 3 Week Programs
import GenerativeAICreativePrototyping from "./pages/courses/GenerativeAICreativePrototyping";
import VRARPrototyping from "./pages/courses/VRARPrototyping";
import ParametricDesign from "./pages/courses/ParametricDesign";
import MotionDesignEssentials from "./pages/courses/MotionDesignEssentials";
import UXResearchSprint from "./pages/courses/UXResearchSprint";
// Course Imports - 6 Week Programs
import BIMInteriorsSmallProjects from "./pages/courses/BIMInteriorsSmallProjects";
import UIDesignSystemsFigma from "./pages/courses/UIDesignSystemsFigma";
import ThreeDCharacterModeling from "./pages/courses/3DCharacterModeling";
import BrandIdentityPackaging from "./pages/courses/BrandIdentityPackaging";
import DigitalFashionTechPacks from "./pages/courses/DigitalFashionTechPacks";
import AppliedAIDesignAutomation from "./pages/courses/AppliedAIDesignAutomation";
import { useEffect } from "react";

console.log("App component loaded");

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    console.log("App component mounted");
    return () => {
      console.log("App component unmounted");
    };
  }, []);

  console.log("App rendering");
  
  try {
    return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<AboutBSDT />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/leadership" element={<LeadershipGovernance />} />
              <Route path="/academics/bsc-interior-design" element={<ProgramInteriorDesign />} />
              <Route path="/academics/bsc-fashion-design" element={<ProgramFashionDesign />} />
              <Route path="/academics/bva-graphic-design" element={<ProgramGraphicDesign />} />
              <Route path="/academics/bva-product-design" element={<ProgramProductDesign />} />
              <Route path="/bva-animation-and-multimedia-game-design" element={<ProgramAnimationGameDesign />} />
              <Route path="/academics/b-computer-application-ui-ux" element={<ProgramBCA />} />
              <Route path="/programs/bsc-cs-analytics-security" element={<ProgramBScCS />} />
              <Route path="/academics/b-des-interaction-and-experience-design" element={<ProgramInteractionExperience />} />
              <Route path="/academics/b-des-architectural-design" element={<ProgramArchitecturalDesign />} />
              <Route path="/academics/bva-interior-spatial-design" element={<ProgramInteriorSpatialDesign />} />
              <Route path="/programs/bdes-architectural-construction" element={<ProgramArchitecturalDesign />} />
              <Route path="/placement-report" element={<PlacementReport />} />
              
              {/* Diploma Program Routes */}
              <Route path="/academics/professional-diploma-graphics-design-ui-ux" element={<DiplomaProgramGraphicUIUX />} />
              <Route path="/academics/professional-diploma-in-interior-design" element={<DiplomaProgramInteriorDesign />} />
              <Route path="/programs/diploma-hci-uiux" element={<DiplomaProgramHCIUIUX />} />
              <Route path="/academics/diploma-in-hci-for-ui-ux" element={<DiplomaProgramHCIUIUX />} /> 
              <Route path="/academics/post-graduate-diploma-in-landscape-design" element={<DiplomaProgramLandscapeDesign />} />
              <Route path="/academics/professional-diploma-sustainable-circular-design" element={<DiplomaProgramSustainableCircularDesign />} />
            <Route path="/academics/professional-diploma-ai-service-design" element={<DiplomaProgramAIServiceDesign />} />
            <Route path="/academics/professional-diploma-fashion-design" element={<DiplomaProgramFashionDesign />} />
            <Route path="/academics/master-diploma-in-interior-design" element={<DiplomaProgramMasterInteriorDesign />} />
              
              {/* Admissions Routes */}
              <Route path="/admissions/application-process" element={<ApplicationProcess />} />
              <Route path="/admissions/fees-scholarships" element={<FeesScholarships />} />
              <Route path="/plan-a-visit" element={<ScheduleVisit />} />
              <Route path="/faculty" element={<Faculty />} />
              <Route path="/studio-bsd" element={<StudioBSD />} />
              <Route path="/we-go-beyond-curriculum" element={<BeyondCurriculum />} />
              <Route path="/request-information" element={<FAQs />} />
              <Route path="/design-studio-2" element={<Navigate to="/we-go-beyond-curriculum?from=design-studio-2" replace />} /> {/* Updated route */}
              <Route path="/workshops" element={<Navigate to="/we-go-beyond-curriculum?from=workshops" replace />} /> {/* New route */}
              <Route path="/guest-lectures" element={<Navigate to="/we-go-beyond-curriculum?from=guest-lectures" replace />} /> {/* New route */}
              <Route path="/off-campus-learning" element={<Navigate to="/we-go-beyond-curriculum?from=off-campus-learning" replace />} /> {/* New route */}
              <Route path="/site-visits" element={<Navigate to="/we-go-beyond-curriculum?from=site-visits" replace />} /> {/* New route */}
              
              {/* Campus Life Routes */}
              <Route path="/housing-transport" element={<HostelTransport />} />
              <Route path="/student-clubs" element={<StudentClubs />} />
              <Route path="/campus-life/events-activities" element={<EventsActivities />} />
              <Route path="/student-experience" element={<StudentExperience />} />
              
              {/* Future School Route */}
              <Route path="/future-school" element={<FutureSchool />} />
              
              {/* Course Routes - 3 Week Programs */}
              <Route path="/courses/generative-ai-creative-prototyping" element={<GenerativeAICreativePrototyping />} />
              <Route path="/courses/vr-ar-prototyping" element={<VRARPrototyping />} />
              <Route path="/courses/parametric-design" element={<ParametricDesign />} />
              <Route path="/courses/motion-design-essentials" element={<MotionDesignEssentials />} />
              <Route path="/courses/ux-research-sprint" element={<UXResearchSprint />} />
              
              {/* Course Routes - 6 Week Programs */}
              <Route path="/courses/bim-interiors-small-projects" element={<BIMInteriorsSmallProjects />} />
              <Route path="/courses/ui-design-systems-figma" element={<UIDesignSystemsFigma />} />
              <Route path="/courses/3d-character-modeling" element={<ThreeDCharacterModeling />} />
              <Route path="/courses/brand-identity-packaging" element={<BrandIdentityPackaging />} />
              <Route path="/courses/digital-fashion-tech-packs" element={<DigitalFashionTechPacks />} />
              <Route path="/courses/applied-ai-design-automation" element={<AppliedAIDesignAutomation />} />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <FloatingEnquiryForm />
            <FloatingCallCTA />
            <FloatingWhatsAppCTA />
          </BrowserRouter>
        </TooltipProvider>
      </HelmetProvider>
      </QueryClientProvider>
    );
  } catch (error) {
    console.error("Error in App component:", error);
    return <div style={{ padding: '20px', textAlign: 'center', color: 'red' }}>
      <h2>App Error</h2>
      <p>Something went wrong. Please refresh the page.</p>
      <pre>{String(error)}</pre>
    </div>;
  }
};

export default App;
