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
import ReadyToBuildSection from "../components/landing/cta/ReadyToBuildSection";
import MeetSpecialistSection from "../components/landing/team/MeetSpecialistSection";
import FaqSection from "../components/landing/faq/FaqSection";
import BlogSection from "../components/landing/blog/BlogSection";
import ContactSection from "../components/landing/contact/ContactSection";
import TestimonialsSection from "../components/landing/testimonials/TestimonialsSection";

export default function Home() {
  return (
    // owiejaf9wejf9u jw3eu8heu8r
    <div className="relative min-h-screen w-full bg-[#F2F2F2] text-[#0a0c16] flex flex-col justify-between overflow-hidden">


      <Hero />

      <div className="py-[30px]">
        <Partners />
      </div>
      <AboutUs />

      <div className="py-[30px]">
        <OurService />
      </div>


      <div className="py-[50px]">
        <CaseStudies />
      </div>
      <ProcessSection />

      <div className="py-[50px]">
        <AiSection />
      </div>

      <ComparisonSection />

      <div className="py-[50px]">
        <PricingSection />
      </div>


      <BlogSection />

      <div className="py-30">
        <MeetSpecialistSection />
      </div>

      {/* <ReadyToBuildSection /> */}
      <FaqSection />

      <div className="py-[100px]">
        <ContactSection />
      </div>
      <TestimonialsSection />
    </div>
  );
}
