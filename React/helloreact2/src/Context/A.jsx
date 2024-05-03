// import B from "./B";
// const A = () => {
//   let ownerName="Aman";
//   return (
//     <div>
//       <h1>Hii i am component 1</h1>
//       <B  data={ownerName}/>
//     </div>
//   )
// }
// export default A

import { createContext } from "react"
import B from "./B"

const OwnerContext=createContext()
const A = () => {
  let ownerName="Aman";
  let designation="Developer";

  return (
    <div>
      <OwnerContext.Provider value={{ownerName,designation}}>
        <B/>
      </OwnerContext.Provider>
    </div>
  )
}

export {A,OwnerContext}


// H.W A -> B -> C -> D