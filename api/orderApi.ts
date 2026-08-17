import api from '../hooks/baseApi';
import { User } from './userApi';
import { Category } from './categoryApi';

export enum OrderStatus {
  ONBOARD = 'onboard',
  ONGOING = 'ongoing',
  DELIVERY = 'delivery',
  QA_TEST = 'qa test',
  DELIVERED = 'delivered',
}

export enum PaymentStatus {
  UNPAID = 'unpaid',
  PARTIAL = 'partial',
  PAID = 'paid',
}

export interface Order {
  id: string;
  projectName: string;
  budget: number;
  advance: number;
  paymentStatus: PaymentStatus;
  duration?: string;
  status: OrderStatus;
  projectProgress?: string;
  client?: User;
  category?: Category;
  createdAt: string;
  updatedAt: string;
}

export const orderApi = {
  // Get all orders
  getAllOrders: async () => {
    const response = await api.get('/orders');
    return response.data;
  },

  // Get a single order by ID
  getOrderById: async (id: string) => {
    const response = await api.get(`/orders/${id}`);
    return response.data;
  },

  // Create a new order
  createOrder: async (orderData: Partial<Order> & { clientId?: string, categoryId?: string }) => {
    const response = await api.post('/orders', orderData);
    return response.data;
  },

  // Update an order
  updateOrder: async (id: string, orderData: Partial<Order> & { clientId?: string, categoryId?: string }) => {
    const response = await api.patch(`/orders/${id}`, orderData);
    return response.data;
  },

  // Delete an order
  deleteOrder: async (id: string) => {
    const response = await api.delete(`/orders/${id}`);
    return response.data;
  }
};
