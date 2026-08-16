import api from '../hooks/baseApi';

export const packageApi = {
  getAllPackages: async () => {
    const response = await api.get('/package');
    return response.data;
  },

  getPackageById: async (id: string) => {
    const response = await api.get(`/package/${id}`);
    return response.data;
  },

  createPackage: async (data: { name: string; description: string; price: number; features: string[]; duration: string; isActive?: boolean }) => {
    const response = await api.post('/package', data);
    return response.data;
  },

  updatePackage: async (id: string, data: Partial<{ name: string; description: string; price: number; features: string[]; duration: string; isActive?: boolean }>) => {
    const response = await api.patch(`/package/${id}`, data);
    return response.data;
  },

  deletePackage: async (id: string) => {
    const response = await api.delete(`/package/${id}`);
    return response.data;
  }
};
