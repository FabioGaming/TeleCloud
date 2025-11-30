import type { AxiosInstance } from "axios";
import axios from "axios";

class HttpClient {
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
}
