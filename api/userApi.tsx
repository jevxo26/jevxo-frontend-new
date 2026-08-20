import api from '../hooks/baseApi';

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  picture?: string;
  department?: any;
  designation?: any;
  createdAt: string;
  updatedAt: string;
}

export const userApi = {
  // Get all users
  getAllUsers: async () => {
    const response = await api.get('/users');
    return response.data;
  },

  // Get a single user by ID
  getUserById: async (id: string) => {
    const response = await api.get(`/users/${id}`);
    return response.data;
  },

  // Create a new user
  createUser: async (userData: any) => {
    const response = await api.post('/users', userData);
    return response.data;
  },

  // Update a user
  updateUser: async (id: string, userData: any) => {
    const response = await api.patch(`/users/${id}`, userData);
    return response.data;
  },

  // Delete a user
  deleteUser: async (id: string) => {
    const response = await api.delete(`/users/${id}`);
    return response.data;
  }
};
