import axios from "axios";

const config = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const transfer = (token, body) => {
  const URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/transaction/transfer`;
  return axios.post(URL, body, config(token));
};
