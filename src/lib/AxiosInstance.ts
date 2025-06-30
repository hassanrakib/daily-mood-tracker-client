import axios from "axios";

// axios instance with base api & include cookies with every request
export const AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  withCredentials: true,
});