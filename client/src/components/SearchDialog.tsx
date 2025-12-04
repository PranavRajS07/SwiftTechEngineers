import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, ArrowRight, Droplet, Cpu, Building, Compass } from "lucide-react";
import { Link } from "wouter";

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// todo: remove mock functionality - this would be actual search data
const searchData = [
  { title: "Water Treatment Plants", category: "Services", href: "/services/wtp", icon: Droplet },
  { title: "Effluent Treatment Plants", category: "Services", href: "/services/etp", icon: Droplet },
  { title: "Sewage Treatment Plants", category: "Services", href: "/services/stp", icon: Droplet },
  { title: "RO Plants", category: "Services", href: "/services/ro", icon: Droplet },
  { title: "AI Software Development", category: "Swift Altus", href: "/services/ai", icon: Cpu },
  { title: "Web Development", category: "Swift Altus", href: "/services/software", icon: Cpu },
  { title: "Swift Tech Engineers", category: "Division", href: "/engineers", icon: Droplet },
  { title: "Swift Altus", category: "Division", href: "/altus", icon: Cpu },
  { title: "Engineering & Consulting", category: "Division", href: "/consulting", icon: Compass },
  { title: "Building Construction", category: "Division", href: "/construction", icon: Building },
  { title: "Automobile Industry", category: "Industry", href: "/industries/automobile", icon: Building },
  { title: "Power Sector", category: "Industry", href: "/industries/power", icon: Building },
  { title: "Pharmaceutical Industry", category: "Industry", href: "/industries/pharmaceutical", icon: Building },
  { title: "About Us", category: "Company", href: "/about", icon: Building },
  { title: "Contact", category: "Company", href: "/contact", icon: Building },
];

export default function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(searchData.slice(0, 6));

  useEffect(() => {
    if (query.trim() === "") {
      setResults(searchData.slice(0, 6));
    } else {
      const filtered = searchData.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered.slice(0, 8));
    }
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onOpenChange]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-xl p-0 gap-0" data-testid="dialog-search">
        <DialogHeader className="px-4 py-3 border-b border-border">
          <div className="flex items-center gap-3">
            <Search className="h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search services, divisions, industries..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="border-0 focus-visible:ring-0 px-0 text-base"
              autoFocus
              data-testid="input-search"
            />
            <Badge variant="secondary" className="text-xs">
              ESC
            </Badge>
          </div>
        </DialogHeader>
        <div className="max-h-[400px] overflow-y-auto p-2">
          {results.length === 0 ? (
            <div className="py-12 text-center text-muted-foreground">
              No results found for "{query}"
            </div>
          ) : (
            <div className="space-y-1">
              {results.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Link 
                    key={index} 
                    href={item.href}
                    onClick={() => onOpenChange(false)}
                  >
                    <div 
                      className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent cursor-pointer group transition-colors"
                      data-testid={`search-result-${index}`}
                    >
                      <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm truncate">{item.title}</div>
                        <div className="text-muted-foreground text-xs">{item.category}</div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
        <div className="px-4 py-3 border-t border-border text-xs text-muted-foreground flex items-center gap-4">
          <span className="flex items-center gap-1">
            <Badge variant="outline" className="text-xs px-1">↵</Badge> to select
          </span>
          <span className="flex items-center gap-1">
            <Badge variant="outline" className="text-xs px-1">↑↓</Badge> to navigate
          </span>
          <span className="flex items-center gap-1">
            <Badge variant="outline" className="text-xs px-1">esc</Badge> to close
          </span>
        </div>
      </DialogContent>
    </Dialog>
  );
}
