import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Linkedin, 
  Twitter, 
  Facebook, 
  Mail, 
  Phone, 
  MapPin
} from "lucide-react";

const quickLinks = [
  { title: "About Us", href: "/about" },
  { title: "Industries", href: "/industries" },
  { title: "Contact", href: "/contact" },
];

const divisions = [
  { title: "Swift Tech Engineers", href: "/engineers" },
  { title: "Swift Tech Builders & Constructions", href: "/builders" },
  { title: "Swift Altus", href: "/altus" },
];

const services = [
  { title: "Water Treatment Plants (WTP)", href: "/engineers#wtp" },
  { title: "Effluent Treatment Plants (ETP)", href: "/engineers#etp" },
  { title: "Sewage Treatment Plants (STP)", href: "/engineers#stp" },
  { title: "RO Plants", href: "/engineers#ro" },
  { title: "Operation & Maintenance", href: "/engineers#om" },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">ST</span>
              </div>
              <div>
                <span className="font-bold text-lg">Swift Tech Engineers</span>
                <span className="text-muted-foreground text-xs block -mt-1">(India) Pvt. Ltd.</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Pioneer in industrial water and wastewater treatment solutions since 2006. 
              Serving India and abroad with state-of-the-art treatment technologies.
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" data-testid="button-linkedin">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" data-testid="button-twitter">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" data-testid="button-facebook">
                <Facebook className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Our Companies</h3>
            <ul className="space-y-2">
              {divisions.map((division) => (
                <li key={division.title}>
                  <Link href={division.href}>
                    <span 
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm cursor-pointer"
                      data-testid={`link-footer-division-${division.title.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {division.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.title}>
                  <Link href={service.href}>
                    <span 
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm cursor-pointer"
                      data-testid={`link-footer-service-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {service.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Serving India, Sri Lanka, Bangladesh, Maldives, Saudi Arabia, UAE & Kuwait</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@swifttech.in</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>Contact us for inquiries</span>
              </div>
            </div>
            <div className="pt-2">
              <Link href="/contact">
                <Button variant="outline" size="sm" className="w-full" data-testid="button-footer-contact">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Swift Tech Engineers (India) Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <span className="text-xs">ISO 9001:2015 Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
