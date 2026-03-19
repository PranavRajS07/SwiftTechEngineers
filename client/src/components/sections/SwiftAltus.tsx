import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Sparkles, Code, Rocket, Brain, Zap, Shield } from "lucide-react";
import { Link } from "wouter";
import aiWorkspace from "@assets/generated_images/ai_software_development_workspace.png";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Products",
    description: "Intelligent software solutions that automate and optimize your business processes.",
  },
  {
    icon: Code,
    title: "Custom Development",
    description: "Tailored web and mobile applications built with modern technologies.",
  },
  {
    icon: Zap,
    title: "Fast Deployment",
    description: "Agile development methodology ensuring quick time-to-market.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security measures to protect your data and users.",
  },
];

export default function SwiftAltus() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-card" data-testid="section-swift-altus">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <Badge className="mb-4 bg-gradient-to-r from-violet-500 to-purple-500 border-0">
              <Sparkles className="h-3 w-3 mr-1" />
              New Division
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Meet{" "}
              <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Swift Altus
              </span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Our newest division bringing AI-powered software solutions to organizations. 
              From intelligent automation to custom web applications, we're building the 
              future of enterprise technology.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex gap-3">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">{feature.title}</h4>
                      <p className="text-muted-foreground text-xs mt-1">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/altus" onClick={() => window.scrollTo(0, 0)}>
                <Button className="group" data-testid="button-explore-altus">
                  Explore Swift Altus
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/altus/products" onClick={() => window.scrollTo(0, 0)}>
                <Button variant="outline" data-testid="button-view-products">
                  <Rocket className="mr-2 h-4 w-4" />
                  View Products
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-violet-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-2xl" />
            <Card className="relative overflow-hidden">
              <img 
                src={aiWorkspace} 
                alt="Swift Altus AI Development"
                className="w-full aspect-video object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <Badge variant="secondary" className="mb-2 bg-white/20 text-white border-0 backdrop-blur-sm">
                  Coming Soon
                </Badge>
                <h3 className="text-white font-bold text-xl">AI Product Launch</h3>
                <p className="text-white/80 text-sm">Our first AI product is about to deploy</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
