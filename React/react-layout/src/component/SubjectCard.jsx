import { useParams } from "react-router-dom";
import './Services.module.css'
// import Angular from "./Angular";
import React from "react";

//lazy import (dynamic import)
const AngularComponent = React.lazy(() => import('./Angular'));
const SubjectCard = () => 
{
  const param=useParams();
  return (
    <div>
          {/* <h1 id="myhead" style={{backgroundColor:"aqua"}}>
            Inside {param.subject} {param.name}Details
            Price is:{param.subject==="react" ? 22000:""}
            </h1> */}
            <h1 style={{textAlign:"center"}}>
            {/* {param.subject==="angular"?<Angular/>:`${param?.name || ""} chooses ${param.subject} Details`} */}
            {param.subject==="angular"?<AngularComponent/>:`${param?.name || ""} chooses ${param.subject} Details`}
            </h1>
    </div>
  )
}

export default SubjectCard
