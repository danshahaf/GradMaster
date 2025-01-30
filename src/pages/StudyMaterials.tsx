import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { BookOpen, Brain, Target } from "lucide-react";

const StudyMaterials = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-foreground">Study Materials</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Verbal Reasoning</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive guides and practice materials for reading comprehension, text completion, and sentence equivalence.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Quantitative Reasoning</h3>
                <p className="text-sm text-muted-foreground">
                  In-depth coverage of arithmetic, algebra, geometry, and data analysis concepts.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Analytical Writing</h3>
                <p className="text-sm text-muted-foreground">
                  Templates and strategies for issue and argument tasks with sample essays.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StudyMaterials;