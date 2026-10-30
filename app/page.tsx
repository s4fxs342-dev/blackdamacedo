import { Faq } from "@/components/landing/faq";
import {
  FinalCta,
  SiteFooter,
  WhatsappFab,
} from "@/components/landing/final-cta";
import { Hero } from "@/components/landing/hero";
import { Offers } from "@/components/landing/offers";
import { SiteHeader } from "@/components/landing/site-header";
import { TrustBar } from "@/components/landing/trust-bar";
import { WhyMacedo } from "@/components/landing/why-macedo";

const HomePage = () => (
  <div className="font-body bg-paper text-ink">
    <SiteHeader />
    <main id="main" tabIndex={-1} className="outline-none">
      <Hero />
      <TrustBar />
      <Offers />
      <WhyMacedo />
      <Faq />
      <FinalCta />
    </main>
    <SiteFooter />
    <WhatsappFab />
  </div>
);

export default HomePage;
