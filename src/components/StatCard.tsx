import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  value: string;
  label: string;
  icon: LucideIcon;
  description?: string;
}

export const StatCard = ({ value, label, icon: Icon, description }: StatCardProps) => {
  return (
    <Card className="border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-lg bg-card">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 bg-primary/10 rounded-lg">
            <Icon className="h-6 w-6 text-primary" />
          </div>
        </div>
        <div className="text-4xl font-bold text-accent mb-2">{value}</div>
        <div className="text-lg font-semibold text-foreground mb-2">{label}</div>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </CardContent>
    </Card>
  );
};
