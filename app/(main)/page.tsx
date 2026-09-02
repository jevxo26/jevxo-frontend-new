import Hero from "../components/landing/banner/Hero";
import Cta from "../components/landing/banner/Cta";
import Partners from "../components/landing/partners/page";
import AboutUs from "../components/landing/aboutus/page";
import OurService from "../components/landing/ourservice/page";
import ProcessSection from "../components/landing/process/ProcessSection";
import AiSection from "../components/landing/ai/AiSection";
import ComparisonSection from "../components/landing/comparison/ComparisonSection";
import PricingSection from "../components/landing/pricing/PricingSection";
import CaseStudies from "../components/landing/casestudies/page";
import ConcentricCtaSection from "../components/landing/cta/ConcentricCtaSection";
import MeetSpecialistSection from "../components/landing/team/MeetSpecialistSection";
import FaqSection from "../components/landing/faq/FaqSection";
import BlogSection from "../components/landing/blog/BlogSection";
import ContactSection from "../components/landing/contact/ContactSection";
import TestimonialsSection from "../components/landing/testimonials/TestimonialsSection";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-[#F2F2F2] text-[#0a0c16] flex flex-col justify-between overflow-hidden">

      <Hero />

      <div className="py-8 md:py-[30px]">
        <Partners />
      </div>
      
      <AboutUs />

      <div className="py-8 md:py-[30px]">
        <OurService />
      </div>

      <div className="py-10 md:py-[50px]">
        <CaseStudies />
      </div>

      <ProcessSection />

      <div className="pt-16 pb-10 md:pt-[100px] md:pb-[50px]">
        <AiSection />
      </div>

      <ComparisonSection />

      <div className="pt-12 pb-16 md:pt-[50px] md:pb-[120px]">
        <PricingSection />
      </div>

      <BlogSection />

      <div className="py-12 md:py-[80px]">
        <MeetSpecialistSection />
      </div>

      <div className="pb-12 md:pb-[80px]">
        <ConcentricCtaSection />
      </div>

      <FaqSection />

      <div className="py-16 md:py-[100px]">
        <ContactSection />
      </div>

      <div className="pb-16 md:pb-[80px]">
        <TestimonialsSection />
      </div>
    </div>
  );
}
