import { NavLink, Outlet } from "react-router-dom";
import "./CBTTools.css";

const CBTTools = () => {
  return (
    <div className="cbt-tools-container">
      <div className="project-page-title">CBT Tools</div>
      <nav className="secondary-nav">
        <NavLink
          className={({ isActive }) => (isActive ? "current-subview" : "")}
          to={""}
          end
        >
          Overview
        </NavLink>
        |
        <NavLink
          className={({ isActive }) => (isActive ? "current-subview" : "")}
          to={"visionUI"}
        >
          Vision UI
        </NavLink>
        |
        <NavLink
          className={({ isActive }) => (isActive ? "current-subview" : "")}
          to={"revitPlugin"}
        >
          Revit Plugin
        </NavLink>
        |
        <NavLink
          className={({ isActive }) => (isActive ? "current-subview" : "")}
          to={"backendArch"}
        >
          Backend
        </NavLink>
      </nav>
      <div className="project-subview">
        <Outlet />
      </div>
    </div>
  );
};

export default CBTTools;
