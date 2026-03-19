import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SearchDialog from "@/components/SearchDialog";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Award, Globe, Users, Target, Eye } from "lucide-react";
import officeImage from "@assets/generated_images/modern_corporate_office_building.png";

const values = [
  { icon: CheckCircle, title: "Quality First", description: "Uncompromising commitment to delivering excellence in every project" },
  { icon: Award, title: "Innovation", description: "State-of-the-art treatment technologies and solutions" },
  { icon: Globe, title: "Global Standards", description: "Meeting ASME, ANSI, IS2865 and international specifications" },
  { icon: Users, title: "Customer Focus", description: "Building lasting relationships with satisfied customers worldwide" },
];

export default function About() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background" data-testid="page-about">
      <Header onSearchOpen={() => setSearchOpen(true)} />
      
      <main className="pt-20">
        <section className="relative py-24 min-h-[60vh] flex items-center">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${officeImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto text-primary-foreground">
              <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">About Us</Badge>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                The Water Specialist Since 2006
              </h1>
              <p className="text-primary-foreground/90 text-lg leading-relaxed">
                Swift Tech Engineers (India) Pvt. Ltd. is a pioneer in industrial water and 
                wastewater treatment solutions with an established reputation for innovative 
                design and manufacturing excellence. We serve all over India as well as abroad 
                countries like Sri Lanka, Bangladesh, Maldives, Saudi Arabia, Dubai & Kuwait.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-background to-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="p-8">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our core mission is to provide high-quality, cost-effective water treatment 
                  solutions. Continual product development is our mandate; we are constantly 
                  striving to improve our products to suit our customers' individual needs 
                  while ensuring improvement to the environments and ecosystems in which they are applied.
                </p>
              </Card>
              
              <Card className="p-8">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-6">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To be a leading water management company across the world. We aim to 
                  produce the highest quality products and systems to tackle our customers' 
                  water and wastewater treatment requirements at the most competitive prices 
                  with commendable service. "Design & Services at its Best"
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-background to-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">Our Values</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold">What Drives Us</h2>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-24 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">Certifications</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Quality Assured</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We are certified to ISO 9001:2015 quality management system for designing, 
                engineering, manufacturing, supply, erection, commissioning, troubleshooting, 
                operation & maintenance services of water and wastewater treatment plants.
              </p>
            </div>
            
            <Card className="max-w-2xl mx-auto p-8">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-20 h-20 rounded-md bg-primary/10 flex items-center justify-center">
                  <Award className="h-10 w-10 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-xl">ISO 9001:2015</h3>
                  <p className="text-muted-foreground">Quality Management System</p>
                </div>
              </div>
              <Separator className="my-6" />
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Commitment to meet or exceed customer requirements for quality, delivery, performance, and value
                </p>
                <p className="text-sm text-muted-foreground flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Continuous improvement across the organization through world-class business principles
                </p>
                <p className="text-sm text-muted-foreground flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Equipment and accessories confirm to ASME, ANSI, IS2865 and international standards
                </p>
                <p className="text-sm text-muted-foreground flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Treated water qualities confirm to WHO standards and local Pollution Control Board norms
                </p>
              </div>
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </div>
  );
}
