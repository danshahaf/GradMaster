import { Calculator, BookText, LineChart, BookA } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";


const GRE_SECTIONS = [
  { 
    to: '/practice/quantitative',
    id: 'quantitative', 
    name: 'Quantitative',
    icon: Calculator,
    description: 'Practice math problems, algebra, geometry, and data interpretation to improve your GRE quantitative reasoning skills.',
  },
  { 
    to: '/practice/verbal-reasoning',
    id: 'verbal', 
    name: 'Verbal',
    icon: BookText,
    description: 'Enhance your vocabulary, reading comprehension, and sentence completion to excel in the GRE verbal section.',
  },
  { 
    to: "/practice/integrated",
    id: 'integrated', 
    name: 'Integrated',
    icon: LineChart,
    description: 'Work on questions that combine verbal and quantitative reasoning for a well-rounded GRE preparation experience.',
  },
  { 
    to: "/practice/vocabulary",
    id: 'vocab', 
    name: 'Vocabulary',
    icon: BookA,
    description: 'Learn new words and enhance your GRE vobcaulary through a conversation with an AI.',
  },
];

interface SectionSelectorProps {
  onSelectSection: (sectionId: string) => void;
  loading: boolean;
}

const SectionSelector = ({ onSelectSection, loading }: SectionSelectorProps) => {
  return (
    <div className="w-full max-w-4xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-8">Choose a Section to Practice</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {GRE_SECTIONS.map((section) => (
          <Link to = {section.to}>
          <Card 
            key={section.id}
            className="p-6 hover:shadow-lg transition-shadow duration-200 cursor-pointer rounded-xl h-full"
            onClick={() => sessionStorage.setItem("selectedSection", section.id)}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <section.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">{section.name}</h3>
            </div>
            <p className="text-muted-foreground text-left">{section.description}</p>
          </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SectionSelector;
