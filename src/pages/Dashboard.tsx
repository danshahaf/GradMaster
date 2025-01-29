import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { createClient } from "@/lib/supabase";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { BookOpen, Brain, Trophy } from "lucide-react";

interface PracticeSession {
  id: string;
  question_type: string;
  correct_answers: number;
  total_questions: number;
  created_at: string;
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

  const chartData = sessions
    .slice()
    .reverse()
    .map((session) => ({
      date: new Date(session.created_at).toLocaleDateString(),
      score: Math.round(
        (session.correct_answers / session.total_questions) * 100
      ),
    }));

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <BookOpen className="h-8 w-8 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Total Questions</p>
              <h2 className="text-2xl font-bold">{totalQuestions}</h2>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <Brain className="h-8 w-8 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Correct Answers</p>
              <h2 className="text-2xl font-bold">{totalCorrect}</h2>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <Trophy className="h-8 w-8 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Average Score</p>
              <h2 className="text-2xl font-bold">{averageScore}%</h2>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Progress Over Time</h2>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
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

      <div className="flex justify-center">
        <Button
          size="lg"
          className="w-full md:w-auto"
          onClick={() => navigate("/practice")}
        >
          Start Practice Session
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;