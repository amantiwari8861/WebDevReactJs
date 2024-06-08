import logo_dark from '../assets/logo_dark.png'
import logo_light from '../assets/logo_light.png'
import DarkLight from './DarkLight'
import { useTheme } from './ThemeContext';
const NavBar = () => {
  const { theme } = useTheme();

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={theme} style={{position:"fixed",top:"0px",width:"100%",zIndex:"5"}}>
        <div className="container-fluid gx-3">
          <a className="navbar-brand" href="#">
            <img src={theme==="dark"?logo_dark:logo_light} alt="" height={"40px"} width={"60px"} /> Unicorn bank 2.0 </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-1 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About Us</a>
              </li>
            </ul>
            <div className="btn btn-success">login</div>
            <div className="btn btn-primary ms-2">signup</div>
            <DarkLight/>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
