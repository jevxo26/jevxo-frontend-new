"use client";

import React, { useEffect, useState } from 'react';
import { orderApi, Order, OrderStatus, PaymentStatus } from '@/api/orderApi';
import { categoryApi, Category } from '@/api/categoryApi';
import { userApi, User } from '@/api/userApi';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/ui/table';
import { Loader2, Plus, Trash2, Edit, X } from 'lucide-react';

export default function OrdersManagementPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [clients, setClients] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    projectName: '',
    budget: 0,
    advance: 0,
    duration: '',
    status: OrderStatus.ONBOARD,
    paymentStatus: PaymentStatus.UNPAID,
    projectProgress: '',
    categoryId: '',
    clientId: '',
  });

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const [ordersRes, categoriesRes, clientsRes] = await Promise.all([
        orderApi.getAllOrders(),
        categoryApi.getAllCategories(),
        userApi.getAllUsers()
      ]);
      setOrders(ordersRes.data || ordersRes || []);
      setCategories(categoriesRes.data || categoriesRes || []);
      setClients(clientsRes.data || clientsRes || []);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === 'budget' || name === 'advance') {
      setFormData((prev) => ({ ...prev, [name]: Number(value) }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Format data (removing empty IDs if not selected)
      const submitData: Record<string, any> = { ...formData };
      if (!submitData.categoryId) delete submitData.categoryId;
      if (!submitData.clientId) delete submitData.clientId;

      if (editingId) {
        await orderApi.updateOrder(editingId, submitData);
      } else {
        await orderApi.createOrder(submitData);
      }
      
      handleCloseModal();
      fetchData(); // Refresh the list
    } catch (error) {
      console.error(`Failed to ${editingId ? 'update' : 'create'} order:`, error);
      alert(`Failed to ${editingId ? 'update' : 'create'} order. Check console for details.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpenModal = (order?: Order) => {
    if (order) {
      setEditingId(order.id);
      setFormData({
        projectName: order.projectName || '',
        budget: order.budget || 0,
        advance: order.advance || 0,
        duration: order.duration || '',
        status: order.status || OrderStatus.ONBOARD,
        paymentStatus: order.paymentStatus || PaymentStatus.UNPAID,
        projectProgress: order.projectProgress || '',
        categoryId: order.category?.id || '',
        clientId: order.client?.id || '',
      });
    } else {
      setEditingId(null);
      setFormData({
        projectName: '',
        budget: 0,
        advance: 0,
        duration: '',
        status: OrderStatus.ONBOARD,
        paymentStatus: PaymentStatus.UNPAID,
        projectProgress: '',
        categoryId: '',
        clientId: '',
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingId(null);
    setFormData({
      projectName: '',
      budget: 0,
      advance: 0,
      duration: '',
      status: OrderStatus.ONBOARD,
      paymentStatus: PaymentStatus.UNPAID,
      projectProgress: '',
      categoryId: '',
      clientId: '',
    });
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this order?')) return;

    try {
      await orderApi.deleteOrder(id);
      fetchData(); // Refresh the list
    } catch (error) {
      console.error('Failed to delete order:', error);
      alert('Failed to delete order.');
    }
  };

  const getStatusBadgeColor = (status: OrderStatus) => {
    switch (status) {
      case OrderStatus.ONBOARD: return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      case OrderStatus.ONGOING: return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      case OrderStatus.DELIVERY: return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400';
      case OrderStatus.QA_TEST: return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400';
      case OrderStatus.DELIVERED: return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400';
    }
  };

  return (
    <div className="p-6 w-full mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Orders Management
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Manage project orders, budgets, and statuses.
          </p>
        </div>
        <button 
          onClick={() => handleOpenModal()}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 rounded-lg flex items-center gap-2 font-medium transition-colors shadow-sm"
        >
          <Plus className="w-5 h-5" />
          Add Order
        </button>
      </div>

      {/* Orders Table */}
      <div className="w-full overflow-x-auto">
        {isLoading ? (
          <div className="flex items-center justify-center py-20 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl">
            <Loader2 className="w-8 h-8 animate-spin text-indigo-500" />
          </div>
        ) : (
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Project</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Financials</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders && orders.length > 0 ? (
                  orders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell>
                        <div className="font-medium text-gray-900 dark:text-white">{order.projectName}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {order.category?.name || 'No category'} • {order.duration || 'N/A'}
                        </div>
                      </TableCell>
                      <TableCell className="text-gray-600 dark:text-gray-300">
                        {order.client?.name || 'No client'}
                      </TableCell>
                      <TableCell>
                        <div className="text-sm text-gray-900 dark:text-white">Budget: ${order.budget}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Advance: ${order.advance}</div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-col gap-1 items-start">
                          <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium uppercase tracking-wider ${getStatusBadgeColor(order.status)}`}>
                            {order.status}
                          </span>
                          <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium uppercase tracking-wider ${order.paymentStatus === PaymentStatus.PAID ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                              order.paymentStatus === PaymentStatus.PARTIAL ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' :
                                'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                            }`}>
                            {order.paymentStatus}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-1">
                          <button
                            onClick={() => handleOpenModal(order)}
                            className="text-blue-500 hover:text-blue-700 p-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md transition-colors"
                            title="Edit Order"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(order.id)}
                            className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-colors"
                            title="Delete Order"
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
                      No orders found. Create one to get started!
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
                {editingId ? 'Edit Order' : 'Create New Order'}
              </h2>
              <button onClick={handleCloseModal} className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto flex-1">
              <form id="order-form" onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Project Name
                  </label>
                  <input
                    type="text"
                    name="projectName"
                    required
                    value={formData.projectName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Budget
                    </label>
                    <input
                      type="number"
                      name="budget"
                      required
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Advance
                    </label>
                    <input
                      type="number"
                      name="advance"
                      required
                      value={formData.advance}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Duration
                    </label>
                    <input
                      type="text"
                      name="duration"
                      value={formData.duration}
                      onChange={handleChange}
                      placeholder="e.g. 2 weeks"
                      className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Progress (%)
                    </label>
                    <input
                      type="text"
                      name="projectProgress"
                      value={formData.projectProgress}
                      onChange={handleChange}
                      placeholder="e.g. 50"
                      className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Client
                    </label>
                    <select
                      name="clientId"
                      value={formData.clientId}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white"
                    >
                      <option value="">Select a client...</option>
                      {clients.map(client => (
                        <option key={client.id} value={client.id}>{client.name} ({client.email})</option>
                      ))}
                    </select>
                  </div>
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
                      <option value="">Select a category...</option>
                      {categories.map(category => (
                        <option key={category.id} value={category.id}>{category.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Project Status
                    </label>
                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white"
                    >
                      {Object.values(OrderStatus).map(status => (
                        <option key={status} value={status}>{status.charAt(0).toUpperCase() + status.slice(1)}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Payment Status
                    </label>
                    <select
                      name="paymentStatus"
                      value={formData.paymentStatus}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all dark:text-white"
                    >
                      {Object.values(PaymentStatus).map(status => (
                        <option key={status} value={status}>{status.charAt(0).toUpperCase() + status.slice(1)}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </form>
            </div>

            <div className="flex justify-end gap-3 p-6 border-t border-gray-100 dark:border-gray-800 shrink-0">
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
                form="order-form"
                disabled={isSubmitting}
                className="py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-sm transition-colors flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed min-w-[120px]"
              >
                {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : (editingId ? 'Update' : 'Create')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
