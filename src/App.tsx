
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutBSDT from "./pages/AboutBSDT";
import LeadershipGovernance from "./pages/LeadershipGovernance";
import ProgramInteriorDesign from "./pages/ProgramInteriorDesign";
import ProgramGraphicDesign from "./pages/ProgramGraphicDesign";
import ProgramAnimationGameDesign from "./pages/ProgramAnimationGameDesign";
import ProgramComputerScience from "./pages/ProgramComputerScience";
import ProgramBCA from "./pages/ProgramBCA";

const queryClient = new QueryClient();

const App = () => (
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
            <Route path="/programs/bsc-cs-analytics-security" element={<ProgramComputerScience />} />
            <Route path="/programs/bca-uiux-aiml" element={<ProgramBCA />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
