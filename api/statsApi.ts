import baseApi from '@/hooks/baseApi';

export interface StatsData {
  projectDeliveries: number;
  inHouseExperts: number;
  satisfiedClients: number;
  businessPartners: number;
}

export const statsApi = {
  getStats: async (): Promise<StatsData> => {
    const response = await baseApi.get('/stats');
    return response.data;
  },
};
