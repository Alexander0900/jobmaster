//const BASE_URL = 'https://users-api-n343.onrender.com';
const BASE_URL = "http://localhost:3001";

export const ALL_USERS = `${BASE_URL}/api/users`;
export const DELETE_USERS = `${BASE_URL}/api/users/delete`;
export const UPDATE_USER = `${BASE_URL}/api/users/update`;
export const REGISTRATION = `${BASE_URL}/api/auth/signup`;
export const AUTHENTICATION = `${BASE_URL}/api/auth/signin`;
export const GET_ADS = `${BASE_URL}/api/ads`;
export const GET_MY_ADS = `${BASE_URL}/api/my-ads`;
export const CREATE_ADS = `${BASE_URL}/api/ads/create`;
export const DELETE_AD = `${BASE_URL}/api/ads/delete`;

export const ROLES = {
  ADMIN: "admin",
  USER: "user",
};
