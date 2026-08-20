import baseApi from '@/hooks/baseApi';

export interface ContactData {
  id?: string;
  fullName: string;
  email: string;
  whatsapp?: string;
  productDetails: string;
  budget: string;
  createdAt?: string;
}

export const contactApi = {
  createContact: async (data: ContactData) => {
    const response = await baseApi.post('/contact', data);
    return response.data;
  },

  getAllContacts: async () => {
    const response = await baseApi.get('/contact');
    return response.data;
  },

  deleteContact: async (id: string) => {
    const response = await baseApi.delete(`/contact/${id}`);
    return response.data;
  }
};
