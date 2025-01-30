import Navigation from "@/components/Navigation";
import { DashboardContent } from "@/components/dashboard/DashboardContent";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8 mt-16">
        <h1 className="text-3xl font-bold mb-8">Performance Dashboard</h1>
        <DashboardContent />
      </div>
    </div>
  );
};

export default Dashboard;