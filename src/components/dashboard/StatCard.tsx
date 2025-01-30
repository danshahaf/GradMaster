import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface StatCardProps {
  icon: LucideIcon;
  title: string;
  value: string | number;
  subtitle?: string;
}

const StatCard = ({ icon: Icon, title, value, subtitle }: StatCardProps) => {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-primary/10 rounded-full">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground font-medium">{title}</p>
          <h2 className="text-3xl font-bold text-foreground">{value}</h2>
          {subtitle && (
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          )}
        </div>
      </div>
    </Card>
  );
};

export default StatCard;