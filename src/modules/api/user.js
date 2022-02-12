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

export const getAllUser = (token, page) => {
  const URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/user?limit=4&sort=firstName%20ASC&page=${page}`;
  return axios.get(URL, config(token));
};

export const checkPin = (token, pin) => {
  const URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/pin?pin=${pin}`;
  return axios.get(URL, config(token));
};
