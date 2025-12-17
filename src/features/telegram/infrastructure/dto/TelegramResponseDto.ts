export interface TelegramResponseDto<T> {
   ok: boolean;
   result: T;
   description?: string;
   error_code?: number;
}
