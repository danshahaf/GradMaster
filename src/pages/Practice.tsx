import { useState } from "react";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { createClient } from "@/lib/supabase";
import Navigation from "@/components/Navigation";
import SectionSelector from "@/components/practice/SectionSelector";
import PracticeInterface from "@/components/practice/PracticeInterface";



const Practice = () => {
  

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8 mt-16">
        <SectionSelector/>
      </div>
    </div>
  );
};

export default Practice;