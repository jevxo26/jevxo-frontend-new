"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LayoutDashboard, Users, Settings, FileText, BarChart3, LogOut, Building2, Briefcase, Handshake, Package as PackageIcon, ReceiptText } from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Users", href: "/admin/usermanagement", icon: Users },
  { name: "Department", href: "/admin/department", icon: Building2 },
  { name: "Designation", href: "/admin/designation", icon: Briefcase },
  { name: "Partners", href: "/admin/partners", icon: Handshake },
  { name: "Packages", href: "/admin/package", icon: PackageIcon },
  { name: "Package Category", href: "/admin/package-category", icon: FileText },
  { name: "Bookings", href: "/admin/package-booking", icon: ReceiptText },
  { name: "Banner", href: "/admin/banner", icon: FileText },
  { name: "Category", href: "/admin/category", icon: FileText },
  { name: "Orders", href: "/admin/orders", icon: ReceiptText },
  { name: "Reviews", href: "/admin/review", icon: ReceiptText },
  { name: "Blog", href: "/admin/blog", icon: ReceiptText },

  // { name: "Analytics", href: "/admin/analytics", icon: BarChart3 },
  // { name: "Settings", href: "/admin/settings", icon: Settings },
  { name: "Case Studies", href: "/admin/casestudies", icon: FileText },


];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    document.cookie = 'access_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    router.push('/admin/login');
  };

  return (
    <div className="flex h-full w-64 flex-col bg-slate-900 text-white shadow-xl transition-all duration-300">
      <div className="flex h-16 items-center justify-center border-b border-slate-700/50 px-6">
        <h1 className="text-2xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500 w-full text-center">
          JEVXO
        </h1>
      </div>

      <nav className="flex-1 overflow-y-auto py-6">
        <ul className="space-y-2 px-3">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all duration-200 group ${isActive
                    ? "bg-blue-600 text-white shadow-md shadow-blue-900/20"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                    }`}
                >
                  <item.icon
                    className={`h-5 w-5 ${isActive ? "text-white" : "text-slate-400 group-hover:text-blue-400"}`}
                  />
                  <span className="font-medium">{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t border-slate-700/50 p-4">
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-slate-300 transition-all hover:bg-slate-800 hover:text-white group"
        >
          <LogOut className="h-5 w-5 text-slate-400 group-hover:text-red-400" />
          <span className="font-medium group-hover:text-red-400">Logout</span>
        </button>
      </div>
    </div>
  );
}
