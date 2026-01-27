import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="navbar">
      <NavLink
        className={({ isActive }) => (isActive ? "current-page" : "")}
        to={"/"}
      >
        avinash-verma
      </NavLink>
      <div className="dot">·</div>
      <NavLink
        className={({ isActive }) => (isActive ? "current-page" : "")}
        to={"/about"}
      >
        about
      </NavLink>
      <div className="dot">·</div>
      <NavLink
        className={({ isActive }) => (isActive ? "current-page" : "")}
        to={"/projects"}
      >
        projects
      </NavLink>
    </div>
  );
};

export default Navigation;
