import { createSignal } from "solid-js";
import type { TelegramMessage } from "../../domain";
import type { SendMessageUseCaseRequest } from "../../application";
import { useTelegramContext } from "../providers";

export function useSendMessage() {
   const { sendMessageUseCase } = useTelegramContext();
   const [loading, setLoading] = createSignal(false);
   const [error, setError] = createSignal<Error | null>(null);
   const [message, setMessage] = createSignal<TelegramMessage | null>(null);

   const sendMessage = async (request: SendMessageUseCaseRequest) => {
      setLoading(true);
      setError(null);
      try {
         const response = await sendMessageUseCase.execute(request);
         setMessage(response.message);
         return response.message;
      } catch (err) {
         setError(err instanceof Error ? err : new Error("Unknown error"));
         throw err;
      } finally {
         setLoading(false);
      }
   };

   return { sendMessage, loading, error, message };
}
