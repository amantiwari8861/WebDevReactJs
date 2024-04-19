import logo from './logo.svg'
const GreetAman = () => {
  return (
    <div>
      <p><span>
        <b>Hello Aman Sir! &nbsp;
          {3 * 5 > 10 ? "greater" : "smaller"}
        </b>
        <img src={logo} alt="" height="50px" width="50px"/>
      </span>
      </p>
    </div>
  )
}

export default GreetAman
