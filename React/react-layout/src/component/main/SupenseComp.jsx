// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// //  import Prodcuts from "./components/products/Products";
// import PageNotFound from "./components/PagenotFound/PageNotFound";
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
// } from "react-router-dom";
// import Home from "./components/Home/Home";

// const Prodcuts = React.lazy(() => import("./components/products/Products"));

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />}>
//       <Route path="/" element={<Home />} >
//       <Route path="prodcuts" element={
//           <React.Suspense fallback={<>...</>}>
//             <Prodcuts />
//           </React.Suspense>}
//       >
//       <Route path="*" element={<PageNotFound />} />
//     </Route>
//   )
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// import { Navigate } from "react-router-dom";

// const PrivateRoute = ({ Component }) => {
 
// const [isAuthenticated, setIsAuthenticated] = useState(false);

//  // Your authentication logic goes here...
 
//   return isAuthenticated ? <Component /> : <Navigate to="/login" />;
// };
// export default PrivateRoute;
// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import PrivateRoute from "./components/auth/PrivateRoute";
// import PageNotFound from "./components/PagenotFound/PageNotFound";
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
// } from "react-router-dom";
// import Home from "./components/Home/Home";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />}>
//       <Route path="/" element={<Home />} />
//       {/* Private route implementation  */}
//       <Route path="user" element={<PrivateRoute Component={User} />} />
//       <Route path="*" element={<PageNotFound />} />
//     </Route>
//   )
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import Menu from "./features/menu/Menu";
// import Cart from "./features/cart/Cart";
// import Orders from "./features/order/Orders";
// import Home from "./ui/Home";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/menu",
//     element: <Menu />,
//   },
//   {
//     path: "/cart",
//     element: <Cart />,
//   },
//   {
//     path: "/orders",
//     element: <Orders />,
//   },
// ]);

// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;