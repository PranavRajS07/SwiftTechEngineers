import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

// todo: remove mock functionality
const testimonials = [
  {
    id: 1,
    content: "Swift Tech Engineers delivered an exceptional water treatment solution for our manufacturing facility. Their expertise and professionalism exceeded our expectations.",
    author: "Rajesh Kumar",
    role: "Operations Director",
    company: "Tata Steel",
    initials: "RK",
  },
  {
    id: 2,
    content: "The Swift Altus team built a custom AI solution that transformed our quality control process. The results have been remarkable - 40% improvement in defect detection.",
    author: "Priya Sharma",
    role: "CTO",
    company: "Pharma Corp",
    initials: "PS",
  },
  {
    id: 3,
    content: "Working with Swift Tech has been a game-changer for our power plant operations. Their O&M services ensure our treatment systems run at peak efficiency.",
    author: "Amit Patel",
    role: "Plant Manager",
    company: "NTPC",
    initials: "AP",
  },
  {
    id: 4,
    content: "The ETP system designed by Swift Tech Engineers helped us achieve zero liquid discharge. Their technical expertise is unmatched in the industry.",
    author: "Sunita Reddy",
    role: "Environmental Head",
    company: "Reliance Industries",
    initials: "SR",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-background" data-testid="section-testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Testimonials</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Hear from industry leaders who have partnered with us for their 
            critical engineering needs.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="p-8 md:p-12 text-center" data-testid={`testimonial-${testimonial.id}`}>
                    <Quote className="h-12 w-12 text-primary/20 mx-auto mb-6" />
                    <blockquote className="text-lg md:text-xl leading-relaxed mb-8 text-foreground">
                      "{testimonial.content}"
                    </blockquote>
                    <div className="flex flex-col items-center">
                      <Avatar className="h-16 w-16 mb-4">
                        <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                          {testimonial.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-muted-foreground text-sm">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prev}
              data-testid="button-testimonial-prev"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-border"
                  }`}
                  data-testid={`button-testimonial-dot-${index}`}
                />
              ))}
            </div>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={next}
              data-testid="button-testimonial-next"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
