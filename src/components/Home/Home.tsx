import "./Home.css";
import headshot from "../../assets/headshot.jpeg";
import { useState } from "react";
import { Link } from "react-router-dom";
import projects from "../../assets/projects.json";
import ProjectCard from "../ProjectCard";

const Home = () => {
  const [rotate, setRotate] = useState(false);

  return (
    <div className="w-full flex flex-col gap-12 pt-8 md:pt-14">

      {/* Hero */}
      <div className="flex flex-col sm:flex-row-reverse gap-8 sm:items-end sm:justify-between">
        <img
          className="headshot"
          src={headshot}
          alt="Profile picture"
          onMouseOver={() => setRotate(true)}
          onMouseOut={() => setRotate(false)}
        />

        <div className="flex flex-col gap-4 flex-1 min-w-0">
          <div>
            <h1 className="font-main font-bold text-4xl sm:text-5xl text-zinc-800 leading-tight m-0">
              avinash verma
            </h1>
            <p className="font-secondary text-sm text-zinc-400 mt-1 tracking-wide m-0">
              design technologist · BIM specialist
            </p>
          </div>

          <p className="font-secondary text-sm text-zinc-600 leading-relaxed m-0">
            <span
              className={rotate ? "rotate drop-cap" : "drop-cap"}
              onMouseOver={() => setRotate(true)}
              onMouseOut={() => setRotate(false)}
            >
              a
            </span>{" "}
            design technologist and BIM specialist working at the intersection
            of <b>architecture</b>, <b>computation</b>, and <b>software</b>. I
            build tools that help teams design faster and work smarter — from
            Revit/Rhino automation and workflow add-ins to data dashboards that
            turn messy project information into clear insights. Outside of the
            office, I document what I&apos;m learning as I level up in web
            development and product-building.
          </p>

          <div className="flex items-center gap-3 pt-1">
            <Link
              to="/projects"
              className="font-secondary text-xs border border-brand text-brand! px-3 py-1 hover:bg-brand hover:text-white! transition-colors duration-200"
            >
              view projects →
            </Link>
            <Link
              to="/info"
              className="font-secondary text-xs border border-zinc-300 text-zinc-500 px-3 py-1 hover:border-zinc-500 hover:text-zinc-800! transition-colors duration-200"
            >
              info / cv
            </Link>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full border-t border-zinc-200" />

      {/* Selected Work */}
      <div className="flex flex-col gap-4 pb-4">
        <div className="flex items-center justify-between">
          <span className="font-main text-xs font-semibold text-zinc-400 tracking-widest uppercase">
            selected work
          </span>
          <Link
            to="/projects"
            className="font-secondary text-xs text-zinc-400 hover:text-brand transition-colors duration-200"
          >
            view all →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default Home;
