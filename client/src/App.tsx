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

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/engineers" component={Engineers} />
      <Route path="/altus" component={Altus} />
      <Route path="/industries" component={Industries} />
      <Route path="/industries/:id" component={Industries} />
      <Route path="/consulting" component={Engineers} />
      <Route path="/construction" component={Engineers} />
      <Route path="/services" component={Home} />
      <Route path="/services/:id" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
