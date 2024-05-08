// import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import Main from "./Main"
import Aside from "./Aside"

const Layout = () => {
  return (
    <>
      <Header />
      after
      {/* <Outlet/> */}
      {/* <Main/> */}
      <div className="row p-0">
        <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 col-xxl-9 p-0">
          <Main />
        </div>
        <div className="col-3 p-0">
          <Aside />
        </div>
      </div>
      before
      <Footer />
    </>
  )
}
export default Layout