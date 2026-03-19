import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SearchDialog from "@/components/SearchDialog";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Droplet, Filter, Recycle, Waves, Gauge, Wrench, Shield, Zap } from "lucide-react";
import { Link } from "wouter";
import waterFacility from "@assets/generated_images/water_treatment_facility.png";

const products = [
  { 
    category: "Water Treatment",
    items: [
      { title: "WTP - Water Treatment Plants", icon: Droplet },
      { title: "Clarifiers & Clari-flocculators", icon: Filter },
      { title: "Lamella Clarifiers", icon: Filter },
      { title: "Filtration Systems (PSF, ACF, DMF)", icon: Filter },
      { title: "Ultrafiltration Systems", icon: Waves },
      { title: "DM Plants", icon: Droplet },
      { title: "Water Softening Plants", icon: Droplet },
      { title: "Reverse Osmosis Plants", icon: Waves },
    ]
  },
  {
    category: "Wastewater Treatment",
    items: [
      { title: "ETP - Effluent Treatment Plants", icon: Recycle },
      { title: "STP - Sewage Treatment Plants", icon: Recycle },
      { title: "Pre-Treatment Plants", icon: Filter },
      { title: "Oil Water Separators", icon: Filter },
      { title: "Dissolved Air Flotation", icon: Waves },
      { title: "Aeration Systems", icon: Zap },
    ]
  },
  {
    category: "Dosing Systems",
    items: [
      { title: "Chemical Dosing Systems", icon: Gauge },
      { title: "High Pure Oxygen Dosing", icon: Gauge },
      { title: "Bulk Acid & Caustic Handling", icon: Shield },
      { title: "LP & HP Dosing Systems", icon: Gauge },
    ]
  },
];

const services = [
  { icon: Wrench, title: "Design & Engineering", description: "Custom solutions designed for your specific requirements" },
  { icon: Zap, title: "Supply & Installation", description: "Complete turnkey solutions with quality equipment" },
  { icon: Gauge, title: "Commissioning", description: "Expert commissioning and performance testing" },
  { icon: Shield, title: "Operation & Maintenance", description: "Comprehensive O&M services for optimal performance" },
];

export default function Engineers() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background" data-testid="page-engineers">
      <Header onSearchOpen={() => setSearchOpen(true)} />
      
      <main className="pt-20">
        <section className="relative py-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${waterFacility})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <Badge className="mb-4 bg-blue-500/20 text-blue-400 border-blue-500/30">
                Since 2006
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Swift Tech Engineers
              </h1>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                A pioneer in industrial water and wastewater treatment solutions with 
                expertise in design, engineering, manufacturing, and O&M services. 
                Serving industries across the globe with state-of-the-art technologies.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button size="lg" className="group">
                    Get a Quote
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/industries">
                  <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                    Industries We Serve
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">Our Services</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                End-to-End Solutions
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From design to maintenance, we provide comprehensive water treatment 
                services tailored to your industry needs.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="p-6 hover-elevate cursor-pointer">
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-24 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">Our Products</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Treatment Solutions
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive range of water and wastewater treatment equipment 
                conforming to international standards.
              </p>
            </div>

            <Tabs defaultValue="Water Treatment" className="w-full">
              <TabsList className="flex flex-wrap justify-center mb-8 h-auto gap-2 bg-transparent">
                {products.map((category) => (
                  <TabsTrigger 
                    key={category.category} 
                    value={category.category}
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    {category.category}
                  </TabsTrigger>
                ))}
              </TabsList>

              {products.map((category) => (
                <TabsContent key={category.category} value={category.category}>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {category.items.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <Card 
                          key={index} 
                          className="p-4 hover-elevate cursor-pointer flex items-center gap-3"
                        >
                          <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <span className="font-medium text-sm">{item.title}</span>
                        </Card>
                      );
                    })}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
      </main>
      
      <Footer />
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </div>
  );
}
