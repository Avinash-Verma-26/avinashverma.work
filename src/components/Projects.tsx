import projects from "../assets/projects.json";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="w-full flex flex-col gap-4 pt-5">
      <div className="grid grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
