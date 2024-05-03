// const C = (prop) => 
// {
//   const {owner,greet}=prop;
//   return (
//     <div>
//     <h1>Hii i am component 3 </h1> 
//     {/* <h1>ownername: {prop.owner}</h1>
//       <h1>greet: {prop.greet}</h1> */}
//     <h1>ownername: {owner}</h1>
//       <h1>greet: {greet}</h1>
//     </div>
//   )
// }
// export default C

import { useContext } from "react"
import { OwnerContext } from "./A"

const C = () => {
    let obj=useContext(OwnerContext)
    console.log(obj);
  return (
    <div>
      <h1>OwnerName :{obj.ownerName}</h1>
      <h1>Designation :{obj.designation}</h1>
    </div>
  )
}
export default C
