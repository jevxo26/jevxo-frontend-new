import api from '../hooks/baseApi';

export interface Casestudy {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  photoUrl: string;
  categoryId?: string;
  category?: {
    id: string;
    title: string;
  };
  projectLink?: string;
  challenge?: string;
  solution?: string;
  technologies?: string;
  order: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export const casestudiesApi = {
  // Get all casestudies
  getAllCasestudies: async () => {
    const response = await api.get('/casestudies');
    return response.data;
  },

  // Get a single casestudy by ID
  getCasestudyById: async (id: string) => {
    const response = await api.get(`/casestudies/${id}`);
    return response.data;
  },

  // Create a new casestudy
  createCasestudy: async (casestudyData: any) => {
    const response = await api.post('/casestudies', casestudyData);
    return response.data;
  },

  // Update a casestudy
  updateCasestudy: async (id: string, casestudyData: any) => {
    const response = await api.patch(`/casestudies/${id}`, casestudyData);
    return response.data;
  },

  // Delete a casestudy
  deleteCasestudy: async (id: string) => {
    const response = await api.delete(`/casestudies/${id}`);
    return response.data;
  }
};
