import Hero from "./components/banner/Hero";
import Cta from "./components/banner/Cta";
import Partners from "./components/partners/page";
import AboutUs from "./components/aboutus/page";
import OurService from "./components/ourservice/page";
import ProcessSection from "./components/process/ProcessSection";
import AiSection from "./components/ai/AiSection";
import ComparisonSection from "./components/comparison/ComparisonSection";
import CaseStudies from "./components/casestudies/page";
import ReadyToBuildSection from "./components/cta/ReadyToBuildSection";
import MeetSpecialistSection from "./components/team/MeetSpecialistSection";
import FaqSection from "./components/faq/FaqSection";
import BlogSection from "./components/blog/BlogSection";

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
