import axios from "axios";
import BASE_URL from "../constant/url";

export const getMethod = (path, set) => {
  axios.get(`${BASE_URL}${path}`).then((response) => {
    set(response.data);
  });
};

export const getMethodValue = (path, set, setBool, booleanResp) => {
  axios.get(`${BASE_URL}${path}`).then((response) => {
    set(response.data.value);
    setBool(booleanResp);
  });
};

export const getAsync = async (path, set, element, setBool, booleanResp) => {
  const result = await axios.get(`${BASE_URL}${path}${element}`);
  set(result.data.value);
  setBool(booleanResp);
};

export const searchFunction = (
  event,
  path,
  set,
  setBool,
  booleanResp,
  element
) => {
  event.preventDefault();

  axios.get(`${BASE_URL}${path}${element}`).then((response) => {
    setBool(booleanResp);
    set(response.data.result.slice(0, 10)); // tratando os resultado
  });
};
