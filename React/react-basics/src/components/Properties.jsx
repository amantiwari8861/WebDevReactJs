
const Properties = () => {
  return (
    <>
    <SubComponent pname="oneplus 12" price={10000}/>
    <SubComponent pname="oneplus 13" price={20000}/>
    <SubComponent pname="oneplus 14" price={30000}/>
    </>
  )
}

export default Properties

let SubComponent=(myObj)=>{
return (
  <>
  {console.log(myObj)}
    <span style={{"color":'green'}}>{myObj.pname}</span>
    <span style={{"color":'red'}}>{myObj.price}</span>
    <br />
   
  </>
  )
};