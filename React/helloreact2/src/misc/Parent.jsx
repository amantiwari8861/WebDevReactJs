import React from 'react'
import Child from './Child';

const Parent = () => {

const greet=(name)=>console.log("Good Evening "+name);

  return (
    <div>
        <h1>Parent component</h1>
      <Child pGreet={greet}/>
    </div>
  )
}

export default Parent

