import { Outlet } from "react-router-dom"
import NavBar from "./components/NavBar"

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <div style={{ marginTop: "9vh" }}>
        <Outlet />
      </div>
    </div>
  )
}

export default LandingPage
