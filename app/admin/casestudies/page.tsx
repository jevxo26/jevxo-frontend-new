"use client";

import React, { useEffect, useState } from 'react';
import { casestudiesApi, Casestudy } from '@/api/casestudiesApi';
import { categoryApi, Category } from '@/api/categoryApi';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/ui/table';
import { Loader2, Plus, Trash2, Edit, X } from 'lucide-react';
import { useImageUpload } from '@/hooks/useImageUpload';

export default function CasestudiesManagementPage() {
  const [casestudies, setCasestudies] = useState<Casestudy[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { uploadImage, isUploading } = useImageUpload();

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    shortDescription: '',
    fullDescription: '',
    photoUrl: '',
    categoryId: '',
    projectLink: '',
    challenge: '',
    solution: '',
    technologies: '',
    order: 0,
    isActive: true,
  });

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const [casestudiesRes, categoriesRes] = await Promise.all([
        casestudiesApi.getAllCasestudies(),
        categoryApi.getAllCategories()
      ]);
      setCasestudies(casestudiesRes.data || casestudiesRes || []);
      setCategories(categoriesRes.data || categoriesRes || []);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;

    if (type === 'file') {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const url = await uploadImage(file);
        if (url) {
          setFormData((prev) => ({ ...prev, [name]: url }));
        }
      }
      return;
    }

    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else if (name === 'order') {
      setFormData((prev) => ({ ...prev, [name]: Number(value) }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const submitData: Record<string, any> = { ...formData };
      if (!submitData.categoryId) delete submitData.categoryId;

      if (editingId) {
        await casestudiesApi.updateCasestudy(editingId, submitData);
      } else {
        await casestudiesApi.createCasestudy(submitData);
      }

      handleCloseModal();
      
      const fileInput = document.getElementById('photoUrl-upload') as HTMLInputElement;
      if (fileInput) fileInput.value = '';

      fetchData(); // Refresh the list
    } catch (error) {
      console.error(`Failed to ${editingId ? 'update' : 'create'} casestudy:`, error);
      alert(`Failed to ${editingId ? 'update' : 'create'} casestudy. Check console for details.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpenModal = (casestudy?: Casestudy) => {
    if (casestudy) {
      setEditingId(casestudy.id);
      setFormData({
        title: casestudy.title || '',
        slug: casestudy.slug || '',
        shortDescription: casestudy.shortDescription || '',
        fullDescription: casestudy.fullDescription || '',
        photoUrl: casestudy.photoUrl || '',
        categoryId: casestudy.categoryId || '',
        projectLink: casestudy.projectLink || '',
        challenge: casestudy.challenge || '',
        solution: casestudy.solution || '',
        technologies: casestudy.technologies || '',
        order: casestudy.order || 0,
        isActive: casestudy.isActive,
      });
    } else {
      setEditingId(null);
      setFormData({
        title: '',
        slug: '',
        shortDescription: '',
        fullDescription: '',
        photoUrl: '',
        categoryId: '',
        projectLink: '',
        challenge: '',
        solution: '',
        technologies: '',
        order: 0,
        isActive: true,
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingId(null);
    setFormData({
      title: '',
      slug: '',
      shortDescription: '',
      fullDescription: '',
      photoUrl: '',
      categoryId: '',
      projectLink: '',
      challenge: '',
      solution: '',
      technologies: '',
      order: 0,
      isActive: true,
    });
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this casestudy?')) return;

    try {
      await casestudiesApi.deleteCasestudy(id);
      fetchData(); // Refresh the list
    } catch (error) {
      console.error('Failed to delete casestudy:', error);
      alert('Failed to delete casestudy.');
    }
  };

  return (
    <div className="p-6 w-full mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Casestudies Management
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Manage casestudies.
          </p>
        </div>
        <button 
          onClick={() => handleOpenModal()}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 rounded-lg flex items-center gap-2 font-medium transition-colors shadow-sm"
        >
          <Plus className="w-5 h-5" />
          Add Casestudy
        </button>
      </div>

      {/* List Table */}
      <div className="w-full">
        {isLoading ? (
          <div className="flex items-center justify-center py-20 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl">
            <Loader2 className="w-8 h-8 animate-spin text-indigo-500" />
          </div>
        ) : (
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Photo</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Order</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {casestudies.length > 0 ? (
                  casestudies.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>
                        <img src={item.photoUrl} alt={item.title} className="h-12 w-12 object-cover rounded-md border border-gray-200 dark:border-gray-800" />
                      </TableCell>
                      <TableCell className="font-medium">{item.title}</TableCell>
                      <TableCell>{item.order}</TableCell>
                      <TableCell>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${item.isActive ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400'
                          }`}>
                          {item.isActive ? 'Active' : 'Inactive'}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-1">
                          <button
                            onClick={() => handleOpenModal(item)}
                            className="text-blue-500 hover:text-blue-700 p-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md transition-colors"
                            title="Edit Casestudy"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(item.id)}
                            className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-colors"
                            title="Delete Casestudy"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center h-32 text-gray-500">
                      No casestudies found. Create one to get started!
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
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col">
            <div className="flex justify-between items-center p-6 border-b border-gray-100 dark:border-gray-800 shrink-0">
              <h2 className="text-xl font-semibold flex items-center gap-2 text-gray-900 dark:text-white">
                {editingId ? <Edit className="w-5 h-5 text-indigo-500" /> : <Plus className="w-5 h-5 text-indigo-500" />}
                {editingId ? 'Edit Casestudy' : 'Create New Casestudy'}
              </h2>
              <button onClick={handleCloseModal} className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto flex-1">
              <form id="casestudy-form" onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      required
                      value={formData.title}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white"
                      placeholder="Title"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Slug
                    </label>
                    <input
                      type="text"
                      name="slug"
                      required
                      value={formData.slug}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white"
                      placeholder="my-case-study"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Category
                    </label>
                    <select
                      name="categoryId"
                      value={formData.categoryId}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white"
                    >
                      <option value="">Select a category</option>
                      {categories.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                          {cat.name || cat.id}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Project Link
                    </label>
                    <input
                      type="text"
                      name="projectLink"
                      value={formData.projectLink}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white"
                      placeholder="https://..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Short Description
                  </label>
                  <input
                    type="text"
                    name="shortDescription"
                    required
                    value={formData.shortDescription}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white"
                    placeholder="Brief intro..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Full Description
                  </label>
                  <textarea
                    name="fullDescription"
                    required
                    value={formData.fullDescription}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white resize-y"
                    placeholder="Detailed description..."
                    rows={3}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Photo Upload
                  </label>
                  <input
                    id="photoUrl-upload"
                    type="file"
                    name="photoUrl"
                    accept="image/*"
                    onChange={handleChange}
                    required={!formData.photoUrl}
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white"
                  />
                  {formData.photoUrl && (
                    <div className="mt-2 relative inline-block">
                      <img src={formData.photoUrl} alt="Preview" className="h-16 w-auto object-cover rounded border border-gray-200 dark:border-gray-700" />
                      {isUploading && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded">
                          <Loader2 className="w-5 h-5 text-white animate-spin" />
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Challenge
                    </label>
                    <textarea
                      name="challenge"
                      value={formData.challenge}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white resize-y"
                      placeholder="The problem to solve..."
                      rows={3}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Solution
                    </label>
                    <textarea
                      name="solution"
                      value={formData.solution}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white resize-y"
                      placeholder="How it was solved..."
                      rows={3}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Technologies
                  </label>
                  <input
                    type="text"
                    name="technologies"
                    value={formData.technologies}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white"
                    placeholder="React, Node.js, etc."
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Order
                    </label>
                    <input
                      type="number"
                      name="order"
                      required
                      value={formData.order}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white"
                      placeholder="0"
                    />
                  </div>

                  <div className="flex items-center gap-2 mt-7">
                    <input
                      type="checkbox"
                      id="isActive"
                      name="isActive"
                      checked={formData.isActive}
                      onChange={handleChange}
                      className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="isActive" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Is Active
                    </label>
                  </div>
                </div>
              </form>
            </div>

            <div className="flex justify-end gap-3 p-6 border-t border-gray-100 dark:border-gray-800 shrink-0">
              <button
                type="button"
                onClick={handleCloseModal}
                disabled={isSubmitting || isUploading}
                className="py-2.5 px-4 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg shadow-sm transition-colors disabled:opacity-70"
              >
                Cancel
              </button>
              <button
                type="submit"
                form="casestudy-form"
                disabled={isSubmitting || isUploading}
                className="py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-sm transition-colors flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed min-w-[120px]"
              >
                {isSubmitting || isUploading ? <Loader2 className="w-5 h-5 animate-spin" /> : (editingId ? 'Update' : 'Create')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
