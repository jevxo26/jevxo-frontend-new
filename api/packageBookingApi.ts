import api from '../hooks/baseApi';

export const packageBookingApi = {
  getAllBookings: async () => {
    const response = await api.get('/package-booking');
    return response.data;
  },

  getBookingById: async (id: string) => {
    const response = await api.get(`/package-booking/${id}`);
    return response.data;
  },

  createBooking: async (data: { name: string; userEmail: string; companyName: string; companyEmail: string; billingCycle: string; packageId: string }) => {
    const response = await api.post('/package-booking', data);
    return response.data;
  },

  updateBooking: async (id: string, data: Partial<{ name: string; userEmail: string; companyName: string; companyEmail: string; billingCycle: string; packageId: string; status: string }>) => {
    const response = await api.patch(`/package-booking/${id}`, data);
    return response.data;
  },

  deleteBooking: async (id: string) => {
    const response = await api.delete(`/package-booking/${id}`);
    return response.data;
  }
};
