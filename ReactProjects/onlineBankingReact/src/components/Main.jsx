import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Main = () => {
  return (
    <div className="container-fluid p-0" style={{ marginTop: "10vh"}}>

<Outlet/>

      <div className="row gx-0 gy-0">
        <div className="col-md-12">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Main
