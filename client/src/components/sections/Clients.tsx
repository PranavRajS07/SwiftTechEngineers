import { useState } from "react";
import { Badge } from "@/components/ui/badge";

const clients = [
  { name: "Tata Steel", domain: "tatasteel.com" },
  { name: "BHEL", domain: "bhel.in" },
  { name: "NTPC", domain: "ntpc.co.in" },
  { name: "SAIL", domain: "sail.co.in" },
  { name: "Reliance Industries", domain: "ril.com" },
  { name: "Adani Group", domain: "adani.com" },
  { name: "Maruti Suzuki", domain: "marutisuzuki.com" },
  { name: "Hero MotoCorp", domain: "heromotocorp.com" },
  { name: "Mahindra", domain: "mahindra.com" },
  { name: "L&T", domain: "larsentoubro.com" },
  { name: "UltraTech Cement", domain: "ultratechcement.com" },
  { name: "Cipla", domain: "cipla.com" },
  { name: "Sun Pharma", domain: "sunpharma.com" },
  { name: "Bajaj Auto", domain: "bajajauto.com" },
  { name: "Infosys", domain: "infosys.com" },
  { name: "Wipro", domain: "wipro.com" },
  { name: "TCS", domain: "tcs.com" },
  { name: "HCL Tech", domain: "hcltech.com" },
  { name: "Tech Mahindra", domain: "techmahindra.com" },
  { name: "Dr. Reddy's", domain: "drreddys.com" },
];

function ClientLogo({ name, domain }: { name: string; domain: string }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div
      className="flex-shrink-0 mx-5 w-36 h-16 bg-background rounded-xl flex items-center justify-center border border-border hover:border-primary/40 hover:shadow-md transition-all duration-300 px-3 cursor-pointer"
      data-testid={`logo-client-${name.toLowerCase().replace(/[\s&.]+/g, "-")}`}
    >
      {!imgFailed ? (
        <img
          src={`https://logo.clearbit.com/${domain}`}
          alt={`${name} logo`}
          className="max-w-full max-h-9 object-contain"
          onError={() => setImgFailed(true)}
          loading="lazy"
        />
      ) : (
        <span className="text-muted-foreground font-semibold text-xs text-center leading-tight">
          {name}
        </span>
      )}
    </div>
  );
}

export default function Clients() {
  return (
    <section className="py-24 bg-card overflow-hidden" data-testid="section-clients">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Our Partners
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Over 70 satisfied clients globally — from Fortune 500 corporations and
            leading industrial groups to public sector undertakings across India and abroad.
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee">
          {[...clients, ...clients].map((client, index) => (
            <ClientLogo
              key={`row1-${client.name}-${index}`}
              name={client.name}
              domain={client.domain}
            />
          ))}
        </div>

        <div className="flex animate-marquee mt-5" style={{ animationDirection: "reverse" }}>
          {[...clients.slice().reverse(), ...clients.slice().reverse()].map((client, index) => (
            <ClientLogo
              key={`row2-${client.name}-${index}`}
              name={client.name}
              domain={client.domain}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
