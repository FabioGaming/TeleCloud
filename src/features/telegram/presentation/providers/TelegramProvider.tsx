import { createContext, createMemo, useContext, type JSX } from "solid-js";
import { FetchUpdatesUseCase, SendDocumentUseCase, SendMessageUseCase } from "../../application";
import type { ITelegramClient } from "../../domain";
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
   const value = createMemo(() => {
      const client: ITelegramClient = new TelegramHttpClient(props.token);
      return {
         sendMessageUseCase: new SendMessageUseCase(client),
         fetchUpdatesUseCase: new FetchUpdatesUseCase(client),
         sendDocumentUseCase: new SendDocumentUseCase(client),
      };
   });

   return <TelegramContext.Provider value={value()}>{props.children}</TelegramContext.Provider>;
}

export function useTelegramContext(): TelegramContextValue {
   const context = useContext(TelegramContext);
   if (!context) {
      throw new Error("useTelegramContext must be used within a TelegramProvider");
   }
   return context;
}
