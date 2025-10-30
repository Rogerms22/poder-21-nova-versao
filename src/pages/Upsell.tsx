import OfferBanner from "@/components/OfferBanner";
import UpsellHero from "@/components/UpsellHero";
import WhyNow from "@/components/WhyNow";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";

const Upsell = () => {
  return (
    <div className="min-h-screen">
      <OfferBanner />
      <UpsellHero />
      <WhyNow />
      <Testimonials />
      <FinalCTA />
    </div>
  );
};

export default Upsell;
