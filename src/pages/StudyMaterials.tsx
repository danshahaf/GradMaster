import Navigation from "@/components/Navigation";
import StudyCard from "@/components/study/StudyCard";
import { BookOpen, Brain, Target, Lightbulb } from "lucide-react";

const StudyMaterials = () => {
  const studyCards = [
    {
      to: "/study-materials/verbal",
      icon: BookOpen,
      title: "Verbal Reasoning",
      description: "Reading comprehension, text completion, and sentence equivalence guides."
    },
    {
      to: "/study-materials/quantitative",
      icon: Brain,
      title: "Quantitative Reasoning",
      description: "Math concepts, formulas, and problem-solving strategies."
    },
    {
      to: "/study-materials/analytical",
      icon: Target,
      title: "Analytical Writing",
      description: "Essay templates and writing strategies."
    },
    {
      to: "/study-materials/tips",
      icon: Lightbulb,
      title: "Tips & Strategies",
      description: "Time management, test-taking strategies, and score improvement tips."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8 mt-16 min-h-[calc(100vh-4rem)] flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {studyCards.map((card) => (
            <StudyCard
              key={card.to}
              to={card.to}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudyMaterials;