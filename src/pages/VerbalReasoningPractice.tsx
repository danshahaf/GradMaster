import Navigation from "@/components/Navigation";
import React from 'react';
import { MessageCircleQuestion, StepForward } from 'lucide-react';

import { Card } from "@/components/ui/card"

const VerbalReasoningPractice = () => {
  return (
    <div className="main-h-screen bg-background flex flex-col">
      <Navigation />
      <div className="container mx-auto ox-4 py-8 mt-16 flex flex-col flex-grow">
        <h1 className="text-3xl font-bold mb-6">Verbal Reasoning Practice</h1>
        <Card className="flex flex-col flex-grow py-6 px-10">
          <h2 className = "text-xl font-bold">
            The question goes here
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2">
            {/* This is where the answers are TODO: need to add a button to explain the answer after an option was selected*/}
            <button className="border m-2 font-bold bg-secondary py-4 px-6 rounded-md hover:bg-primary transition"> 
              Option 1
            </button>

            <button className="border m-2 font-bold bg-secondary py-4 px-6 rounded-md hover:bg-primary transition"> 
              Option 2
            </button>

            <button className="border m-2 font-bold bg-secondary py-4 px-6 rounded-md hover:bg-primary transition"> 
              Option 3
            </button>

            <button className="border m-2 font-bold bg-secondary py-4 px-6 rounded-md hover:bg-primary transition"> 
              Option 4
            </button>
          </div>

          <div className="flex justify-between w-full mt-4">
            <button className="bg-primary text-white px-4 py-2 w-1/4 rounded-md flex items-center justify-center gap-2">
              Explain
              <MessageCircleQuestion />
            </button>
            <button className="bg-primary text-white px-4 py-2 w-1/4 rounded-md flex items-center justify-center gap-2">
              Next Question
              <StepForward />
            </button>
          </div>

          
        </Card>
      </div>
    </div>
  );
};

export default VerbalReasoningPractice;