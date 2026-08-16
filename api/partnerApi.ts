import api from '../hooks/baseApi';

export interface Partner {
  id: string;
  name: string;
  logo: string;
  order: number;
  url?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export const partnerApi = {
  // Get all partners
  getAllPartners: async () => {
    const response = await api.get('/partners');
    return response.data;
  },

  // Get a single partner by ID
  getPartnerById: async (id: string) => {
    const response = await api.get(`/partners/${id}`);
    return response.data;
  },

  // Create a new partner
  createPartner: async (partnerData: any) => {
    const response = await api.post('/partners', partnerData);
    return response.data;
  },

  // Update a partner
  updatePartner: async (id: string, partnerData: any) => {
    const response = await api.patch(`/partners/${id}`, partnerData);
    return response.data;
  },

  // Delete a partner
  deletePartner: async (id: string) => {
    const response = await api.delete(`/partners/${id}`);
    return response.data;
  }
};
