import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/sections/ContactForm";
import SearchDialog from "@/components/SearchDialog";
import ThemeToggle from "@/components/ThemeToggle";

export default function Contact() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background" data-testid="page-contact">
      <Header onSearchOpen={() => setSearchOpen(true)} />
      <div className="fixed top-5 right-4 sm:right-24 z-50">
        <ThemeToggle />
      </div>
      <main className="pt-20">
        <ContactForm />
      </main>
      <Footer />
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </div>
  );
}
