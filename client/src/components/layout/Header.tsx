import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/ThemeToggle";

const divisions = [
  {
    title: "Swift Tech Engineers",
    description: "Water & Wastewater Treatment Solutions",
    href: "/engineers",
  },
  {
    title: "Swift Tech Builders & Constructions",
    description: "Residential & Industrial Construction",
    href: "/builders",
  },
  {
    title: "Swift Altus",
    description: "AI-Powered Software & Products",
    href: "/altus",
  },
];

const services = [
  { title: "Water Treatment Plants (WTP)", href: "/engineers#wtp" },
  { title: "Effluent Treatment Plants (ETP)", href: "/engineers#etp" },
  { title: "Sewage Treatment Plants (STP)", href: "/engineers#stp" },
  { title: "Reverse Osmosis (RO) Plants", href: "/engineers#ro" },
  { title: "Operation & Maintenance", href: "/engineers#om" },
  { title: "AI Software Development", href: "/altus" },
];

interface HeaderProps {
  onSearchOpen?: () => void;
}

export default function Header({ onSearchOpen }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm"
          : "bg-transparent"
      )}
      data-testid="header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" data-testid="link-home">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">ST</span>
              </div>
              <div className="hidden sm:block">
                <span className="font-bold text-lg">SWIFTTECH</span>
                <span className="text-muted-foreground text-xs block -mt-1">swifttech.in</span>
              </div>
            </div>
          </Link>

          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">
                  Our Companies
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[500px]">
                    {divisions.map((division) => (
                      <li key={division.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={division.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            data-testid={`link-division-${division.title.toLowerCase().replace(/\s+/g, "-")}`}
                          >
                            <div className="text-sm font-medium leading-none">
                              {division.title}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {division.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2">
                    {services.map((service) => (
                      <li key={service.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={service.href}
                            className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                            data-testid={`link-service-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                          >
                            <div className="text-sm font-medium">{service.title}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/industries"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    data-testid="link-industries"
                  >
                    Industries
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/about"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    data-testid="link-about"
                  >
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/careers"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    data-testid="link-careers"
                  >
                    Careers
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-1 lg:gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={onSearchOpen}
              className="hidden sm:flex"
              data-testid="button-search"
            >
              <Search className="h-5 w-5" />
            </Button>
            <ThemeToggle />
            <Link href="/contact">
              <Button data-testid="button-contact" className="hidden sm:flex" size="sm">
                Contact Us
              </Button>
            </Link>

            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden"
                  data-testid="button-mobile-menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80">
                <nav className="flex flex-col gap-4 mt-8">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-muted-foreground text-xs uppercase tracking-wider">
                      Our Companies
                    </h3>
                    {divisions.map((division) => (
                      <Link
                        key={division.title}
                        href={division.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className="block py-2 hover:text-primary transition-colors">
                          {division.title}
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-muted-foreground text-xs uppercase tracking-wider">
                      Services
                    </h3>
                    {services.map((service) => (
                      <Link
                        key={service.title}
                        href={service.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className="block py-2 hover:text-primary transition-colors">
                          {service.title}
                        </div>
                      </Link>
                    ))}
                  </div>
                  <Link href="/industries" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="block py-2 font-medium">Industries</div>
                  </Link>
                  <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="block py-2 font-medium">About</div>
                  </Link>
                  <Link href="/careers" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="block py-2 font-medium">Careers</div>
                  </Link>
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button className="w-full mt-4">Contact Us</Button>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
