import api from '../hooks/baseApi';

export interface Designation {
  id: string;
  title: string;
  description?: string;
  level?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export const designationApi = {
  // Get all designations
  getAllDesignations: async () => {
    const response = await api.get('/designation');
    return response.data;
  },

  // Get a single designation by ID
  getDesignationById: async (id: string) => {
    const response = await api.get(`/designation/${id}`);
    return response.data;
  },

  // Create a new designation
  createDesignation: async (designationData: any) => {
    const response = await api.post('/designation', designationData);
    return response.data;
  },

  // Update a designation
  updateDesignation: async (id: string, designationData: any) => {
    const response = await api.patch(`/designation/${id}`, designationData);
    return response.data;
  },

  // Delete a designation
  deleteDesignation: async (id: string) => {
    const response = await api.delete(`/designation/${id}`);
    return response.data;
  }
};
