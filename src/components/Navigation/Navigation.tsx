import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="w-full flex items-center justify-between border-2 border-brand px-5 py-3 font-main rounded-sm">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `text-xl sm:text-3xl font-semibold transition-colors duration-200 ${isActive ? "text-brand!" : "text-zinc-600! hover:text-brand!"}`
        }
      >
        avinash-verma
      </NavLink>

      <div className="flex items-center gap-3 text-base sm:text-xl text-zinc-500!">
        <NavLink
          to="/info"
          className={({ isActive }) =>
            `transition-colors duration-200 ${isActive ? "text-brand! font-semibold" : "hover:text-zinc-800!"}`
          }
        >
          info
        </NavLink>
        <span className="text-zinc-300! select-none">·</span>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `transition-colors duration-200 ${isActive ? "text-brand! font-semibold" : "hover:text-zinc-800!"}`
          }
        >
          projects
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
