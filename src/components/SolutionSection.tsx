import { CheckCircle, Users, Shield, Network } from "lucide-react";

const SolutionSection = () => {
  const solutions = [
    {
      icon: <CheckCircle className="w-8 h-8 text-treehub-teal" />,
      headline: "Get High-Value, Qualified Jobs",
      description: "Connect with serious clients who value professional tree care. No more price shoppers or tire-kickers—just profitable work from property owners who understand quality costs more. Every lead is pre-qualified and ready to invest in professional service.",
      benefit: "No more price shoppers, just profitable work."
    },
    {
      icon: <Users className="w-8 h-8 text-treehub-teal" />,
      headline: "Run Your Entire Business From One App", 
      description: "Manage everything from lead to payment in a single, intuitive platform. Schedule crews, send quotes, track jobs, process payments, and handle client communication—all from your phone. Your truck cab stops being your office.",
      benefit: "From lead to payment, all in one place."
    },
    {
      icon: <Shield className="w-8 h-8 text-treehub-teal" />,
      headline: "Stand Out as a Verified Professional",
      description: "Your insurance, licenses, and certifications are prominently displayed on your profile. Clients can instantly see you're the real deal—fully insured, properly certified, and committed to safety. Finally, a way to prove your value and command the prices you deserve.",
      benefit: "Prove your value, command premium prices."
    },
    {
      icon: <Network className="w-8 h-8 text-treehub-teal" />,
      headline: "Build Your Professional Network, Instantly",
      description: "Need a crane operator, bucket truck, or specialty equipment? Tap into our network of vetted, insured professionals in your area. Every connection is verified, so you can focus on the job instead of gambling on unknown subcontractors.",
      benefit: "Vetted professionals when you need them."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            TreeHub: The Inevitable Answer
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every problem has a direct solution. TreeHub isn't just another app—it's your complete business operating system, built specifically for tree care professionals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {solutions.map((solution, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex-shrink-0">
                {solution.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {solution.headline}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {solution.description}
                </p>
                <p className="text-treehub-teal font-semibold italic">
                  {solution.benefit}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-treehub-teal/10 border border-treehub-teal/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-treehub-teal mb-4">
              The Complete Business Operating System
            </h3>
            <p className="text-lg text-foreground">
              TreeHub isn't just lead generation. It's job management, crew coordination, client communication, 
              payment processing, and professional networking—all designed specifically for the tree care industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;