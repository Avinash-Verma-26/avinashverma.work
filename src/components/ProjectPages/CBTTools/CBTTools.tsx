import { NavLink, Outlet } from "react-router-dom";

const CBTTools = () => {
  return (
    <div className="pt-5 w-full">
      <div className="text-xl text-brand">CBT Tools</div>
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
