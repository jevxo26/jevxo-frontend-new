import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Star, ExternalLink } from "lucide-react";

export default async function CaseStudyDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="w-full bg-[#f6f8fc] min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto flex flex-col space-y-12">
        {/* Back Button */}
        <div>
          <Link
            href="/#case-study"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black transition-colors bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Case Studies</span>
          </Link>
        </div>

        {/* Header Title */}
        <div className="flex flex-col space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#E9F0FF] text-[#1B64FF] px-4 py-1.5 rounded-full text-xs font-semibold w-fit">
            Case Study #{id}
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0a0c16] tracking-tight leading-tight">
            Case Study Details Page
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl leading-relaxed">
            Detailed breakdown of our process, user research, wireframing, tech stack, and final results delivered for this project.
          </p>
        </div>

        {/* Hero Mockup Banner */}
        <div className="w-full h-[420px] bg-[#0d0f17] rounded-[32px] overflow-hidden relative border border-gray-800 shadow-2xl flex items-center justify-center p-8">
          <Image
            src="/images/case_study_1.png"
            alt="Case Study Showcase"
            fill
            className="object-cover object-center"
          />
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
          <div>
            <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Client</div>
            <div className="text-lg font-bold text-gray-900 mt-1">TechScale Global</div>
          </div>
          <div>
            <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Timeline</div>
            <div className="text-lg font-bold text-gray-900 mt-1">8 Weeks</div>
          </div>
          <div>
            <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Services</div>
            <div className="text-lg font-bold text-gray-900 mt-1">UI/UX & Web Dev</div>
          </div>
          <div>
            <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Result</div>
            <div className="text-lg font-bold text-emerald-600 mt-1">+240% Growth</div>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-6">
          <div className="md:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Project Overview</h2>
              <p className="text-gray-600 leading-relaxed">
                Our objective was to re-imagine the digital experience from the ground up, streamlining complex workflows into intuitive user interfaces while maintaining rock-solid performance and enterprise-grade reliability.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Key Deliverables</h2>
              <ul className="space-y-3">
                {[
                  "User Research & Competitor Benchmarking",
                  "High-Fidelity Wireframes & Interactive Prototypes",
                  "Next.js 16 & TailwindCSS Front-end Architecture",
                  "Design System with Reusable Component Library"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700 text-sm font-medium">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar CTA */}
          <div className="space-y-6">
            <div className="bg-[#0a0c16] text-white p-8 rounded-3xl space-y-6 shadow-xl relative overflow-hidden">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Have a similar project in mind?</h3>
                <p className="text-gray-400 text-sm">
                  Let’s collaborate to build something exceptional together.
                </p>
              </div>

              <Link
                href="/#contact"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#0052ff] hover:bg-blue-600 text-white font-medium py-3 rounded-full text-sm transition-all"
              >
                <span>Get In Touch</span>
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
