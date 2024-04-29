import { useState } from "react";

const UseState = () => {
  
    let [inputValue,setInput]=useState();//to declare or initialize the variables
    //state=attribute=variable=data=field
  return (
    <div>
        {"The value is :"+inputValue} <br />
        <button onClick={setInput("Aman Tiwari")}>change input value</button>        
        {/* <button onClick={()=>setInput("Aman Tiwari")}>change input value</button>         */}
    </div>
  )
}

export default UseState
