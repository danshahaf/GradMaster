import Navigation from "@/components/Navigation";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const VerbalReasoning = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // This is a sample of GRE vocabulary words - you would want to expand this list
  const vocabularyWords = [
    { word: "Abate", definition: "To decrease; reduce" },
    { word: "Aberrant", definition: "Deviating from what is normal" },
    { word: "Abstruse", definition: "Difficult to comprehend; obscure" },
    { word: "Acumen", definition: "Keen insight" },
    { word: "Adamant", definition: "Refusing to change one's mind" },
    { word: "Admonish", definition: "To warn or reprimand" },
    { word: "Adroit", definition: "Clever or skillful" },
    { word: "Aesthetic", definition: "Concerned with beauty or art" },
    { word: "Affluent", definition: "Wealthy" },
    { word: "Altruistic", definition: "Unselfish concern for others" }
    // ... Add more words as needed
  ].sort((a, b) => a.word.localeCompare(b.word));

  const filteredWords = vocabularyWords.filter(word =>
    word.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
    word.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8 mt-16">
        <h1 className="text-3xl font-bold mb-6">Verbal Reasoning</h1>
        
        <div className="grid grid-cols-1 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Essential GRE Vocabulary</CardTitle>
              <div className="mt-4">
                <Input
                  type="search"
                  placeholder="Search words or definitions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="max-w-sm"
                />
              </div>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[600px] pr-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {filteredWords.map((item) => (
                    <Card key={item.word} className="p-3 hover:shadow-md transition-shadow">
                      <h4 className="font-semibold text-sm text-primary mb-1">{item.word}</h4>
                      <p className="text-xs text-muted-foreground">{item.definition}</p>
                    </Card>
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

export default VerbalReasoning;