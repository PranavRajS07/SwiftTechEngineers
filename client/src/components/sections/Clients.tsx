import { useState } from "react";
import { Badge } from "@/components/ui/badge";

const clients = [
  { name: "Tata Steel", image: "/generated_images/c1.jpeg" },
  { name: "BHEL", image: "/generated_images/c3.jpeg" },
  { name: "NTPC", image: "/generated_images/c4.jpeg" },
  { name: "SAIL", image: "/generated_images/c5.jpeg" },
  { name: "Reliance Industries", image: "/generated_images/c6.jpeg" },
  { name: "Adani Group", image: "/generated_images/c7.jpeg" },
  { name: "Maruti Suzuki", image: "/generated_images/c8.jpeg" },
  { name: "Hero MotoCorp", image: "/generated_images/c9.jpeg" },
  { name: "Mahindra", image: "/generated_images/c10.jpg" },
  { name: "L&T", image: "/generated_images/c11.jpeg" },
  { name: "UltraTech Cement", image: "/generated_images/c12.jpeg" },
  { name: "Cipla", image: "/generated_images/c13.jpeg" },
  { name: "Sun Pharma", image: "/generated_images/c14.jpeg" },
  { name: "Bajaj Auto", image: "/generated_images/c15.jpeg" },
  { name: "Infosys", image: "/generated_images/c16.jpeg" },
  { name: "Wipro", image: "/generated_images/c17.jpg" },
  { name: "TCS", image: "/generated_images/c18.jpeg" },
];

function ClientLogo({ name, image }: { name: string; image: string }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div
      className="flex-shrink-0 mx-5 w-36 h-16 bg-background rounded-xl flex items-center justify-center border border-border hover:border-primary/40 hover:shadow-md transition-all duration-300 px-3 cursor-pointer"
      data-testid={`logo-client-${name.toLowerCase().replace(/[\s&.]+/g, "-")}`}
    >
      {!imgFailed ? (
        <img
          src={image}
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
            Our Clients
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Over 70 satisfied clients globally. From Fortune 500 corporations and
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
              image={client.image}
            />
          ))}
        </div>

        <div className="flex animate-marquee mt-5" style={{ animationDirection: "reverse" }}>
          {[...clients.slice().reverse(), ...clients.slice().reverse()].map((client, index) => (
            <ClientLogo
              key={`row2-${client.name}-${index}`}
              name={client.name}
              image={client.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
