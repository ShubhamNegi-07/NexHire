import axiosInstance from "../lib/axios";

export const sessionApi = {
  // 1. Create Session mein data aur token dono pass honge
  createSession: async ({ data, token }) => {
    const response = await axiosInstance.post("/sessions", data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  },

  // 2. Active Sessions ke liye sirf token chahiye
  getActiveSessions: async (token) => {
    const response = await axiosInstance.get("/sessions/active", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  },

  // 3. My Recent Sessions
  getMyRecentSessions: async (token) => {
    const response = await axiosInstance.get("/sessions/my-recent", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  },