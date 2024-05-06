import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Services = () => {
    const params=useParams();
  return (
    <>
      We Provides all these services
      <h4>Welcome &nbsp;{params.services} to UI courses</h4>
        <br /><br />
        <h4> Just Launched...</h4>
        <Link to="/services/angular">
          <li>Angular</li>
        </Link>
        <Link to="./services/react">
          <li>React</li>
        </Link>
        <Link to="./services/vue">
          <li>Vue</li>
        </Link>
        <Link to="./services/springboot">
          <li>spring boot</li>
        </Link>
    </>
  )
}

export default Services
