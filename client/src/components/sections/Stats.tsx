import { useEffect, useState, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Globe, Building } from "lucide-react";

const stats = [
  { 
    value: 200, 
    suffix: "+", 
    label: "Plants Delivered", 
    icon: Award,
    description: "Successfully commissioned worldwide"
  },
  { 
    value: 50, 
    suffix: "+", 
    label: "Satisfied Clients", 
    icon: Users,
    description: "Across multiple industries"
  },
  { 
    value: 6, 
    suffix: "+", 
    label: "Countries Served", 
    icon: Globe,
    description: "International presence"
  },
  { 
    value: 18, 
    suffix: "+", 
    label: "Years Experience", 
    icon: Building,
    description: "Industry expertise since 2006"
  },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div ref={ref} className="text-4xl sm:text-5xl font-bold">
      {count}{suffix}
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-24 bg-white dark:bg-slate-900 text-foreground" data-testid="section-stats">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Our Impact
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 dark:text-white">
            Numbers That Speak
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg dark:text-gray-300">
            A track record of excellence in engineering and innovation.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index} 
                className="text-center"
                data-testid={`stat-${index}`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                <div className="font-medium mt-2 dark:text-white">{stat.label}</div>
                <div className="text-muted-foreground text-sm mt-1 dark:text-gray-300">{stat.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
