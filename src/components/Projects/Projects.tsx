import ProjectCard from "../ProjectCard/ProjectCard";
import "./Projects.css";
import { useEffect, useState } from "react";

type Project = {
  id: number;
  title: string;
  description: string;
  link: string;
  images?: string[];
  role?: string | null;
  year?: string | null;
  tags?: string[];
  tools?: string[];
  highlights?: string[];
};

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const loadProjects = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetch("/api/projects", {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Request failed: ${response.status}`);
        }

        const payload = (await response.json()) as { projects?: Project[] };
        setProjects(payload.projects ?? []);
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") return;
        setError("Unable to load projects.");
      } finally {
        setIsLoading(false);
      }
    };

    loadProjects();
    return () => controller.abort();
  }, []);

  if (isLoading) {
    return <div className="projects-list">Loading projects...</div>;
  }

  if (error) {
    return <div className="projects-list">{error}</div>;
  }

  if (!projects.length) {
    return <div className="projects-list">No projects found.</div>;
  }

  return (
    <div className="projects-list">
      {projects.map((proj) => (
        <ProjectCard
          key={proj.id}
          title={proj.title}
          description={proj.description}
          id={proj.id}
          link={proj.link}
          images={proj.images}
        />
      ))}
    </div>
  );
};

export default Projects;
