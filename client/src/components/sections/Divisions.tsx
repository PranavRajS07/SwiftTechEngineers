import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Droplets, Building2, Cpu } from "lucide-react";

import waterImage from "@assets/generated_images/water_treatment_facility.png";
import aiImage from "@assets/generated_images/ai_software_development_workspace.png";
import constructionImage from "@assets/generated_images/modern_construction_site.png";

function WaterRippleAnimation() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      {[0, 0.9, 1.8].map((delay, i) => (
        <div
          key={i}
          className="absolute rounded-full border-2 border-cyan-400/50"
          style={{
            width: "60px",
            height: "60px",
            animation: "ripple 2.8s ease-out infinite",
            animationDelay: `${delay}s`,
          }}
        />
      ))}
      <Droplets className="h-8 w-8 text-cyan-300/80 relative z-10" />
    </div>
  );
}

function ConstructionAnimation() {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-14 flex items-end gap-px px-0 pointer-events-none overflow-hidden">
      {[0.45, 0.8, 0.55, 1.0, 0.65, 0.85, 0.5, 0.75, 0.9, 0.6].map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-t-sm bg-orange-400/30"
          style={{
            height: `${h * 100}%`,
            animation: "build-up 1.8s ease-out forwards",
            animationDelay: `${i * 0.12}s`,
          }}
        />
      ))}
    </div>
  );
}

function AIAnimation() {
  const nodes = [
    { x: 18, y: 28 },
    { x: 50, y: 18 },
    { x: 82, y: 32 },
    { x: 28, y: 62 },
    { x: 68, y: 68 },
    { x: 50, y: 48 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {nodes.map((n, i) =>
          nodes.slice(i + 1).map((m, j) => (
            <line
              key={`${i}-${j}`}
              x1={n.x}
              y1={n.y}
              x2={m.x}
              y2={m.y}
              stroke="rgba(167, 139, 250, 0.35)"
              strokeWidth="0.6"
            />
          ))
        )}
      </svg>
      {nodes.map((node, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-violet-400/80"
          style={{
            width: "10px",
            height: "10px",
            left: `${node.x}%`,
            top: `${node.y}%`,
            transform: "translate(-50%, -50%)",
            animation: "float-particle 3s ease-in-out infinite",
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}
    </div>
  );
}

const divisions = [
  {
    id: "engineers",
    title: "Swift Tech Engineers",
    subtitle: "Water & Wastewater Treatment",
    description:
      "Pioneer in industrial water treatment since 2006. Designing, manufacturing & commissioning WTP, ETP, STP, RO, DM plants with ISO 9001:2015 certified quality.",
    icon: Droplets,
    image: waterImage,
    href: "/engineers",
    badge: "Since 2006",
    features: ["WTP & ETP Plants", "STP & RO Plants", "O&M Services"],
    animation: "water",
    accentClass: "from-cyan-500/20 to-blue-500/20",
  },
  {
    id: "builders",
    title: "Swift Tech Builders & Constructions",
    subtitle: "Building & Infrastructure",
    description:
      "Specialized in residential and industrial construction, plus innovative house lifting & relocating services for low-lying and flood-prone areas.",
    icon: Building2,
    image: constructionImage,
    href: "/builders",
    features: ["Residential Buildings", "Industrial Structures", "House Lifting"],
    animation: "construction",
    accentClass: "from-orange-500/20 to-amber-500/20",
  },
  {
    id: "altus",
    title: "Swift Altus",
    subtitle: "AI-Powered Software",
    description:
      "Cutting-edge AI software products and custom development services. Building intelligent digital solutions for modern organizations.",
    icon: Cpu,
    image: aiImage,
    href: "/altus",
    badge: "New",
    features: ["AI Products", "Custom Software", "Web Development"],
    animation: "ai",
    accentClass: "from-violet-500/20 to-pink-500/20",
  },
];

export default function Divisions() {
  return (
    <section className="py-24 bg-background" data-testid="section-divisions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Our Companies
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Three Companies, One Vision
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive solutions across water treatment, construction, and AI software.
            all under the trusted Swift Tech umbrella.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {divisions.map((division) => {
            const Icon = division.icon;
            return (
              <Link key={division.id} href={division.href}>
                <Card
                  className="group overflow-hidden cursor-pointer hover-elevate active-elevate-2 transition-all duration-300 h-full border-border hover:border-primary/30"
                  data-testid={`card-division-${division.id}`}
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={division.image}
                      alt={division.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                    {division.animation === "water" && <WaterRippleAnimation />}
                    {division.animation === "construction" && <ConstructionAnimation />}
                    {division.animation === "ai" && <AIAnimation />}

                    {division.badge && (
                      <Badge
                        className="absolute top-4 right-4 z-10"
                        variant={division.badge === "New" ? "default" : "secondary"}
                      >
                        {division.badge}
                      </Badge>
                    )}

                    <div className="absolute bottom-4 left-4 flex items-center gap-3 z-10">
                      <div className="w-11 h-11 rounded-md bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/20">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-base leading-tight">
                          {division.title}
                        </h3>
                        <p className="text-white/75 text-xs">{division.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3">
                      {division.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {division.features.map((feature) => (
                        <Badge key={feature} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
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
