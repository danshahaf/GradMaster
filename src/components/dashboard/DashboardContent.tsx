import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { DashboardStats } from "./DashboardStats";
import { QuestionTypeStats } from "./QuestionTypeStats";
import { PerformanceChart } from "./PerformanceChart";

export const DashboardContent = () => {
  const { data: sessions } = useQuery({
    queryKey: ["practice-sessions"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("practice_sessions")
        .select("*")
        .order("created_at", { ascending: true });

      if (error) throw error;
      return data;
    },
  });

  if (!sessions) return null;

  const totalQuestions = sessions.reduce((sum, session) => sum + (session.total_questions || 0), 0);
  const totalCorrect = sessions.reduce((sum, session) => sum + (session.correct_answers || 0), 0);
  
  // Calculate stats by question type
  const questionTypeStats = sessions.reduce((acc: Record<string, { type: string; correct: number; total: number }>, session) => {
    if (!acc[session.question_type]) {
      acc[session.question_type] = {
        type: session.question_type,
        correct: 0,
        total: 0,
      };
    }
    acc[session.question_type].correct += session.correct_answers || 0;
    acc[session.question_type].total += session.total_questions || 0;
    return acc;
  }, {});

  // Prepare chart data
  const chartData = sessions.map((session) => ({
    date: new Date(session.created_at).toLocaleDateString(),
    [session.question_type]: session.correct_answers
      ? (session.correct_answers / session.total_questions) * 100
      : 0,
  }));

  // Define line colors for the chart
  const lineColors = {
    verbal: "#4f46e5",
    quantitative: "#06b6d4",
    analytical: "#10b981",
  };

  return (
    <div className="space-y-8">
      <DashboardStats
        totalQuestions={totalQuestions}
        correctAnswers={totalCorrect}
        averageTime={120} // This should be calculated from actual data when available
      />
      
      <QuestionTypeStats stats={Object.values(questionTypeStats)} />
      
      <PerformanceChart data={chartData} colors={lineColors} />
    </div>
  );
};