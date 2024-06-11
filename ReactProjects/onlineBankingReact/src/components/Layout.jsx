import SideBar from './SideBar.jsx'
import Main from './Main.jsx'
import NavBar from './NavBar.jsx'
const Layout = () => {
  return (
    <>
      <NavBar />
      <div className="container-fluid p-0 mt-3">
        <div className="row gx-0 gy-0">
          <div className="col-md-2">
            <SideBar />
          </div>
          <div className="col-md-10">
            <Main />
          </div>
        </div>
      </div>
    </>

  )
}

export default Layout
