import { Router } from "express";
import {
  getAllProjects,
  getPortfolio,
  getProjectBySlug,
} from "../controllers/portfolioController.js";

export const portfolioRouter = Router();

portfolioRouter.get("/", getPortfolio);
portfolioRouter.get("/projects", getAllProjects);
portfolioRouter.get("/projects/:slug", getProjectBySlug);
