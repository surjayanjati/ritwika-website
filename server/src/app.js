import cors from "cors";
import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { env } from "./config/env.js";
import { healthRouter } from "./routes/healthRoutes.js";
import { portfolioRouter } from "./routes/portfolioRoutes.js";

export function createApp() {
  const app = express();
  const currentDirectory = path.dirname(fileURLToPath(import.meta.url));
  const clientDistPath = path.resolve(currentDirectory, "../../client/dist");
  const clientIndexPath = path.join(clientDistPath, "index.html");

  app.use(cors({ origin: env.corsOrigin }));
  app.use(express.json());

  app.use("/api/health", healthRouter);
  app.use("/api/portfolio", portfolioRouter);

  if (fs.existsSync(clientIndexPath)) {
    app.use(express.static(clientDistPath));

    app.get("*", (request, response) => {
      response.sendFile(clientIndexPath);
    });
  }

  return app;
}
