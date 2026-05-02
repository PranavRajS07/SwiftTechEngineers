import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/sections/ContactForm";
import SearchDialog from "@/components/SearchDialog";

export default function Contact() {
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash === "#contact-form") {
      document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="min-h-screen bg-background" data-testid="page-contact">
      <Header onSearchOpen={() => setSearchOpen(true)} />
      <main className="pt-20">
        <ContactForm />
      </main>
      <Footer />
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </div>
  );
}
