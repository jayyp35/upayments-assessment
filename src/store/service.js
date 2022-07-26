import axios from "axios";
import { API_ENDPOINTS } from "../utils/apiEndpoints";

export const getProductsService = () => {
  return axios({
    method: "GET",
    url: API_ENDPOINTS.PRODUCTS.GET_PRODUCTS.url(),
  })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });
};
