import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import axios, {InternalAxiosRequestConfig} from "axios";

axios.defaults.withCredentials = true;
axios.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (config.method === 'post') {
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    }
    return config;
  });


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
