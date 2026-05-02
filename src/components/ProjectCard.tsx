import { Link } from "react-router-dom";

type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  type: string;
  role: string;
  highlights: string[];
  tech: string[];
  featureTags?: string[];
  caseStudyUrl?: string;
  codeUrl?: string;
};

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const hasActions = project.caseStudyUrl || project.codeUrl;

  return (
    <article className="font-main border border-zinc-300 hover:border-brand transition-colors duration-200 flex flex-col gap-3 p-4 h-full">
      <div className="overflow-hidden aspect-video bg-zinc-100">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="flex flex-col gap-1.5 flex-1">
        <div className="font-secondary text-xs text-zinc-400">
          {project.type}
        </div>
        <h2 className="text-brand font-bold text-base leading-snug">
          {project.title}
        </h2>
        <p className="font-secondary text-sm text-zinc-600 leading-relaxed line-clamp-3">
          {project.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-1 pt-2 border-t border-zinc-200">
        {project.tech.map((tag) => (
          <span
            key={tag}
            className="font-secondary text-xs text-zinc-500 border border-zinc-200 px-1.5 py-0.5"
          >
            {tag}
          </span>
        ))}
      </div>

      {hasActions && (
        <div className="flex gap-2 pt-1">
          {project.caseStudyUrl && (
            project.caseStudyUrl.startsWith("http") ? (
              <a
                href={project.caseStudyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-secondary text-xs border border-brand text-brand! px-3 py-1 hover:bg-brand hover:text-white! transition-colors duration-200"
              >
                Visit project ↗
              </a>
            ) : (
              <Link
                to={project.caseStudyUrl}
                className="font-secondary text-xs border border-brand text-brand! px-3 py-1 hover:bg-brand hover:text-white! transition-colors duration-200"
              >
                Visit project
              </Link>
            )
          )}
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-secondary text-xs border border-zinc-300 text-zinc-500 px-3 py-1 hover:border-zinc-500 hover:text-zinc-800! transition-colors duration-200"
            >
              Code ↗
            </a>
          )}
        </div>
      )}
    </article>
  );
};

export default ProjectCard;
