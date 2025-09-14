import axios from 'axios';

export const API_URL = "http://localhost:5454";
export const DEPLOYED_URL = "https://zosh-bazza";
// change api

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});