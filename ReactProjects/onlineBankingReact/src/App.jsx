import './styles/App.css'
import Layout from './components/Layout'
import { Route, Routes } from 'react-router-dom'
import AboutUs from './components/main-containers/AboutUs'
import ContactUs from './components/main-containers/ContactUs'
import Services from './components/main-containers/Services'
import NotFound from './components/main-containers/NotFound'
import Home from './components/main-containers/Home'

function App() {
  return (

    <Routes>
      <Route path="/" element={<Layout />} >
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/services/:sname?" element={<Services />} />
            <Route path="/*" element={<NotFound />} />
      </Route>
    </Routes>

  )
}

export default App
