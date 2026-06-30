import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function tabClass({ isActive }) {
  return "dash-tab" + (isActive ? " dash-tab-active" : "");
}

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="container">
      <p className="eyebrow">Index Card 06 — Dashboard</p>
      <h1>Welcome to Student Dashboard</h1>
      <p>Signed in as {user?.username}. Use the tabs below to manage your account.</p>

      <div className="dashboard-layout">
        <nav className="dash-tabs">
          <NavLink to="/dashboard/profile" className={tabClass}>
            Profile
          </NavLink>
          <NavLink to="/dashboard/my-courses" className={tabClass}>
            My Courses
          </NavLink>
          <NavLink to="/dashboard/settings" className={tabClass}>
            Settings
          </NavLink>
        </nav>

        <div className="dash-panel card">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
