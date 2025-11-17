import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { TrendingUp, TrendingDown } from "lucide-react";

const evolutionData: Array<{
  metric: string;
  data: Array<{ year: string; value: number }>;
  trend: "up" | "down";
  description: string;
}> = [
  {
    metric: "Collectivités data (+3500 hab)",
    data: [
      { year: "2022", value: 40 },
      { year: "2025", value: 74 }
    ],
    trend: "up",
    description: "+34 points en 3 ans"
  },
  {
    metric: "Collectivités data (-3500 hab)",
    data: [
      { year: "2022", value: 6 },
      { year: "2025", value: 49 }
    ],
    trend: "up",
    description: "+43 points en 3 ans"
  },
  {
    metric: "Direction générale impliquée",
    data: [
      { year: "2022", value: 53 },
      { year: "2025", value: 73 }
    ],
    trend: "up",
    description: "+20 points en 3 ans"
  },
  {
    metric: "IA générative utilisée",
    data: [
      { year: "2024", value: 52 },
      { year: "2025", value: 84 }
    ],
    trend: "up",
    description: "+32 points en 1 an"
  },
  {
    metric: "Conventions partenariales",
    data: [
      { year: "2024", value: 42 },
      { year: "2025", value: 60 }
    ],
    trend: "up",
    description: "+18 points en 1 an"
  },
  {
    metric: "Statut public des données",
    data: [
      { year: "2024", value: 53 },
      { year: "2025", value: 74 }
    ],
    trend: "up",
    description: "+21 points en 1 an"
  },
  {
    metric: "Transparence comme objectif",
    data: [
      { year: "2024", value: 59 },
      { year: "2025", value: 43 }
    ],
    trend: "down",
    description: "-16 points en 1 an"
  }
];

interface ChartCardProps {
  metric: string;
  data: { year: string; value: number }[];
  trend: "up" | "down";
  description: string;
  index: number;
}

const ChartCard = ({ metric, data, trend, description, index }: ChartCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedData, setAnimatedData] = useState(data.map(d => ({ ...d, value: 0 })));
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setAnimatedData(data);
      }, index * 100);

      return () => clearTimeout(timer);
    }
  }, [isVisible, data, index]);

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-card border-2 border-primary p-3 rounded-lg shadow-lg">
          <p className="text-foreground font-semibold">{payload[0].payload.year}</p>
          <p className="text-primary font-bold text-lg">{payload[0].value}%</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card 
      ref={cardRef}
      className={`border-2 border-border hover:border-primary transition-all duration-500 bg-card ${
        isVisible ? 'animate-fade-in' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <CardHeader>
        <CardTitle className="flex items-start justify-between text-lg">
          <span className="text-accent">{metric}</span>
          {trend === "up" ? (
            <TrendingUp className="h-6 w-6 text-green-500" />
          ) : (
            <TrendingDown className="h-6 w-6 text-red-500" />
          )}
        </CardTitle>
        <p className={`text-sm font-semibold ${trend === "up" ? "text-green-600" : "text-red-600"}`}>
          {description}
        </p>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={animatedData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="year" 
              stroke="hsl(var(--foreground))"
              style={{ fontSize: '12px' }}
            />
            <YAxis 
              stroke="hsl(var(--foreground))"
              style={{ fontSize: '12px' }}
              domain={[0, 100]}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar 
              dataKey="value" 
              fill="hsl(var(--primary))"
              animationDuration={1000}
              animationBegin={0}
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export const EvolutionCharts = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHeaderVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4">
            Évolution 2022-2025
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trajectoire de transformation numérique des collectivités territoriales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {evolutionData.map((item, index) => (
            <ChartCard
              key={item.metric}
              metric={item.metric}
              data={item.data}
              trend={item.trend}
              description={item.description}
              index={index}
            />
          ))}
        </div>

        <div 
          className={`mt-12 bg-primary/5 rounded-xl p-8 border-2 border-primary/20 transition-all duration-700 ${
            headerVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
          style={{ animationDelay: '800ms' }}
        >
          <h3 className="text-2xl font-bold text-accent mb-4">
            📈 Analyse des tendances
          </h3>
          <div className="space-y-3 text-foreground">
            <p>
              <strong className="text-primary">Accélération forte :</strong> L'adoption de l'IA générative (+32 points en 1 an) et des projets data dans les petites communes (+43 points en 3 ans) témoigne d'une démocratisation rapide.
            </p>
            <p>
              <strong className="text-primary">Structuration :</strong> L'implication des directions générales (+20 points) et le développement des conventions partenariales (+18 points) marquent une professionnalisation.
            </p>
            <p>
              <strong className="text-red-600">Point de vigilance :</strong> Le recul de la transparence comme objectif (-16 points) souligne un défi majeur pour maintenir la confiance citoyenne.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
