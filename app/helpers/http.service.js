/* eslint-disable consistent-return */
import axios from "axios";
import CONFIG from "app/helpers/config.js";

const REQUEST = (config) => {
  const createObject = {
    baseURL: CONFIG.API.url,
  };
  const HTTP = axios.create(createObject);

  // for REQUEST
  HTTP.interceptors.request.use((request) => {
    request.url = {};
    request.headers = {};
    // URL
    request.url = request.baseURL + config.url;
    request.method = config.method;
    request.data = config.data;

    return request;
  });

  // for RESPONSE
  HTTP.interceptors.response.use(
    (response) => {
      if (response.status === 200 || response.status === 201) {
        if (config.callback) config.callback(response);
        else return response;
      }
    },
    (error) => {
      if (
        error?.response?.status === 400 ||
        error?.response?.status === 404 ||
        error?.response?.status === 412 ||
        error?.response?.status === 500 ||
        error?.response?.status === 422 ||
        error?.response?.status === 428 ||
        error?.response?.status === 403 ||
        error?.response?.status === 406 ||
        error?.response?.status.toString().charAt(0) === "5"
      ) {
        return (
          error?.response || {
            data: { status: false, message: "Something went wrong", data: {} },
          }
        );
      }
      else{
        console.log({error})
      }
    }
  );

  return HTTP();
};

export default REQUEST;
