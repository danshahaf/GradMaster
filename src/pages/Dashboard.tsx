import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { createClient } from "@/lib/supabase";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { BookOpen, Brain, Trophy, Target } from "lucide-react";

interface PracticeSession {
  id: string;
  question_type: string;
  correct_answers: number;
  total_questions: number;
  created_at: string;
}

interface QuestionTypeStats {
  type: string;
  total: number;
  correct: number;
  percentage: number;
}

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [sessions, setSessions] = useState<PracticeSession[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    const fetchSessions = async () => {
      try {
        const { data, error } = await supabase
          .from("practice_sessions")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) throw error;

        setSessions(data || []);
      } catch (error: any) {
        console.error("Error fetching sessions:", error);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to load practice sessions.",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchSessions();
  }, [user, navigate, supabase, toast]);

  const totalQuestions = sessions.reduce(
    (sum, session) => sum + session.total_questions,
    0
  );
  const totalCorrect = sessions.reduce(
    (sum, session) => sum + session.correct_answers,
    0
  );
  const averageScore =
    totalQuestions > 0
      ? Math.round((totalCorrect / totalQuestions) * 100)
      : 0;

  // Calculate stats by question type
  const questionTypeStats = sessions.reduce((acc: { [key: string]: QuestionTypeStats }, session) => {
    if (!acc[session.question_type]) {
      acc[session.question_type] = {
        type: session.question_type,
        total: 0,
        correct: 0,
        percentage: 0,
      };
    }
    acc[session.question_type].total += session.total_questions;
    acc[session.question_type].correct += session.correct_answers;
    acc[session.question_type].percentage = Math.round(
      (acc[session.question_type].correct / acc[session.question_type].total) * 100
    );
    return acc;
  }, {});

  // Prepare data for the line chart
  const chartData = sessions.reduce((acc: any[], session) => {
    const date = new Date(session.created_at).toLocaleDateString();
    const existingDate = acc.find(item => item.date === date);
    
    if (existingDate) {
      if (!existingDate[session.question_type]) {
        existingDate[session.question_type] = Math.round(
          (session.correct_answers / session.total_questions) * 100
        );
      }
    } else {
      const newEntry: any = { date };
      newEntry[session.question_type] = Math.round(
        (session.correct_answers / session.total_questions) * 100
      );
      acc.push(newEntry);
    }
    return acc;
  }, []).reverse();

  const lineColors = {
    'general': '#34D399',
    'verbal': '#60A5FA',
    'mathematical': '#F472B6'
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-medium">Questions Attempted</p>
                <h2 className="text-3xl font-bold text-foreground">{totalQuestions}</h2>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-medium">Correct Answers</p>
                <h2 className="text-3xl font-bold text-foreground">{totalCorrect}</h2>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Trophy className="h-8 w-8 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-medium">Overall Success Rate</p>
                <h2 className="text-3xl font-bold text-foreground">{averageScore}%</h2>
              </div>
            </div>
          </Card>
        </div>

        {/* Performance by Question Type */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {Object.values(questionTypeStats).map((stat) => (
            <Card key={stat.type} className="p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium capitalize">
                    {stat.type} Success Rate
                  </p>
                  <h2 className="text-3xl font-bold text-foreground">{stat.percentage}%</h2>
                  <p className="text-sm text-muted-foreground">
                    {stat.correct} / {stat.total} correct
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-6 hover:shadow-lg transition-shadow duration-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-foreground">Performance History by Section</h2>
            <div className="px-3 py-1 bg-primary/10 rounded-full">
              <span className="text-sm font-medium text-primary">Last {chartData.length} sessions</span>
            </div>
          </div>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis 
                  dataKey="date" 
                  stroke="#6b7280"
                  fontSize={12}
                />
                <YAxis 
                  domain={[0, 100]} 
                  stroke="#6b7280"
                  fontSize={12}
                  tickFormatter={(value) => `${value}%`}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '6px',
                    padding: '8px'
                  }}
                />
                <Legend />
                {Object.entries(lineColors).map(([type, color]) => (
                  <Line
                    key={type}
                    type="monotone"
                    dataKey={type}
                    name={type.charAt(0).toUpperCase() + type.slice(1)}
                    stroke={color}
                    strokeWidth={2}
                    dot={{ fill: color, strokeWidth: 2 }}
                    activeDot={{ r: 6, fill: color }}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
