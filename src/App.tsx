
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { FloatingEnquiryForm } from "./components/ui-elements/FloatingEnquiryForm";
import { FloatingCallCTA } from "./components/ui-elements/FloatingCallCTA";
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
import ApplicationProcess from "./pages/admissions/ApplicationProcess";
import FeesScholarships from "./pages/admissions/FeesScholarships";
import ScheduleVisit from "./pages/admissions/ScheduleVisit";
import Faculty from "./pages/admissions/Faculty";
import StudioBSD from "./pages/admissions/StudioBSD";
import BeyondCurriculum from "./pages/admissions/BeyondCurriculum";
import FAQs from "./pages/admissions/FAQs";
import PlacementReport from "./pages/PlacementReport";
import HostelTransport from "./pages/campus-life/HostelTransport";
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
              <Route path="/about-bsdt" element={<AboutBSDT />} />
              <Route path="/leadership-governance" element={<LeadershipGovernance />} />
              <Route path="/programs/bsc-interior-design" element={<ProgramInteriorDesign />} />
              <Route path="/programs/bva-graphic-design" element={<ProgramGraphicDesign />} />
              <Route path="/programs/bva-animation-game-design" element={<ProgramAnimationGameDesign />} />
              <Route path="/programs/bca-uiux-aiml" element={<ProgramBCA />} />
              <Route path="/programs/bsc-cs-analytics-security" element={<ProgramBScCS />} />
              <Route path="/programs/bdes-interaction-experience" element={<ProgramInteractionExperience />} />
              <Route path="/programs/bdes-architectural-design" element={<ProgramArchitecturalDesign />} />
              <Route path="/programs/bdes-architectural-construction" element={<ProgramArchitecturalDesign />} />
              <Route path="/placement-report" element={<PlacementReport />} />
              
              {/* Diploma Program Routes */}
              <Route path="/programs/diploma-graphic-uiux" element={<DiplomaProgramGraphicUIUX />} />
              <Route path="/programs/diploma-interior-design" element={<DiplomaProgramInteriorDesign />} />
              
              {/* Admissions Routes */}
              <Route path="/admissions/application-process" element={<ApplicationProcess />} />
              <Route path="/admissions/fees-scholarships" element={<FeesScholarships />} />
              <Route path="/admissions/schedule-visit" element={<ScheduleVisit />} />
              <Route path="/admissions/faculty" element={<Faculty />} />
              <Route path="/admissions/studio-bsd" element={<StudioBSD />} />
              <Route path="/admissions/beyond-curriculum" element={<BeyondCurriculum />} />
              <Route path="/admissions/faqs" element={<FAQs />} />
              
              {/* Campus Life Routes */}
              <Route path="/campus-life/hostel-transport" element={<HostelTransport />} />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <FloatingEnquiryForm />
            <FloatingCallCTA />
          </BrowserRouter>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;
