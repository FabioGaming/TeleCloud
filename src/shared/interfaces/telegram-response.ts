export interface TelegramResponse<T> {
   ok: boolean;
   result: T;
   description?: string;
   error_code?: number;
}
