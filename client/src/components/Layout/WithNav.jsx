import { NavLink, Outlet } from "react-router-dom";
import Header from "../Header";

const With_nav = () => {
  return (
    <>
      {/* Header section */}
      <Header />

      {/* Navigation bar */}
      <nav className="flex justify-center gap-6 py-4 bg-green-700 text-white shadow-md">
     

        <NavLink
          to="/trip-planner"
          className={({ isActive }) =>
            `hover:text-yellow-300 ${isActive ? "font-bold underline" : ""}`
          }
        >
          🚗 AI Trip Planner
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `hover:text-yellow-300 ${isActive ? "font-bold underline" : ""}`
          }
        >
          Profile
        </NavLink>
      </nav>

      {/* Main content area */}
      <main className="min-h-screen bg-gray-50">
        <Outlet />
      </main>
    </>
  );
};

export default With_nav;
