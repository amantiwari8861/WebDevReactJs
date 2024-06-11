import { NavLink } from "react-router-dom";
import { useTheme } from "./ThemeContext";
import { useEffect, useState } from "react";

const styles = {
  width: "16.66%",
  position: "fixed",
  left: "0px",
  height: "100vh",
  zIndex: "2",
  // display:"none",
  transition: "all 2s"
};
const SideBar = () => {
  const { theme } = useTheme();
  const [user,setUser] = useState();
  useEffect(() => {
    setUser(JSON.parse(sessionStorage.getItem("user")));
    console.log(user);
  },[])
  return (
    <aside style={styles}>
      <div className={`d-flex flex-column flex-shrink-0 p-3 ${theme === "dark" ? "text-bg-dark" : "text-bg-light"} ${theme === "dark" ? "text-light" : "text-dark"} `} style={{ height: "100vh" }}>
        <NavLink href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto  text-decoration-none">
          <svg className="bi pe-none me-2" width="40" height="32">link1</svg>
          <span className="fs-4">Sidebar</span>
        </NavLink>
        <ul className="nav nav-pills flex-column mb-auto mt-3">
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link ${theme === "dark" ? "text-light" : "text-dark"} ${isActive ? "active" : ""}`
              }
              aria-current="page"
            >
              <i className="fa fa-tachometer" aria-hidden="true" /> Home
            </NavLink>

          </li>
          <li>
            <NavLink to={"/about"} className={({ isActive }) =>
              `nav-link ${theme === "dark" ? "text-light" : "text-dark"} ${isActive ? "active" : ""}`
            }>
              <i className="fa fa-tachometer" aria-hidden="true" />{"  "}Dashboard</NavLink>
          </li>
          <li>

            <NavLink to={"/contactus"} className={({ isActive }) =>
              `nav-link ${theme === "dark" ? "text-light" : "text-dark"} ${isActive ? "active" : ""}`
            }>

              <i className="fa fa-tachometer" aria-hidden="true" />{"  "}Orders</NavLink>
          </li>
          <li>
            <NavLink to={"/services"} className={({ isActive }) =>
              `nav-link ${theme === "dark" ? "text-light" : "text-dark"} ${isActive ? "active" : ""}`
            }>
              <i className="fa fa-tachometer" aria-hidden="true" />{"  "}Products</NavLink>
          </li>
          <li>

            <NavLink to={"/admin/customers"} className={({ isActive }) =>
              `nav-link ${theme === "dark" ? "text-light" : "text-dark"} ${isActive ? "active" : ""}`
            }>
              <i className="fa fa-tachometer" aria-hidden="true" />{"  "}Customers</NavLink>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <NavLink to="/" className={`d-flex align-items-center ${theme === "dark" ? "text-light" : "text-dark"} text-decoration-none dropdown-toggle`} data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
            <strong>{user?.name || 'user'}</strong>
          </NavLink>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
            <li><NavLink className="dropdown-item" to="/">New project...</NavLink></li>
            <li><NavLink className="dropdown-item" to="/">Settings</NavLink></li>
            <li><NavLink className="dropdown-item" to="/">Profile</NavLink></li>
            <li><hr className="dropdown-divider" /></li>
            <li><NavLink className="dropdown-item" to="/">Sign out</NavLink></li>
          </ul>
        </div>

      </div>
    </aside>
  )
}

export default SideBar
