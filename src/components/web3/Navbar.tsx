import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";

const Navbar = () => (
  <header className="fixed top-0 left-0 right-0 z-50">
    <div className="container mx-auto mt-4">
      <nav className="glass flex items-center justify-between px-4 sm:px-6 py-3">
        <a href="#" className="flex items-center gap-2 font-bold text-lg">
          <span className="h-8 w-8 rounded-lg bg-gradient-primary shadow-glow" />
          <span>Nebula</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#tokenomics" className="hover:text-foreground transition-colors">Tokenomics</a>
          <a href="#roadmap" className="hover:text-foreground transition-colors">Roadmap</a>
          <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
        </div>
        <Button variant="default" className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow">
          <Wallet className="mr-2 h-4 w-4" /> Connect
        </Button>
      </nav>
    </div>
  </header>
);

export default Navbar;