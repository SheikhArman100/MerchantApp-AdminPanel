import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  accessToken: null,
  setAccessToken: (accessToken: string) => set({ accessToken: accessToken }),
}));
