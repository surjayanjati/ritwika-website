import { portfolioModel } from "../models/portfolioModel.js";

export function getPortfolio(_request, response) {
  response.json(portfolioModel.getPortfolio());
}

export function getAllProjects(_request, response) {
  response.json(portfolioModel.getProjects());
}

export function getProjectBySlug(request, response) {
  const project = portfolioModel.getProjectBySlug(request.params.slug);

  if (!project) {
    response.status(404).json({ message: "Project not found" });
    return;
  }

  response.json(project);
}
