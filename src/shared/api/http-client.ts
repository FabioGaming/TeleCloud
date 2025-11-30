import type { AxiosInstance } from "axios";
import axios from "axios";

class HttpClient {
   private instance: AxiosInstance;

   constructor(baseURL: string) {
      this.instance = axios.create({
         baseURL: baseURL,
         timeout: 20000,
      });
   }
}
