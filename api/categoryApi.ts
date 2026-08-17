import api from '../hooks/baseApi';

export interface Category {
  id: string;
  name: string;
  icon?: string;
  order: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export const categoryApi = {
  // Get all categories
  getAllCategories: async () => {
    const response = await api.get('/category');
    return response.data;
  },

  // Get a single category by ID
  getCategoryById: async (id: string) => {
    const response = await api.get(`/category/${id}`);
    return response.data;
  },

  // Create a new category
  createCategory: async (categoryData: Partial<Category>) => {
    const response = await api.post('/category', categoryData);
    return response.data;
  },

  // Update a category
  updateCategory: async (id: string, categoryData: Partial<Category>) => {
    const response = await api.patch(`/category/${id}`, categoryData);
    return response.data;
  },

  // Delete a category
  deleteCategory: async (id: string) => {
    const response = await api.delete(`/category/${id}`);
    return response.data;
  }
};
