import Image from 'next/image';

const partners = [
  {
    id: 1,
    name: "Surfside88",
    logo: (
      <div className="flex items-center justify-center font-serif text-2xl font-bold">
        <span className="text-[#D4AF37]">Surf</span>
        <span className="text-gray-800">side88</span>
      </div>
    ),
  },
  {
    id: 2,
    name: "Pinnacle Elevator Solutions",
    logo: (
      <div className="flex items-center justify-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-green-600 text-green-600 font-bold text-xs">
          A|V
        </div>
        <div className="flex flex-col text-left">
          <span className="text-green-600 font-bold text-lg leading-tight uppercase">Pinnacle</span>
          <span className="text-green-600 font-semibold text-[0.6rem] leading-tight tracking-widest uppercase">Elevator Solutions</span>
          <span className="text-gray-400 text-[0.4rem] uppercase">An Elevator Escalator Inspection Company</span>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    name: "Movie Shack",
    logo: (
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center text-xl font-black uppercase tracking-wider">
          <span className="text-slate-700">Movie</span>
          <span className="text-red-500 ml-1">Shack</span>
        </div>
        <span className="text-slate-800 font-bold text-[0.5rem] tracking-[0.2em] mt-1">4K - UHD - BLU-RAY - DVD - MUSIC</span>
      </div>
    ),
  },
  {
    id: 4,
    name: "Oliab",
    logo: (
      <div className="flex flex-col items-start justify-center">
        <div className="flex items-center text-3xl font-bold text-gray-800 tracking-tight">
          <div className="mr-1 h-6 w-6 rounded-full bg-gradient-to-tr from-green-700 to-green-400 relative overflow-hidden flex items-center justify-center">
             <div className="w-3 h-3 bg-white rounded-full absolute bottom-1 right-1"></div>
          </div>
          liab
        </div>
        <span className="text-gray-500 text-[0.5rem] italic mt-0.5 ml-7">Creative Media Solutions</span>
      </div>
    ),
  },
  {
    id: 5,
    name: "Ready Home Offers",
    logo: (
      <div className="flex items-center justify-center gap-2">
        <div className="relative flex h-10 w-10 items-center justify-center border-2 border-red-500 rounded-sm">
          <span className="text-blue-700 font-bold text-xl">H</span>
          <span className="text-red-500 font-bold text-xl absolute">R</span>
          <div className="absolute -top-3 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[12px] border-b-red-500"></div>
        </div>
        <div className="flex flex-col text-left font-bold">
          <span className="text-blue-800 text-sm leading-tight">Ready Home</span>
          <span className="text-red-500 text-sm leading-tight">Offers</span>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    name: "Alerts.com",
    logo: (
      <div className="flex items-center justify-center gap-2 text-indigo-900">
        <div className="flex opacity-50">
          <div className="w-8 h-8 rounded-full border-[3px] border-indigo-900 border-r-transparent rotate-45"></div>
          <div className="w-8 h-8 rounded-full border-[3px] border-indigo-900 border-l-transparent -rotate-45 -ml-2"></div>
        </div>
        <span className="text-2xl font-bold">Alerts.com</span>
      </div>
    ),
  },
  {
    id: 7,
    name: "All State Appliance Repair",
    logo: (
      <div className="flex items-center justify-center gap-3">
        <div className="relative flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-600 bg-gray-100">
           <div className="w-6 h-6 rounded-full border border-gray-600 flex items-center justify-center">
             <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
           </div>
        </div>
        <div className="flex flex-col text-left">
          <span className="text-gray-700 font-bold text-xs leading-tight uppercase">All State</span>
          <span className="text-gray-700 font-bold text-xs leading-tight uppercase">Appliance Repair</span>
        </div>
      </div>
    ),
  },
  {
    id: 8,
    name: "edvive",
    logo: (
      <div className="flex items-center justify-center">
        <span className="text-3xl font-black text-gray-800 tracking-tighter">edvive</span>
      </div>
    ),
  }
];

export default function Partners() {
  return (
    <section className="py-24 bg-[#F8F9FA] flex flex-col items-center">
      <div className="max-w-6xl w-full px-6">
        <h2 className="text-4xl text-center mb-16 text-[#0A102E]">
          <span className="font-semibold">Top Partners That</span>{" "}
          <span className="font-light">We Worked With.</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((partner) => (
            <div 
              key={partner.id} 
              className="bg-white rounded-2xl h-32 flex items-center justify-center p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300 ease-in-out cursor-pointer"
            >
              {partner.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
