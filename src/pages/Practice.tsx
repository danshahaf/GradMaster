import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { createClient } from "@/lib/supabase";
import { Loader2 } from "lucide-react";

type Message = {
  role: 'system' | 'user' | 'assistant';
  content: string;
};

type QuestionType = 'multiple_choice' | 'numerical';

type Question = {
  type: QuestionType;
  question: string;
  options?: string[];
};

const GRE_SECTIONS = [
  { id: 'quantitative', name: 'Quantitative Reasoning' },
  { id: 'verbal', name: 'Verbal Reasoning' },
  { id: 'integrated', name: 'Integrated Reasoning' },
];

const Practice = () => {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [userAnswer, setUserAnswer] = useState("");
  const [showExplanation, setShowExplanation] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const supabase = createClient();

  const startSection = async (sectionId: string) => {
    setSelectedSection(sectionId);
    setLoading(true);
    try {
      const response = await supabase.functions.invoke('tutor-chat', {
        body: {
          topic: sectionId,
          previousMessages: [],
        },
      });

      if (response.error) throw response.error;

      const questionData = JSON.parse(response.data.response);
      setCurrentQuestion(questionData);
      setMessages([{ role: 'assistant', content: response.data.response }]);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to start practice session. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const submitAnswer = async () => {
    if (!userAnswer) return;

    setLoading(true);
    try {
      const response = await supabase.functions.invoke('tutor-chat', {
        body: {
          topic: selectedSection,
          previousMessages: [
            ...messages,
            { role: 'user', content: userAnswer },
          ],
        },
      });

      if (response.error) throw response.error;

      const explanationData = JSON.parse(response.data.response);
      setMessages(prev => [...prev, 
        { role: 'user', content: userAnswer },
        { role: 'assistant', content: response.data.response }
      ]);
      setShowExplanation(true);
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

  const nextQuestion = async () => {
    setUserAnswer("");
    setShowExplanation(false);
    setLoading(true);

    try {
      const response = await supabase.functions.invoke('tutor-chat', {
        body: {
          topic: selectedSection,
          previousMessages: [...messages, { role: 'user', content: 'Next question please' }],
        },
      });

      if (response.error) throw response.error;

      const questionData = JSON.parse(response.data.response);
      setCurrentQuestion(questionData);
      setMessages(prev => [...prev, { role: 'assistant', content: response.data.response }]);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to get next question. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <Card className="max-w-2xl mx-auto p-6">
        <div className="space-y-6">
          {!selectedSection ? (
            <>
              <h1 className="text-2xl font-bold text-center mb-6">Choose a Section to Practice</h1>
              <div className="grid gap-4">
                {GRE_SECTIONS.map((section) => (
                  <Button
                    key={section.id}
                    onClick={() => startSection(section.id)}
                    disabled={loading}
                    className="w-full text-lg py-6"
                  >
                    {section.name}
                  </Button>
                ))}
              </div>
            </>
          ) : (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">GRE Practice</h1>
                <Button
                  variant="outline"
                  onClick={() => setSelectedSection(null)}
                  disabled={loading}
                >
                  Change Section
                </Button>
              </div>

              {currentQuestion && (
                <div className="space-y-6">
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-lg">{currentQuestion.question}</p>
                  </div>

                  {currentQuestion.type === 'multiple_choice' ? (
                    <div className="grid gap-3">
                      {currentQuestion.options?.map((option, index) => (
                        <Button
                          key={index}
                          variant={userAnswer === option ? "default" : "outline"}
                          onClick={() => setUserAnswer(option)}
                          disabled={showExplanation || loading}
                          className="justify-start text-left"
                        >
                          {option}
                        </Button>
                      ))}
                    </div>
                  ) : (
                    <Input
                      placeholder="Type your answer here..."
                      value={userAnswer}
                      onChange={(e) => setUserAnswer(e.target.value)}
                      disabled={showExplanation || loading}
                    />
                  )}

                  {!showExplanation ? (
                    <Button
                      onClick={submitAnswer}
                      disabled={!userAnswer || loading}
                      className="w-full"
                    >
                      {loading ? <Loader2 className="animate-spin" /> : "Submit Answer"}
                    </Button>
                  ) : (
                    <div className="space-y-4">
                      <div className="bg-muted p-4 rounded-lg">
                        <h3 className="font-medium mb-2">Explanation:</h3>
                        <p>{JSON.parse(messages[messages.length - 1].content).content}</p>
                      </div>
                      <Button
                        onClick={nextQuestion}
                        disabled={loading}
                        className="w-full"
                      >
                        {loading ? <Loader2 className="animate-spin" /> : "Next Question"}
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default Practice;