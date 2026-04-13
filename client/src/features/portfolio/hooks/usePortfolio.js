import { useEffect, useState } from "react";
import { fetchPortfolio } from "../services/portfolioService";

export function usePortfolio() {
  const [portfolio, setPortfolio] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    async function loadPortfolio() {
      try {
        const data = await fetchPortfolio();
        setPortfolio(data);
        setStatus("ready");
      } catch (error) {
        console.error("Failed to load portfolio", error);
        setStatus("error");
      }
    }

    loadPortfolio();
  }, []);

  return { portfolio, status };
}
