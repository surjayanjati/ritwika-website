import { portfolioData } from "../../../../server/src/data/portfolioData.js";

export function GET() {
  return Response.json(portfolioData.projects);
}
