import { portfolioData } from "../../../../server/src/data/portfolioData.js";

export function GET(request) {
  const pathname = new URL(request.url).pathname;
  const slug = pathname.split("/").filter(Boolean).at(-1);
  const project = portfolioData.projects.find((entry) => entry.slug === slug);

  if (!project) {
    return Response.json({ message: "Project not found" }, { status: 404 });
  }

  return Response.json(project);
}
