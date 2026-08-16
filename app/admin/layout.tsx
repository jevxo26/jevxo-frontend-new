"use client";

import Sidebar from "@/app/components/admin/sideber";
import Navbar from "@/app/components/admin/navber";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

export default function AdminLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  return (
    <div className="flex h-screen w-full bg-slate-50 overflow-hidden font-sans">
      <div className="hidden lg:block h-full z-20 shadow-xl">
        <Sidebar />
      </div>
      
      <div className="flex flex-1 flex-col h-full overflow-hidden relative">
        <Navbar />
        
        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          <div className="mx-auto max-w-7xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
