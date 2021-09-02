import axios from "axios";
import { BASE_URL } from "./URL";

export const list = () => {
  axios.get(`${BASE_URL}?limit=10&offset=0`).then((resp) => {
    let poke = resp.data.results;
    console.log(poke);
  });
};
