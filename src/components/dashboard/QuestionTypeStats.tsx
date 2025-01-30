import StatCard from "./StatCard";
import { Target } from "lucide-react";

interface QuestionTypeStatsProps {
  stats: {
    type: string;
    total: number;
    correct: number;
    percentage: number;
  }[];
}

const QuestionTypeStats = ({ stats }: QuestionTypeStatsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {stats.map((stat) => (
        <StatCard
          key={stat.type}
          icon={Target}
          title={`${stat.type.charAt(0).toUpperCase() + stat.type.slice(1)} Success Rate`}
          value={`${stat.percentage}%`}
          subtitle={`${stat.correct} / ${stat.total} correct`}
        />
      ))}
    </div>
  );
};

export default QuestionTypeStats;