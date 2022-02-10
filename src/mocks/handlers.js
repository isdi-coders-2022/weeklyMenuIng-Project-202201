import { rest } from "msw";

export const handlers = [
  rest.post("/myrecipes", (request, response, context) => {}),
];
