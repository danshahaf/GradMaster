import React from 'react';
import Navigation from "@/components/Navigation";
import { MessageCircleQuestion, StepForward } from 'lucide-react';
import { Card } from "@/components/ui/card";

const QuantitativePractice = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <div className="container mx-auto px-4 py-8 mt-16 flex flex-col">
        <h1 className="text-3xl font-bold mb-6">Quantitative Practice</h1>

        {/* Multiple Choice Question Card */}
        <Card className="p-6 mb-6">
          <h2 className="text-xl font-bold">The question goes here</h2>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <button className="border font-bold bg-secondary py-3 px-6 rounded-md hover:bg-primary transition">
              Option 1
            </button>
            <button className="border font-bold bg-secondary py-3 px-6 rounded-md hover:bg-primary transition">
              Option 2
            </button>
            <button className="border font-bold bg-secondary py-3 px-6 rounded-md hover:bg-primary transition">
              Option 3
            </button>
            <button className="border font-bold bg-secondary py-3 px-6 rounded-md hover:bg-primary transition">
              Option 4
            </button>
          </div>

          <div className="flex justify-between w-full mt-6">
            <button className="bg-primary text-white px-4 py-2 w-1/4 rounded-md flex items-center justify-center gap-2">
              <MessageCircleQuestion />
              Explain
            </button>
            <button className="bg-primary text-white px-4 py-2 w-1/4 rounded-md flex items-center justify-center gap-2">
              Next Question
              <StepForward />
            </button>
          </div>
        </Card>

        {/* Open-ended Question Card */}
        <Card className="p-6">
          <h2 className="text-xl font-bold">The question goes here</h2>

          <div className="mt-6 flex items-center w-full gap-4">
            <button className="bg-primary text-white px-4 py-2 w-1/5 rounded-md flex items-center justify-center gap-2">
              <MessageCircleQuestion />
              Explain
            </button>
            
            <input 
              type="text" 
              placeholder="Type your answer here..." 
              className="w-3/5 px-4 py-3 border rounded-md focus:outline-none bg-background"
            />

            <button className="bg-primary text-white px-4 py-2 w-1/5 rounded-md flex items-center justify-center gap-2">
              Next Question
              <StepForward />
            </button>
          </div>
        </Card>

      </div>
    </div>
  );
};

export default QuantitativePractice;
