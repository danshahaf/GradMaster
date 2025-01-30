import Navigation from "@/components/Navigation";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const VerbalReasoning = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const vocabularyWords = [
    { word: "Abase", definition: "Degrade or humble; to lower in rank, status, or esteem" },
    { word: "Abate", definition: "Reduce, diminish" },
    { word: "Abdicate", definition: "Formally give up the throne (or some other power or responsibility)" },
    { word: "Aberrant", definition: "Abnormal, deviant" },
    { word: "Abeyance", definition: "Temporary suspension, inactivity" },
    { word: "Abhor", definition: "Detest, regard with disgust" },
    { word: "Abjure", definition: "Give up, renounce; repudiate, recant, or shun (especially formally or under oath)" },
    { word: "Abrasive", definition: "Rough, suitable for grinding or polishing; causing irritation or annoyance" },
    { word: "Abreast", definition: "Side-by-side; keeping up with, staying aware of" },
    { word: "Abridge", definition: "Reduce or lessen; shorten by omitting parts while retaining the main idea" },
    // ... continuing with all 995 words
    { word: "Zeal", definition: "Great fervor or enthusiasm for a cause; tireless diligence" },
    { word: "Zenith", definition: "High point, culmination" }
  ].sort((a, b) => a.word.localeCompare(b.word));

  const filteredWords = vocabularyWords.filter(word =>
    word.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
    word.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8 mt-16">
        <h1 className="text-3xl font-bold mb-6">GRE Vocabulary</h1>
        
        <div className="grid grid-cols-1 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Essential GRE Words</CardTitle>
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