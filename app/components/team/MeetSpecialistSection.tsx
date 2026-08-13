import Image from "next/image";

const specialists = [
  {
    name: "Andriani Monlio",
    role: "Founder of Jevxo",
    image: "/images/team_1.png",
    bgClass: "bg-[#FFE8A3]" // Soft Warm Yellow
  },
  {
    name: "Andriani Monlio",
    role: "UI UX Designer Head of Jevxo",
    image: "/images/team_2.png",
    bgClass: "bg-[#A7F3D0]" // Soft Mint Cyan
  },
  {
    name: "Andriani Monlio",
    role: "CEO of Jevxo",
    image: "/images/team_3.png",
    bgClass: "bg-[#BAE6FD]" // Soft Sky Blue
  },
  {
    name: "Andriani Monlio",
    role: "Marketing Manager of Jevxo",
    image: "/images/team_4.png",
    bgClass: "bg-[#A7F3D0]" // Soft Sage Green
  }
];

export default function MeetSpecialistSection() {
  return (
    <section className="w-full py-24 bg-[#F8F9FA] flex justify-center border-t border-gray-100">
      <div className="max-w-7xl w-full px-6 flex flex-col">
        
        {/* Top Tag & Title Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 w-full">
          <div className="flex flex-col items-start gap-4">
            <div className="bg-[#E9F0FF] text-[#1B64FF] px-5 py-2 rounded-full text-xs font-semibold tracking-wide">
              Our Expertize
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[54px] font-bold text-[#111] tracking-tight leading-tight">
              Meet Our Specialist
            </h2>
          </div>

          <div className="lg:w-[45%] pb-1">
            <p className="text-gray-500 text-base md:text-lg leading-relaxed font-normal">
              We're here to create digital experiences that your customers will love. From websites and apps to seamless interfaces, our creations drive stronger engagement and foster lasting loyalty.
            </p>
          </div>
        </div>

        {/* 4 Specialist Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialists.map((member, index) => (
            <div 
              key={index}
              className={`rounded-[32px] ${member.bgClass} h-[460px] relative overflow-hidden flex flex-col justify-end group shadow-[0_4px_25px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_35px_rgb(0,0,0,0.08)] transition-all duration-300`}
            >
              {/* Specialist Portrait Image */}
              <Image 
                src={member.image} 
                alt={member.name}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              />

              {/* Dark Gradient Overlay at Bottom */}
              <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#090d16] via-[#090d16]/80 to-transparent pointer-events-none z-10" />

              {/* Text Info Overlay */}
              <div className="relative z-20 p-7 text-white flex flex-col space-y-1">
                <h3 className="text-2xl font-bold tracking-tight text-white leading-snug">
                  {member.name}
                </h3>
                <p className="text-gray-300 text-sm font-medium opacity-90">
                  {member.role}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
