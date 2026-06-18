import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "/api",
  withCredentials: true,
});

axiosInstance.interceptors.request.use(async (config) => {
  try {
    const clerk = window.Clerk;
    if (clerk?.session) {
      const token = await clerk.session.getToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
  } catch {
    // Clerk not loaded yet
  }
  return config;
});
