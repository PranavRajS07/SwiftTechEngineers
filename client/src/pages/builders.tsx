import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SearchDialog from "@/components/SearchDialog";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Home, Factory, ArrowUpFromLine, CheckCircle2, ArrowRight, Phone } from "lucide-react";
import { Link } from "wouter";

import constructionImage from "@assets/generated_images/modern_construction_site.png";

const services = [
  {
    id: "residential",
    title: "Residential Buildings",
    description: "Quality residential construction with modern design and durable materials. From individual homes to apartment complexes.",
    icon: Home,
    features: [
      "Custom home construction",
      "Apartment complexes",
      "Modern architectural designs",
      "Quality finishing",
    ],
  },
  {
    id: "industrial",
    title: "Industrial Buildings & Structures",
    description: "Robust industrial construction including factories, warehouses, and manufacturing facilities built to last.",
    icon: Factory,
    features: [
      "Factory buildings",
      "Warehouse construction",
      "Manufacturing facilities",
      "Industrial sheds",
    ],
  },
  {
    id: "lifting",
    title: "House Lifting & Relocating",
    description: "Specialized services for lifting low-lying houses and buildings to protect from flooding and ground level issues.",
    icon: ArrowUpFromLine,
    features: [
      "Low-lying house lifting",
      "Building elevation",
      "Structure relocation",
      "Foundation reinforcement",
    ],
  },
];

const whyChooseUs = [
  "Experienced construction professionals",
  "Quality materials and workmanship",
  "Timely project completion",
  "Competitive pricing",
  "Safety compliance",
  "After-construction support",
];

export default function Builders() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background" data-testid="page-builders">
      <Header onSearchOpen={() => setSearchOpen(true)} />
      
      <main className="pt-20">
        <section className="relative py-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${constructionImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20">
                Swift Tech Builders & Constructions
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Building Dreams Into Reality
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Specialized in residential and industrial building construction, along with innovative 
                house lifting and relocating services. Quality construction you can trust.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button size="lg" className="group" data-testid="button-get-quote">
                    Get a Quote
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                  data-testid="button-call-now"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">Our Services</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Construction & Building Solutions
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                From ground-up construction to specialized house lifting services,
                we deliver quality workmanship on every project.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Card 
                    key={service.id}
                    className="p-8 hover-elevate active-elevate-2 transition-all duration-300"
                    data-testid={`card-service-${service.id}`}
                  >
                    <div className="w-14 h-14 rounded-md bg-primary/10 flex items-center justify-center mb-6">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <Badge variant="outline" className="mb-4">Why Choose Us</Badge>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                  Quality Construction You Can Trust
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Part of the Swift Tech family, we bring the same commitment to excellence 
                  and customer satisfaction that has made us leaders in water treatment 
                  to the construction industry.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {whyChooseUs.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <Card className="p-8 bg-primary/5">
                  <Building2 className="h-12 w-12 text-primary mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Ready to Build?</h3>
                  <p className="text-muted-foreground mb-6">
                    Whether you need a new building constructed or want to protect your 
                    existing property with house lifting services, we're here to help.
                  </p>
                  <Link href="/contact">
                    <Button className="w-full" data-testid="button-discuss-project">
                      Discuss Your Project
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </div>
  );
}
