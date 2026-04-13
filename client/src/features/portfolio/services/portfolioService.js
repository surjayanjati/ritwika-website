import { apiConfig } from "../../../common/config/api";

export async function fetchPortfolio() {
  const response = await fetch(`${apiConfig.baseUrl}/portfolio`);

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json();
}
