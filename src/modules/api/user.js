import axios from "axios";

const config = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const getDetailUser = (token, id) => {
  const URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/profile/${id}`;
  return axios.get(URL, config(token));
};

export const getAllUser = (body, token) => {
  const URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/register`;
  return axios.post(URL, body, config(token));
};
