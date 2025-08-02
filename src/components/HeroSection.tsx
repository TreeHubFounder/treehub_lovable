import { Button } from "@/components/ui/button";
import treehubLogo from "@/assets/treehub-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/lovable-uploads/7b0ae223-f141-440e-96fc-1c4df4d96f28.png)` }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <img src={treehubLogo} alt="TreeHub" className="h-12 w-auto" />
          <div className="hidden md:flex items-center space-x-8 text-white">
            <span className="font-medium">Key Benefits</span>
            <span className="font-medium">Testimonials</span>
            <span className="font-medium">Features</span>
            <span className="font-medium">Pricing</span>
          </div>
          <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-treehub-teal">
            Sign Up
          </Button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Never Turn Down a Job Again
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Get Vetted Crews & Gear On-Demand. The Platform Built For The Trade, By A Tree Guy.
        </p>
        <Button variant="hero" size="xl" className="text-xl px-12 py-4">
          Secure My 50% Lifetime Discount
        </Button>
        <p className="text-sm text-white/70 mt-4">
          Limited to the first 100 professionals • No risk, 30-day guarantee
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;