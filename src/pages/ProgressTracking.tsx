import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useQuery } from "@tanstack/react-query";
import { createClient } from "@/lib/supabase";

const supabase = createClient();

const ProgressTracking = () => {
  const { data: sessions } = useQuery({
    queryKey: ['practice-sessions'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('practice_sessions')
        .select('*')
        .order('created_at', { ascending: true });
      
      if (error) throw error;
      return data;
    }
  });

  const chartData = sessions?.map(session => ({
    date: new Date(session.created_at).toLocaleDateString(),
    score: (session.correct_answers / session.total_questions) * 100
  })) || [];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8 mt-16">
        <h1 className="text-3xl font-bold mb-8 text-foreground">Progress Tracking</h1>
        
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Score History</h2>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="score" stroke="#34D399" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProgressTracking;