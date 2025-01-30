import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { BookOpen, Brain, Target, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const StudyMaterials = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Link to="/study-materials/verbal">
            <Card className="p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Verbal Reasoning</h3>
                  <p className="text-sm text-muted-foreground">
                    Reading comprehension, text completion, and sentence equivalence guides.
                  </p>
                </div>
              </div>
            </Card>
          </Link>

          <Link to="/study-materials/quantitative">
            <Card className="p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Quantitative Reasoning</h3>
                  <p className="text-sm text-muted-foreground">
                    Math concepts, formulas, and problem-solving strategies.
                  </p>
                </div>
              </div>
            </Card>
          </Link>

          <Link to="/study-materials/analytical">
            <Card className="p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Analytical Writing</h3>
                  <p className="text-sm text-muted-foreground">
                    Essay templates and writing strategies.
                  </p>
                </div>
              </div>
            </Card>
          </Link>

          <Link to="/study-materials/tips">
            <Card className="p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Tips & Strategies</h3>
                  <p className="text-sm text-muted-foreground">
                    Time management, test-taking strategies, and score improvement tips.
                  </p>
                </div>
              </div>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StudyMaterials;