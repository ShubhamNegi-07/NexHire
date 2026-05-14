import axiosInstance from "../lib/axios";

export const sessionApi = {
  // 1. Create Session mein data aur token dono pass honge
  createSession: async ({ data, token }) => {
    const response = await axiosInstance.post("/sessions", data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  },
