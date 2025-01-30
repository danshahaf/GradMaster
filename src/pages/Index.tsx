import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold text-secondary mb-6">
            Master the GRE with AI
          </h1>
          <p className="text-xl text-secondary/80 mb-8 max-w-2xl mx-auto">
            Practice with endless AI-generated questions, get instant explanations,
            and track your progress with detailed analytics.
          </p>
          <div className="space-x-4">
            <Button
              onClick={() => navigate("/login")}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
            >
              Start Free Trial
            </Button>
            <Button
              onClick={() => navigate("/login")}
              variant="outline"
              className="px-8 py-6 text-lg"
            >
              Login
            </Button>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="AI-Powered Practice"
              description="Get unlimited GRE-style questions generated by advanced AI"
              icon="🎯"
            />
            <FeatureCard
              title="Instant Explanations"
              description="Understand every answer with detailed explanations"
              icon="💡"
            />
            <FeatureCard
              title="Progress Tracking"
              description="Track your improvement with detailed analytics"
              icon="📈"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const FeatureCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white p-6 rounded-lg shadow-lg"
  >
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-secondary/70">{description}</p>
  </motion.div>
);

export default Index;