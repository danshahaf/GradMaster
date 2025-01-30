import { StatCard } from "@/components/dashboard/StatCard";
import { Brain, CheckCircle, Clock } from "lucide-react";

interface DashboardStatsProps {
  totalQuestions: number;
  correctAnswers: number;
  averageTime: number;
}

export const DashboardStats = ({ totalQuestions, correctAnswers, averageTime }: DashboardStatsProps) => {
  const accuracy = totalQuestions > 0 
    ? Math.round((correctAnswers / totalQuestions) * 100) 
    : 0;

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <StatCard
        title="Total Questions"
        value={totalQuestions.toString()}
        description="Questions attempted"
        icon={Brain}
      />
      <StatCard
        title="Accuracy"
        value={`${accuracy}%`}
        description="Correct answers"
        icon={CheckCircle}
      />
      <StatCard
        title="Average Time"
        value={`${averageTime}s`}
        description="Per question"
        icon={Clock}
      />
    </div>
  );
};