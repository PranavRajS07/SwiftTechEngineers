import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SearchDialog from "@/components/SearchDialog";
import ThemeToggle from "@/components/ThemeToggle";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Code, Brain, Rocket, Globe, Zap, Shield, Clock, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import aiWorkspace from "@assets/generated_images/ai_software_development_workspace.png";

const services = [
  { 
    icon: Brain, 
    title: "AI-Powered Solutions", 
    description: "Intelligent automation, predictive analytics, and machine learning applications for enterprise needs.",
    features: ["Process Automation", "Predictive Analytics", "Computer Vision", "NLP Solutions"]
  },
  { 
    icon: Globe, 
    title: "Web Development", 
    description: "Modern, responsive websites and web applications built with cutting-edge technologies.",
    features: ["React/Next.js", "Node.js Backend", "Cloud Deployment", "API Integration"]
  },
  { 
    icon: Code, 
    title: "Custom Software", 
    description: "Tailored software solutions designed specifically for your organization's unique challenges.",
    features: ["ERP Systems", "CRM Solutions", "Workflow Tools", "Data Platforms"]
  },
  { 
    icon: Rocket, 
    title: "Digital Transformation", 
    description: "End-to-end digital transformation consulting and implementation services.",
    features: ["Strategy Consulting", "Legacy Migration", "Cloud Adoption", "Process Optimization"]
  },
];

const whyChooseUs = [
  { icon: Zap, title: "Fast Delivery", description: "Agile methodology for quick time-to-market" },
  { icon: Shield, title: "Enterprise Security", description: "Bank-grade security for your data" },
  { icon: Clock, title: "24/7 Support", description: "Round-the-clock technical assistance" },
  { icon: CheckCircle, title: "Quality Assured", description: "Rigorous testing and QA processes" },
];

const techStack = [
  "React", "Next.js", "Node.js", "Python", "TensorFlow", "AWS", "Docker", "Kubernetes", "PostgreSQL", "MongoDB"
];

export default function Altus() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background" data-testid="page-altus">
      <Header onSearchOpen={() => setSearchOpen(true)} />
      <div className="fixed top-5 right-4 sm:right-24 z-50">
        <ThemeToggle />
      </div>
      
      <main className="pt-20">
        <section className="relative py-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${aiWorkspace})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-purple-900/50" />
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-violet-500/30 rounded-full blur-3xl animate-pulse-subtle" />
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-pulse-subtle" style={{ animationDelay: "1s" }} />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <Badge className="mb-4 bg-gradient-to-r from-violet-500/20 to-pink-500/20 text-violet-400 border-violet-500/30">
                <Sparkles className="h-3 w-3 mr-1" />
                New Division
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Swift{" "}
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Altus
                </span>
              </h1>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                Building the future of enterprise technology with AI-powered software 
                solutions. From intelligent automation to custom web applications, 
                we transform organizations through innovation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button size="lg" className="group bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 border-0">
                    Start a Project
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  <Rocket className="mr-2 h-4 w-4" />
                  View Products
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">What We Build</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Our Services
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive software development services to accelerate your 
                digital transformation journey.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="p-6 hover-elevate cursor-pointer">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-md bg-gradient-to-br from-violet-500/20 to-purple-500/20 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-violet-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{service.title}</h3>
                        <p className="text-muted-foreground text-sm mt-1">{service.description}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 pl-16">
                      {service.features.map((feature) => (
                        <Badge key={feature} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-24 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <Badge variant="outline" className="mb-4">Coming Soon</Badge>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                  Our First AI Product
                </h2>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  We're working on an innovative AI product that will revolutionize 
                  how organizations handle their operations. Stay tuned for the 
                  official launch announcement.
                </p>
                <Card className="p-6 bg-gradient-to-br from-violet-500/10 to-purple-500/10 border-violet-500/20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-violet-500/20 flex items-center justify-center">
                      <Sparkles className="h-6 w-6 text-violet-500" />
                    </div>
                    <div>
                      <h3 className="font-bold">AI Product Alpha</h3>
                      <p className="text-muted-foreground text-sm">Currently in development</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Development Progress</span>
                      <span className="font-medium">75%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full" />
                    </div>
                  </div>
                </Card>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-6">Why Choose Swift Altus</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {whyChooseUs.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <Card key={index} className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium text-sm">{item.title}</h4>
                            <p className="text-muted-foreground text-xs">{item.description}</p>
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>

                <div className="mt-8">
                  <h3 className="font-semibold text-sm text-muted-foreground mb-4">TECH STACK</h3>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
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
