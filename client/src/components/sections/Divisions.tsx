import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Droplets, Building2, Cpu } from "lucide-react";

import waterImage from "@assets/generated_images/water_treatment_facility.png";
import aiImage from "@assets/generated_images/ai_software_development_workspace.png";
import constructionImage from "@assets/generated_images/modern_construction_site.png";

const divisions = [
  {
    id: "engineers",
    title: "Swift Tech Engineers",
    subtitle: "Water & Wastewater Treatment",
    description: "Pioneer in industrial water treatment solutions with expertise in WTP, ETP, STP, RO plants, DM plants, and advanced treatment technologies. ISO 9001:2015 certified.",
    icon: Droplets,
    image: waterImage,
    href: "/engineers",
    badge: "Since 2006",
    features: ["WTP & ETP", "STP & RO Plants", "O&M Services"],
  },
  {
    id: "builders",
    title: "Swift Tech Builders & Constructions",
    subtitle: "Building & Infrastructure",
    description: "Specialized in residential and industrial building construction, along with innovative house lifting and relocating services for low-lying areas.",
    icon: Building2,
    image: constructionImage,
    href: "/builders",
    features: ["Residential Buildings", "Industrial Structures", "House Lifting"],
  },
  {
    id: "altus",
    title: "Swift Altus",
    subtitle: "AI-Powered Software",
    description: "Cutting-edge AI software products and custom development services. Building intelligent solutions for modern organizations.",
    icon: Cpu,
    image: aiImage,
    href: "/altus",
    badge: "New",
    features: ["AI Products", "Custom Software", "Web Development"],
  },
];

export default function Divisions() {
  return (
    <section className="py-24 bg-background" data-testid="section-divisions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Our Companies</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Three Companies, One Vision
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive solutions across water treatment, construction, and software - 
            all under the trusted Swift Tech brand.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {divisions.map((division, index) => {
            const Icon = division.icon;
            return (
              <Link key={division.id} href={division.href}>
                <Card 
                  className="group overflow-visible cursor-pointer hover-elevate active-elevate-2 transition-all duration-300 h-full"
                  data-testid={`card-division-${division.id}`}
                >
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img 
                      src={division.image} 
                      alt={division.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    {division.badge && (
                      <Badge 
                        className="absolute top-4 right-4"
                        variant={division.badge === "New" ? "default" : "secondary"}
                      >
                        {division.badge}
                      </Badge>
                    )}
                    <div className="absolute bottom-4 left-4 flex items-center gap-3">
                      <div className="w-12 h-12 rounded-md bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-lg">{division.title}</h3>
                        <p className="text-white/80 text-sm">{division.subtitle}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {division.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {division.features.map((feature) => (
                        <Badge key={feature} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
