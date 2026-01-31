import { logout } from "../utils/auth";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => {
        logout();
        window.location.href = "/login";
      }}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;