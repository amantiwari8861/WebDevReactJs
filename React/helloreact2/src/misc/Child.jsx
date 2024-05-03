import React from 'react'

const Child = ({pGreet}) => {
  console.log(pGreet);
  return (
    <div>
        <h1>Child Component</h1>
        {/* <button onClick={pGreet}>Greet me </button> */}
        <button onClick={()=>pGreet("Aman")}>Greet me </button>
    </div>
  )
}

export default Child
