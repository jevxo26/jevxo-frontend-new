"use client";

import React, { useEffect, useState } from 'react';
import { userApi, User } from '@/api/userApi';
import { departmentApi, Department } from '@/api/departmentApi';
import { designationApi, Designation } from '@/api/designationApi';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/ui/table';
import { Loader2, Plus, Trash2 } from 'lucide-react';
import { useImageUpload } from '@/hooks/useImageUpload';

export default function UserManagementPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [departments, setDepartments] = useState<Department[]>([]);
  const [designations, setDesignations] = useState<Designation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { uploadImage, isUploading } = useImageUpload();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'employee',
    departmentId: '',
    designationId: '',
    picture: '',
  });

  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      const response = await userApi.getAllUsers();
      // Assuming response.data contains the array of users based on standard nestjs responses
      setUsers(response.data || []);
    } catch (error) {
      console.error('Failed to fetch users:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchDepartments = async () => {
    try {
      const response = await departmentApi.getAllDepartments();
      setDepartments(response.data || []);
    } catch (error) {
      console.error('Failed to fetch departments:', error);
    }
  };

  const fetchDesignations = async () => {
    try {
      const response = await designationApi.getAllDesignations();
      setDesignations(response.data || []);
    } catch (error) {
      console.error('Failed to fetch designations:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchDepartments();
    fetchDesignations();
  }, []);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Create user using formData, API handles relation mapping
      await userApi.createUser(formData);
      setFormData({ name: '', email: '', password: '', role: 'employee', departmentId: '', designationId: '', picture: '' });
      const fileInput = document.getElementById('picture-upload') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
      fetchUsers(); // Refresh the list
    } catch (error) {
      console.error('Failed to create user:', error);
      alert('Failed to create user. Check console for details.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this user?')) return;

    try {
      await userApi.deleteUser(id);
      fetchUsers(); // Refresh the list
    } catch (error) {
      console.error('Failed to delete user:', error);
      alert('Failed to delete user.');
    }
  };

  return (
    <div className="p-6 w-full mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          User Management
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Manage system users, their roles, and access.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Create User Form */}
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-sm h-fit">
          <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
            <Plus className="w-5 h-5 text-indigo-500" />
            Add New User
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white"
                placeholder="••••••••"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Profile Picture
              </label>
              <input
                id="picture-upload"
                type="file"
                name="picture"
                accept="image/*"
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white"
              />
              {formData.picture && (
                <div className="mt-2 relative inline-block">
                  <img src={formData.picture} alt="Preview" className="h-16 w-16 object-cover rounded border border-gray-200 dark:border-gray-700" />
                  {isUploading && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded">
                      <Loader2 className="w-5 h-5 text-white animate-spin" />
                    </div>
                  )}
                </div>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Role
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white"
              >
                <option value="admin">Admin</option>
                <option value="employee">Employee</option>
                <option value="cto">CTO</option>
                <option value="ceo">CEO</option>
                <option value="coo">COO</option>
                <option value="cpm">CPM</option>
                <option value="founder">Founder</option>
                <option value="hr">HR</option>
                <option value="developer">Developer</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Department
              </label>
              <select
                name="departmentId"
                value={formData.departmentId}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white"
              >
                <option value="">None</option>
                {departments.map((dept) => (
                  <option key={dept.id} value={dept.id}>{dept.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Designation
              </label>
              <select
                name="designationId"
                value={formData.designationId}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white"
              >
                <option value="">None</option>
                {designations.map((desig) => (
                  <option key={desig.id} value={desig.id}>{desig.title}</option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              disabled={isSubmitting || isUploading}
              className="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-sm transition-colors flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed mt-6"
            >
              {isSubmitting || isUploading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Create User'}
            </button>
          </form>
        </div>

        {/* Users Table */}
        <div className="lg:col-span-2">
          {isLoading ? (
            <div className="flex items-center justify-center py-20 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl">
              <Loader2 className="w-8 h-8 animate-spin text-indigo-500" />
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Designation</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.length > 0 ? (
                  users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-3">
                          {user.picture ? (
                            <img src={user.picture} alt={user.name} className="h-8 w-8 rounded-full object-cover" />
                          ) : (
                            <div className="h-8 w-8 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-medium">
                              {user.name.charAt(0)}
                            </div>
                          )}
                          {user.name}
                        </div>
                      </TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${user.role === 'admin' ? 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400' : 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                          }`}>
                          {user.role}
                        </span>
                      </TableCell>
                      <TableCell className="text-gray-500 dark:text-gray-400">
                        {user.department?.name || '—'}
                      </TableCell>
                      <TableCell className="text-gray-500 dark:text-gray-400">
                        {user.designation?.title || '—'}
                      </TableCell>
                      <TableCell className="text-right">
                        <button
                          onClick={() => handleDelete(user.id)}
                          className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-colors"
                          title="Delete User"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center h-32 text-gray-500">
                      No users found. Create one to get started!
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          )}
        </div>
      </div>
    </div>
  );
}
