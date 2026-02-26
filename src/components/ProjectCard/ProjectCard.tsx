import "./ProjectCard.css";
import { Link } from "react-router-dom";
type propTypes = {
  title: string;
  description: string;
  id: number;
  link: string;
};
const base = import.meta.env.BASE_URL;
const ProjectCard = ({ title, description, id, link }: propTypes) => {
  const isExternal = link.startsWith("http");
  const content = (
    <>
      <div className="project-image">
        <img
          className="img img-one"
          src={`${base}project-images/${id}_1.jpg`}
          alt={`Project ${id} image 1`}
        />
        <img
          className="img img-two"
          src={`${base}project-images/${id}_2.jpg`}
          alt={`Project ${id} image 2`}
        />
      </div>

      <div className="project-data">
        <div className="project-title">{title}</div>
        <div className="project-description">{description}</div>
      </div>
    </>
  );
  if (isExternal) {
    return (
      <a
        className="project-card project-card-link"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <Link className="project-card project-card-link" to={link}>
      {content}
    </Link>
  );
};

export default ProjectCard;
