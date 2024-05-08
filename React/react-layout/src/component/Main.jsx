import { Outlet, useNavigate } from "react-router-dom"

const Main = () => {
  const nav=useNavigate();
  return (
    <main style={{backgroundColor:"greenyellow"}} >
      <h1>hello i am main</h1>
      <h2 onClick={()=>{nav("services/react")}}>check our new react course</h2>
      <div className="row g-0">
        <div className="col-12 p-0 m-0">
          <Outlet/>
        </div>
      </div>
    </main>
  )
}

export default Main
