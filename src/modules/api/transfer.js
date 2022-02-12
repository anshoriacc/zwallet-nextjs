import axios from "axios";

const config = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const getAllUser = (token, page) => {
  const URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/user?limit=5&sort=firstName%20ASC&page=${page}`;
  return axios.get(URL, config(token));
};

export const transfer = (token, body) => {
  const URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/transaction/transfer`;
  return axios.post(URL, body, config(token));
};
