import { createSignal } from "solid-js";
import type { TelegramUpdate } from "../../domain";
import type { FetchUpdatesUseCaseRequest } from "../../application";
import { useTelegramContext } from "../providers";

export function useFetchUpdates() {
   const { fetchUpdatesUseCase } = useTelegramContext();
   const [loading, setLoading] = createSignal(false);
   const [error, setError] = createSignal<Error | null>(null);
   const [updates, setUpdates] = createSignal<TelegramUpdate[]>([]);

   const fetchUpdates = async (request: FetchUpdatesUseCaseRequest = {}) => {
      setLoading(true);
      setError(null);
      try {
         const response = await fetchUpdatesUseCase.execute(request);
         setUpdates(response.updates);
         return response.updates;
      } catch (err) {
         setError(err instanceof Error ? err : new Error("Unknown error"));
         throw err;
      } finally {
         setLoading(false);
      }
   };

   return { fetchUpdates, loading, error, updates };
}
