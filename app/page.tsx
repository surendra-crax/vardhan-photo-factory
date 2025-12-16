import Hero from "@/components/Hero";
import SignatureWork from "@/components/SignatureWork";
import StudioIdentity from "@/components/StudioIdentity";
import WhyUs from "@/components/WhyUs";
import Services from "@/components/Services";
import Process from "@/components/Process";
import SocialProof from "@/components/SocialProof";
import BehindLens from "@/components/BehindLens";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <SignatureWork />
      <StudioIdentity />
      <WhyUs />
      <Services />
      <Process />
      <SocialProof />
      <BehindLens />
      <CTA />
      <Footer />
    </main>
  );
}
