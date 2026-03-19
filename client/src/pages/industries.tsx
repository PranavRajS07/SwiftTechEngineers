import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SearchDialog from "@/components/SearchDialog";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Car, Zap, Cpu, Pill, Fuel, UtensilsCrossed, Wine, Candy, Factory, Shirt } from "lucide-react";
import waterFacility from "@assets/generated_images/water_treatment_facility.png";

const industries = [
  { 
    id: "automobile", 
    title: "Automobile Industry", 
    icon: Car, 
    projects: 150,
    description: "Complete water treatment solutions for automobile manufacturing plants, including paint shop wastewater treatment, cooling systems, and process water treatment.",
    services: ["Paint Shop ETP", "Cooling Water Treatment", "DM Water Plants"]
  },
  { 
    id: "power", 
    title: "Power Sector", 
    icon: Zap, 
    projects: 200,
    description: "Specialized water treatment for thermal and nuclear power plants, including boiler feedwater, cooling tower treatment, and ash pond management.",
    services: ["Boiler Feedwater", "Cooling Towers", "Condensate Polishing"]
  },
  { 
    id: "electronics", 
    title: "Electronics Industry", 
    icon: Cpu, 
    projects: 120,
    description: "Ultra-pure water systems for semiconductor and electronics manufacturing with stringent quality requirements.",
    services: ["UPW Systems", "DI Water", "Rinse Water Recycling"]
  },
  { 
    id: "pharmaceutical", 
    title: "Pharmaceutical Industry", 
    icon: Pill, 
    projects: 180,
    description: "FDA/WHO compliant water systems for pharmaceutical manufacturing, including purified water and WFI systems.",
    services: ["Purified Water", "WFI Systems", "Clean Steam"]
  },
  { 
    id: "petroleum", 
    title: "Petroleum & Petrochemical", 
    icon: Fuel, 
    projects: 90,
    description: "Robust treatment solutions for refineries and petrochemical plants handling complex wastewater streams.",
    services: ["Oily Water Treatment", "Desalters", "ZLD Systems"]
  },
  { 
    id: "food", 
    title: "Food & Beverages", 
    icon: UtensilsCrossed, 
    projects: 250,
    description: "Food-grade water treatment systems ensuring safety and quality for food processing and beverage manufacturing.",
    services: ["Process Water", "CIP Systems", "Wastewater Treatment"]
  },
  { 
    id: "brewery", 
    title: "Brewery & Distillery", 
    icon: Wine, 
    projects: 80,
    description: "Specialized solutions for brewing and distillery operations including process water and effluent treatment.",
    services: ["Brewing Water", "Spent Wash Treatment", "Water Recovery"]
  },
  { 
    id: "sugar", 
    title: "Sugar Industry", 
    icon: Candy, 
    projects: 110,
    description: "Comprehensive water management for sugar mills including process water and distillery effluent treatment.",
    services: ["Boiler Water", "Condensate Recovery", "ETP for Distillery"]
  },
  { 
    id: "manufacturing", 
    title: "Manufacturing & Process", 
    icon: Factory, 
    projects: 300,
    description: "Versatile water treatment solutions for diverse manufacturing and process industries.",
    services: ["Process Water", "Cooling Systems", "Zero Discharge"]
  },
  { 
    id: "textiles", 
    title: "Textile Industry", 
    icon: Shirt, 
    projects: 140,
    description: "Color and chemical removal systems for textile dyeing and processing wastewater.",
    services: ["Dye Effluent Treatment", "Water Recycling", "ZLD Systems"]
  },
];

export default function Industries() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background" data-testid="page-industries">
      <Header onSearchOpen={() => setSearchOpen(true)} />
      
      <main className="pt-20">
        <section className="relative py-24 min-h-[60vh] flex items-center">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${waterFacility})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto text-primary-foreground">
              <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">Industries We Serve</Badge>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Powering Diverse Industries
              </h1>
              <p className="text-primary-foreground/90 text-lg leading-relaxed">
                Our water treatment solutions serve critical industries across the globe, 
                from automotive giants to pharmaceutical leaders, ensuring sustainable 
                operations and regulatory compliance.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-background to-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8">
              {industries.map((industry, index) => {
                const Icon = industry.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <Card 
                    key={industry.id} 
                    className="p-6 md:p-8 hover-elevate cursor-pointer"
                    data-testid={`card-industry-detail-${industry.id}`}
                  >
                    <div className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-6 md:gap-8 items-center`}>
                      <div className="flex-shrink-0">
                        <div className="w-24 h-24 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Icon className="h-12 w-12 text-primary" />
                        </div>
                      </div>
                      
                      <div className="flex-1 text-center md:text-left">
                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3">
                          <h2 className="text-2xl font-bold">{industry.title}</h2>
                          <Badge variant="secondary">{industry.projects}+ Projects</Badge>
                        </div>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {industry.description}
                        </p>
                        <div className="flex flex-wrap justify-center md:justify-start gap-2">
                          {industry.services.map((service) => (
                            <Badge key={service} variant="outline" className="text-xs">
                              {service}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex-shrink-0">
                        <Link href={`/industries/${industry.id}`}>
                          <Button variant="outline" className="group">
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </div>
  );
}
