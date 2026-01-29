import "./Home.css";
import headshot from "../../assets/headshot.jpeg";
import { useState } from "react";
const Home = () => {
  const [rotate, setRotate] = useState<boolean>(false);
  return (
    <div className="home-section">
      <img
        className="headshot"
        onMouseOver={() => setRotate((prev) => !prev)}
        onMouseOut={() => setRotate((prev) => !prev)}
        src={headshot}
        alt="Profile picture"
      />
      <div className="blurb">
        <p>
          <span className={rotate ? "rotate drop-cap" : "drop-cap"}>a</span>{" "}
          design technologist and BIM specialist working at the intersection of{" "}
          <b>architecture</b>, <b>computation</b>, and <b>software</b>. I build
          tools that help teams design faster and work smarter, from Revit/Rhino
          automation and workflow add-ins to data dashboards that turn messy
          project information into clear insights. Outside of the office, I
          document what I’m learning as I level up in web development and
          product-building. This site is my home base: a place to share
          projects, experiments, and ideas that blend design craft with code.
        </p>
      </div>
    </div>
  );
};

export default Home;
