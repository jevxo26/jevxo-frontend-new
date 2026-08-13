import { Users, DollarSign, Activity, CreditCard } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Dashboard Overview</h2>
        <p className="text-slate-500 mt-1">Welcome back, here's what's happening today.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Card 1 */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between pb-4">
            <h3 className="text-sm font-medium text-slate-500">Total Revenue</h3>
            <div className="p-2 bg-emerald-100 rounded-lg">
              <DollarSign className="h-4 w-4 text-emerald-600" />
            </div>
          </div>
          <div className="text-2xl font-bold text-slate-900">$45,231.89</div>
          <p className="text-xs text-emerald-600 mt-2 flex items-center">
            <span className="font-medium bg-emerald-50 px-2 py-0.5 rounded-full">+20.1%</span> 
            <span className="text-slate-500 ml-2">from last month</span>
          </p>
        </div>

        {/* Card 2 */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between pb-4">
            <h3 className="text-sm font-medium text-slate-500">Active Users</h3>
            <div className="p-2 bg-blue-100 rounded-lg">
              <Users className="h-4 w-4 text-blue-600" />
            </div>
          </div>
          <div className="text-2xl font-bold text-slate-900">+2,350</div>
          <p className="text-xs text-blue-600 mt-2 flex items-center">
            <span className="font-medium bg-blue-50 px-2 py-0.5 rounded-full">+180.1%</span> 
            <span className="text-slate-500 ml-2">from last month</span>
          </p>
        </div>

        {/* Card 3 */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between pb-4">
            <h3 className="text-sm font-medium text-slate-500">Sales</h3>
            <div className="p-2 bg-amber-100 rounded-lg">
              <CreditCard className="h-4 w-4 text-amber-600" />
            </div>
          </div>
          <div className="text-2xl font-bold text-slate-900">+12,234</div>
          <p className="text-xs text-amber-600 mt-2 flex items-center">
            <span className="font-medium bg-amber-50 px-2 py-0.5 rounded-full">+19%</span> 
            <span className="text-slate-500 ml-2">from last month</span>
          </p>
        </div>

        {/* Card 4 */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between pb-4">
            <h3 className="text-sm font-medium text-slate-500">Active Now</h3>
            <div className="p-2 bg-indigo-100 rounded-lg">
              <Activity className="h-4 w-4 text-indigo-600" />
            </div>
          </div>
          <div className="text-2xl font-bold text-slate-900">+573</div>
          <p className="text-xs text-indigo-600 mt-2 flex items-center">
            <span className="font-medium bg-indigo-50 px-2 py-0.5 rounded-full">+201</span> 
            <span className="text-slate-500 ml-2">since last hour</span>
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <div className="rounded-xl border border-slate-200 bg-white shadow-sm lg:col-span-4 p-6 min-h-[400px]">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Overview</h3>
          <div className="flex h-[300px] items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50">
            <div className="text-center">
              <BarChart3 className="mx-auto h-8 w-8 text-slate-400 mb-2" />
              <p className="text-sm font-medium text-slate-500">Chart rendering placeholder</p>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white shadow-sm lg:col-span-3 p-6 min-h-[400px]">
          <h3 className="text-lg font-semibold text-slate-900 mb-6">Recent Sales</h3>
          <div className="space-y-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-sm font-medium text-slate-600">
                  U{i}
                </div>
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none text-slate-900">User {i}</p>
                  <p className="text-sm text-slate-500">user{i}@example.com</p>
                </div>
                <div className="ml-auto font-medium text-emerald-600">+$1,999.00</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import { BarChart3 } from "lucide-react";
