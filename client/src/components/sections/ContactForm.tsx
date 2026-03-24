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
  { icon: Mail, label: "Email", value: "sales@swifttech.in" },
  { icon: Phone, label: "Phone", value: "044 - 2486 3790, +91 9940150790" },
  { icon: MapPin, label: "Location", value: "Valasaravakkam, Chennai - 600 087" },
  { icon: Clock, label: "Office Hours", value: "Mon – Sat, 9:30 AM – 6:30 PM" },
];

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedDivision, setSelectedDivision] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      division: selectedDivision,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
      } else {
        throw new Error("Server error");
      }
    } catch {
      setIsSubmitting(false);
      toast({
        title: "Something went wrong",
        description: "Please try again or email us directly at sales@swifttech.in.",
        variant: "destructive",
      });
    }
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
              and get back to you within 24 hours at sales@swifttech.in.
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
            and we'll respond within 24 hours to sales@swifttech.in.
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
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
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
              <h3 className="font-semibold text-lg mb-4">Address</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                SWIFTTECH ENGINEERS (INDIA) PVT. LTD.<br/>
                No. 42, Sivan Street,<br/>
                Sri Venkatesaperumal Nagar,<br/>
                Valasaravakkam,<br/>
                Chennai - 600 087,<br/>
                Tamil Nadu, India
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Department Emails</h3>
              <div className="space-y-2 text-sm">
                <p><span className="text-muted-foreground">Sales:</span> <span className="font-medium">sales@swifttech.in</span></p>
                <p><span className="text-muted-foreground">Admin:</span> <span className="font-medium">admin@swifttech.in</span></p>
                <p><span className="text-muted-foreground">Purchase:</span> <span className="font-medium">purchase@swifttech.in</span></p>
                <p><span className="text-muted-foreground">Projects:</span> <span className="font-medium">projects@swifttech.in</span></p>
              </div>
            </div>
          </div>

          <Card className="lg:col-span-3 p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Full Name</label>
                  <Input
                    name="name"
                    placeholder="John Doe"
                    required
                    data-testid="input-name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address</label>
                  <Input
                    name="email"
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
                    name="company"
                    placeholder="Your Company"
                    data-testid="input-company"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone</label>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    data-testid="input-phone"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Division</label>
                <Select onValueChange={(v) => setSelectedDivision(v)}>
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
                  name="message"
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
