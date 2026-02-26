import "./ProjectCard.css";
type propTypes = {
  title: string;
  description: string;
  id: number;
  link: string;
  images?: string[];
};
const base = import.meta.env.BASE_URL;
const ProjectCard = ({ title, description, id, link, images }: propTypes) => {
  const isExternal = link.startsWith("http");
  const fallbackImages = [
    `project-images/${id}_1.jpg`,
    `project-images/${id}_2.jpg`,
  ];
  const normalizedImages =
    images && images.length > 0 ? images : fallbackImages;
  const [firstImage, secondImage] = normalizedImages;
  return (
    <a
      className="project-card project-card-link"
      href={link}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      <div className="project-image">
        {firstImage && (
          <img
            className="img img-one"
            src={`${base}${firstImage}`}
            alt={`${title} image 1`}
          />
        )}
        {secondImage && (
          <img
            className="img img-two"
            src={`${base}${secondImage}`}
            alt={`${title} image 2`}
          />
        )}
      </div>

      <div className="project-data">
        <div className="project-title">{title}</div>
        <div className="project-description">{description}</div>
      </div>
    </a>
  );
};

export default ProjectCard;
