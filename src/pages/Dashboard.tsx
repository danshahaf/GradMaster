import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { createClient } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import { BookOpen, Brain, Trophy } from "lucide-react";
import StatCard from "@/components/dashboard/StatCard";
import QuestionTypeStats from "@/components/dashboard/QuestionTypeStats";
import PerformanceChart from "@/components/dashboard/PerformanceChart";

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
    totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

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

  const chartData = sessions
    .reduce((acc: any[], session) => {
      const date = new Date(session.created_at).toLocaleDateString();
      const existingDate = acc.find((item) => item.date === date);

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
    }, [])
    .reverse();

  const lineColors = {
    general: "#34D399",
    verbal: "#60A5FA",
    mathematical: "#F472B6",
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard
            icon={BookOpen}
            title="Questions Attempted"
            value={totalQuestions}
          />
          <StatCard
            icon={Brain}
            title="Correct Answers"
            value={totalCorrect}
          />
          <StatCard
            icon={Trophy}
            title="Overall Success Rate"
            value={`${averageScore}%`}
          />
        </div>

        <QuestionTypeStats stats={Object.values(questionTypeStats)} />
        
        <PerformanceChart data={chartData} colors={lineColors} />
      </div>
    </div>
  );
};

export default Dashboard;