import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Droplet, Recycle, Filter, Waves, Binary, Globe, Wrench, Gauge, Beaker, Wind } from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    id: "wtp",
    title: "Water Treatment Plants",
    description: "Complete WTP solutions including clarifiers, flash mixers, flocculators, and filtration systems (PSF, ACF, DMF, IRF).",
    icon: Droplet,
    category: "Water Treatment",
  },
  {
    id: "etp",
    title: "Effluent Treatment Plants",
    description: "Advanced ETP systems for treating industrial wastewater to meet pollution control board norms.",
    icon: Recycle,
    category: "Water Treatment",
  },
  {
    id: "stp",
    title: "Sewage Treatment Plants",
    description: "Modern STP solutions for residential, commercial, and municipal applications with advanced aeration systems.",
    icon: Filter,
    category: "Water Treatment",
  },
  {
    id: "ro",
    title: "RO & DM Plants",
    description: "High-purity reverse osmosis and demineralization systems for industrial and commercial applications.",
    icon: Waves,
    category: "Water Treatment",
  },
  {
    id: "oxygen",
    title: "Oxygen Dosing Systems",
    description: "High pure oxygen dosing systems for super critical boiler applications and advanced treatment processes.",
    icon: Wind,
    category: "Specialty",
  },
  {
    id: "chemical",
    title: "Chemical Dosing Systems",
    description: "LP & HP chemical dosing systems, bulk acid & caustic handling systems for precise treatment control.",
    icon: Beaker,
    category: "Specialty",
  },
  {
    id: "maintenance",
    title: "Operation & Maintenance",
    description: "Comprehensive O&M services for water treatment plants with professional technocrats and 24/7 support.",
    icon: Wrench,
    category: "Services",
  },
  {
    id: "troubleshooting",
    title: "Troubleshooting & Audit",
    description: "Expert troubleshooting, enhanced water audit, and optimization services for existing treatment systems.",
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
            State-of-the-Art Treatment Technologies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Designing, engineering, manufacturing, and commissioning water and wastewater 
            treatment solutions that meet world-class standards.
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
          <Link href="/engineers">
            <Button size="lg" variant="outline" className="group" data-testid="button-view-all-services">
              View All Solutions
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
