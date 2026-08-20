import api from '../hooks/baseApi';

export interface Blog {
  id: string;
  title: string;
  slug: string;
  coverImage?: string;
  excerpt?: string;
  content: string;
  author: string;
  createdAt: string;
  updatedAt: string;
}

export const blogApi = {
  getAllBlogs: async () => {
    const response = await api.get('/blog');
    return response.data;
  },

  getBlogById: async (id: string) => {
    const response = await api.get(`/blog/${id}`);
    return response.data;
  },

  createBlog: async (data: Partial<Blog>) => {
    const response = await api.post('/blog', data);
    return response.data;
  },

  updateBlog: async (id: string, data: Partial<Blog>) => {
    const response = await api.patch(`/blog/${id}`, data);
    return response.data;
  },

  deleteBlog: async (id: string) => {
    const response = await api.delete(`/blog/${id}`);
    return response.data;
  }
};
