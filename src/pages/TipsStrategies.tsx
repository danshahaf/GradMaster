import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { Lightbulb, Clock, Target } from "lucide-react";

const TipsStrategies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-foreground">Tips & Strategies</h1>
        
        <div className="grid grid-cols-1 gap-6">
          <Card className="p-6 hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Time Management</h3>
            </div>
            <p className="text-muted-foreground">
              Learn effective strategies for managing your time during the exam. Practice with timed sections and develop a personalized approach to pacing.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Test-Taking Strategies</h3>
            </div>
            <p className="text-muted-foreground">
              Master proven techniques for approaching different question types. Learn when to guess, when to skip, and how to eliminate wrong answers effectively.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Score Improvement Tips</h3>
            </div>
            <p className="text-muted-foreground">
              Discover targeted strategies for improving your score in each section. Get expert advice on common pitfalls to avoid and best practices to follow.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TipsStrategies;