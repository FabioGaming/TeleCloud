// Domain layer - pure entities and ports (no external deps)
export * from "./domain";

// Application layer - use cases depending only on domain
export * from "./application";

// Presentation layer - SolidJS hooks and providers
export * from "./presentation";

// Note: Infrastructure layer is intentionally not exported directly.
// Access infrastructure via the TelegramProvider which wires it up.
