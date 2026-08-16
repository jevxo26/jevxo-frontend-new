'use client';

import React, { useState, useEffect } from 'react';
import { packageBookingApi } from '../../../api/packageBookingApi';
import { packageApi } from '../../../api/packageApi';

export default function PackageBookingPage() {
  const [bookings, setBookings] = useState<any[]>([]);
  const [availablePackages, setAvailablePackages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  // State for manual booking entry
  const [formData, setFormData] = useState({
    name: '',
    userEmail: '',
    companyName: '',
    companyEmail: '',
    billingCycle: 'Month-to-Month',
    packageId: '',
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [bookingsRes, packagesRes] = await Promise.all([
        packageBookingApi.getAllBookings(),
        packageApi.getAllPackages()
      ]);
      
      if (bookingsRes && bookingsRes.data) {
        setBookings(bookingsRes.data);
      }
      
      if (packagesRes && packagesRes.data) {
        setAvailablePackages(packagesRes.data);
        if (packagesRes.data.length > 0 && !formData.packageId) {
          setFormData(prev => ({ ...prev, packageId: packagesRes.data[0].id }));
        }
      }
    } catch (error) {
      console.error('Failed to fetch data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await packageBookingApi.createBooking(formData);
      setFormData({
        name: '',
        userEmail: '',
        companyName: '',
        companyEmail: '',
        billingCycle: 'Month-to-Month',
        packageId: availablePackages.length > 0 ? availablePackages[0].id : '',
      });
      fetchData();
      alert('Manual booking created and notification email dispatched!');
    } catch (error) {
      console.error('Failed to create booking:', error);
      alert('Failed to create booking. Please check console for errors.');
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this booking request?')) {
      try {
        await packageBookingApi.deleteBooking(id);
        fetchData();
      } catch (error) {
        console.error('Failed to delete booking:', error);
      }
    }
  };

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      await packageBookingApi.updateBooking(id, { status: newStatus });
      fetchData();
    } catch (error) {
      console.error('Failed to update status:', error);
    }
  };

  const getStatusColor = (status: string) => {
    switch(status.toUpperCase()) {
      case 'PENDING': return 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border-amber-200 dark:border-amber-800';
      case 'APPROVED': return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800';
      case 'REJECTED': return 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400 border-rose-200 dark:border-rose-800';
      default: return 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700';
    }
  };

  if (loading) {
    return <div className="p-8 text-center text-slate-500 dark:text-slate-400">Loading bookings...</div>;
  }

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300">
            Package Bookings
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2">Manage incoming package subscription requests</p>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
        {/* Create Form */}
        <div className="xl:col-span-1">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Log Manual Booking</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  User Name
                </label>
                <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  User Email
                </label>
                <input type="email" name="userEmail" required value={formData.userEmail} onChange={handleChange} className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Company Name
                </label>
                <input type="text" name="companyName" required value={formData.companyName} onChange={handleChange} className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Company Email
                </label>
                <input type="email" name="companyEmail" required value={formData.companyEmail} onChange={handleChange} className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Package
                </label>
                <select name="packageId" required value={formData.packageId} onChange={handleChange} className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white">
                  {availablePackages.map(pkg => (
                    <option key={pkg.id} value={pkg.id}>{pkg.name}</option>
                  ))}
                  {availablePackages.length === 0 && <option value="">No packages available</option>}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Billing Cycle
                </label>
                <select name="billingCycle" required value={formData.billingCycle} onChange={handleChange} className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white">
                  <option value="Month-to-Month">Month-to-Month</option>
                  <option value="Yearly">Yearly</option>
                </select>
              </div>

              <button type="submit" disabled={availablePackages.length === 0} className="w-full mt-4 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium rounded-lg transition-colors focus:ring-4 focus:ring-blue-500/20">
                Log Booking
              </button>
            </form>
          </div>
        </div>

        {/* Data Table */}
        <div className="xl:col-span-3">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-slate-500 dark:text-slate-400 uppercase bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                  <tr>
                    <th className="px-6 py-4 font-medium">Requester</th>
                    <th className="px-6 py-4 font-medium">Company</th>
                    <th className="px-6 py-4 font-medium">Request Details</th>
                    <th className="px-6 py-4 font-medium">Status</th>
                    <th className="px-6 py-4 font-medium text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  {bookings.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="px-6 py-8 text-center text-slate-500 dark:text-slate-400">
                        No booking requests found.
                      </td>
                    </tr>
                  ) : (
                    bookings.map((booking) => (
                      <tr key={booking.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex flex-col">
                            <span className="font-semibold text-slate-900 dark:text-white">
                              {booking.name}
                            </span>
                            <span className="text-slate-500 dark:text-slate-400 text-xs mt-1">
                              {booking.userEmail}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex flex-col">
                            <span className="font-medium text-slate-800 dark:text-slate-200">
                              {booking.companyName}
                            </span>
                            <span className="text-slate-500 dark:text-slate-400 text-xs mt-1">
                              {booking.companyEmail}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex flex-col">
                            <span className="font-semibold text-blue-600 dark:text-blue-400">
                              {availablePackages.find(p => p.id === booking.packageId)?.name || booking.packageId}
                            </span>
                            <span className="text-slate-500 dark:text-slate-400 text-xs mt-1">
                              Cycle: {booking.billingCycle}
                            </span>
                            <span className="text-slate-400 dark:text-slate-500 text-[10px] mt-1">
                              {new Date(booking.createdAt).toLocaleDateString()}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-2.5 py-1 text-xs font-semibold rounded-full border ${getStatusColor(booking.status)}`}>
                            {booking.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end space-x-2">
                            {booking.status === 'PENDING' && (
                              <>
                                <button
                                  onClick={() => updateStatus(booking.id, 'APPROVED')}
                                  className="text-xs font-medium px-2 py-1 bg-emerald-50 text-emerald-600 hover:bg-emerald-100 dark:bg-emerald-900/20 dark:text-emerald-400 dark:hover:bg-emerald-900/40 rounded transition-colors"
                                >
                                  Approve
                                </button>
                                <button
                                  onClick={() => updateStatus(booking.id, 'REJECTED')}
                                  className="text-xs font-medium px-2 py-1 bg-rose-50 text-rose-600 hover:bg-rose-100 dark:bg-rose-900/20 dark:text-rose-400 dark:hover:bg-rose-900/40 rounded transition-colors"
                                >
                                  Reject
                                </button>
                              </>
                            )}
                            <button
                              onClick={() => handleDelete(booking.id)}
                              className="text-slate-400 hover:text-red-500 p-1.5 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors ml-2"
                              title="Delete"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
