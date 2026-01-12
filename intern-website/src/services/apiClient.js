import axios from "axios";

const apiClient = axios.create({
  baseURL: "/api", // Vite proxy → http://localhost:5000
  timeout: 15000,
});

export default apiClient;
