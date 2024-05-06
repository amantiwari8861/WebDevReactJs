import { Outlet } from "react-router-dom"

const Main = () => {
  return (
    <main style={{backgroundColor:"greenyellow"}} >
      <h1>hello i am main</h1>
      <div className="row g-0">
        <div className="col-12 p-0 m-0">
          <Outlet/>
        </div>
      </div>
    </main>
  )
}

export default Main
