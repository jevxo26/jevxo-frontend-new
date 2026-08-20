import api from '../hooks/baseApi';

export interface PackageCategory {
  id: string;
  name: string;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export const packageCategoryApi = {
  getAll: async () => {
    const response = await api.get('/package-category');
    return response.data;
  },

  getById: async (id: string) => {
    const response = await api.get(`/package-category/${id}`);
    return response.data;
  },

  create: async (data: Partial<PackageCategory>) => {
    const response = await api.post('/package-category', data);
    return response.data;
  },

  update: async (id: string, data: Partial<PackageCategory>) => {
    const response = await api.patch(`/package-category/${id}`, data);
    return response.data;
  },

  delete: async (id: string) => {
    const response = await api.delete(`/package-category/${id}`);
    return response.data;
  },
};
