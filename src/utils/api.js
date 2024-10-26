import axios from "axios";
const API_BASE_URL = "https://api.coingecko.com/api/v3";
      


export const API = {
  getData: async (endpoint) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/${endpoint}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  // getCryptoDataById: async (endpoint) => {
  //   try {
  //     const response = await axios.get(`${API_BASE_URL}/${endpoint}`);
  //     return response.data;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },
 
};
