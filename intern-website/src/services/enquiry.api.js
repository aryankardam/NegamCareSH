import { API_BASE_URL } from "../config/api";

export const submitEnquiry = async (data) => {
  const res = await fetch(`${API_BASE_URL}/api/enquiry`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
};
