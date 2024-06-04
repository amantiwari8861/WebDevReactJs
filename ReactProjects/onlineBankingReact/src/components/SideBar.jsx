import { Link } from "react-router-dom";

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
  return (
    <aside style={styles} className="text-bg-dark">
      <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{ height: "100vh" }}>
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <svg className="bi pe-none me-2" width="40" height="32">link1</svg>
          <span className="fs-4">Sidebar</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link to={"/"} className="nav-link active" aria-current="page">
              <i className="fa fa-tachometer" aria-hidden="true" />{"  "}Home</Link>
          </li>
          <li>
            <Link to={"/about"} className="nav-link text-white">
              <i className="fa fa-tachometer" aria-hidden="true" />{"  "}Dashboard</Link>
          </li>
          <li>

            <Link to={"/contactus"} className="nav-link text-white">

              <i className="fa fa-tachometer" aria-hidden="true" />{"  "}Orders</Link>
          </li>
          <li>
            <Link to={"/services"} className="nav-link text-white">
              <i className="fa fa-tachometer" aria-hidden="true" />{"  "}Products</Link>
          </li>
          <li>
            <a href="/bvbjv" >
            </a>
            <Link to={"/"} className="nav-link text-white">
              <i className="fa fa-tachometer" aria-hidden="true" />{"  "}Customers</Link>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
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
