import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, Clock, CheckCircle } from "lucide-react";

const divisions = [
  { value: "engineers", label: "Swift Tech Engineers - Water Treatment" },
  { value: "builders", label: "Swift Tech Builders & Constructions" },
  { value: "altus", label: "Swift Altus - Software & AI" },
];

const contactInfo = [
  { icon: Mail, label: "Email", value: "info@swifttech.in" },
  { icon: Phone, label: "Phone", value: "+91 1234 567890" },
  { icon: MapPin, label: "Location", value: "Bangalore, India" },
  { icon: Clock, label: "Hours", value: "Mon-Sat: 9AM - 6PM IST" },
];

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // todo: remove mock functionality - this would be actual form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  if (isSubmitted) {
    return (
      <section className="py-24 bg-background" data-testid="section-contact-success">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-2xl mx-auto p-12 text-center">
            <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
            <p className="text-muted-foreground mb-8">
              Your message has been received. Our team will review your inquiry 
              and get back to you within 24 hours.
            </p>
            <Button onClick={() => setIsSubmitted(false)} data-testid="button-send-another">
              Send Another Message
            </Button>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-background" data-testid="section-contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Get in Touch</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Let's Start a Conversation
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Have a project in mind? We'd love to hear about it. Send us a message 
            and we'll respond within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{item.label}</div>
                        <div className="font-medium">{item.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Global Presence</h3>
              <div className="flex flex-wrap gap-2">
                {["India", "Sri Lanka", "Bangladesh", "Maldives", "Saudi Arabia", "Dubai", "Kuwait"].map((country) => (
                  <Badge key={country} variant="secondary">{country}</Badge>
                ))}
              </div>
            </div>
          </div>

          <Card className="lg:col-span-3 p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Full Name</label>
                  <Input 
                    placeholder="John Doe" 
                    required 
                    data-testid="input-name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address</label>
                  <Input 
                    type="email" 
                    placeholder="john@company.com" 
                    required 
                    data-testid="input-email"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Company</label>
                  <Input 
                    placeholder="Your Company" 
                    data-testid="input-company"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone</label>
                  <Input 
                    type="tel" 
                    placeholder="+91 98765 43210" 
                    data-testid="input-phone"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Division</label>
                <Select>
                  <SelectTrigger data-testid="select-division">
                    <SelectValue placeholder="Select a division" />
                  </SelectTrigger>
                  <SelectContent>
                    {divisions.map((division) => (
                      <SelectItem key={division.value} value={division.value}>
                        {division.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea 
                  placeholder="Tell us about your project requirements..."
                  rows={5}
                  required
                  data-testid="input-message"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
                data-testid="button-submit"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
