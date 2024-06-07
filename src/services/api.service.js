import axios from "axios";
import { useContext } from "react";
import AppContext from "../context/AuthContext";

class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_API_BASE,
    });
    this.api.interceptors.request.use((config) => {
      const { token } = useContext(AppContext);
      if (token) {
        config.headers = {
          Authorization: `Bearer ${token}`,
        };
      }
      return config;
    });
  }
  async signUp(user) {
    return await this.api.post("/sign-up", user);
  }
  async login(user) {
    return await this.api.post("/login", user);
  }
}

export default new ApiService();
