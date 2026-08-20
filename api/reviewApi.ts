import api from '../hooks/baseApi';

export interface Review {
  id: string;
  clientId: string;
  client?: {
    id: string;
    name: string;
    email: string;
    picture?: string;
    role?: string;
  };
  thumbUrl?: string;
  videoUrl?: string;
  reviewText: string;
  rating: number;
  createdAt: string;
  updatedAt: string;
}

export const reviewApi = {
  getAllReviews: async () => {
    const response = await api.get('/review');
    return response.data;
  },

  getReviewById: async (id: string) => {
    const response = await api.get(`/review/${id}`);
    return response.data;
  },

  createReview: async (data: Partial<Review>) => {
    const response = await api.post('/review', data);
    return response.data;
  },

  updateReview: async (id: string, data: Partial<Review>) => {
    const response = await api.patch(`/review/${id}`, data);
    return response.data;
  },

  deleteReview: async (id: string) => {
    const response = await api.delete(`/review/${id}`);
    return response.data;
  }
};
