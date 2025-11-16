import axios from "axios";

// Base URL of your backend API
const API_BASE = "http://localhost:8080/api/v1/properties";

export const getAllProperties = async () => {
  const response = await axios.get(API_BASE);
  return response.data;
};

export const getPropertyById = async (id) => {
  const response = await axios.get(`${API_BASE}/${id}`);
  return response.data;
};

export const createProperty = async (property) => {
  const response = await axios.post(API_BASE, property);
  return response.data;
};

export const updateProperty = async (id, property) => {
  const response = await axios.put(`${API_BASE}/${id}`, property);
  return response.data;
};

export const deleteProperty = async (id) => {
  await axios.delete(`${API_BASE}/${id}`);
};
