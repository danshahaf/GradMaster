import { Card } from "@/components/ui/card";
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

interface PerformanceChartProps {
  data: any[];
  colors: Record<string, string>;
}

const PerformanceChart = ({ data, colors }: PerformanceChartProps) => {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-foreground">
          Performance History by Section
        </h2>
        <div className="px-3 py-1 bg-primary/10 rounded-full">
          <span className="text-sm font-medium text-primary">
            Last {data.length} sessions
          </span>
        </div>
      </div>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="date" stroke="#6b7280" fontSize={12} />
            <YAxis
              domain={[0, 100]}
              stroke="#6b7280"
              fontSize={12}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "6px",
                padding: "8px",
              }}
            />
            <Legend />
            {Object.entries(colors).map(([type, color]) => (
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
  );
};

export default PerformanceChart;