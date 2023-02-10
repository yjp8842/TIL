import axios from "axios";

export const instance = axios.create({
  baseURL: "https://i8a406.p.ssafy.io/api/",
  headers: {
    "Content-Type": "application/json",
  },
})

instance.interceptors.request.use(
  function (config) {
    // localStorage가 아니라 로그인할 때 
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    if (accessToken && refreshToken) {
      config.headers.common["Authorization"] = `${accessToken}`;
      config.headers.common["Refresh-Token"] = `${refreshToken}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);