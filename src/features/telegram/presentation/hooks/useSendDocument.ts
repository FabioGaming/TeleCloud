import { createSignal } from "solid-js";
import type { TelegramMessage } from "../../domain";
import type { SendDocumentUseCaseRequest } from "../../application";
import { useTelegramContext } from "../providers";

export function useSendDocument() {
   const { sendDocumentUseCase } = useTelegramContext();
   const [loading, setLoading] = createSignal(false);
   const [error, setError] = createSignal<Error | null>(null);
   const [message, setMessage] = createSignal<TelegramMessage | null>(null);

   const sendDocument = async (request: SendDocumentUseCaseRequest) => {
      setLoading(true);
      setError(null);
      try {
         const response = await sendDocumentUseCase.execute(request);
         setMessage(response.message);
         return response.message;
      } catch (err) {
         setError(err instanceof Error ? err : new Error("Unknown error"));
         throw err;
      } finally {
         setLoading(false);
      }
   };

   return { sendDocument, loading, error, message };
}
