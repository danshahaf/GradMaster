import Navigation from "@/components/Navigation";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

const QuantitativeReasoning = () => {
  const formulas = [
    {
      category: "Geometry",
      items: [
        { name: "Area of a Circle", formula: "A = \\pi r^2" },
        { name: "Circumference of a Circle", formula: "C = 2\\pi r" },
        { name: "Area of a Rectangle", formula: "A = l \\times w" },
        { name: "Area of a Triangle", formula: "A = \\frac{1}{2}bh" },
        { name: "Pythagorean Theorem", formula: "a^2 + b^2 = c^2" },
        { name: "Volume of a Sphere", formula: "V = \\frac{4}{3}\\pi r^3" },
        { name: "Surface Area of a Sphere", formula: "A = 4\\pi r^2" },
        { name: "Volume of a Cylinder", formula: "V = \\pi r^2h" },
      ]
    },
    {
      category: "Algebra",
      items: [
        { name: "Quadratic Formula", formula: "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}" },
        { name: "Slope Formula", formula: "m = \\frac{y_2 - y_1}{x_2 - x_1}" },
        { name: "Distance Formula", formula: "d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}" },
        { name: "Midpoint Formula", formula: "(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2})" },
        { name: "Exponential Growth", formula: "A = P(1 + r)^t" },
        { name: "Logarithm Properties", formula: "\\log_b(xy) = \\log_b(x) + \\log_b(y)" },
      ]
    },
    {
      category: "Statistics & Probability",
      items: [
        { name: "Mean", formula: "\\bar{x} = \\frac{\\sum x_i}{n}" },
        { name: "Standard Deviation", formula: "\\sigma = \\sqrt{\\frac{\\sum(x - \\mu)^2}{N}}" },
        { name: "Probability", formula: "P(A) = \\frac{\\text{favorable outcomes}}{\\text{total outcomes}}" },
        { name: "Combination Formula", formula: "C(n,r) = \\frac{n!}{r!(n-r)!}" },
        { name: "Permutation Formula", formula: "P(n,r) = \\frac{n!}{(n-r)!}" },
        { name: "Variance", formula: "\\sigma^2 = \\frac{\\sum(x - \\mu)^2}{N}" },
      ]
    },
    {
      category: "Trigonometry",
      items: [
        { name: "Sine Law", formula: "\\frac{\\sin A}{a} = \\frac{\\sin B}{b} = \\frac{\\sin C}{c}" },
        { name: "Cosine Law", formula: "c^2 = a^2 + b^2 - 2ab\\cos(C)" },
        { name: "Basic Identities", formula: "\\sin^2 \\theta + \\cos^2 \\theta = 1" },
        { name: "Area of Triangle", formula: "A = \\frac{1}{2}ab\\sin(C)" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8 mt-16">
        <h1 className="text-3xl font-bold mb-6">Quantitative Reasoning</h1>
        
        <div className="grid grid-cols-1 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Essential GRE Math Formulas</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[600px] pr-4">
                <div className="space-y-8">
                  {formulas.map((section) => (
                    <div key={section.category} className="mb-8">
                      <h3 className="text-xl font-semibold mb-4 text-primary">{section.category}</h3>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {section.items.map((item) => (
                          <Card key={item.name} className="p-4 hover:shadow-md transition-shadow">
                            <h4 className="font-medium text-secondary mb-2">{item.name}</h4>
                            <div className="bg-muted p-3 rounded-md flex items-center justify-center min-h-[60px]">
                              <BlockMath math={item.formula} />
                            </div>
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