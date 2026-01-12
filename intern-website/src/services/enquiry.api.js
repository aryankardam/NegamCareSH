import apiClient from "./apiClient";

export const submitEnquiry = async (payload) => {
  const { data } = await apiClient.post("/enquiry", payload);
  return data;
};
