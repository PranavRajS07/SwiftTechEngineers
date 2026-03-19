import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { 
  Car, 
  Zap, 
  Cpu, 
  Pill, 
  Fuel, 
  UtensilsCrossed, 
  Wine, 
  Candy, 
  Factory, 
  Shirt,
  ArrowRight
} from "lucide-react";

const industries = [
  { id: "automobile", title: "Automobile", icon: Car, projects: 15 },
  { id: "power", title: "Power Sector", icon: Zap, projects: 22 },
  { id: "electronics", title: "Electronics", icon: Cpu, projects: 12 },
  { id: "pharmaceutical", title: "Pharmaceutical", icon: Pill, projects: 18 },
  { id: "petroleum", title: "Petroleum", icon: Fuel, projects: 9 },
  { id: "food", title: "Food & Beverages", icon: UtensilsCrossed, projects: 28 },
  { id: "brewery", title: "Brewery & Distillery", icon: Wine, projects: 8 },
  { id: "sugar", title: "Sugar", icon: Candy, projects: 11 },
  { id: "manufacturing", title: "Manufacturing", icon: Factory, projects: 35 },
  { id: "textiles", title: "Textiles", icon: Shirt, projects: 14 },
];

export default function Industries() {
  return (
    <section className="py-24 bg-background" data-testid="section-industries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Sectors We Serve</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Industries We Empower
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Our solutions power diverse industries across the globe, from automotive 
            giants to pharmaceutical leaders.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <Link key={industry.id} href={`/industries/${industry.id}`}>
                <Card 
                  className="p-6 text-center hover-elevate active-elevate-2 cursor-pointer group transition-all duration-300"
                  data-testid={`card-industry-${industry.id}`}
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-medium text-sm mb-1">{industry.title}</h3>
                  <p className="text-muted-foreground text-xs">{industry.projects}+ Projects</p>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
