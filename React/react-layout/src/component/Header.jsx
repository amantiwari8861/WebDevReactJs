// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.bundle'

// const Header = () => {
//   return (
//     <header>
//       <Navbar expand="lg" classNameName="bg-body-tertiary">
//         <Container>
//           <Navbar.Brand href="/">Logo</Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav classNameName="me-auto">
//               <Nav.Link href="/">Home</Nav.Link>
//               <NavDropdown title="Services" id="basic-nav-dropdown">
//                 <NavDropdown.Item href="/services/react">React</NavDropdown.Item>
//                 <NavDropdown.Item href="./angular">Angular</NavDropdown.Item>
//                 <NavDropdown.Item href="/services/vue">Vue</NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item href="/services/springboot">Spring Boot</NavDropdown.Item>
//               </NavDropdown>
//               <Nav.Link href="/about">About us</Nav.Link>
//               <Nav.Link href="/contactus">Contact us</Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </header>
//   )
// }

// export default Header

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Logo</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/services/react">React</a></li>
                  <li><a className="dropdown-item" href="/services/angular">Angular</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/services/vue">Vue</a></li>
                  <li><a className="dropdown-item" href="/services/springboot">Spring Boot</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contactus">Contact us</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
