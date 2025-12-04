import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Linkedin, 
  Twitter, 
  Facebook, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight
} from "lucide-react";

const quickLinks = [
  { title: "About Us", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Industries", href: "/industries" },
  { title: "Projects", href: "/projects" },
  { title: "Careers", href: "/careers" },
  { title: "Contact", href: "/contact" },
];

const divisions = [
  { title: "Swift Tech Engineers", href: "/engineers" },
  { title: "Swift Altus", href: "/altus" },
  { title: "Engineering & Consulting", href: "/consulting" },
  { title: "Building Construction", href: "/construction" },
];

const services = [
  { title: "Water Treatment Plants", href: "/services/wtp" },
  { title: "Effluent Treatment", href: "/services/etp" },
  { title: "AI Software Development", href: "/services/ai" },
  { title: "Custom Software", href: "/services/software" },
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
                <span className="font-bold text-lg">Swift Tech</span>
                <span className="text-muted-foreground text-sm block -mt-1">Group</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A pioneer in industrial water treatment, building construction, and AI-powered 
              software solutions. Serving globally since 2006.
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
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <Link href={link.href}>
                    <span 
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm cursor-pointer"
                      data-testid={`link-footer-${link.title.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {link.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Our Divisions</h3>
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
            <h3 className="font-semibold">Newsletter</h3>
            <p className="text-muted-foreground text-sm">
              Subscribe to get the latest updates on our services and innovations.
            </p>
            <div className="flex gap-2">
              <Input 
                placeholder="Enter your email" 
                type="email"
                data-testid="input-newsletter-email"
              />
              <Button size="icon" data-testid="button-subscribe">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-2 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@swifttech.in</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+91 1234 567890</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Swift Tech Group. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="/privacy">
              <span className="hover:text-foreground transition-colors cursor-pointer">
                Privacy Policy
              </span>
            </Link>
            <Link href="/terms">
              <span className="hover:text-foreground transition-colors cursor-pointer">
                Terms of Service
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
