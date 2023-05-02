import { setupServer } from "msw/node";
import { userHandlers } from "./userHandlers";
import { todoHandlers } from "./todoHandlers";

export const server = setupServer(...userHandlers, ...todoHandlers);
