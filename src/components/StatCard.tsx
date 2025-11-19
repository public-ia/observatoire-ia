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
    <Card className="group border-2 border-border hover:border-primary transition-all duration-500 hover:shadow-elegant bg-gradient-to-br from-card to-card/50 hover:scale-105 hover:-translate-y-2">
      <CardContent className="p-8">
        <div className="flex items-start justify-between mb-6">
          <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300 group-hover:shadow-glow">
            <Icon className="h-7 w-7 text-primary group-hover:scale-110 transition-transform duration-300" />
          </div>
        </div>
        <div className="text-5xl md:text-6xl font-bold text-accent mb-3 group-hover:text-primary transition-colors duration-300">{value}</div>
        <div className="text-xl font-semibold text-foreground mb-3 leading-tight">{label}</div>
        {description && (
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        )}
      </CardContent>
    </Card>
  );
};
