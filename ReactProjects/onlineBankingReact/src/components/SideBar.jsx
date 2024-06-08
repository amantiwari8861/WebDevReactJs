import { NavLink } from "react-router-dom";
import { useTheme } from "./ThemeContext";

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
  return (
    <aside style={styles}>
      <div className={`d-flex flex-column flex-shrink-0 p-3 ${theme === "dark" ? "text-bg-dark" : "text-bg-light"} ${theme === "dark" ? "text-light" : "text-dark"} `} style={{ height: "100vh" }}>
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto  text-decoration-none">
          <svg className="bi pe-none me-2" width="40" height="32">link1</svg>
          <span className="fs-4">Sidebar</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
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
            <a href="/bvbjv" >
            </a>
            <NavLink to={"/login"} className={({ isActive }) =>
              `nav-link ${theme === "dark" ? "text-light" : "text-dark"} ${isActive ? "active" : ""}`
            }>
              <i className="fa fa-tachometer" aria-hidden="true" />{"  "}Customers</NavLink>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <a href="#" className="d-flex align-items-center  text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
            <strong>mdo</strong>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
            <li><a className="dropdown-item" href="#">New project...</a></li>
            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>

      </div>
    </aside>
  )
}

export default SideBar
