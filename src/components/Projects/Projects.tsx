import projects from "../../assets/projects.json";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./Projects.css";
type Project = { id: number; title: string; description: string; link: string };
const projectsData = projects as Project[];
const Projects = () => {
  console.log(projects);
  return (
    <div className="projects-list">
      {projectsData.map((proj) => (
        <ProjectCard
          key={proj.id}
          title={proj.title}
          description={proj.description}
          id={proj.id}
          link={proj.link}
        />
      ))}
    </div>
  );
};

export default Projects;
