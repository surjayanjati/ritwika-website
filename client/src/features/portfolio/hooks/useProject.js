import { useEffect, useState } from "react";
import { fetchProjectBySlug } from "../services/projectService";

export function useProject(slug) {
  const [project, setProject] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    if (!slug) {
      setStatus("error");
      return;
    }

    async function loadProject() {
      try {
        const data = await fetchProjectBySlug(slug);
        setProject(data);
        setStatus("ready");
      } catch (error) {
        console.error("Failed to load project", error);
        setStatus("error");
      }
    }

    loadProject();
  }, [slug]);

  return { project, status };
}
