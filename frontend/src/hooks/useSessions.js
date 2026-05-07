import { useMutation, useQuery } from "@tanstack/react-query";
import { useAuth } from "@clerk/clerk-react"; // 1. Clerk hook import karein
import toast from "react-hot-toast";
import { sessionApi } from "../api/sessions";

export const useCreateSession = () => {
  const { getToken } = useAuth(); // 2. getToken nikaalein

  return useMutation({
    mutationKey: ["createSession"],
    mutationFn: async (data) => {
      const token = await getToken(); // 3. Token hasil karein
      return sessionApi.createSession({ data, token }); // 4. Data aur Token bhejien
    },
    onSuccess: () => toast.success("Session created successfully!"),
    onError: (error) => toast.error(error.response?.data?.message || "Failed to create room"),
  });
};

export const useActiveSessions = () => {
  const { getToken } = useAuth();

  return useQuery({
    queryKey: ["activeSessions"],
    queryFn: async () => {
      const token = await getToken();
      return sessionApi.getActiveSessions(token);
    },
  });
};