import { Badge } from "@/components/ui/badge";

// todo: remove mock functionality - these would be actual client logos
const clientLogos = [
  "Tata Steel", "BHEL", "NTPC", "SAIL", "Reliance", "Adani", "Maruti Suzuki",
  "Hero MotoCorp", "Mahindra", "Bajaj Auto", "L&T", "UltraTech", "Cipla",
  "Sun Pharma", "Dr. Reddy's", "Infosys", "Wipro", "HCL", "TCS", "Tech Mahindra",
];

export default function Clients() {
  return (
    <section className="py-24 bg-card overflow-hidden" data-testid="section-clients">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Our Partners</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Over 70 satisfied clients globally, including Fortune 500 companies 
            and leading industrial groups.
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-card to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-card to-transparent z-10" />
        
        <div className="flex animate-marquee">
          {[...clientLogos, ...clientLogos].map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 w-40 h-20 bg-background rounded-md flex items-center justify-center border border-border hover:border-primary/50 transition-colors"
              data-testid={`logo-client-${index}`}
            >
              <span className="text-muted-foreground font-medium text-sm text-center px-2">
                {client}
              </span>
            </div>
          ))}
        </div>

        <div className="flex animate-marquee mt-6" style={{ animationDirection: "reverse" }}>
          {[...clientLogos.slice().reverse(), ...clientLogos.slice().reverse()].map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 w-40 h-20 bg-background rounded-md flex items-center justify-center border border-border hover:border-primary/50 transition-colors"
            >
              <span className="text-muted-foreground font-medium text-sm text-center px-2">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
