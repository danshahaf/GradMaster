import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { createClient } from "@/lib/supabase";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { Brain, Target, Trophy, Clock } from "lucide-react";

const Dashboard = () => {
  const [stats, setStats] = useState({
    questionsAnswered: 0,
    correctAnswers: 0,
    averageScore: 0,
    streakDays: 0,
    weakestAreas: ["Loading..."],
    recentScores: [],
    timeSpent: 0,
  });

  const navigate = useNavigate();
  const { toast } = useToast();
  const supabase = createClient();

  useEffect(() => {
    const fetchUserStats = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        navigate("/login");
        return;
      }

      // For demo purposes, setting mock data
      // In production, this would fetch from Supabase
      setStats({
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
        timeSpent: 1234, // minutes
      });
    };

    fetchUserStats();
  }, [navigate]);

  const handleStartPractice = () => {
    navigate("/practice");
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Your GRE Progress</h1>
        <Button onClick={handleStartPractice}>Start Practice</Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          icon={<Brain className="h-6 w-6" />}
          title="Questions Answered"
          value={stats.questionsAnswered}
          subtitle="Total practice questions"
        />
        <StatCard
          icon={<Target className="h-6 w-6" />}
          title="Success Rate"
          value={`${Math.round((stats.correctAnswers / stats.questionsAnswered) * 100 || 0)}%`}
          subtitle="Correct answers"
        />
        <StatCard
          icon={<Trophy className="h-6 w-6" />}
          title="Study Streak"
          value={`${stats.streakDays} days`}
          subtitle="Keep it up!"
        />
        <StatCard
          icon={<Clock className="h-6 w-6" />}
          title="Time Spent"
          value={`${Math.round(stats.timeSpent / 60)} hrs`}
          subtitle="Total study time"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Performance Trend</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={stats.recentScores}>
                <XAxis dataKey="date" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="#2563eb"
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
                  <span className="text-muted-foreground">Needs practice</span>
                </div>
                <Progress value={33} className="h-2" />
              </div>
            ))}
          </div>
          <Button className="w-full mt-6" onClick={handleStartPractice}>
            Practice These Topics
          </Button>
        </Card>
      </div>
    </div>
  );
};

const StatCard = ({
  icon,
  title,
  value,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  value: string | number;
  subtitle: string;
}) => (
  <Card className="p-6">
    <div className="flex items-center gap-4">
      <div className="p-2 bg-primary/10 rounded-lg">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-medium text-muted-foreground">{title}</h3>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>
    </div>
  </Card>
);

export default Dashboard;