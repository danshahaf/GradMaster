import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { createClient } from "@/lib/supabase";
import { Loader2 } from "lucide-react";

const Practice = () => {
  const [question, setQuestion] = useState("");
  const [userAnswer, setUserAnswer] = useState("");
  const [explanation, setExplanation] = useState("");
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const supabase = createClient();

  const generateQuestion = async () => {
    setLoading(true);
    try {
      // In production, this would call an edge function to generate questions
      // For now, using mock data
      setQuestion("What is the sum of the angles in a triangle?");
      setUserAnswer("");
      setExplanation("");
      setIsCorrect(null);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to generate question. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const checkAnswer = async () => {
    setLoading(true);
    try {
      // In production, this would validate against the correct answer
      const correct = userAnswer.toLowerCase().includes("180");
      setIsCorrect(correct);
      
      // Save progress to Supabase
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        // Save answer in production
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to check answer. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const getExplanation = async () => {
    setLoading(true);
    try {
      // In production, this would call LLM for explanation
      setExplanation(
        "The sum of angles in a triangle is always 180 degrees. This is a fundamental property of Euclidean geometry. You can verify this by drawing any triangle and measuring its angles - they will always sum to 180 degrees."
      );
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to get explanation. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <Card className="max-w-2xl mx-auto p-6">
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">GRE Practice</h1>
            <Button onClick={generateQuestion} disabled={loading}>
              {loading ? <Loader2 className="animate-spin" /> : "New Question"}
            </Button>
          </div>

          {question ? (
            <>
              <div className="space-y-4">
                <p className="text-lg">{question}</p>
                <Input
                  placeholder="Type your answer here..."
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  disabled={isCorrect !== null}
                />
                
                {isCorrect === null ? (
                  <Button onClick={checkAnswer} disabled={!userAnswer || loading}>
                    Submit Answer
                  </Button>
                ) : (
                  <div className="space-y-4">
                    <div className={`p-4 rounded-md ${
                      isCorrect ? "bg-green-100" : "bg-red-100"
                    }`}>
                      <p className={`font-medium ${
                        isCorrect ? "text-green-800" : "text-red-800"
                      }`}>
                        {isCorrect ? "Correct!" : "Incorrect"}
                      </p>
                    </div>
                    
                    {explanation ? (
                      <div className="bg-gray-50 p-4 rounded-md">
                        <h3 className="font-medium mb-2">Explanation:</h3>
                        <p>{explanation}</p>
                      </div>
                    ) : (
                      <Button
                        variant="outline"
                        onClick={getExplanation}
                        disabled={loading}
                      >
                        Get Explanation
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                Click "New Question" to start practicing!
              </p>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default Practice;