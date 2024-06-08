import './styles/App.css'
import Layout from './components/Layout'
import { Route, Routes } from 'react-router-dom'
import Home from './components/customer/Home'
import ContactUs from './components/customer/ContactUs'
import Services from './components/customer/Services'
import AboutUs from './components/customer/AboutUs'
import NotFound from './components/customer/NotFound'
import AllCustomersTable from './components/admin/AllCustomersTable'
import Login from './components/customer/Login'


function App() {
  return (

    <Routes>
      <Route path="/" element={<Layout />} >
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/admin" element={<AllCustomersTable/>} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/services/:sname?" element={<Services />} />
            <Route path="/*" element={<NotFound />} />
      </Route>
    </Routes>

  )
}

export default App
