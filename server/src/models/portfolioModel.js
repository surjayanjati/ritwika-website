import { portfolioData } from "../data/portfolioData.js";

export const portfolioModel = {
  getPortfolio() {
    return portfolioData;
  },

  getProjects() {
    return portfolioData.projects;
  },

  getProjectBySlug(slug) {
    return portfolioData.projects.find((project) => project.slug === slug);
  },
};
