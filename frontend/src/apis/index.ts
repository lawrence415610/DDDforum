import axios from "axios";
import { RegistrationInput } from "../types";

const baseUrl = "http://localhost:3000";
axios.defaults.baseURL = baseUrl;

export const api = {
  register: (input: RegistrationInput) => {
    return axios.post("/users/new", input);
  },
};
