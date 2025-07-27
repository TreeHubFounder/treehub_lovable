import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, Clock, Users } from "lucide-react";

const OfferSection = () => {
  const valueStack = [
    {
      item: "First 5 Transactions are FREE",
      value: "We'll waive our standard 6% transaction fee on your first five completed jobs."
    },
    {
      item: "Permanently Locked-In Transaction Rate", 
      value: "Just 3% on all future work, forever. Half our standard rate."
    },
    {
      item: "Exclusive 'Founding Member' Badge",
      value: "Signal your status on your public profile."
    },
    {
      item: "Direct Line to our Development Team",
      value: "Your feedback directly influences the platform's future."
    }
  ];

  return (
    <section className="py-20 bg-gradient-offer relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '20px 20px'
        }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Become a TreeHub Founding Member. Lock In Your Advantage.
          </h2>
          <p className="text-xl text-white/90 mb-4">
            A One-Time Offer, Strictly Limited to the First 100 Industry Professionals
          </p>
          
          {/* Scarcity Meter */}
          <div className="bg-white/20 rounded-lg p-6 mb-8">
            <p className="text-white font-semibold mb-3">Founding Member Spots Are Limited & Filling Fast</p>
            <div className="bg-white/30 rounded-full h-4 mb-2">
              <div className="bg-white h-4 rounded-full" style={{ width: '73%' }}></div>
            </div>
            <p className="text-white/80 text-sm">73 of 100 spots claimed</p>
          </div>
          
          <p className="text-lg text-white font-semibold">
            This offer will never be available again.
          </p>
        </div>

        <Card className="p-8 md:p-12 shadow-premium">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Value Stack */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                What You Get as a Founding Member:
              </h3>
              <div className="space-y-4 mb-8">
                {valueStack.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-treehub-teal flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">{benefit.item}</p>
                      <p className="text-treehub-teal text-sm">{benefit.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Guarantee */}
              <div className="bg-treehub-teal/10 border border-treehub-teal/20 rounded-lg p-6">
                <h4 className="font-bold text-treehub-teal mb-2">Our Founder's Promise:</h4>
                <p className="text-sm text-foreground">
                  30-Day, 100% Risk-Free, Money-Back Guarantee. If you're not satisfied, 
                  we'll refund your payment in full. No questions asked.
                </p>
              </div>
            </div>

            {/* Sign-up Form */}
            <div>
              <div className="bg-muted/30 rounded-lg p-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-treehub-teal" />
                  <span className="font-semibold text-foreground">Limited Time Pricing</span>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground mb-1">$250</div>
                  <div className="text-muted-foreground">One-Time Payment</div>
                  <div className="text-treehub-teal font-semibold">Lock In Your Advantage Forever</div>
                </div>
              </div>

              <form className="space-y-4">
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input id="fullName" placeholder="Your full name" />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <Label htmlFor="company">Company Name</Label>
                  <Input id="company" placeholder="Your tree care company" />
                </div>
                <div>
                  <Label htmlFor="cardNumber">Credit Card Number</Label>
                  <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                  <p className="text-xs text-muted-foreground mt-1">
                    Your transaction is secured with 256-bit SSL encryption.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input id="expiry" placeholder="MM/YY" />
                  </div>
                  <div>
                    <Label htmlFor="cvc">CVC</Label>
                    <Input id="cvc" placeholder="123" />
                  </div>
                </div>

                <Button variant="offer" size="xl" className="w-full mt-8">
                  Yes, Lock In My Founder Membership Now
                </Button>
                
                <p className="text-center text-sm text-muted-foreground mt-4">
                  Get instant access to all Founder benefits. This offer ends forever once all spots are claimed.
                </p>
              </form>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default OfferSection;