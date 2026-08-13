import Image from "next/image";
import { Star } from "lucide-react";

export default function AboutUs() {
    return (
        <section className="w-full py-24 bg-[#F8F9FA] flex justify-center border-t border-gray-100">
            <div className="max-w-7xl w-full px-6 flex flex-col md:flex-row gap-16 lg:gap-32">

                {/* Left Column */}
                <div className="flex flex-col items-start gap-8 md:w-1/4 shrink-0 mt-3">
                    {/* About Us Pill */}
                    <div className="bg-[#E9F0FF] text-[#1B64FF] px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide">
                        About Us
                    </div>

                    <div className="flex flex-col gap-4 mt-6">
                        {/* Stars */}
                        <div className="flex items-center gap-1.5">
                            {[...Array(4)].map((_, i) => (
                                <svg key={i} className="w-6 h-6 text-[#FFC107] fill-[#FFC107]" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                            ))}
                            <svg className="w-6 h-6 text-gray-300 fill-gray-300" viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                        </div>

                        {/* Customer Satisfaction text */}
                        <span className="text-gray-700 font-medium text-[17px]">Customer Satisfactions</span>

                        {/* Avatars */}
                        <div className="flex items-center -space-x-3 mt-1">
                            <div className="w-12 h-12 rounded-full border-2 border-[#F8F9FA] overflow-hidden bg-orange-200">
                                <img src="https://i.pravatar.cc/150?img=11" alt="User 1" className="w-full h-full object-cover" />
                            </div>
                            <div className="w-12 h-12 rounded-full border-2 border-[#F8F9FA] overflow-hidden bg-gray-200">
                                <img src="https://i.pravatar.cc/150?img=33" alt="User 2" className="w-full h-full object-cover" />
                            </div>
                            <div className="w-12 h-12 rounded-full border-2 border-[#F8F9FA] overflow-hidden bg-gray-300">
                                <img src="https://i.pravatar.cc/150?img=60" alt="User 3" className="w-full h-full object-cover" />
                            </div>
                            <div className="w-12 h-12 rounded-full border-2 border-[#F8F9FA] overflow-hidden bg-[#1B64FF] text-white flex items-center justify-center font-semibold text-sm relative z-10">
                                2k
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col md:w-3/4">
                    <h3 className="text-[#1A6242] text-2xl font-medium tracking-wide mb-6">
                        Welcome to Jevxo Team
                    </h3>

                    <p className="text-3xl md:text-4xl lg:text-[30px] leading-[1.3] font-normal tracking-tight text-[#1E1E1E]">
                        As a leading UX/UI Design & software Development Agency, we
                        prioritize user-centric design in every project. Our commitment
                        to established design principles and best practices ensures that
                        our solutions are{" "}
                        <span className="text-gray-400">
                            not only intuitive and user-friendly design but
                            also aesthetically pleasing and functionally exceptional. at Jevxo,
                            we blend creativity with technology to craft digital experiences
                            that truly resonate with users and drive business success.
                        </span>
                    </p>

                    {/* Stats */}
                    <div className="flex flex-wrap items-center mt-20 gap-x-12 gap-y-10 lg:gap-x-24">
                        <div className="flex flex-col">
                            <span className="text-5xl lg:text-[76px] font-light text-[#222] tracking-tight leading-none">700+</span>
                            <span className="text-gray-600 mt-4 font-medium text-xl">Project Deliveries</span>
                        </div>

                        <div className="hidden sm:block w-[1px] h-24 bg-gray-300"></div>

                        <div className="flex flex-col">
                            <span className="text-5xl lg:text-[76px] font-light text-[#222] tracking-tight leading-none">20+</span>
                            <span className="text-gray-600 mt-4 font-medium text-xl">In-House Experts</span>
                        </div>

                        <div className="hidden sm:block w-[1px] h-24 bg-gray-300"></div>

                        <div className="flex flex-col">
                            <span className="text-5xl lg:text-[76px] font-light text-[#222] tracking-tight leading-none">90%</span>
                            <span className="text-gray-600 mt-4 font-medium text-xl">Satisfied Clients</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
