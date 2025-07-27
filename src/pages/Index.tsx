import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import FounderStorySection from "@/components/FounderStorySection";
import OfferSection from "@/components/OfferSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FounderStorySection />
      <OfferSection />
    </div>
  );
};

export default Index;
