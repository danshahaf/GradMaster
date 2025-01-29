import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";

const Practice = () => {
  const [question, setQuestion] = useState({
    text: "In a sequence, each term after the first two terms is the sum of the previous two terms. If the first two terms are 2 and 3, what is the 5th term in the sequence?",
    options: ["8", "13", "21", "34"],
    correctAnswer: "13",
    explanation: "Let's solve this step by step:\n1. First term: 2\n2. Second term: 3\n3. Third term: 2 + 3 = 5\n4. Fourth term: 3 + 5 = 8\n5. Fifth term: 5 + 8 = 13",
  });
  
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
    setIsCorrect(answer === question.correctAnswer);
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setShowExplanation(false);
    setIsCorrect(null);
    // Here we would call the AI to generate a new question
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <Card className="p-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold mb-6">{question.text}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {question.options.map((option) => (
              <Button
                key={option}
                onClick={() => handleAnswerSelect(option)}
                variant={selectedAnswer === option ? "default" : "outline"}
                className={`h-auto py-4 px-6 text-lg justify-start ${
                  selectedAnswer && option === question.correctAnswer
                    ? "bg-primary text-white"
                    : ""
                }`}
                disabled={selectedAnswer !== null}
              >
                {option}
              </Button>
            ))}
          </div>

          <AnimatePresence>
            {selectedAnswer && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6"
              >
                <div className={`p-4 rounded-lg ${
                  isCorrect ? "bg-primary/10" : "bg-destructive/10"
                }`}>
                  <p className="font-medium mb-2">
                    {isCorrect ? "Correct!" : "Not quite right."}
                  </p>
                  {!showExplanation ? (
                    <Button
                      onClick={() => setShowExplanation(true)}
                      variant="outline"
                      className="mt-2"
                    >
                      Show Explanation
                    </Button>
                  ) : (
                    <p className="text-secondary whitespace-pre-line">
                      {question.explanation}
                    </p>
                  )}
                </div>
                <Button
                  onClick={handleNextQuestion}
                  className="mt-4 w-full"
                >
                  Next Question
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </Card>
    </div>
  );
};

export default Practice;