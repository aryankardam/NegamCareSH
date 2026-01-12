import apiClient from "./apiClient";

export const submitCareerApplication = async (formData) => {
  const { data } = await apiClient.post("/careers", formData);
  return data;
};
