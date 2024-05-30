import { useAuthStore } from "../../hooks/useAuthStore";

export const NavBar = () => {
  const { user, startLogout } = useAuthStore();
  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-4">
      <span className="navbar-brand">
        <i className="fa-solid fa-calendar-days"></i>
        &nbsp; {user.name}
      </span>

      <button onClick={startLogout} className="btn btn-outline-danger">
        <i className="fas fa-sign-out-alt"></i>
        <span className="mx-2">Log Out</span>
      </button>
    </div>
  );
};
