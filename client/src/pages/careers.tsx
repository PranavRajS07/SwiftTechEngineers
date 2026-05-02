import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SearchDialog from "@/components/SearchDialog";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import {
  Heart,
  Leaf,
  Users,
  Brain,
  MapPin,
  Briefcase,
  Send,
  CheckCircle,
  Building2,
  Cpu,
  HardHat,
  UserCheck,
  Calculator,
  PhoneCall,
} from "lucide-react";import officeImage from "@assets/generated_images/modern_corporate_office_building.png";
const values = [
  { icon: Heart, title: "Passion for Excellence", description: "We deliver the highest quality water treatment solutions, built to last." },
  { icon: Leaf, title: "Environmental Commitment", description: "Protecting the environment through sustainable water technologies is our mission." },
  { icon: Users, title: "Team Growth", description: "We invest in our people. Structured mentoring, training, and career growth." },
  { icon: Brain, title: "Innovation", description: "We stay at the forefront of water science and digital technology." },
];

type Job = {
  title: string;
  dept: string;
  deptIcon: typeof HardHat;
  type: "On-site" | "Off-site" | "Remote";
  level: "Fresher" | "Experienced" | "Fresher / Experienced";
  description: string;
};

const openings: Job[] = [
  {
    title: "Junior Process Engineer",
    dept: "Swift Tech Engineers",
    deptIcon: Building2,
    type: "Off-site",
    level: "Fresher",
    description:
      "Support our design team in preparing process flow diagrams, equipment sizing, and documentation for WTP, ETP, and STP systems. B.E. Chemical/Environmental preferred.",
  },
  {
    title: "Senior WTP / ETP Design Engineer",
    dept: "Swift Tech Engineers",
    deptIcon: Building2,
    type: "Off-site",
    level: "Experienced",
    description:
      "Design and detail water & effluent treatment plants for industrial clients. AutoCAD, PFD/P&ID preparation, and 3+ years of WTP experience required.",
  },
  {
    title: "Site Commissioning Engineer",
    dept: "Swift Tech Engineers",
    deptIcon: HardHat,
    type: "On-site",
    level: "Experienced",
    description:
      "Commission WTP, ETP, and RO plants at client facilities across India. Willing to travel. 2+ years of hands-on commissioning experience preferred.",
  },
  {
    title: "Site Supervisor",
    dept: "Swift Tech Engineers",
    deptIcon: HardHat,
    type: "On-site",
    level: "Experienced",
    description:
      "Supervise day-to-day site activities, coordinate with vendors and contractors, and ensure timely project execution at plant sites.",
  },
  {
    title: "Junior Civil Engineer",
    dept: "Swift Tech Builders & Constructions",
    deptIcon: HardHat,
    type: "On-site",
    level: "Fresher",
    description:
      "Assist senior engineers on construction sites. Residential, industrial, and RCC tank works. Prepare daily progress reports and coordinate with site teams.",
  },
  {
    title: "On-site Civil Engineer",
    dept: "Swift Tech Builders & Constructions",
    deptIcon: HardHat,
    type: "On-site",
    level: "Experienced",
    description:
      "Lead structural and civil works at residential and industrial sites. B.E. Civil with 3+ years of on-site experience required.",
  },
  {
    title: "Client Relationship Executive",
    dept: "All Divisions",
    deptIcon: PhoneCall,
    type: "Off-site",
    level: "Fresher / Experienced",
    description:
      "Handle inbound client enquiries, follow up on proposals, build long-term relationships with industrial clients, and liaise with the technical team.",
  },
  {
    title: "Business Development Executive",
    dept: "All Divisions",
    deptIcon: Briefcase,
    type: "Off-site",
    level: "Experienced",
    description:
      "Identify new business opportunities in water treatment, construction, and AI verticals. Generate leads, prepare proposals, and close deals.",
  },
  {
    title: "Sales Executive",
    dept: "All Divisions",
    deptIcon: Briefcase,
    type: "Off-site",
    level: "Fresher / Experienced",
    description:
      "Handle sales for water treatment equipment and services. Cold calling, lead follow-up, and coordination with technical team on project proposals.",
  },
  {
    title: "Accounts Executive",
    dept: "Administration",
    deptIcon: Calculator,
    type: "Off-site",
    level: "Fresher",
    description:
      "Assist with day-to-day accounting. Billing, invoicing, bank reconciliation, and data entry. Tally ERP knowledge preferred.",
  },
  {
    title: "Accounts Manager / Senior Accountant",
    dept: "Administration",
    deptIcon: Calculator,
    type: "Off-site",
    level: "Experienced",
    description:
      "Manage full accounts function including GST returns, TDS, P&L reporting, and statutory compliance. 4+ years of experience required.",
  },
  {
    title: "Receptionist / Front Office Executive",
    dept: "Administration",
    deptIcon: UserCheck,
    type: "Off-site",
    level: "Fresher",
    description:
      "Manage front office operations. Handle calls, greet visitors, manage correspondence, and provide administrative support to the team.",
  },
  {
    title: "Full Stack Developer",
    dept: "Swift Altus",
    deptIcon: Cpu,
    type: "Remote",
    level: "Experienced",
    description:
      "Build web applications and digital products using React, Node.js, and modern frameworks. 2+ years experience. Portfolio required.",
  },
  {
    title: "AI / ML Engineer",
    dept: "Swift Altus",
    deptIcon: Cpu,
    type: "Remote",
    level: "Experienced",
    description:
      "Develop AI-powered solutions, integrate ML models, and build intelligent features into our digital products. Python, TensorFlow/PyTorch experience required.",
  },
];

const levelColor: Record<string, string> = {
  Fresher: "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300",
  Experienced: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
  "Fresher / Experienced": "bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300",
};

const typeColor: Record<string, string> = {
  "On-site": "bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300",
  "Off-site": "bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300",
  Remote: "bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300",
};

export default function Careers() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [filterLevel, setFilterLevel] = useState<string>("All");
  const [filterType, setFilterType] = useState<string>("All");
  const { toast } = useToast();

  const filtered = openings.filter((j) => {
    const levelMatch = filterLevel === "All" || j.level.includes(filterLevel);
    const typeMatch = filterType === "All" || j.type === filterType;
    return levelMatch && typeMatch;
  });

  const handleApply = (title: string) => {
    setSelectedPosition(title);
    document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const action = form.action || window.location.pathname;
    const formData = new FormData(form);

    try {
      const response = await fetch(action, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (!response.ok) {
        throw new Error(`Application submission failed (${response.status})`);
      }

      setIsSubmitted(true);
      toast({ title: "Application submitted!", description: "We'll review your application and get back to you." });
    } catch (error) {
      console.error("Careers form submit error", error);
      toast({ title: "Something went wrong", description: "Please try again or email admin@swifttech.in directly.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background" data-testid="page-careers">
      <Header onSearchOpen={() => setSearchOpen(true)} />

      <main className="pt-24 lg:pt-28">
        {/* Hero */}
        <section className="relative py-20 min-h-[60vh] flex items-center">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${officeImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto text-primary-foreground">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">Join Our Team</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Work With Purpose
            </h1>
            <p className="text-lg text-primary-foreground/90 leading-relaxed max-w-2xl mx-auto">
              Be part of a team building cleaner water, stronger infrastructure, and smarter
              technology for India and beyond.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Why Join Us</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold">Our Culture & Values</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <Card key={i} className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{v.title}</h3>
                    <p className="text-muted-foreground text-sm">{v.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Job listings */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Open Positions</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Current Opportunities</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We welcome both freshers eager to learn and experienced professionals looking for meaningful work.
              </p>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3 justify-center mb-10">
              <div className="flex gap-2 items-center">
                <span className="text-sm text-muted-foreground">Level:</span>
                {["All", "Fresher", "Experienced"].map((l) => (
                  <Button
                    key={l}
                    size="sm"
                    variant={filterLevel === l ? "default" : "outline"}
                    onClick={() => setFilterLevel(l)}
                    data-testid={`filter-level-${l}`}
                  >
                    {l}
                  </Button>
                ))}
              </div>
              <div className="flex gap-2 items-center">
                <span className="text-sm text-muted-foreground">Type:</span>
                {["All", "On-site", "Off-site", "Remote"].map((t) => (
                  <Button
                    key={t}
                    size="sm"
                    variant={filterType === t ? "default" : "outline"}
                    onClick={() => setFilterType(t)}
                    data-testid={`filter-type-${t}`}
                  >
                    {t}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-5">
              {filtered.map((job, i) => {
                const DeptIcon = job.deptIcon;
                return (
                  <Card key={i} className="p-6 hover-elevate transition-all flex flex-col" data-testid={`card-job-${i}`}>
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <DeptIcon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-base font-bold leading-tight">{job.title}</h3>
                          <p className="text-xs text-muted-foreground mt-0.5">{job.dept}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 mb-3">
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full flex items-center gap-1 ${typeColor[job.type]}`}>
                        <MapPin className="h-3 w-3" />
                        {job.type}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-5">
                      {job.description}
                    </p>
                    <Button
                      size="sm"
                      onClick={() => handleApply(job.title)}
                      data-testid={`button-apply-${i}`}
                    >
                      Apply for this Role
                    </Button>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section id="apply-form" className="py-20 bg-card">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {isSubmitted ? (
              <Card className="p-12 text-center">
                <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold mb-3">Application Received!</h2>
                <p className="text-muted-foreground mb-8">
                  Thank you for applying. Our HR team will review your application and reach out to you shortly at <strong>admin@swifttech.in</strong>.
                </p>
                <Button onClick={() => { setIsSubmitted(false); setSelectedPosition(""); }}>
                  Submit Another Application
                </Button>
              </Card>
            ) : (
              <>
                <div className="text-center mb-10">
                  <Badge variant="outline" className="mb-4">Apply Now</Badge>
                  <h2 className="text-3xl sm:text-4xl font-bold mb-3">
                    {selectedPosition ? `Applying for: ${selectedPosition}` : "Send Your Application"}
                  </h2>
                  <p className="text-muted-foreground">
                    Fill in your details below. Your application will be sent directly to <span className="font-medium">admin@swifttech.in</span>.
                  </p>
                </div>

                <Card className="p-6 md:p-8">
                  <form 
                    name="careers" 
                    method="POST"
                    action=""
                    data-netlify="true"
                    onSubmit={handleSubmit} 
                    className="space-y-5"
                  >
                    <input type="hidden" name="form-name" value="careers" />
                    <input type="hidden" name="position" value={selectedPosition} />
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Full Name *</label>
                        <Input name="name" placeholder="Your full name" required data-testid="input-applicant-name" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Email Address *</label>
                        <Input name="email" type="email" placeholder="you@email.com" required data-testid="input-applicant-email" />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Phone Number</label>
                        <Input name="phone" type="tel" placeholder="+91 98765 43210" data-testid="input-applicant-phone" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Position Applied For *</label>
                        {selectedPosition ? (
                          <div className="flex items-center gap-2">
                            <Input value={selectedPosition} readOnly className="bg-muted" data-testid="input-position-display" />
                            <Button type="button" variant="ghost" size="sm" onClick={() => setSelectedPosition("")}>Change</Button>
                          </div>
                        ) : (
                          <Select
                            onValueChange={(v) => setSelectedPosition(v)}
                            required
                          >
                            <SelectTrigger data-testid="select-position">
                              <SelectValue placeholder="Select a position" />
                            </SelectTrigger>
                            <SelectContent>
                              {openings.map((j) => (
                                <SelectItem key={j.title} value={j.title}>{j.title}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        )}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Experience Level</label>
                        <Select name="experience">
                          <SelectTrigger data-testid="select-experience">
                            <SelectValue placeholder="Select experience" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="fresher">Fresher (0–1 year)</SelectItem>
                            <SelectItem value="1-3">1–3 Years</SelectItem>
                            <SelectItem value="3-5">3–5 Years</SelectItem>
                            <SelectItem value="5+">5+ Years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Work Type Preference</label>
                        <Select name="workType">
                          <SelectTrigger data-testid="select-work-type">
                            <SelectValue placeholder="On-site / Off-site / Any" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="on-site">On-site</SelectItem>
                            <SelectItem value="off-site">Off-site / Office</SelectItem>
                            <SelectItem value="remote">Remote</SelectItem>
                            <SelectItem value="any">Open to Any</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Why do you want to join SwiftTech?</label>
                      <Textarea
                        name="message"
                        placeholder="Tell us about yourself, your experience, and why you'd like to be part of our team..."
                        rows={5}
                        data-testid="input-cover-letter"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting || !selectedPosition}
                      data-testid="button-submit-application"
                    >
                      {isSubmitting ? "Submitting..." : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Submit Application
                        </>
                      )}
                    </Button>

                    <p className="text-center text-xs text-muted-foreground">
                      Your details will be sent to admin@swifttech.in. We do not share your information with third parties.
                    </p>
                  </form>
                </Card>
              </>
            )}
          </div>
        </section>
      </main>

      <Footer />
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </div>
  );
}
