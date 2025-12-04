import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Divisions from "@/components/sections/Divisions";
import Services from "@/components/sections/Services";
import SwiftAltus from "@/components/sections/SwiftAltus";
import Industries from "@/components/sections/Industries";
import Stats from "@/components/sections/Stats";
import Clients from "@/components/sections/Clients";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import SearchDialog from "@/components/SearchDialog";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background" data-testid="page-home">
      <Header onSearchOpen={() => setSearchOpen(true)} />
      <div className="fixed top-5 right-4 sm:right-24 z-50">
        <ThemeToggle />
      </div>
      <main>
        <Hero />
        <Divisions />
        <Services />
        <SwiftAltus />
        <Industries />
        <Stats />
        <Clients />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </div>
  );
}
