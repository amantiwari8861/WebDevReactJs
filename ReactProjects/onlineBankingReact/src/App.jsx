// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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
import Signup from './components/customer/Signup'
import AdminDashboard from './components/admin/AdminDashboard'
import ManageEmp from './components/admin/ManageEmp'
import EmployeeDashboard from './components/employee/EmployeeDashboard'
import CustomerDashboard from './components/customer/CustomerDashboard'
import LandingPage from './LandingPage'

function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<LandingPage />} >
    //     <Route path='/web' element={<Layout />}>
    //       <Route path="/web/login" element={<Login />} />
    //       <Route path="/web/admin" element={<AllCustomersTable />} >
    //         <Route path="/web/admin/customers" element={<AllCustomersTable />} />
    //       </Route>
    //       <Route path="/web/about" element={<AboutUs />} />
    //       <Route path="/web/contactus" element={<ContactUs />} />
    //       <Route path="/web/services/:sname?" element={<Services />} />
    //     </Route>
    //   </Route>
    //   <Route path="/*" element={<NotFound />} />
    // </Routes>
    <Routes>
      <Route path="/" element={<LandingPage />}>
        <Route path="web" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="admin" element={<AdminDashboard />}>
            <Route path="manageemp" element={<ManageEmp />} />
            <Route path="employee" element={<EmployeeDashboard />}>
              <Route path="customers" element={<AllCustomersTable />} />
            </Route>
          </Route>
          <Route path="customer" element={<CustomerDashboard />}>
            <Route path="balance" element={<CustomerDashboard />} />
          </Route>
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="services/:sname?" element={<Services />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <LandingPage />,
//     children: [
//       {
//         path: "web",
//         element: <Layout />,
//         children: [
//           {
//             path: "login",
//             element: <Login />,
//           },
//           {
//             path: "admin",
//             element: <AllCustomersTable />,
//             children: [
//               {
//                 path: "customers",
//                 element: <AllCustomersTable />,
//               },
//             ],
//           },
//           {
//             path: "about",
//             element: <AboutUs />,
//           },
//           {
//             path: "contactus",
//             element: <ContactUs />,
//           },
//           {
//             path: "services/:sname?",
//             element: <Services />,
//           },
//         ],
//       },
//     ],
//   },
//   {
//     path: "*",
//     element: <NotFound />,
//   },
// ]);

// const AppRoutes = () => {
//   return <RouterProvider router={router} />;
// };

// export default AppRoutes;
