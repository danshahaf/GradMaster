import { StatCard } from "./StatCard";
import { Target } from "lucide-react";

interface QuestionTypeStatsProps {
  stats: {
    type: string;
    total: number;
    correct: number;
  }[];
}

export const QuestionTypeStats = ({ stats }: QuestionTypeStatsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {stats.map((stat) => {
        const percentage = stat.total > 0 
          ? Math.round((stat.correct / stat.total) * 100) 
          : 0;
        
        return (
          <StatCard
            key={stat.type}
            icon={Target}
            title={`${stat.type.charAt(0).toUpperCase() + stat.type.slice(1)} Success Rate`}
            value={`${percentage}%`}
            subtitle={`${stat.correct} / ${stat.total} correct`}
          />
        );
      })}
    </div>
  );
};