import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { AuthProvider } from "@/contexts/AuthContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Practice from "./pages/Practice";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import StudyMaterials from "./pages/StudyMaterials";
import QuantitativeReasoning from "./pages/QuantitativeReasoning";
import VerbalReasoning from "./pages/VerbalReasoning";
import TipsStrategies from "./pages/TipsStrategies";
import AnalyticWritingTips from "./pages/AnalyticWritingTips";
import VerbalReasoningPractice from "./pages/VerbalReasoningPractice";
import QuantitativePractice from "./pages/QuantitativePractice";
import VocabPractice from "./pages/VocabPractice";
import IntegratedPractice from "./pages/IntegratedPractice";
import Settings from "./pages/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="gre-sage-theme">
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Navigate to="/practice" replace />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/practice" element={<Practice />} />
                <Route path="/study-materials" element={<StudyMaterials />} />
                <Route path="/study-materials/quantitative" element={<QuantitativeReasoning />} />
                <Route path="/study-materials/verbal" element={<VerbalReasoning />} />
                <Route path="/study-materials/tips" element={<TipsStrategies />} />
                <Route path="/study-materials/analytical" element={<AnalyticWritingTips />} />
                <Route path="/practice/verbal-reasoning" element={<VerbalReasoningPractice />} />
                <Route path="/practice/quantitative" element={<QuantitativePractice />} />
                <Route path="/practice/vocabulary" element={<VocabPractice />} />
                <Route path="/practice/integrated" element={<IntegratedPractice />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AnimatePresence>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;