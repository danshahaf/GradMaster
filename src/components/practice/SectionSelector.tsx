import { Calculator, BookText, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const GRE_SECTIONS = [
  { 
    id: 'quantitative', 
    name: 'Quantitative Reasoning',
    icon: Calculator,
    description: 'Practice math problems and data interpretation'
  },
  { 
    id: 'verbal', 
    name: 'Verbal Reasoning',
    icon: BookText,
    description: 'Enhance your vocabulary and reading comprehension'
  },
  { 
    id: 'integrated', 
    name: 'Integrated Reasoning',
    icon: LineChart,
    description: 'Combine quantitative and verbal skills'
  },
];

interface SectionSelectorProps {
  onSelectSection: (sectionId: string) => void;
  loading: boolean;
}

const SectionSelector = ({ onSelectSection, loading }: SectionSelectorProps) => {
  return (
    <>
      <h1 className="text-2xl font-bold text-center mb-6">Choose a Section to Practice</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {GRE_SECTIONS.map((section) => (
          <Card 
            key={section.id}
            className="p-6 hover:border-primary transition-colors cursor-pointer"
            onClick={() => onSelectSection(section.id)}
          >
            <Button
              variant="ghost"
              disabled={loading}
              className="w-full h-full aspect-square flex flex-col items-center justify-center gap-4 hover:bg-transparent"
            >
              <section.icon className="h-16 w-16 text-primary" />
              <div className="text-center">
                <h3 className="font-semibold mb-2">{section.name}</h3>
                <p className="text-sm text-muted-foreground">{section.description}</p>
              </div>
            </Button>
          </Card>
        ))}
      </div>
    </>
  );
};

export default SectionSelector;