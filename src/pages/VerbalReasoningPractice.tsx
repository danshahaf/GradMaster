import React, { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import { MessageCircleQuestion, StepForward } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import axios from "axios";

// Ensure the API key is accessible correctly (avoiding 'process is not defined' errors)
const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

const VerbalReasoningPractice: React.FC = () => {
  const [question, setQuestion] = useState<string>("Loading question...");
  const [options, setOptions] = useState<string[]>(["", "", "", ""]);
  const [loading, setLoading] = useState<boolean>(false);
  const [correctAnswer, setCorrectAnswer] = useState<string | null>(null);
  const [explanation, setExplanation] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const handleAnswerClick = (option: string) => {
    if (!isAnswered) {
      setSelectedAnswer(option); // ✅ No more red highlights
      setIsAnswered(true);
    }
  };

  // Function to fetch a new question
  const fetchNewQuestion = async () => {
    if (!OPENAI_API_KEY) {
      console.error("🚨 Error: OpenAI API Key is missing. Check your environment variables.");
      setQuestion("Error: Missing API Key. Please configure it in your environment variables.");
      setOptions(["", "", "", ""]);
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-4o",
          messages: [
            {
              role: "system",
              content:
                `You're a GRE tutor that provides endless creative Verbal Reasoning questions. Format your response as JSON: {"question": "...", "options": ['A.', 'B.', 'C.', 'D.']}.`,
            },
            { role: "user", content: "Generate a new verbal reasoning question. If you're using any string characters, use `. Add another element to the JSON called `correct` with the letter of the correct option. Add another option to the JSON called `explanation` with the explanation as of to why the correct answer is the correct one" },
          ],
          temperature: 0.7,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${OPENAI_API_KEY}`,
          },
        }
      );

      
      // Check if response contains expected structure
      if (!response.data.choices || response.data.choices.length === 0) {
        throw new Error("Invalid API response.");
      }
      const qna = JSON.parse(JSON.parse(response.request.response).choices[0].message.content)
      console.log(qna["question"], qna["options"], qna["correct"], qna["explanation"])
      const aiResponse = JSON.parse(response.data.choices[0].message.content);

      if (aiResponse?.question && Array.isArray(aiResponse.options) && aiResponse.options.length === 4) {
        setQuestion(aiResponse.question);
        setOptions(aiResponse.options);
        setCorrectAnswer(aiResponse.correct);  // Store correct answer
        setExplanation(aiResponse.explanation);  // Store explanation

        // *Reset answer UI states*
        setSelectedAnswer(null);
        setIsAnswered(false);
        setShowExplanation(false);
      }
       else {
        throw new Error("Invalid response format from OpenAI API.");
      }
    } catch (error) {
      console.error("🚨 OpenAI API Error:", error);
      setQuestion("Error loading question. Please try again.");
      setOptions(["", "", "", ""]);
    } finally {
      setLoading(false);
    }
  };

  // Fetch the first question when the component loads
  useEffect(() => {
    fetchNewQuestion();
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <div className="container mx-auto px-4 py-8 mt-16 flex flex-col flex-grow">
        <h1 className="text-3xl font-bold mb-6">Verbal Reasoning Practice</h1>
        <Card className="flex flex-col py-6 px-10">
          <h2 className="text-xl font-bold h-20">
          {loading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-primary"></div>
              </div>
            ) : (
              question
            )
          }
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            {options.map((option, index) => {
              let buttonClass = "border font-bold bg-secondary py-4 px-6 rounded-md transition";
              let textColor = "text-black";
              let hoverStyle = "hover:border-primary hover:bg-secondary";

              if (isAnswered) {
                if (option === correctAnswer) {
                  // highlight correct for clarity if user answered incorrectly
                  if (selectedAnswer !== correctAnswer) {
                    buttonClass += " bg-green-500 text-white";
                  }
                } else if (option === selectedAnswer && option !== correctAnswer) {
                  buttonClass += " bg-red-500 text-white";
                }
              }              

              return (
                <Button
                  key={index}
                  className={`${buttonClass} ${hoverStyle} md:pl-12 sm:pl-4 ${textColor}`}
                  onClick={() => handleAnswerClick(option)}
                  disabled={isAnswered}
                >
                  {loading ? "" : option} {/* if loading, then "". else OPTION*/}
                </Button>
              );
            })}
          </div>

          <div className="flex justify-between w-full mt-4">
            <Button
              className="bg-primary text-white px-4 py-2 w-1/4 rounded-md flex items-center justify-center gap-2 disabled:opacity-50"
              onClick={() => setShowExplanation(true)}
              disabled={!isAnswered}
            >
              Explain
              <MessageCircleQuestion />
            </Button>

            <Button
              onClick={fetchNewQuestion}
              className="bg-primary text-white px-4 py-2 w-1/4 rounded-md flex items-center justify-center gap-2 disabled:opacity-50"
              disabled={!isAnswered || loading}
            >
              {loading ? "Loading..." : "Next Question"}
              <StepForward />
            </Button>
          </div>
          {showExplanation && explanation && (
            <p className="mt-4 text-sm text-gray-700">{explanation}</p>
          )}

        </Card>
      </div>
    </div>
  );
};

export default VerbalReasoningPractice;
