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

export const getCategoriesService = () => {
    return axios({
      method: "GET",
      url: API_ENDPOINTS.CATEGORIES.GET_CATEGORIES.url(),
    })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        return err.response;
      });
};

export const getProductDataService = (payload) => {
    return axios({
      method: "GET",
      url: API_ENDPOINTS.PRODUCTS.GET_PRODUCT.url(payload.payload),
    })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        return err.response;
      });
};

export const getCategoryService = (payload) => {
  return axios({
    method: "GET",
    url: API_ENDPOINTS.CATEGORIES.GET_CATEGORY.url(payload.payload),
  })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });
};


export const addProductService = (payload) => {
  return axios({
    method: "POST",
    url: API_ENDPOINTS.PRODUCTS.ADD_PRODUCT.url(payload.payload),
    data: payload.payload.data
  })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });
};

export const deleteProductService = (payload) => {
  return axios({
    method: "DELETE",
    url: API_ENDPOINTS.PRODUCTS.DELETE_PRODUCT.url(payload.payload)
  })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });
};