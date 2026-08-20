"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ExternalLink, Code2, Target, Lightbulb } from "lucide-react";
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
      <div className="w-full min-h-screen bg-[#F8F9FA] flex items-center justify-center">
        <div className="w-12 h-12 rounded-full border-4 border-blue-600 border-t-transparent animate-spin"></div>
      </div>
    );
  }

  if (!caseStudy) {
    return (
      <div className="w-full min-h-screen bg-[#F8F9FA] flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Case Study Not Found</h1>
        <p className="text-gray-500 mb-8 text-center max-w-md">
          The project you're looking for doesn't exist or has been removed.
        </p>
        <Link
          href="/#case-study"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to all Case Studies
        </Link>
      </div>
    );
  }

  const techList = caseStudy.technologies ? caseStudy.technologies.split(',').map(t => t.trim()).filter(Boolean) : [];

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
          {caseStudy.category && (
            <div className="inline-flex items-center gap-2 bg-[#E9F0FF] text-[#1B64FF] px-4 py-1.5 rounded-full text-xs font-semibold w-fit uppercase tracking-wider">
              {caseStudy.category.title}
            </div>
          )}
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0a0c16] tracking-tight leading-tight">
            {caseStudy.title}
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl leading-relaxed">
            {caseStudy.shortDescription}
          </p>
        </div>

        {/* Hero Mockup Banner */}
        {caseStudy.photoUrl && (
          <div className="w-full aspect-[2/1] md:h-[500px] bg-[#0d0f17] rounded-[32px] overflow-hidden relative border border-gray-800 shadow-2xl">
            <img 
              src={caseStudy.photoUrl} 
              alt={caseStudy.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Overview Stats (if projectLink or tech exist, show a modern bar) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
          {techList.length > 0 && (
            <div className="md:col-span-2">
              <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider flex items-center gap-2 mb-3">
                <Code2 className="w-4 h-4" /> Tech Stack
              </div>
              <div className="flex flex-wrap gap-2">
                {techList.map((tech, idx) => (
                  <span key={idx} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {caseStudy.projectLink && (
            <div className="flex flex-col justify-center">
              <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-2">Live URL</div>
              <a 
                href={caseStudy.projectLink.startsWith('http') ? caseStudy.projectLink : `https://${caseStudy.projectLink}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 font-medium hover:underline flex items-center gap-1 w-fit truncate max-w-full"
              >
                {caseStudy.projectLink.replace(/^https?:\/\//, '')}
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>

        {/* Detailed Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-6">
          <div className="md:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                Project Overview
              </h2>
              <div className="text-gray-600 leading-relaxed whitespace-pre-wrap">
                {caseStudy.fullDescription}
              </div>
            </div>

            {caseStudy.challenge && (
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-4">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <Target className="w-6 h-6 text-red-500" /> The Challenge
                </h2>
                <div className="text-gray-600 leading-relaxed whitespace-pre-wrap">
                  {caseStudy.challenge}
                </div>
              </div>
            )}

            {caseStudy.solution && (
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-4">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <Lightbulb className="w-6 h-6 text-amber-500" /> The Solution
                </h2>
                <div className="text-gray-600 leading-relaxed whitespace-pre-wrap">
                  {caseStudy.solution}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar CTA */}
          <div className="space-y-6">
            <div className="bg-[#0a0c16] text-white p-8 rounded-3xl space-y-6 shadow-xl relative overflow-hidden sticky top-24">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Ready to start your next project?</h3>
                <p className="text-gray-400 text-sm">
                  Let’s collaborate to build something exceptional together. Our team is ready to help you achieve similar results.
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
