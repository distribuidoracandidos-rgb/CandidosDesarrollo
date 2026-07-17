import axios from "axios";

const API_URL = "https://script.google.com/macros/s/AKfycbxTy8tZLW8oXjWHfYfJyCbO2lSTH0keB7RawtWGR1it3ze2fZj2OTz0r0zSNr5gCQs/exec";

export async function getProducts() {
  const response = await axios.get(API_URL);
  return response.data;
}

export async function getCategories() {
  const response = await axios.get(API_URL + "?tipo=categorias");
  return response.data;
}
