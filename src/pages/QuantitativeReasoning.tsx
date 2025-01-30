import Navigation from "@/components/Navigation";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const QuantitativeReasoning = () => {
  const formulas = [
    {
      category: "Geometry",
      items: [
        { name: "Area of a Circle", formula: "A = πr²" },
        { name: "Circumference of a Circle", formula: "C = 2πr" },
        { name: "Area of a Rectangle", formula: "A = length × width" },
        { name: "Area of a Triangle", formula: "A = ½ × base × height" },
        { name: "Pythagorean Theorem", formula: "a² + b² = c²" },
      ]
    },
    {
      category: "Algebra",
      items: [
        { name: "Quadratic Formula", formula: "x = (-b ± √(b² - 4ac)) / 2a" },
        { name: "Slope Formula", formula: "m = (y₂ - y₁) / (x₂ - x₁)" },
        { name: "Distance Formula", formula: "d = √((x₂ - x₁)² + (y₂ - y₁)²)" },
      ]
    },
    {
      category: "Statistics",
      items: [
        { name: "Mean", formula: "x̄ = (∑x) / n" },
        { name: "Standard Deviation", formula: "σ = √(∑(x - μ)² / N)" },
        { name: "Probability", formula: "P(A) = (favorable outcomes) / (total outcomes)" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Quantitative Reasoning</h1>
        
        <div className="grid grid-cols-1 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Essential GRE Math Formulas</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[600px] pr-4">
                <div className="space-y-6">
                  {formulas.map((section) => (
                    <div key={section.category}>
                      <h3 className="text-xl font-semibold mb-4">{section.category}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {section.items.map((item) => (
                          <Card key={item.name} className="p-4">
                            <h4 className="font-medium text-primary">{item.name}</h4>
                            <p className="mt-2 font-mono text-lg">{item.formula}</p>
                          </Card>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default QuantitativeReasoning;