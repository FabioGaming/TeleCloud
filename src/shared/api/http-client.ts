import type { AxiosInstance, AxiosRequestConfig } from "axios";
import axios from "axios";

export class HttpClient {
   private instance: AxiosInstance;

   constructor(baseURL: string) {
      this.instance = axios.create({
         baseURL: baseURL,
         timeout: 20000,
      });

      this.instance.interceptors.response.use(
         (res) => res,
         async (error) => {
            if (!error.config._retry) {
               error.config._retry = true;
               return this.instance(error.config);
            }
            return Promise.reject(error);
         },
      );
   }

   setToken(token: string) {
      this.instance.defaults.baseURL = `https://api.telegram.org/bot${token}/`;
   }

   async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
      const response = await this.instance.get<T>(url, config);
      return response.data;
   }

   async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
      const response = await this.instance.post<T>(url, data, config);
      return response.data;
   }
}
