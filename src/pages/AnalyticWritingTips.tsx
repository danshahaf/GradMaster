import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { BookOpen, Edit, Brain, ListOrdered, Star, FileText, Download } from "lucide-react";

const awDetails = [
  {
    icon: ListOrdered,
    title: "Overview",
    description:
      "The Analytical Writing section of the GRE consists of one task: 'Analyze an Issue.' You are required to construct a well-reasoned argument within 30 minutes.",
  },
  {
    icon: Brain,
    title: "How it Works",
    description:
      "You will be presented with an issue and asked to evaluate its claims, providing examples and reasoning. Your ability to structure your argument logically is key.",
  },
  {
    icon: Star,
    title: "Grading Criteria",
    description:
      "Graders assess your essay based on clarity, coherence, logical argumentation, and grammatical correctness. High-scoring essays are well-structured and present complex ideas effectively.",
  },
];

const awTips = [
  {
    icon: Edit,
    title: "Review High Scored Examples",
    description:
      "Simulate real exam conditions by writing essays in 30 minutes. Analyze high-scoring GRE essay samples to understand what a well-structured response looks like.",
  },
  {
    icon: FileText,
    title: "Structure & Arguments",
    description:
      "Organize your essay into an introduction, body paragraphs, and a conclusion. Use specific examples and evidence to support your claims. The more concrete and relevant your examples, the better your score.",
  },
  {
    icon: BookOpen,
    title: "Grammar, Vocabulary & Logic",
    description:
      "A strong vocabulary and well-constructed sentences will improve your score. Avoid excessive complexity but aim for clear and precise writing with a logical flow of ideas.",
  },
];

const AnalyticWritingTips = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8 mt-16">

        {/* Analytical Writing Overview */}
        <h1 className="text-3xl font-semibold">The Analytical Writing Section</h1>
        <p className="text-muted-foreground p-5">
          The Analytical Writing section of the GRE evaluates your ability to think critically and articulate complex ideas effectively. 
          Unlike the Verbal and Quantitative sections, which rely on multiple-choice questions, this section requires you to write a well-reasoned essay under timed conditions.
          You will be presented with a <strong>single task: "Analyze an Issue."</strong> This requires you to evaluate a given topic and construct a persuasive, well-structured argument within <strong>30 minutes</strong>.
          Your response is graded based on <strong>clarity, logical reasoning, coherence, and language usage</strong>.
        </p>

        {/* GRE Details - 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {awDetails.map((detail, index) => (
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

        {/* Tips & Strategies Section - 3 Cards */}
        <h2 className="text-2xl font-semibold mb-4 text-foreground">Mastering the Analytical Writing Section</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {awTips.map((tip, index) => (
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

        {/* Example Essays Section */}
        <h2 className="text-2xl font-semibold mb-4 text-foreground">Examples</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* PDF 1 */}
          <Card className="p-6 hover:shadow-lg transition-shadow duration-200 relative group">
            <div className="relative overflow-hidden rounded-lg">
              <iframe 
                src="/attachments/gre-example-01.pdf#toolbar=0&view=FitH" 
                className="w-full h-96 border rounded-lg transition duration-300 group-hover:brightness-75"
              ></iframe>

              {/* Hover Download Icon */}
              <div 
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 cursor-pointer"
                onClick={() => window.open("/attachments/gre-example-01.pdf", "_blank")}
              >
                <Download className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </Card>

          {/* PDF 2 */}
          <Card className="p-6 hover:shadow-lg transition-shadow duration-200 relative group">
            <div className="relative overflow-hidden rounded-lg">
              <iframe 
                src="/attachments/gre-example-02.pdf#toolbar=0&view=FitH" 
                className="w-full h-96 border rounded-lg transition duration-300 group-hover:brightness-75"
              ></iframe>

              {/* Hover Download Icon */}
              <div 
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 cursor-pointer"
                onClick={() => window.open("/attachments/gre-example-02.pdf", "_blank")}
              >
                <Download className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </Card>

        </div>
      </div>
    </div>
  );
};

export default AnalyticWritingTips;
