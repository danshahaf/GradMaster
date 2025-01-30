import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";

interface Question {
  type: 'multiple_choice' | 'numerical';
  question: string;
  options?: string[];
}

interface PracticeInterfaceProps {
  selectedSection: string;
  currentQuestion: Question | null;
  userAnswer: string;
  showExplanation: boolean;
  loading: boolean;
  explanation: string;
  onAnswerChange: (answer: string) => void;
  onSubmitAnswer: () => void;
  onNextQuestion: () => void;
  onChangeSection: () => void;
}

const PracticeInterface = ({
  selectedSection,
  currentQuestion,
  userAnswer,
  showExplanation,
  loading,
  explanation,
  onAnswerChange,
  onSubmitAnswer,
  onNextQuestion,
  onChangeSection,
}: PracticeInterfaceProps) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">GRE Practice</h1>
        <Button
          variant="outline"
          onClick={onChangeSection}
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
                  onClick={() => onAnswerChange(option)}
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
              onChange={(e) => onAnswerChange(e.target.value)}
              disabled={showExplanation || loading}
            />
          )}

          {!showExplanation ? (
            <Button
              onClick={onSubmitAnswer}
              disabled={!userAnswer || loading}
              className="w-full"
            >
              {loading ? <Loader2 className="animate-spin" /> : "Submit Answer"}
            </Button>
          ) : (
            <div className="space-y-4">
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-medium mb-2">Explanation:</h3>
                <p>{explanation}</p>
              </div>
              <Button
                onClick={onNextQuestion}
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
  );
};

export default PracticeInterface;