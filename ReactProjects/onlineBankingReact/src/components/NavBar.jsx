import { NavLink } from 'react-router-dom';
import logo_dark from '../assets/logo_dark.png'
import logo_light from '../assets/logo_light.png'
import DarkLight from './DarkLight'
import { useTheme } from './ThemeContext';
const NavBar = () => {
  const { theme } = useTheme();
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={theme} style={{ position: "fixed", top: "0px", width: "100%", zIndex: "5" }}>
        <div className="container-fluid gx-3">
          <NavLink className="navbar-brand" to="/">
            <img src={theme === "dark" ? logo_dark : logo_light} alt="" height={"40px"} width={"60px"} /> Unicorn bank 2.0 </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-1 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </NavLink>
                <ul className="dropdown-menu">
                  <li><NavLink className="dropdown-item" to="/">Action</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/">Another action</NavLink></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><NavLink className="dropdown-item" to="/">Something else here</NavLink></li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">About Us</NavLink>
              </li>
            </ul>
            <NavLink to={"/login"} ><div className="btn btn-success">login</div></NavLink>
            <NavLink to={"/signup"} ><div className="btn btn-primary ms-2">signup</div></NavLink>
            <DarkLight />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
