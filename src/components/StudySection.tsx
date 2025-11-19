import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface StudySectionProps {
  title: string;
  subtitle: string;
  insights: Array<{
    title: string;
    content: string;
    tag?: string;
  }>;
  backgroundColor?: string;
}

export const StudySection = ({ 
  title, 
  subtitle, 
  insights, 
  backgroundColor = "bg-background" 
}: StudySectionProps) => {
  return (
    <section className={`py-24 ${backgroundColor}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold text-accent mb-6 tracking-tight">
              {title}
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              {subtitle}
            </p>
          </div>

          <div className="space-y-6">
            {insights.map((insight, index) => (
              <Card 
                key={index} 
                className="group border-2 border-border hover:border-primary transition-all duration-500 hover:shadow-elegant bg-gradient-to-br from-card to-card/50 hover:scale-[1.02] hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between gap-4">
                    <CardTitle className="text-2xl md:text-3xl text-accent group-hover:text-primary transition-colors duration-300">
                      {insight.title}
                    </CardTitle>
                    {insight.tag && (
                      <Badge variant="default" className="bg-primary text-primary-foreground shadow-md text-sm px-4 py-1">
                        {insight.tag}
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground leading-relaxed text-lg">
                    {insight.content}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
