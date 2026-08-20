"use client";

import React, { useEffect, useState } from 'react';
import { partnerApi, Partner } from '@/api/partnerApi';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/ui/table';
import { Loader2, Plus, Trash2, Edit, ExternalLink, X } from 'lucide-react';
import { useImageUpload } from '@/hooks/useImageUpload';

export default function PartnersManagementPage() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { uploadImage, isUploading } = useImageUpload();

  const [formData, setFormData] = useState({
    name: '',
    logo: '',
    order: 0,
    url: '',
    isActive: true,
  });

  const fetchPartners = async () => {
    setIsLoading(true);
    try {
      const response = await partnerApi.getAllPartners();
      setPartners(response.data || []);
    } catch (error) {
      console.error('Failed to fetch partners:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPartners();
  }, []);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;

    if (type === 'file') {
      const file = e.target.files?.[0];
      if (file) {
        const url = await uploadImage(file);
        if (url) {
          setFormData((prev) => ({ ...prev, logo: url }));
        }
      }
      return;
    }

    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else if (type === 'number') {
      setFormData((prev) => ({ ...prev, [name]: parseInt(value) || 0 }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      if (editingId) {
        await partnerApi.updatePartner(editingId, formData);
      } else {
        await partnerApi.createPartner(formData);
      }

      handleCloseModal();
      
      const fileInput = document.getElementById('logo-upload') as HTMLInputElement;
      if (fileInput) fileInput.value = '';

      fetchPartners();
    } catch (error) {
      console.error(`Failed to ${editingId ? 'update' : 'create'} partner:`, error);
      alert(`Failed to ${editingId ? 'update' : 'create'} partner.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpenModal = (partner?: Partner) => {
    if (partner) {
      setEditingId(partner.id);
      setFormData({
        name: partner.name || '',
        logo: partner.logo || '',
        order: partner.order || 0,
        url: partner.url || '',
        isActive: partner.isActive,
      });
    } else {
      setEditingId(null);
      setFormData({
        name: '',
        logo: '',
        order: 0,
        url: '',
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
      logo: '',
      order: 0,
      url: '',
      isActive: true,
    });
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this partner?')) return;

    try {
      await partnerApi.deletePartner(id);
      fetchPartners();
    } catch (error) {
      console.error('Failed to delete partner:', error);
      alert('Failed to delete partner.');
    }
  };

  return (
    <div className="p-6 w-full mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Partners Management
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2">
            Manage partner logos, links, and display order.
          </p>
        </div>
        <button 
          onClick={() => handleOpenModal()}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg flex items-center gap-2 font-medium transition-colors shadow-sm"
        >
          <Plus className="w-5 h-5" />
          Add Partner
        </button>
      </div>

      {/* Partners Table */}
      <div className="w-full">
        {isLoading ? (
          <div className="flex items-center justify-center py-20 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
            <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
          </div>
        ) : (
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Logo</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Order</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {partners.length > 0 ? (
                  partners.map((partner) => (
                    <TableRow key={partner.id}>
                      <TableCell>
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="h-10 w-auto object-contain bg-slate-100 dark:bg-slate-800 rounded p-1"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/150x50?text=No+Logo';
                          }}
                        />
                      </TableCell>
                      <TableCell className="font-medium">
                        {partner.name}
                        {partner.url && (
                          <a href={partner.url} target="_blank" rel="noreferrer" className="ml-2 text-blue-500 hover:text-blue-600 inline-block">
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </TableCell>
                      <TableCell>{partner.order}</TableCell>
                      <TableCell>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${partner.isActive ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400' : 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-400'
                          }`}>
                          {partner.isActive ? 'Active' : 'Inactive'}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-1">
                          <button
                            onClick={() => handleOpenModal(partner)}
                            className="text-blue-500 hover:text-blue-700 p-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md transition-colors"
                            title="Edit Partner"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(partner.id)}
                            className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-colors"
                            title="Delete Partner"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center h-32 text-slate-500">
                      No partners found. Create one to get started!
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        )}
      </div>

      {/* Add/Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b border-slate-100 dark:border-slate-800 sticky top-0 bg-white dark:bg-slate-900 z-10">
              <h2 className="text-xl font-semibold flex items-center gap-2 text-slate-900 dark:text-white">
                {editingId ? <Edit className="w-5 h-5 text-blue-500" /> : <Plus className="w-5 h-5 text-blue-500" />}
                {editingId ? 'Edit Partner' : 'Create New Partner'}
              </h2>
              <button onClick={handleCloseModal} className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"
                  placeholder="Partner Name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Logo Image
                </label>
                <input
                  id="logo-upload"
                  type="file"
                  name="logo"
                  accept="image/*"
                  onChange={handleChange}
                  required={!formData.logo}
                  className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"
                />
                {formData.logo && (
                  <div className="mt-2 relative inline-block">
                    <img src={formData.logo} alt="Preview" className="h-16 w-auto object-contain bg-slate-100 rounded p-1" />
                    {isUploading && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded">
                        <Loader2 className="w-5 h-5 text-white animate-spin" />
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Website URL
                </label>
                <input
                  type="url"
                  name="url"
                  value={formData.url}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"
                  placeholder="https://partner.com"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Display Order
                  </label>
                  <input
                    type="number"
                    name="order"
                    value={formData.order}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"
                  />
                </div>
                <div className="flex items-center gap-2 mt-7">
                  <input
                    type="checkbox"
                    id="isActive"
                    name="isActive"
                    checked={formData.isActive}
                    onChange={handleChange}
                    className="w-4 h-4 text-blue-600 bg-slate-100 border-slate-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-slate-800 focus:ring-2 dark:bg-slate-700 dark:border-slate-600"
                  />
                  <label htmlFor="isActive" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Is Active
                  </label>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800 mt-6">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  disabled={isSubmitting || isUploading}
                  className="py-2.5 px-4 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium rounded-lg shadow-sm transition-colors disabled:opacity-70"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting || isUploading}
                  className="py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm transition-colors flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed min-w-[120px]"
                >
                  {isSubmitting || isUploading ? <Loader2 className="w-5 h-5 animate-spin" /> : (editingId ? 'Update' : 'Create')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
