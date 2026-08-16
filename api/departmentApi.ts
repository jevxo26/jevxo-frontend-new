import api from '../hooks/baseApi';

export interface Department {
  id: string;
  name: string;
  description?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export const departmentApi = {
  // Get all departments
  getAllDepartments: async () => {
    const response = await api.get('/department');
    return response.data;
  },

  // Get a single department by ID
  getDepartmentById: async (id: string) => {
    const response = await api.get(`/department/${id}`);
    return response.data;
  },

  // Create a new department
  createDepartment: async (departmentData: any) => {
    const response = await api.post('/department', departmentData);
    return response.data;
  },

  // Update a department
  updateDepartment: async (id: string, departmentData: any) => {
    const response = await api.patch(`/department/${id}`, departmentData);
    return response.data;
  },

  // Delete a department
  deleteDepartment: async (id: string) => {
    const response = await api.delete(`/department/${id}`);
    return response.data;
  }
};
