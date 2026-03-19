import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ChevronDown, Droplets } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/water_treatment_facility.png";

const rotatingWords = [
  "Water Treatment Plants (WTP)",
  "Effluent Treatment Plants (ETP)",
  "Sewage Treatment Plants (STP)",
  "RO & DM Plants",
];

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
        setIsVisible(true);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/85" />

      {/* Animated water droplet particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-cyan-400/20 animate-float-particle"
            style={{
              width: `${6 + (i % 4) * 5}px`,
              height: `${6 + (i % 4) * 5}px`,
              left: `${5 + i * 8}%`,
              top: `${10 + (i % 5) * 16}%`,
              animationDelay: `${i * 0.6}s`,
              animationDuration: `${4 + (i % 3)}s`,
            }}
          />
        ))}
      </div>

      {/* Glow orbs */}
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse-subtle" />
        <div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl animate-pulse-subtle"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <Badge
            variant="secondary"
            className="mb-6 bg-white/10 text-white border-white/20 backdrop-blur-sm px-4 py-1.5 text-sm"
          >
            <Droplets className="h-3.5 w-3.5 mr-1.5 inline" />
            ISO 9001:2015 Certified · Est. 2006 · 7+ Countries Served
          </Badge>
        </div>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-fade-in leading-tight"
          style={{ animationDelay: "0.1s" }}
        >
          India's Premier
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-400 bg-clip-text text-transparent">
            Water Treatment
          </span>{" "}
          Specialist
        </h1>

        <div
          className="text-xl sm:text-2xl font-medium text-cyan-300/90 mb-6 h-8 animate-fade-in"
          style={{ animationDelay: "0.15s" }}
        >
          <span
            className={`transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
            data-testid="text-rotating-word"
          >
            {rotatingWords[currentWordIndex]}
          </span>
        </div>

        <p
          className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto mb-10 animate-fade-in leading-relaxed"
          style={{ animationDelay: "0.2s" }}
        >
          We design, build and operate complete water treatment systems — trusted by
          industries across India and beyond.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <Link href="/engineers">
            <Button size="lg" className="group text-base" data-testid="button-explore-services">
              Explore Solutions
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm text-base"
              data-testid="button-get-quote"
            >
              Get a Free Quote
            </Button>
          </Link>
        </div>

        <div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          {[
            { value: "200+", label: "Plants Delivered" },
            { value: "50+", label: "Clients Served" },
            { value: "18+", label: "Years Experience" },
            { value: "6+", label: "Countries" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div
                className="text-3xl sm:text-4xl font-bold text-white"
                data-testid={`text-stat-value-${index}`}
              >
                {stat.value}
              </div>
              <div
                className="text-white/60 text-sm mt-1"
                data-testid={`text-stat-label-${index}`}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animated water wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
        <svg
          viewBox="0 0 1440 90"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
          style={{ height: "90px" }}
        >
          <path
            d="M0,45 C180,80 360,15 540,45 C720,75 900,15 1080,45 C1260,75 1380,40 1440,45 L1440,90 L0,90 Z"
            className="fill-background/20 animate-wave-path"
          />
          <path
            d="M0,60 C240,30 480,80 720,55 C960,30 1200,75 1440,55 L1440,90 L0,90 Z"
            className="fill-background/40 animate-wave-path-2"
          />
          <path
            d="M0,72 C360,50 720,85 1080,65 C1260,57 1380,70 1440,72 L1440,90 L0,90 Z"
            className="fill-background/70"
          />
        </svg>
      </div>

      <button
        onClick={scrollToContent}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-float"
        data-testid="button-scroll-down"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
}
