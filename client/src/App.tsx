import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Profile from "@/pages/Profile";
import Assessment from "@/pages/Assessment";
import Results from "@/pages/Results";
import Universities from "@/pages/Universities";
import About from "@/pages/About";
import Login from "@/pages/Login";
import Contact from "@/pages/Contact";
import NSFAS from "@/pages/NSFAS";
import Scholarships from "@/pages/Scholarships";
import Deadlines from "@/pages/Deadlines";
import Careers from "@/pages/Careers";
import Blog from "@/pages/Blog";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import Cookies from "@/pages/Cookies";
import WebsiteMap from "@/pages/WebsiteMap";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ProfileProvider } from "@/context/ProfileContext";

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/assessment" component={Assessment} />
          <Route path="/results" component={Results} />
          <Route path="/universities" component={Universities} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/contact" component={Contact} />
          <Route path="/nsfas" component={NSFAS} />
          <Route path="/scholarships" component={Scholarships} />
          <Route path="/deadlines" component={Deadlines} />
          <Route path="/careers" component={Careers} />
          <Route path="/blog" component={Blog} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/terms" component={Terms} />
          <Route path="/cookies" component={Cookies} />
          <Route path="/website-map" component={WebsiteMap} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ProfileProvider>
        <Router />
        <Toaster />
      </ProfileProvider>
    </QueryClientProvider>
  );
}

export default App;
