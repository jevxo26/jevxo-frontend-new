import api from '../hooks/baseApi';

export interface Banner {
  id: string;
  photoUrl: string;
  order: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export const bannerApi = {
  // Get all banners
  getAllBanners: async () => {
    const response = await api.get('/banner');
    return response.data;
  },

  // Get a single banner by ID
  getBannerById: async (id: string) => {
    const response = await api.get(`/banner/${id}`);
    return response.data;
  },

  // Create a new banner
  createBanner: async (bannerData: any) => {
    const response = await api.post('/banner', bannerData);
    return response.data;
  },

  // Update a banner
  updateBanner: async (id: string, bannerData: any) => {
    const response = await api.patch(`/banner/${id}`, bannerData);
    return response.data;
  },

  // Delete a banner
  deleteBanner: async (id: string) => {
    const response = await api.delete(`/banner/${id}`);
    return response.data;
  }
};
