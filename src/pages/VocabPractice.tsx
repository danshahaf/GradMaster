import React from 'react';
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { CircleChevronUp } from 'lucide-react';


const VocabPractice = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <div className="container mx-auto px-4 py-8 mt-16 flex flex-col flex-grow">
        <h1 className="text-3xl font-bold mb-6">Vocab Enhancement</h1>
        
        <Card className="flex flex-col flex-grow">
          <ScrollArea className="flex-grow p-4 h-96 overflow-auto">
            {/* Content Goes Here */}
          </ScrollArea>

          <div className="p-4 m-6 flex items-center">
            <input 
              type="text" 
              placeholder="Type here..." 
              className="flex-grow px-3 py-2 border rounded-md focus:outline-none bg-background"
            />
            <button className="ml-2 px-3 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition">
              <CircleChevronUp />
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default VocabPractice;
