const FounderStorySection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            A Letter From Your Fellow Arborist
          </h2>
          <p className="text-xl text-muted-foreground">
            From one tree professional to another
          </p>
        </div>

        <div className="bg-card rounded-lg shadow-elegant p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 rounded-full bg-treehub-teal/20 flex items-center justify-center">
                <span className="text-4xl font-bold text-treehub-teal">CA</span>
              </div>
            </div>
            
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-treehub-teal mb-2">Clint Aussprung</h3>
              <p className="text-treehub-brown font-semibold mb-6">Founder & CEO, TreeHub</p>
              
              <div className="prose prose-lg max-w-none text-card-foreground">
                <p className="mb-6">
                  <strong>My office was the cab of a chip truck for over 15 years.</strong> I've wrestled with rigging in 90-degree heat, worked through ice storms, and yes—I've dealt with every frustration you face daily.
                </p>
                
                <p className="mb-6">
                  Like you, I got fed up with paying for worthless leads from generic sites that don't understand our industry. I was tired of competing with uninsured hacks who undercut professional work. I was sick of spending nights doing paperwork instead of being with my family.
                </p>
                
                <p className="mb-6">
                  <strong>I kept thinking: "Why isn't there a tool built FOR us?"</strong> Something that actually understands tree work, crew management, and the unique challenges of our trade. I looked everywhere. The options were either too generic or way too expensive for working professionals.
                </p>
                
                <p className="mb-6">
                  I couldn't find what we needed. So I decided I had to build it myself.
                </p>
                
                <p className="mb-6">
                  <strong>TreeHub isn't just another app developed by a tech company that's never climbed a tree.</strong> This is our platform—built by someone who understands the weight of a chainsaw, the pressure of a tight deadline, and the responsibility of keeping a crew safe 40 feet off the ground.
                </p>
                
                <p className="mb-6">
                  My mission is simple: give professional arborists the modern tools we've always deserved. Tools that make us more profitable, more efficient, and more professional—without breaking the bank or wasting our time.
                </p>
                
                <p className="mb-0">
                  <strong>The Founding Member program is more than just a good deal.</strong> It's your chance to get in on the ground floor and help shape the future of our trade. Join me. Let's build this together.
                </p>
              </div>
              
              <div className="mt-8 pt-6 border-t border-muted">
                <p className="text-treehub-teal font-semibold">
                  — Clint Aussprung, Certified Arborist & TreeHub Founder
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderStorySection;