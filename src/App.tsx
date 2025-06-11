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
import LeadershipGovernance from "./pages/LeadershipGovernance";
import ProgramInteriorDesign from "./pages/ProgramInteriorDesign";
import ProgramGraphicDesign from "./pages/ProgramGraphicDesign";
import ProgramAnimationGameDesign from "./pages/ProgramAnimationGameDesign";
import ProgramBCA from "./pages/ProgramBCA";
import ProgramBScCS from "./pages/ProgramBScCS";
import ProgramInteractionExperience from "./pages/ProgramInteractionExperience";
import ProgramArchitecturalDesign from "./pages/ProgramArchitecturalDesign";
import DiplomaProgramGraphicUIUX from "./pages/diploma/DiplomaProgramGraphicUIUX";
import DiplomaProgramInteriorDesign from "./pages/diploma/DiplomaProgramInteriorDesign";
import DiplomaProgramHCIUIUX from "./pages/diploma/DiplomaProgramHCIUIUX";
import DiplomaProgramLandscapeDesign from "./pages/diploma/DiplomaProgramLandscapeDesign";
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
              <Route path="/leadership" element={<LeadershipGovernance />} />
              <Route path="/academics/bsc-interior-design" element={<ProgramInteriorDesign />} />
              <Route path="/academics/bva-graphic-design" element={<ProgramGraphicDesign />} />
              <Route path="/bva-animation-and-multimedia-game-design" element={<ProgramAnimationGameDesign />} />
              <Route path="/academics/b-computer-application-ui-ux" element={<ProgramBCA />} />
              <Route path="/programs/bsc-cs-analytics-security" element={<ProgramBScCS />} />
              <Route path="/academics/b-des-interaction-and-experience-design" element={<ProgramInteractionExperience />} />
              <Route path="/academics/b-des-architectural-design" element={<ProgramArchitecturalDesign />} />
              <Route path="/programs/bdes-architectural-construction" element={<ProgramArchitecturalDesign />} />
              <Route path="/placement-report" element={<PlacementReport />} />
              
              {/* Diploma Program Routes */}
              <Route path="/academics/professional-diploma-graphics-design-ui-ux" element={<DiplomaProgramGraphicUIUX />} />
              <Route path="/academics/professional-diploma-in-interior-design" element={<DiplomaProgramInteriorDesign />} />
              <Route path="/programs/diploma-hci-uiux" element={<DiplomaProgramHCIUIUX />} />
              <Route path="/academics/diploma-in-hci-for-ui-ux" element={<DiplomaProgramHCIUIUX />} /> 
              <Route path="/academics/post-graduate-diploma-in-landscape-design" element={<DiplomaProgramLandscapeDesign />} />
              
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
};

export default App;
