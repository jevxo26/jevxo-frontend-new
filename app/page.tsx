import Hero from "./components/landing/banner/Hero";
import Cta from "./components/landing/banner/Cta";
import Partners from "./components/landing/partners/page";
import AboutUs from "./components/landing/aboutus/page";
import OurService from "./components/landing/ourservice/page";
import ProcessSection from "./components/landing/process/ProcessSection";
import AiSection from "./components/landing/ai/AiSection";
import ComparisonSection from "./components/landing/comparison/ComparisonSection";
import CaseStudies from "./components/landing/casestudies/page";
import ReadyToBuildSection from "./components/landing/cta/ReadyToBuildSection";
import MeetSpecialistSection from "./components/landing/team/MeetSpecialistSection";
import FaqSection from "./components/landing/faq/FaqSection";
import BlogSection from "./components/landing/blog/BlogSection";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-[#f6f8fc] text-[#0a0c16] flex flex-col justify-between overflow-hidden">
      {/* Background Grid & Soft Radial Glow */}
      <div className="absolute inset-0 hero-grid pointer-events-none z-0" />
      <div className="absolute inset-0 hero-radial-glow pointer-events-none z-0" />
      <Hero />
      <Cta />
      <Partners />
      <AboutUs />
      <OurService />
      <CaseStudies />
      <ProcessSection />
      <AiSection />
      <ComparisonSection />
      <MeetSpecialistSection />
      {/* <FaqSection /> */}
      <BlogSection />
      <ReadyToBuildSection />


    </div>
  );
}
