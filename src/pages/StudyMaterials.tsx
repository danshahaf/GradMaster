import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { BookOpen, Brain, Target, Lightbulb, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const StudyMaterials = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Study Materials Section */}
          <section>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
            </div>
          </section>

          {/* Tips & Strategies Section */}
          <section>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link to="/study-materials/time-management">
                <Card className="p-6 hover:shadow-lg transition-shadow duration-200">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Clock className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Time Management</h3>
                      <p className="text-sm text-muted-foreground">
                        Effective strategies for managing exam time and pacing.
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>

              <Link to="/study-materials/test-strategies">
                <Card className="p-6 hover:shadow-lg transition-shadow duration-200">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Lightbulb className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Test-Taking Strategies</h3>
                      <p className="text-sm text-muted-foreground">
                        Proven techniques for different question types.
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>

              <Link to="/study-materials/score-improvement">
                <Card className="p-6 hover:shadow-lg transition-shadow duration-200">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Target className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Score Improvement</h3>
                      <p className="text-sm text-muted-foreground">
                        Tips for improving scores in each section.
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default StudyMaterials;