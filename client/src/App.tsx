import { useState } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Engineers from "@/pages/engineers";
import Altus from "@/pages/altus";
import Industries from "@/pages/industries";
import Builders from "@/pages/builders";
import Careers from "@/pages/careers";
import SplashIntro from "@/components/SplashIntro";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/engineers" component={Engineers} />
      <Route path="/altus" component={Altus} />
      <Route path="/builders" component={Builders} />
      <Route path="/careers" component={Careers} />
      <Route path="/industries" component={Industries} />
      <Route path="/industries/:id" component={Industries} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        {!splashDone && (
          <SplashIntro onComplete={() => setSplashDone(true)} />
        )}
        <div
          style={{
            opacity: splashDone ? 1 : 0,
            transition: "opacity 0.6s ease",
          }}
        >
          <Router />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
