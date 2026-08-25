"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Code2, Target, Lightbulb, CheckCircle2, Sparkles, Rocket } from "lucide-react";
import { useParams } from "next/navigation";
import { casestudiesApi, Casestudy } from "../../../../api/casestudiesApi";

export default function CaseStudyDetailsPage() {
  const params = useParams();
  const id = params?.id as string;
  const [caseStudy, setCaseStudy] = useState<Casestudy | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCaseStudy = async () => {
      if (!id) return;
      try {
        try {
          const data = await casestudiesApi.getCasestudyById(id);
          if (data) {
            setCaseStudy(data);
            return;
          }
        } catch (e) {
          // If fetching by ID fails, fallback to fetching all and finding by slug
        }

        const all = await casestudiesApi.getAllCasestudies();
        const found = all.data?.find((c: Casestudy) => c.slug === id || c.id === id) || 
                      all.find?.((c: Casestudy) => c.slug === id || c.id === id);
        
        if (found) setCaseStudy(found);
      } catch (error) {
        console.error("Failed to fetch casestudy:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCaseStudy();
  }, [id]);

  if (isLoading) {
    return (
      <div className="w-full min-h-screen bg-[#070913] flex items-center justify-center">
        <div className="w-12 h-12 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>
      </div>
    );
  }

  if (!caseStudy) {
    return (
      <div className="w-full min-h-screen bg-[#F8F9FA] flex flex-col items-center justify-center p-6 text-center">
        <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
          <Sparkles className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Case Study Not Found</h1>
        <p className="text-gray-500 mb-8 max-w-md">
          The project you are looking for doesn't exist or may have been moved.
        </p>
        <Link
          href="/#case-study"
          className="inline-flex items-center gap-2 bg-[#3b82f6] hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition-all shadow-md hover:shadow-lg"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Case Studies</span>
        </Link>
      </div>
    );
  }

  const techList = caseStudy.technologies ? caseStudy.technologies.split(',').map(t => t.trim()).filter(Boolean) : [];

  return (
    <div className="w-full bg-[#f8fafc] min-h-screen pt-12 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col space-y-10">
        
        {/* Navigation / Back Button */}
        <div>
          <Link
            href="/#case-study"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-700 hover:text-[#3b82f6] bg-white px-4 py-2 rounded-full border border-gray-200 shadow-xs hover:border-blue-300 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Case Studies</span>
          </Link>
        </div>

        {/* Title Header Section */}
        <div className="flex flex-col space-y-5 bg-white p-8 md:p-12 rounded-[32px] border border-gray-100 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl -z-0 pointer-events-none" />
          
          <div className="relative z-10 space-y-4">
            {caseStudy.category && (
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#3b82f6] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                {caseStudy.category.title}
              </div>
            )}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0f172a] tracking-tight leading-[1.12]">
              {caseStudy.title}
            </h1>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-4xl leading-relaxed font-normal">
              {caseStudy.shortDescription}
            </p>
          </div>
        </div>

        {/* Hero Mockup Image */}
        {caseStudy.photoUrl && (
          <div className="w-full h-[320px] sm:h-[480px] md:h-[580px] bg-[#090d16] rounded-[36px] overflow-hidden relative border border-gray-200/80 shadow-2xl group">
            <img 
              src={caseStudy.photoUrl} 
              alt={caseStudy.title}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-102"
            />
          </div>
        )}

        {/* Meta Details Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white p-6 sm:p-8 rounded-[28px] border border-gray-100 shadow-sm">
          {techList.length > 0 && (
            <div className="md:col-span-2 space-y-3">
              <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider flex items-center gap-2">
                <Code2 className="w-4 h-4 text-[#3b82f6]" /> Technologies Used
              </div>
              <div className="flex flex-wrap gap-2">
                {techList.map((tech, idx) => (
                  <span key={idx} className="bg-gray-50 border border-gray-200/80 text-gray-800 px-3.5 py-1.5 rounded-xl text-xs font-medium shadow-2xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {caseStudy.projectLink && (
            <div className="flex flex-col justify-center space-y-2 border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:pt-0 md:pl-6">
              <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Live Preview</div>
              <a 
                href={caseStudy.projectLink.startsWith('http') ? caseStudy.projectLink : `https://${caseStudy.projectLink}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#3b82f6] font-semibold hover:underline text-sm sm:text-base group"
              >
                <span>Visit Project</span>
                <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          )}
        </div>

        {/* Detailed Description Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4">
          <div className="lg:col-span-2 space-y-8">
            
            {/* Overview */}
            <div className="bg-white p-8 sm:p-10 rounded-[32px] border border-gray-100 shadow-sm space-y-4">
              <h2 className="text-2xl font-bold text-[#0f172a] flex items-center gap-2.5">
                <Rocket className="w-6 h-6 text-[#3b82f6]" /> Project Overview
              </h2>
              <div className="text-gray-600 text-base sm:text-lg leading-relaxed whitespace-pre-wrap font-normal">
                {caseStudy.fullDescription}
              </div>
            </div>

            {/* Challenge */}
            {caseStudy.challenge && (
              <div className="bg-white p-8 sm:p-10 rounded-[32px] border border-gray-100 shadow-sm space-y-4">
                <h2 className="text-2xl font-bold text-[#0f172a] flex items-center gap-2.5">
                  <Target className="w-6 h-6 text-rose-500" /> The Challenge
                </h2>
                <div className="text-gray-600 text-base sm:text-lg leading-relaxed whitespace-pre-wrap font-normal">
                  {caseStudy.challenge}
                </div>
              </div>
            )}

            {/* Solution */}
            {caseStudy.solution && (
              <div className="bg-white p-8 sm:p-10 rounded-[32px] border border-gray-100 shadow-sm space-y-4">
                <h2 className="text-2xl font-bold text-[#0f172a] flex items-center gap-2.5">
                  <Lightbulb className="w-6 h-6 text-amber-500" /> The Solution
                </h2>
                <div className="text-gray-600 text-base sm:text-lg leading-relaxed whitespace-pre-wrap font-normal">
                  {caseStudy.solution}
                </div>
              </div>
            )}
          </div>

          {/* Sticky Sidebar CTA */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white p-8 sm:p-10 rounded-[32px] space-y-6 shadow-xl relative overflow-hidden sticky top-28 border border-slate-700/50">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
              <div className="space-y-3 relative z-10">
                <h3 className="text-2xl font-bold tracking-tight">Have a similar project in mind?</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Let’s collaborate to build something exceptional. Our engineering & design teams are ready to bring your ideas to life.
                </p>
              </div>

              <Link
                href="/#contact"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#3b82f6] hover:bg-blue-600 text-white font-medium py-3.5 px-6 rounded-full text-sm transition-all shadow-lg hover:shadow-blue-500/30 group"
              >
                <span>Let's Work Together</span>
                <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
