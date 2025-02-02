import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { Lightbulb, Clock, Target, BookOpen, Edit, Brain, ListOrdered, BarChart, Calendar, Globe } from "lucide-react";

const greDetails = [
  {
    icon: ListOrdered,
    title: "Exam Structure",
    description: "The GRE consists of three main sections: Analytical Writing, Verbal Reasoning, and Quantitative Reasoning. Each section assesses specific skills needed for graduate-level study.",
  },
  {
    icon: BarChart,
    title: "Scoring",
    description: "The Verbal and Quantitative sections are scored between 130-170 (1-point increments), while Analytical Writing is scored between 0-6 (0.5-point increments). Your total score is out of 340.",
  },
  {
    icon: Globe,
    title: "Test Format: Online & In-Person",
    description: "You can take the GRE either at a test center or online from home. The at-home GRE offers the same structure, but requires a quiet, private environment with a proctor monitoring via webcam.",
  },
  {
    icon: Calendar,
    title: "How to Register",
    description: "Register at the official ETS website, choose between an in-person or at-home exam, pay the fee (~$220), and schedule your preferred test date.",
  },
];

const tips = [
  {
    icon: Clock,
    title: "Time Management",
    description: "Learn effective strategies for managing your time during the exam. Practice with timed sections and develop a personalized pacing strategy.",
  },
  {
    icon: Lightbulb,
    title: "Test-Taking Strategies",
    description: "Master techniques for different question types. Learn when to guess, when to skip, and how to eliminate wrong answers efficiently.",
  },
  {
    icon: Target,
    title: "Score Improvement Tips",
    description: "Discover targeted methods to boost your score in each section. Avoid common pitfalls and apply expert-recommended best practices.",
  },
  {
    icon: BookOpen,
    title: "Vocabulary Building",
    description: "Expand your vocabulary with high-frequency GRE words. Use flashcards, spaced repetition, and contextual learning for better retention.",
  },
  {
    icon: Edit,
    title: "Analytical Writing Excellence",
    description: "Enhance your essay skills by practicing structured responses. Review high-scoring sample essays and refine your argument development.",
  },
  {
    icon: Brain,
    title: "Mental Stamina & Focus",
    description: "Train your brain for long exam sessions. Use mindfulness, strategic breaks, and endurance-building exercises to stay sharp throughout the test.",
  },
];

const TipsStrategies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8 mt-16">

        {/* GRE Overview Section */}
        <h1 className="text-3xl font-semibold mb-4">What is the GRE?</h1>
          <p className="text-muted-foreground mb-4 p-4">
            The Graduate Record Examination (GRE) is a standardized test required for admission to many graduate programs worldwide. It is designed to assess critical thinking, analytical writing, verbal reasoning, and quantitative skills necessary for success in advanced academic study. 
            The GRE is widely accepted by universities for master's and Ph.D. programs in various disciplines, including business, law, and engineering. The exam can be taken in person at a designated test center or online from the comfort of your home.
          </p>

        {/* GRE Details - 2 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {greDetails.map((detail, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <detail.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{detail.title}</h3>
              </div>
              <p className="text-muted-foreground">{detail.description}</p>
            </Card>
          ))}
        </div>

        {/* Tips & Strategies Section - 3 Column Grid */}
        <h1 className="text-3xl font-bold mb-8 text-foreground">Tips & Strategies</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <tip.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{tip.title}</h3>
              </div>
              <p className="text-muted-foreground">{tip.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TipsStrategies;
