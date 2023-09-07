import axios from "axios";

export const covidAPI = axios.create({
    baseURL: "https://api.covidtracking.com/v1",
});
