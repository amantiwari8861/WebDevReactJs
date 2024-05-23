import SideBar from './SideBar.jsx'
import Main from './sub/Main.jsx'
import NavBar from './sub/NavBar.jsx'
import Footer from './sub/Footer.jsx'

const Layout = () => {
  return (
    <>
      <NavBar/>
      <SideBar/>
      <Main/>
      <Footer/>
    </>
  )
}

export default Layout
