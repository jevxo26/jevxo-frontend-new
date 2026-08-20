import axios from 'axios';

// Get backend URL from environment or use proxy path
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';

// Setup axios instance
const api = axios.create({
  baseURL: `${API_URL}/package-category`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface PackageCategory {
  id: string;
  name: string;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export const packageCategoryApi = {
  getAll: async () => {
    const response = await api.get('/');
    return response.data;
  },

  getById: async (id: string) => {
    const response = await api.get(`/${id}`);
    return response.data;
  },

  create: async (data: Partial<PackageCategory>) => {
    const response = await api.post('/', data);
    return response.data;
  },

  update: async (id: string, data: Partial<PackageCategory>) => {
    const response = await api.patch(`/${id}`, data);
    return response.data;
  },

  delete: async (id: string) => {
    const response = await api.delete(`/${id}`);
    return response.data;
  },
};
