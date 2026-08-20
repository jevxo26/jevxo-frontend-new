"use client";

import React, { useEffect, useState } from 'react';
import { packageCategoryApi, PackageCategory } from '@/api/packageCategoryApi';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/ui/table';
import { Loader2, Plus, Trash2 } from 'lucide-react';

export default function PackageCategoryManagementPage() {
  const [categories, setCategories] = useState<PackageCategory[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });

  const fetchCategories = async () => {
    setIsLoading(true);
    try {
      const response = await packageCategoryApi.getAll();
      setCategories(response || []);
    } catch (error) {
      console.error('Failed to fetch categories:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await packageCategoryApi.create(formData);
      setFormData({ name: '', description: '' });
      fetchCategories(); // Refresh the list
    } catch (error) {
      console.error('Failed to create category:', error);
      alert('Failed to create category. Check console for details.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this category?')) return;
    
    try {
      await packageCategoryApi.delete(id);
      fetchCategories(); // Refresh the list
    } catch (error) {
      console.error('Failed to delete category:', error);
      alert('Failed to delete category.');
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          Package Category Management
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Manage categories for your packages.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Create Category Form */}
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-sm h-fit">
          <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
            <Plus className="w-5 h-5 text-indigo-500" />
            Add New Category
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white"
                placeholder="e.g., Premium Packages"
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
                rows={4}
                className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white resize-none"
                placeholder="Category description..."
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-sm transition-colors flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed mt-6"
            >
              {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Create Category'}
            </button>
          </form>
        </div>

        {/* Categories Table */}
        <div className="lg:col-span-2">
          {isLoading ? (
            <div className="flex items-center justify-center py-20 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl">
              <Loader2 className="w-8 h-8 animate-spin text-indigo-500" />
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {categories && categories.length > 0 ? (
                    categories.map((category) => (
                      <TableRow key={category.id}>
                        <TableCell className="font-medium text-gray-900 dark:text-white">
                          {category.name}
                        </TableCell>
                        <TableCell className="text-gray-500 dark:text-gray-400 max-w-xs truncate">
                          {category.description}
                        </TableCell>
                        <TableCell className="text-right">
                          <button
                            onClick={() => handleDelete(category.id)}
                            className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-colors"
                            title="Delete Category"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={3} className="text-center h-32 text-gray-500">
                        No categories found. Create one to get started!
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
