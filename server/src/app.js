import cors from "cors";
import express from "express";
import { env } from "./config/env.js";
import { healthRouter } from "./routes/healthRoutes.js";
import { portfolioRouter } from "./routes/portfolioRoutes.js";

export function createApp() {
  const app = express();

  app.use(cors({ origin: env.corsOrigin }));
  app.use(express.json());

  app.use("/api/health", healthRouter);
  app.use("/api/portfolio", portfolioRouter);

  return app;
}
