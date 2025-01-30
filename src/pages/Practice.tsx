import { useState } from "react";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { createClient } from "@/lib/supabase";
import Navigation from "@/components/Navigation";
import SectionSelector from "@/components/practice/SectionSelector";
import PracticeInterface from "@/components/practice/PracticeInterface";

type Message = {
  role: 'system' | 'user' | 'assistant';
  content: string;
};

type Question = {
  type: 'multiple_choice' | 'numerical';
  question: string;
  options?: string[];
};

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
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto p-6">
        <Card className="max-w-4xl mx-auto p-6">
          {!selectedSection ? (
            <SectionSelector 
              onSelectSection={startSection}
              loading={loading}
            />
          ) : (
            <PracticeInterface
              selectedSection={selectedSection}
              currentQuestion={currentQuestion}
              userAnswer={userAnswer}
              showExplanation={showExplanation}
              loading={loading}
              explanation={showExplanation ? JSON.parse(messages[messages.length - 1].content).content : ''}
              onAnswerChange={setUserAnswer}
              onSubmitAnswer={submitAnswer}
              onNextQuestion={nextQuestion}
              onChangeSection={() => setSelectedSection(null)}
            />
          )}
        </Card>
      </div>
    </div>
  );
};

export default Practice;