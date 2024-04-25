// import './App.css';
// import phone from './phone.jpeg'
// let isLoggedIn=true;
// function App() {

import { useState } from "react"

//   return (
//     <>
//       {/* <h1 className="mystyle">hello in react  {10 * 56}</h1> */}
//       {/* <img src="https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/s/r/r/12-5g-op12-5g-oneplus-original-imagxgt7uwerszh8.jpeg?q=70&crop=false" height="200px" width="200px" /> */}
//       {/* <img src={phone} alt="" /> */}
//       {/* <label htmlFor=""></label> */}
//       {/* <div style={{"backgroundColor":"red","fontSize":"2rem"}}>hello</div> */}
//       {isLoggedIn?<SuccessBtn/>:<ErrorBtn/>}  {/* conditional rendering */}
//     </>
//   );
// }
// setTimeout(() => {
//   isLoggedIn=false;
// }, 4000);
// export default App;

const SuccessBtn = () => {
  return (<button>logged in succesfully!</button>)
}
const ErrorBtn = () => {
  return (<button>Kindle log in first</button>)
}

function App() {
  let [isLoggedIn,setLoginStatus]=useState(false);  //use State Hook

  (function changeState() 
  {
    setTimeout(()=>{
      setLoginStatus(true);
    },4000)
  })();   //self calling function

  return (
    <>
      {console.log(isLoggedIn)}
      {console.log(setLoginStatus)}
      {isLoggedIn?<SuccessBtn/>:<ErrorBtn/>} 
    </>
  );
}
export default App;
