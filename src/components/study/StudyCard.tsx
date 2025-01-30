import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface StudyCardProps {
  to: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

const StudyCard = ({ to, icon: Icon, title, description }: StudyCardProps) => {
  return (
    <Link to={to}>
      <Card className="p-6 h-[160px] hover:shadow-lg transition-shadow duration-200">
        <div className="flex items-center gap-4 h-full">
          <div className="p-3 bg-primary/10 rounded-full h-fit">
            <Icon className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default StudyCard;