// src/mocks/browser.js
import { setupWorker } from "msw";
import { userHandlers } from "./userHandlers";
import { todoHandlers } from "./todoHandlers";

// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...userHandlers, ...todoHandlers);
