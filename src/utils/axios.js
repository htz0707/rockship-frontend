// api.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_APP_BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const setAuthToken = (token) => {
  if (token) {
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axiosInstance.defaults.headers.common["Authorization"];
  }
};

// Function to make a GET request
export const axiosGet = async (endpoint, data) => {
  try {
    const response = await axiosInstance.get(endpoint, data);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

// Function to make a POST request
export const axiosPost = async (endpoint, data) => {
  try {
    const response = await axiosInstance.post(endpoint, data);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

// Function to make a PUT request
export const axiosPut = async (endpoint, data) => {
  try {
    const response = await axiosInstance.put(endpoint, data);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

// Function to make a DELETE request
export const axiosDelete = async (endpoint, data) => {
  try {
    const response = await axiosInstance.delete(endpoint, data);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
