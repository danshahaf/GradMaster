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
        { name: "Surface Area of a Cylinder", formula: "A = 2\\pi r^2 + 2\\pi rh" },
        { name: "Volume of a Cone", formula: "V = \\frac{1}{3}\\pi r^2h" },
        { name: "Area of a Trapezoid", formula: "A = \\frac{(a+b)h}{2}" },
        { name: "Regular Polygon Area", formula: "A = \\frac{1}{2}pR" },
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
        { name: "Compound Interest", formula: "A = P(1 + \\frac{r}{n})^{nt}" },
        { name: "Arithmetic Sequence", formula: "a_n = a_1 + (n-1)d" },
        { name: "Geometric Sequence", formula: "a_n = a_1r^{n-1}" },
        { name: "Sum of Arithmetic Series", formula: "S_n = \\frac{n}{2}(a_1 + a_n)" },
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
        { name: "Z-Score", formula: "z = \\frac{x - \\mu}{\\sigma}" },
        { name: "Binomial Probability", formula: "P(X=k) = C(n,k)p^k(1-p)^{n-k}" },
        { name: "Correlation Coefficient", formula: "r = \\frac{\\sum(x-\\bar{x})(y-\\bar{y})}{\\sqrt{\\sum(x-\\bar{x})^2\\sum(y-\\bar{y})^2}}" },
      ]
    },
    {
      category: "Trigonometry",
      items: [
        { name: "Sine Law", formula: "\\frac{\\sin A}{a} = \\frac{\\sin B}{b} = \\frac{\\sin C}{c}" },
        { name: "Cosine Law", formula: "c^2 = a^2 + b^2 - 2ab\\cos(C)" },
        { name: "Basic Identities", formula: "\\sin^2 \\theta + \\cos^2 \\theta = 1" },
        { name: "Area of Triangle", formula: "A = \\frac{1}{2}ab\\sin(C)" },
        { name: "Double Angle Sin", formula: "\\sin(2\\theta) = 2\\sin(\\theta)\\cos(\\theta)" },
        { name: "Double Angle Cos", formula: "\\cos(2\\theta) = \\cos^2(\\theta) - \\sin^2(\\theta)" },
        { name: "Half Angle Formulas", formula: "\\sin^2(\\frac{\\theta}{2}) = \\frac{1-\\cos(\\theta)}{2}" },
        { name: "Tangent Identity", formula: "\\tan(\\theta) = \\frac{\\sin(\\theta)}{\\cos(\\theta)}" },
      ]
    },
    {
      category: "Calculus",
      items: [
        { name: "Power Rule", formula: "\\frac{d}{dx}x^n = nx^{n-1}" },
        { name: "Chain Rule", formula: "\\frac{d}{dx}f(g(x)) = f'(g(x))g'(x)" },
        { name: "Product Rule", formula: "\\frac{d}{dx}[f(x)g(x)] = f'(x)g(x) + f(x)g'(x)" },
        { name: "Quotient Rule", formula: "\\frac{d}{dx}\\frac{f(x)}{g(x)} = \\frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}" },
        { name: "Integration by Parts", formula: "\\int u\\,dv = uv - \\int v\\,du" },
        { name: "Fundamental Theorem", formula: "\\int_a^b f'(x)\\,dx = f(b) - f(a)" },
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
                            <h4 className="font-medium text-secondary-foreground mb-2">{item.name}</h4>
                            <div className="bg-accent/10 p-3 rounded-md flex items-center justify-center min-h-[60px]">
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