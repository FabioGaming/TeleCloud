import { createContext, useContext, type JSX } from "solid-js";
import { FetchUpdatesUseCase, SendDocumentUseCase, SendMessageUseCase } from "../../application";
import type { TelegramClientPort } from "../../domain";
import { TelegramHttpClient } from "../../infrastructure";

interface TelegramContextValue {
   sendMessageUseCase: SendMessageUseCase;
   fetchUpdatesUseCase: FetchUpdatesUseCase;
   sendDocumentUseCase: SendDocumentUseCase;
}

const TelegramContext = createContext<TelegramContextValue>();

interface TelegramProviderProps {
   token: string;
   children: JSX.Element;
}

// Composition root: wires infrastructure to use cases
export function TelegramProvider(props: TelegramProviderProps) {
   const client: TelegramClientPort = new TelegramHttpClient(props.token);

   const value: TelegramContextValue = {
      sendMessageUseCase: new SendMessageUseCase(client),
      fetchUpdatesUseCase: new FetchUpdatesUseCase(client),
      sendDocumentUseCase: new SendDocumentUseCase(client),
   };

   return <TelegramContext.Provider value={value}>{props.children}</TelegramContext.Provider>;
}

export function useTelegramContext(): TelegramContextValue {
   const context = useContext(TelegramContext);
   if (!context) {
      throw new Error("useTelegramContext must be used within a TelegramProvider");
   }
   return context;
}
