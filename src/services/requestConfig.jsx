import axios from "axios";

//Requests for public users without token
export const publicRequest = axios.create({
  baseURL: "http://localhost:8001/",
});

//Requests for private users with token
export const userRequest = axios.create({
  baseURL: "http://localhost:8001/",
});
