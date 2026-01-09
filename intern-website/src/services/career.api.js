import { API_BASE_URL } from "../config/api";

export const submitCareer = async (formData) => {
  const res = await fetch(`${API_BASE_URL}/api/careers`, {
    method: "POST",
    body: formData, // DO NOT set headers
  });

  return res.json();
};
