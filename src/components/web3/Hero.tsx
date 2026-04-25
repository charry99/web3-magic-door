import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroOrb from "@/assets/hero-orb.jpg";

const stats = [
  { value: "$4.2B+", label: "Total Volume" },
  { value: "1.8M", label: "Active Wallets" },
  { value: "120+", label: "Chains Supported" },
  { value: "99.99%", label: "Uptime" },
];

const Hero = () => (
  <section className="relative pt-36 pb-24 overflow-hidden">
    <div className="container mx-auto px-4 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 glass px-4 py-1.5 text-xs text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Now live on 120+ chains
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
            Your gateway to <span className="text-gradient">the on-chain universe</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl">
            Nebula is the self-custodial Web3 wallet built for speed, privacy and infinite composability across every major chain.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow">
              Launch App <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="glass border-white/10">
              Read Docs
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-glow blur-3xl" aria-hidden />
          <img
            src={heroOrb}
            alt="Glowing crystal orb representing the Nebula Web3 wallet"
            width={1536}
            height={1536}
            className="relative rounded-3xl shadow-elegant border border-white/10"
          />
        </div>
      </div>

      <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="glass p-6 text-center hover:border-white/20 transition-colors">
            <div className="text-3xl sm:text-4xl font-bold text-gradient">{s.value}</div>
            <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;