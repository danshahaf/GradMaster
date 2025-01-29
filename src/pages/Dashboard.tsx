import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const Dashboard = () => {
  const [stats] = useState({
    questionsAnswered: 245,
    correctAnswers: 178,
    averageScore: 72.6,
    streakDays: 5,
    weakestAreas: ["Quantitative Comparison", "Reading Comprehension"],
    recentScores: [
      { date: "Mon", score: 65 },
      { date: "Tue", score: 70 },
      { date: "Wed", score: 68 },
      { date: "Thu", score: 75 },
      { date: "Fri", score: 73 },
    ],
  });

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Progress Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard
          title="Questions Answered"
          value={stats.questionsAnswered}
          subtitle="Total practice questions"
        />
        <StatCard
          title="Correct Answers"
          value={`${Math.round((stats.correctAnswers / stats.questionsAnswered) * 100)}%`}
          subtitle="Success rate"
        />
        <StatCard
          title="Study Streak"
          value={`${stats.streakDays} days`}
          subtitle="Keep it up!"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Performance Trend</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={stats.recentScores}>
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="#34D399"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Areas to Improve</h2>
          <div className="space-y-4">
            {stats.weakestAreas.map((area) => (
              <div key={area}>
                <div className="flex justify-between mb-2">
                  <span>{area}</span>
                  <span className="text-secondary">Needs practice</span>
                </div>
                <Progress value={33} className="h-2" />
              </div>
            ))}
          </div>
          <Button className="w-full mt-4">Practice These Topics</Button>
        </Card>
      </div>
    </div>
  );
};

const StatCard = ({
  title,
  value,
  subtitle,
}: {
  title: string;
  value: string | number;
  subtitle: string;
}) => (
  <Card className="p-6">
    <h3 className="text-lg font-medium text-secondary mb-2">{title}</h3>
    <div className="text-3xl font-bold mb-1">{value}</div>
    <p className="text-sm text-secondary/70">{subtitle}</p>
  </Card>
);

export default Dashboard;