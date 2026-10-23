// src/server.ts
import { serve } from "@hono/node-server";
import app from "./index.ts";

serve({
  fetch: app.fetch,
  port: 3000, // Standard internal container port
  hostname: "0.0.0.0", // Allows outside traffic to connect
});

console.log("Running on http://localhost:3000");
