import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { BookOpen, Brain, Target, Lightbulb, Clock } from "lucide-react";

const StudyMaterials = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-foreground">Study Materials & Strategies</h1>
        
        <div className="space-y-8">
          {/* Study Materials Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-foreground">Study Materials</h2>
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
          </section>

          {/* Tips & Strategies Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-foreground">Tips & Strategies</h2>
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
          </section>
        </div>
      </div>
    </div>
  );
};

export default StudyMaterials;