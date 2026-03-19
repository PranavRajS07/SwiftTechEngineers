import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SearchDialog from "@/components/SearchDialog";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Heart, Leaf, Users, Brain, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const values = [
  {
    icon: Heart,
    title: "Passion for Excellence",
    description: "We believe in delivering the highest quality solutions and services to our clients worldwide."
  },
  {
    icon: Leaf,
    title: "Environmental Commitment",
    description: "We are dedicated to protecting our environment through sustainable water treatment technologies."
  },
  {
    icon: Users,
    title: "Team Growth",
    description: "We invest in our people and provide opportunities for professional development and career advancement."
  },
  {
    icon: Brain,
    title: "Innovation",
    description: "We stay at the forefront of technology and continuously innovate to solve complex challenges."
  }
];

const openings = [
  {
    title: "Design Engineer",
    department: "Swift Tech Engineers",
    description: "Join our engineering team to design innovative water treatment solutions for industrial clients."
  },
  {
    title: "Site Commissioning Specialist",
    department: "Swift Tech Engineers",
    description: "Lead the commissioning of water treatment plants across India and abroad."
  },
  {
    title: "Project Manager",
    department: "All Divisions",
    description: "Manage complex projects from conception to completion with excellent client satisfaction."
  },
  {
    title: "Software Developer",
    department: "Swift Altus",
    description: "Build cutting-edge AI-powered software solutions and custom applications."
  },
  {
    title: "Civil Engineer",
    department: "Swift Tech Builders & Constructions",
    description: "Design and oversee construction of residential and industrial structures."
  },
  {
    title: "Business Development Executive",
    department: "All Divisions",
    description: "Expand our market presence and build strong client relationships globally."
  }
];

export default function Careers() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background" data-testid="page-careers">
      <Header onSearchOpen={() => setSearchOpen(true)} />
      <div className="hidden">
        {/* theme toggle now in header */}
      </div>

      <main className="pt-20">
        <section className="py-24 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <Badge variant="outline" className="mb-4">Join Our Team</Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Work With Purpose
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Swift Tech Engineers and our affiliated companies, we're passionate about creating solutions 
                that make a difference. If you have a passion to learn, grow, and contribute to environmental 
                sustainability, we'd love to hear from you.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">Why Join Us</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold">Our Culture & Values</h2>
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

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">Open Positions</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Current Opportunities</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We're always looking for talented individuals to join our team. Explore our open positions below.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {openings.map((job, index) => (
                <Card key={index} className="p-6 hover-elevate transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{job.title}</h3>
                      <p className="text-sm text-primary mt-1">{job.department}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6">{job.description}</p>
                  <Link href="/contact">
                    <Button variant="outline" size="sm" className="group">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Don't See a Position That Fits?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              If you're passionate about learning, innovation, and contributing to environmental 
              sustainability, we'd love to hear from you. Send us your resume and let us know how 
              you'd like to be part of Swift Tech Engineers' journey.
            </p>
            <a 
              href="mailto:admin@swifttech.in"
              className="inline-flex items-center gap-2 bg-white text-primary hover:bg-white/90 px-6 py-3 rounded-md font-medium transition-colors"
            >
              <Mail className="h-5 w-5" />
              Send Your Application to admin@swifttech.in
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </div>
  );
}
