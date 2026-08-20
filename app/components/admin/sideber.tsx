"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LayoutDashboard, Users, Settings, FileText, BarChart3, LogOut, Building2, Briefcase, Handshake, Package as PackageIcon, ReceiptText, ChevronDown } from "lucide-react";
import { useState } from "react";

type NavItem = {
  name: string;
  href?: string;
  icon: any;
  children?: { name: string; href: string; icon?: any }[];
};

const navigation: NavItem[] = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  {
    name: "Management",
    icon: Users,
    children: [
      { name: "Users", href: "/admin/usermanagement" },
      { name: "Department", href: "/admin/department" },
      { name: "Designation", href: "/admin/designation" },
    ]
  },
  {
    name: "Business",
    icon: PackageIcon,
    children: [
      { name: "Orders", href: "/admin/orders" },
      { name: "Bookings", href: "/admin/package-booking" },
      { name: "Packages", href: "/admin/package" },
      { name: "Package Category", href: "/admin/package-category" },
    ]
  },
  {
    name: "Content",
    icon: FileText,
    children: [
      { name: "Banner", href: "/admin/banner" },
      { name: "Category", href: "/admin/category" },
      { name: "Blog", href: "/admin/blog" },
      { name: "Case Studies", href: "/admin/casestudies" },
      { name: "Reviews", href: "/admin/review" },
      { name: "Partners", href: "/admin/partners" },
    ]
  },
];

const NavLink = ({ item, isActive, isChild = false }: { item: any, isActive: boolean, isChild?: boolean }) => {
  return (
    <Link
      href={item.href}
      className={`flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all duration-200 group ${
        isActive
          ? "bg-blue-600 text-white shadow-md shadow-blue-900/20"
          : "text-slate-300 hover:bg-slate-800 hover:text-white"
      } ${isChild ? "ml-7 text-sm" : ""}`}
    >
      {item.icon && (
        <item.icon
          className={`h-5 w-5 ${isActive ? "text-white" : "text-slate-400 group-hover:text-blue-400"}`}
        />
      )}
      {!item.icon && isChild && <div className="w-1.5 h-1.5 rounded-full bg-slate-500 group-hover:bg-blue-400" />}
      <span className="font-medium whitespace-nowrap overflow-hidden text-ellipsis">{item.name}</span>
    </Link>
  );
};

const NavGroup = ({ item, pathname }: { item: NavItem, pathname: string }) => {
  // Check if any child is active to auto-expand
  const hasActiveChild = item.children?.some(child => pathname.startsWith(child.href));
  const [isOpen, setIsOpen] = useState(hasActiveChild || false);

  return (
    <div className="space-y-1">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-slate-300 transition-all duration-200 hover:bg-slate-800 hover:text-white group"
      >
        <div className="flex items-center gap-3">
          <item.icon className="h-5 w-5 text-slate-400 group-hover:text-blue-400" />
          <span className="font-medium whitespace-nowrap">{item.name}</span>
        </div>
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      
      {isOpen && item.children && (
        <div className="space-y-1 mt-1">
          {item.children.map(child => (
            <NavLink 
              key={child.name} 
              item={child} 
              isActive={pathname === child.href} 
              isChild={true} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

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
      <div className="flex h-16 shrink-0 items-center justify-center border-b border-slate-700/50 px-6">
        <h1 className="text-2xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500 w-full text-center">
          JEVXO
        </h1>
      </div>

      <nav className="flex-1 overflow-y-auto py-6 custom-scrollbar">
        <ul className="space-y-2 px-3">
          {navigation.map((item) => (
            <li key={item.name}>
              {item.children ? (
                <NavGroup item={item} pathname={pathname} />
              ) : (
                <NavLink item={item} isActive={pathname === item.href} />
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div className="shrink-0 border-t border-slate-700/50 p-4">
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
