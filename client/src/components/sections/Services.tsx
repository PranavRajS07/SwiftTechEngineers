import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Droplet, Recycle, Filter, Waves, Binary, Globe, Wrench, Gauge } from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    id: "wtp",
    title: "Water Treatment Plants",
    description: "Complete WTP solutions including design, installation, and commissioning for industrial applications.",
    icon: Droplet,
    category: "Water Treatment",
  },
  {
    id: "etp",
    title: "Effluent Treatment",
    description: "Advanced ETP systems for treating industrial wastewater to meet pollution control norms.",
    icon: Recycle,
    category: "Water Treatment",
  },
  {
    id: "stp",
    title: "Sewage Treatment",
    description: "Modern STP solutions for residential, commercial, and municipal applications.",
    icon: Filter,
    category: "Water Treatment",
  },
  {
    id: "ro",
    title: "RO Plants",
    description: "High-purity reverse osmosis systems for various industrial and commercial applications.",
    icon: Waves,
    category: "Water Treatment",
  },
  {
    id: "ai-software",
    title: "AI Software Development",
    description: "Custom AI-powered software solutions for automation, analytics, and intelligent systems.",
    icon: Binary,
    category: "Swift Altus",
  },
  {
    id: "web-development",
    title: "Web & App Development",
    description: "Modern websites and applications built with cutting-edge technologies for organizations.",
    icon: Globe,
    category: "Swift Altus",
  },
  {
    id: "maintenance",
    title: "Operation & Maintenance",
    description: "Comprehensive O&M services for water treatment plants with 24/7 support.",
    icon: Wrench,
    category: "Services",
  },
  {
    id: "troubleshooting",
    title: "Troubleshooting",
    description: "Expert troubleshooting and optimization services for existing treatment systems.",
    icon: Gauge,
    category: "Services",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-card" data-testid="section-services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">What We Offer</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Comprehensive Solutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From water treatment to AI software, we provide end-to-end solutions 
            tailored to your industry needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.id}
                className="p-6 hover-elevate active-elevate-2 cursor-pointer group transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
                data-testid={`card-service-${service.id}`}
              >
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <Badge variant="secondary" className="mb-3 text-xs">
                  {service.category}
                </Badge>
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/services">
            <Button size="lg" variant="outline" className="group" data-testid="button-view-all-services">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
