'use client';

import React, { useState, useEffect } from 'react';
import { packageApi } from '../../../api/packageApi';
import { Loader2, Plus, Trash2, Edit, X } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/ui/table';

export default function PackageManagementPage() {
  const [packages, setPackages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: 0,
    features: '', // We will split this string into an array by commas
    duration: '',
    isActive: true,
  });

  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    try {
      const res = await packageApi.getAllPackages();
      if (res && res.data) {
        setPackages(res.data);
      }
    } catch (error) {
      console.error('Failed to fetch packages:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else if (type === 'number') {
      setFormData((prev) => ({ ...prev, [name]: parseFloat(value) || 0 }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Split features by comma and trim whitespace
      const featureArray = formData.features.split(',').map(f => f.trim()).filter(f => f.length > 0);

      const submitData = {
        ...formData,
        features: featureArray
      };

      if (editingId) {
        await packageApi.updatePackage(editingId, submitData);
      } else {
        await packageApi.createPackage(submitData);
      }
      
      handleCloseModal();
      fetchPackages();
    } catch (error) {
      console.error(`Failed to ${editingId ? 'update' : 'create'} package:`, error);
      alert(`Failed to ${editingId ? 'update' : 'create'} package. Check console for details.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpenModal = (pkg?: any) => {
    if (pkg) {
      setEditingId(pkg.id);
      setFormData({
        name: pkg.name || '',
        description: pkg.description || '',
        price: pkg.price || 0,
        features: (pkg.features || []).join(', '),
        duration: pkg.duration || '',
        isActive: pkg.isActive,
      });
    } else {
      setEditingId(null);
      setFormData({
        name: '',
        description: '',
        price: 0,
        features: '',
        duration: '',
        isActive: true,
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingId(null);
    setFormData({
      name: '',
      description: '',
      price: 0,
      features: '',
      duration: '',
      isActive: true,
    });
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this package?')) {
      try {
        await packageApi.deletePackage(id);
        fetchPackages();
      } catch (error) {
        console.error('Failed to delete package:', error);
      }
    }
  };

  const toggleStatus = async (pkg: any) => {
    try {
      await packageApi.updatePackage(pkg.id, { isActive: !pkg.isActive });
      fetchPackages();
    } catch (error) {
      console.error('Failed to update package status:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-indigo-500" />
      </div>
    );
  }

  return (
    <div className="p-6 w-full mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Package Management
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Create and manage your subscription packages.
          </p>
        </div>
        <button 
          onClick={() => handleOpenModal()}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 rounded-lg flex items-center gap-2 font-medium transition-colors shadow-sm"
        >
          <Plus className="w-5 h-5" />
          Add Package
        </button>
      </div>

      {/* Data Table */}
      <div className="w-full">
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Package Details</TableHead>
                <TableHead>Pricing</TableHead>
                <TableHead>Features</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {packages.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} className="text-center h-32 text-gray-500">
                    No packages found. Create one to get started.
                  </TableCell>
                </TableRow>
              ) : (
                packages.map((pkg) => (
                  <TableRow key={pkg.id}>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-semibold text-gray-900 dark:text-white text-base">
                          {pkg.name}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 text-xs mt-1 truncate max-w-[200px]" title={pkg.description}>
                          {pkg.description}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-semibold text-gray-900 dark:text-white">
                          ${Number(pkg.price).toFixed(2)}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 text-xs mt-1">
                          {pkg.duration}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1 max-w-[250px]">
                        {pkg.features.slice(0, 3).map((f: string, i: number) => (
                          <span key={i} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded text-xs border border-gray-200 dark:border-gray-700">
                            {f}
                          </span>
                        ))}
                        {pkg.features.length > 3 && (
                          <span className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded text-xs border border-blue-200 dark:border-blue-800">
                            +{pkg.features.length - 3} more
                          </span>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => toggleStatus(pkg)}
                          className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${pkg.isActive
                              ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 hover:bg-emerald-200'
                              : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400 hover:bg-gray-200'
                            }`}
                        >
                          {pkg.isActive ? 'Active' : 'Inactive'}
                        </button>
                        <button
                          onClick={() => handleOpenModal(pkg)}
                          className="text-blue-500 hover:text-blue-700 p-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md transition-colors"
                          title="Edit Package"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(pkg.id)}
                          className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-colors"
                          title="Delete Package"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Add/Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b border-gray-100 dark:border-gray-800 sticky top-0 bg-white dark:bg-gray-900 z-10">
              <h2 className="text-xl font-semibold flex items-center gap-2 text-gray-900 dark:text-white">
                {editingId ? <Edit className="w-5 h-5 text-indigo-500" /> : <Plus className="w-5 h-5 text-indigo-500" />}
                {editingId ? 'Edit Package' : 'Create New Package'}
              </h2>
              <button onClick={handleCloseModal} className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Package Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white"
                  placeholder="e.g. Pro Plan"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Description
                </label>
                <textarea
                  name="description"
                  required
                  value={formData.description}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white resize-none"
                  placeholder="Short description of the package"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Price ($)
                  </label>
                  <input
                    type="number"
                    name="price"
                    required
                    min="0"
                    step="0.01"
                    value={formData.price}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Billing Duration
                  </label>
                  <input
                    type="text"
                    name="duration"
                    required
                    value={formData.duration}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white"
                    placeholder="e.g. Month-to-Month, Yearly"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Features (Comma Separated)
                </label>
                <textarea
                  name="features"
                  required
                  value={formData.features}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white resize-none"
                  placeholder="Feature 1, Feature 2, Feature 3"
                />
              </div>

              <div className="flex items-center gap-2 mt-2">
                <input
                  type="checkbox"
                  id="isActive"
                  name="isActive"
                  checked={formData.isActive}
                  onChange={handleChange}
                  className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="isActive" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Is Active (Visible to users)
                </label>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-gray-100 dark:border-gray-800 mt-6">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  disabled={isSubmitting}
                  className="py-2.5 px-4 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg shadow-sm transition-colors disabled:opacity-70"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-sm transition-colors flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed min-w-[120px]"
                >
                  {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : (editingId ? 'Update' : 'Create')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
