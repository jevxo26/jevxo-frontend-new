import Link from "next/link";
import { ArrowUpRight, Check, X } from "lucide-react";

const comparisonData = [
  {
    feature: "Project Management",
    jevxo: { text: "Senior Specialist only", check: true },
    others: { text: "Junior Designers, Lose Quality", check: false },
    freelancer: { text: "Skill Varies Widely Always", check: false, isWarning: true }
  },
  {
    feature: "Strategic Thinking",
    jevxo: { text: "Problem-solving approach", check: true },
    others: { text: "Focuses Mainly On User Research And Planning", check: true, isNeutral: true },
    freelancer: { text: "Client Handles Strategy Independently", check: false }
  },
  {
    feature: "Premium UI Design",
    jevxo: { text: "First draft within 48 hours", check: true },
    others: { text: "Usually Requires 2–3 Weeks", check: false },
    freelancer: { text: "Often Limited To One Task At A Time", check: false }
  },
  {
    feature: "Cost efficiency",
    jevxo: { text: "Fixed monthly rate with unlimited requests", check: true },
    others: { text: "Hidden Costs And Scope Creep Are Common", check: false },
    freelancer: { text: "Hourly Billing Becomes Expensive Over Time", check: true, isNeutral: true }
  },
  {
    feature: "Flexibility",
    jevxo: { text: "High flexibility with scalable support", check: true },
    others: { text: "Moderate Flexibility", check: false },
    freelancer: { text: "Depends On Workload And Availability", check: false }
  },
  {
    feature: "Communication",
    jevxo: { text: "Always on, never ghosting", check: true },
    others: { text: "Overbooked, Long Queue Times", check: false },
    freelancer: { text: "Delays During Vacations Or Busy Periods", check: false }
  },
  {
    feature: "Develop & Launch",
    jevxo: { text: "Fast-moving startup partner", check: true },
    others: { text: "Best For Enterprise Companies With Large Budgets", check: true, isNeutral: true },
    freelancer: { text: "Suitable Mainly For One-Off Small Projects", check: true, isNeutral: true }
  }
];

export default function ComparisonSection() {
  return (
    <section className="w-full py-24 bg-[#F8F9FA] flex justify-center border-t border-gray-100">
      <div className="max-w-7xl w-full px-6 flex flex-col">
        
        {/* Top Tag & Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 w-full">
          <div className="flex flex-col items-start gap-4">
            <div className="bg-[#E9F0FF] text-[#1B64FF] px-5 py-2 rounded-full text-xs font-semibold tracking-wide">
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[54px] font-bold text-[#111] tracking-tight leading-[1.15]">
              Jevxo Team Alternative? <br />
              Think <span className="font-serif italic font-medium">One More Time!</span>
            </h2>
          </div>

          {/* Request Free Audit Button */}
          <div className="pb-2">
            <Link
              href="#contact"
              className="inline-flex items-center gap-3 bg-[#0052ff] hover:bg-blue-600 text-white px-7 py-3.5 rounded-full font-medium text-base shadow-xl shadow-blue-500/25 transition-all group"
            >
              <span>Request Free Audit</span>
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                <ArrowUpRight className="w-4 h-4 text-white" />
              </div>
            </Link>
          </div>
        </div>

        {/* Comparison Table Container */}
        <div className="w-full bg-white rounded-[32px] shadow-[0_4px_30px_rgb(0,0,0,0.03)] border border-gray-200/80 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              {/* Table Header */}
              <thead>
                <tr className="border-b border-gray-200/80 text-gray-900">
                  <th className="py-6 px-8 text-lg font-bold w-[25%]">Features</th>
                  <th className="py-6 px-8 text-lg font-bold w-[25%] text-center md:text-left">Jevxo Team</th>
                  <th className="py-6 px-8 text-lg font-bold w-[25%] text-center md:text-left">Others Agency</th>
                  <th className="py-6 px-8 text-lg font-bold w-[25%] text-center md:text-left">Freelancer</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-gray-100 text-[14.5px]">
                {comparisonData.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                    {/* Feature Name */}
                    <td className="py-5 px-8 font-bold text-gray-900 text-base">
                      {row.feature}
                    </td>

                    {/* Jevxo Team Column */}
                    <td className="py-5 px-8 text-gray-800">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span className="font-semibold text-gray-900">{row.jevxo.text}</span>
                      </div>
                    </td>

                    {/* Others Agency Column */}
                    <td className="py-5 px-8 text-gray-600">
                      <div className="flex items-center gap-3">
                        {row.others.check ? (
                          <div className="w-6 h-6 rounded-full bg-blue-400 text-white flex items-center justify-center shrink-0">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                        ) : (
                          <div className="w-6 h-6 rounded-full bg-red-200 text-red-600 flex items-center justify-center shrink-0">
                            <X className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                        )}
                        <span>{row.others.text}</span>
                      </div>
                    </td>

                    {/* Freelancer Column */}
                    <td className="py-5 px-8 text-gray-600">
                      <div className="flex items-center gap-3">
                        {row.freelancer.check ? (
                          <div className="w-6 h-6 rounded-full bg-blue-400 text-white flex items-center justify-center shrink-0">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                        ) : (
                          <div className={`w-6 h-6 rounded-full ${row.freelancer.isWarning ? 'bg-red-300 text-red-700' : 'bg-red-200 text-red-600'} flex items-center justify-center shrink-0`}>
                            <X className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                        )}
                        <span>{row.freelancer.text}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
