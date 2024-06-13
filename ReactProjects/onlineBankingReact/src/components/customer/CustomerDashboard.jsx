import { Outlet } from "react-router-dom"

const CustomerDashboard = () => {
  return (
    <div>
      <h1>customer dashboard</h1>
      <Outlet/>
    </div>
  )
}

export default CustomerDashboard
