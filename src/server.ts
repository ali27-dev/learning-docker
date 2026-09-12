// src/server.ts
import { serve } from "@hono/node-server";
import app from "./index.ts";

serve({ fetch: app.fetch, port: 3001 });
console.log("Running on http://localhost:3001");
