import axios from "axios";
import { BASE_URL } from "../variables";

export const endpoints = {
  APIMethods: {
    POST: "POST",
    GET: "GET",
    PUT: "PUT",
    DELETE: "DELETE",
  },
  ENDPOINTS: {
    search: "/search/photos",
  },
};

export const request = ({
  url,
  method = endpoints.APIMethods.GET,
  data,
  params,
}) =>
  new Promise((resolve, reject) => {
    let config = {
      url: BASE_URL + url,
      method: method,
      params: params ? params : null,
      data: data ? data : null,
    };
    config.params == null && delete config.params;
    config.data == null && delete config.data;

    axios(config)
      .then((response) => resolve(response))
      .catch(({ response }) => reject(response));
  });