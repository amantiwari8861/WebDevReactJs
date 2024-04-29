import { useEffect, useState } from "react";

const UseEffectHook = () => {

    let [inputValue,setInput]=useState();
    let [count,setCount]=useState(0);
    let [evenNo,setEven]=useState(0);
    useEffect(()=>{
        console.log("use Effect ran "+inputValue);
    // }) //if we don't give any dependency then it will run every rendering of this component (if there is 50 variable then if any variable's value is changed then this hook will run on every re-render)
    // },[])// if u provided empty array then it will run only once when component is loaded 
    },[count,evenNo]);
return (
    <div>
        {"The Name is :"+inputValue} {"  count:"+count}{"  even:"+evenNo}<br />
        Name : <input type="text" onChange={(e)=>setInput(e.target.value)} />
        <button onClick={()=>setCount(count+1)}>+</button>
        <button onClick={()=>setEven(evenNo+2)}>increment even</button>
    </div>
  )
}
//H.w create a component in where there is 6 reaction btn like facebook and increment reaction count on clicking
export default UseEffectHook
