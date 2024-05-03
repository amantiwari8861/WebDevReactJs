// import C from "./C";

import C from "./C"

// const B = ({data}) => {
// // const B = (prop) => {
//     // let {data}=prop;
//   return (
//     <div>
//       <h1>Hii i am component 2</h1>
//       <C  owner={data} greet={"hello"}/>
//     </div>
//   )
// }

// export default B

const B = () => {
  return (
    <div>
      <C/>
    </div>
  )
}

export default B
