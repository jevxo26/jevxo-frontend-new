import api from '../hooks/baseApi';

export const authApi = {
  // Login user
  login: async (credentials: any) => {
    const response = await api.post('/auth/login', credentials);
    return response.data;
  },
};
