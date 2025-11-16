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
    <section className={`py-20 ${backgroundColor}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4">
              {title}
            </h2>
            <p className="text-xl text-muted-foreground">
              {subtitle}
            </p>
          </div>

          <div className="space-y-6">
            {insights.map((insight, index) => (
              <Card key={index} className="border-2 border-border hover:border-primary transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl text-accent">
                      {insight.title}
                    </CardTitle>
                    {insight.tag && (
                      <Badge variant="default" className="bg-primary text-primary-foreground">
                        {insight.tag}
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground leading-relaxed">
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
