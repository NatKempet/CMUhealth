import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import NotFound from "./pages/NotFound";
import StudentMedicalServices from "./pages/services/StudentMedicalServices";
import DentalServices from "./pages/services/DentalServices";
import FreeMedication from "./pages/services/FreeMedication";
import AccidentTreatment from "./pages/services/AccidentTreatment";
import CovidTreatment from "./pages/services/CovidTreatment";
import InternationalStudents from "./pages/services/InternationalStudents";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/student-medical-services" element={<StudentMedicalServices />} />
          <Route path="/dental-services" element={<DentalServices />} />
          <Route path="/free-medication" element={<FreeMedication />} />
          <Route path="/accident-treatment" element={<AccidentTreatment />} />
          <Route path="/covid-treatment" element={<CovidTreatment />} />
          <Route path="/international-students" element={<InternationalStudents />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
