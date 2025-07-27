const ProblemSection = () => {
  const problems = [
    {
      headline: "The Plague of Worthless Leads",
      description: "Tired of paying $70+ for tire-kickers who just want the cheapest quote? Every morning, you waste fuel driving to 'urgent' jobs that turn out to be price shoppers who don't value professional work. Your expertise deserves clients who understand quality costs more than the guy with a pickup truck and a chainsaw."
    },
    {
      headline: "The Administrative Headache", 
      description: "Your truck's dashboard has become your office. Drowning in texts, voicemails, and sticky notes. Evenings meant for family are spent doing paperwork, chasing payments, and managing schedules. You became an arborist to work with trees, not to be buried under administrative chaos."
    },
    {
      headline: "The Race to the Bottom",
      description: "Every day, you compete with uninsured, fly-by-night outfits who undercut your prices with shoddy, unsafe work. They're devaluing the entire trade while you follow every safety protocol and maintain proper certifications. It's frustrating when homeowners can't tell the difference between a professional and a hack."
    },
    {
      headline: "The Subcontractor Gamble",
      description: "Need a crane operator for tomorrow? Good luck. You spend hours on the phone, rolling the dice on unknown subcontractors. Will they show up? Are they insured? Do they know what they're doing? One bad sub can destroy your reputation and put your crew at risk. It's a high-stakes gamble every time."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            The Industry's Shared Frustrations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            It's not you, it's your tools. Every tree care professional faces these daily challenges that drain profit and steal time from what matters most.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="bg-card p-8 rounded-lg shadow-elegant hover:shadow-premium transition-all duration-300">
              <h3 className="text-2xl font-bold text-treehub-teal mb-4">
                {problem.headline}
              </h3>
              <p className="text-card-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground italic">
            "Every successful arborist has felt this pain. The question is: how much longer will you accept it as 'just part of the business'?"
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;