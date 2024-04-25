import React from 'react'
import "./card.css"

let name="Aman";
let age=10;
const Card = () => {
  return (
    <>
        JSX fragment
        <h1>hello {name}   {2*5}</h1>
        <h1>hello Shivam </h1>
    
    {age>10?"Valid Age":"invalid Age"}


    </>
  )
}

export default Card
