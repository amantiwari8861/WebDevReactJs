import React from 'react'

const Aside = () => {
  return (
    <aside style={{backgroundColor:"aqua"}} className='d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block'>
      <nav>
        <ul>
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
          <li><a href="#">Link 3</a></li>
          <li><a href="#">Link 4</a></li>
        </ul>
      </nav>
    </aside>
  )
}

export default Aside
