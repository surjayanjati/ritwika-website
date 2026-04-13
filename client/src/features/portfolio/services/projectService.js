import { apiConfig } from "../../../common/config/api";

export async function fetchProjectBySlug(slug) {
  const response = await fetch(`${apiConfig.baseUrl}/portfolio/projects/${slug}`);

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json();
}
