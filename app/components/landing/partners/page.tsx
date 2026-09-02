"use client";

import { partnerApi } from "@/api/partnerApi";
import React from "react";

export interface PartnerItem {
  id: string;
  name: string;
  logo: string;
}

// Keep only 8 logos as requested
const BRAND_IMAGES: PartnerItem[] = [
  { id: "1", name: "Slack", logo: "https://cdn.simpleicons.org/slack/4A154B" },
  { id: "2", name: "Notion", logo: "https://cdn.simpleicons.org/notion/000000" },
  { id: "3", name: "Figma", logo: "https://cdn.simpleicons.org/figma/F24E1E" },
  { id: "4", name: "Stripe", logo: "https://cdn.simpleicons.org/stripe/635BFF" },
  { id: "5", name: "Zoom", logo: "https://cdn.simpleicons.org/zoom/2D8CFF" },
  { id: "6", name: "Dropbox", logo: "https://cdn.simpleicons.org/dropbox/0061FF" },
  { id: "7", name: "Asana", logo: "https://cdn.simpleicons.org/asana/F06A6A" },
  { id: "8", name: "Linear", logo: "https://cdn.simpleicons.org/linear/5E6AD2" },
];

export default function Partners() {
  const [partners, setPartners] = React.useState<PartnerItem[]>(BRAND_IMAGES);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchPartners = async () => {
      try {

        const data = await partnerApi.getAllPartners();

        let fetchedPartners: any[] = [];
        if (Array.isArray(data)) {
          fetchedPartners = data;
        } else if (data && Array.isArray(data.data)) {
          fetchedPartners = data.data;
        }

        if (fetchedPartners.length > 0) {
          // Map to PartnerItem interface if it differs slightly, or just use as is
          setPartners(fetchedPartners.map((p: any) => ({
            id: p.id || p._id,
            name: p.name,
            logo: p.logo || p.imageUrl || p.image,
          })));
        }
      } catch (error) {
        console.error("Error fetching partners:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPartners();
  }, []);

  return (
    <section className="py-6 md:-mt-9 md:py-16 bg-[#F3F3F3] flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold font-helvetica text-center mb-10 sm:mb-14 text-[#03002C] tracking-tight leading-normal capitalize">
          Top Partners That We <span className="font-dm italic font-normal text-black">Worked With.</span>
        </h2>

        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-2 mx-auto justify-center"
          style={{ perspective: "1000px" }}
        >
          {partners.slice(0, 8).map((partner) => (
            <div key={partner.id} className="group w-full h-[114px] cursor-pointer">
              <div
                className="bg-white rounded-xl w-full h-full flex items-center justify-center p-4 sm:p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-transform duration-700 group-hover:[transform:rotateY(360deg)]"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-[80%] max-h-[70%] object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}