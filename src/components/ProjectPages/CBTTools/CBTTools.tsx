import { Link, NavLink, Outlet } from "react-router-dom";

const CBTTools = () => {
  return (
    <div className="pt-5 w-full">
      <div className="flex items-center gap-3 font-secondary text-xs text-zinc-400">
        <Link to="/" className="hover:text-zinc-700 transition-colors duration-200">
          ← home
        </Link>
        <span>/</span>
        <Link to="/projects" className="hover:text-zinc-700 transition-colors duration-200">
          projects
        </Link>
      </div>
      <div className="text-xl text-brand mt-2">CBT Tools</div>
      <nav className="flex flex-row py-2.5 gap-2.5">
        <NavLink
          className={({ isActive }) => (isActive ? "text-brand!" : "")}
          to={""}
          end
        >
          Overview
        </NavLink>
        |
        <NavLink
          className={({ isActive }) => (isActive ? "text-brand!" : "")}
          to={"visionUI"}
        >
          Vision UI
        </NavLink>
        |
        <NavLink
          className={({ isActive }) => (isActive ? "text-brand!" : "")}
          to={"revitPlugin"}
        >
          Revit Plugin
        </NavLink>
        |
        <NavLink
          className={({ isActive }) => (isActive ? "text-brand!" : "")}
          to={"database"}
        >
          Database
        </NavLink>
      </nav>

      <Outlet />
    </div>
  );
};

export default CBTTools;
