import { Link } from "react-router-dom";
import projects from "../assets/projects.json";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="w-full flex flex-col gap-4 pt-5">
      <div className="flex items-center justify-between">
        <Link
          to="/"
          className="font-secondary text-xs text-zinc-400 hover:text-zinc-700 transition-colors duration-200"
        >
          ← home
        </Link>
        <Link
          to="/info"
          className="font-secondary text-xs text-zinc-400 hover:text-zinc-700 transition-colors duration-200"
        >
          info / cv →
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
